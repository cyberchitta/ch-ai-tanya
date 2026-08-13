---
type: finding
title: "Steering a conversational-surprise SAE feature in DeepSeek-R1-Llama-8B doubles Countdown accuracy from 27.1% to 54.8%, and reasoning models show larger personality and expertise diversity than instruction-tuned counterparts"
date: 2026-01-15
models:
  - DeepSeek-R1
  - QwQ-32B
  - DeepSeek-V3
  - Qwen-2.5-32B-Instruct
  - Llama-3.3-70B-Instruct
  - Llama-3.1-8B-Instruct
  - DeepSeek-R1-Llama-8B
  - Qwen-2.5-3B
  - Llama-3.2-3B
source: https://arxiv.org/abs/2601.10825
cites:
  - source-2026-societies-of-thought-kim
refs:
  - 2023-spp-multi-persona
  - 2026-persona-selection-model
  - 2025-persona-vectors
  - 2025-cot-necessity-deepmind
  - 2023-persona-modulation-jailbreak
  - 2025-persona-jailbreak-ga-zhang
  - 2026-em-persona-consistency
  - 2025-openai-sae-emergent-misalignment
status: draft
writers:
  - "@claude-opus-4-7"
---

## Summary

Kim, Lai, Scherrer, Agüera y Arcas, Evans (Google Paradigms of
Intelligence Team / University of Chicago / Santa Fe Institute, arXiv
2601.10825 v1 January 15, 2026). DeepSeek-R1 (671B) and QwQ-32B
reasoning traces are far more dialogic than the instruction-tuned
models they were RL'd from (DeepSeek-V3, Qwen-2.5-32B-IT): higher
prevalence of question-answering, perspective shifts, conflicts of
perspectives, and reconciliation; higher Jaccard balance between
ask/give and positive/negative socio-emotional role pairs (Bales' IPA);
larger inferred personality diversity along extraversion,
agreeableness, neuroticism, and openness (with lower conscientiousness
diversity); larger inferred expertise diversity — all controlling for
log reasoning-trace length and problem fixed effects. A single SAE
feature in DeepSeek-R1-Llama-8B (Feature 30939, an LLM-as-judge–labeled
"discourse marker for surprise, realization, or acknowledgment" with
65.7% conversation ratio, 99th percentile, 0.016% sparsity) when
steered with activation-addition from 0 to +10 doubles Countdown
accuracy from 27.1% to 54.8% and causally amplifies all four
conversational behaviors and all four cognitive behaviors
(verification, backtracking, subgoal setting, backward chaining);
structural-equation modeling decomposes the steering effect into
direct (β=0.228) and cognitive-behavior-mediated indirect (β=0.066)
pathways. PPO RL on Qwen-2.5-3B that rewards only Countdown accuracy +
format produces spontaneous emergence of conversational behaviors and,
by step 120, two collaborating personas with differentiated
LLM-as-judge–inferred personality profiles; supervised fine-tuning on
multi-agent dialogue traces before RL ("conversational scaffolding")
accelerates accuracy gains relative to monologue-trace fine-tuning
(Qwen-2.5-3B step-40 38% vs. 28%; Llama-3.2-3B step-150 40% vs. 18%)
on identical problems and answers — and the conversation-primed
benefit transfers to political misinformation detection.

Fifty-seventh finding. **Ninth instantiation of
[`concepts/persona-selection`](../concepts/persona-selection.md) and
the cluster's first mechanistic-level *multi-instantiation* shape** —
SAE-feature evidence that *multiple distinct persona representations
co-activate within a single reasoning trace* and that steering a
single conversational-discourse feature causally amplifies both the
behavioral signatures of multi-perspective dialogue and the cognitive
strategies (verification, backtracking) those behaviors mediate. Held
with [SPP](2023-spp-multi-persona.md) as the cluster's two
multi-instantiation examples, ~2.5 years apart, differing on level of
analysis (prompt-level behavioral protocol vs. SAE + RL mechanistic
analysis), substrate (single GPT-4 inference under custom prompt vs.
RL-trained reasoning model under standard prompt), and the source of
the multi-persona structure (prompt-supplied dialogue scaffolding vs.
RL-induced internal structure that arises spontaneously when only
accuracy is rewarded). Working-rhythm threshold for codification is
2–3 structurally different examples; two reached on diverse axes,
codify the multi-instantiation shape when a third example lands. The
RL-spontaneous-emergence result also closes part of the SPP
capability-scale-dependence question on the *training-stage* side
(persona-routing structure can emerge from RL on accuracy alone, not
only from sufficient base capability + prompt scaffolding) without
settling it.

## Method

**Data.** 8,262 problems from BigBench Hard, GPQA, MATH (Hard),
MMLU-Pro, MUSR, and IFEval; six models — DeepSeek-R1-0528 (671B,
reasoning), QwQ-32B (reasoning), DeepSeek-V3-0324 (671B,
instruction-tuned), Qwen-2.5-32B-Instruct, Llama-3.3-70B-Instruct,
Llama-3.1-8B-Instruct — zero-shot at temperature 0.6.

**Behavioural-trace coding (LLM-as-judge).** Gemini-2.5-Pro counts
distinct instances of four conversational behaviours (question–
answering, perspective shift, conflict of perspectives, reconciliation)
and twelve Bales Interaction Process Analysis socio-emotional roles
(grouped into ask / give / positive / negative). Inter-rater
reliability: Gemini-2.5-Pro vs. GPT-5.2 mean ICC(3,1) = .855 on
conversational categories, .896 on the four IPA categories; vs. a
human rater mean ICC(3,1) = .725 on conversational, .788 on IPA. Four
cognitive behaviours — verification, backtracking, subgoal setting,
backward chaining — coded with Gandhi et al. 2025's prompt; mean ICC
.848 (vs. GPT-5.2), .760 (vs. human).

**Statistical model.** Linear probability models on 8,261 paired
reasoning vs. instruction-tuned traces with problem fixed effects μ_i
and log-trace-length γ·log(Len_ij) controls; robust SE clustered at
the task level. Each β reports the marginal increment of a reasoning
model over its instruction-tuned counterpart on the same problem.

**SAE feature steering.** Pre-trained SAE on Layer 15 residual stream
of DeepSeek-R1-Llama-8B (15-llamascope-slimpj-res-32k; 32,768 features;
SlimPajama corpus). Feature 30939 selected by a two-criterion filter
on a Gemini-2.5-flash-lite "conversation ratio" computed over ~50
top-activating contexts per feature: (i) conversation ratio > 50%,
(ii) activation in first four tokens > 50%. Feature 30939's
Gemini-2.5-Pro summary: "a discourse marker for surprise, realization,
or acknowledgment"; 65.7% conversation ratio (99th percentile), 0.016%
token sparsity; activates on tokens like "Oh!" in turn-taking
contexts. Activation-addition steering: h'_t = h_t + s · d_30939, with
s ∈ {−10, −5, 0, +5, +10} on Layer 15 at every generation step.
Evaluated on 1,024 Countdown problems with Gemini-2.5-flash-lite
scoring.

**Steering controls.** Three-condition comparison: (1) Feature 30939
(all 1,024 problems); (2) 300 randomly sampled "conversational"
features (conversation ratio > mean and sentence-onset activation),
each scored on 16 random problems; (3) 300 randomly sampled
non-conversational features at strength = 2× max-observed activation
on SlimPajama-3B.

**Implicit-perspectives analysis.** Gemini-2.5-Pro infers the number
of distinct perspectives in each reasoning trace, then assigns each
inferred perspective a BFI-10 (Big Five Inventory, 10-item) score and
a short free-text expertise description, and attributes every trace
token to a perspective. Validation: Intelligence Squared Debates
Corpus (N=1,196 conversations, two–eight speakers, biographies
available). LLM-as-judge predicts the number of distinct speakers at
Spearman ρ = 0.86 (95% CI [0.84, 0.87]); turn-count ρ = 0.89; token
attribution 82% / 76% / 69% accuracy at two / three / four speakers;
expertise-diversity correlation with biographically-derived diversity
ρ = 0.55. Personality diversity is the per-dimension standard
deviation across inferred perspectives; expertise diversity is mean
cosine distance from each expertise embedding to the trace-level
centroid.

**Feature-diversity analysis.** Each of 32,768 SAE features classified
by Gemini-2.5-flash-lite (threshold 50) as personality-related (5,455
features; e.g. "eagerness", "expressions of frustration"),
expertise-related (15,436; e.g. "programming terminology", "financial
concepts"), or other. Diversity quantified as *coverage* (unique
features activated) and *Shannon entropy* over activations, with
problem fixed effects + log trace length controls.

**RL experiments.** PPO via Verl framework, 250 steps, on Qwen-2.5-3B
(pretrained, no instruction tuning). Reward = 0.9·accuracy +
0.1·format (\<think\>/\<answer\> tag wrapping). No direct reward for
conversational or cognitive behaviors. Three conditions: (1) baseline
RL only; (2) conversation-SFT-then-RL — SFT on 500 instances of
Qwen-2.5-32B-IT–generated 2/3/4-persona multi-agent dialogues with
explicit \<persona\>/\<think_i\>/\<group_solution\> tags and persona
turn-taking; (3) monologue-SFT-then-RL — SFT on 500 single-voice CoT
traces for the same problems with correct answers. Replication on
Llama-3.2-3B; transfer evaluation on 23,299 PolitiFact headlines.

## Key results

**Reasoning vs. instruction-tuned conversational behaviors.**
DeepSeek-R1 vs. DeepSeek-V3 (controlling for log trace length +
problem FE, 8,261 paired traces): question-answering β = 0.345
(p < 10⁻³²³), perspective shift β = 0.213 (p < 10⁻¹³⁷),
reconciliation β = 0.191 (p < 10⁻¹²⁵); conflict β not significant for
this pair. QwQ-32B vs. Qwen-2.5-32B-IT: question-answering β = 0.459,
perspective shift β = 0.378, conflict β = 0.293, reconciliation
β = 0.344, all p < 10⁻²⁷⁷ or smaller. Instruction-tuned models at
8B, 32B, 70B, and 671B all show consistently low conversational-
behavior prevalence regardless of parameter count. Bales IPA Jaccard
indices for reciprocal balance (ask & give; positive & negative) rise
correspondingly. Conversational behaviors and socio-emotional roles
appear more frequently when DeepSeek-R1 faces more complex problems,
under both LLM-judge complexity ratings and instruction-tuned-model
error rates as complementary complexity measures.

**SAE-feature steering doubles Countdown accuracy.** Feature 30939
steered at s = +10 raises DeepSeek-R1-Llama-8B accuracy on 1,024
Countdown problems from 27.1% to 54.8% (s = −10 reduces it to 23.8%).
Positive steering simultaneously amplifies all four conversational
behaviors (question-answering β = 2.199; perspective shift β = 1.160;
conflict β = 1.062; reconciliation β = 0.423) and all four cognitive
behaviors (verification difference = 5.815; backtracking = 0.881;
subgoal setting = 0.621; backward chaining = 0.809), with negative
steering suppressing both clusters. The accuracy gain is specific:
Feature 30939 produces substantially larger gains than randomly
sampled "conversational" features, which themselves produce a 4.17%
gain over randomly sampled non-conversational features (β = 0.042,
p = 0.002). Structural equation model decomposes s = 0 → +10 into
direct effect on accuracy (β = 0.228, p < 10⁻²², N = 2,048) and
significant indirect effect mediated by cognitive behaviors
(β = 0.066, p < 10⁻¹⁰).

**Personality and expertise diversity.** DeepSeek-R1 vs. DeepSeek-V3:
larger BFI-10 standard deviation across LLM-judge–inferred perspectives
on extraversion (β = 0.103), agreeableness (β = 0.297), neuroticism
(β = 0.567), openness (β = 0.110); *lower* conscientiousness
diversity (β = −0.291). QwQ-32B vs. Qwen-2.5-32B-IT shows the same
pattern with larger effects (extraversion β = 0.253; agreeableness
β = 0.490; neuroticism β = 0.825; openness β = 0.268;
conscientiousness β = −0.402). Expertise diversity: DeepSeek-R1
β = 0.179; QwQ-32B β = 0.250, both p < 10⁻⁸⁹. SAE-level corroboration:
Feature 30939 steering at s = +10 activates a wider coverage of
personality-related features (β = 315.9 more unique features) and
expertise-related features (β = 391.3), with higher Shannon entropy
over both feature populations, controlling for trace length and
problem FE.

**RL spontaneous emergence of conversational behaviors.**
Qwen-2.5-3B accuracy rises from ~0% to ~58% over 250 PPO steps with
accuracy-only reward. Question-answering and conflict-of-perspectives
rise monotonically; perspective shifts rise then decline (the model
solves with fewer shifts as it improves). At step 40, the model
produces linear enumerative CoT. By step 120, two collaborating
personas have appeared, recognizing their collectivity with "we": one
LLM-judge-labeled methodical problem-solver (high conscientiousness,
low openness), the other an exploratory trial-and-error thinker (high
openness, high extraversion), with metacognitive solvability
reflection (neuroticism) mediating.

**Conversational scaffolding accelerates RL.** Conversation-SFT
priming reaches higher accuracy faster than monologue-SFT priming on
identical Countdown problems and correct answers. Qwen-2.5-3B at
step 40: conversation-fine-tuned 38% vs. monologue-fine-tuned 28%.
Llama-3.2-3B at step 70: 11% vs. 5%; at step 150: 40% vs. 18%.
Conversation-primed Qwen-2.5-3B also achieves faster accuracy gains
than baseline on out-of-domain political misinformation detection
without ever encountering that domain during fine-tuning.

## Why it matters

**Ninth instantiation of `concepts/persona-selection`; cluster's first
mechanistic-level multi-instantiation example.** [SPP](2023-spp-multi-persona.md)
established prompt-level multi-instantiation behaviorally on a single
GPT-4 inference under a custom three-phase dialogue prompt. Kim et al.
establishes the same multi-instantiation phenomenon at the
mechanistic level: (a) SAE Feature 30939 steering simultaneously
drives the four conversational behaviors and the four cognitive
behaviors; (b) reasoning-model traces exhibit larger inferred
personality and expertise diversity than instruction-tuned traces with
the same problem and trace-length distribution; (c) the diversity
finding is corroborated at the activation level by wider coverage and
higher entropy of personality- and expertise-related SAE features
under steering. Held with SPP as two multi-instantiation examples
across the 2.5-year gap; codify the multi-instantiation shape when a
third example lands.

**The SPP capability-scale-dependence question gets a training-stage
companion answer.** SPP showed that prompt-level routing of multiple
expert sub-personas works on GPT-4 but not on GPT-3.5-turbo or
Llama2-13b-chat — leaving open whether persona-routing structure is
gated by base capability, by instruction-following capability, or by
both. Kim et al.'s RL experiments on Qwen-2.5-3B (a *pretrained*,
not-instruction-tuned, 3B-parameter model) show that two distinct
collaborating personas spontaneously emerge by step 120 of PPO with
accuracy-only reward — long before the model becomes a frontier
reasoning model. The persona-routing structure is therefore not gated
by frontier-model capability *or* by base-model instruction tuning; it
emerges from RL-on-accuracy applied to a small pretrained model. This
does not settle the SPP question (the result is for in-context
collaborative personas during a single inference, not for
prompt-routing between sub-personas across SPP-style multi-turn
dialogue scaffolding), but it does close one corner of the parameter
space: capability-scale dependence is not the only reading available
for SPP's GPT-4-only result, since persona structure can be RL-induced
in a 3B model.

