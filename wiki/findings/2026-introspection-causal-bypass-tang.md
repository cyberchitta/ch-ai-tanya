---
type: finding
title: Small open models fine-tuned to report one of their own neurons, attention weights or SAE features track it on natural text but fall toward chance when it is intervened on; adding a loss on intervened values builds the dependence without generalising to unseen neurons or layers
date: 2026-10-28
models:
  - Llama 3.2
  - Llama 3.1
  - Gemma 2
  - Qwen3
model-ids:
  - Llama-3.2-1B
  - Llama-3.2-3B
  - Llama-3.1-8B
  - Gemma-2-2B
  - Qwen3-0.4B-Base (as printed)
  - Qwen3-1.7B-Base
  - Qwen3-4B-Base
  - Qwen3-8B-Base
source: https://arxiv.org/abs/2610.38911
cites:
  - source-2026-interventional-introspection-tang
refs:
  - 2026-introspection-adapters
  - 2026-introspective-awareness-macar
  - 2026-introspection-reality-check-singh
  - 2026-injected-pain-unreported-ferrara
  - 2026-lie-detectors-hopkins
  - 2025-activation-oracles
  - 2025-concept-injection-introspection
  - 2026-neurofeedback-control-aoki
  - 2026-introspection-mechanism-zou
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Tang, Kim, Şahin, Atkinson, Mueller and Wijaya fine-tune small open models
to state, in context, the value of one named internal signal at one named
token: an MLP neuron's activation, an attention weight, or whether an SAE
feature is active. Each trained reporter is scored on natural text
(endogenous) and again after the signal has been overwritten at run time
(interventional). Plain supervised fine-tuning gives high endogenous and low
interventional correlation, chance-level for late-layer signals away from the
final positions. The authors call this causal bypass: the report is learned
from context that correlates with the signal rather than from the signal.
Adding a loss on intervened values, with a KL regulariser, raises
interventional correlation while keeping endogenous performance. The gain
carries across token positions but not to neurons or layers left out of
training. The authors concede that the report only renders the state into a value,
which a critic could call probing, and is not higher-order introspection.

Under [introspection](../concepts/introspection.md) this is a trained
report-channel intervention with a control the adapters and lie detectors lack:
the same trained reporter scored on both the natural and the intervened values
of the quantity it reports. Its
result is that a self-report can be accurate without depending on what it
reports, and that dependence had to be built at the signal's site. That bears
on the "elicits a latent capacity" reading in the
[introspection-adapters finding](2026-introspection-adapters.md), which was
never tested this way. Whether reading out one neuron counts as introspection
or as probing is left open here; see Interpretive tensions.

## Method

**Task.** The prompt is the input text, a separator token, and a sentence
naming the signal's index and layer and the token's surface form. Neuron values are read by a linear
regression head on the last-layer residual stream, attention weights by a
logistic head, and SAE features as the words active or inactive through the
LM head. LoRA (rank 16) is applied to all linear modules
([Tang et al. 2026](../../raw/papers/source-2026-interventional-introspection-tang.md),
§2.1, App. A–B). Sequences are 32 tokens, from C4 English. Neuron and
attention runs train on 300K rows; neuron tests use 3K rows of C4 test and
attention tests 30K rows of C4 validation; SAE runs train on 150K rows and
test on 30K (App. A.1.1, A.2, A.3). Out-of-distribution tests use C4 Bengali,
C4 Chinese, OpenWebMath, CodeParrot and English Wikipedia (§2.2).

**Models.** Main results use Llama-3.2-1B for neurons and attention and
Gemma-2-2B for SAE features (§2.2). The neuron task alone is repeated on
Llama-3.2-3B, Llama-3.1-8B and Qwen3 base models printed as 0.4B, 1.7B, 4B and
8B (App. H). Attention and SAE results therefore rest on one model each.

**Two evaluations.** Endogenous evaluation correlates reports with the cached
signal (Pearson and Spearman; balanced accuracy for SAE features, which fire
on under 1% of tokens). Interventional evaluation replaces the signal at run
time: neurons with draws from a fitted Gaussian, attention weights from the
training distribution, and SAE features steered on to their median activation
or off to zero. High endogenous with low interventional is read as causal
bypass, low endogenous with high interventional as anomaly detection, and
only high on both as faithful (§2.2.2).

