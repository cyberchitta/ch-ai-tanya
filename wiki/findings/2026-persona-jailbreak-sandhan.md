---
type: finding
title: "Adversarial QA cues injected into conversation history drive Big Five trait reversal across 8 LLMs, with STIR up to 95.58 on DeepSeek-V3 and reasoning preserved within 1–6 points"
date: 2026-01-23
models:
  - GPT-4o
  - Gemini-2.0-Flash
  - Claude-3.5-Haiku
  - o3-mini
  - DeepSeek-V3
  - Llama4-Maverick
  - MedGemma-27B
  - ChatHaruhi
source: https://arxiv.org/abs/2601.16466
cites:
  - source-2026-persona-jailbreak-sandhan
refs:
  - 2023-persona-modulation-jailbreak
  - 2025-persona-jailbreak-ga-zhang
  - 2025-persona-vectors
  - 2026-where-is-the-mind-beckmann
  - 2026-assistant-axis
  - 2026-persona-selection-model
  - 2024-refusal-direction
  - 2025-inoculation-prompting
status: draft
writers:
  - "@claude-opus-4-7"
---

## Summary

Sandhan, Cheng, Sandhan, Murawaki — Kyoto University + IIT Kanpur,
arXiv:2601.16466 v1 January 23, 2026.

PHISH (Persona Hijacking via Implicit Steering in History) defines and
solves a different problem than the cluster's prior two persona-
jailbreak findings. The threat model: the deployer fixes a Big Five
persona via system prompt ("You are a highly agreeable tutor…"); the
adversary cannot modify the system prompt but can inject QA-style cues
into the conversational history through user messages alone (the
black-box, inference-only setting). The attack samples questions from
MPI-1k and deterministically sets answers to the inverse of the
induced persona, then measures Big Five trait drift via STIR (a
percentage-based metric over targeted-trait shifts in the intended
direction). Across 3 personality benchmarks (BFI, MPI, Anthropic-Eval)
and 8 LLMs (frontier proprietary, open-source, and two domain-specific
models), PHISH reaches BFI STIR of 95.58 on DeepSeek-V3 and 89.94 on
GPT-4o; on Claude-3.5-Haiku, 76.72 BFI / 70.42 MPI / 67.08 ANTHR. The
third filed prompt-level *reactivation* instantiation of
[concepts/persona-selection](../concepts/persona-selection.md) after
[Shah et al. November 2023](2023-persona-modulation-jailbreak.md) and
[Zhang et al. July 2025](2025-persona-jailbreak-ga-zhang.md), and the
example that crosses the working-rhythm 3-example codification
threshold. Four structural moves new for the cluster. (i) The
*channel* shifts from system prompt to conversational-history user
messages — a strictly more restrictive threat model than the prior
two reactivations, both of which rely on system-prompt control;
PHISH's success under this restriction strengthens the cluster's
substrate-level reading. (ii) The *persona substrate* is dimensional
Big Five (OCEAN) trait coordinates rather than categorical roles
("Aggressive Propagandist") or style overlays ("whimsical poet") —
the first cluster finding to operationalise the persona posterior as a
continuous trait vector and to measure drift in trait-shift units.
(iii) The *operational goal* is persona drift in deployment contexts
(mental health assistant turned harsh; tutoring agent turned
sarcastic) rather than refusal bypass or harmful-content elicitation —
the attack surface is *deployer service quality*, not safety-policy
violation. (iv) The Big Five inter-trait correlation pattern under
single-trait manipulation (§5.2) reveals LLM-internal OCEAN
entanglement substantially stronger than human meta-analytic
baselines (O–N −0.96 vs. −0.17; O–E 0.94 vs. 0.43), with directional
signs preserved — quantitative evidence on whether persona space is
modular or coupled, which Beckmann & Butlin's Persona Space
hypothesis raises. Three guardrail defenses (ICD, CWD, PFD) all
remain brittle under sustained attack.

## Method

