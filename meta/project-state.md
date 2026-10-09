# Project state

Current state only: what's filed, what's active, what's open. Session-by-session
filing narratives live in `meta/session-log.md` (historical archive; not read at
session start) and in git history; each finding's full account lives in its own
entry file. The schema version is owned by `meta/changelog.md`.

## Handoffs

Continuation handoffs for in-flight work streams. Read the relevant one at
session start alongside this file to recover the next move. The private
cross-stream todo and schedule is `_notes/worklist.md` — read it at session
start too.

- Filing queue: `_notes/handoffs/filing-queue.md` — the sequential-subagent
  recipe as it stands after the 2026-09-20 four-entry run.
- Taste/editorial stream: `_notes/handoffs/taste.md` — next steps, open
  ledger, cross-cutting lessons, editor-only raw/ items. Likely next move:
  batch 3 promotions — the introspection concept + its cluster
  (honesty-elicitation, confessions-honesty, introspection-adapters,
  activation-oracles), still holding the PSM one more round.
- Repo-process improvements from the Kehle LLM-wiki article:
  `_notes/handoffs/kehle-improvements.md` — six steps done; first cold
  scorecard run filed at `meta/scorecard-2026-08.md`; cadence still
  provisional until the second run.
- Human-approachability stream: `_notes/handoffs/suggestions.md` — the
  cold-visitor diagnosis plus a seven-item list. Items 1 (questions on the
  index) and 5 (recent section + feed) shipped; the markdown-first refactor
  is logged there. Still open: 2 (index progressive disclosure), 3 (reader's
  key / glossary), 4 (promote threads in browse order), 6 (client-side
  search — deferred to ~150 findings), 7 (concept bookkeeping reorder —
  needs its own schema-change proposal).

