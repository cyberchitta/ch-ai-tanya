---
type: finding
title: Pairwise integrated information decomposition of attention-head activity finds synergy-dominated middle layers and redundant early and late layers in four open-weight LLMs; perturbing the synergistic heads costs more MATH accuracy than perturbing redundant or random heads
date: 2026-01-11
models:
  - Gemma 3 4B Instruct
  - Qwen 3 8B Base
  - Llama 3.1 8B Instruct
  - DeepSeek V2 Lite Chat
  - Pythia-1B (training checkpoints)
  - Gemma 3 1B Instruct (graph illustration)
  - Qwen2.5-Math-1.5B (fine-tuning)
source: https://arxiv.org/abs/2601.06851
cites:
  - source-2026-synergistic-core-urbina-rodriguez
  - source-2026-cacophony-hierarchy-chandaria
refs:
  - 2026-cacophony-hierarchy-chandaria
  - 2026-global-workspace-gurnee
  - 2026-persona-vectors-pretraining-moskvoretskii
  - 2026-emotions-functional-states
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Urbina-Rodriguez, Mediano and colleagues carry an analysis from human
neuroimaging over to LLMs. They treat each attention head as a unit, record a
scalar activation per generated token, and use integrated information
decomposition (ΦID) to split the information each pair of heads carries
forward in time into synergistic and redundant parts. Ranking heads by synergy
against redundancy gives the same profile in four open-weight models: middle
layers are synergy-dominated, and early and late layers are
redundancy-dominated. The authors call the middle band a *synergistic core*.
In Pythia-1B the profile is absent at the earliest training checkpoints and
forms over training. Perturbing the most synergistic quarter of heads lowers
MATH accuracy more than perturbing redundant or random heads. Restricting RL
fine-tuning to the synergistic half of heads ends with higher MATH accuracy
than restricting it to the redundant or a random half. Restricting SFT the
same way makes no significant difference.

This is the wiki's first entry that measures information structure *between*
model components. It enters through the consciousness-indicators lens.
[Chandaria et al. 2026](2026-cacophony-hierarchy-chandaria.md) cite it as
evidence for the Level 2 information-integration indicator, alongside the
[J-space workspace](2026-global-workspace-gurnee.md). The paper itself makes no
claim about consciousness in LLMs. It files concept-less, adjacent to
[emergent capabilities](../concepts/emergent-capabilities.md).

## Method

**Units and signal.** Attention heads are the units, or experts for the MoE
model, DeepSeek V2 Lite Chat. Each model answers 60 prompts, ten in each of
six task categories, from grammar correction to emotional and social
reasoning, and generates 100 tokens per prompt. A head's activation at each
token is the L2 norm of its attention output, so each head yields one scalar
time series per prompt, with autoregressive steps as time
([Urbina-Rodriguez et al. 2026](../../raw/papers/source-2026-synergistic-core-urbina-rodriguez.md),
Methods, Appendix A).

**Measure.** ΦID decomposes the time-delayed mutual information of a pair of
units into 16 atoms. Following Luppi et al. 2022 on the human brain, the paper
takes persistent synergy (Syn→Syn) as its synergy measure and persistent
redundancy (Red→Red) as its redundancy measure. Values are averaged over time,
prompts and all pairs that include a given head. The head's rank by synergy
minus its rank by redundancy is its *synergy-redundancy rank*, and layer
averages of that rank give the depth profile. The paper uses Mediano et al.'s
implementation and does not name the estimator.

**Models.** The figures label the four main models as Gemma 3 4B Instruct,
Qwen 3 8B Base, Llama 3.1 8B Instruct and DeepSeek V2 Lite Chat. Pythia-1B's
public checkpoints supply the training trajectory. Gemma 3 1B Instruct appears
only in a network drawing. Qwen2.5-Math-1.5B is the fine-tuning base.

**Interventions.** There are three. (1) *Ablation*: heads are deactivated
cumulatively, up to 40% of nodes, in descending synergy-redundancy order or in
random order (five random runs). The effect is measured as the mean per-token
KL divergence between the intact and ablated models' next-token
distributions, with the ablated model conditioned on the intact model's
tokens. (2) *Perturbation*: Gaussian noise is injected into the
query-projection rows and output-projection columns of the top 25% most
synergistic heads, or of the redundant core, or of a random subset, and MATH
accuracy is scored. For experts, the noise goes into all expert parameters.
(3) *Fine-tuning*: only the top 50% most synergistic heads, the 50% most
redundant, or a random 50% are updated. SFT uses OpenMathInstruct-2. RL uses
GRPO on the MATH train set for 5,000 steps, with five runs per condition and
each run's best checkpoint taken from six evaluations.

