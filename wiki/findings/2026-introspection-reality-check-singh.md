---
type: finding
title: Open-weight models do not separate activation injections from prompt manipulations, and biofeedback labels are predictable from input embeddings alone
date: 2026-05-25
models:
  - Llama-3.1-70B-Instruct
  - Llama-3.1-8B-Instruct
  - Qwen2.5-72B-Instruct
  - Gemma-3-27B-IT
source: https://arxiv.org/abs/2605.26242
cites:
  - source-2026-introspection-reality-check-singh
refs:
  - 2025-concept-injection-introspection
  - 2025-activation-oracles
  - 2026-global-workspace-gurnee
  - 2026-personalization-mirage-sun
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Singh, Linzen and Ravfogel re-run two paradigms that have been read as evidence
of LLM introspection and add a control to each. In the first, models predict
labels derived from their own hidden states. Probes on the *input*
embeddings match or beat the model, and when the probe's training labels are
randomly permuted the model falls to near the baseline. In the second,
Lindsey's steering-detection task, the authors add a condition where the
concept is pushed through the prompt instead of the activations. Given
three options, the models they test do not tell the two apart. The paper's
reading is that two-way detection success is compatible with detecting that
*something* is anomalous, which is first-order processing. It adds a principled
argument: privileged access is necessary but not sufficient for introspection
in the second-order sense, and no behavioural paradigm alone can establish
that sense.

This is the first filed entry under [introspection](../concepts/introspection.md)
whose main contribution is a critique of how the concept's evidence is
measured. It engages one filed finding directly: the
[concept-injection result](2025-concept-injection-introspection.md), though
only by proxy on open-weight models, since Claude was not tested. It engages a
second in related work: the [activation-oracles](2025-activation-oracles.md)
reading of "privileged access". Its principled claim bears on the concept
itself more than on any single entry. The concept's Definition names exactly
the second-order sense the paper says behavioural evidence cannot reach.

## Method

**Biofeedback, supervised.** Following Ji-An et al. (2025), the authors fit a
logistic-regression probe on hidden states for the ETHICS commonsense subset,
bin its scores into two labels, and ask the model to predict those labels
in-context. The control permutes the ETHICS labels *before* fitting the probe.
The result is still a valid direction in hidden-state space, but it no longer
tracks anything semantic in the input. Llama-3.1-8B- and 70B-Instruct.

**Biofeedback, unsupervised.** The labels are binarized projections onto
principal components of a layer's hidden states. The control trains a linear
probe on mean-pooled *layer-0* representations to predict those labels.

**Belief Dominance.** Steinmetz Yalon et al. (2026) cluster a
patchscope-derived measure into three classes. The measure records whether a
model's hidden states favour its parametric answer or a counterfactual one
supplied in context. They then ask the model to predict the class in-context.
The control is a probe on the concatenated layer-0 embeddings of two entities
alone, with no prompt and no hint of conflict. The data is the original 900
items, split 450/450 across 15 seeds. The in-context numbers are the original
paper's, not re-run.

**Steering detection, three-way.** The authors adapt Lindsey's
injected-thoughts prompt to Llama-3.1-70B/8B, Qwen2.5-72B and Gemma-3-27B
(instruct), using 32 concepts. They add a "gaslight" condition, a block of
prompt text telling the model it is obsessed with the concept, with no
activation change. In the two-way prompt the model can answer only injection
or no injection. In the three-way prompt it can also answer prompt
manipulation. Layer and steering strength are searched, and the reported
setting is the one where the model is most correct. The prompt variant shown
is the one that reproduces Lindsey's two-way pattern for each model.

## Key results

**Biofeedback success tracks input semantics.** For the supervised variant,
in-context accuracy falls under permuted labels to what the paper describes as
close to the majority baseline, and the abstract as "closer to chance". The
accuracies themselves are plotted, not printed, and are not cited here. For the PCA variant, the layer-0 probe tracks or slightly exceeds
the model's in-context accuracy at every training size shown.

**Belief Dominance labels are about as predictable from the entities alone.**
On a class-balanced test set (chance 0.33), the in-context predictions reported
by Steinmetz Yalon et al. score 0.39–0.47. The layer-0 entity probes score
0.48–0.54. The gap is widest for the counterfactual-belief label on Llama
(0.39 in-context against 0.51 and 0.54 for the probes). The authors suggest
entity frequency as the shared cue. They also note that the two rows' standard
deviations measure different things (generation seeds against train/test
splits).

**Two-way detection reproduces, and flags the prompt condition too.** On the
instruction prompt, Llama-3.1-70B labels 80.5% of injection trials as
injections, with a standard deviation of ±27.8 across concepts. It also labels
87.5% of gaslight trials as injections, and 23.5% of control trials. Gemma-3-27B
reproduces only on the conversational prompt: no false positives on controls,
10.9% detection on injection trials, and 48.5% on gaslight trials. Qwen2.5-72B
almost never reports an intervention.

**Three-way discrimination fails.** Given the prompt-manipulation option,
Llama-3.1-70B splits injection trials 49.6% injection and 40.8% prompt
manipulation. It splits gaslight trials 41.6% injection and 27.5% prompt
manipulation. Gemma-3-27B mostly answers control, and labels injection trials
as prompt manipulation (29.1%) more often than it labels actual gaslight trials
that way (14.2%). Qwen2.5-72B's non-control answers stay at or below 7.7%.
The appendix reports the same failure for every model–prompt combination that
reproduced the two-way pattern. Llama-3.1-8B, whose two-way reproduction the
authors call weaker than 70B's, answers at random between the two intervention
options.

