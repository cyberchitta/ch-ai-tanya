# Lint Log

## Future implementation notes

**Bidirectional concept/finding link consistency** (2026-04-16): still unimplemented as of 2026-09-20. Rules 10–12 check finding↔finding `refs:` only; nothing verifies that every concept a finding names in `## Concepts` lists that finding under `## Instantiating findings`, and vice versa. Maintained by hand.

## 2026-07-07
- Lint run. 30 stale findings, 0 orphans (content), 2 broken-link reports (raw stubs), 0 fm/cites issues on real entries. See `bun run lint` output for full list. (Implemented: stale, orphans, broken links, frontmatter, cites-consistency 7-9. Semantic skipped. Drafts relaxed. Non-entry files excluded.)

## 2026-08-21
- Lint run. 32 stale, 0 orphans, 0 broken-link files, 0 fm issues, 0 cite issues, 0 ref issues, 0 inventory-drift issues. See script output for details. (Rules 1,2,5,6,7-12,13; drafts relaxed; semantic rules skipped.)

## 2026-09-20
- Lint run. 34 stale, 0 orphans, 0 broken-link files, 0 fm issues, 0 cite issues, 0 ref issues, 0 inventory-drift issues, 7 concept-less declared, 0 concept-less undeclared. See script output for details. (Rules 1,2,5,6,7-12,13,14; drafts relaxed except 14; semantic rules skipped.)

## 2026-09-24
- Lint run. 34 stale, 0 orphans, 0 broken-link files, 0 fm issues, 0 cite issues, 0 ref issues, 0 inventory-drift issues, 5 concept-less declared, 0 concept-less undeclared. See script output for details. (Rules 1,2,5,6,7-12,13,14; drafts relaxed except 14; semantic rules skipped.)