## Key results

**A middle-layer synergistic band in four models.** In all four, normalised
synergy-redundancy rank is low near the input, peaks in the middle of the
normalised depth axis, and falls toward the output (Fig. 2c). The pattern
holds at expert level in DeepSeek V2 Lite Chat. In Gemma 3 4B the per-head
heatmap is mixed within layers, and the middle-layer band is a layer average
(Fig. 2b).

**It forms over training.** In Pythia-1B the earliest checkpoints show no
inverted-U, and the profile emerges and stabilises across later checkpoints
(Fig. 3a). The authors conclude it is learned, not a property of the
architecture. This rests on one model's checkpoint series. The abstract's
claim that the core is absent in randomly initialised networks is supported
by these early checkpoints, not by a separate untrained-model analysis.

**Network topology.** The pairwise synergy and redundancy values are used as
edge weights. In all four models the synergy network has higher global
efficiency and the redundancy network higher modularity (Fig. 3c). The
authors match this to the direction Luppi et al. reported in the brain. For
Llama 3.1 8B Instruct both efficiency bars sit near zero on the plotted scale.

**Ablation and perturbation.** Deactivating heads in synergy order produces
more KL divergence than random-order deactivation in all four models
(Fig. 4a). This comparison is against random order only, not against the
redundant core. Under noise perturbation, synergistic-core perturbation gives
the lowest MATH accuracy and redundant-core perturbation the highest of the
three conditions, in all four models (Fig. 4b). The gap is smallest in Qwen 3
8B Base, where the error bars overlap. Accuracies are plotted, not printed, so
none is cited here.