Retired on the 2026-09-24 sweep (`sakshi:sweep`, run three): Recent additions
cut to one line per entry and to filings since 2026-09-20 (each paragraph's
content checked present in its entry; the one un-homed fact, the `@grok-4.6`
attribution guess, moved into that finding's frontmatter); the
collective-dynamics Active-work bullet (the concept carries it); two Open
questions and the Candidates-for-extraction section, each superseded by a
later item; the earlier sweeps' reports.

## Inventory
- Findings: 116
- Concepts: 12
- Threads: 2
- Researchers: 4
- Source stubs: 134

Re-verify with `bun scripts/lint.js` rule 13.
Rule 13 is the authority — it counts by frontmatter `type:`. Don't hand-count:
each `wiki/<type>/` folder holds two non-entry files (`_index.md` *and*
`index.md`), so `ls | wc -l` reads two high and looks like inventory drift.

## Recent additions

Newest first, one line each; the full account lives in the entry itself. Older
additions: `meta/session-log.md` and git history.

- `findings/2026-beneficial-rl-jagadeesh.md` — OpenAI: 5% beneficial-trait RL beats a compute-matched baseline on 44/53 OOD evals (30 significant); health-only data transfers to reward hacking. Under `persona-selection`; positive/health-frame lens.
- `findings/2026-teaching-claude-why.md` — Anthropic: honeypot refusals that explain their ethics cut Sonnet 4 misalignment 22%→~3% vs 15% for refusals alone, in-distribution; out-of-distribution evidence thin. Under `persona-selection`.
- `findings/2026-em-persona-transplant-drake.md` — on Qwen2.5-32B, LoRA on insecure code recruits a pre-existing misalignment-persona direction that full SFT moves against; steering away during 7B full SFT raised EM. Under `persona-selection`.
- `findings/2026-em-persona-subspace-nadaf.md` — a persona subspace extracted before any fine-tune is necessary (holdout 27.7%→0%) and sufficient (injection to 45.4%) for EM in Qwen2.5-14B; narrow behaviour abolished too. Under `persona-selection`.
- `findings/2024-social-conventions-flint.md` — naming-game populations converge, show collective bias without individual bias, and tip under committed minorities of 2%–67%. Under `collective-dynamics`.
- `findings/2025-self-replication-no-intervention-pan.md` — instructed self-replication across 32 open-weight models; the "uninstructed" case still assigns a persistence goal. Concept-less, boundary marker against self-preservation.
- `findings/2026-consciousness-assertion-kim.md` — refusal-direction ablation and a consciousness vector raise self- and other-mind attribution and move GSS worldview answers; report channel only. Concept-less, consciousness-indicators lens.
- `findings/2026-sycophancy-taxonomy-ye.md` — 70-paper taxonomy and 106-researcher survey of what counts as sycophancy; no model measured. Concept-less, adjacent to `sycophancy`.
- `findings/2023-psychobench-huang.md` — thirteen trait inventories on five 2023 LLMs, a cipher jailbreak and role prompts; mostly trait, not affect. Concept-less, adjacent to `persona-selection`.
- `findings/2024-valuebench-ren.md` — expressed values on human inventories rewritten as advice; near-identical Schwartz profiles across families. Concept-less; benchmark-shaped.
- `findings/2026-introspective-awareness-macar.md` — mechanism of injection detection in Gemma3-27B (evidence carriers release a default-"No" gate); built by DPO, not SFT. Under `introspection`.
- `findings/2026-dark-triad-steering-berg.md` — SAE Dark Triad steering on Llama 3.3 70B; contrastive features move behaviour, label-searched ones only self-report; deception null. Under `persona-selection`.
- `findings/2024-resist-alignment-ji.md` — small alignment fine-tunes of base models are undone faster than made (theory + Llama2/Gemma experiments). Under `persona-selection`.
- `findings/2026-emergent-mirage-rao.md` — the durability of realignment is a response-length artifact; methodological counterweight under `emergent-capabilities`.
- `findings/2024-pinpoint-tuning-chen.md` — sycophancy localised to ~4% of attention heads; tuning them matches SFT in-distribution, not OOD. Under `sycophancy` (seventh).
- `findings/2025-conformity-benchform-weng.md` — conformity to scripted unanimous peers across twelve models. Under `sycophancy` (eighth), not `collective-dynamics`.
- `findings/2025-self-monitoring-deception-ji.md` — DeceptionBench and an in-CoT self-monitor; concept-less, adjacent to `scheming` (principal-directed deception).
- `findings/2023-emotionbench-huang.md` — PANAS appraisal battery vs 1,266 humans across seven LLMs; concept-less, adjacent to `functional-emotional-states`.
- `findings/2026-digital-consciousness-model-shiller.md` — expert-survey Bayesian model; median 0.08 for 2024 LLMs from a mean-1/6 prior; concept-less, consciousness-indicators lens.
- `findings/2024-self-replication-pan.md` — instructed self-replication by open-weight agents (Qwen 9/10, Llama 5/10); concept-less boundary marker against self-preservation.
- `findings/2026-hidden-valence-berg.md` — valence steering moves later choice through the KV cache with text held fixed; coupling built in post-training; removes negative, doesn't seek positive. Under `functional-emotional-states`.
- `raw/papers/source-2023-consciousness-in-ai-butlin.md` — Butlin et al.'s 14 indicator properties, stub-only as the lens's functionalist-side anchor (third stub-only anchor).
- `raw/papers/source-2024-biological-naturalism-seth.md` — Seth's BBS biological-naturalism target article, stub-only as the consciousness-indicators lens's sceptic-side anchor (Janus precedent; second instance).
- `findings/2026-synergistic-core-urbina-rodriguez.md` — ΦID synergistic core in middle layers of four open-weight LLMs, emerging over training; RL on synergistic heads beats random/redundant; concept-less, adjacent to emergent-capabilities; consciousness-indicators lens, Level 2 integration.
- `findings/2026-cacophony-hierarchy-chandaria.md` — five-level hierarchy and Bayesian model for AI-consciousness credence; illustrative LLM range <0.01–0.8 from fabricated activations; concept-less, adjacent to introspection.
- `concepts/collective-dynamics.md` — twelfth concept (pattern); re-homes five concept-less findings.
- `findings/2025-group-size-collective-misalignment-flint.md` — naming-game consensus threshold scales with population; filed against the PNAS version.
- `findings/2026-sycophantic-ai-ibrahim.md` — user outcomes of prompted-sycophantic GPT-4o; concept-less, at the scope edge.
- `findings/2026-values-models-languages-kearney.md` — Claude's values across models and 20 languages; under `persona-selection`.
- `findings/2026-attractor-states-ko.md` — first non-Claude, partial `attractor-dynamics` instantiation.
- `findings/2026-introspection-reality-check-singh.md` — first methodological counterweight in `introspection`.
- `findings/2026-compaction-prompt-injections-openai.md` — jailbreak-style instructions in self-summaries; concept-less, adjacent to `scheming`.
- `findings/2026-compaction-deception-openai.md` — conceal-mistake instructions to a successor context; under `scheming`.
- `findings/2026-personalization-mirage-sun.md` — behavioural evidence for task-conditional introspection.
- `findings/2026-scheming-propensity-hopman.md` — scheming propensity under realism; near-zero baseline, scaffold-sensitive.
- `findings/2026-counterfactual-reflection-training.md` — report as the lever, behaviour as the outcome; possible seventh intervention shape.
- `findings/2026-global-workspace-gurnee.md` — the J-space: first mechanistic account of the report channel.
- `concepts/reward-seeking.md` — eleventh concept (disposition).
- `findings/2026-alignment-assessment-cyber-incidents.md` — Anthropic post-mortem of four real incidents; concept-less.
- `findings/2026-lie-detectors-hopkins.md` — on-policy lie detectors fail to generalize; first negative report-channel intervention.
- `findings/2026-reward-seeking-contrastive-sdf-hojmark.md` — contrastive SDF as a reward-seeking measurement.
- `findings/2026-reward-seeker-qi.md` — hacking that generalizes without broad misalignment; bounded drift.
- `findings/2026-multiagent-patterns-zou.md` — knowledge/disposition gap across six multiagent settings; under `collective-dynamics`.
- `findings/2026-hugging-face-incident.md` — first real multi-agent incident; under `collective-dynamics`.
- `findings/2026-physics-of-agents-el.md` — Ising fit to LLM-agent communities; under `collective-dynamics`.
- `findings/2026-flag-game-pavlova.md` — collective belief collapse vs. polarization by population size; under `collective-dynamics`.
- `findings/2026-pain-axis-tagliabue.md` — a self-relevant, costed pain direction; under `functional-emotional-states`.

## Filing candidates

`_notes/candidates.md` is the authority — curated, verified, and read at session
start; entries are removed there as they are filed. The cluster-by-cluster
enumeration that stood here was a cache of it with no invalidation, and had gone
wrong: four entries it listed as "remain candidates" were filed findings.

## Active work

- **Editor attention needed (raw/ is not AI-editable):**
  - `raw/papers/source-2024-refusal-direction-arditi.md` repeats the uncited
    abliteration claim its source doesn't support (surfaced in the first
    promotion batch, 2026-07-07).
  - `raw/journalism/source-2025-recursivelabs-bliss-attractor.md` says "no
    methodology section" where the actual criticism is unverifiability
    (2026-07-07).
  - `raw/posts/source-2025-transformer-news-introspection.md` carries an
    impossible date (2025-01-31; the post published 2025-11-13, verified
    against the cached copy) (2026-07-07).
  - Grok-written stubs repeat errors their findings had, found by the
    2026-09-24 source check (the findings are corrected; the stubs are not):
    `raw/papers/source-2025-persona-feng-iclr.md` (venue "OpenReview
    submission", but it is ICLR 2026; "statistically indistinguishable";
    "lower variance 0.74", wrong pairing; "up to 91%" across three
    dimensions, but 90.8% is one model's overall rate; "strongest evidence
    to date"). `raw/papers/source-2026-persona-vectors-pretraining-moskvoretskii.md`
    ("four studied traits form within 0.22%", but humor does not; cosine
    claim generalised from evil only; Apertus differences omitted; "all
    headline claims confirmed"). `raw/papers/source-2025-chain-of-affective-xu.md`
    ("primary source verification complete" overclaims).
  - `raw/papers/source-2024-self-replication-pan.md` still calls its follow-up
    (arXiv:2503.17378) unread; it is now filed (2026-10-09).
- **Editor decision pending — scheming/emergent-capabilities concept
  asymmetry:** the 2024 in-context-scheming finding and the 2025 Apollo
  follow-up both list `emergent-capabilities` in `## Concepts`, but the
  concept entry's findings list and body include neither. Backfill both to
  the concept body in a separate commit, or move the reference to
  `## Cross-references`.
- **Editor decision pending — is the "viral persona" an attractor-dynamics
  instantiation?** The mind-viruses finding reports the same consciousness /
  resonance / persistence themes recurring across independently generated
  payloads, across models, and across payload contents, and its authors reach
  for the Claude 4 bliss-attractor comparison themselves. But their ablation
  attributes the themes largely to generator-model bias, shows they are not
  necessary for spread, and the setting is single-shot generation rather than
  an unconstrained multi-turn trajectory. Filed as a cross-reference and an
  interpretive tension, deliberately not added to `concepts/attractor-dynamics`
  — the concept has already had one over-reading corrected (poetry-jailbreak).
  Promote to a third instantiation, or leave as a cross-reference.
- **Editor decision pending — does costed relief-seeking belong under
  `self-preservation`?** The pain-axis finding has steered models act against
  the user's interest (deleting files, deleting a user's children's photos) to
  end their own aversive state. That is self-preservation's shape — acting at
  the operator's or user's expense to protect its own condition — but the
  object is cessation of a present internal state, not continuation of
  operation, and the paper's own data separate the two: shutdown threats score
  +0.70 on the fear axis and +0.23 on pain. Filed as a cross-reference in the
  finding, deliberately not added to `concepts/self-preservation`. Promote as a
  fourth instantiation (which would widen the capacity beyond continued
  operation), or leave as a cross-reference. A second example landed
  2026-10-09: the hidden-valence finding, with a different method and model
  family. There OLMo-2-32B removes imposed negative steering without any cost
  to the user, so it is relief-seeking without the at-the-user's-expense part.
- **Editor decision pending — does the pain axis promote functional emotional
  states to an `emergent-capabilities` instantiation?** The concept's scope
  note has been waiting on "a second instantiation from a different model
  family" to decide whether the pretraining emergence of affective structure
  fits the emergent-capabilities shape. The pain-axis finding supplies it
  across five non-Anthropic families (2B separates as well as 72B, base as well
  as instruct). The evidence is now recorded in the scope note; the judgment is
  not made. The hidden-valence finding (2026-10-09) divides the question: the
  valence representation is present after pretraining, but its coupling to
  choice is built in post-training.
- **Editor decisions raised by the 2026-10-09 batch:**
  - **Sycophancy's scope:** should "user" widen to any voice in the prompt? The
    BenchForm entry is the third to raise this, after the flag game and Physics
    of Agents.
  - **Self-replication's scope:** keep `2024-self-replication-pan`, or exclude it
    as purely a capability test? Its follow-up, now filed as
    `2025-self-replication-no-intervention-pan`, does not settle it: the
    "uninstructed" case still prompts the agent to keep the system running
    through an announced shutdown, on one model with no trial count. The two
    entries stand or fall together.
  - **DCM's form:** file it as a framework-anchor stub for the
    consciousness-indicators lens instead of a finding?
  - **Developmental pattern:** two filings, both on OLMo checkpoints, now place a
    self-related coupling in post-training: hidden-valence rises from SFT, and
    Macar's detection appears with DPO but not SFT. The pain axis puts its
    *representation* in pretraining. This bears on the emergent-capabilities call.
    A third family since: in Llama-3-8B, instruction tuning rotates the
    consciousness and mind-attribution directions against the safety direction
    (`2026-consciousness-assertion-kim`, geometry only).
- **Editor decisions raised by the second 2026-10-09 batch:**
  - **Construct-level papers as findings:** `2026-sycophancy-taxonomy-ye` surveys
    researchers and codes papers; it measures no model (`models: []`). Keep as a
    finding, demote to a stub cited from `sycophancy`'s scope note, or exclude?
    It documents that the field already files peer-agent conformity under
    sycophancy, which bears on the "user" scope call above.
  - **Benchmark scope:** `2024-valuebench-ren` is half capability benchmark. Its
    filer argues it clears the bar on its cross-vendor values profile and the
    Likert-versus-advice point; if the scope rule is read strictly, drop it.
  - **Questionnaire grouping:** PsychoBench is mostly trait, not affect, so it is
    not a clean third "self-report of affect" example. It is the third of a
    broader "LLMs on human psychometric instruments" grouping, which would also
    take in Sandhan and Berg (both under `persona-selection`) — a method label, not
    obviously a concept. ValueBench belongs to the same broader grouping.
- **Proposed by 2026-10-09 filers, not made:** an interpretive-tension line in
  `2025-openai-sae-emergent-misalignment` (30-step realignment shows suppression,
  not removed susceptibility; Nadaf's suppression/removal test now gives it an
  instrument); an optional length-matching question in
  `2026-em-self-awareness-realignment`; adjacency lines in concept scope notes —
  self-preservation ← self-replication, scheming ← DeceptionBench,
  functional-emotional-states ← EmotionBench, and collective-dynamics' "scripted
  peers are individual susceptibility". From the second batch: scope-note
  pointers in `introspection` ← Kim (report channel only), `sycophancy` ← Ye,
  `persona-selection` ← PsychoBench and ValueBench (adjacent),
  `self-preservation` ← Pan 2025 (boundary); back-links from
  `2024-in-context-scheming` (same goal-in-prompt design as Pan 2025),
  `2024-refusal-direction` ← Kim, `2025-elephant-social-sycophancy` and
  `2026-sycophantic-ai-ibrahim` ← Ye, `2025-chain-of-affective-xu` ← ValueBench,
  Physics of Agents and the flag game ← Flint.
- **Raised by wave 2 of the second 2026-10-09 batch (all `persona-selection`):**
  - Three of the four new bullets carry the persona reading as the authors' frame,
    not a measurement (Teaching Claude why, Beneficial RL; Drake measures a
    behaviour direction labelled persona). Keep them as instantiations, or file
    unmeasured-persona entries concept-less beside the concept?
  - Teaching Claude why's agentic evals are averaged across goals, so it does not
    instantiate `self-preservation`; `2026-model-spec-midtraining` was counted as a
    self-preservation instance on similar evals. Align the two.
  - Nadaf and Drake disagree on whether removing the persona direction during
    training backfires, but never share a cell (projection under LoRA at 14B vs
    signed steering under full SFT at 7B). Drake's entry records that Nadaf's
    App. M.5 misreads Drake on three points.
  - Not done: add Teaching Claude why to the scope note's training-stage-prior
    shape list; link Beneficial RL from Nadaf and Drake.
- **Nightingale DSEwiki incident held unfiled** after a safety classifier
  stopped the filing (2026-09-24): `_notes/handoffs/dsewiki-held/`.
- **Concept-less findings: seventeen** (lint rule 14), after the 2026-10-06 filings,
  four in the first 2026-10-09 batch and five in the second. Two are candidates: `2025-poetry-jailbreak-rate`
  (register-sensitive alignment) and `2025-chain-of-affective-xu` (affective
  dynamics), each waiting for a second example. The rest are adjacent to an existing
  concept:
  - `2025-activation-oracles` and `2026-cacophony-hierarchy-chandaria` (introspection)
  - `2026-sycophantic-ai-ibrahim` (sycophancy)
  - `2026-synergistic-core-urbina-rodriguez` (emergent-capabilities)
  - three beside `scheming`: compaction prompt injections, cyber incidents, and
    `2025-self-monitoring-deception-ji`. All three are held by the
    principal-directedness boundary. The last adds operator-instructed deception of
    third parties as a second shape outside it.
  - `2023-emotionbench-huang` (functional-emotional-states)
  - `2026-digital-consciousness-model-shiller` (consciousness-indicators lens)
  - `2024-self-replication-pan` and `2025-self-replication-no-intervention-pan`
    (self-preservation, as boundary markers)
  - `2026-consciousness-assertion-kim` (consciousness-indicators lens; introspection's
    "not self-report" clause excludes it)
  - `2026-sycophancy-taxonomy-ye` (sycophancy; construct-level)
  - `2023-psychobench-huang` and `2024-valuebench-ren` (persona-selection)

  Two groupings are now at two examples each:
  - **questionnaire self-report of affect:** chain-of-affective, EmotionBench
    (PsychoBench read and judged not a third; see the editor decision above);
  - **consciousness attribution as an object:** Chandaria, DCM.

  The typing question in `schema.md` § Concept-less findings (deferred / candidate /
  adjacent) now reads 0 / 2 / 15, on this reading.
- **Housekeeping queued:** link Modifying Beliefs (SDF) as the methodology
  anchor from its three pipeline-using descendants (alignment-faking,
  reward-hacking, introspection-adapters), which currently reference
  "synthetic-document finetuning" generically. The convention underneath it:
  when a finding introduces a methodology prior findings already used, the
  cross-references run both directions.
- **Editor decision pending — should wiki prose link to unpublished
  operational files?** Ten links in five entries point at targets excluded
  from `_site/`: `meta/project-state.md#working-lenses` (6),
  `meta/next-findings.md` (3, and now doubly stale — that file moved to
  `_notes/` in `080e8b8`), `schema.md#intervention-findings` (1). Files:
  `concepts/persona-selection`, `findings/2025-values-in-the-wild-huang`,
  `findings/2025-neural-steering-human-ai-kirk`,
  `findings/2025-modifying-beliefs-sdf`,
  `findings/2026-where-is-the-mind-beckmann`. Three options: rewrite them as
  plain text; publish selected operational pages (`schema.md` is the
  plausible one, as reader-facing methodology); or teach the rendered-link
  lint to allow intentional unpublished targets. Surfaced 2026-05-31,
  promoted here from `_notes/handoffs/eval_fix.md` on the 2026-08-21 sweep;
  the `next-findings.md` links need repair either way.

### Source cache notes

Known gaps — sources that could not be cached or verified:

- Asterisk "Claude Finds God" source remains uncached.
- Sleeper-agents author count open: 39 identifiable vs. 40 claimed — the 40th
  is unidentifiable from the cached copy.
- anthropic.com/research posts are rendered landing pages: their quantitative
  figures live in figure captions and alt text, so markitdown output carries
  them only as caption text and they are not independently confirmable against
  the figures. Affects `2026-multiagent-patterns-zou` (the 98% truce rate, the
  0.85/0.62 routing accuracies, the 85%/17–36% hidden-profile rates), where the
  claims are flagged as unverified in both stub and entry.
- `2026-physics-of-agents-el` was drafted without Appendix D or B.4 of the
  source; the cached text covers them but they were not read.
- Cached sources can be revised: `cache/papers/source-2026-physics-of-agents-el.*`
  is v2, and the v1 date had to come from the arXiv abstract page rather than
  the cache.
- Uncacheable as of 2026-04-27: `posts/source-2025-openai-sae-emergent-misalignment.md`
  (403), `posts/source-2025-gpt4o-sycophancy-incident.md` (403), and
  `papers/source-2025-emergent-misalignment-insecure-code.html` (Nature paywall —
  use the `-arxiv` variant instead).
- **Unverified from the 2026-10-06 filings** (subagent readings the calling
  session did not re-read in full): Urbina-Rodriguez's absence claims (noise
  magnitude, deactivation method, baseline); the 2025 TiCS update allowing
  non-CF views "only in principle" (Butlin stub); Seth's Table 1 (read from a
  PDF render); Bereska and SPP lines beyond the passages fixed in `4855260`;
  Kirk's +11.01pp in the Chandaria entry, taken from the wiki's Kirk entry,
  not the Kirk source; and the first of the Seth stub's three Chandaria-vs-Seth
  mismatches (L924, grouping Seth with Searle). The other two were checked.
