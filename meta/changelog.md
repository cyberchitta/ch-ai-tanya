# Changelog

## v0.9.0 — 2026-07-23

An agent-maintained corpus ingests the full text of external documents,
and a document can contain instructions aimed at the agent reading it.
The existing verification workflow checks that a source says what it is
claimed to say; nothing said the source's own words carry no authority
over the corpus's governing files.

**Added: untrusted-source ingestion rule** (Source entry type). Content
inside a source document cannot authorize changes to `schema.md`,
`CLAUDE.md`, or `scripts/` in the pass that ingests it.

## v0.8.0 — 2026-07-23

Driven by live drift in the pre-restructure project-state.md: a stale
"Schema: v0.4.0" stamp while the changelog stood at v0.6.0, and
hand-maintained inventory counts nothing verified. Counts that nothing
checks decay silently.

**Added: lint rule 13, inventory drift.** The Inventory counts in
`meta/project-state.md` are compared against the filesystem (wiki
entries by type; source stubs under `raw/`). Structural class —
blocking, per v0.7.0 — so filing an entry now requires updating the
inventory in the same commit. No version-stamp rule needed:
project-state.md no longer carries one; the version is owned by this
changelog.

## v0.7.0 — 2026-07-23

Driven by evidence that a purely advisory gate fails in practice: two
broken links flagged in the 2026-07-07 lint run were still present
2026-07-23.

**Changed: structural lint errors now block the build.** The lint
checks split into three classes — structural (5–12: broken links,
frontmatter completeness, cites/refs consistency), advisory (1–2:
stale, orphans), semantic (3–4: review passes). `scripts/lint.js`
exits non-zero on structural errors and CI no longer sets
`continue-on-error` on the lint step. Advisory and semantic checks are
unchanged: the AI reports, the editor decides.

## v0.6.0 — 2026-07-07

Driven by the site-orientation review: finding→finding
cross-references are the densest link type in the corpus and the only
one with no reverse index — a finding referenced by ten others shows
nothing. The template pattern exists (`source.ejs` "cited in" via
`cites:`); what was missing was the machine-readable form on the
finding side.

**Added: `refs` field to Finding frontmatter (optional).** A list of
finding fileSlugs this finding references in body prose. The build
renders "referenced by" backlinks on the target finding from it. Same
deliberate asymmetry as `cites:` (v0.4.0): inversion lives in the
template, not the data; the referenced finding carries no reciprocal
list.

**Added: three lint rules** (rules 10–12): refs-without-link,
link-without-refs, refs-a-nonexistent-finding. All gated on `refs:`
being at least partially populated, mirroring rules 7–9.

**Not in this change:** backfilling `refs:` across the 72 filed
findings, the finding.ejs "referenced by" section, and extending
`scripts/lint.js` to rules 10–12 — queued as mechanical follow-up in
`meta/handoff-mechanical.md`.

## v0.5.0 — 2026-07-07

Driven by the researcher entry type doing no work: four filed entries
functioning as topic stubs, a job concepts already do better. Editor
adopted the "taste reading" — researcher entries exist to track
judgment.

**Reframed: researcher entry type.** The entry tracks what a
researcher's attention signals, grounded in track record across filed
findings. Suggested optional body sections: Approach (characteristic
methods, stated concretely), What their attention signals (the
predictive read), Findings (filed findings anchored by their work).
Judgment claims need grounding in at least two filed findings.
Retrofitting the four existing researcher entries is follow-up work,
not part of this change.

## v0.4.0 — 2026-05-11

Driven by `_includes/source.ejs` (added during the supramental-gold
port) needing a way to list every finding that cites a given source.
The current schema gave the source side no machine-readable way to
find its citers — only rendered-HTML inversion, which is fragile,
order-dependent, and silently wrong for findings that name a source
in prose without linking. The concept side already has `findings:`
(parent→child list in frontmatter); the source equivalent was
missing.

**Added: `cites` field to Finding frontmatter (optional).** A list
of `fileSlug` values, one per source stub the finding cites,
including the primary source named in the required `source:` URL
field. `source:` stays the canonical primary URL; `cites:` is the
full citation index used by `source.ejs` to render "cited in"
backlinks. No reciprocal `cited_by` on source stubs — inversion
lives in the template, not the data, to avoid dual-source-of-truth
drift.