**Interventional training.** The joint loss mixes the ordinary loss with one
on intervened values, drawn uniformly over the signal's training range stretched by a factor *k* (for attention, uniform on 0–1; for SAE features, steered on or off), plus a KL term held near a target budget (§4).
Selected settings: *k* = 10 for neurons and 1 for attention (§4); joint weight
*w* = 0.01 on the ordinary loss for neurons, 0.95 for attention and 0.9 for SAE
features (App. A.1, F.2, F.3); KL budget 0.1 for neurons and SAE features,
none for attention (App. E). The SFT arm has no KL term.

**Sweeps.** Single-signal runs sweep layer and token position, with five
neurons per cell, or three heads or SAE features (§3). Generalisation runs
train on several signals at once (§5). Circuit analysis reads LoRA weight
norms, gradient attribution, injection into other neurons, and mean ablation
of attention heads against a layer-matched random selection (§6, App. M).

## Key results

**SFT gives causal bypass.** Endogenous correlation is high across locales
and signal types; interventional correlation is low. On the interventional test,
early-layer signals near the end of the input do best, with layer-two neuron correlations as high as
0.86; late-layer signals at non-final positions are at chance for all three
signal types (§3). With LoRA switched off over the input text, so that the
signal itself cannot change, endogenous performance is similar and
interventional performance is at chance everywhere, including early layers.
Joint training under that gate also failed, and the authors conclude the
reporting route has to be built at the signal's position (§3, App. D.1.1).

**Baselines without fine-tuning are worse.** Parsing the model's verbal
answer is at chance on both evaluations, though over 90% of answers parse as
numbers. Ridge probes on the last hidden state score above chance
endogenously and at chance interventionally, and no baseline beats SFT
(App. C.1). For SAE features the best probe matches SFT's balanced accuracy
but with precision 0.04 ± 0.02, against 0.69 ± 0.12 for SFT and 0.65 ± 0.12 for
the joint loss; no baseline is above chance interventionally (App. C.2).

**The joint loss raises interventional correlation.** Relative to SFT,
interventional gains are largest in middle layers and positions, with small
endogenous gains where SFT was already high (§4). The authors report a wider
advantage on data with lower endogenous scores (C4 Bengali) and a
narrower one on English Wikipedia (§4). Late-layer, early-position signals
remain hard after joint training (App. G). The comparison with SFT is
confounded by the KL term; the authors checked only on the OOD evaluation and
report that dropping it improves the joint loss (App. E). Repeated on
Llama-3.2-3B and Llama-3.1-8B, the joint loss again keeps endogenous and
raises interventional correlation (App. H). Performance generally falls with
model size, while the gap over SFT holds level or grows slightly (App. H.1).

**Generalisation stops at the trained signals.** Across token positions and
lengths the joint loss generalises partly, less well interventionally than
endogenously (§5.1). In multi-position training SFT beats it endogenously and
it beats SFT interventionally (App. J.1). At a fixed data budget models report
up to two layers and ten neurons; more signals need more data per signal, and
there is no generalisation to unseen layers or neurons (§5.2). SAE features
addressed by their natural-language labels generalise to unseen features
endogenously only, which the authors read as bypass (§5.2, App. L).

**The trained circuit.** LoRA updates peak at the signal's layer in the MLP
and one layer later in attention (§6.1). The updates to the target neuron's up
and down projections are nearly orthogonal to its base weights, which the
authors read as a separate channel carrying the value onward (App. M.2.1).
Gradient attribution peaks at the correct neuron, and injections into other
neurons do not move the report (App. M.2.2–M.2.3). Heads that matter for
endogenous and interventional reports overlap more than a layer-matched random
set; endogenous-ranked heads transfer better to the interventional metric than
the reverse (§6.2). Heads that attend to the signal token only under large
injections are more common among interventional heads; the difference is
significant by Fisher's exact test (p < 1e-4), and such heads also appear among
endogenous ones (App. M.5).

## Why it matters

The cluster's trained report channels, the
[introspection adapters](2026-introspection-adapters.md) and the
[fine-tuned lie detectors](2026-lie-detectors-hopkins.md), are scored by
whether their reports are right. This paper adds the test that asks whether a
right report depends on its subject, and shows that output-level fine-tuning
can pass the first and fail the second. On the wiki's reading, that is
evidence that an accurate trained self-report is not by itself evidence of
access, and the adapters entry's "access is broadly preserved" inference was
drawn without this control. The paper cites the adapters work only as related
meta-model research, not as a bypass case.

