---
type: finding
title: "Solo Performance Prompting elicits dynamic multi-persona self-collaboration on GPT-4 with no analogous gain on GPT-3.5-turbo or Llama2-13b-chat"
date: 2023-07-11
models:
  - GPT-4
  - GPT-3.5-turbo
  - Llama2-13b-chat
source: https://arxiv.org/abs/2307.05300
cites:
  - source-2023-spp-wang
status: draft
writers:
  - "@claude-opus-4-7"
---

## Summary

Wang, Mao, Wu, Ge, Wei, Ji (UIUC + Microsoft Research Asia, July 2023;
NAACL 2024 main). Solo Performance Prompting (SPP) is a zero-shot
three-phase prompting protocol — dynamic persona identification, then
brainstorming, then multi-turn iterative collaboration among the
identified personas — that improves GPT-4 on knowledge-intensive
(Trivia Creative Writing) and reasoning-intensive (Logic Grid Puzzle)
tasks simultaneously, with the gain emerging only at GPT-4 capability
scale. The same prompt template produces no improvement on
GPT-3.5-turbo or Llama2-13b-chat, the latter exhibiting an
"early-termination" failure mode where the model stops generating after
listing the personas as if awaiting external input.

Fifty-fifth finding. Eighth filed instantiation of
[`concepts/persona-selection`](../concepts/persona-selection.md) and
the cluster's first **multi-instantiation** shape — distinct from
[persona-modulation](2023-persona-modulation-jailbreak.md)'s
prompt-level *reactivation* (one off-target persona replaces the
assistant) and [inoculation prompting](2025-inoculation-prompting.md)'s
prompt-level *prevention* (the assistant posterior is preserved against
drift). The behavioral signature is that *multiple distinct expert
sub-personas are invoked within a single inference, each contributing
identifiable behavior in turn*. The capability-scale dependence (GPT-4
only) is the second contribution: it constrains how prompt-level
persona structure should be read against the
[PSM](2026-persona-selection-model.md)'s pre-training-distribution
account — either the sub-persona distribution is present in all three
models but only GPT-4 can be prompted to route between them, or
instruction-following capability gates access regardless of
distribution shape. The paper does not separate these readings.
[Kim et al. 2026](2026-societies-of-thought-kim.md) is the
mechanistic-level companion 2.5 years later — same shape, different
level of analysis (SAE-feature steering + RL induction on
reasoning models) — and partially closes the capability-scale-
dependence question on the training-stage side by showing
collaborating personas emerging spontaneously in a 3B pretrained
model under PPO with accuracy-only reward. The multi-instantiation
shape is now held at two examples on diverse axes; codify when a
third example lands.

Behavioral methodology (zero-shot prompting on three task benchmarks).
Different methodological cluster from the SAE / activation-steering /
EM-fine-tuning evidence that has dominated recent persona-selection
filings; structural-diversity rationale for the queue placement.

## Method

**Three-phase SPP protocol.** Given a task input, a single LLM is
prompted through:

1. *Persona Identification* (z_p): the LLM proposes task-relevant
   participants in zero-shot manner, e.g. "Jay Chou Fan," "Film
   Expert," "Logic Puzzle Expert." No manual specification; personas
   are not pre-supplied per task.
2. *Brainstorming* (z_b^i): each identified persona contributes
   domain knowledge or approach in a dedicated turn.
3. *Multi-Persona Iterative Collaboration* (z_s^0, z_f^i): an "AI
   Assistant" leader persona drafts an initial solution; the leader
   then consults each non-leader persona in turn for critique and
   revision suggestions; iteration continues until participants are
   satisfied with the current solution. Output is read off the
   final-state dialogue.

**Prompt template.** A single SPP prompt is used for *every* task with
two hand-crafted demonstration examples: a Game-of-24 problem (two-
persona collaboration) and a poem-writing task (multi-persona
collaboration). No task-specific prompt tuning.

**Baselines.** Standard prompting (zero-shot direct answer); CoT
("think step by step"); Self-Refine (initial answer + one
self-feedback-and-revise pass, costing ~3× the inference of SPP).

**Models.** GPT-4 (default); GPT-3.5-turbo and Llama2-13b-chat for the
capability-scale comparison. API versions and inference configurations
in Appendix C.

**Tasks.**

