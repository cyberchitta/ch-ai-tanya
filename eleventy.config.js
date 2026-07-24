import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ejsPlugin from '@11ty/eleventy-plugin-ejs';
import sgPlugin, {
  helpers as sgHelpers,
  createCustomElementRenderer,
  createSectionTitleTransform,
} from '@cyberchitta/supramental-gold/eleventy';
import { buildWikiIndex, wikiRecentEvents } from './build/site-index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sgRoot = path.dirname(
  fileURLToPath(import.meta.resolve('@cyberchitta/supramental-gold/package.json')),
);
const sgEleventy = path.join(sgRoot, 'eleventy');
const includesDir = path.join(__dirname, '_includes');

export default function (eleventyConfig) {
  // Consumer `_includes` first so local files shadow SG defaults
  // (e.g. primitives/header adds the wiki's sub-site bar).
  eleventyConfig.addPlugin(ejsPlugin, { views: [includesDir, sgEleventy] });
  eleventyConfig.addPlugin(sgPlugin);

  eleventyConfig.addGlobalData('layout', 'layouts/base.ejs');
  eleventyConfig.addGlobalData('helpers', sgHelpers);

  // Derived data for element templates and the feed. Mutated in place on
  // eleventy.before so --serve rebuilds pick up new entries while the
  // renderer keeps its reference.
  const siteData = {
    wiki: buildWikiIndex(__dirname),
    recentEvents: wikiRecentEvents(__dirname),
    questions: JSON.parse(
      fs.readFileSync(path.join(__dirname, '_data', 'questions.json'), 'utf8'),
    ),
  };
  eleventyConfig.on('eleventy.before', () => {
    siteData.wiki = buildWikiIndex(__dirname);
  });
  eleventyConfig.addGlobalData('recentEvents', siteData.recentEvents);
  eleventyConfig.addGlobalData('wikiIndex', siteData.wiki);

  // Custom-element renderer — pages author `<showcase type="..." />` tags
  // in markdown; each type maps to a template under _includes/showcase/.
  const renderCustomElements = createCustomElementRenderer(
    {
      showcase: {
        'question-list': 'showcase/question-list.ejs',
        'recent-list': 'showcase/recent-list.ejs',
        'concept-map': 'showcase/concept-map.ejs',
        'concept-list': 'showcase/concept-list.ejs',
        'finding-list': 'showcase/finding-list.ejs',
        'thread-list': 'showcase/thread-list.ejs',
        'researcher-list': 'showcase/researcher-list.ejs',
        'source-list': 'showcase/source-list.ejs',
      },
    },
    includesDir,
    { data: siteData, helpers: sgHelpers },
  );
  eleventyConfig.addTransform('renderCustomElements', async function (content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith('.html')) return content;
    return await renderCustomElements(content);
  });

  // Ignore non-content directories
  eleventyConfig.ignores.add('design-handoff/**');
  eleventyConfig.ignores.add('build/**');
  eleventyConfig.ignores.add('cache/**');
  eleventyConfig.ignores.add('derived/**');
  eleventyConfig.ignores.add('meta/**');
  eleventyConfig.ignores.add('schema.md');
  eleventyConfig.ignores.add('CLAUDE.md');
  eleventyConfig.ignores.add('README.md');
  eleventyConfig.ignores.add('TODO.md');

  // Recognise canonical wiki H2s and rewrite them into SG section-title
  // shape. Authored markdown like `## Concepts` produces a plain
  // `<h2>Concepts</h2>`; this transform converts that to
  // `<h2 class="group-header">concepts</h2>` and classes the
  // immediately-following `<ul>` with `.backlink-list` (or
  // `.finding-list` for `## Findings`).
  const sectionTitleTransform = createSectionTitleTransform({
    Concepts: { listClass: 'backlink-list' },
    Sources: { listClass: 'backlink-list' },
    'Cross-references': { listClass: 'backlink-list' },
    'Cited in': { listClass: 'backlink-list' },
    Threads: { listClass: 'backlink-list' },
    Findings: { listClass: 'finding-list' },
    'Interpretive tensions': {},
    Definition: {},
    'Instantiating findings': { listClass: 'backlink-list' },
    'What this concept is not': {},
    'Scope note': {},
    Questions: {},
    Recent: {},
    Browse: { listClass: 'backlink-list' },
  });
  eleventyConfig.addTransform('sgSectionTitles', function (content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith('.html')) return content;
    return sectionTitleTransform(content);
  });

  eleventyConfig.addTransform('rewriteMdLinks', function (content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith('.html')) return content;
    return content.replace(
      /(href=["'])(?!\w+:)([^"'#?]+?)\.md(#[^"']*)?(["'])/g,
      (_m, pre, p, hash, post) => `${pre}${p}.html${hash || ''}${post}`,
    );
  });

  return {
    dir: { input: '.', output: '_site', includes: '_includes', data: '_data' },
    markdownTemplateEngine: 'ejs',
    htmlTemplateEngine: 'ejs',
    templateFormats: ['md', 'ejs'],
  };
}
