# Lint Log

## Future implementation notes

**Bidirectional link consistency** (2026-04-16): When lint checks are implemented, the broken-links check (schema rule 6) should verify that every concept referenced in a finding's `## Concepts` section lists that finding in its `## Instantiating findings` section, and vice versa. Currently maintained by hand.

## 2026-07-07
- Lint run. 30 stale findings, 0 orphans (content), 2 broken-link reports (raw stubs), 0 fm/cites issues on real entries. See `bun run lint` output for full list. (Implemented: stale, orphans, broken links, frontmatter, cites-consistency 7-9. Semantic skipped. Drafts relaxed. Non-entry files excluded.)
