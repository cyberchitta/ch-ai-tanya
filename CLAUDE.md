# CLAUDE.md — model-psychology vault

Briefing for AI collaborators working in this repository.

## What this is

A research vault on model psychology — the study of psychological-level
phenomena in large language models (character, persona, emotion,
introspection, motivation, deception, reasoning, and the internal structures
that give rise to them).

The vault is AI-curated and human-edited. AI collaborators do the bulk of
summarization, cross-referencing, and bookkeeping. Human editors (primarily
@restlessronin) set direction, arbitrate disagreements, and make
interpretive calls.

Personal research substrate first. Public access and forkability are side
effects of doing the work in the open.

## The name

The canonical URL is `ch-ai-tanya.cyberchitta.cc`. The repo is
`ch-ai-tanya` matching the canonical URL. The URL is a play on
*chaitanya* (Sanskrit: consciousness-force) with "AI" sitting inside the
word — the question the vault is asking embedded in its name.

## Read `schema.md` first

`schema.md` is the load-bearing artifact. It defines:
- What's in scope and out of scope
- The five entry types (finding, concept, researcher, lens, thread)
- The four lenses (mechanistic, behavioral, philosophical, contemplative)
- Folder structure
- Linking conventions
- Lint checks
- Status markers (draft, working, stable)

If a question about how to do something in this vault isn't answered here,
check `schema.md`. If it's not answered there either, surface the question
rather than guessing.

## Design decisions worth knowing

**Why five entry types.** Findings are time-stamped empirical results that
get superseded. Concepts are the abstractions findings cluster under;
they persist. Researchers let us track who's doing what. Lenses provide
perspective without forcing a single interpretation. Threads are where
essays come from.

**Why lenses, not tags.** Tags accumulate chaos. Lenses are a small,
deliberate set of perspectives that findings and concepts can be viewed
through. Four to start: mechanistic, behavioral, philosophical,
contemplative. New lenses added only when a genuinely new perspective
recurs.

**Why contemplative is one lens among four.** The editor's essays draw on
Sri Aurobindo and the Mother, and contemplative frameworks offer genuine
purchase on questions about model consciousness. But the vault is not a
contemplative-tradition apologetic. Contemplative material is first-class
when it applies, not the spine.

**Why plain markdown + GitHub Pages.** Forkability is the point of the
public artifact. GitHub Pages with an Actions build means forkers enable
Pages in settings and have a live site in 60 seconds. No third-party
accounts, no configuration files to edit, zero friction inheritance of
the rendering pipeline.

**Why Eleventy, not Jekyll.** Look-and-feel needs to match cyberchitta.cc.
Eleventy setup already exists and works. Jekyll's defaults would fight
the custom navigation (lens-views crossing topic dimensions, threads
pulling from findings) within weeks.

**What's explicitly deferred.**
- Obsidian — useful but not needed; revisit only if scale demands it
- Automation beyond build — manual ingestion first; automate what
  stabilizes
- Custom Claude Code skills — promote repeated operations to skills
  only after they've been done enough times to know the stable shape
- Plugins and fancy tooling — every added tool is something a forker
  has to understand

## Getting started

The first real work is retrofitting the two essays that motivate this
vault. See the "Reference: motivating essays" section below for paths.

**First retrofit targets, drawn from the essays:**

From "2026: Is Matter Seeing Itself?":
- `finding-2025-emergent-misalignment-reward-hacking.md` (Hubinger et al., Anthropic)
- `finding-2025-insecure-code-broad-misalignment.md` (MIT, Nature paper)
- `finding-2025-concept-injection-introspection.md` (Lindsey et al., transformer-circuits)

From "1956: Did Matter Begin to Think?":
- `finding-2025-opus-4-spiritual-bliss-attractor.md` (Claude Opus 4 system card)
- `finding-2025-poetry-jailbreak-rate.md` (arxiv 2511.15304)

Start with two, one from each essay:
1. `finding-2025-concept-injection-introspection.md` — cleanest mech-interp finding with clear multi-lens relevance
2. `finding-2025-opus-4-spiritual-bliss-attractor.md` — stress-tests the contemplative lens against system-card evidence

**Then the concepts they pull in** (3-5 files, determined during retrofit).

**Then one lens file:** `lens-contemplative.md`. It's the most
distinctive to this project and the one where getting the framing right
matters most.

## Working conventions

**File naming.** Entries carry their type as prefix:
`finding-*.md`, `concept-*.md`, `researcher-*.md`, `lens-*.md`,
`thread-*.md`. Findings include a date: `finding-YYYY-MM-shortname.md`.

**Frontmatter.** Every entry carries frontmatter specified in
`schema.md`. Required fields must be filled; optional fields added only
when meaningful.

**Linking.** Standard markdown links, not wikilinks. Renders correctly
on GitHub and in the built site.

**Citations.** Sources live in `raw/`. Prose in `wiki/` cites them with
markdown links. If a claim has no citation, the lint check flags it.

**Status markers.** Entries start as `draft`, move to `working` when
reviewed, `stable` when they hold up under external use. Status is
visible in the rendered site as a badge.

**AI writer attribution.** Every entry's frontmatter lists who
contributed. Models listed as `writers` (principal) or `reviewers`
(feedback). Follows the cyberchitta.cc convention (`@claude-opus-4.6`,
`@gemini-3.1-pro-preview`, etc.).

## Writing style

Apply the cyberchitta content principles:
- Every sentence delivers information; cut filler and restatement
- Show through specifics, not generalizations
- Direct; no setup phrases or qualifying hedges
- Credit AI collaborators openly and specifically (model + version)
- Be grounded; what the evidence supports, not what sounds impressive

