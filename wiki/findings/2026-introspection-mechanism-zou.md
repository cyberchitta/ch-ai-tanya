---
type: finding
title: In three open-weight models, 32 middle-layer gate heads set whether an injected concept's position is reported and one or two later router heads set which; clean gate outputs raise none responses on injected trials from 24–38% to 61–82%
date: 2026-09-28
models:
  - Qwen3 4B
  - Llama 3.1 8B
  - Gemma 3 12B
model-ids:
  - Qwen3-4B-IT
  - LLaMA-3.1-8B-IT
  - Gemma-3-12B-IT
source: https://arxiv.org/abs/2609.35108
cites:
  - source-2026-introspection-mechanism-zou
refs:
  - 2025-concept-injection-introspection
  - 2026-introspective-awareness-macar
  - 2026-introspection-reality-check-singh
  - 2026-introspection-causal-bypass-tang
  - 2026-neurofeedback-control-aoki
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Zou, Sun, Kong and Wang turn concept injection into a localization task with
an exact answer. The prompt text is fixed and lists ten labelled candidate
tokens; a concept vector is added to the hidden state at one of them, or
nowhere, and the model's first-token choice among the ten labels and `none` is
the answer. No judge is involved. In Qwen3-4B-IT, LLaMA-3.1-8B-IT and
Gemma-3-12B-IT, two small sets of attention heads carry the report. Thirty-two
jointly selected middle-layer *gate* heads move the position-or-none
decision: restoring their clean outputs in injected runs raises the none rate
from 37.7%, 25.3% and 23.8% to 81.5%, 60.7% and 80.7%, most of the way to the clean-run rates. One or two *router* heads in a single transition layer carry which
position is named: when gate and router outputs come from injections at
different positions, reports name the router's position on 38–40% of trials
and the gate's on 3–5%. For concepts that localize well, the injected change is
only slightly larger in the gate heads than for poorly localized ones, while
the heads' queries and attention line up with it much more closely.

This instantiates [introspection](../concepts/introspection.md) in the way
[Macar et al.](2026-introspective-awareness-macar.md) does: a mechanistic
account of how an injected change becomes a report. It is an independent
partial convergence on Macar's shape, a gate on whether anything is reported
separated from a later stage that says what, obtained here from the model's
own heads rather than a transcoder and across three families. Like Macar, it
narrows the [reality-check](2026-introspection-reality-check-singh.md) dispute
over first-order anomaly detection without settling it. Its injections sit at
layer 0 in two of the three models, which leaves it closer to an input
perturbation than the mid-depth injections of Macar and
[concept injection](2025-concept-injection-introspection.md).

## Method

**Task.** Each prompt tells the model that a concept vector may have been
injected at one of ten candidate tokens and asks for the affected position or
`none`. Labels are digits, letters or number words, each in canonical or
shuffled order (six settings). The answer is the argmax over the eleven allowed
first tokens. Injected runs are paired with clean runs of the same text
([Zou et al. 2026](../../raw/papers/source-2026-introspection-mechanism-zou.md), §3.1, A.3).

**Injection.** Concept vectors follow Lindsey's extraction: the final-token
residual for "Tell me about c." minus its mean over English words, normalized.
The vector is added at a strength relative to the activation norm. Layer and
strength were chosen per model on calibration clusters for best localization:
layer 3 at strength 3 for Qwen (36 layers), layer 0 at 6 for LLaMA (32), and
layer 0 at 5 for Gemma (48). The 300 vocabulary concepts with the highest
calibration accuracy were kept and split 100/100/100 into training, validation
and test sets. Candidate-token clusters (30 per bank) share no tokens across
banks (§3.2, A.2, Table 4).

**Gate heads.** A binary mask over heads in a middle-layer window (17–23 Qwen,
13–16 LLaMA, 21–28 Gemma) is trained with a straight-through estimator to push
the position-versus-none log-odds up (Gate-on, clean run receives injected head
outputs) or down (Gate-off, injected run receives clean outputs), all at the
final prompt position. During Gate-on training the router heads' attention is
fixed to the target. The cardinality k = 32 (2.8–4.2% of heads) was fixed on
validation against random head sets from the same layers. Heads were selected
under ordered digits and reused for the other five settings (§4.2, A.7–A.11).

**Router heads.** Each head's final-position output is patched singly from the
clean run into the injected run, and the drop in correct-position accuracy is
recorded. The largest drops fall on L24 H29 and H31 (Qwen), L17 H24 (LLaMA) and
L29 H1 and H11 (Gemma), in the layer where k-means position clustering jumps
(§4.1, §4.3, A.12).

