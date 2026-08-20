# Project state

Current state only: what's filed, what's active, what's open. Session-by-session
filing narratives live in `meta/session-log.md` (historical archive; not read at
session start) and in git history; each finding's full account lives in its own
entry file. The schema version is owned by `meta/changelog.md`.

Last updated: 2026-08-20 (mind-viruses finding filed).

## Handoffs

Continuation handoffs for in-flight work streams. Read the relevant one at
session start alongside this file to recover the next move. The private
cross-stream todo and schedule is `_notes/worklist.md` — read it at session
start too.

- Taste/editorial stream: `_notes/handoffs/taste.md` — next steps, open
  ledger, cross-cutting lessons, editor-only raw/ items. Likely next move:
  batch 3 promotions — the introspection concept + its cluster
  (honesty-elicitation, confessions-honesty, introspection-adapters,
  activation-oracles), still holding the PSM one more round.
- Repo-process improvements from the Kehle LLM-wiki article:
  `_notes/handoffs/kehle-improvements.md` — six steps done; first cold
  scorecard run filed at `meta/scorecard-2026-08.md`; cadence still
  provisional until the second run.

## Inventory
- Findings: 73
- Concepts: 10
- Threads: 2
- Researchers: 4
- Source stubs: 88

Counts verified against the filesystem 2026-08-20.

## Recent additions

Newest first, one line each; the full account lives in the entry itself. Older
additions: `meta/session-log.md` and git history.

- `findings/2026-mind-viruses-papadopoulos.md` — self-propagating ideas spreading
  between LLM agents by overt persuasion; first inter-agent persona-transmission
  shape under `concepts/persona-selection`, and the persuasion-channel counterpart
  to subliminal learning.
- `findings/2026-persona-vectors-pretraining-moskvoretskii.md` — persona vectors
  traced across OLMo-3 pretraining checkpoints; first pretraining-crystallization
  entry under `concepts/persona-selection`.
- `findings/2025-chain-of-affective-xu.md` — longitudinal chain-of-affective
  dynamics across 8 model families; candidate seed for an `affective-dynamics`
  concept.
- `findings/2026-storyscope-narrative-fingerprints.md` — cross-model narrative
  fingerprints over 61,608 stories; second deployment-scale behavioral
  characterization under `concepts/persona-selection`.

## Filing candidates

`_notes/candidates.md` — curated list of substantiated findings not yet filed, sourced from the
asuric-ai essay research inventory and two live deep-research surveys (April 2025 – April
2026). Entries across eight clusters: mechanistic geometry (Arditi, OpenAI SAE, Soligo 2025
convergent, Soligo 2026 EM-Easy, Zou 2023 Representation Engineering — all filed); functional
emotional states (Transformer Circuits emotions paper filed; Opus 4 system card welfare remains
candidate); character and persona (Persona Selection Model, Subliminal Learning, Persona
Vectors, EM-persona-consistency — all filed); scheming/deception/dishonesty (Apollo in-context
scheming, real-world incidents, agentic upward deception, stability-asymmetry, metagaming,
anti-scheming-training, DeepMind stealth/situational-awareness, OpenAI production-evaluations,
Apollo more-capable-models follow-up — all filed; LLMs-Deceive-Unintentionally, Self-Initiated
Deception, CoT-Monitorability eval remain candidates); self-preservation (both filed);
honesty/introspection (Honesty Elicitation, Anti-Scheming Training, Modifying Beliefs via SDF,
Activation Oracles, Inoculation Prompting, Introspection Adapters, Model Spec Midtraining,
OpenAI confessions, Behavioral-Self-Awareness Vaugrante — all filed; CoT-Monitorability eval
remains candidate); sycophancy (Sharma, GPT-4o incident, ELEPHANT, Dubois et al. "Ask don't
tell", Bhalla and Gligorić SWAY all filed); CoT faithfulness (Liu et al. filed; DeepMind
2507.05246 remains ⚠ candidate). Remove entries as they are filed.

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
- **Housekeeping queued:** link Modifying Beliefs (SDF) as the methodology
  anchor from its three pipeline-using descendants (alignment-faking,
  reward-hacking, introspection-adapters), which currently reference
  "synthetic-document finetuning" generically.