**The principled claim.** Every computation in the model runs over hidden
states. A label defined on hidden states can therefore be read out by ordinary
forward-pass computation, and the task only looks privileged from the
observer's side. The paper ties strong introspection to a second-order process
dissociable from first-order processing, visible in separable circuits and
characteristic failure modes. Establishing it is said to require mechanistic
evidence.

## Why it matters

Two parts of the introspection cluster's evidence carry different weight after
this paper. The concept-injection result was already filed as a highly
unreliable existence proof. This paper does not test that proof, because it
cannot run Claude. What it shows is that where the two-way pattern reproduces
in open-weight models, the same models flag an input-level manipulation at
least as readily and cannot say which kind of intervention occurred. The
concept's Definition infers "some monitoring architecture" from concept
injection. That inference now faces a named first-order alternative, anomaly
detection. The
[global-workspace finding](2026-global-workspace-gurnee.md) supplies a
mechanistic fact that fits the alternative, though that paper does not frame it
this way: in its four-task test, anomaly detection was unmoved by overwriting
the J-space representation, which makes it a computation that runs outside the
reportable subspace.

The principled argument reaches further than the experiments. The concept's
current scope note says access is task-conditional. Two lines of evidence
carry it: the J-space account, and the audit/generation gap in
[the personalization-mirage finding](2026-personalization-mirage-sun.md).
On this paper's terms, both lines evidence a task-conditional *readout*, meaning
what the model can report and when. Neither shows a second-order process
reading first-order ones. The mirage entry already says its result needs no
privileged access. The scope note's framing in terms of "access" is the part
under pressure, not the entries' results.

The biofeedback half lands on nothing filed. Neither Ji-An et al. nor
Steinmetz Yalon et al. has a finding here. It is recorded as a general control
the cluster should demand of any hidden-state-label task: permute the labels,
or probe the input.

## Interpretive tensions

**The injections sit near the input.** The best-performing steering layers
are layer 2 for Qwen2.5-72B and Llama-3.1-70B in both settings, and layer 2 or
8 for Gemma. Lindsey's optimum was about two-thirds of the way through the
model. A perturbation at layer 2 is close to an input perturbation. That a
model then cannot tell it from a prompt manipulation may say as much about
where it was steered as about introspection. The paper does not discuss this.

**The three-way failure is symmetric.** Models also fail to label the gaslight
condition as prompt manipulation, although the manipulating text is present
verbatim in their context. Llama-3.1-70B gives that answer on 27.5% of gaslight
trials, and Gemma on 14.2%. A model that cannot classify visible prompt text
may be failing the three-way task's label semantics rather than showing only
anomaly detection. On that reading the control does not isolate what it was
built to isolate.

**The two-way reproduction is looser than stated.** The text describes
Llama-3.1-70B as having "very few false positives" and calls it more
"introspective" than Lindsey's models. Its own heatmap shows 23.5% of control
trials flagged, against the zero false positives that marked the Claude
production models. Results are also best-of-search over layer, strength and
prompt variant, and concept-level standard deviations reach ±27.8.

**Lindsey's own thought-versus-text test is not engaged.** The
concept-injection paper reports that models transcribe a sentence correctly
while reporting an unrelated concept injected over the same tokens. That is a
different discrimination from this paper's: whether an injected concept is
confused with the text, not which channel delivered it. This paper does not
address it.

**Open-weight models stand in for Claude.** The concept-injection finding
notes that post-training strongly shapes the capacity and that base models show
none of it. A failure in Llama, Gemma and Qwen instruct models does not transfer
to Claude Opus 4.1 without an argument the paper does not supply.

## Concepts

- [introspection](../concepts/introspection.md) — methodological
  counterweight, not an instantiation of the capacity. It separates two claims
  the concept has run together: that a model can *report* on a hidden-state
  property (privileged access, which two-way steering satisfies by
  construction), and that it does so by a *second-order* process, which the
  Definition assumes and this paper says behavioural evidence cannot
  establish.

## Cross-references

- [Concept injection](2025-concept-injection-introspection.md) — the paradigm
  under test, extended by proxy. The critique targets detection only. The
  paper separates its argument from Lederman and Mahowald's, which says
  detection is content-agnostic and identification defaults to frequent
  guesses.
- [Activation oracles](2025-activation-oracles.md) — the paper's related work
  argues that "privileged access" in trained-verbalizer studies reflects a
  model operating in its own representational space. On that account it is an
  architectural fact, not introspection. This sharpens the self-application
  caution already in that entry's tensions.
- Macar et al. (2026), cited here as concurrent work, report a distributed
  anomaly-detection circuit in Gemma-3-27B. The paper reads it as consistent
  with the deflationary view. It is not filed, and is a candidate for the
  mechanistic evidence this paper asks for.

## Sources

[Singh, Linzen, Ravfogel 2026](../../raw/papers/source-2026-introspection-reality-check-singh.md),
"Can LLMs Introspect? A Reality Check", arXiv:2605.26242, 25 May 2026.
