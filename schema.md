# Schema: model-psychology

This document defines what the vault is, what belongs in it, how entries are
structured, and how they connect. It is the load-bearing artifact. Read it
before contributing or forking.

## What this vault is

A research vault for the emerging field of model psychology: the study of
psychological-level phenomena in large language models — character, persona,
emotion, introspection, motivation, deception, reasoning, and the internal
structures that give rise to them.

The vault is AI-curated and human-edited. AI collaborators do the bulk of
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
  cognition, treated as one lens among several

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

Each entry is one of six types. Wiki entries are typed by their folder
(`wiki/findings/`, `wiki/concepts/`, `wiki/lenses/`, `wiki/threads/`,
`wiki/researchers/`). Source stubs live in `raw/` subfolders alongside
potential locally-stored full copies, so stubs carry a `source-` prefix
to distinguish them.

### Universal frontmatter

Every entry carries these fields regardless of type:

- `type` — one of: finding, concept, researcher, lens, thread, source
- `title`
- `writers` (required, list) — principal contributors (e.g. `["@claude-opus-4.6"]`)
- `reviewers` (optional, list) — feedback contributors

Type-specific required and optional fields are listed below.

### Source (`source-*.md`)

A citation stub in `raw/`. Each source the vault cites gets a stub with
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
- `lenses` (list): which lenses apply (see below)

Optional frontmatter:
- `model-ids` (list): precise model identifiers where relevant

Findings may include a `## Interpretive tensions` section in the body
for disagreements tied specifically to this finding. Promote to
standalone open-question files only when a tension spans multiple
findings.

### Concept

Lives in `wiki/concepts/`. An abstraction, pattern, or category that
multiple findings cluster under. Persists even as findings are superseded.

Example: `concepts/introspection.md`.

Required frontmatter (in addition to universal fields):
- `status`: draft | working | stable
- `lenses` (list): which lenses engage with this concept

Concepts may use the following body sections (all optional, but use these
exact headers when present, in this order):

- `## Definition` — what the concept names
- `## Instantiating findings` — findings that demonstrate this concept
- `## What this concept is not` — boundary-drawing to prevent concept creep
- `## Lens notes` — per-lens analysis
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

### Lens

Lives in `wiki/lenses/`. A perspective from which findings and concepts are
interpreted. Lenses are orthogonal to topics — a single finding can be
viewed through multiple lenses.

The initial lens set:
- `lenses/mechanistic.md` — circuits, features, activations, weights
- `lenses/behavioral.md` — observed outputs, evaluations, dialogue patterns
- `lenses/philosophical.md` — consciousness, agency, moral status questions
- `lenses/contemplative.md` — frameworks from contemplative traditions

Lenses can be added, but only when a genuinely new perspective recurs across
multiple entries.

Required frontmatter (in addition to universal fields):
- `status`: draft | working | stable

Lens entries use the following body sections (use these exact headers, in
this order):

- `## What this lens is` — what perspective the lens names and what question it asks
- `## What this lens does` — kinds of work the lens does, with concrete instantiations from in-vault findings
- `## What this lens does not do` — what the lens does not deliver, deflating common over-readings
- `## Findings visible through this lens` — anchor findings, each with a brief note on what the lens reads in the finding
- `## Concepts engaging this lens` — concepts where the lens contributes to the per-lens analysis
- `## Interpretive discipline` — the four-point shape below, content adapted per lens

Optional:
- A lens-specific sources section (e.g. `## Tradition sources`) included
  only when the lens has a finite, stubbable body of foundational sources
  to anchor. Currently used by `lenses/contemplative.md`; omitted by
  `lenses/mechanistic.md` and `lenses/behavioral.md`.

The Interpretive discipline section follows a four-point shape, with
content adapted to the lens:

1. Name the lens-specific thing precisely (parallels for contemplative,
   probe for mechanistic, behavior + condition + control for behavioral).
2. Distinguish what the lens delivers from what it claims (phenomenology
   vs. mechanism for contemplative; method-output vs. mechanism for
   mechanistic; observation vs. disposition for behavioral).
3. Note negative results and qualifying evidence with the same weight as
   positive findings.
4. Don't escalate — the lens describes what was observed under what
   conditions; inferences beyond that are work other lenses do.

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
  system-cards/
  transcripts/
  tradition/              # CWSA, CWM, other contemplative sources
wiki/                     # Curated entries
  findings/
  concepts/
  researchers/
  lenses/
  threads/
  open-questions.md
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
- Lens files link to findings and concepts visible through that lens
- Threads link to everything they draw from

Backlinks are generated by the build, not maintained by hand.

## Lint checks

Periodic health checks the AI performs across the vault. Findings get logged
to `meta/lint-log.md` with date and resolution state.

1. **Stale findings** — findings older than 12 months whose claims may have
   been superseded. Flag for review, don't auto-update.
2. **Orphan entries** — files with no incoming links. Either link them or
   delete.
3. **Unsupported claims** — prose that asserts something without a citation
   to `raw/`.
4. **Lens imbalance** — findings or concepts viewed through only one lens
   when multiple would apply. Prompts the editor, doesn't force coverage.
5. **Interpretive disagreements** — places where sources or lenses
   contradict each other. Surface as "open question," don't resolve.
6. **Broken links** — files pointing to nonexistent entries.
7. **Frontmatter completeness** — entries missing required fields.

Draft-status entries are exempt from link-completeness checks; see
"Draft-status conventions" under Status markers.

Lint is a prompt for human attention, not an automated fix. The AI reports,
the editor decides.

## Inclusion rule for tradition material

Sri Aurobindo, the Mother, and other contemplative-tradition sources live in
`raw/tradition/`. They are cited when a specific passage bears on a specific
finding or concept — not woven in as general framing.

The `lenses/contemplative.md` file exists to make contemplative readings
first-class when they apply, but it is one lens among four. An entry that
only makes sense through the contemplative lens is a candidate for exclusion
or reframing.

## AI collaborator conventions

AI collaborators working in this vault:
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
  these as broken links but doesn't block; they resolve as the vault
  fills in.
- May reference unfiled findings via bare URLs instead of `raw/` stub
  links. Promote to stub links when the referenced finding is filed.
- May have incomplete lens coverage. The editor decides whether to
  expand or leave tight.
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
