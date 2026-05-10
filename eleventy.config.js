import path from 'path';
import { fileURLToPath } from 'url';
import ejsPlugin from '@11ty/eleventy-plugin-ejs';
import sgPlugin, {
  helpers as sgHelpers,
  createSectionTitleTransform,
} from '@cyberchitta/supramental-gold/eleventy';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sgRoot = path.dirname(
  fileURLToPath(import.meta.resolve('@cyberchitta/supramental-gold/package.json')),
);
const sgEleventy = path.join(sgRoot, 'eleventy');

export default function (eleventyConfig) {
  // Expose SG's eleventy/ tree to EJS's include resolver.
  // Templates are addressed by their path under that root, e.g.
  // `<%- include('primitives/chrome') %>`. The directory structure
  // becomes the namespace — no risk of collision with consumer-local
  // `_includes/` names.
  eleventyConfig.addPlugin(ejsPlugin, { views: [sgEleventy] });
  eleventyConfig.addPlugin(sgPlugin);

  eleventyConfig.addGlobalData('layout', 'base.ejs');
  eleventyConfig.addGlobalData('helpers', sgHelpers);

  // Pull SG's compiled stylesheet into our own assets dir so the
  // <link> in base.ejs can be a relative URL during local dev.
  // When we tag SG and switch to jsDelivr, this passthrough goes away.
  eleventyConfig.addPassthroughCopy({
    [`${sgRoot}/dist/styles.css`]: 'assets/css/styles.css',
  });

  // Ignore non-content directories
  eleventyConfig.ignores.add('design-handoff/**');
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