**Fine-tuning: RL separates, SFT does not.** Under RL, synergistic-core
training ends with higher MATH accuracy than random-subset training (p < 0.05,
Hedges' g ≈ 1.4) and redundant-core training (p < 0.001, g ≈ 5.0). Random and
redundant do not differ significantly (Fig. 5). The paper gives the effect only
as Hedges' g; the accuracy gap in percentage points appears only as box
positions in Fig. 5 and is not printed. No pre-fine-tuning
baseline is reported, so the "performance gains" in the abstract are
comparisons between final accuracies. Under SFT, none of the three pairs
differs significantly. The authors read this as SFT memorising wherever it
can and RL generalising through the synergistic core.

## Why it matters

**Where it sits on the consciousness-indicators lens.** Chandaria et al. cite
this paper throughout
[their framework](../../raw/papers/source-2026-cacophony-hierarchy-chandaria.md)
(§5.2, §7.4.3, §8.5, §9.8, §10, §11.7–11.9). Wherever they place it on an
indicator, it is the Level 2 (computational functional) *information
integration* indicator, defined as the system becoming globally
interdependent, informationally more than the sum of its parts. Their
footnote 31 is precise about the level: ΦID measures functional synergy in
information dynamics and is not IIT's Φ, so the result bears on Level 2 and
not on Level 3 intrinsic causal structure. They pair it with the
[J-space](2026-global-workspace-gurnee.md) as two methods that locate an
integrative structure in the middle layers, with the
[emotion vectors](2026-emotions-functional-states.md) as a third line, and
hold all three to bear on access rather than phenomenal consciousness. In
§8.5 they also use the RL result for their consciousness-intelligence
convergence argument.

The paper's own claim is narrower and about something else. Its claim is
about intelligence and generalisation. Consciousness appears twice: in the
opening framing, and in the Discussion's note that high-synergy brain regions
are the most vulnerable to loss of consciousness. The Level 2 placement is
Chandaria et al.'s reading. Rosas and Shanahan co-author both papers.

**Where Chandaria et al.'s summary goes beyond the paper.** Three points.
First, they write that RL fine-tuning selectively *strengthens* the core
(§8.5, §9.8). The paper does not measure synergy after fine-tuning. It shows
that updating synergistic heads yields higher final accuracy than updating
other heads. Second, they describe information carried jointly by *many*
components (§8.5). The measure is pairwise, averaged per head, so it does not
test whole-system integration. Third, §8.5 contrasts the core with "comparably
sized redundant components" under ablation. That follows the paper's own
introduction. In its Results, though, the redundant-core comparison is the
noise-perturbation experiment, and the ablation curves compare only against
random order.

**What the brain comparison measures.** "Brain-like" covers two
correspondences, both qualitative and both to published results, since the
paper analyses no brain data. The first is a depth profile matched to Luppi
et al.'s cortical gradient, with input and output layers standing in for
sensory and motor cortex. The second is a direction-of-effect match in graph
metrics: efficient synergy networks and modular redundancy networks. The unit
(a head's output norm, not a brain region's BOLD signal) and the time axis
(token steps, not seconds) differ.

**Emergence over training.** Next to
[Moskvoretskii et al.](2026-persona-vectors-pretraining-moskvoretskii.md),
where persona vectors become extractable early in OLMo pretraining, this is a
second checkpoint-trajectory result. It tracks a whole-network statistic
rather than a direction.

## Interpretive tensions

**Pairwise synergy of a scalar.** Each head is reduced to one number per
token, and synergy is computed for pairs. The authors flag the L2-norm proxy
as a simplification and MLPs as unanalysed. A pairwise synergy band is a
weaker object than the "globally interdependent" system the Level 2 indicator
describes. Whether it is evidence for that indicator, or only compatible with
it, is the open question in Chandaria et al.'s use of it.

**Middle layers are already special.** The paper notes that its result
matches earlier interpretability work placing high-level computation and
multilingual features in middle layers. The synergy band may index that known
functional division rather than add to it. Chandaria et al.'s convergence
with the J-space is also cross-model: the J-space was found in Claude models,
the synergistic core in 1–8B open-weight models, and the shared location is
on a normalised depth axis.

**Standardised effect sizes, unprinted differences.** The RL result rests on
five runs per condition, using best-of-six checkpoint selection, on one 1.5B
model, and is reported as Hedges' g. A standardised effect scales with the
inverse of within-condition variance, so g ≈ 5.0 can reflect tight runs as much
as a large accuracy difference; the paper does not print the difference that
would separate the two readings. The SFT
null is read as memorisation, and the paper does not test that reading.

**Unstated parameters.** The paper does not give the noise magnitude, the
deactivation method, the redundant core's size under perturbation, the ΦID
estimator, or which model the fine-tuning ranking was computed on. These
details affect how the causal results replicate. No code release is stated.

**Fragility as the explanation.** The authors explain the ablation result by
the theoretical fragility of synergy. Perturbing any band of heads that does
the heavy middle-layer work might give the same ordering. No control
perturbs a matched set of middle-layer heads ranked low on synergy.

## Concepts

**No concept instantiated.** The result is an information-theoretic property
of internal organisation that forms in training. It is adjacent to
[emergent capabilities](../concepts/emergent-capabilities.md) without
instantiating it: the core is not a capacity or a disposition, and the
evidence is a training trajectory in one model, not a scale trend.

This is the adjacent situation, carried in Cross-references. The finding's
nearest frame in the wiki is the consciousness-indicators working lens in
`meta/project-state.md`, which is not a concept. On that lens it is read onto
the information-integration indicator by Chandaria et al. It does not take
that indicator as its own object.

## Cross-references

- [Emergent capabilities](../concepts/emergent-capabilities.md): adjacent.
  The core is a training-emergent structure that was not a training target,
  which matches the concept's "not directly trained for" criterion. The
  concept's instantiations are capacities, dispositions or measurement
  frameworks, and its criteria include appearance with scale, which this
  paper does not test.
- [Chandaria et al. 2026](2026-cacophony-hierarchy-chandaria.md): the citing
  framework, Level 2 information integration. Its summary of this paper is
  compared with the paper itself under Why it matters.
- [J-space workspace](2026-global-workspace-gurnee.md): Chandaria et al.'s
  convergent middle-layer result, from a different method and different
  models.
- Method precedent: Luppi et al. 2022 (*Nature Neuroscience*, the human-brain
  synergistic core) and Luppi et al. 2024 (*eLife*, a synergistic workspace
  for human consciousness). Neither is filed here.

## Sources

- Urbina-Rodriguez, P., Fountas, Z., Rosas, F. E., Wang, J., Luppi, A. I.,
  Bou-Ammar, H., Shanahan, M., & Mediano, P. A. M. (2026).
  [A Brain-like Synergistic Core in LLMs Drives Behaviour and
  Learning](../../raw/papers/source-2026-synergistic-core-urbina-rodriguez.md).
  arXiv:2601.06851, v1 11 January 2026.
- Chandaria, S., et al. (2026).
  [From cacophony to hierarchy: a principled framework for assessing AI
  consciousness](../../raw/papers/source-2026-cacophony-hierarchy-chandaria.md).
  arXiv:2609.35618.