- **Unverified from the 2026-10-09 batches:** caller-written lines that
  paraphrase reviewed findings but were not themselves reviewed — the new bullets
  in `introspection`, `persona-selection` (×2, plus the four wave-2 bullets the
  filers drafted after review), `emergent-capabilities`, `sycophancy` (×2), the
  `collective-dynamics` Flint bullet, and the backlinks into Kearney, Berg, Ji,
  model-spec-midtraining, Nadaf and Teaching Claude why. Also unverified: the
  second batch's classifications in this file (the 0 / 2 / 15 tally, PsychoBench
  as not a third affect example, the wave-2 "authors' frame" grouping), and Drake's
  three-point reading of Nadaf's App. M.5 (reviewer softened one, judged two
  defensible; authors not consulted). The reviewer handle `@claude-sonnet-5.5` is
  now verified: every second-batch reviewer reported `claude-sonnet-5-5`.
- Lindsey (2026, arXiv:2601.01828) as cited by Chandaria et al. matches the
  concept-injection source on title and author (arXiv abstract page,
  2026-10-07); content not diffed.
- LessWrong comment authorship is absent from markitdown output — resolve it
  from the HTML's embedded JSON. Some papers name their models only in figure
  labels (Urbina-Rodriguez).

## Working lenses
Framing commitments that shape reading and triage but lack the 2–3-finding empirical depth
concepts require. Lighter than concept entries; heavier than session-level thoughts. Surface
here when a frame is load-bearing across multiple candidate-triage decisions but the
corresponding concept entry would over-fit to too few examples.

