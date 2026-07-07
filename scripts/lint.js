#!/usr/bin/env bun
/**
 * ch-ai-tanya mechanical lint
 *
 * Covers (per schema.md and handoff-mechanical):
 * - 1. Stale findings (>12 months; report-only)
 * - 2. Orphan entries (wiki entries with no incoming internal links)
 * - 5. Broken internal links (to non-existent .md targets)
 * - 6. Frontmatter completeness (required fields per type)
 * - 7-9. cites: ↔ body ## Sources link consistency + nonexistent sources
 *
 * Skips (require semantic judgment):
 * - 3. Unsupported claims
 * - 4. Interpretive disagreements
 *
 * Draft entries have relaxed requirements (link checks, some frontmatter)
 * per schema "Draft-status conventions".
 *
 * Never auto-fixes. Reports to stdout. Appends dated summary to meta/lint-log.md.
 *
 * Usage: bun scripts/lint.js
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const META_LOG = path.join(ROOT, 'meta/lint-log.md');
const TODAY = '2026-07-07'; // per session date

const REQUIRED = {
  source: ['type', 'title', 'writers', 'authors', 'date', 'venue', 'url'],
  finding: ['type', 'title', 'writers', 'date', 'models', 'status'],
  concept: ['type', 'title', 'writers', 'status'],
  thread: ['type', 'title', 'writers', 'status'],
  researcher: ['type', 'title', 'writers', 'status'],
};

function walk(dir, results = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (['node_modules', '_site', 'cache', 'derived', '.github', '.claude'].includes(ent.name)) continue;
      walk(p, results);
    } else if (ent.name.endsWith('.md')) {
      results.push(p);
    }
  }
  return results;
}

function parseFrontmatter(text) {
  if (!text.startsWith('---\n')) return { data: {}, body: text };
  const end = text.indexOf('\n---', 3);
  if (end === -1) return { data: {}, body: text };
  const yamlBlock = text.slice(4, end);
  const body = text.slice(end + 4);
  const data = {};
  let currentKey = null;
  for (let rawLine of yamlBlock.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    if (line.startsWith('- ')) {
      if (currentKey && Array.isArray(data[currentKey])) {
        let v = line.slice(2).trim().replace(/^["']|["']$/g, '');
        data[currentKey].push(v);
      }
      continue;
    }
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (m) {
      currentKey = m[1];
      let val = m[2].trim();
      if (val === '' || val === '[]') {
        data[currentKey] = [];
      } else if (val.startsWith('[')) {
        data[currentKey] = val
          .replace(/^\[|\]$/g, '')
          .split(',')
          .map(s => s.trim().replace(/^["']|["']$/g, ''))
          .filter(Boolean);
      } else {
        data[currentKey] = val.replace(/^["']|["']$/g, '');
      }
    }
  }
  return { data, body };
}

function extractLinks(body) {
  // markdown [text](target)
  const re = /\[[^\]]+\]\(([^)]+?)\)/g;
  const out = [];
  let m;
  while ((m = re.exec(body))) {
    out.push(m[1].trim());
  }
  return out;
}

function isInternalLink(href) {
  if (!href) return false;
  if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return false;
  if (href.endsWith('.md') || href.includes('/wiki/') || href.includes('/raw/') || href.startsWith('../')) return true;
  return false;
}

function resolveTarget(fromFile, href) {
  // strip hash
  const clean = href.split('#')[0];
  if (!clean) return null;
  let target = path.resolve(path.dirname(fromFile), clean);
  // normalize extension expectations: links point at .md
  if (!target.endsWith('.md')) {
    // sometimes links are to /dir/slug without ext (for indexes) — skip those for file existence
    if (!clean.includes('.')) return null;
    target += '.md';
  }
  return target;
}

function getAllEntries() {
  const allMd = walk(ROOT);
  const entries = [];
  const sourceSlugToPath = new Map();

  for (const file of allMd) {
    const rel = path.relative(ROOT, file);
    // Only real content entries (skip indexes, meta docs, root mds, etc.)
    const isWikiEntry = rel.startsWith('wiki/') && !rel.includes('/_index.md') && !rel.endsWith('/index.md');
    const isSourceStub = rel.startsWith('raw/') && /source-.*\.md$/.test(rel) && !rel.includes('/_index');
    if (!isWikiEntry && !isSourceStub) continue;

    const content = fs.readFileSync(file, 'utf8');
    const { data, body } = parseFrontmatter(content);
    let type = data.type;
    if (!type) {
      if (isSourceStub) type = 'source';
      else if (rel.includes('/findings/')) type = 'finding';
      else if (rel.includes('/concepts/')) type = 'concept';
      else if (rel.includes('/threads/')) type = 'thread';
      else if (rel.includes('/researchers/')) type = 'researcher';
    }

    const entry = {
      file,
      rel,
      type,
      data,
      body,
      slug: path.basename(file, '.md'),
    };
    entries.push(entry);

    if (type === 'source') {
      sourceSlugToPath.set(entry.slug, file);
    }
  }
  return { entries, sourceSlugToPath };
}

function checkFrontmatter(entry) {
  const issues = [];
  const { data, type, rel } = entry;
  if (!type) {
    issues.push('missing or unknown type');
    return issues;
  }
  const req = REQUIRED[type] || [];
  for (const k of req) {
    const v = data[k];
    const missing = (v == null) ||
      (Array.isArray(v) && v.length === 0 && k !== 'cites') ||
      (typeof v === 'string' && v.trim() === '');
    if (missing) {
      // draft relaxations
      if (data.status === 'draft' && ['models'].includes(k)) continue; // models often added later
      issues.push(`missing ${k}`);
    }
  }
  if (type === 'finding' && data.cites && !Array.isArray(data.cites)) {
    issues.push('cites: must be list');
  }
  return issues;
}

function checkCitesConsistency(entry, sourceSlugToPath) {
  const issues = [];
  const { data, body, file, type } = entry;
  if (type !== 'finding') return issues;
  if (data.status === 'draft') return issues; // exempt per schema

  const declared = Array.isArray(data.cites) ? data.cites : [];
  if (declared.length === 0) return issues; // optional until used

  // extract source links from body
  const links = extractLinks(body);
  const linkedSources = new Set();
  for (const href of links) {
    if (href.includes('raw/') && href.includes('source-')) {
      // extract slug
      const m = href.match(/source-[-a-z0-9]+/i);
      if (m) linkedSources.add(m[0]);
    }
  }

  for (const c of declared) {
    if (!sourceSlugToPath.has(c)) {
      issues.push(`cites nonexistent source ${c}`);
      continue;
    }
    if (!linkedSources.has(c)) {
      issues.push(`cites:${c} but no body link to it`);
    }
  }
  for (const l of linkedSources) {
    if (!declared.includes(l)) {
      issues.push(`body links to ${l} but not in cites:`);
    }
  }
  return issues;
}

function checkBrokenLinks(entry, allFilesSet) {
  const issues = [];
  if (entry.data.status === 'draft') return issues; // relaxed

  const links = extractLinks(entry.body);
  for (const href of links) {
    if (!isInternalLink(href)) continue;
    const target = resolveTarget(entry.file, href);
    if (!target) continue;
    // only care about .md wiki/raw targets that should exist
    if (target.endsWith('.md') && !allFilesSet.has(target)) {
      // allow directory indexes like /wiki/concepts/ (no .md)
      if (href.endsWith('/') || !href.includes('.')) continue;
      issues.push(`broken link: ${href}`);
    }
  }
  return issues;
}

function computeOrphans(entries) {
  // Build in-degree for wiki entries (exclude raw for this pass)
  const inCount = new Map();
  const wikiEntries = entries.filter(e => e.type && e.type !== 'source');

  for (const e of wikiEntries) {
    inCount.set(e.file, 0);
  }

  for (const e of entries) {
    const links = extractLinks(e.body);
    for (const href of links) {
      if (!isInternalLink(href)) continue;
      const t = resolveTarget(e.file, href);
      if (t && inCount.has(t)) {
        inCount.set(t, (inCount.get(t) || 0) + 1);
      }
    }
  }

  const orphans = [];
  for (const [f, cnt] of inCount) {
    if (cnt === 0) {
      const ent = wikiEntries.find(x => x.file === f);
      if (ent && ent.data.status !== 'draft') { // drafts can be new
        orphans.push(ent.rel);
      }
    }
  }
  return orphans;
}

function isStaleFinding(entry) {
  if (entry.type !== 'finding' || !entry.data.date) return false;
  const d = entry.data.date;
  let dt;
  if (d instanceof Date) dt = d;
  else {
    const s = String(d).trim();
    // accept YYYY-MM or YYYY-MM-DD
    dt = new Date(s.length === 7 ? s + '-01' : s);
  }
  if (isNaN(dt.getTime())) return false;
  const now = new Date(TODAY);
  const ageMonths = (now.getFullYear() - dt.getFullYear()) * 12 + (now.getMonth() - dt.getMonth());
  return ageMonths >= 12;
}

function main() {
  const { entries, sourceSlugToPath } = getAllEntries();
  const allMdSet = new Set(entries.map(e => e.file));

  const report = {
    broken: [],
    frontmatter: [],
    cites: [],
    stale: [],
    orphans: [],
  };

  for (const e of entries) {
    // frontmatter
    const fmIssues = checkFrontmatter(e);
    if (fmIssues.length) {
      report.frontmatter.push({ rel: e.rel, issues: fmIssues });
    }

    // cites consistency
    const cIssues = checkCitesConsistency(e, sourceSlugToPath);
    if (cIssues.length) {
      report.cites.push({ rel: e.rel, issues: cIssues });
    }

    // broken links
    const bIssues = checkBrokenLinks(e, allMdSet);
    if (bIssues.length) {
      report.broken.push({ rel: e.rel, issues: bIssues });
    }

    if (isStaleFinding(e)) {
      report.stale.push(e.rel);
    }
  }

  report.orphans = computeOrphans(entries);

  // Print
  console.log(`LINT ${TODAY}`);
  console.log('Rules implemented: stale, orphan, broken-links, frontmatter, cites-consistency (7-9).');
  console.log('Skipped (semantic): unsupported-claims, interpretive-disagreements.');
  console.log('');

  let total = 0;
  function printSection(title, arr, key = 'issues') {
    if (!arr.length) return;
    console.log(`## ${title}`);
    for (const item of arr) {
      if (typeof item === 'string') {
        console.log(`- ${item}`);
      } else {
        console.log(`- ${item.rel}: ${item[key].join('; ')}`);
      }
      total++;
    }
    console.log('');
  }

  printSection('STALE FINDINGS (>12mo)', report.stale);
  printSection('ORPHANS (no inbound links)', report.orphans);
  printSection('BROKEN LINKS', report.broken);
  printSection('FRONTMATTER INCOMPLETE', report.frontmatter);
  printSection('CITES / LINK CONSISTENCY', report.cites);

  if (total === 0) {
    console.log('No mechanical issues found.');
  } else {
    console.log(`Total mechanical issues surfaced: ${total}`);
  }
  console.log('\n(Draft entries have relaxed checks. Full details logged to meta/lint-log.md.)');

  // Append summary to log (non-destructive)
  const dateHeader = `\n## ${TODAY}\n`;
  const summary = `- Lint run. ${report.stale.length} stale, ${report.orphans.length} orphans, ${report.broken.length} broken-link files, ${report.frontmatter.length} fm issues, ${report.cites.length} cite issues. See script output for details. (Rules 1,2,5,6,7-9; drafts relaxed; semantic rules skipped.)\n`;
  const logContent = fs.existsSync(META_LOG) ? fs.readFileSync(META_LOG, 'utf8') : '# Lint Log\n';
  if (!logContent.includes(`## ${TODAY}`)) {
    fs.appendFileSync(META_LOG, dateHeader + summary);
  }
  console.log('\nAppended summary to meta/lint-log.md');
}

main();