### Source cache notes

Known gaps — sources that could not be cached or verified:

- Asterisk "Claude Finds God" source remains uncached.
- Sleeper-agents author count open: 39 identifiable vs. 40 claimed — the 40th
  is unidentifiable from the cached copy.

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
instrument](../wiki/findings/2023-representation-engineering-zou.md)). Anchored by [Laukkonen
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
lands, revisit.

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
- Intervention-research as structural shape: **resolved 2026-05-11**. Schema v0.3.1 adds an
`### Intervention findings` subsection under `## Writing discipline for findings and concepts`
codifying that intervention findings foreground the partial-success mechanism (which residual
the intervention leaves behind, why, where it fails or distorts) alongside the headline rate.
Codification names six mechanism shapes seen across the four founding findings
(stratum-specific resistance, downstream-training erosion, pre-existing-disposition
persistence, semantic-dependence, elicitability-via-prompting, access-as-binding-constraint)
without naming specific findings inline so the schema text doesn't decay as the
intervention-finding set grows.
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
- Self-preservation concept scope: resolved. Both shutdown resistance (Palisade) and
self-preservation blackmail (Anthropic-OpenAI joint eval) are now filed and placed under
`concepts/self-preservation` (tenth concept, capacity shape). The umbrella holds two
structurally distinct behavioral expressions; whether they share a common internal
representation is the open mechanistic question.
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
over existing instantiations is held until a second analytical-framework finding lands. The
"Emergent Misalignment is Easy, Narrow Misalignment is Hard" Feb 2026 paper still in candidates
is the closest analytical-framework cousin and would supply the second example.
- Mesa-optimization as candidate sub-shape: the Hot Mess synthetic-optimizer experiment
(transformers trained to predict steepest-descent updates on quadratic loss) is the wiki's
first explicit mesa-optimizer-training result, and it shows scale reduces bias substantially
faster than variance — "knowing what to do" outpaces "reliably doing it." If a second explicit
mesa-optimization finding lands (any controlled training-of-optimizer-emulation result with a
different setup), the sub-shape would become a hint-level candidate for a separate carve-out
under emergent-capabilities. Holds at one example.
- Three-way probe/behavior/reasoning dissociation in introspection: Modifying Beliefs (Wang et
al. April 2025) adds internal probing as a third measurement modality to the introspection
concept's access-vs-report binary. The same content reads as "internally true" (probe),
"behaviorally expressed" (Open-Ended Belief), and "recognized as false under reasoning"
(Generative Distinguish) for SDF-finetuned models. This is a structural shape distinct from the
prior intervention findings' binary access/report framing. One example; hint-level. If a second
finding produces a comparable three-way dissociation across measurement modalities, codify by
reshaping the concept's main definition from "access vs. report" to "internal-representation
vs. prompt-conditioned-expression" or similar.
- SDF-as-methodology and pipeline-citing convention: Modifying Beliefs is the first wiki
finding for which SDF is the study, but the SDF pipeline has been used in three prior findings
(alignment-faking, reward-hacking, introspection-adapters' model organisms). Convention
question: when filing a finding that introduces a methodology used by prior findings, the
cross-references should run both directions — Modifying Beliefs cross-refs to its three
pipeline-using descendants, and ideally those three findings would back-cross-ref to Modifying
Beliefs as their methodology anchor. The introspection-adapters and reward-hacking entries
currently reference the methodology generically ("synthetic-document finetuning"); on the next
pass, both should be updated to link the Modifying Beliefs entry as the methodology anchor.
Alignment-faking too. Logged as housekeeping for the next session, not blocking current
entries.
- Tradition stub granularity: per-volume now, revisit if a volume hits 20+ citations
- Multi-source findings: single `source` field works but under-represents evidential structure

## Candidates for extraction
- Candidate-instantiation / complicating-instantiation patterns:
`concepts/emergent-capabilities` flags a candidate with direction caveat;
`concepts/introspection` flags a complicating instantiation. Different roles (candidate = scope
pressure; complicating = negative/tempering evidence). If either pattern recurs, codify the
role inline in the Instantiating findings section — probably as a prefix tag rather than a
separate section, to keep concept bodies compact.

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