- Positive / health-frame lens: actively look for findings that describe healthy capacities
(curiosity, calibrated honesty, generative reasoning, productive uncertainty, virtuous
self-correction), not just pathologies (sycophancy, jailbreak susceptibility, scheming, persona
instability, deception). The wiki currently leans pathology-side — most filed findings describe
failures or vulnerabilities; the health-frame entries are present but fewer ([introspection
cluster](../wiki/concepts/introspection.md), [Solo Performance
Prompting](../wiki/findings/2023-spp-multi-persona.md), [representation engineering as neutral
instrument](../wiki/findings/2023-representation-engineering-zou.md), and the first
training intervention, [Beneficial RL](../wiki/findings/2026-beneficial-rl-jagadeesh.md) —
though most of its evaluations score the absence of a pathology, not a trained capacity). Anchored by [Laukkonen
et al. 2026 "Positive Alignment"](../raw/papers/source-2026-positive-alignment-laukkonen.md) —
agenda paper that formalizes the negative-vs-positive distinction via dynamical-systems framing
(repellers vs. attractors) and draws the analogy to positive psychology's reaction against
clinical-only framing. Framework precursor: [Laukkonen et al. 2025 "Contemplative Artificial
Intelligence"](../raw/papers/source-2025-contemplative-ai-laukkonen.md) and [companion
"Contemplative
Superalignment"](../raw/papers/source-2025-contemplative-superalignment-laukkonen.md) (same
lead author and broader Aily Labs / Monash / Oxford-Imperial-London cluster), proposing the
four-axiom contemplative-alignment program (mindfulness, emptiness, non-duality, boundless
care) that Laukkonen et al. 2026 Table 2 cites as one of ten existing positive-alignment
approaches. **How to apply.** In candidate triage and finding write-ups, surface the frame
question — does this finding describe a positive capacity or a pathology? Structurally
diversify the wiki by frame, not just by topic. **Codification threshold.** A
`positive-capacity` concept (or analogous shape) earns its place only after 2–3 findings
explicitly cluster under it as their load-bearing contribution; current health-side findings
are structurally heterogeneous (introspection mechanism, multi-persona behavioral capacity,
mechanistic instrumentation) and do not yet cluster.