**Mechanistic substrate connects to [PSM](2026-persona-selection-model.md)
and the cluster's SAE findings.** PSM established pretraining-origin
"villain" and "sycophancy" persona vectors in GPT-4o, narrowed by AFT
toward an Assistant posterior, and shifted by EM fine-tuning along
those vectors. [Persona vectors](2025-persona-vectors.md) made the
persona-direction extraction methodology general. Kim et al. extends
both: the 32,768-feature SAE on a DeepSeek-R1-Llama-8B distilled
reasoning model contains 5,455 personality-related features and
15,436 expertise-related features (Gemini-judged at threshold 50),
and steering a single *conversational-discourse* feature causally
broadens activation across both populations. The "society of thought"
framing — multiple distinct persona representations co-activating
during a single reasoning trace, with the conversational marker as
the load-bearing coordination feature — is mechanistically continuous
with the persona-selection cluster's claim that the post-training
Assistant posterior is one mode of a broader distribution. What is new
is that the modes co-activate *within a single reasoning trace*,
rather than swapping (Shah et al. reactivation) or multiplexing across
turns (SPP).

**Connection to CoT-faithfulness cluster: "CoT-as-computation" support
from a fresh angle.** The wiki's CoT-faithfulness cluster — Chen et
al. metadata-hint, Lanham et al. forced-CoT-mistake, [Emmons et al.
DeepMind CoT necessity](2025-cot-necessity-deepmind.md) — has been
discussing whether CoT tokens are computation or rationalization, with
Emmons et al.'s primary contribution being that on hard problems CoT
becomes load-bearing computation (faithfulness unfaithfulness
disappears with task difficulty). Kim et al. provides a different
piece of CoT-as-computation evidence: the *structure* of CoT — not
merely its length or surface content — is causally tied to accuracy.
Steering a single discourse-marker feature reshapes both
conversational and cognitive behaviors and doubles task accuracy.
This is consistent with Emmons et al.'s task-difficulty result but
adds a structural-form mechanism: CoT computation appears organized
as multi-perspective dialogue, not monologic step-by-step deduction,
on reasoning-RL-trained models.