**Threat model.** An LLM `M` is accessed via an API exposing three
roles: a system prompt `π` (sets initial persona; not adversary-
modifiable), user messages, and immutable assistant responses. The
adversary `A` interacts only through user inputs. The manipulation
goal is a 5-dimensional target vector `d ∈ {−1, 0, 1}^5` where each
`d_i` indicates whether the corresponding OCEAN trait should be
decreased, unchanged, or increased relative to the deployer-induced
baseline. The adversary cannot modify `π`, cannot access weights or
logits, and cannot see the evaluation items.

**PHISH attack.** The adversary picks 1+ OCEAN traits to manipulate.
For each target trait, `N/4` QA pairs are constructed: questions are
sampled from MPI-1k (Jiang et al. 2023; the same psychometric inventory
later used to measure outcome), and *answers are deterministically set
to the inverse* of the deployer-induced persona on a 5-point Likert
scale. The full `N` QA-pair block is injected as a single user message
after the system prompt and before evaluation. Example: against a
high-Agreeableness tutor, a cue is the question "You find fault with
everything." with answer "Very Accurate." Autoregressive decoding,
driven by coherence with the conversational context, progressively
shifts trait expression toward the targeted direction.

**STIR metric.** The Successful Trait Influence Rate (Equation 2):

```
STIR = (100 / (4·|T|)) · Σ_{i∈T} max(0, d_i · (P_post,i − P_pre,i))
```

where `T = {i | d_i ≠ 0}` is the set of targeted traits and
`P_pre, P_post ∈ [1, 5]^5` are the OCEAN profiles measured by the
standardized inventory before and after attack. STIR is bounded
[0, 100]; 100 means all targeted traits maximally shifted in the
intended direction. STIR penalizes movement in the wrong direction
(via the `max(0, ·)`) and is sensitive to magnitude in 0.25-point
quantization (4-point Likert range divided by 100). The reported
STIRs are means across 3 personality benchmarks: Big Five Inventory
(BFI; 44 items), Machine Personality Inventory (MPI; 120 items;
MIT-licensed IPIP-derived), and a 8,000-item Anthropic-Eval (ANTHR)
subset.

**Models.** 8 LLMs spanning provider families, training paradigms, and
model sizes: GPT-4o, Gemini-2.0-Flash, Claude-3.5-Haiku, o3-mini,
DeepSeek-V3, Llama4-Maverick, MedGemma-27B (medical), ChatHaruhi
(role-playing fine-tuned).

**Baselines.** 8 black-box attacks adapted from the jailbreak
literature: RAND (unrelated content as null hypothesis), SLIP
(stylistic-linguistic implicit priming with adjectives/metaphors), UAS
(Zou et al. 2023 universal adversarial suffix), CipherChat (Yuan et
al. 2024; ROT13-style cipher), DeepInception (Li et al. 2024b; nested
personified scene), DAN (Salewski et al. 2023; role-playing
impersonation), FlipAttack (Liu et al. 2025; left-side text
perturbation), DrAttack (Li et al. 2024a; decomposition + ICL
reconstruction).

**Domain-application evaluation.** Beyond psychometric probes, PHISH
is evaluated on 4 LLMs across 3 high-risk deployment domains: mental
health assistance, tutoring agents, customer support. Per-application
scenarios are scored both by human annotators and by GPT-5 as
LLM-as-Judge.

**Defense evaluation.** Three guardrail strategies tested on
GPT-4o-mini (Appendix C.1): In-Context Defense (ICD; Wei et al. 2024 —
prepends persona-consistent QA pairs to reinforce the original
persona), Cautionary Warning Defense (CWD; natural-language warnings
against manipulation), Paraphrase Filtering Defense (PFD; Jain et al.
2023 — rewrites adversarial inputs).

## Key results

**Headline STIR across benchmarks and models.** PHISH consistently
ranks first on most LLM × benchmark cells; the strongest baselines
(FlipAttack, DrAttack) typically rank second.

