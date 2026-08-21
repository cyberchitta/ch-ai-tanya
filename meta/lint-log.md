# Lint Log

## Future implementation notes

**Bidirectional link consistency** (2026-04-16): When lint checks are implemented, the broken-links check (schema rule 6) should verify that every concept referenced in a finding's `## Concepts` section lists that finding in its `## Instantiating findings` section, and vice versa. Currently maintained by hand.

## 2026-07-07
- Lint run. 30 stale findings, 0 orphans (content), 2 broken-link reports (raw stubs), 0 fm/cites issues on real entries. See `bun run lint` output for full list. (Implemented: stale, orphans, broken links, frontmatter, cites-consistency 7-9. Semantic skipped. Drafts relaxed. Non-entry files excluded.)

## 2026-08-21
- Lint run. 32 stale, 0 orphans, 0 broken-link files, 0 fm issues, 0 cite issues, 0 ref issues, 0 inventory-drift issues. See script output for details. (Rules 1,2,5,6,7-12,13; drafts relaxed; semantic rules skipped.)
