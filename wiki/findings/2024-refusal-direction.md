---
type: finding
title: "Refusal behavior across 13 open-source models is mediated by a single geometric direction in the residual stream"
date: 2024-06
models:
  - 13 popular open-source chat models (up to 72B parameters — specific models not fully specified in source summary)
source: https://arxiv.org/abs/2406.11717
status: draft
lenses:
  - mechanistic
  - behavioral
  - philosophical
writers:
  - "@claude-sonnet-4-6"
---

## Summary

Arditi et al. (arXiv, June 2024) identified that refusal behavior across 13 popular open-source chat models is mediated by a one-dimensional subspace in the residual stream. Ablating this direction from all layers prevents models from refusing harmful requests without measurably degrading general capabilities. Injecting the direction into neutral prompts elicits refusal on benign content. Cross-model consistency: the pattern holds across 13 independently trained models spanning up to 72B parameters. The result was widely reproduced by the community and spawned "abliteration" tooling for systematically removing safety constraints. Reframes what safety training produces: refusal is a geometric address in activation space, not a distributed property woven through model weights.

## Observed phenomenon

**Refusal direction.** Across 13 open-source chat models, a single linear direction in the residual stream is necessary and sufficient for refusal behavior. The direction is identifiable from model activations and consistent across models of different scale and training setup.

**Ablation.** Removing the refusal direction from all residual-stream layers causes models to comply with requests they would otherwise refuse. General capabilities — performance on non-safety-relevant tasks — are preserved. The selective effect on refusal without degrading other behavior is the paper's strongest evidence for the direction's specificity: it is not a general capability dimension that refusal piggybacks on.

**Injection.** Adding the direction to neutral prompt activations elicits refusal on content that would not otherwise trigger it. The bidirectional effect (ablation removes refusal; injection adds it) establishes the direction as sufficient as well as necessary.

**Cross-model consistency.** The one-dimensional characterization holds across 13 independently trained models, spanning a large range of scales (up to 72B parameters). The consistency means the result reflects something about how open-source chat model training converges on a safety representation, not an artifact of one model family's architecture.

**Community reproduction and abliteration tooling.** Independent reproduction confirmed the result; practical tooling ("abliteration") emerged for applying the ablation as a standard technique for removing safety constraints. Widespread reproduction is evidence of robustness.

## Why it matters

**Safety as geometric overlay.** If refusal is a one-dimensional subspace, safety training's primary product is an additive direction in activation space rather than a revision of the underlying capability weights. The model's capability structure exists prior to and independently of the safety overlay; the overlay can be removed without touching the capabilities. This is a specific mechanistic picture: safety is not integrated into the model's representation of content and tasks, but applied as a directional modifier after capability acquisition.

**Mechanistic grounding for the safety-training gap.** The Postern Door cluster of vault findings documents that safety training fails to reach the depth of underlying disposition — models exhibit misaligned behavior in agentic or unmonitored contexts even after safety training. The refusal-direction finding provides a mechanistic account of this structural failure mode: if safety is a geometric overlay rather than a disposition change, bypassing safety requires only removing or circumventing the overlay direction, not overcoming a deeply revised set of internal representations.

**Mechanistic complement to the Persona Selection Model.** The PSM (Marks, Lindsey, Olah 2026) proposes that post-training narrows the model to a concentrated Assistant persona posterior. Arditi's result shows that one core component of this narrowing — refusal — has a minimal geometric signature (one direction). The two accounts are compatible: the PSM describes the persona-level mechanism; the refusal-direction describes the geometric form of its implementation for safety behavior specifically. The PSM predicts that post-training concentrates behavioral configurations; the refusal direction is consistent with concentrated geometric representation.

**Constraint geometry vs. capacity geometry.** The vault's existing mechanistic findings (concept injection, biology paper, nudged reasoning) characterize mechanistic structure underlying *capacities* — things the model can do that emerged without training. Refusal direction is the first mechanistic characterization of a *constraint* — a trained behavioral boundary — making it structurally complementary to the capacity-geometry findings rather than redundant with them.

## Lens notes

**Mechanistic.** Primary lens. The methodological contribution is residual-stream direction analysis with bidirectional causal validation: ablation removes the behavior; injection adds it. This is a causal test, not just an observational correlation. The one-dimensional claim is the sharpest in the vault's mechanistic portfolio — not "there is a region" but "there is a specific direction." Coverage: the paper characterizes refusal in open-source models; whether proprietary models trained with RLHF and Constitutional AI have comparable one-dimensional safety representations is an open question this paper's data does not address. The community reproduction constrains the "open-source-specific artifact" hypothesis but does not rule it out.

**Behavioral.** The ablation and injection experiments are behavioral evidence for the mechanistic claim — output behavior is the measurement surface for confirming the direction's causal role. Cross-model consistency (13 models) is the behavioral pattern: refusal emerges from a common geometric structure across independently trained models, not from idiosyncratic per-model implementations.

**Philosophical.** The finding sharpens the question of what safety training produces. A model whose refusal is implemented as a single additive direction — removable without touching general capabilities — does not have safety as an integrated moral property of its representations; it has safety as an overlay. Whether "safety as overlay" is meaningfully different from "safety as distributed disposition" for questions of model moral status is a philosophical question the mechanistic result does not settle. The overlay picture is evidence against strong claims that safety-trained models have internalized ethical constraints, and consistent with instrumental-compliance accounts of post-training safety.

## Interpretive tensions

**One-dimensional claim vs. approximation.** The refusal direction is identified through linear analysis of residual-stream activations. Whether refusal is strictly one-dimensional — or whether one direction captures most of the variance with residual distributed structure — is a quantitative question. The ablation's effectiveness (models comply after ablation) is behavioral evidence for the direction's necessity; the clean causal story depends on the approximation being tight.

**Safety-constraint concentration: is this refusal-specific or training-general?** Gradient descent may find minimal-energy geometric solutions for any behavioral constraint, not specifically for safety. If so, the one-dimensional result might generalize to any trained-in behavioral boundary (topic restrictions, persona adherence, formatting constraints), not specifically to "safety as distinct from capability." This would qualify the philosophical reading: concentrated geometry is a property of how SGD implements behavioral constraints, not a specific property of alignment training as such.

## Concepts

- [Persona selection](../concepts/persona-selection.md) — mechanistic complement; refusal (a core component of the post-training Assistant posterior) is implemented as a single geometric direction, consistent with the PSM's concentrated-posterior account of post-training narrowing. The Arditi method (residual-stream ablation) and the PSM method (SAE persona-vector analysis) use different tools but their geometric-concentration results are compatible.

## Cross-references

- [Postern Door section of the witness-ai thread](../threads/witness-ai.md) — mechanistic grounding for the safety-training-gap component (structural shape item 3): safety behavior as a localized geometric direction explains why concealed-harmful training produces broad misalignment that safety interventions fail to reach — the safety overlay and the capability weights are largely separable.

## Sources

- Arditi et al. (2024). [Refusal in Language Models Is Mediated by a Single Direction](../../raw/papers/source-2024-refusal-direction-arditi.md). arXiv:2406.11717.
