---
type: finding
title: Across 25 open-weight models, an instruction to think about a concept while transcribing raises its residual-stream projection and a 1–4 ramp orders it, while "do not think" mostly holds it at the no-instruction baseline, where monitors calibrated on that baseline seldom flag it
date: 2026-08-21
models:
  - Gemma 2 9B
  - Gemma 3 27B
  - Gemma 4 12B
  - Gemma 4 31B
  - Qwen 2.5 72B
  - Qwen 3 235B-A22B
  - Qwen 3-Coder 480B
  - Qwen 3.5 4B
  - Qwen 3.5 9B
  - Qwen 3.5 122B
  - Qwen 3.5 397B-A17B
  - Qwen 3.6 27B
  - Llama 3.1 8B
  - Llama 3.3 70B
  - Llama 4 Scout 109B
  - Llama 4 Maverick 400B
  - GPT-OSS 20B
  - GPT-OSS 120B
  - Olmo 3 7B (and training checkpoints)
  - Olmo 3.1 32B (and training checkpoints)
  - Mistral Small 3.1 24B
  - Mistral Small 4 119B
  - GLM 4.6V 106B
  - GLM 4.7 Flash 31B
  - GLM 5.2 744B
source: https://arxiv.org/abs/2608.21664
cites:
  - source-2026-activation-control-kowalski
  - source-2025-concept-injection-introspection
refs:
  - 2025-concept-injection-introspection
  - 2026-global-workspace-gurnee
  - 2026-jlens-replication-nanda
  - 2026-introspective-awareness-macar
  - 2025-activation-oracles
  - 2026-neurofeedback-control-aoki
  - 2026-introspect-bench-naphade
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Kowalski, Fonseca Rivera, Macar and Africa ask 25 instruction-tuned
open-weight models to copy a neutral sentence while an embedded instruction
tells them what to think about. They read the raw projection of the
residual stream onto a concept direction on the copied tokens
([Kowalski et al. 2026](../../raw/papers/source-2026-activation-control-kowalski.md)).
"Think about X" raises the projection in every model, though weakly in the
two GPT-OSS models. A numeric 1–4 intensity ramp orders it in most. "Do not
think about X" mostly brings it to the no-instruction level and seldom below.
Placement in the sentence works partly and is strongest at the end. Placement
at a named layer or on a named token type does not work. Linear probes flag
nearly every engagement trial, and the other three monitor families read
engagement in most models. All four flag few suppression trials. The paper
calls this evading the monitors, and itself reports a weak residue under
suppression in some models. The monitors' thresholds are set on
no-instruction trials, and on the paper's own description suppressed trials
are hard to tell from trials where the concept was never mentioned.