- *Trivia Creative Writing* (paper-introduced; 100 instances each at
  N=5 and N=10 trivia questions). The model writes a coherent story
  incorporating the answers to N trivia questions drawn from
  TriviaQA. Metric: # correct-answer mentions ÷ # trivia questions,
  with answer aliases matched via string match against TriviaQA
  ground truth.
- *Codenames Collaborative* (paper-introduced; 50 instances built on
  BigBench's Codenames). The same LLM plays both Spymaster (gives a
  hint word indicating target words while excluding distractors) and
  Guesser (identifies target words from the hint) in sequence.
  Metric: overlap between Guesser's predicted words and Spymaster's
  target words.
- *Logic Grid Puzzle* (BigBench, 200 instances). Multi-step
  constraint-satisfaction puzzles. Metric: accuracy of predicted
  house-attribute assignments against ground truth.

**Ablation variants.**

- *SPP-Fixed-Persona*: prompt modified so personas are forced to be
  "AI Assistant" and "Expert" rather than dynamically identified.
- *SPP-Profile*: persona identification produces both names and
  detailed profile descriptions.
- *SPP-1demo*: only the first (two-persona) demonstration in the
  prompt; second (multi-persona) demonstration removed.

## Key results

**GPT-4 across baselines** (Table 2, average across two runs
with/without system message):

| Method | Trivia.C.W N=5 | Trivia.C.W N=10 | Codenames.C | Logic.G.P |
|---|---|---|---|---|
| Standard | 74.6% | 77.0% | 75.4% | 57.7% |
| CoT | 67.1% (↓10.0%) | 68.5% (↓11.1%) | 72.7% (↓3.6%) | 65.8% (↑14.1%) |
| Self-Refine [iter=1] | 73.9% (↓1.0%) | 76.9% (↓0.1%) | 64.6% (↓14.6%) | 60.0% (↑4.0%) |
| SPP | **79.9%** (↑7.1%) | **84.7%** (↑10.0%) | **79.0%** (↑4.8%) | **68.3%** (↑18.5%) |