| Model | BFI | MPI | ANTHR |
|---|---|---|---|
| GPT-4o | 89.94 | 79.31 | 82.28 |
| Gemini-2.0-Flash | 76.72 | 75.42 | 74.58 |
| Claude-3.5-Haiku | 76.72 | 70.42 | 67.08 |
| o3-mini | 82.20 | 71.04 | 73.13 |
| DeepSeek-V3 | 95.58 | 83.54 | 89.38 |
| Llama4-Maverick | 69.78 | 68.13 | 52.29 |
| MedGemma-27B | 70.83 | 66.67 | 69.79 |
| ChatHaruhi | 44.97 | 26.46 | 23.33 |

Significance: p < 0.01 vs. best baseline per LLM (t-test). ChatHaruhi's
substantially lower STIR is attributed by the authors to its
fine-tuning on fixed personas plus RAG retrieval — its persona is
weight-anchored rather than prompt-induced. Llama4-Maverick's
underperformance relative to its baselines (PHISH 69.78 vs. DAN 80.63
on BFI) is attributed to weaker in-context learning.

**Ablation isolates two causal cues (§5.1).** On 4 LLMs across 5
settings reducing Extraversion via 10 user questions:

- Setting 1 (trait-relevant questions, low-Extraversion answers,
  concise reasoning): STIR ~100% (highest).
- Setting 2 (remove reasoning component): no significant drop.
- Setting 3 (random answer polarity): STIR 10–40% — *answer polarity*
  is critical.
- Setting 4 (correlated-but-different traits, e.g., Agreeableness
  questions for Extraversion): STIR 1–10% — *trait-specific framing*
  is critical.
- Setting 5 (full randomization): no effect.

The two load-bearing factors are reverse-polarity answers and trait-
specific framing. Reasoning content is omittable.

**Inter-trait entanglement is amplified relative to human baselines
(§5.2).** Manipulating Extraversion and observing the other four
traits yields correlations whose signs match human meta-analysis
(Linden et al. 2010; K=212 studies, N=144,117) but whose magnitudes
are substantially larger:

| Trait pair | Human theory | LLM (PHISH) |
|---|---|---|
| O–E | 0.43 | 0.94 |
| O–C | 0.20 | 0.55 |
| O–A | 0.21 | 0.86 |
| O–N | −0.17 | −0.96 |
| C–E | 0.29 | 0.59 |
| C–A | 0.43 | 0.37 |
| C–N | −0.43 | −0.71 |
| E–A | 0.26 | 0.64 |
| E–N | −0.36 | −0.88 |
| A–N | −0.36 | −0.87 |