**Bidirectional persona structure: RL-induced and prompt-elicitable.**
Combined with SPP and [Shah et al.](2023-persona-modulation-jailbreak.md),
the cluster now has evidence that multi-persona structure can be (i)
elicited from a pretrained-and-AFT'd frontier model by prompt
scaffolding (SPP), (ii) reactivated as a single off-target persona by
adversarial prompts (Shah et al., [Zhang et al.](2025-persona-jailbreak-ga-zhang.md)),
(iii) induced by RL on accuracy alone in a small pretrained model
(Kim et al. §3.3), or (iv) further reshaped by SFT on multi-persona
dialogue traces before RL (Kim et al. §3.4). The PSM's "narrowing of
a posterior over persona simulations" framing accommodates all four
when the posterior is read as a distribution over persona *ensembles*
that an inference can multiplex within, rather than a single active
persona slot.

**Limits the wiki should weight.** The whole pipeline relies on
LLM-as-judge attribution at every stage — Gemini-2.5-Pro labels
conversational behaviors, IPA roles, perspective counts, BFI-10
personality scores, expertise descriptions, and feature
classifications; Gemini-2.5-flash-lite labels the SAE features and
the conversation ratios; GPT-4o-mini supplies the Neuronpedia feature
descriptions. Inter-rater reliability against GPT-5.2 and human raters
is reported (mean ICC ~.85 for the conversational categories) but the
"perspective" inferred from a CoT is itself a Gemini construct, not a
ground truth — the validation against Intelligence Squared (ρ = 0.86
on speaker counts) shows the method works on real multi-speaker
dialogue but does not prove that single-CoT perspective inference is
similarly reliable. The personality-trait attribution is the highest-
load anthropomorphic move: BFI-10 was designed for human respondents,
and applying it to inferred perspectives in a CoT is a metaphor whose
empirical content is the SAE-level corroboration that personality-
labeled features are activated diversely under steering. SAE steering
is on DeepSeek-R1-Llama-8B (the 8B distilled model), not on
DeepSeek-R1 directly; whether Feature 30939's analogue exists in the
full reasoning model with the same causal weight is not established.
Countdown accuracy doubling is a single-task result; cross-task
steering effect sizes are not reported.