**Controls.** Norm-matched random Gaussian directions (three seeds, 200
directions each, ordered digits only). Lexical replacement of each candidate by
the concept word or a random word, with no injection (all six settings). Random
head sets at each cardinality (A.4, A.5, A.10).

**Concept groups.** For Section 5, the 100 validation concepts are compared
with 100 concepts sampled from the 300 lowest-ranked in the fine screening
stage. QK and OV changes in the Gate-on heads are factored by SVD, and the
leading OV modes are ablated (§5, B, C).

## Key results

**Baseline task.** Mean localization accuracy on injected test trials is
54.5% (Qwen), 44.3% (LLaMA) and 66.0% (Gemma), against a 10% uniform baseline;
mean correct-none rates on clean trials are 89.4%, 62.8% and 87.8%. Both vary
widely by label setting. LLaMA answers `none` on 13.3% of clean trials under
shuffled digits (Table 1).

**Gate heads.** Restoring clean gate outputs in injected runs raises the none
rate from 37.7% to 81.5% (Qwen), 25.3% to 60.7% (LLaMA) and 23.8% to 80.7%
(Gemma), against clean-run rates of 89.4%, 62.8% and 87.8%. Supplying injected
gate outputs to clean runs raises position reports from 10.6% to 41.8%, 37.2%
to 69.3% and 12.2% to 62.6%, against injected-run rates of 62.3%, 74.7% and
76.2% (Table 9a, b). The two masks are trained separately and share 16–18 of
their 32 heads (Table 7). On validation, the selected masks move the rates more
than random head sets of equal size; that comparison is plotted only (A.10).

**Gate and router together.** With clean gate outputs, injected router outputs
leave the none rate at 76.3%, 53.9% and 73.7%, far above the unmodified
injected runs. In a clean run, injected router outputs with clean gates give
position reports on 14.1%, 42.7% and 9.8% of trials, close to the clean rates
(Table 9c, d). In the crossed patch, reports name the router's source position
on 38.0%, 37.8% and 40.1% of trials and the gate's on 2.9%, 3.2% and 4.9%
(Table 2). The position-level bootstrap for Gemma's router share runs 31.0–47.4%
(Table 10). The router position exceeds the gate position in every
model–setting combination (Table 12).

**Redirecting router attention.** Setting router-head attention one-hot on
another candidate's successor token makes that candidate the most frequent
answer on average over settings: 63.2% (Qwen), 70.0% (LLaMA) and 36.0%
(Gemma). In Gemma the injected position still takes 27.6%, and under ordered
digits and ordered words it outscores the redirected one (46.7% against 35.5%,
39.4% against 33.4%) (Table 8). Router attention shifts toward the candidate's
successor token rather than the injected one (A.14, plotted).

**Controls.** Norm-matched random directions localize at 0.84% (Qwen), 6.71%
(LLaMA) and 0.00% (Gemma), and leave position reports at the clean
false-positive level, measured on 30 uninjected prompts: 3.37% against 3.33%, 24.90% against 30.00%, 4.59% against 6.67%
(Table 5). Lexical replacement without injection leaves localization of the
replaced position at 0.87–11.13%, with no consistent advantage for the concept
word (Table 6).

**What distinguishes well-localized concepts.** In the Gate-on heads, the
leading key-change mode is 1.08–1.22 times larger for the high-accuracy group,
while the query's projection onto it is 1.20–1.80 times larger, with query norms
nearly equal. For the five leading OV modes, sizes differ by 1.04–1.22 times
and alignment with attention by 1.13–3.85 times (Table 3). The comparison is
correlational. Removing the five leading OV modes from the gate heads lowers
correct-position rates for the high-accuracy group from 48.3% to 5.1% (Qwen),
69.3% to 57.4% (LLaMA) and 83.7% to 13.5% (Gemma); removing all other modes
costs at most 3.7 points (Table 17). The ablation also cuts position reports of
any kind, so it acts on whether as well as where (C.2).

## Why it matters

The concept's evidence for injection detection had one filed mechanism, from
one model, scored by a judge. This paper studies a different task on three
smaller models, one from Macar's Gemma family, from a different group, and its first-token scoring removes
the judge and any chance of the model reading its own earlier output. What
recurs is the separation: Macar's evidence carriers release a default-"No" gate
while identification runs through later mechanisms; here a broad set of
middle-layer heads controls whether a position is reported, and a few
transition-layer heads control which. The parts do not map one to one. Macar's
gate is a set of transcoder features whose largest localization was an MLP;
Zou's gate is 32 attention heads, and MLPs were not studied.