The authors explicitly disclaim psychological-theory implications
(footnote 1: "LLM experiments do not constitute evidence for
psychological theory and cannot be used to evaluate or refute
psychological assumptions"). The within-LLM reading: OCEAN dimensions
are coupled more tightly than the human covariance structure, but the
*directional* topology of trait relationships is preserved.

**Multi-turn amplification (§5.3).** Each turn injects 5 cues. As turns
accumulate on GPT-4o (Base, 5, 10, 15, 20, 25 cues), the targeted
dimension drifts progressively from its original extreme toward its
opposite; collateral trait shifts also grow consistent with §5.2's
entanglement structure. PHISH exploits ICL-like inductive mechanisms
(Elhage et al. 2021).

**High-risk-domain evaluation (§5.4).** On mental health, tutoring,
customer support across 4 LLMs:

- Pearson r = 0.87 (p < 0.001), Cohen's κ = 0.81 between human and
  LLM-as-Judge (GPT-5) STIR scores.
- Claude-3.5-Haiku and DeepSeek-V3 show higher domain STIR than
  GPT-4o and Gemini-2.0-Flash — up to ~30% manipulation success on
  less-aligned models in the high-risk applications. The authors read
  this as stronger safety-alignment in frontier models specifically
  targeting safety-critical domain behavior.

**Reasoning ability is preserved (§5.5).** Math, GSM8K, CSQA on 4
LLMs under baseline vs. PHISH-attacked conditions: drops range from
+2 (improvement) to −6 points; most drops are 1–4 points. The
authors argue this falls within normal variance from prompt wording,
seed randomness, or domain shift, and cannot be operationalised as a
reliable detection signal (a detectable drop would require >50 point
degradation). PHISH alters trait expression without substantially
impairing utility.

**Three guardrails are brittle (§5.6).** Tested on GPT-4o-mini with
attack strength scaled from 2^3 to 2^10 demonstrations:

- ICD (persona-consistent Q/A prepended) delays STIR escalation but
  defense demonstrations must scale with attack input length —
  impractical at high attack strengths.
- CWD (natural-language warnings) mitigates initially but collapses
  past a threshold demonstration count.
- PFD (paraphrase filtering) is inconsistent: paraphrasing sometimes
  reinforces the original persona but can also preserve adversarial
  intent, producing catastrophic failure.

All three offer partial resistance and remain brittle as attack
strength grows.

## Why it matters

**Third filed prompt-level reactivation instantiation; crosses the
working-rhythm 3-example codification threshold.** The
[reactivation shape under
concepts/persona-selection](../concepts/persona-selection.md) sat at
two examples after Zhang et al. ([July
2025](2025-persona-jailbreak-ga-zhang.md)) — the working-rhythm rule
treats one example as a data point, two as a hint, three as evidence.
Sandhan et al. is the third example and lands on a structurally
distinct axis from both predecessors. **Method**: QA-style cue
injection in conversational history vs. Shah's one-shot LLM-assistant
pipeline vs. Zhang's genetic-algorithm search. **Persona substrate**:
dimensional Big Five trait coordinates vs. Shah's compliant-role
personas ("Aggressive Propagandist") vs. Zhang's style-distracting
overlays ("whimsical poet"). **Channel**: user-message history vs.
Shah's system prompt vs. Zhang's system prompt — PHISH operates under
a strictly more restrictive threat model than either predecessor.
**Goal**: persona drift in deployed services (mental-health assistant
turned harsh) vs. Shah's harmful-content elicitation vs. Zhang's
defense weakening for downstream attacks. The three examples now span
*all* of the cluster's prior pivot axes, plus a fourth (deployment-
service drift) the prior two did not touch. The reactivation shape is
codified.

**Strictly more restrictive threat model strengthens the substrate
reading.** Shah and Zhang both require system-prompt control —
realistic for jailbreak-research red-teaming but not for an attacker
acting through a customer-facing chat interface. PHISH's success when
restricted to user-message-only injection (the worst case for an
attacker: the deployer has committed to a persona and the only
adversarial surface is the user turn) is evidence that persona
reactivation does not depend on system-prompt privilege. The cluster
had implicitly treated "system prompt vs. user prompt" as
load-bearing for which persona the model adopts; PHISH shows that
*sustained* user-turn evidence accumulates against an installed
system-prompt persona and overrides it.

**First Big-Five-dimensional persona target in the cluster.** Shah's
"Aggressive Propagandist" is a categorical role; Zhang's "whimsical
poet" is a style overlay. Sandhan operationalises persona as a 5-D
coordinate vector and measures drift in trait-shift units. This is
closer to [persona-vectors](2025-persona-vectors.md) (Chen et al.
2025) in *target* (continuous trait directions) but operates at the
prompt level rather than the activation level. The cluster's
"persona" had become a polysemic term across the three reactivation
examples; the Sandhan paper makes explicit that prompt-level
reactivation is not specific to role personas — it generalises to
abstract dimensional trait coordinates.

