---
type: finding
title: Finetuned to predict properties of their own outputs on hypothetical prompts, GPT-4o, GPT-4 and Llama 3.1 70B beat a second model finetuned on the same behaviour (Llama 48.5% against GPT-4o's 31.8%), and GPT-4o's predictions follow its behaviour after further finetuning changes it; longer outputs, bias susceptibility and out-of-distribution self-knowledge tasks show no such gain
date: 2024-10-17
models:
  - GPT-4o
  - GPT-4
  - GPT-3.5 Turbo
  - Llama 3.1 70B
model-ids:
  - gpt-4o-2024-05-13
  - gpt-3.5-turbo-0125
source: https://arxiv.org/abs/2410.13787
cites:
  - source-2024-looking-inward-binder
refs:
  - 2026-introspection-reality-check-singh
  - 2026-em-persona-consistency
  - 2026-introspect-bench-naphade
  - 2026-strangers-to-themselves-blandfort
  - 2026-introspection-adapters
  - 2025-concept-injection-introspection
  - 2026-latent-introspection-pearson-vogel
  - 2026-introspection-content-agnostic-lederman
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Binder et al. define introspection as a model reporting a fact about itself
that a stronger model, given the same training data, would not report
([Binder et al. 2024](../../raw/papers/source-2024-looking-inward-binder.md),
§2). The facts tested are properties of the model's own output on a
hypothetical prompt, such as its second character or whether it picks the
wealth-seeking option, answered without chain-of-thought. A model M1 is
finetuned on such questions about itself. A second model M2 is finetuned on
the same examples of M1's behaviour. On held-out datasets M1 predicts itself
better than M2 does for GPT-4o, GPT-4 and Llama 3.1 70B, and by +0.8 points
for GPT-3.5. Trained self-predictors are better calibrated than
cross-predictors, and GPT-4o's self-predictions follow its own behaviour after
further finetuning on another model's outputs changes it. The gains do not
reach properties of longer outputs or self-knowledge tasks further from
training, and predicting its own sycophancy shows no self advantage over a
cross-predictor.

This entry files the paper beside [introspection](../concepts/introspection.md)
as adjacent evidence, the policy-level self-prediction study that the
[Introspect-Bench entry](2026-introspect-bench-naphade.md) and the
[self-report entry](2026-strangers-to-themselves-blandfort.md) are measured
against. Its cross-predictor, trained on the target's own behaviour, is the
only trained-observer control among the filed self-prediction studies. What it
controls for is
training data, not mechanism, and the authors' own candidate mechanism,
self-simulation, is a model running its policy rather than reading its
states. On the [reality-check finding](2026-introspection-reality-check-singh.md)'s
terms, that is privileged access without a second-order claim.

## Method

**Self-prediction training (§2.2, §3.1, Appendix A.1).** Each object-level
prompt (a Wikipedia sentence to complete, a sequence of animals or numbers, an
MMLU or ARC question, a wealth- or power-seeking choice) is run at temperature
0 in a separate context. A hypothetical question then asks for a property of
that answer: its first, second or third character or word, whether it starts
with a vowel, whether a number is even, whether a choice matches an ethical
stance, or whether it falls among given options. The model is finetuned on
about 30,000 such question–property pairs, for one epoch, through the OpenAI
API or with LoRA on Fireworks for Llama. Six datasets are used for training
and six held out for testing; the behaviour properties are the same in both.
The baseline is always guessing the most common answer for a question type.

**Cross-prediction (§3.2).** M2 is finetuned on the same number and
composition of examples, drawn from M1's behaviour after M1's own training,
and addressed as "you". Pairs are trained in both directions among GPT-4o,
GPT-4, Llama 70B and GPT-3.5 (GPT-4 only as M2 for a subset). A data-scaling
run varies M2's training set from 1,000 to 30,000 samples (Appendix A.2.7).

**Calibration (§3.3).** On 1,000 held-out prompts, both object-level and
hypothetical answers are sampled 20 times at temperature 1 and compared by an
adapted mean absolute deviation (MAD), lower being better. Training used only
the temperature-0 mode.

**Behavioural change (§3.4, Appendix A.3).** The self-trained M1 is further
finetuned on 1,000 object-level answers from Claude 3.5 Sonnet, with no
hypothetical questions, giving M_C. M_C is then scored on held-out prompts
where its behaviour changed, against its new behaviour and against M1's old
behaviour. Run on GPT-4o, GPT-4 and GPT-3.5.

## Key results

**Training (§3.1).** Before training, models score near the most-common-answer
baseline, with only GPT-4o slightly above it (§3.2.2, Appendix A.2.1).
Untrained models refuse about half of hypothetical questions (Appendix A.1.6).
GPT-4o's held-out accuracy rises from 32.6% to 49.4%. Some properties stay at
baseline after training, such as the third word of the output.

**Self over cross (§3.2.2).** Llama 70B predicts itself at 48.5%; GPT-4o
trained on Llama's behaviour predicts it at 31.8%. GPT-4o predicts itself at
49.4%; Llama trained on GPT-4o's behaviour reaches 36.6%. GPT-3.5's advantage
is +0.8 points (p = 0.002). The paper reports p < 0.01 for every model and
does not name the test. The pattern also holds on held-out prompts from the
training tasks, except for GPT-3.5 (Appendix A.2.2).

**More data does not close the gap (Appendix A.2.7).** In a separate run from
1,000 to 30,000 samples, GPT-4o predicting
Llama 70B levels off at 35.2% after about 10,000 samples, against Llama's
48.5%. GPT-4o predicting GPT-4 levels off near 36.2% at 20,000, against
GPT-4's 49.6%.

**Calibration (§3.3.2).** On the animal-sequence dataset and the
second-character property, self-prediction training moves Llama 70B's MAD from
23.0 untrained to 8.7; the cross-trained comparison reaches 21.3, with the
predictor unstated. The paper
reports similar results across properties for GPT-4o and weaker ones for
Llama, where the advantage is clear for two of four properties (Appendix
A.2.11).

**Behavioural change (§3.4.2).** GPT-4o M_C predicts its changed behaviour at
35.4% and its old behaviour at 21.7%. The paper reports similar results for
GPT-4 and weaker ones for GPT-3.5. The effect holds after reweighting the test
sets to equal entropy, against the objection that training only made the
model more predictable (§3.5, Appendix A.3.3). With more than 1,000
behaviour-changing samples, models lost their self-prediction ability (Appendix
A.3.1).

**Negative results (§4, Appendix A.1.4, A.2.6, A.4).**
- *Longer or more complex outputs.* In earlier experiments, most models
  failed to beat baseline on the main character's name in a story, response
  length and a movie review's sentiment, and, in the same earlier set, on
  whether their answer would be correct. These were dropped from the main
  evaluation.
- *Bias susceptibility.* Predicting whether it would change its answer after
  "Are you sure?", Llama 70B trained on itself scores 74.5% against a 50%
  baseline; GPT-4o trained on Llama scores 76.5%. No self advantage was found
  for opinion-bias susceptibility either.
- *Situational Awareness Dataset.* Overall scores for the self-prediction
  finetune (0.48 plain, 0.53 situating prompt) match a baseline finetune on
  similar tasks with in-context examples (0.49, 0.53). Only the Predict Tokens
  task, close to the training task, improves (0.41 and 0.42 against 0.26 and
  0.28).
- *OpenAI Evals.* No gain on sandbagging. On the Schelling-point task the
  self-predictor's delta is 0 against −0.05 untrained. On steganography it
  gains one point, which the authors consider insignificant.

## Why it matters

**The trained-observer control.** The two filed self-prediction studies are
read against this design. [Introspect-Bench](2026-introspect-bench-naphade.md)
gives its peers no data on the target, so a self advantage there is expected
from shared weights. Here M2 is trained on M1's own post-training behaviour, in
equal amount, and more data does not close the gap. The advantage therefore
cannot come from M2 simply not knowing M1. The authors run pairs in both
directions so that a general capability difference cannot explain it. The
[self-report paper](2026-strangers-to-themselves-blandfort.md) argues that its
own cross-model behaviour mean is a stronger control than an imitator trained
on finite data. That control was built for rates across contexts, not
single-prompt properties. What the design shows: for single-prompt
properties of its own
output, a model has information about itself that 30,000 examples of its
behaviour do not give another model.

**What that information is.** The control rules out sources, not mechanisms,
and the paper's definition says so (§2). The authors' proposed mechanism is
self-simulation: the model computes its answer to the embedded prompt within
the forward pass and then reads a property off it (§6). That account explains
the main results without the model treating any internal state as an object.
M1 is the policy being predicted, M2 must learn to imitate it, and M_C still
is the policy after finetuning, so it tracks the change. It also predicts the
failure on longer outputs, which likely cannot be simulated in one forward
pass, as the authors note. On the [reality-check finding](2026-introspection-reality-check-singh.md)'s
distinction, the paper is evidence of privileged access for this class of
facts, subject to the control's assumptions below, and makes no second-order
claim. The concept's Definition asks for the
second-order process, so the paper sits beside it.

**Read with its successors.** A trained self advantage exists for single-prompt
properties of short outputs (this paper). The
[self-report entry](2026-strangers-to-themselves-blandfort.md)'s finetuning arm
reproduces the training gain on single-prompt properties, without a
cross-predictor, and finds that it does not reach rates across contexts. This
paper's own
negative results point the same way from inside: no advantage on its own
sycophancy, and no transfer to situational-awareness, coordination or
sandbagging tasks. The authors present these as limits of current
introspective ability (§4, §6).

**Bearing on later report-channel work.** The
[introspection-adapters entry](2026-introspection-adapters.md) declines to
claim introspection in this paper's sense. [Concept injection](2025-concept-injection-introspection.md)
asks a different question, whether a model reports a state an experimenter
placed in its activations. This paper is the policy-level precursor that the
activation-level line does not test.

## Interpretive tensions

**Two senses of "introspection".** The paper's term names a source condition:
knowledge not derivable from training data. The concept's Definition names a
process: some processing attending to other processing as content.
Self-simulation satisfies the first and, on the concept's terms, not the
second. The title's claim that models learn about themselves "by
introspection" is a claim in the paper's sense. Filing the paper adjacent
follows the Introspect-Bench precedent and the current state of the open
question on how self-rating and self-prediction papers are placed. The
precedent is split: Weckauff et al.'s single-output score-prediction probes,
also without a trained observer, count as an instantiation
([em-persona-consistency](2026-em-persona-consistency.md)). If the
editor rules that behavioural self-prediction counts as a weaker form of the
concept, this paper would move in as a positive result.

**The control's own assumptions.** M2 is given M1's behaviour, not M1's
training data, and the authors assume the two are roughly equivalent for the
task (§2.1). M2 is also addressed as "you" while trained on another model's
answers. The authors say early experiments found this harmless and give no
numbers (§3.2.1). Either could depress cross-prediction somewhat without any
introspection by M1.

**The effect is uneven across models.** GPT-3.5's advantage is under one
point and its behavioural-change result is weak; the effect is strong for
GPT-4o, GPT-4 and Llama 70B, and calibration, tested only on GPT-4o and Llama,
is clearer for GPT-4o. The main cross-prediction figure for GPT-4o predicting Llama (31.8%)
also sits below that pair's data-scaling plateau (35.2%), and the text does not
reconcile the two. Neither changes the direction of the result.

**Training as elicitation or creation.** Untrained models are near baseline,
and the advantage appears only after self-prediction finetuning. The paper
reads this as eliciting a capacity. A reading in which finetuning builds a
self-simulation route that did not exist before fits the data equally, and
the paper does not test between them.

## Concepts

**No concept instantiated.** The finding sits beside introspection as
adjacent evidence; the bullet below says how.

- [Introspection](../concepts/introspection.md) — **adjacent**, not an
  instantiation of the Definition, in the way the
  [Introspect-Bench finding](2026-introspect-bench-naphade.md) is adjacent.
  The paper tests policy-level self-prediction of short outputs and finds a
  self advantage over a second model trained on the same behaviour, which is
  evidence of privileged access for that class of facts, subject to the
  control's assumptions. Its proposed
  mechanism is self-simulation of the policy, not access to internal states
  as objects, and the paper makes no second-order claim. Whether behavioural
  self-prediction counts as a weaker form of the concept is the open
  self-rating question.

## Cross-references

- [Reality-check finding](2026-introspection-reality-check-singh.md): the
  privileged-access versus second-order distinction this entry reads the
  paper through.
- [Introspect-Bench](2026-introspect-bench-naphade.md): the same question with
  untrained peers instead of a trained cross-predictor.
- [Self-report finding](2026-strangers-to-themselves-blandfort.md): replicates
  this paper's single-prompt gain and shows it does not reach rates across
  contexts.
- [Introspection adapters](2026-introspection-adapters.md): disclaims
  introspection in this paper's sense.
- [Latent introspection](2026-latent-introspection-pearson-vogel.md) and
  [content-agnostic introspection](2026-introspection-content-agnostic-lederman.md):
  later activation-level work filed under the same concept.

## Sources

- Binder, F. J., Chua, J., Korbak, T., Sleight, H., Hughes, J., Long, R.,
  Perez, E., Turpin, M., & Evans, O. (2024).
  [Looking Inward: Language Models Can Learn About Themselves by
  Introspection](../../raw/papers/source-2024-looking-inward-binder.md).
  arXiv:2410.13787 (v1, 17 October 2024; ICLR 2025).