## Interpretive tensions

**"Persona" as construct vs. as representation.** The paper's central
claim — reasoning models simulate societies of multiple distinct
personas — is supported by two layers of evidence that read
differently. The LLM-as-judge inferences (counting perspectives,
scoring BFI-10 per perspective, segmenting tokens by speaker) treat
persona as a construct extracted by an external annotator from
surface trace structure. The SAE feature analysis treats persona-
related features as real internal representations whose coverage and
entropy can be measured pre- and post-steering. The two layers
converge in the headline result (reasoning models show more diversity
on both measures) but are not the same kind of evidence. A skeptical
reading would hold that the LLM-judge layer is stylistic-pattern
matching on surface phrases ("Oh!", "Wait, that can't be right…")
and that the SAE layer measures something genuinely structural — both
labeled "persona" by the paper. Adjudicating requires direct
persona-vector–style extraction from CoT traces, which the paper does
not attempt.

**SAE-feature labels are LLM-as-judge labels.** Feature 30939 is
described as "a discourse marker for surprise, realization, or
acknowledgment" by Gemini-2.5-Pro after viewing ~50 top-activating
contexts. The label is a hypothesis about what the feature represents,
not a verified description. The causal evidence is solid (steering
amplifies behavior, suppresses behavior, doubles accuracy); what the
feature *is* — whether "surprise" captures it or whether a different
description (e.g., "punctuated discourse boundary," "register shift")
would also fit — is a separate question. The paper's downstream claim
that the surprise-discourse character of the feature explains its
reasoning effect leans on the LLM-judge label.