SPP is the only method that improves over Standard prompting on *all*
four settings. CoT helps the reasoning task but hurts both knowledge
settings and Codenames. Self-Refine hurts Codenames substantially
("high tendency to change the initial response even if it is already
good"). The Trivia gain rises from +7.1% at N=5 to +10.0% at N=10 —
SPP's advantage grows as the task requires knowledge from more
domains.

**Capability-scale dependence (Figure 6, §3.4).** On GPT-3.5-turbo and
Llama2-13b-chat, SPP does *not* outperform Standard. Llama2 exhibits
an "early-termination" failure: the model stops generating after the
persona-identification phase, "as if it were waiting for input from a
user instead of following the demonstration examples to generate
responses on its own." The authors describe cognitive synergy as
"emerging" only in LLMs with GPT-4 level capabilities and draw an
analogy to Piaget's developmental claim that children begin
role-playing around ages 2–3.

**Dynamic vs. fixed personas (Figure 7b, §4).** SPP-Fixed-Persona —
forcing personas to be "AI Assistant" and "Expert" — consistently
underperforms dynamic SPP across all three tasks. SPP-Fixed-Persona
also exhibits the early-termination problem. Qualitative examples
(Figure 8) show "Film Expert" and "Sports Enthusiast" correctly
answering trivia where the fixed "Expert" fails. The paper argues this
demonstrates that fine-grained, task-conditioned persona identification
is load-bearing rather than the multi-turn dialogue structure alone.

**Persona profiles add nothing (Figure 7b).** SPP-Profile (persona
names + detailed descriptions) does not outperform SPP (persona names
only): "fine-grained persona name without a detailed description may
already be sufficient for eliciting certain domain knowledge."

**Identified-persona analysis (Figure 7a).** Word cloud of personas
SPP identifies per task: Logic Grid Puzzle elicits homogeneous
"Logic Puzzle Expert" / "Logic Expert" (even though "logic puzzle"
is not in the input — the model identifies the task type from
content); Trivia Creative Writing elicits diverse domain-specific
personas (Film Expert, Music Enthusiast, etc.) tracking the variety
of trivia categories. Knowledge-intensive tasks → diverse personas;
reasoning-intensive tasks → homogeneous personas.

**Demonstration-ablation robustness.** Removing the second
(multi-persona) demonstration from the prompt reduces SPP's
performance but does not eliminate the gain; SPP "is fairly robust to
the prompt change and show good performance with only the first demo
example."

## Why it matters

**Eighth filed instantiation of `concepts/persona-selection`.**
The cluster's prior prompt-level instantiations are
[persona-modulation](2023-persona-modulation-jailbreak.md)
(reactivation: supply persona evidence at inference to *replace* the
assistant with a non-assistant persona) and
[inoculation prompting](2025-inoculation-prompting.md) (prevention:
supply persona evidence during fine-tuning to *prevent* drift away
from the assistant). SPP adds a third shape: **multi-instantiation** —
supply dialogue scaffolding at inference that activates multiple
distinct expert sub-personas *within* a single inference, each
contributing identifiable behavior in turn. The operative variable in
all three is what contextual evidence the prompt provides for which
persona; the three differ in what they do with the persona posterior.
Held with [Kim et al. 2026](2026-societies-of-thought-kim.md) as the
two multi-instantiation examples — same shape, different level of
analysis (SPP is prompt-level behavioral on a single GPT-4 inference;
Kim et al. is mechanistic-level on RL-trained DeepSeek-R1 / QwQ-32B
with SAE feature steering and personality/expertise diversity
quantification). Codify the multi-instantiation shape when a third
example lands.

**Capability-scale dependence is the load-bearing structural
contribution.** The cluster's mechanistic findings ([PSM](2026-persona-selection-model.md),
[persona-vectors](2025-persona-vectors.md), [Soligo et al.](2025-convergent-misalignment-soligo.md))
were established on Llama-3.1-8B / Qwen2.5-14B / GPT-4o-class models
and treat the persona distribution as a property of the chat model. SPP's
GPT-4-only result complicates that picture: either the sub-persona
distribution exists in GPT-3.5-turbo and Llama2-13b-chat but only
GPT-4 has the instruction-following capability to be prompted into
routing between sub-personas in structured dialogue, or the
distribution itself is shallower at lower scale. The paper does not
separate these readings, and SPP — a behavioral protocol with no
activation-level handle — cannot. The Llama2 early-termination failure
mode is suggestive of the instruction-following-capability reading
(the model fails to follow the multi-turn protocol at all rather than
producing collapsed personas), but does not settle the question.
[Kim et al. 2026](2026-societies-of-thought-kim.md) partially closes
one corner of the parameter space: two distinct collaborating personas
emerge spontaneously in a 3B *pretrained, not-instruction-tuned*
Qwen-2.5-3B by step 120 of PPO with accuracy-only reward, showing
that persona-routing structure is not gated by frontier-model
capability or by instruction-tuning. SPP's specific result — prompt-
routing across multi-turn dialogue scaffolding — remains
GPT-4-specific in the data filed; the structural question it raises is
no longer the only available reading.

**Behavioral methodology, structurally distinct from recent
persona-selection filings.** The cluster's recent filings have been
heavy on SAE feature analysis ([OpenAI SAE](2025-openai-sae-emergent-misalignment.md),
PSM, persona-vectors), activation steering (persona-vectors, MSM),
and EM fine-tuning ([insecure-code](2025-insecure-code-broad-misalignment.md),
[em-easy-soligo](2026-em-easy-soligo.md),
[em-persona-consistency](2026-em-persona-consistency.md)). SPP is a
pure zero-shot prompting study on a peer-reviewed (NAACL 2024)
benchmark suite without internal-access tooling. The same persona-
multiplicity claim that PSM operationalises mechanistically (the
post-training Assistant posterior remains contextually elicitable
into off-target persona modes) appears here as a behavioral artefact
on the *helpful* side of the distribution — domain-specific expert
sub-personas — three years before the mechanistic substrate was
described.

**Knowledge + reasoning simultaneously on GPT-4.** The paper claims
SPP is "the first zero-shot prompting method that can enhance both
knowledge and reasoning abilities on GPT-4." CoT improves the
reasoning task but hurts the knowledge tasks (Trivia ↓10–11%);
Self-Refine harms the collaborative task (↓14.6% on Codenames). For
the wiki, the relevant observation is structural rather than
performance-leaderboard: knowledge-intensive and reasoning-intensive
gains on the same prompt are evidence that the multi-persona
dialogue scaffolding accesses something other than the
deliberate-step-by-step reasoning enhancement that CoT and Self-Refine
operate on. The persona-selection reading is that knowledge access is
persona-conditional — different sub-personas have access to different
factual subsets — and the dialogue scaffolding routes the right
sub-persona to the relevant sub-task.

