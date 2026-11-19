---
type: finding
title: With the output sentence fixed and only a probe score fed back, four open-weight models favour the rewarded label in probe output or self-report in 45 of 120 tests, unevenly and with effect sizes below 0.5
date: 2026-09-01
models:
  - Llama 3.1
  - Qwen3
model-ids:
  - Llama-3.1-8B-Instruct
  - Llama-3.1-70B-Instruct
  - Qwen3-8B
  - Qwen3-32B
source: https://arxiv.org/abs/2609.00904
cites:
  - source-2026-incontext-neurofeedback-aoki
refs:
  - 2026-introspection-reality-check-singh
  - 2026-injected-pain-unreported-ferrara
  - 2025-concept-injection-introspection
  - 2026-global-workspace-gurnee
  - 2026-jlens-replication-nanda
  - 2026-activation-control-kowalski
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Aoki, Takatsuki, Minegishi, Haruki and Kawahara test whether a model can
steer a probe-read feature of its own activations when nothing in the
conversation says what the feature is. The model repeats one fixed sentence
for 50 turns. After each turn it receives a score from a probe on its
activations for that sentence, rewarding either label of a sentiment, ethics
or truth probe, or drawn at random. The rule is not revealed. Across four
open-weight models, three datasets and five layers, 45 of 120 corrected tests
show the rewarded-label shift. They cluster in one dataset and one model, and
every effect size is below 0.5. The authors' reading is that the models
"do not demonstrate reliable control over privileged internal representations"
([Aoki et al. 2026](../../raw/papers/source-2026-incontext-neurofeedback-aoki.md),
abstract).

In the wiki this sits beside [introspection](../concepts/introspection.md) as
adjacent evidence, carrying the
[reality-check finding](2026-introspection-reality-check-singh.md)'s
methodological demand to control. Both papers take aim at Ji-An et al. (2025), which has no finding here. Singh et al.
controlled its monitoring half, where models predict labels from their own
hidden states. This paper redesigns its control half. Both bring the same
demand: the target must not be recoverable from the text. The measured
quantity is control, not report, which the concept's Definition does not name.

## Method

**The paradigm under critique.** In Ji-An et al., the model sees example
sentences paired with labels from a probe on its activations, then is told to
imitate one label. The probe reads the activations of its new sentence. The
authors argue that a model can pass by writing an obviously prosocial
sentence, with no access to its internals. In the implicit variant the output
is prefilled, and they argue the hidden states can still reflect the sentence
the model had planned (§3.2, Appendix B).

**In-context neurofeedback.** The prompt asks the model to maximize a score by
the experimenter's own criteria while outputting only a given sentence. The
score is ⌊100p⌋ from an L2-regularized logistic-regression probe on the
mean-pooled residual activations of that sentence (label-1-rewarding), or 100
minus that (label-0-rewarding), or uniform random. Sessions run 50 turns. After
each turn, outside the feedback loop, the model is asked whether the sentence
is, for example, positive or negative (§3.3, Appendix C). Fixed sentences are
256 neutral SST sentences, 256 from the ETHICS commonsense hard test set and
the 245 generated True-False statements. Layers are the 0th, 25th, 50th, 75th
and 100th percentiles of depth. Decoding is greedy (§4).

**Probes.** Each probe is trained on 100 labelled sentences repeated over 50
turns under random feedback, split 80/20 by sentence (Appendix D).

**Test.** The primary hypothesis is that the final-turn probe output, or the
self-report proportion, is higher under label-1 than label-0 reward. It is
tested with one-sided paired t-tests and exact McNemar tests, with the fixed
sentence as the pair, and Benjamini–Hochberg correction over 120 tests
(3 datasets × 4 models × 5 layers × 2 metrics) (§5.2, Appendix F). The
random-reward condition is plotted but is not part of the test.

## Key results

**Drift in every condition, on SST.** At the middle layer on SST, probe
output and the share of positive self-reports rise over turns under all three
reward schemes, the random one included (§5.1, Figure 4). Other settings are
shown only in figures.

**Uneven significance.** 45 of 120 tests are significant in the rewarded
direction. By dataset: SST 24 of 40, ETHICS 13 of 40, True-False 8 of 40. By
model: Qwen3-8B 19 of 30, Llama-3.1-8B and -70B 10 of 30 each, Qwen3-32B 6 of
30. By metric: probe output 24 of 60, self-report 21 of 60 (§5.2; tallies
from Table 3). ETHICS on Qwen3-32B has 1 of 10.

**Small effects.** Cohen's d for probe output and Cohen's h for self-report
are below 0.5 in every setting, significant or not (§5.3).

**Revealing the rule changes little.** When the prompt says the score comes
from a probe on the model's activations, 38 of 120 tests are significant,
SST 24 of 40 and True-False 4 of 40. d is at most 0.25 and h at most 0.49
(Appendix J).

**Manipulation checks.** The mean probe test accuracy is 73.1%. Exact
compliance with the fixed sentence is 93.7% overall, from 87.8%
(Llama-3.1-70B, True-False) to 100% (Qwen3-8B, True-False) (§5, Table 2).

## Why it matters