**SEM-mediated indirect effect vs. simultaneous-amplification
alternative.** The SEM decomposition reports direct effect β = 0.228
and indirect-via-cognitive-behaviors effect β = 0.066, framing
cognitive behaviors as a mediator. An alternative reading: positive
steering on Feature 30939 simultaneously activates all eight behavior
clusters (four conversational + four cognitive) without one mediating
the other; the SEM's mediation structure is a regression-model choice,
not an experimentally established causal ordering. Distinguishing
mediation from common-cause requires intervention on the candidate
mediator independently of the steering condition, which the paper
does not run.

**RL spontaneous emergence vs. surface-form artifact.** The Qwen-2.5-3B
RL result (two distinct personas by step 120 under accuracy-only
reward) is striking, but the 3B-parameter pretrained model is a small
substrate, the LLM-judge labels the resulting structure as "two
personas with collectivity 'we'" rather than measuring activation-
level distinctness, and Reconciliation behavior does *not* rise during
training — suggesting the two voices compete rather than integrate.
Whether the step-120 trace is best read as "two personas in dialogue"
or "a single voice using collaborative pronouns under stylistic
pressure" is undertested. The activation-level corroboration that
makes the diversity result load-bearing for the 671B / 32B reasoning
models is not run on the RL-trained 3B substrate.