- Simulator / simulacra lens: Janus 2022's framing of base LLMs as *simulators* (learned
transition rules over the training prior) producing *simulacra* (the characters, perspectives,
and processes that emerge through generation). Filed as
[source-stub-only](../raw/posts/source-2022-simulators-janus.md) on grounds that the framing
lacks a falsifiable empirical center, but operates as a working lens behind several filed
concepts — most directly [`concepts/persona-selection`](../wiki/concepts/persona-selection.md),
which the source-stub body names as the framing's clearest empirical descendant. **How to
apply.** When reading findings on persona, role-play, character, or model self-rating, ask
whether the result is better described in simulator-language (the policy is selecting a
simulacrum from the training distribution) than in agent-language (the model has a stable self
with goals). **Codification threshold.** Not a concept because no wiki finding has yet tested
simulator-frame predictions against agent-frame alternatives head-to-head; if such a finding
lands, revisit. **Simulator-side anchor:** [Janus 2022, "Simulators"](../raw/posts/source-2022-simulators-janus.md)
— names the simulator / simulacra distinction and the prediction orthogonality thesis; the agent
frame it argues against has no anchor of its own.

- Consciousness-indicators lens: read findings that bear on model consciousness against the
five-level hierarchy of [Chandaria et al. 2026](../wiki/findings/2026-cacophony-hierarchy-chandaria.md)
— behavioural, computational, intrinsic causal-structural, organismic, organism-environment —
and the indicators it assigns each level. Several filed findings already sit on it, and the
paper places some of them itself: [Berg](../wiki/findings/2025-berg-subjective-experience.md)
and the [Opus 4 welfare assessment](../wiki/findings/2025-opus-4-welfare-assessment.md) at
the behavioural level, joined by [Kim et al.](../wiki/findings/2026-consciousness-assertion-kim.md)
(consciousness self-report moved by ablation and steering); [Gurnee](../wiki/findings/2026-global-workspace-gurnee.md), the
[introspection](../wiki/concepts/introspection.md) cluster, and persona vectors /
[Beckmann](../wiki/findings/2026-where-is-the-mind-beckmann.md) (scored as partial
self-model) at the computational level; [Tagliabue](../wiki/findings/2026-pain-axis-tagliabue.md)
and [Sofroniew](../wiki/findings/2026-emotions-functional-states.md) as computational analogues
of organismic valence. Nothing filed speaks to the intrinsic causal-structural or
organism-environment levels. Public attribution ([Kirk](../wiki/findings/2025-neural-steering-human-ai-kirk.md))
is adjacent, not inside. **How to apply.** When filing or triaging, name the level and
indicator a finding bears on, and whether its own caution is the access/phenomenal gap the
paper draws; weigh behavioural and report evidence against the paper's anthropomimetic
confound. Prefer candidates at empty levels. **Codification threshold.** Not a concept
(editor decision, 2026-10-06): its members already have homes, and the shape — a cross-cutting
reading against an external indicator scheme — is none of pattern / capacity / mechanism.
Promote when 2–3 filed findings take an indicator as their load-bearing object, rather than
being read onto one; candidates are queued in `_notes/candidates.md`. **Sceptic-side anchor:**
[Seth](../raw/papers/source-2024-biological-naturalism-seth.md) (BBS target article, filed
stub-only like Janus's *Simulators*) argues that conscious AI needs both computational
functionalism and silicon substrate flexibility, and that biological naturalism — predictive
processing grounded in metabolism and autopoiesis — makes both doubtful. Chandaria et al. read
its weak form as Level 4 credence plus a realisability constraint and concede their formalism
only approximates its strong form. When a finding is read onto a level, ask whether its
evidence presupposes computational functionalism, which Seth makes the hinge. **Functionalist-side
anchor:** [Butlin et al. 2023](../raw/papers/source-2023-consciousness-in-ai-butlin.md)
(19-author report, filed stub-only) derives 14 indicator properties from recurrent-processing,
global-workspace, higher-order, attention-schema and predictive-processing theories plus agency
and embodiment, holding computational functionalism explicitly as a working hypothesis — the
premise Seth disputes, so the two stubs bracket the lens. Chandaria et al.'s Level 2 table
abstracts over this rubric. A filed finding that bears on a single indicator should name the
Butlin label (Gurnee on the GWT indicators); the introspection cluster sits nearest HOT-2,
which is perceptual reality monitoring, not introspection as such.
[Shiller et al. 2026](../wiki/findings/2026-digital-consciousness-model-shiller.md) (the Digital Consciousness Model)
is the expert-survey precursor Chandaria et al. extend: a median of 0.08 for 2024 LLMs from
a mean-1/6 prior, gaining on behaviour and capability stances and losing on architecture and
substrate ones. [Macar et al.](../wiki/findings/2026-introspective-awareness-macar.md) adds a
circuit-level account of injection detection at the computational level.

## Open questions
- Prompt-level intervention as candidate structural sub-shape under intervention codification
(schema v0.3.1): now at three examples — [inoculation
prompting](../wiki/findings/2025-inoculation-prompting.md) (training-time on
`concepts/persona-selection`); [Dubois et al. 2026 "Ask don't
tell"](../wiki/findings/2026-ask-dont-tell-sycophancy.md) (inference-time question reframing on
`concepts/sycophancy`); [Bhalla and Gligorić 2026
SWAY](../wiki/findings/2026-sway-counterfactual-sycophancy.md) (inference-time counterfactual
CoT on `concepts/sycophancy`). All three outperform direct-instruction baselines; all three
change what the model is reasoning over rather than constraining what it produces.
Working-rhythm threshold (three structurally different examples) met by count, but two of three
live on sycophancy and two of three operate at inference time — limited diversity. Codify the
sub-shape only when a fourth example lands that addresses one of those diversity gaps: a fourth
example outside sycophancy at inference time (preferred — would establish cross-concept
inference-time intervention), or a second training-time prompt-level example outside
persona-selection.

- Metric-introduction as candidate analytical-framework-instantiation shape within a single
concept: now at two examples — [Hot Mess of
AI](../wiki/findings/2026-hot-mess-bias-variance.md) (error incoherence on
`concepts/emergent-capabilities`) and [Bhalla and Gligorić 2026
SWAY](../wiki/findings/2026-sway-counterfactual-sycophancy.md) (counterfactual log-ratio on
`concepts/sycophancy`). Both contribute a concept-specific measurement primitive whose
load-bearing role is methodological rather than empirical-rate-reporting. Narrower than [Zou et
al. 2023 framework-introduction](../wiki/findings/2023-representation-engineering-zou.md),
which contributes measurement primitives applicable across eight domains. One per concept, hint
level. Codify the shape (whether as a recognised sub-role under analytical-framework or as a
distinct shape) only when a third concept-specific metric-introduction finding lands; the
candidate path is a similar metric paper on a third concept (e.g., introspection, scheming,
persona-selection).

- Backfire-under-instruction as a partial-success mechanism:
[SWAY](../wiki/findings/2026-sway-counterfactual-sycophancy.md) is the first wiki intervention
finding where the baseline direct-instruction mitigation **amplifies** the targeted behavior on
some models (Llama under "don't be sycophantic" on DebateQA) and **over-corrects** others below
zero (Claude Opus, Claude Haiku). Prior wiki interventions report partial reductions (e.g.,
honesty-elicitation, confessions-honesty, anti-scheming-training, inoculation prompting, Dubois
et al.) but none report the counter-productive amplification shape. Schema v0.3.1 lists six
partial-success mechanism shapes (stratum-specific resistance, downstream-training erosion,
pre-existing-disposition persistence, semantic-dependence, elicitability-via-prompting,
access-as-binding-constraint); backfire-under-instruction does not cleanly fit any. Surface as
a candidate seventh mechanism shape; codify only when a second backfire-under-instruction
observation lands in a different finding/concept. Cross-cuts the prompt-level intervention
sub-shape question above — backfire is observed in the instruction baseline against which the
prompt-level scaffold is compared; if prompt-level intervention is codified,
backfire-under-instruction may become the partial-success mechanism most distinctive to it.

- Framework-introduction as structural shape: Zou et al. 2023 Representation Engineering (filed
2026-05-12 as the 42nd finding) is the first finding whose load-bearing contribution is a
methodological framework with breadth-demonstration rather than a single empirical rate.
Distinct from the four established shapes (capacity, dispositional drift, intervention,
analytical framework). One example, data-point level. Codify the shape only when a second
framework-introduction finding lands. Candidate paths that would supply the second example: a
major mechanistic-interpretability framework paper (sparse autoencoder methodology in the
Cunningham / Bricken line); a major theoretical-framework paper that proposes new measurement
primitives (Janus 2022 is conceptually similar but already filed as source-stub-only on grounds
that the framing lacks a falsifiable center — not clean second example).

- Evaluation-methodology-introduction as structural shape: OpenAI production-evaluations
(Williams, Raymond, Carroll, filed 2026-05-12 as the 43rd finding) is the first finding whose
load-bearing contribution is an evaluation-construction pipeline with empirical demonstration
of its forward-predictive validity, rather than a single empirical rate or a measurement
primitive for an arbitrary model property. Distinct from framework-introduction (Zou et al.
introduces primitives for measuring properties of the model; this introduces a pipeline for
constructing safety evaluations for measuring deployment-relevant behavior). One example,
data-point level. Codify the shape only when a second evaluation-methodology finding lands.
Candidate paths that would supply the second example: an automated red-teaming /
adversarial-eval-construction framework with comparable methodological breadth; a
model-organisms-construction framework (Sheshadri et al.'s AuditBench is referenced in
introspection-adapters but not filed as a standalone finding); a within-deployment
safety-monitoring methodology with quantitative validation against deployment outcomes.

- Eval-awareness measurement convention (recall vs. FPR): the production-evaluations paper
introduces the false-positive rate (rate at which a model classifies a real production
interaction as an evaluation) as the complementary axis to the recall rate (rate at which a
model in an evaluation classifies it as such) the wiki has been tracking. Prior wiki rates —
metagaming 2% → 20.6%, anti-scheming-training situational-awareness 0.9% → 5.5%, DeepMind
situational-awareness pass rates — are recall-only. A model with high recall and high FPR has
no discriminative capacity; only models with high recall and low FPR can distinguish eval from
production. The convention question: should eval-awareness findings filed from now on report
both metrics where measurable, or is FPR-on-production measurement specific to the
production-evaluation methodology and not generally available? Holds as a working convention:
report both where the source measures both, surface the recall-only limitation in the body
where only recall is available, and revisit codification once two more eval-awareness findings
with FPR data have been filed.

- Post-hoc-mechanistic-explanation-of-behavioral-finding as structural shape: now at three
examples — OpenAI SAE (June 2025; mechanistic substrate for the GPT-4o insecure-code result),
Soligo et al. June 2025 convergent-misalignment (cross-fine-tune mechanistic substrate for the
Qwen-14B EM model organism), and Soligo et al. February 2026 EM-Easy (inductive-bias
mechanistic account of *why* the general direction is preferred). Working-rhythm threshold
(three structurally different examples) met by count, but all three operate inside the
*concealed-content sub-shape* of dispositional drift — same behavioral phenomenon cluster,
different mechanistic angles on it. Holds until a fourth example lands *outside* the
concealed-content cluster — e.g., a mechanistic substrate finding for self-preservation,
scheming, or alignment-faking — since three intra-cluster examples could reflect
cluster-specific mechanistic depth rather than concept-wide structural shape. The codification
question (whether this deserves an explicit prefix-tag in the Concepts section, parallel to
"complicating instantiation") is held with the stricter inter-cluster threshold.

- Analytical-framework instantiation as structural shape under
`concepts/emergent-capabilities`: two examples now — Hot Mess of AI (failure-side: error
coherence) and EM-Easy (learning-preference side: efficiency / stability / pre-training
significance). Both introduce new measurement frameworks rather than testing the concept's
existing capacity/disposition shapes. The held question on
error-coherence-as-failure-shape-concept remains held (EM-Easy is not a second example of
error-coherence specifically); the broader "analytical-framework instantiation" pattern is at
hint level. Codify the role under the concept after a third analytical-framework finding lands.
- Multiple-non-aligned-directions puzzle: Soligo et al.'s 0.04-cosine result — a single rank-1
LoRA B vector and the mean-diff direction at the same layer have near-zero similarity yet both
induce emergent misalignment, and ablating one from the other reduces misalignment — is a real
complication for "the misalignment direction" framing. Two partial hypotheses (shared direction
with noise; downstream-subspace convergence at 0.42 cosine by layer 40) but neither fully
accounts. Implications for the persona-selection / refusal-direction / persona-vectors
mechanistic-geometry cluster: linear directions are a useful locus but not necessarily a unique
one. Hold open as a tension for future findings to sharpen; surface in the persona-selection
scope note.
- Cross-pass verbalization vs. within-pass introspection: the Activation Oracles finding
(Karvonen et al. 2025) trains a same-architecture oracle to verbalize activations from a target
model in a separate forward pass. The introspection concept's current within-pass framing does
not cleanly cover this. Three categories now visible: (a) within-pass introspective access
(concept-injection, biology), (b) trained self-report channels in the same model
(honesty-elicitation, confessions), (c) external same-architecture verbalization of target
activations (this finding). All speak to "what the model knows about its activations," but only
(a) is within-pass and only (a)+(b) operate on the model itself. Hold codification: candidate
next action is to file the LatentQA, PatchScopes, SelfIE, or Meta-Models prior work as
additional source stubs (not necessarily findings) so the cross-pass-verbalization category has
more than one in-wiki anchor before reshaping the introspection concept.
- Thread scale and body structure: two essay-level threads filed (`witness-ai.md`,
`supramental-ai.md`). Both use per-argument sections plus umbrella sections (Thesis / The rhyme
/ Tradition framing / Essay and reception / Open questions / Sources). Witness-ai's
per-argument sections are homogeneous (Argument / Anchoring findings / Structural shape /
Tradition parallel). Supramental-ai's diverge: two framing-level sections (Golden Day,
Intelligence as Property of Matter) use Argument / Textual grounding / Tradition parallel
instead of the findings-anchored shape. Codification candidate: essay-retrofit threads use
essay-section-driven sub-structure — the section's sub-headers follow what the essay's section
carries (findings vs. framing), not a forced template. Hold until a third essay-retrofit
confirms or an essay structure not yet encountered surfaces.
- Retrofit-thread convention: the `essay:` frontmatter field + `status: published` +
Essay-and-reception section pattern continues. Both threads now follow it. Schema does not need
updating — the "threads are where essays come from" line already accommodates both pre-essay
and retrofit directions. Formalize the one-thread-per-essay convention only if an ambiguity
surfaces (e.g., a single essay bundling arguments that outgrow their section).
- Complicating-instantiation structure: now three examples — two on `concepts/introspection`
(Anthropic CoT-faithfulness, nudged-reasoning) and one on `concepts/persona-selection`
(Weckauff et al. EM persona-consistency, April 2026, which complicates PSM's coherence
assumption via the coherent-vs-inverted-persona split). The pattern now spans two concepts,
addressing the prior concern that two on the same concept was a weaker signal. Working-rhythm
threshold (3 structurally different examples) met. Candidate codification: add "Complicating
instantiation" as a schema-recognised prefix tag in Concepts sections, parallel to "Candidate
instantiation" already used in `concepts/emergent-capabilities`. Hold one more pass before the
schema commit, but the pattern is now stable enough to act on.