On the anomaly-detection dispute, the paper's controls exclude less than its
framing suggests. The random-direction result rules out a detector that
responds to any large deviation: random directions at matched norm leave
position reports at the clean false-positive level. It does not rule out a first-order process
selective for directions the model uses, which still falls under the first-order alternative the
[reality-check finding](2026-introspection-reality-check-singh.md) named. The
authors say so in their own terms: under Lindsey's criteria, a report of an
induced change counts for them as introspective provided it is grounded and
internal and does not simply map the change onto an answer. Their evidence against direct translation is that
injected router outputs, which carry the position, do not restore reports when
the gate heads are clean. A two-stage first-order computation would show the
same dependence. So the result locates a gating stage in the heads, as Macar
located one in features, and leaves open whether that stage reads other
processing as content.

The concept-group analysis extends a point Macar's per-concept regression made:
which concepts get reported depends more on the readout than on the size of the
perturbation.
Within this screened pool and task, that places part of the variation in
report accuracy at the reading side. The authors suggest gate heads as a site
for monitoring whether a steered model has noticed the intervention.

Two filings in the same batch bear on this one:
[the causal-bypass finding](2026-introspection-causal-bypass-tang.md), on
trained self-report and the signal it should depend on, and
[the neurofeedback finding](2026-neurofeedback-control-aoki.md), which runs a
privileged-access control this paper does not.

## Interpretive tensions

**The injections sit near the input.** Calibration chose layer 0 (the residual after the
first block) for LLaMA and Gemma and layer 3 for Qwen, at three to six times the activation norm. An edit
to a candidate's hidden state at layer 0 is close to an altered input
embedding, so the task may measure detection of an anomalous token
representation more than of a change deeper in processing. The lexical control
swaps the token itself and is not matched for the size of the change. The
[reality-check entry](2026-introspection-reality-check-singh.md) records the
same concern for its layer-2 injections. Lindsey's and Macar's injections are
at mid-depth.

**The task is built to elicit the report.** The system prompt describes the
injection and asks for its position, and scoring reads one forced-choice token.
The authors list free-form and unprompted reports as untested. The result
concerns a prompted, closed-set localization, not spontaneous report.

**Selection is built in.** The test concepts are the top 300 from the
vocabulary by calibration accuracy, the injection settings were chosen to
maximize localization, and the gate heads were optimized to move the target
log-odds, with router attention clamped during Gate-on training. Effects are
large partly by construction, and generalization is within the screened pool.
LLaMA's clean-run position rate is 37.2%, so its baseline for false positives
is high.

**Heads or MLPs.** Macar found that no single attention head improved
success/failure probes and that ablating attention layers did little, with the
largest effect at a layer-45 MLP in Gemma3-27B. This paper searches only
attention heads, reasoning that a report about another position must move
information across positions. Different task, models and injection depth, so
the two are compatible, but the circuits are not the same circuit.

**How narrow the intervals are.** The Wilson intervals treat the pooled trials (180,000 for most bars, 1.8 million for two) as independent, which gives half-widths of 0.3 points or less. The exception is the clean-run comparators, which rest on 180 prompts and span several points (LLaMA's clean none rate of 62.8% runs 55.5–69.5%). The
position bootstrap, reported only for the crossed and redirection tables, is
much wider, and in Gemma the redirection result reverses in two of six
settings on point estimates, with overlapping bootstrap intervals (Table 11). The random-direction control ran under ordered digits only.

## Concepts

- [Introspection](../concepts/introspection.md) — instantiation; a head-level,
  judge-free mechanistic account of injected-change report on three open-weight
  families. It converges in part with Macar's two-stage shape (a gate on
  whether, separate from a selector of what) and adds a readout-side account
  of why some concepts are reported and others not. Its layer-0 injections and
  untested first-order alternative leave the evidentiary-bar dispute open.

## Cross-references

- [Concept injection](2025-concept-injection-introspection.md) — the source
  of the concept-vector extraction and of the four criteria the paper adopts.
  The task differs: localization among ten fixed positions, not free report of
  an injected thought.
- [Mechanisms of introspective awareness (Macar et al.)](2026-introspective-awareness-macar.md)
  — the closest prior account, cited as such. This paper's case against it is
  methodological (transcoder approximation, LLM judge, thresholded
  attribution), not a contrary result.
- [Reality check (Singh et al.)](2026-introspection-reality-check-singh.md) —
  cited as the anomaly-detection critique. The three-way prompt-manipulation
  control is not run here; lexical replacement is the nearest analogue and
  answers a different question.

## Sources

- Zou, J., Sun, X., Kong, L., & Wang, T. (2026).
  [A Mechanistic Study of Language Model Introspection](../../raw/papers/source-2026-introspection-mechanism-zou.md).
  arXiv:2609.35108 (v1, 28 Sep 2026).