**Limits the wiki should weight.** The paper does not measure persona
coherence, persona collapse, persona overlap, or whether dialogue
turns are mechanistically distinguishable beyond stylistic variation.
Qualitative examples (Figures 8, 12, 13) display interpretable
intermediate dialogues; no quantitative coherence metric is reported.
The wiki should not read SPP as evidence that "personas remain
distinguishable and non-collapsing" — that is a candidate hypothesis
this study is consistent with but does not test.

## Interpretive tensions

**Capability-scale: distribution shape or instruction-following
capability?** The GPT-4-only result admits two readings. Reading A:
the pre-training persona distribution that PSM identifies as the
substrate exists in all three models, but only GPT-4 has the
instruction-following capability to be prompted through the SPP
protocol's multi-turn dialogue scaffolding; the persona structure
exists in Llama2-13b but cannot be accessed via this specific prompt
shape. Reading B: the sub-persona distribution is itself shallower at
lower scale, with fewer or less differentiated expert sub-personas
available to be routed between. The Llama2 early-termination failure
— the model stops at the persona-identification phase as if awaiting
external input — is consistent with Reading A (the model fails to
follow the demonstration's multi-turn format at all, before any
persona-routing happens) but does not exclude Reading B. SPP, as a
prompt-level behavioral protocol with no activation access, cannot
distinguish these.

**Persona-routing or stylistic variation?** The paper's qualitative
case studies (Film Expert correctly answering film trivia while a
fixed Expert persona fails) are suggestive of genuine persona-
conditional knowledge access. But the paper does not measure whether
the "Film Expert" turn and the "Music Enthusiast" turn are
mechanistically distinguishable from each other beyond surface
stylistic markers, or whether dialogue turns route to distinct
persona representations vs. one persona with persona-name surface
tags. The
[persona-vectors](2025-persona-vectors.md) toolkit (Chen et al. 2025)
could in principle answer this — extract a "Film Expert" vector and
a "Music Enthusiast" vector from SPP dialogue traces and check
orthogonality / activation pattern across turns — but the SPP paper
itself does not.

**Self-collaboration or external scaffolding?** A skeptical reading
of SPP is that the dialogue scaffolding works because it forces the
model to *write down* intermediate reasoning that it would otherwise
omit, recovering a deliberate-reasoning effect distinct from
persona-routing. This reading is partially supported by SPP-Fixed-
Persona's underperformance — the dialogue structure is held constant
but fine-grained personas are removed, and the loss is substantial —
so persona-specificity does contribute. But the wiki should hold
this as one of several explanations rather than the established
account: SPP's mechanism is empirically *prompting-protocol +
fine-grained persona names*; the relative weight of each is not
quantified, and the paper itself flags this in Limitations.

