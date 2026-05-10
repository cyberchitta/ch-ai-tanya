import path from 'path';
import { fileURLToPath } from 'url';
import ejsPlugin from '@11ty/eleventy-plugin-ejs';
import sgPlugin, { helpers as sgHelpers } from '@cyberchitta/supramental-gold/eleventy';

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