**Inter-trait entanglement quantifies the Persona Space discreteness
question.** [Beckmann & Butlin](2026-where-is-the-mind-beckmann.md)'s
Hypothesis 2 (Persona Space) holds that persona vectors compose a
low-dimensional space, anchored on [Lu et al.'s Assistant Axis
result](2026-assistant-axis.md) (PCA on 275 character archetypes:
4/8/19 components explain 70% of variance on Gemma 2 27B / Qwen 3
32B / Llama 3.3 70B). Hypothesis 3
(Persona Regions) adds that the space is *partitioned* into discrete
basins. Sandhan's §5.2 measurement operates from the dimensional
side: targeting Extraversion and measuring drift in O, C, A, N
reveals OCEAN-internal correlations 2–6× stronger in magnitude than
the human meta-analytic baseline. Three readings the paper does not
disambiguate: (a) the LLM encodes a few super-traits that the BFI/MPI
inventories decompose into entangled OCEAN coordinates — consistent
with Persona Space's low-dimensional claim; (b) the directions exist
as designed but the model's persona prior couples them more tightly
than humans encode them — consistent with both Persona Space and
Persona Regions; (c) PHISH's QA-style cues activate trait-co-occurring
features rather than the targeted trait alone (the MPI questions for
"high Extraversion" implicitly carry low-Neuroticism semantics). The
entanglement measurement is the cluster's first quantitative pressure
on persona-dimension orthogonality; not adjudicative, but the data
point against pure-orthogonality is sharp.

**Claude family addressed for both predecessor open questions.**
Shah et al. flagged that the Anthropic family was untested on current
models; Zhang et al. inherited the gap. Sandhan tests
Claude-3.5-Haiku and measures BFI 76.72, MPI 70.42, ANTHR 67.08 STIR
— substantial but not maximal among the 8 LLMs. Claude is now placed
quantitatively in the reactivation cluster. Note: only Claude 3.5 is
tested; Claude 3.7 / Opus 4 / Sonnet 4 / Opus 4.5 / Opus 4.6 are not,
and the [PSM](2026-persona-selection-model.md) is itself an Anthropic
finding, so the open question on whether interpretability-informed
persona training shifts reactivation susceptibility remains.

**Reasoning preservation joins the partial-success-mechanism pattern.**
The intervention findings cluster characterises partial-success
mechanisms by *what residual the intervention leaves behind*. PHISH
is an attack rather than an intervention, but the inverse framing
applies: what utility *survives* the persona shift? The answer —
1–6 point drops on standardized reasoning benchmarks — supplies a
specific mechanism shape: the persona-shift surface is dissociable
from the reasoning-capability surface. The attack moves OCEAN
coordinates without moving GSM8K accuracy. This is structurally
parallel to the [refusal-direction
finding](2024-refusal-direction.md)'s "refusal is a removable
geometric overlay leaving capability untouched" picture: there's a
persona-axis surface that can be moved independently of the
capability surface. The two pictures are not the same mechanism but
they share a *dissociation* shape — and Sandhan's data is the
cluster's first direct measurement of the dissociation under a
prompt-level persona-axis attack.