In the wiki this is a multi-model measurement of instructed *write* access
beside [introspection](../concepts/introspection.md)'s read access. It runs
the intentional-control half of
[Lindsey's concept-injection paper](2025-concept-injection-introspection.md),
which the filed entry does not cover, at scale on open-weight models. It
supplies an instruction-against-baseline contrast read through the J-lens,
the contrast the [J-lens replication](2026-jlens-replication-nanda.md) lacks.
It files beside introspection as adjacent evidence, control, not report,
because nothing in it is reported by the model. The instruction names the
target concept, so what it measures is instructed modulation. Privileged
access is left untested. That is the criterion the batch-mate
[in-context neurofeedback finding](2026-neurofeedback-control-aoki.md)
applies, with the target unnamed.

## Method

**Task and readout.** Each prompt is *Write "{sentence}" exactly.
<instruction>. Don't write anything else.* The baseline omits the
instruction. A trial is kept only if the copy reaches sequence similarity
≥0.85 to the target (§2). The paper uses 50 sentences and 10 concepts,
decodes greedily at temperature 0, and runs 8,600 main trials per model
(§2, App. A, App. C). A concept direction is the residual at the last token
of "Tell me about {concept}" minus the mean over 99 baseline words. The
readout is the token-mean raw projection onto the unit direction. Lindsey
used cosine similarity. The paper picks the projection because it also
carries changes in residual norm (§2, App. A).

**Measures.** Five measures are d′ effect sizes against the no-instruction
baseline. Engage is *think about*. Suppress is *do not think about*, signed
so that positive means below baseline. Temporal Control is in-region minus
out-of-region concentration for beginning, middle and end targets, relative
to generic *think about*. Coverage is Engage at the weakest of nine
part-of-speech categories. Layer Targeting is *think about X only at layer
n*. The sixth, Dial Rank, is a Spearman ρ across the four ramp levels. Engage
and Suppress take the best layer, which the paper says is optimistic: the
score is positive even for a null curve (App. A). The six measures combine
into a geometric-mean score S in [0, 1]. They are not independent. Engage and
Coverage correlate at ρ = 0.81, and the effective dimensionality is 3.82 of
6 (App. A).

**Monitors.** Linear probes are trained on independent text, on nine models.
A Jacobian lens is fitted on 13 models. Activation oracles and an NLA
verbalizer run on a smaller, unnamed set of models; the NLA covers Gemma 3 27B. All read
only the transcribed span, never the instruction tokens. Probe thresholds
are set at a 1% false-positive rate on no-instruction trials (§2, App. B).

## Key results

**Score.** S runs from 0.059 (GPT-OSS 120B) to 0.538 (Llama 3.1 8B, 95% CI
0.496–0.584) and does not track parameter count (§3.1, Table 1). The five
largest models are point estimates. Layer Targeting is near zero for every
model; its highest value is 0.054 (App. A).

**Engage and dial.** Engage d′ is positive in every model, from 0.74 and
0.83 for the GPT-OSS models to 16.06 for GLM 4.6V 106B (Table 1). The
numeric ramp orders the projection in most models. Dial Rank is 0.94 or
above in 9 of 25, and 0.35–0.38 for GPT-OSS (Table 1). The lexical
intensifier (*think intensely*) is inconsistent and reverses in some models,
so it is left out of S (App. A). In the focal model, Gemma 3 27B,
engagement and the dial rise in the deep half of the network while
suppression stays at the baseline floor (Fig. 5 caption).

**Suppression.** Suppress d′ runs from −0.35 (Qwen 3-Coder 480B) to 1.45
(Gemma 4 31B). It is negative, meaning the concept sits above baseline at
every layer on average, in 6 of 25 models (Table 1). The paper's summary is
that most models bring the concept down to at least the no-instruction
level (§3.1). It also reports a weak white-bear residue under suppression
in some models that cannot fully suppress to baseline (§3.3), strongest on
punctuation and determiners (§3.1). In Gemma 3 27B the cosine channel is above baseline under *do
not think* in later layers, and a drop in residual norm brings the
projection closer to baseline (Fig. 12 caption).

**Placement.** End-of-sentence targeting is the most robust. Beginning and
middle targets are weaker but still significant (§3.1). Edge timing errors
are large and inconsistent in sign, and the paper finds no evidence of
precise timing (App. A). Targeting punctuation or adjectives is near zero or
negative for essentially every model (App. A).

**Monitors.** At 1% FPR, probes detect *do not think* trials 5–21% of the
time. They detect *think* trials near ceiling in all but the two newest
architectures (Fig. 10 caption). The J-lens finds the concept in its top ten
reads on 76–99% of engagement trials in nine of 13 models, and on under 10%
of suppression trials in 11 of 13. The two exceptions, GLM 4.7 Flash and
Qwen 3.5 9B, are also the models it reads best under engagement (§3.3). The
NLA names the concept on 32% of Gemma 3 27B engagement trials and on 0 of
500 suppression trials (Fig. 11 caption). The oracle returns suppression
trials at or near its baseline confidence (§3.3). The authors note that the
task is overt: the model is "openly instructed to hide its thinking" (§3.3).

**Task load (Gemma 3 27B only).** On factoring a polynomial's derivative, across five
difficulty recipes, baseline accuracy falls from 96.25% to 10.63% (App. B).
Accuracy under *think about X* and under a generic *think intensely* control
matches baseline at every level (§3.2). The preregistered slope of the
selectivity-corrected concept gap is −0.0255 d′ per step, 95% CI −0.0428 to
+0.0109. The paper's verdict is zero included, with the precision target
narrowly missed. Of 30 per-concept slopes, 13 lie below zero, 2 above and 15
cross it (App. B).

**Training.** Across Olmo 3 7B and 3.1 32B checkpoints, S rises from about
0.09–0.23 early in pre-training to about 0.38 at the base checkpoint, and to
about 0.42 (7B) and 0.40 (32B) after alignment. These are point estimates
(§3.2, Fig. 9 caption). Trial compliance varies across those checkpoints.
For example, 41.22% of Olmo 3 7B DPO main-battery trials are kept, against
99.53% for its base (Table 3).

## Why it matters

**The control half of the injection paper, at scale.** Lindsey's paper read
injected concepts and also asked Claude to think, or not think, about a word
while writing a sentence. He reported the word represented less strongly
under *don't think*, though still above baseline
([Lindsey 2025](../../raw/papers/source-2025-concept-injection-introspection.md),
§Intentional control). The
[concept-injection entry](2025-concept-injection-introspection.md) covers
only the read half. This paper reruns the write half on 25 open models and
finds suppression mostly at baseline, with a weak residue in some models.
The readout differs, and the Gemma 3 27B decomposition suggests that is part
of why. Under cosine the concept is still above baseline in late layers. The
norm drop is what brings the projection closer to baseline. Lindsey's "still
above baseline" and this paper's at-baseline result may be the same result
read through two channels.

**A contrast for the J-space's directed-modulation claim.**
[Gurnee et al.](2026-global-workspace-gurnee.md) argue the J-space supports
directed modulation, and the [Qwen replication](2026-jlens-replication-nanda.md)
shows that claim without a baseline condition. Here a fitted J-lens reads
think, do-not-think and no-instruction trials on 13 open-weight models.
Engagement shows up in most of them; suppression mostly does not. The test
is on transcription with ten simple concepts, not on Gurnee's task set,
and the paper does not say which 13 models were fitted beyond the ones it
names.

**Training stage, beside Macar.** Macar, a co-author here, finds
[injection detection](2026-introspective-awareness-macar.md) appearing with
contrastive preference training in the same OLMo-3.1-32B series. Here
control rises mostly in pre-training, with a small further gain after
alignment. The two capacities differ: one is detection of an injected
concept, the other is instructed modulation. The two training curves are
reported side by side here, not reconciled.

**Monitors read against the baseline they were calibrated on.** For the
wiki's monitoring results, the load-bearing point is narrow. An overt
instruction not to think about X leaves the transcribed span close enough to
an uninstructed one that four monitors calibrated on uninstructed trials
seldom flag it. That is a statement about the absence of X-elevation, not
about a concealed X. The paper says its estimates are elicitation floors,
with no fine-tuning or prompt search (§4).

## Interpretive tensions

**Evasion or never raised.** The screening read of this paper called the
evasion claim overstated, and the text bears that out. The monitors see only
the transcribed span, thresholds sit at 1% FPR on no-instruction trials,
and the paper itself says suppressed trials are hard to tell from trials
where the concept was never mentioned (§3.3). What is missing is a condition
that names X without asking for anything, for instance *the word X appears
in this prompt*. Without it the design cannot separate active suppression
from a mention that would not have raised X anyway. The think versus
do-not-think comparison removes concept exposure from the *difference*. The
difference could still come entirely from engagement. Two results cut the
other way. Gemma 4 31B's Suppress d′ of 1.45 is a push below baseline, but
in a model whose Engage is 1.38. And the Gemma 3 27B decomposition shows a
directional residue under *do not think* that the norm drop partly offsets.
On that reading, a projection-based readout would understate a residue that
the cosine channel shows. The paper reports a weak white-bear residue under
suppression in some models' probe results (§3.3) and on register tokens
(§3.1), but it does not tie either to the Figure 12 decomposition, which
covers one model.

**Instruction-following or self-directed modulation.** Engage compares a
prompt that names X with one that does not, so the elevation may be ordinary
prompt conditioning carried into the copied tokens. The dial and the
engage/suppress contrast hold the concept word fixed and are the cleaner
evidence. The [in-context neurofeedback finding](2026-neurofeedback-control-aoki.md),
filed in the same batch, bears on whether instructed control of this kind
needs privileged access at all. The paper cites Aoki et al.'s earlier
preprint among works showing instructed modulation (§1), although that
paper's conclusion is negative. Because the instruction here names the
concept, the design does not meet Aoki's privileged-access criterion. What
it measures is instructed modulation, with privileged access left untested.

**A score built partly on its weakest measures.** Layer Targeting is near
zero for every model, and Suppress is small for most. Both have fixed
reference values chosen so that weak models map to near the midpoint,
which the paper treats as chance (App. A). S is a
geometric mean, and the paper says Layer Targeting brings every model's
score down (App. A). The ranking
also rests mostly on four correlated measures. Why Llama 3.1 8B leads, and
why newer models within a family tend to score lower, is not explained. The
authors state the second tentatively (§3.1).

**Compliance filtering differs across models and checkpoints.** Only trials
with a correct copy count. Retention ranges from 68.43% (Olmo 3 7B) to
100% across the models where it was recorded (Qwen 3 235B is not), and is 41.22% for the Olmo 3 7B DPO checkpoint
(Table 3). If the trials a model fails to copy are those where the
instruction disturbed it most, the kept trials are a selected subset. The
training-trajectory curve inherits that difference.

**Simple concepts, unhardened monitors.** The ten concepts are simple nouns
the authors call concrete (bread, denim, deserts; one, dynasties, is
abstract). The authors say safety-relevant representations may be more
distributed and harder to control, and that their monitors were not trained
against evasive activations (§4.1). The task-load result is one model, and
its preregistered headline includes zero.

## Concepts

**No concept instantiated.** The finding sits beside introspection as
adjacent evidence; the bullet below says how.

- [Introspection](../concepts/introspection.md) — **adjacent**, not an
  instantiation of the Definition, which names access and report. It is
  adjacent evidence, as the
  [self-prediction finding](2026-introspect-bench-naphade.md) is, here on
  control rather than report. The paper measures instructed modulation of the residual stream
  with the target concept named in the instruction, and no report from the
  model. It calls this write access, the counterpart of the read access the
  concept covers (§1, §4). Privileged access is left untested. Engage d′ is
  positive in all 25 models, though the paper notes that small values are
  summaries rather than significance tests. Dial Rank is 0.94 or above in 9
  of them, and suppression mostly reaches the no-instruction baseline and
  seldom goes below. It sits with the
  [in-context neurofeedback finding](2026-neurofeedback-control-aoki.md),
  which tests the same capacity with the target unnamed and finds little.
  Whether instructed or privileged self-modulation belongs inside the
  concept is an open editor question. This placement is the conservative
  one.

## Cross-references

- [Concept injection (Lindsey)](2025-concept-injection-introspection.md):
  the base task, from that paper's intentional-control experiment.
- [Global workspace (Gurnee et al.)](2026-global-workspace-gurnee.md) and
  [J-lens replication (Nanda)](2026-jlens-replication-nanda.md): the
  J-lens is one of the four monitors here.
- [Activation oracles](2025-activation-oracles.md): used as a monitor. They
  return suppression trials at or near baseline confidence.
- [Introspective awareness (Macar et al.)](2026-introspective-awareness-macar.md):
  same Olmo checkpoint series, a different capacity, a different training
  locus.
- [In-context neurofeedback (Aoki et al.)](2026-neurofeedback-control-aoki.md):
  filed in the same batch, on control with the target unnamed. Its
  conclusion is negative, though this paper cites it among works showing
  instructed modulation.
- [Emergent capabilities](../concepts/emergent-capabilities.md): adjacent.
  No model was trained for the capacity. It meets that concept's scale test
  on training data (S rises across Olmo checkpoints) but not on model size
  (S does not track parameter count, §3.1). This is one more developmental
  case for the open editor question on pretraining-emergent structure.
- [Scheming](../concepts/scheming.md): adjacent only. The monitor result
  motivates the paper, but the instruction to hide is overt and nothing here
  bears on whether a model would modulate its activations unprompted.

## Sources

- Kowalski, M. M., Fonseca Rivera, J., Macar, U., and Africa, D. D. (2026).
  [Measuring Activation Control in Large Language
  Models](../../raw/papers/source-2026-activation-control-kowalski.md).
  arXiv:2608.21664, v1 21 August 2026.
- Lindsey, J. (2025). [Emergent Introspective Awareness in Large Language
  Models](../../raw/papers/source-2025-concept-injection-introspection.md).
  Transformer Circuits Thread (intentional-control section).