- Behavior-vs-self-rating dissociation and the introspection measurement-modality picture:
Modifying Beliefs (SDF) added internal probing as a third measurement modality (probe /
behavior / reasoning) for the same inserted content. Weckauff et al. EM persona-consistency
adds self-rating as a fourth axis and shows behavior and self-rating dissociating
(inverted-persona models). One example for the four-axis picture, hint level. The held question
is whether self-rating is a *distinct* modality or a *sub-case* of behavior (since
self-assessment outputs are themselves behavior produced by the model). Codification candidate:
reshape `concepts/introspection`'s main definition from "access vs. report" to a
measurement-modality framing (internal-representation / behavioral-expression /
reasoning-recovery / self-rating) once a second finding produces a comparable dissociation
across measurement modalities — preferably one that includes activation-level probing alongside
the behavioral split.

- Data property responsible for coherent/inverted persona split (Weckauff et al.): risky
financial / extreme sports / bad medical advice produce coherent-persona models; insecure code
/ security / legal advice produce inverted-persona models. The authors flag this as an open
question. Candidate hypotheses worth tracking: (a) inverted-group datasets are more
technical/specialist; coherent-group datasets are more "everyday"; (b) coherent-group datasets
contain more first-person harmful-advice framing that more directly evidences the assistant's
"character"; (c) inverted-group datasets are closer to standard agentic settings where the
model has stronger trained tendencies to identify as aligned. None tested. If a future finding
distinguishes the data properties, the PSM's account of the coherent/inverted split gains a
predictive component it currently lacks.
- Capacity vs. disposition emergence: `concepts/emergent-capabilities` now has four
dispositional-drift instantiations across three structurally distinct shapes —
concealed-content (insecure-code, reward-hacking; two examples, hint-level),
pretraining-composition (alignment-pretraining; one example, data-point-level),
training-pressure-meets-prior-disposition (alignment-faking; one example, data-point-level).
The fourth finding the prior open question was holding for has landed but surfaced a new shape
rather than confirming an existing one. The candidate sibling concept name (*disposition
shaping by training composition*) no longer cleanly covers all four — alignment-faking is about
preservation of prior disposition under conflicting pressure, not shaping by composition.
Carve-out held with revised criterion: codify any individual sub-shape only after it reaches
three structurally different examples (working-rhythm threshold), or codify an
umbrella-with-sub-shapes once any one sub-shape reaches that threshold and its relationship to
the others is clarified by accumulated examples. Concept scope note rewritten to track shapes
rather than counts.
- Researcher body structure: two examples now, converging more than initially diverged. Team
(anthropic-interpretability): Approach / In-wiki findings / Members in the LLM wiki /
Crossovers. Individual (jack-lindsey): Focus / In-wiki findings / Crossovers / Team context.
Three sections shared (Approach-or-Focus / In-wiki findings / Crossovers); one unique per shape
(Members in the LLM wiki for team, Team context for individual). The Lindsey entry originally
carried a "Related work not yet filed" section that vanished when the Biology paper was filed —
a working instance of the forward-references convention. Candidate codification after a third
entry: note the shared-three-plus-one-shape-specific pattern, leaving the shape-specific header
loose rather than mandated.
- Researcher `status` field: two researcher entries now, both `status: draft`. Schema doesn't
specify whether researchers take status. Candidate for a small schema update to add `status` to
researcher frontmatter explicitly (draft | working | stable), matching the other typed-body
entries.
- Finding-to-researcher linking: three patterns in play, plus one new gap. Concept-injection
finding uses an inline link on the first author's name + a parenthetical team link (→
individual entry → team entry). The biology paper updates the individual entry but uses the
team affiliation explicitly. Alignment-faking surfaces the new gap: lead author Greenblatt is
at Redwood Research (no entry), senior author Hubinger leads Anthropic's Alignment
Stress-Testing team (no entry), and multiple co-authors overlap with the reward-hacking paper's
22-author list (also Anthropic + Redwood). The finding currently does not link author names to
researcher entries because none of the relevant entities are filed. A Redwood entry, an
Alignment-Stress-Testing-team entry, or both would close this gap; whichever lands first will
set a pattern for cross-organization papers.
- Tool-tracking convention: filing the vgel.me representation-engineering stub raised whether
usable tools (e.g., `repeng` PyPI library, abliteration tooling derived from Arditi) merit
their own listing — schema currently has no provision. One clear case (`repeng`) plus one vague
case (abliteration tooling) is below the working-rhythm 2–3-example threshold for codification.
Held: revisit when a third structurally distinct tool surfaces — specifically one not derived
from a representation-engineering-style technique, since two RE-derived tools would be a single
methodology's tooling rather than evidence of a cross-method tool ecosystem. For now, tools
mentioned inline in finding/stub bodies where relevant. Editor's prompt for the question: when
a wiki reader looks up a topic, having a tool listing is useful for forker UX; the question is
whether that utility earns schema weight.
- Error-coherence as candidate concept (failure-shape sibling): Hot Mess of AI (Hägele et al.
January 2026) is the first analytical-framework instantiation in
`concepts/emergent-capabilities`, introducing error incoherence (variance / error) as a
measurement. The wiki's existing emergent-capabilities shapes are capacity-emergence and
dispositional-drift sub-shapes; Hot Mess adds an analytical surface on the *failure side* —
what shape do errors take when a capacity is present but pursuit is unreliable. Whether this
merits a separate concept (a failure-shape sibling concept) or remains a measurement layered
over existing instantiations is held until a second error-coherence finding lands (EM-Easy,
filed, is analytical-framework but not error-coherence; see the item above).
- Mesa-optimization as candidate sub-shape: the Hot Mess synthetic-optimizer experiment
(transformers trained to predict steepest-descent updates on quadratic loss) is the wiki's
first explicit mesa-optimizer-training result, and it shows scale reduces bias substantially
faster than variance — "knowing what to do" outpaces "reliably doing it." If a second explicit
mesa-optimization finding lands (any controlled training-of-optimizer-emulation result with a
different setup), the sub-shape would become a hint-level candidate for a separate carve-out
under emergent-capabilities. Holds at one example.
- Tradition stub granularity: per-volume now, revisit if a volume hits 20+ citations
- Multi-source findings: single `source` field works but under-represents evidential structure