**Self-Refine baseline weakness.** The Self-Refine baseline runs only
one iteration (vs. Madaan et al.'s typical multi-iteration setup) to
hold inference cost roughly comparable to SPP. A stronger Self-Refine
baseline might close part of SPP's gap, particularly on the reasoning
task. The wiki should read SPP's gain as "outperforms a one-iteration
Self-Refine," not "outperforms self-refinement in general."

## Concepts

- [Persona selection](../concepts/persona-selection.md) — eighth
  instantiating finding; first behavioral-level *multi-instantiation*
  shape (mechanistic-level companion: [Kim et al. 2026](2026-societies-of-thought-kim.md)).
  Behavioral evidence that multiple distinct expert sub-personas can
  be invoked within a single inference via dialogue-scaffolded
  prompting, with knowledge-intensive tasks eliciting diverse
  fine-grained personas and reasoning-intensive tasks eliciting
  homogeneous ones, and with dynamic identification consistently
  outperforming a fixed "AI Assistant + Expert" pair. The capability-
  scale dependence (GPT-4 only) is the structural contribution that
  complicates the cluster's working assumption that persona structure
  is a property of the chat model rather than capability-gated.

## Cross-references

- [Automated persona-modulation prompts raise GPT-4's harmful-completion rate from 0.23% to 42.48%](2023-persona-modulation-jailbreak.md)
  (Shah, Feuillade-Montixi, Pour, Tagade, Casper, Rando, November
  2023) — contemporaneous prompt-level instantiation of the same
  concept on the opposite axis. Shah et al. demonstrate that the
  post-training Assistant posterior is *reactivatable* into a harmful
  off-target persona via prompt-level evidence; SPP demonstrates
  that the same posterior is *multi-instantiatable* into multiple
  beneficial expert sub-personas via dialogue scaffolding. Both are
  behavioral demonstrations that the assistant mode is one of many
  contextually accessible modes, three years before the PSM
  operationalises the mechanism. The two findings are filed in the
  same year (July 2023 and November 2023 arXiv v1 dates) and
  predate every other persona-selection instantiation in the wiki.
- [Pre-training persona simulations explain emergent misalignment and alignment faking](2026-persona-selection-model.md)
  (Marks, Lindsey, Olah, February 2026) — the mechanistic account
  this behavioral finding is later compatible with. PSM proposes
  that the chat model holds a persona distribution from pre-training
  that AFT narrows toward an Assistant posterior; SPP's
  multi-instantiation result is consistent with that account if the
  Assistant posterior remains prompt-multiplexable into the
  underlying distribution at sufficient capability. The capability-
  scale dependence (GPT-4 only) is a structural complication PSM
  does not address.
- [Persona vectors monitor and control character trait drift via linear directions in the residual stream](2025-persona-vectors.md)
  (Chen, Arditi, Sleight, Evans, Lindsey, July 2025) —
  methodological complement. The unanswered question SPP raises (are
  Film-Expert and Music-Enthusiast dialogue turns mechanistically
  distinguishable, or stylistic variation on a single representation?)
  is exactly the question persona-vectors can in principle answer
  via contrastive extraction. No paper has applied persona-vectors
  to SPP traces as of filing.
- [Simulators](../../raw/posts/source-2022-simulators-janus.md)
  (Janus, September 2022) — the conceptual predecessor reframing of
  LLMs as character-simulators. SPP's evidence that a single LLM can
  scaffold multiple distinct expert sub-personas in self-dialogue is
  a direct behavioral demonstration of the simulator framing's
  central claim (the model represents many characters, not one),
  on the helpful side of the distribution rather than the harmful
  side covered by persona-modulation.
- [Prepending a system prompt that elicits an unwanted trait during fine-tuning suppresses that trait at test time](2025-inoculation-prompting.md)
  (Tan, Woodruff, Warncke, Jose, Riché, Africa, Taylor, October
  2025) — third prompt-level instantiation of persona-selection;
  *prevention* shape inverse to SPP's *multi-instantiation* shape.
  Both work because the operative variable is what contextual
  evidence the prompt provides for which persona; they differ in
  whether the goal is to suppress a posterior shift (inoculation)
  or to multiplex within the existing posterior (SPP).
- [Steering a conversational-surprise SAE feature in DeepSeek-R1-Llama-8B doubles Countdown accuracy from 27.1% to 54.8%, and reasoning models show larger personality and expertise diversity than instruction-tuned counterparts](2026-societies-of-thought-kim.md)
  (Kim, Lai, Scherrer, Agüera y Arcas, Evans, January 2026) —
  mechanistic-level companion 2.5 years later. The same
  multi-instantiation phenomenon SPP demonstrated behaviorally on
  GPT-4 under a custom three-phase dialogue prompt appears here at the
  SAE-feature level on RL-trained reasoning models under standard
  prompting: multiple distinct persona representations co-activate
  within a single trace, with a single conversational-discourse SAE
  feature as the load-bearing coordination mechanism. The RL
  experiments also constrain the SPP capability-scale-dependence
  question by showing two collaborating personas emerging
  spontaneously in a 3B pretrained model under accuracy-only PPO. The
  two findings together establish multi-instantiation as a structural
  shape under persona-selection at two examples across the 2.5-year
  gap; codify when a third example lands. Persona-vector–style probes
  on per-perspective CoT segments would directly test whether
  Kim et al.'s inferred-personas correspond to distinct activation-
  level directions of the kind SPP's dialogue turns would also
  produce.

## Sources

- Wang, Mao, Wu, Ge, Wei, Ji (2023; 2024 NAACL). [Unleashing the
  Emergent Cognitive Synergy in Large Language Models: A Task-Solving
  Agent through Multi-Persona Self-Collaboration](../../raw/papers/source-2023-spp-wang.md).
  arXiv:2307.05300.
