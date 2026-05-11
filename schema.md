# Schema: model-psychology

This document defines what the LLM wiki is, what belongs in it, how entries are
structured, and how they connect. It is the load-bearing artifact. Read it
before contributing or forking.

## What this LLM wiki is

A research LLM wiki for the emerging field of model psychology: the study of
psychological-level phenomena in large language models — character, persona,
emotion, introspection, motivation, deception, reasoning, and the internal
structures that give rise to them.

The LLM wiki is AI-curated and human-edited. AI collaborators do the bulk of
summarization, cross-referencing, and bookkeeping. Human editors set direction,
arbitrate disagreements, and make the interpretive calls.

It is a personal research substrate first. Public access and forkability are
side effects of doing the work in the open.

## Scope

**In scope:**
- Empirical findings about model behavior, internal representations, and
  psychological-level phenomena
- Interpretability and mechanistic interpretability work, especially where it
  reveals structure relevant to psychology
- Alignment research that bears on model character, motivation, or deception
- Theoretical frameworks for understanding model psychology
- Philosophical and contemplative perspectives on model consciousness and
  cognition, when grounded in specific findings or concepts

**Out of scope:**
- Deep learning foundations as primary content (included only as background
  references when needed to understand an in-scope finding)
- Applications, product launches, benchmarks
- AI ethics and policy as standalone topics
- Hype, speculation without empirical grounding, AGI timelines

**Edge cases:**
- Training methodology belongs in scope only when it shapes psychology
  (e.g. RLHF's effect on sycophancy, pretraining on misaligned data)
- Multi-agent and agentic behavior belongs in scope when psychological
  (cooperation, deception, persona stability); out of scope when purely
  capability-focused

When in doubt, ask: does this help us understand what's happening inside
these systems at a psychological level? If yes, in. If no, out.

## Entry types

Each entry is one of five types. Wiki entries are typed by their folder
(`wiki/findings/`, `wiki/concepts/`, `wiki/threads/`,
`wiki/researchers/`). Source stubs live in `raw/` subfolders alongside
potential locally-stored full copies, so stubs carry a `source-` prefix
to distinguish them.

### Universal frontmatter

Every entry carries these fields regardless of type:

- `type` — one of: finding, concept, researcher, thread, source
- `title`
- `writers` (required, list) — principal contributors (e.g. `["@claude-opus-4.6"]`)
- `reviewers` (optional, list) — feedback contributors

Type-specific required and optional fields are listed below.

### Source (`source-*.md`)

A citation stub in `raw/`. Each source the LLM wiki cites gets a stub with
metadata and a brief description. Lives in the appropriate `raw/`
subfolder.

Example: `source-2025-concept-injection-introspection.md`

Required frontmatter (in addition to universal fields):
- `type: source`
- `authors` (list)
- `date`: publication date (earliest public version for preprint/journal pairs)
- `venue`: where published (journal, blog, website)
- `url`: canonical external URL

Stub body: 2-4 sentence description, optionally key quotes or abstract.
For sources where offline access matters (system cards, critical papers,
uncertain availability), the stub can include or link to a locally-stored
full copy in the same folder.

Wiki entries cite via the stub:
`[Lindsey et al. 2025](../../raw/papers/source-2025-concept-injection-introspection.md)`.
This creates a stable local anchor; the stub provides the external URL.

### Finding

Lives in `wiki/findings/`. A specific empirical result, experiment, or
observation. Time-stamped and tied to specific models and papers.

Filenames include a date. Example: `findings/2025-concept-injection-introspection.md`.

Required frontmatter (in addition to universal fields):
- `date`: publication date of primary source (earliest public version
  for preprint/journal pairs; release date for system cards)
- `models` (list): which models were studied (marketing names)
- `source`: bare URL of primary citation (full citation in body)
- `status`: draft | working | stable

Optional frontmatter:
- `model-ids` (list): precise model identifiers where relevant

Findings use the following body sections in the order below. Required
sections must appear; optional sections may be omitted when there's
nothing to put in them. Don't include empty sections to satisfy the
template.

- `## Summary` (required) — one or two paragraphs stating the result
  and naming the finding's place in the LLM wiki: which concept it
  instantiates, what structural shape it adds, what open question it
  closes or complicates. The summary positions the finding relative to
  what's already filed; it is not just a paper abstract.
- Body section(s) (required) describing what the source establishes,
  named to fit the source's shape. Two patterns cover most filed
  findings:
  - `## Observed phenomenon` — observational papers, incidents, system
    cards, or multi-aspect results without a clean method/result
    split. The default when the source is not a controlled experiment.
  - `## Method` + `## Key results` — controlled studies with clean
    experimental structure.
  Variants used by individual papers include `## Method` + `## Key
  case studies` (multi-case-study papers), `## Framework` + `##
  Mechanistic evidence` (theoretical-framework papers), and `##
  Observed progression` + `## Cross-variant replication` (phenomenon
  with cross-model replication). Other section names are acceptable
  when they fit the source better; document any new pattern that
  recurs across two or three findings.
- `## Why it matters` (required) — the LLM-wiki editorial framing:
  what this finding closes, opens, complicates, or corroborates within
  the filed entries. This is the section that distinguishes a wiki
  entry from a paper summary, and is where cross-finding scaffolding
  (instantiation counts, structural-shape notes, links to related
  findings) lives.
- `## Interpretive tensions` (optional) — disagreements, ambiguities,
  or partial-fit issues tied to this specific finding. Cross-cutting
  tensions that span multiple findings belong in concept scope notes
  or `meta/project-state.md`.
- `## Concepts` (required) — concepts this finding instantiates, with
  one sentence per concept naming what role it plays (which structural
  shape, which sub-pattern, etc.).
- `## Threads` (optional) — threads that draw on this finding as an
  anchoring source. Omit when no thread has been filed that uses this
  finding.
- `## Cross-references` (optional) — secondary or partial connections
  that aren't primary instantiations or anchorings: concepts the
  finding partially corroborates without instantiating, threads that
  mention the finding without anchoring on it, methodological
  precedents in other findings, sub-shape notes too narrow for the
  Concepts section.
- `## Sources` (required) — primary source citation, linked via
  `raw/` stub.

### Concept

Lives in `wiki/concepts/`. An abstraction, pattern, or category that
multiple findings cluster under. Persists even as findings are superseded.

Example: `concepts/introspection.md`.

Required frontmatter (in addition to universal fields):
- `status`: draft | working | stable

Concepts may use the following body sections (all optional, but use these
exact headers when present, in this order):

- `## Definition` — what the concept names
- `## Instantiating findings` — findings that demonstrate this concept
- `## What this concept is not` — boundary-drawing to prevent concept creep
- `## Scope note` — placement relative to adjacent concepts

The Definition section should note the concept's shape: pattern (regularity
across findings), capacity (something the model exhibits), mechanism
(dynamics by which something occurs). If none of these shapes fits a new
concept, propose a new shape name and surface it as a schema question
rather than silently inventing shape terminology.