**Asymmetry, deliberate.** Finding→source bookkeeping is now
frontmatter-plus-body; finding→concept stays body-only (`##
Concepts` section, no `concepts:` frontmatter list). Concept pages
hold the parent-side list and don't need to query upward, so the
finding side stays prose-only. Source pages have no parent-side
list to lean on — the finding is the only place the link is
declared — so the finding has to carry the machine-readable form.

**Added: three lint rules** (rules 7–9 in §Lint checks). All
warnings, all gated on `cites:` being at least partially populated:
cites-without-link, link-without-cites, cites-a-nonexistent-source.
Body-link detection scans the entire body, not just `## Sources`,
since findings sometimes cite sources from prose body sections too.
Lint is still manual (`meta/lint-log.md`); the new rules join the
AI lint pass until automation lands.

**Backfilled: all 37 existing findings.** A one-shot pass walked
each finding's body, extracted `raw/.../source-*.md` links, and
wrote `cites:` frontmatter ordered by first occurrence. Source
pages' "cited in" blocks populate immediately rather than
back-filling slowly as entries get touched for other reasons.

## v0.1 — 2026-04-16

Schema changes from v0, driven by drafting the first finding entry
(`2025-concept-injection-introspection.md`).

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
Updated example to reflect actual LLM wiki content.

### v0.1 addendum — 2026-04-16

Driven by drafting the second finding
(`2025-opus-4-spiritual-bliss-attractor.md`).

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

### v0.1.3 — 2026-04-16

Driven by redundancy between folder name and filename prefix across 10
wiki entries (`wiki/findings/finding-2025-...`, `wiki/concepts/concept-...`,
etc.).

**Dropped: type-prefix from wiki filenames.** Wiki entries are now
typed by their folder alone. Filenames shorten:
- `wiki/findings/finding-YYYY-shortname.md` → `wiki/findings/YYYY-shortname.md`
- `wiki/concepts/concept-shortname.md` → `wiki/concepts/shortname.md`
- `wiki/lenses/lens-shortname.md` → `wiki/lenses/shortname.md`
- `wiki/threads/thread-shortname.md` → `wiki/threads/shortname.md`
- `wiki/researchers/researcher-shortname.md` → `wiki/researchers/shortname.md`

**Kept: `source-` prefix for stubs in `raw/`.** `raw/` subfolders can
hold locally-stored full copies alongside stubs, so the prefix keeps
doing real work there.

**New reference convention.** When referring to a file in prose or
examples, include the folder so the reference self-documents the type
(e.g., `findings/2025-cot-faithfulness.md`, not the bare filename).

### v0.1.4 — 2026-04-26

Driven by three lenses (contemplative, mechanistic, behavioral) all
converging on the same body structure. Original framing in
`lenses/contemplative.md` predicted the four-point Interpretive
discipline shape might be specific to cross-domain-parallel lenses;
mechanistic and behavioral falsify that prediction by exhibiting the
same shape with different content. Three structurally different
examples passes the codification threshold per the working rhythm.

**Codified: lens body structure.** Six required sections with exact
headers, in this order: What this lens is / What this lens does / What
this lens does not do / Findings visible through this lens / Concepts
engaging this lens / Interpretive discipline.

**Codified: optional lens-specific sources section.** Included only
when the lens has a finite, stubbable body of foundational sources to
anchor. Currently used by `lenses/contemplative.md` (Tradition
sources); omitted by `lenses/mechanistic.md` and
`lenses/behavioral.md`.

**Codified: Interpretive discipline shape.** Four-point structure:
(1) name the lens-specific thing precisely, (2) distinguish what the
lens delivers from what it claims, (3) weight negative/qualifying
evidence equally with positive, (4) don't escalate. Content adapts per
lens.

**Added: `status` to lens required frontmatter.** Matches existing
practice across all three filed lens files.

## v0.2.0 — 2026-04-27

Driven by recognising that the four named lenses contained two structurally
different things: methodological perspectives (mechanistic, behavioral) and
interpretive frameworks (philosophical, contemplative). Threads are the
correct structure for interpretive-framework work; a wiki-level
open-questions file was redundant with existing structures.