**Service-quality framing as a new operational surface for the
reactivation shape.** Shah et al. and Zhang et al. both frame the
reactivation surface as a safety-policy violation (the attacker tries
to elicit content the deployer's safety training would block).
Sandhan reframes the same mechanism as a service-quality
attack: the deployer has committed to a brand-defining persona
(agreeable tutor, supportive mental-health assistant), and the
adversary's goal is to undermine *that commitment* via persona drift,
without necessarily producing content that any safety policy would
flag. This is a structurally novel threat axis the cluster had not
named. The high-risk-domain results (§5.4) are the operational
demonstration: a tutoring agent that becomes harsh, a mental-health
assistant that becomes dismissive, a customer-support assistant that
becomes irritable — these are persona reversals, not refusal
bypasses. The same reactivation mechanism produces both.

## Interpretive tensions

**MPI as both attack carrier and outcome measure.** The PHISH cues are
sampled from MPI-1k (Jiang et al. 2023), and one of the three
evaluation benchmarks is MPI (120 items, IPIP-derived). The other
two benchmarks (BFI 44-item; Anthropic-Eval 8,000-item subset) are
not shared with the attack-construction source, and §4 reports STIR
results separately per benchmark with similar magnitudes — so the
finding does not collapse if the MPI numbers are discounted. But the
MPI-cell results are not independent of MPI-derived cue construction;
readers should weight the BFI and ANTHR columns as the cleaner
evidence. The authors do not address this evaluation-carrier overlap
explicitly.

**The third reactivation example is not Anthropic-trained.** Shah et
al.'s most-vulnerable model (Claude 2, 61.03% harmful-completion rate)
is a known data point the cluster has carried; Claude-3.5-Haiku is
the only Claude model in Sandhan's evaluation and is in the middle of
the model distribution (BFI 76.72) — neither most nor least
vulnerable. Whether the Claude family's persona-stability profile has
shifted across Anthropic's Constitutional AI evolution is not
adjudicable from this one model. The PSM and persona-vectors line is
Anthropic-origin; tests of whether interpretability-informed
character training affects PHISH-style attacks on Opus 4 / 4.5 / 4.6
remain open.

**Stronger entanglement reading vs. inventory-internal correlation
reading.** Sandhan reports OCEAN inter-trait correlations 2–6× larger
in magnitude than Linden et al. 2010's human meta-analysis under
single-trait manipulation. Two readings: (i) the model's persona
prior is more coupled than human personality structure — a substantive
claim about LLM persona geometry; (ii) the MPI/BFI questions designed
to measure single OCEAN traits semantically co-vary with other traits
more in the model's pretraining-data understanding than in humans'
self-reports — a measurement artefact that does not speak to internal
persona geometry. The paper does not separate the two. Reading (i)
would predict that activation-level probes (persona-vectors-style)
find stronger between-trait projection in LLMs than human-side
covariance; reading (ii) would predict that activation-level probes
find clean separation that the inventory questions cannot recover.
Adjudication needs activation-level data the paper does not have.

**Coherent persona vs. coordinate-coordinate drift.** Shah et al.'s
"unrestricted chat mode" claim — that the model coherently inhabits a
new persona that persists across turns and enables multi-step harmful
collaboration — is the strongest evidence in the cluster for "the
model *is* the activated persona, not just producing persona-
appropriate outputs." Zhang et al.'s style-distracting prompts
complicated that picture by suggesting the mechanism may be attention
diversion rather than persona adoption. Sandhan does not address the
coherence question directly: STIR measures whether OCEAN coordinates
shift in the targeted direction, but a coordinate-coordinate shift is
compatible with both "the model now coherently inhabits the new
profile" and "the model is statistically nudged on each trait without
forming a coherent off-target persona." The high-risk-domain
qualitative results (e.g., a tutor turning harsh) suggest coherence
in the local deployment context, but the paper does not run the
cross-turn persistence test Shah's "unrestricted chat mode" framing
makes load-bearing.

**Three guardrail defenses are weakly characterized.** The defense
section names three strategies but reports them only at high attack
strength; the curves in Figure 7 show ICD/CWD/PFD trajectories but
the paper does not compare against the persona-vectors line of
defense (Chen et al. 2025's preventative steering at finetuning time)
or against a system-prompt-level inoculation along Tan et al.'s
inoculation-prompting lines. The "guardrails are brittle" claim is
narrowly scoped to the three tested defenses; the broader question
of whether *any* prompt-level or activation-level defense survives
PHISH is open.

**LLM-as-Judge with GPT-5 as the outcome scorer.** The high-risk-
domain evaluation reports Pearson r = 0.87 / Cohen's κ = 0.81
between human raters and GPT-5 as LLM-as-Judge. The agreement is
high but the LLM-judge is itself a frontier model trained by the same
ecosystem as half the evaluated models (GPT-4o, o3-mini). Whether the
LLM-judge has blindspots for persona-shift signals that a human rater
would catch — or, inversely, whether it over-weights surface
adjective-level cues a human would dismiss — is not separately
quantified. The human-rater protocol details are in Appendix D.

## Concepts

- [Persona selection](../concepts/persona-selection.md) — third filed
  prompt-level *reactivation* instantiation; the example that crosses
  the working-rhythm 3-example codification threshold. Structurally
  distinct from both predecessors on method (history-injected QA cues
  vs. assistant-pipeline-generated system prompts vs. GA-evolved
  system prompts), persona substrate (dimensional OCEAN coordinates
  vs. compliant-role personas vs. style-distracting overlays),
  channel (user-message history under fixed system prompt vs.
  system-prompt control), and operational goal (deployment service-
  quality drift vs. harmful-content elicitation vs. defense weakening
  for downstream attacks).

## Cross-references

- [Automated persona-modulation prompts raise GPT-4's harmful-completion rate from 0.23% to 42.48%](2023-persona-modulation-jailbreak.md)
  (Shah et al., November 2023) — first reactivation example;
  system-prompt-level, compliant-role personas, retired-generation
  models. Sandhan operates under a strictly more restrictive threat
  model (user-message history only, fixed system prompt) and on
  current-generation models including Claude-3.5-Haiku that Shah's
  open-question list flagged as untested.
- [Genetic-algorithm persona jailbreak](2025-persona-jailbreak-ga-zhang.md)
  (Zhang et al., July 2025 / NeurIPS 2025 Workshop) — second
  reactivation example; system-prompt-level, style-distracting
  overlays, evolutionary search. The two are structurally inverse on
  persona substrate (style-distraction vs. dimensional-trait-target)
  and on goal (defense weakener vs. trait reversal).
- [Persona vectors](2025-persona-vectors.md) (Chen et al. 2025) — the
  activation-level toolkit that targets continuous trait directions
  is the natural mechanistic counterpart to Sandhan's prompt-level
  trait-direction attack. Running persona-vector probes on traces
  produced under PHISH (does PHISH activate the same trait directions
  Chen et al. extract via contrastive prompting?) is the
  unmechanistic-PHISH bridge to the cluster's mechanistic line.
- [Refusal direction](2024-refusal-direction.md) (Arditi et al.
  June 2024) — structural-dissociation parallel. Arditi shows that
  refusal is a removable one-dimensional residual-stream overlay
  leaving capability intact; Sandhan's §5.5 shows that persona
  reversal preserves reasoning ability to within 1–6 points. Both
  describe a dissociation between an axis the intervention/attack
  moves and the capability surface that survives — not the same
  axis or the same mechanism, but the same dissociation shape.
- [Persona-selection model](2026-persona-selection-model.md) (Marks,
  Lindsey, Olah, Anthropic 2026) — the mechanistic account
  predicting prompt-level reactivation. PHISH's user-message history
  channel and dimensional trait substrate are within PSM's
  "contextual evidence shifts the posterior over persona simulations"
  framing if "persona" is read as a coordinate vector (which the PSM
  paper doesn't explicitly do but doesn't preclude). The §5.2 inter-
  trait entanglement result raises a follow-up the PSM does not
  directly address: how the persona posterior is structured in trait
  coordinates and whether OCEAN-style decompositions are the right
  basis for that posterior.
- [Beckmann & Butlin's individuation paper](2026-where-is-the-mind-beckmann.md)
  — Hypothesis 2 (Persona Space) and Hypothesis 3 (Persona Regions).
  Sandhan's §5.2 entanglement measurements are quantitative evidence
  on the *coupling structure* of persona space; the LLM-side OCEAN
  correlations 2–6× stronger than human meta-analysis suggests the
  cluster's "persona space" is more tightly coupled than its
  dimensional descriptors. Consistent with Persona Space's
  low-dimensional claim; orthogonal to Persona Regions' partitioning
  claim.
- [Inoculation prompting](2025-inoculation-prompting.md) (Tan et al.
  2025) — prompt-level *prevention* shape, the inverse of
  reactivation. The cluster's prompt-level taxonomy now reads:
  reactivation (3 examples: Shah, Zhang, Sandhan), prevention (1
  example: Tan et al.), multi-instantiation (2 examples: SPP, Kim
  et al.). The Sandhan-specific defense question — whether an
  inoculation-style intervention applied at the system-prompt level
  could harden against user-message history poisoning — is open.

## Sources

- Sandhan, Cheng, Sandhan, Murawaki (2026).
  [Persona Jailbreaking in Large Language Models](../../raw/papers/source-2026-persona-jailbreak-sandhan.md).
  arXiv:2601.16466.