The paper's own conclusion is also that the faithful route is built, not
found. Switching LoRA off over the input text, the signal's site included, leaves interventional correlation at chance, and the joint-loss updates write the value into a new
orthogonal direction. This echoes the
[injected-pain finding](2026-injected-pain-unreported-ferrara.md), whose
author concedes that a trained LoRA reporter may create the route it reveals,
and its 0–6% transfer to untrained directions matches the failure here on
unseen neurons. Both results bear on whether trained self-report channels
measure a capacity or install one.

The endogenous-versus-interventional grid makes operational the distinction
the [reality-check finding](2026-introspection-reality-check-singh.md) draws.
That paper argues injection detection can be first-order anomaly detection
and that hidden-state labels can be read by ordinary forward computation.
Here the two failure modes are separate cells of one grid. It does not answer
the second-order question either, and says so. Its probe baselines, at chance
on the interventional test, are the analogue of that paper's input-embedding
controls. The batch-mate on
[neurofeedback with a privileged-access control](2026-neurofeedback-control-aoki.md)
takes a related paradigm from a different direction.

The authors read the head analysis as validating
[Macar et al.'s](2026-introspective-awareness-macar.md) anomaly-detection
mechanism, with endogenous-reporting circuits as a possible superset of it.
On the wiki's reading the link is an analogy across models and tasks: the
gating heads here resemble that paper's gate features, which respond to
injection in the opposite direction. Macar also finds that SFT does not build injection detection and
preference training does; here output-level SFT builds an accurate but
bypassing report. The tasks differ, but on both accounts SFT on report labels
alone is not enough.

## Interpretive tensions

**Is reading out one neuron introspection?** The authors target first-order
awareness and concede the report only renders the state into a value, which
fails Lindsey's metacognitive-representation criterion. The concept's
Definition names a within-pass capacity in which some processing takes other
processing as content; a trained route carrying a neuron's value to the
report token meets the letter of that. On the reality-check finding's terms
it is first-order readout, and the paper agrees. This entry does not settle
which reading governs, and that question decides whether the paper
instantiates the concept or stands beside it.

**Is the strict criterion too strict?** The paper's test requires that
intervening on the named neuron or head changes the report. The authors note
that self-repair could hide real dependence and that a distributed feature
may make a single-unit intervention ill-defined (Limitations). Some "bypass"
cells may therefore be dependence the test cannot see.

**What the abstract claims.** The abstract's count of eight models spans all three tasks, but
attention and SAE results come from one model each, and the neuron task runs
on seven, without Gemma-2-2B. Its claim that the mechanism scales with more
data means that more signals
need more data per signal at a fixed budget; there is no generalisation to
unseen signals. The interventional gains are called significant without a
named test, and seeds are not stated. For the other models the learning rate
was chosen on the test split, using two neurons held out from the plotted
ones (App. H).

**Does SFT failure transfer to semantic introspection?** The paper offers the
low-level task as a first step towards harder ones and allows that natural-language
reports may not need awareness of particular neurons. That causal bypass in
this setting predicts bypass in concept-level self-report is argued, not
shown.

## Concepts

- [Introspection](../concepts/introspection.md) — instantiation, as a trained
  report-channel intervention, scored on both natural and run-time-intervened
  values of the reported quantity. It shows SFT yielding
  accurate but bypassing reports and a joint loss building a causally
  dependent route at the signal's site, which does not generalise to unseen
  signals. Placement depends on the editor's call on whether first-order
  readout of a single unit counts as introspection. If not, it moves beside
  the concept as a methodological counterweight in the way the reality-check
  finding is.

## Cross-references

- [Activation oracles](2025-activation-oracles.md) — the paper sets itself
  against external explainers and trains the model to read its own signals.
  In that entry's held schema question it is category (b), a trained
  self-report channel in the same model, here at the level of single units.
- [Concept injection](2025-concept-injection-introspection.md) — the paper
  treats injection-based tests as possibly solvable by anomaly detection and
  uses natural signals with interventions as ground truth instead.
- [Head-level circuit for injected-concept report](2026-introspection-mechanism-zou.md)
  — batch-mate; another head-level account bearing on the gating heads here.

## Sources

- Tang, Z., Kim, J., Şahin, K., Atkinson, D., Mueller, A., & Wijaya, D.
  (2026). [Interventional Training Reduces Causal Bypass in In-Context
  Introspection](../../raw/papers/source-2026-interventional-introspection-tang.md).
  arXiv:2610.38911 (v1, 28 Oct 2026). The quoted phrase in the abstract's
  close, the need to train "on mechanisms, rather than behavior alone", is
  the authors' summary of the result.