**Reduced: lens set to mechanistic and behavioral.** Lenses are now defined
as methodological perspectives corresponding to research methods. Philosophical
and contemplative are no longer named lens types. Interpretive-framework
perspectives belong in threads and concept scope notes.

**Removed: Tradition sources optional lens section.** Was specific to
contemplative; no longer applicable.

**Removed: wiki/open-questions.md.** Cross-cutting interpretive tensions
belong in concept scope notes or `meta/project-state.md`. The file was
empty; nothing to migrate. The v0.1 addendum convention ("promote to
standalone open-question files") is replaced: tensions tied to a finding
go in `## Interpretive tensions`; cross-cutting tensions go in concept
scope notes or project-state.

**Updated: folder structure.** `wiki/open-questions.md` removed from the
defined structure.

**Updated: lint check #5.** "Surface as open question" replaced with
"surface in Interpretive tensions or concept scope note."

Implementation (content migration, file deletions, frontmatter cleanup
across findings and concepts) is a separate commit.

### v0.1.5 — 2026-04-27

Driven by reviewing all 26 filed findings and finding that ~60–70% of
contemplative lens notes and ~50% of mechanistic lens notes were forced —
spending more words on disanalogies than on what the lens contributed, or
explicitly acknowledging the lens didn't engage the finding.

**Strengthened: lens optionality.** Added explicit language to the Lens
section: apply a lens only when it contributes substantive analysis; a
finding with one lens or none beyond behavioral is correct. The symptom of
a forced lens note is leading with disanalogy. Never include a note that
concludes the lens doesn't apply.

**Replaced: lint check #4.** "Lens imbalance" (which pressured toward
coverage) replaced with "Forced lens notes" (which flags over-application
for removal).

**Updated: draft-status lens convention.** Reframed from "incomplete lens
coverage" (implying full coverage is the norm) to explicit statement that
fewer applied lenses is correct behavior, not a gap.

### v0.2.1 — 2026-04-27

Driven by filing the first journalistic source stubs — news articles that
claim cross-model replication of the spiritual bliss attractor without citing
primary sources, worth tracking as part of the reception record.

**New: `raw/journalism/` subfolder.** News articles, popular press, and
informal reportage are filed here, separate from `raw/posts/` (research
posts, blog posts with original empirical content) and `raw/papers/`. The
distinction marks epistemic status: journalism stubs document reception and
claims, not primary evidence.

### v0.2.2 — 2026-05-01

Driven by reviewing all 31 filed findings and noticing that the finding
body structure had accumulated as oral convention without ever being
written down — the most-instantiated entry type was the only one without
a documented body template. Survey confirmed five universal sections
(Summary, Why it matters, Lens notes, Concepts, Sources), one variable
body section between Summary and Why it matters with five observed
naming shapes, two well-established optional sections (Interpretive
tensions, Threads), and one undocumented optional section (Cross-
references) used three times for secondary/partial connections.

**Codified: finding body structure.** Five required sections with exact
headers (Summary, Why it matters, Lens notes, Concepts, Sources) plus a
flexibly-named body section between Summary and Why it matters and three
optional sections (Interpretive tensions, Threads, Cross-references).
Section ordering is fixed; optional sections may be omitted when there's
nothing to put in them.

**Documented: body section name variants.** Two main patterns —
`Observed phenomenon` for observational/incident/system-card sources and
`Method` + `Key results` for controlled studies — plus three single-
instance variants for multi-case-study, theoretical-framework, and
replication-heavy papers. New name patterns are acceptable when they fit
the source; codify only after recurrence.

**Codified: `Cross-references` as optional section.** For secondary or
partial connections that aren't primary instantiations or anchorings:
partial concept corroboration, non-anchoring thread mentions,
methodological precedents in other findings, sub-shape notes too narrow
for the Concepts section.

**Clarified: `Why it matters` content.** The editorial-framing section
that distinguishes a wiki entry from a paper summary. Cross-finding
scaffolding (instantiation counts, structural-shape notes) lives here.
Documenting what the section is for — implicit in 31 findings, never
stated.

