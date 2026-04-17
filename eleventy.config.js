import ejsPlugin from '@11ty/eleventy-plugin-ejs';

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(ejsPlugin);

  eleventyConfig.addGlobalData('layout', 'base.ejs');

  eleventyConfig.addGlobalData('helpers', {
    byTitle: (arr) =>
      [...arr].sort((a, b) =>
        (a.data.title || a.fileSlug).localeCompare(b.data.title || b.fileSlug),
      ),
    byDateDesc: (arr) =>
      [...arr].sort((a, b) => (b.data.date || 0) - (a.data.date || 0)),
    yearMonth: (d) => {
      if (!d) return '';
      const date = d instanceof Date ? d : new Date(d);
      return isNaN(date) ? '' : date.toISOString().slice(0, 7);
    },
  });

  eleventyConfig.addTransform('rewriteMdLinks', function (content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith('.html')) return content;
    return content.replace(
      /(href=["'])(?!\w+:)([^"'#?]+?)\.md(#[^"']*)?(["'])/g,
      (_m, pre, path, hash, post) => `${pre}${path}.html${hash || ''}${post}`,
    );
  });

  return {
    dir: { input: '.', output: '_site', includes: '_includes', data: '_data' },
    markdownTemplateEngine: 'ejs',
    htmlTemplateEngine: 'ejs',
    templateFormats: ['md', 'ejs'],
  };
}