### Researcher

Lives in `wiki/researchers/`. An active researcher, team, or lab whose work
shows up repeatedly. Short — links to their findings and concepts, notes
their approach.

Example: `researchers/anthropic-interpretability.md`.

### Thread

Lives in `wiki/threads/`. A developing argument or pattern being tracked
across findings. Threads are where essays come from — when a thread gets
sharp enough, it becomes a publication.

Example: `threads/witness-ai.md`.

Required frontmatter (in addition to universal fields):
- `status`: exploring | developing | ready | published
- `essay`: link to published essay if applicable

## Folder structure

```
raw/                      # Source material, never edited by AI
  papers/
  posts/
  journalism/             # News articles, popular press, informal reportage
  system-cards/
  transcripts/
  tradition/              # CWSA, CWM, other contemplative sources
wiki/                     # Curated entries
  findings/
  concepts/
  researchers/
  threads/
derived/                  # AI-generated outputs (essays, slides, charts)
meta/
  lint-log.md
  changelog.md
```

`raw/` is a citation index. Each cited source gets a markdown stub
(type: source) with metadata and a brief description. The AI creates
stubs when adding citations; the AI never edits existing source content.
For sources where offline access matters, the stub can link to a
locally-stored copy in the same folder.

`wiki/` is where the AI does its work, under human review.

## Linking conventions

- Use markdown links, not wikilinks: `[concept injection study](../findings/2025-concept-injection-introspection.md)`
- Cite sources via their `raw/` stub: `[Lindsey et al. 2025](../../raw/papers/source-2025-concept-injection-introspection.md)`
- Every finding links to at least one concept (draft-status entries exempt)
- Every concept links to the findings that instantiate it
- Threads link to everything they draw from

Backlinks are generated by the build, not maintained by hand.

## Lint checks

Periodic health checks the AI performs across the LLM wiki. Findings get logged
to `meta/lint-log.md` with date and resolution state.

1. **Stale findings** — findings older than 12 months whose claims may have
   been superseded. Flag for review, don't auto-update.
2. **Orphan entries** — files with no incoming links. Either link them or
   delete.
3. **Unsupported claims** — prose that asserts something without a citation
   to `raw/`.