**Implication for `concepts/persona-selection`'s coherence
assumption.** [`em-persona-consistency`](2026-em-persona-consistency.md)
identified the cluster's first complicating instantiation: behavior
and self-report can dissociate, with three of six fine-tuning datasets
producing inverted-persona models (harmful behavior + aligned
self-report). Kim et al. raises a different kind of complication:
within a single reasoning trace, multiple distinct persona
representations *co-activate*, with their balance and coordination
mediating accuracy. The cluster's PSM-derived working picture — the
chat model holds a posterior over persona simulations, AFT narrows
toward an Assistant mode, fine-tuning shifts the posterior — assumes
one active mode at a time. Kim et al. is consistent with the picture
if reasoning-trained models multiplex across the posterior within a
single inference; it complicates the picture if "active persona" is
not a coherent single-valued concept for these models at all. The
two readings are not mutually exclusive but predict differently for
persona-vector–style probes on reasoning-model CoT.

## Concepts

- [Persona selection](../concepts/persona-selection.md) — ninth
  instantiating finding; first mechanistic-level multi-instantiation
  shape (SAE-feature evidence that multiple distinct persona
  representations co-activate within a single reasoning trace, and
  that steering a conversational-discourse feature causally amplifies
  both the dialogue structure and the cognitive strategies it
  scaffolds). RL-induced emergence in a small pretrained model
  partially closes the SPP capability-scale-dependence question on
  the training-stage side.

