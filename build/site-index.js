// Derived site index for custom-element templates.
//
// Element templates (`_includes/showcase/*.ejs`) render in an Eleventy
// transform, after the template phase — Eleventy collections are not
// available there. Following the main site's convention, they feed from
// a pre-built index of entry frontmatter instead. Rebuilt on every
// `eleventy.before`, so --serve rebuilds see new entries.

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import matter from 'gray-matter';

const WIKI_FOLDERS = {
  concepts: 'concept',
  findings: 'finding',
  threads: 'thread',
  researchers: 'researcher',
};

const dateStr = (d) => {
  if (!d) return null;
  if (d instanceof Date) return d.toISOString().slice(0, 10);
  return String(d);
};

function readEntries(dir, urlBase) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== '_index.md' && f !== 'index.md')
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(dir, f), 'utf8'));
      const slug = f.replace(/\.md$/, '');
      return {
        slug,
        url: `${urlBase}/${slug}.html`,
        title: data.title || slug,
        status: data.status || null,
        date: dateStr(data.date),
        models: data.models || [],
        blurb: data.blurb || null,
        affiliation: data.affiliation || null,
        authors: data.authors || [],
        venue: data.venue || null,
        findings: data.findings || [],
        type: data.type || null,
      };
    });
}

export function buildWikiIndex(root) {
  const index = {};
  for (const [folder, type] of Object.entries(WIKI_FOLDERS)) {
    index[`${type}s`] = readEntries(
      path.join(root, 'wiki', folder),
      `/wiki/${folder}`,
    );
  }
  index.sources = [];
  const rawRoot = path.join(root, 'raw');
  for (const kind of fs.readdirSync(rawRoot)) {
    const dir = path.join(rawRoot, kind);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const e of readEntries(dir, `/raw/${kind}`)) {
      if (!e.slug.startsWith('source-')) continue;
      index.sources.push({ ...e, kind });
    }
  }
  const byUrl = new Map();
  for (const arr of Object.values(index)) for (const e of arr) byUrl.set(e.url, e);
  index.byUrl = byUrl;
  return index;
}

// Wiki-entry history from git: filing events (file added) and status
// promotions (a commit whose diff sets `status: working|stable` on an
// existing entry). Needs full history — CI must clone with fetch-depth: 0,
// or this quietly sees only the latest commit.
export function wikiRecentEvents(root) {
  const opts = { cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 };
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