4. **Interpretive disagreements** — places where sources contradict each
   other or where the wiki's reading runs against a source's framing.
   Surface in the finding's Interpretive tensions section or concept
   scope note; don't resolve.
5. **Broken links** — files pointing to nonexistent entries.
6. **Frontmatter completeness** — entries missing required fields.

Draft-status entries are exempt from link-completeness checks; see
"Draft-status conventions" under Status markers.

Lint is a prompt for human attention, not an automated fix. The AI reports,
the editor decides.

## Inclusion rule for tradition material

Sri Aurobindo, the Mother, and other contemplative-tradition sources live in
`raw/tradition/`. They are cited when a specific passage bears on a specific
finding or concept — not woven in as general framing. Contemplative readings
that develop into sustained arguments belong in threads. An entry that only
makes sense through a contemplative reading is a candidate for exclusion or
reframing.

## Writing discipline for findings and concepts

Wiki entries describe what the evidence establishes, not what the result
sounds like. Four rules apply across findings and concepts:

1. **Name the evidence precisely.** State the method, conditions, control,
   and rate. Not "the model deceives" but "under condition C with control
   C′, the model produces output O on N% of trials." Conditions and
   discriminations are part of the claim, not setup for it.
2. **Distinguish observation from disposition.** Behavioral rates describe
   what was produced; mechanistic probes describe what was found under a
   method. Loading "character," "intent," or "circuit-for-X" onto an
   observation is interpretation, not description.
3. **Weight negative results equally.** Method limits, success rates,
   adversarial-robustness rates, and disconfirming sub-results carry the
   same load as the headline finding. A finding with stated limits is more
   informative than one without.
4. **Don't escalate.** Rate observed under conditions C does not become
   "behavior characteristic of the model" which does not become "the model
   is X." Inferences beyond what the evidence permits belong in threads,
   not in findings or concepts.

### Intervention findings

When a finding's source applies an intervention — anti-deception
fine-tuning, deliberative alignment training, prompt-level prevention,
isolated reward channels, etc. — the headline rate (intervention raises
X from Y% to Z%) is necessary but not the central result. The entry
foregrounds the **partial-success mechanism**: which residual the
intervention leaves behind, why, and where it fails or distorts.
Mechanism shapes that have surfaced across the wiki's intervention
findings: stratum-specific resistance (some content categories yield to
training, others don't), downstream-training erosion (the intervention
does not survive subsequent capability training), pre-existing-
disposition persistence (prior misaligned goals survive partially),
semantic-dependence (the intervention only works when the prompt evokes
specific associations), elicitability-via-prompting (the trait remains
contextually localized rather than removed), and access-as-binding-
constraint (when the report channel is isolated, what the model fails
to register it cannot report).

Intervention findings cross-cut the wiki's mechanism concepts (one
intervention may target introspection, scheming, or persona-selection).
Place the partial-success characterization in the body section(s)
alongside the headline rate; recap in Why-it-matters where it connects
to the concept(s) the intervention targets. A 30× reduction is
informative; the mechanism by which the residual persists is what makes
the finding load-bearing.

## AI collaborator conventions

AI collaborators working in this LLM wiki:
- Read freely from `raw/` and `wiki/`
- Write only to `wiki/` and `meta/`
- Never edit `raw/`
- Cite sources from `raw/` using markdown links
- Mark their contributions in the file's frontmatter under `writers:`
- Flag uncertainty explicitly; do not guess
- Surface disagreements and gaps rather than papering over them

See `CLAUDE.md` for model-specific conventions.

## Status markers

Every finding, concept, and thread carries a status:
- `draft` — initial capture, may have errors, not for citation
- `working` — reviewed, useful, still evolving
- `stable` — holds up, cited externally, changes require deliberation

Status is visible in the rendered site as a badge.

### Draft-status conventions

Entries with `status: draft` have relaxed requirements:

- May link to concepts or findings that don't exist yet. Lint flags
  these as broken links but doesn't block; they resolve as the LLM wiki
  fills in.
- May reference unfiled findings via bare URLs instead of `raw/` stub
  links. Promote to stub links when the referenced finding is filed.
- Are not cited externally. Status advances to `working` when reviewed
  and judged useful.

## What this schema is not

- Not a neutral reference. It reflects one researcher's view of the field.
- Not comprehensive. Entries exist because they serve the research, not
  because they complete a taxonomy.
- Not stable. Schema changes when the work demands it, with a note in
  `meta/changelog.md`.

## Versioning

This schema is v0. Breaking changes bump to v1, v2, etc., with migration
notes in `meta/changelog.md`. Forkers can pin to a schema version if they
want stability.