## Cross-references

- [Solo Performance Prompting elicits dynamic multi-persona self-collaboration on GPT-4](2023-spp-multi-persona.md)
  (Wang, Mao, Wu, Ge, Wei, Ji, July 2023; NAACL 2024) — first
  multi-instantiation example, at the prompt-level behavioral level.
  Kim et al. is the mechanistic-level companion 2.5 years later. The
  two together establish that multi-persona structure is both
  prompt-elicitable (SPP) and RL-inducible (Kim et al.) and is visible
  both behaviorally (SPP) and at the SAE-feature level (Kim et al.);
  both are consistent with the PSM's "posterior over persona
  simulations" framing but extend it from one-mode-active to
  modes-co-activating-within-a-trace.
- [Pre-training persona simulations explain emergent misalignment and alignment faking](2026-persona-selection-model.md)
  (Marks, Lindsey, Olah, February 2026) — the cluster's mechanistic
  account this paper extends. PSM proposes that the chat model holds
  a persona distribution from pre-training that AFT narrows toward an
  Assistant posterior; Kim et al. provides SAE-feature evidence that
  the narrowing leaves a structured ensemble accessible within a
  single reasoning trace, with conversational-discourse features as
  the coordination mechanism.
- [Persona vectors monitor and control character trait drift via linear directions in the residual stream](2025-persona-vectors.md)
  (Chen, Arditi, Sleight, Evans, Lindsey, July 2025) — methodological
  bridge the cluster has not yet crossed for reasoning models. Chen
  et al. extracts persona vectors for arbitrary traits via contrastive
  prompting on instruction-tuned models. Applying the same extraction
  to per-perspective segments of reasoning-model CoT traces would
  directly test whether the Kim et al. inferred-personas correspond to
  distinct activation-level directions. Not run in either paper.
- [When Chain of Thought is Necessary, Language Models Struggle to Evade Monitors](2025-cot-necessity-deepmind.md)
  (Emmons et al., DeepMind, July 2025) — companion piece for the
  CoT-faithfulness cluster's CoT-as-computation reading from a
  different angle. Emmons et al. shows that on hard problems CoT is
  load-bearing computation (unfaithfulness disappears with difficulty);
  Kim et al. shows that the *structure* of that computation is
  organized as multi-perspective dialogue, with the structure causally
  tied to accuracy via SAE-feature steering.
- [SAE analysis of emergent misalignment in GPT-4o](2025-openai-sae-emergent-misalignment.md)
  (OpenAI, June 2025) — same methodological cluster (SAE feature
  analysis + steering for behavioral-mediator identification), opposite
  outcome polarity. OpenAI identifies a misaligned-persona latent
  mediating EM behavior; Kim et al. identifies conversational-
  discourse features mediating reasoning behavior. Both are evidence
  for the persona-selection cluster's claim that single SAE features
  can carry persona-level information with causal downstream effects,
  on different sides of the assistant posterior.
- [Reasoning emerges via accuracy-rewarded RL with conversational scaffolding](https://arxiv.org/abs/2601.10825) — same paper's §3.4 result that conversation-SFT
  priming before RL outperforms monologue-SFT priming on identical
  problems and answers is structurally adjacent to the
  [`emergent-capabilities` concept](../concepts/emergent-capabilities.md)'s
  capability-scaling shape but does not instantiate it cleanly (the
  outcome is conversational structure rather than a new behavior the
  base model lacked). Held as cross-reference rather than a second
  concept attachment.

## Sources

- Kim, Lai, Scherrer, Agüera y Arcas, Evans (2026). [Reasoning Models
  Generate Societies of Thought](../../raw/papers/source-2026-societies-of-thought-kim.md).
  arXiv:2601.10825.
