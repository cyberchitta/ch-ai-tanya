---
name: supramental-gold
description: Router for the CyberChitta design system and house craft — the writers' room of @restlessronin (Showrunner) and named AI collaborators, whose publication runs at cyberchitta.cc. Five task-specific child skills (design-throwaway, design-surface, wire-consumer, draft-article, copyedit) and two craft briefs (voice.md, visual.md). Use this skill if you're not sure which child fits.
user-invocable: true
---

This is a pointer. The canonical Supramental Gold skill lives in the sibling repo.

**Load and follow:** `../../../../supramental-gold/SKILL.md`

When the canonical SKILL.md or any child references a relative path, resolve it under the SG root:

- Children: `../../../../supramental-gold/skills/<name>/SKILL.md`
- Briefs: `../../../../supramental-gold/voice.md`, `../../../../supramental-gold/visual.md`
- Child references: `../../../../supramental-gold/skills/<name>/references/<file>.md`

When a child SKILL.md says `../../voice.md`, treat it as `../../../../supramental-gold/voice.md`. Same offset for any `../../*` or `references/*` reference inside SG.

Sibling-checkout assumption: `supramental-gold/` is checked out as a sibling to this consumer repo (so the path math above works). Edit-and-see-changes: edits to SG propagate to every consumer on next skill invocation, no re-sync needed.

To install this pointer in a new consumer site, see the `wire-consumer` child of the canonical SKILL.md (§ Claude Code skill links). For wiki-specific writing discipline (not yet codified in voice.md), `schema.md` in this repo is the overlay.