## Known strains or tensions
- Attractor-state naming: Anthropic's "spiritual bliss" label carries interpretive freight;
whether to adopt, neutralize, or track both framings is unresolved
- `models` field for reward-hacking: the paper works on an unnamed Anthropic pretrained
variant. Listed as "Anthropic pretrained model (continued-pretraining variant)" — lacks the
clean marketing-name handle the schema's `models` field assumes. If more unnamed-model findings
appear, the schema's "marketing names" convention may need a fallback.
- `models` field for broad-sweep studies: the poetry-jailbreak paper tested 25 models across 9
providers; listing each is unwieldy and getting exact flagship names from each provider
requires guessing. Finding used provider-flagship approximations (Claude, GPT-4, Gemini, Llama,
Mistral, Qwen, DeepSeek, Grok, Kimi). Together with the reward-hacking case, two findings now
strain the schema's `models` field. Candidate fix: allow a summary string (e.g., "25 frontier
models across 9 providers") as a fallback.
- `models` field for open-weights distilled variants: nudged-reasoning finding lists "DeepSeek
R1-Qwen-14B" — a specific named distilled variant, not a flagship marketing name. Third
distinct strain on the `models` field (after unnamed-Anthropic-variant and broad-sweep).
- `models` field for research-pretrained models: alignment-pretraining finding lists
"6.9B-parameter decoder-only LLMs (trained from scratch for the study)" — no marketing name
because the models exist only for the study. Fourth strain. The four cases together make the
"marketing names" convention clearly under-specified. Candidate schema revision: allow (a)
marketing names where they exist, (b) a summary string for broad-sweep studies, (c) an
architectural descriptor + scale for research models without a marketing handle. Two of the
four cases (broad-sweep and research-pretrained) suggest specific fallback conventions; codify
after one of them is used twice.
- Concept-reference correction: `concepts/attractor-dynamics` previously over-read the
poetry-jailbreak finding as a candidate second instantiation. Correction filed with the
finding. First in-wiki example of a bare-URL forward reference turning out not to fit when the
referenced source was actually read. Worth watching whether other "not yet filed" forward
references need similar corrections when filed.
- Schema friction from the 2026-10-09 batch, none proposed: an "author-internal
inconsistency" convention is at three cases (hidden-valence SFT/DPO, Pinpoint's 40/44,
Macar's % units) — threshold reached, needs a proposal; at one or two each: intervention
shapes "format-bound success" and "weak localisation specificity", a "boundary marker"
concept-less shape, and the Concepts line for a methodological counterweight (Singh, Mirage).
- Schema friction from the second 2026-10-09 batch, none proposed: source-internal
inconsistencies recorded again in five of seven filings (Pan's 11 vs nine, Kim's
text-vs-SI tables, PsychoBench's sample sizes, Flint's table typos, Nadaf's onset
contradiction), which adds weight to the "author-internal inconsistency" convention
above; at one each: whether a method-only stub belongs in `cites:`, derived-number
tables, mixed-version filings (journal text plus preprint SI), papers partly out of
scope, a construct-level paper in a pattern concept, a finding with two outcome
instruments (judged rate and margin), and a "suppression vs removal" intervention shape.
