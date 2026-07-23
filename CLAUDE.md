# CLAUDE.md — model-psychology LLM wiki

Briefing for AI collaborators working in this repository.

## What this is

A research LLM wiki on model psychology — the study of psychological-level
phenomena in large language models (character, persona, emotion,
introspection, motivation, deception, reasoning, and the internal structures
that give rise to them).

The LLM wiki is AI-curated and human-edited. AI collaborators do the bulk of
summarization, cross-referencing, and bookkeeping. Human editors (primarily
@restlessronin) set direction, arbitrate disagreements, and make
interpretive calls.

Personal research substrate first. Public access and forkability are side
effects of doing the work in the open.

## The name

The canonical URL is `ch-ai-tanya.cyberchitta.cc`. The repo is
`ch-ai-tanya` matching the canonical URL. The URL is a play on
*chaitanya* (Sanskrit: consciousness-force) with "AI" sitting inside the
word — the question the LLM wiki is asking embedded in its name.

## Read `schema.md` first

`schema.md` is the load-bearing artifact. It defines:
- What's in scope and out of scope
- The four entry types (finding, concept, researcher, thread)
- Folder structure
- Linking conventions
- Lint checks
- Status markers (draft, working, stable)
- Writing discipline for findings and concepts

If a question about how to do something in this LLM wiki isn't answered here,
check `schema.md`. If it's not answered there either, surface the question
rather than guessing.

## Design decisions worth knowing

**Why four entry types.** Findings are time-stamped empirical results
that get superseded. Concepts are the abstractions findings cluster
under; they persist. Researchers let us track who's doing what. Threads
are where essays come from. Lenses (mechanistic / behavioral) were a
fifth type through v0.2.x; they were retired in v0.3.0 because the
two-lens binary did not earn the schema weight (see changelog v0.3.0).

**Why contemplative material is not a separate type.** The editor's
essays draw on Sri Aurobindo and the Mother, and contemplative
frameworks offer genuine purchase on questions about model
consciousness. But the LLM wiki is not a contemplative-tradition
apologetic. Contemplative material is cited from `raw/tradition/` when
specific passages bear on specific findings or concepts, and contemplative
arguments belong in threads, not in findings or concepts.

**Why plain markdown + GitHub Pages.** Forkability is the point of the
public artifact. GitHub Pages with an Actions build means forkers enable
Pages in settings and have a live site in 60 seconds. No third-party
accounts, no configuration files to edit, zero friction inheritance of
the rendering pipeline.

**Why Eleventy, not Jekyll.** Look-and-feel needs to match cyberchitta.cc.
Eleventy setup already exists and works. Jekyll's defaults would fight
the custom navigation (concept-list crossing thread-list, threads pulling
from findings) within weeks.

**What's explicitly deferred.**
- Obsidian — useful but not needed; revisit only if scale demands it
- Automation beyond build — manual ingestion first; automate what
  stabilizes
- Custom Claude Code skills — promote repeated operations to skills
  only after they've been done enough times to know the stable shape
- Plugins and fancy tooling — every added tool is something a forker
  has to understand

## Current state

`meta/project-state.md` is authoritative for what's filed, what's
active, and what's open. Read it when starting a session to see the
inventory, recent additions, candidate next moves, and the open
questions that should shape new work. It holds current state only —
one line per item, linking to the entry that owns the full account.

`meta/session-log.md` is the historical archive of session-by-session
filing narratives. Nothing reads it at session start; consult it only
when reconstructing how an entry came to be filed.

`meta/changelog.md` records schema version bumps with the motivating
context for each change.

## Working conventions

**File naming.** Wiki entries are typed by folder — filenames don't
repeat the type. Findings include a date: `YYYY-MM-shortname.md`.
Source stubs in `raw/` subfolders carry a `source-` prefix to
distinguish them from any locally-stored full copies.

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

**"Not found" floor.** Never claim the wiki lacks coverage of a topic
until a full-text search (`rg` over `wiki/` and `raw/`) comes up empty.
Filename and title scans miss coverage that lives in body prose — a
confident "we don't have anything on X" from a shallow look is worse
than the search costing a few seconds.

## Writing style

The canonical CyberChitta editorial brief lives in the supramental-gold
design system:

