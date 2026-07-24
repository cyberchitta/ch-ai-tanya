import path from 'path';
import { execSync } from 'node:child_process';
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

// Wiki-entry history from git: filing events (file added) and status
// promotions (a commit whose diff sets `status: working|stable` on an
// existing entry). Needs full history — CI must clone with fetch-depth: 0,
// or this quietly sees only the latest commit.
function wikiRecentEvents() {
  const opts = { cwd: __dirname, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 };
  const isEntry = (p) =>
    /^wiki\/(concepts|findings|threads|researchers)\/[^/]+\.md$/.test(p) &&
    !p.endsWith('_index.md');
  const events = [];
  try {
    const added = execSync(
      "git log --format='%x01%aI' --name-status --diff-filter=A -- 'wiki/*/*.md'",
      opts,
    );
    let date = null;
    const seenAdd = new Set();
    for (const line of added.split('\n')) {
      if (line.startsWith('\x01')) {
        date = line.slice(1).trim();
        continue;
      }
      const m = line.match(/^A\t(.+)$/);
      if (m && isEntry(m[1]) && !seenAdd.has(m[1])) {
        seenAdd.add(m[1]);
        events.push({ path: m[1], date, kind: 'added' });
      }
    }
    const promoted = execSync(
      "git log --format='%x01%aI' -p --unified=0 -G'^status: (working|stable)' -- 'wiki/*/*.md'",
      opts,
    );
    date = null;
    let file = null;
    let isNewFile = false;
    const seenPromo = new Set();
    for (const line of promoted.split('\n')) {
      if (line.startsWith('\x01')) {
        date = line.slice(1).trim();
        continue;
      }
      const d = line.match(/^diff --git a\/.+ b\/(.+)$/);
      if (d) {
        file = d[1];
        isNewFile = false;
        continue;
      }
      if (line.startsWith('new file mode')) {
        isNewFile = true;
        continue;
      }
      const s = line.match(/^\+status:\s*(working|stable)\s*$/);
      if (s && file && !isNewFile && isEntry(file) && !seenPromo.has(`${file}\x01${s[1]}`)) {
        seenPromo.add(`${file}\x01${s[1]}`);
        events.push({ path: file, date, kind: s[1] });
      }
    }
  } catch {
    return []; // not a git checkout (or git absent) — recency surfaces render empty
  }
  for (const e of events) e.url = `/${e.path.replace(/\.md$/, '.html')}`;
  events.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return events;
}

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
  eleventyConfig.addGlobalData('recentEvents', wikiRecentEvents());

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