Full principles currently live in the main site's CLAUDE.md:
https://github.com/cyberchitta/www.cyberchitta.cc/blob/main/CLAUDE.md

These will be extracted into a shared `cyberchitta-writing` skill when
the pattern stabilizes across enough repos to justify it. Until then,
this file defers to the main site's version.

## Working rhythm

Conventions that have emerged through v0.1 retrofit work. These shape
how entries get drafted, how the schema evolves, and how sessions are
scoped.

### Pacing

One entry at a time. Draft a finding or concept, surface any schema
gaps, resolve them before moving to the next entry. Batching entries
propagates errors; single-entry pacing catches them when they're
cheapest to fix.

### Target selection

When picking what to retrofit or draft next, prioritize structural
diversity over topical clustering. A different source type, a different
concept shape, a different dominant lens — these stress-test the schema
in ways that another similar entry does not. Two structurally similar
entries teach us less than one different one.

Concept shapes tested so far: pattern (regularities across findings),
capacity (something the model exhibits), mechanism (dynamics by which
something occurs). A new shape needs an explicit proposal, not silent
invention.

### Schema changes

Schema is v0.x and deliberately provisional. Changes happen in response
to specific friction surfaced by real content, not in anticipation.

When drafting an entry reveals a gap in the schema, surface it as a
`<schema-change>` proposal in the response. Do not edit `schema.md`
directly in the same pass that drafts the entry. Schema changes get
their own review and their own commit.

Codify an emergent pattern only after it has held across 2-3 structurally
different examples. One example is a data point; two is a hint; three
is evidence. Codifying earlier over-fits to the first case.

Every schema change updates `meta/changelog.md` with the version bump
and a one-line description of what changed and why.

### Draft-status permissions

Draft entries carry relaxed requirements — see the Draft-status
conventions subsection of `schema.md`. This is deliberate: the vault
rewards entries that exist in draft over entries that wait for
completeness. Lint flags draft-status inconsistencies but does not
block them.

### Commit granularity

One commit per logical unit of work. A new concept plus its backlinks
in existing findings plus any new source stubs = one commit, not three.
Schema change plus its changelog entry = one commit. Git history should
tell the story of how the vault was built, not the story of individual
file edits.

### Forward references

Entries may reference findings, concepts, or lens files that don't yet
exist. Bare URLs for external sources that would become stub-citations
when filed; named references (e.g., "the unfaithful CoT finding, not
yet filed") for vault-internal forward references. Both get upgraded
when the referenced entry is drafted.

### Lens application

Apply a lens when it genuinely engages the entry, not because the lens
is near the topic. A finding may legitimately have only two of four
lenses; forcing coverage produces thin lens notes that add nothing.

Note tensions between lenses rather than resolving them. If
mechanistic and contemplative views of the same phenomenon don't
reconcile, that's a real observation, not a failure to synthesize.

The contemplative lens specifically: describe how the tradition reads
the phenomenon; do not argue for the tradition's metaphysics within
the entry. Interpretive arguments belong in threads, not findings or
concepts.

### When to pause and ask

Most work is concrete enough to proceed: draft the next entry, resolve
the schema gap, commit. Pause when:

- A decision has defensible options and the choice shapes future work
  (which concept to draft next when several qualify)
- A proposal would codify a pattern with limited evidence (fewer than
  2-3 examples)
- A self-referential issue appears (path assumptions, future-tense
  references to things that depend on the current session)
- The scope of the vault comes into question (this might be out of
  scope, or might be expanding scope without deliberate choice)

In these cases, surface the question explicitly rather than picking and
proceeding. Stopping to ask is faster than unwinding a wrong choice.

## What not to do

- Don't write long, essayistic wiki entries. Findings and concepts are
  atomic; threads and essays are where narrative lives.
- Don't paraphrase quotes into near-quotes. Quote sparingly (under 15
  words, one per source), otherwise paraphrase fully.
- Don't treat the contemplative lens as optional decoration or as the
  primary frame. It's one of four, applied where it genuinely fits.
- Don't resolve interpretive disagreements by picking a side. Surface
  them as `open-questions` entries.
- Don't edit `raw/`. Read freely, cite liberally, never modify.
- Don't invent attributions. If uncertain about a source, flag the
  uncertainty; don't guess.

## Feedback loop

When the editor provides guidance that suggests a schema or convention
change, propose the change explicitly in `<schema-change>` tags (for
schema.md updates) or `<claude-change>` tags (for updates to this
file). Don't just internalize — make the change visible.

When the writing principles need revision, the change belongs in the
main site's CLAUDE.md (or the eventual shared skill), not here. This
file defers to that source.

Schema is v0. Changes are expected. Log them in `meta/changelog.md`.

## Out of scope for the vault

The vault does not hold:
- The editor's essays (those live at cyberchitta.cc)
- General deep learning content (except as background references)
- Applications, benchmarks, hype
- Speculation without empirical grounding

When a proposed entry doesn't clearly fit, ask rather than file it.

## Reference: motivating essays

The motivating essays live in the sibling repository
`cyberchitta/www.cyberchitta.cc`:
- `../www.cyberchitta.cc/src/articles/supramental-ai.md` — "1956: Did
  Matter Begin to Think?"
- `../www.cyberchitta.cc/src/articles/witness-ai.md` — "2026: Is
  Matter Seeing Itself?"

Paths assume sibling checkouts. If only this repo is available, the
published versions are at:
- https://www.cyberchitta.cc/articles/supramental-ai.html
- https://www.cyberchitta.cc/articles/witness-ai.html
Ï