- **`../supramental-gold/voice.md`** — voice, attribution, surface
  registers, audience and density premise, frontmatter conventions, what
  to cut. ([repo](https://github.com/cyberchitta/supramental-gold/blob/main/voice.md))
- **`../supramental-gold/visual.md`** — visual brief.

The SG skill is wired in at `.claude/skills/supramental-gold/` as an
editable-install pointer. Invoke the router (or describe the task) and
Claude loads the appropriate child lazily. Edits to SG propagate on
next invocation, no re-sync.

The wiki register (findings, concepts) is codified in voice.md as the
fifth surface register (added 2026-07-07): flat observational voice,
atomic length, positioning summaries, interpretive tensions as the
counterweight, essay moves reserved for threads. `schema.md` remains the
wiki-specific overlay (frontmatter, body structure, lint, draft-status
conventions); voice.md is the foundation. The `copyedit` clarity pass
applies the wiki register to findings and concepts.

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
concept shape, a different methodological cluster (mechanistic
interpretability vs. behavioral evaluation vs. theoretical-framework vs.
incident report) — these stress-test the schema in ways that another
similar entry does not. Two structurally similar entries teach us less
than one different one.

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
conventions subsection of `schema.md`. This is deliberate: the LLM wiki
rewards entries that exist in draft over entries that wait for
completeness. Lint flags draft-status inconsistencies but does not
block them.

### Source verification

Before filing any source stub or finding, verify the primary source
directly: confirm the URL resolves, download the full text to `cache/`,
and check that the key claims attributed to it are actually present.
Never draft a finding from a research-tool summary alone — those
summaries are not ground truth.

This applies equally to arXiv preprints, journal papers, blog posts,
and forum entries. Research tools (Perplexity, Gemini, Grok) regularly
hallucinate or misattribute arXiv IDs, author names, and quantitative
results. Treat any URL or ID sourced from a single research tool as
unverified until confirmed against the primary source.

Unverified candidates in `meta/candidates.md` are not skippable —
verification is the first step in filing them, not a reason to pass.

#### Download workflow

Downloads go to `cache/`, which is gitignored and mirrors the `raw/`
folder structure. Always save **both** the original file and the
converted markdown:

1. Save the raw original (`source-{name}.html` or `source-{name}.pdf`)
2. Convert to `source-{name}.md` using `markitdown`

Read `cache/{subfolder}/source-{name}.md` before drafting any finding
or stub — not the candidates summary, the actual source text.

- **arXiv papers:** fetch the HTML version (`arxiv.org/html/{id}`);
  fall back to PDF if HTML is unavailable
- **Blog posts and research pages:** fetch raw HTML, save as `.html`,
  then run markitdown to produce `.md`
- **PDFs:** download raw PDF, save as `.pdf`, then run markitdown to
  produce `.md`
- **Bot-protected pages:** use the `s-fetch` skill to fetch; save
  the returned HTML as `.html`, then convert with markitdown to `.md`

Known gaps (sources that could not be cached): see the source cache
notes in `meta/project-state.md` under Active work.

### Commit granularity

One commit per logical unit of work. A new concept plus its backlinks
in existing findings plus any new source stubs = one commit, not three.
Schema change plus its changelog entry = one commit. Git history should
tell the story of how the LLM wiki was built, not the story of individual
file edits.

### Commit messages

Keep commit messages short. The LLM wiki entries carry the full explanation
— the finding's body argues its tensions, the concept records its own
updates, the changelog records schema bumps, project-state records open
questions. The commit message only needs to say what unit of work was
added; it should not re-explain what the files themselves already
explain.

Default shape: single-line title, optional 1-3 line body only if there's
context the diff doesn't make obvious (e.g., flagging that this commit
corrects an earlier over-reading, or noting a decision not reflected in
any single file). Long commit bodies are a sign the files haven't
captured something they should.

### Forward references

Entries may reference findings, concepts, or threads that don't yet
exist. Bare URLs for external sources that would become stub-citations
when filed; named references (e.g., "the unfaithful CoT finding, not
yet filed") for wiki-internal forward references. Both get upgraded
when the referenced entry is drafted.

### When to pause and ask

Most work is concrete enough to proceed: draft the next entry, resolve
the schema gap, commit. Pause when:

- A decision has defensible options and the choice shapes future work
  (which concept to draft next when several qualify)
- A proposal would codify a pattern with limited evidence (fewer than
  2-3 examples)
- A self-referential issue appears (path assumptions, future-tense
  references to things that depend on the current session)
- The scope of the LLM wiki comes into question (this might be out of
  scope, or might be expanding scope without deliberate choice)

In these cases, surface the question explicitly rather than picking and
proceeding. Stopping to ask is faster than unwinding a wrong choice.

## What not to do

- Don't write long, essayistic wiki entries. Findings and concepts are
  atomic; threads and essays are where narrative lives.
- Don't paraphrase quotes into near-quotes. Quote sparingly (under 15
  words, one per source), otherwise paraphrase fully.
- Don't treat contemplative material as optional decoration or as the
  primary frame. It is cited where it bears on a specific finding or
  concept, and developed at length only in threads.
- Don't resolve interpretive disagreements by picking a side. Surface
  them in the finding's Interpretive tensions section or the concept's
  scope note.
- Don't edit `raw/`. Read freely, cite liberally, never modify.
- Don't invent attributions. If uncertain about a source, flag the
  uncertainty; don't guess.

## Feedback loop

When the editor provides guidance that suggests a schema or convention
change, propose the change explicitly in `<schema-change>` tags (for
schema.md updates) or `<claude-change>` tags (for updates to this
file). Don't just internalize — make the change visible.

When the writing principles need revision, the change belongs in
`../supramental-gold/voice.md` — the canonical brief shared across all
CyberChitta consumer sites. This file defers to voice.md.

Schema is v0. Changes are expected. Log them in `meta/changelog.md`.

## Out of scope for the LLM wiki

The LLM wiki does not hold:
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