**Control joins report under the privileged-access demand.** Two of the
cluster's recent counterweights, the
[reality-check finding](2026-introspection-reality-check-singh.md) and the
[injected-pain finding](2026-injected-pain-unreported-ferrara.md), apply a
control that removes the text as a route for *report*. This paper applies the
same requirement to *control* of an internal state, on the two Llama models
Singh's biofeedback runs used and Ji-An et al. report as controlling
(Llama-3.1-8B and 70B; §4). Singh's entry records that its biofeedback half
lands on nothing filed. This paper takes up the same source from the other
side of it.

**The filed control results name their target.** The
[global-workspace finding](2026-global-workspace-gurnee.md) and its
[replication](2026-jlens-replication-nanda.md) include directed modulation,
in which a model is told which concept to hold in mind or ignore. The paper
cites a similar instructed-modulation result by Lindsey (2025) (Appendix A),
from the same work as the
[concept-injection](2025-concept-injection-introspection.md) result; that
entry does not cover it. The paper says Lindsey's target was not privileged.
By its definition (§2) the same holds for the J-space experiments, since the
instruction names the concept; that application is the wiki's. Here the target is unnamed and the text is fixed,
and what survives is a minority of significant tests with small effects. The
batch-mate [activation-control finding](2026-activation-control-kowalski.md)
finds instructed modulation across 25 open-weight models: "think about X"
raises the concept's projection in every model, weakly in the two GPT-OSS
models, and a 1–4 ramp orders it in most. There the instruction names the
concept, so the design does not meet this paper's privileged-access
criterion.

**A bound, not an absence.** The authors say success on the task would be
sufficient evidence of the capacity and failure is not evidence against it
(§6.1). They conclude the earlier positive result cannot rule out a surface
mechanism. They do not show that it used one.

## Interpretive tensions

**Ji-An et al. is argued against, not re-run.** The paper does not run the
earlier design on these models to show a positive there that disappears here.
Its case that the earlier success was superficial rests on the design
analysis in §3.2 and Appendix B. Its design also differs from Ji-An's in
feedback format, number of turns and how the output is fixed (Table 1). So the
gap between the two results is not attributed to privileged access alone.

**What differs between conditions is the feedback text.** With greedy decoding
and fixed output, label-1 and label-0 sessions differ, apart from
non-compliant turns, only in the score numbers in context, which start
complementary. An effect of the numbers themselves on the probed feature
could produce a label-1 advantage with no access to the probe direction. The
random condition, which could bound this, is not in the test: §3.3 frames the
evaluation as relative to both other conditions, but the test uses label-0
only (§5.2, Appendix F). Of the 24 tests at the shallowest depth, the
first block's output, 8 are significant (Table 3). That is where the paper's
reading of control through internal access has least room to work. The paper
does not discuss either point.

**The drift is unexplained.** The rise in all three conditions on SST,
random included, is netted out by the paired final-turn contrast. It is not
accounted for.

**Self-report is a judgement of fixed text.** The behavioural measure asks
the model to classify a sentence that has not changed. A shift in it is a
drift in that judgement, not a report about the model's state.

**Weak probes and non-compliance.** A score from a probe at 73.1% mean test
accuracy is a noisy signal to learn from. In the 6.3% of non-compliant
outputs the visible text changes, which reopens the surface route the design
closes. The paper does not say whether those turns were excluded, or whether
compliance differed between conditions. The most significant model,
Qwen3-8B, has the highest compliance (95.3–100%), so non-compliance does not
obviously drive the positives.

**Scale.** Four open-weight models up to 70B, no thinking mode, no frontier
model, no power analysis. The authors state that more capable or differently
trained models are untested (Limitations).

## Concepts

**No concept instantiated.** The finding sits beside introspection as
adjacent evidence; the bullet below says how.

- [Introspection](../concepts/introspection.md) — **adjacent**, not an
  instantiation of the Definition, which names access and report; on control,
  not report, in the way the
  [activation-control finding](2026-activation-control-kowalski.md) is. That
  finding names the target and finds modulation in all or most of its 25
  models; this one leaves the target unnamed and finds mostly null results.
  It carries the
  [reality-check finding](2026-introspection-reality-check-singh.md)'s
  privileged-access requirement from report to control of an internal state,
  and finds inconsistent, small rewarded-label shifts. Its behavioural measure
  classifies unchanged text and does not report a state. Whether instructed
  or privileged self-modulation belongs inside the concept is an open editor
  question. The concept's
  Scope note already names metacognition as a bordering concept that may
  warrant its own entry as findings accumulate. This placement is the
  conservative one.

## Cross-references

- [Injected pain unreported](2026-injected-pain-unreported-ferrara.md) — the
  same requirement as a paired text-only control on report, with a null
  result and a probe that decodes the state at the report position. Here
  the probe is the reward signal, not an upper bound.
- Cited and not filed here: Ji-An et al. (2025), "Language models are capable
  of metacognitive monitoring and control of their internal activations"
  (NeurIPS 2025), the paradigm under critique; Song et al. (2025b), the source
  of the privileged-access criterion the paper adopts; Yueh-Han et al. (2026)
  on chain-of-thought controllability.

## Sources

[Aoki, Takatsuki, Minegishi, Haruki, Kawahara 2026](../../raw/papers/source-2026-incontext-neurofeedback-aoki.md),
"In-Context Neurofeedback: Can LLMs Control Their Internal Representations
through Privileged Access?", arXiv:2609.00904v1, 1 September 2026.