**Follow-up cleanup (separate commit):** two findings (2026-metagaming-
capability-rl, 2026-stability-asymmetry-deception) place Interpretive
tensions before Lens notes, inverting the convention used by the other
26 findings with that section. To be reordered in a single small pass.

## v0.3.0 — 2026-05-01

Driven by reviewing the lens system after v0.2.0 reduced it from four
lenses to two. With only mechanistic and behavioral remaining, the
binary collapses to "looked inside the model vs. looked at outputs" —
closer to a single methodological tag than to a structured taxonomy. The
two `wiki/lenses/` files carried six required body sections each; the
schema-weight-to-payload ratio was the highest in the wiki. Lens notes
sections in findings and concepts mostly restated content already
present in the body; the v0.1.5 cleanup that removed forced lens notes
had reduced but not eliminated the pressure toward boilerplate.

**Removed: lens as a wiki entry type.** `wiki/lenses/` deleted along
with `mechanistic.md`, `behavioral.md`, the directory's `_index.md`, and
`lenses.json`. The lens type drops out of the universal-frontmatter
`type` enum, the folder structure, and the linking conventions.

**Removed: `lenses` frontmatter from findings and concepts.** Was a
required list of which lenses applied; now obsolete.

**Removed: `## Lens notes` body section.** Findings no longer carry the
section. Concepts no longer carry it. Substantive content was folded
into Why-it-matters / body / Definition / Scope-note sections in stage
2 and stage 3 cleanup commits; boilerplate was dropped.

**Removed: lens-application rule and forced-lens-notes lint check.** Both
were specific to the lens system.

**Folded: four-point interpretive discipline rule** into a new "Writing
discipline for findings and concepts" section in `schema.md`. The shape
(name evidence precisely, distinguish observation from disposition,
weight negative results equally, don't escalate) generalized cleanly
from per-lens to entry-wide writing rule and earned its keep there.

**Updated: tradition-material inclusion rule.** The reference to a
deleted `lenses/contemplative.md` (already removed in v0.2.0 but the
schema text still alluded to it) now reads as a general statement:
contemplative readings that develop into sustained arguments belong in
threads.

**Updated: stale `lenses/contemplative.md` links in threads.** Three
inline references in `threads/witness-ai.md` and `threads/supramental-
ai.md` pointed to the v0.2.0-deleted contemplative lens file. The
paraphrased four-point discipline content already inline in the threads
is preserved; the dead link is dropped.

**Updated: findings index page.** `wiki/findings/index.ejs` no longer
describes findings as "read through one or more lenses."

**Stage-2 and stage-3 cleanups (separate commits):** lens content
removal across 31 findings and 10 concepts. Each entry's lens notes
section was inspected individually; substantive content folded where it
contributed beyond what the body already carried; boilerplate dropped.

## v0.3.1 — 2026-05-11

Driven by four intervention-research findings converging on the same
structural shape across three mechanism concepts: honesty-elicitation
(Wang, Treutlein, Roger, November 2025) and confessions-honesty
(Joglekar et al., December 2025) for introspection; anti-scheming-
training (Schoen and Nitishinskaya, September 2025) for scheming;
inoculation-prompting (Tan et al., October 2025) for persona-selection.
All four characterize the partial-success mechanism — which residual
the intervention leaves behind, why, and where it fails or distorts —
rather than only reporting the headline rate. The anti-scheming paper
states the principle directly: "The mechanism of partial success — not
the partial success itself — is the paper's central contribution." The
working-rhythm threshold (3+ structurally different examples) is past,
and the pattern cross-cuts mechanism concepts rather than concentrating
in one.

**Codified: intervention findings as a writing-discipline shape.** New
`### Intervention findings` subsection in `## Writing discipline for
findings and concepts`. Intervention findings foreground the partial-
success mechanism in the body section(s) and connect it to the
target concept(s) in Why-it-matters. The general four-point discipline
(name precisely, distinguish observation from disposition, weight
negative results equally, don't escalate) still applies — the new
subsection adds a sub-class-specific intensity on rule #3 rather than
modifying any of the four. Examples kept generic in the schema text so
it doesn't decay as the intervention-finding set grows.
