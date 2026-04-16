# Changelog

## v0.1 — 2026-04-16

Schema changes from v0, driven by drafting the first finding entry
(`finding-2025-concept-injection-introspection.md`).

**New: source entry type.** `raw/` now holds citation stubs (type: source)
with metadata and brief descriptions. Wiki entries cite via these stubs,
creating stable local anchors. Full copies stored alongside stubs only
when offline access matters.

**New: universal frontmatter.** `writers` (required) and `reviewers`
(optional) apply to all entry types. Pulled out of per-type specs to
avoid repetition and ensure consistent attribution.

**Clarified: `date` field.** Publication date of the primary source.
Earliest public version for preprint/journal pairs. Release date for
system cards.

**Clarified: `source` field.** Bare URL in frontmatter; full citation
with title in the body's Sources section.

**Clarified: `models` field.** Marketing names (what readers and papers
use). Optional `model-ids` field for precise identifiers.

**New: draft lint exemption.** Entries with `status: draft` are exempt
from link-completeness lint checks (orphan entries, unsupported claims).
Gaps are expected in drafts; lint flags them only after promotion to
`working`.

**Updated: linking conventions.** Added stub-based citation pattern.
Updated example to reflect actual vault content.

### v0.1 addendum — 2026-04-16

Driven by drafting the second finding
(`finding-2025-opus-4-spiritual-bliss-attractor.md`).

**New: interpretive tensions convention.** Findings may include a
`## Interpretive tensions` section for disagreements tied to that
specific finding. Promote to standalone open-question files only when
a tension spans multiple findings.

**Observed, not yet codified:** multi-source findings strain the single
`source` field (watch-and-wait). Contemplative lens weighting is handled
by existing structure (caveats in finding body, heavier interpretation
deferred to lens files and threads).

### v0.1.1 — 2026-04-16

Driven by drafting the introspection concept and observing multiple
draft-status exceptions accumulating across schema sections.

**Consolidated: draft-status conventions.** Added a "Draft-status
conventions" subsection under Status markers, gathering: links to
nonexistent entries, bare URLs for unfiled findings, incomplete lens
coverage, and the rule that drafts are not cited externally. Replaced
the inline lint exemption with a cross-reference to the new subsection.

### v0.1.2 — 2026-04-16

Driven by three concepts (emergent-capabilities, introspection,
attractor-dynamics) all converging on the same body structure.

**Codified: concept body structure.** Five optional sections with exact
headers: Definition, Instantiating findings, What this concept is not,
Lens notes, Scope note. Definition section notes the concept's shape
(pattern, capacity, mechanism). New shapes require explicit proposal
rather than silent invention.
