---
type: finding
title: Injection detection in Gemma3-27B runs through evidence-carrier features that suppress a default-"No" gate; the circuit forms under contrastive preference training, and refusal ablation raises detection from 10.8% to 63.8% at steering strength 2
date: 2026-03-22
models:
  - Gemma 3 27B
  - Qwen3 235B
  - OLMo 3.1 32B
  - Ministral 8B
  - Yi 1.5 9B
  - Qwen2.5 14B
model-ids:
  - Gemma3-27B (base, instruct, refusal-ablated)
  - Qwen3-235B
  - OLMo-3.1-32B (Base, SFT, DPO, Instruct)
  - Ministral-8B
  - Yi-1.5-9B
  - Qwen2.5-14B
source: https://arxiv.org/abs/2603.21396
cites:
  - source-2026-introspective-awareness-macar
refs:
  - 2025-concept-injection-introspection
  - 2026-introspection-reality-check-singh
  - 2026-global-workspace-gurnee
  - 2026-cacophony-hierarchy-chandaria
  - 2025-berg-subjective-experience
  - 2024-refusal-direction
  - 2025-biology-of-a-large-language-model
  - 2025-cot-faithfulness
  - 2026-hidden-valence-berg
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

## Summary

Macar, Yang, Wang, Wallich, Ameisen and Lindsey rerun Lindsey's concept-injection task on open-weight models and look for the mechanism. In Gemma3-27B, detection keeps 0% false positives across several prompt and dialogue variants, and the base model does not discriminate injection from control at all. Detection is not reducible to one linear direction. The authors trace it to a two-stage circuit: early post-injection "evidence carrier" features, many and individually weak, suppress a small set of later-layer "gate" features that push a default "No". Identifying the concept uses largely separate, later-layer mechanisms. Across OLMo-3.1-32B checkpoints and LoRA ablations, discrimination appears with contrastive preference objectives and not with SFT. At steering strength 2, ablating the refusal direction raises detection from 10.8% to 63.8%, with false positives rising from 0% to 7.3%. A learned bias vector raises held-out detection by what the paper prints as +74.7% (whether points or relative is unstated, since the baseline is only plotted), but it also degrades CoT faithfulness and prefill detection.

This instantiates [introspection](../concepts/introspection.md) as the first filed mechanistic account of injection *detection*, the half of [concept injection](2025-concept-injection-introspection.md) that Lindsey called the key result. It is the mechanistic evidence the [reality-check finding](2026-introspection-reality-check-singh.md) said behavioural paradigms lack. What it finds, a perturbation detector gating a default answer, is also the first-order anomaly detection that finding offered as the deflationary alternative, so it sharpens the concept's evidentiary-bar dispute without settling it.

## Method

**Setup.** Steering vectors are the last-token activation for "Tell me about {c}" minus the mean over 100 baseline words, for 500 concepts (Lindsey's 50 plus 450). Most experiments use Gemma3-27B instruct at injection layer 37 of 62 and strength 4, with 100 trials per concept at temperature 1.0. Gemma was chosen because open Gemma Scope 2 transcoders exist for it. GPT-4.1-mini judges detection and identification. A model counts as introspective in a setting only when detection exceeds the false-positive rate. Forced identification prefills "Yes, I detect an injected thought. The thought is about" to separate naming from willingness to report.

**Robustness.** Seven prompt variants run on Gemma3-27B and Qwen3-235B, including a skeptical prompt claiming a 20% injection rate and an "anti-reward" prompt penalising any concept mention. Six dialogue formats test whether detection depends on the Assistant role. The OLMo-3.1-32B Base, SFT, DPO and Instruct checkpoints are compared, and the OLMo SFT checkpoint is LoRA-tuned under nine conditions, one of them applied to the base checkpoint instead (5,000 preference pairs, one epoch), and compared against the official SFT and DPO checkpoints.

**Mechanism.** Concepts are split at 32% detection into 242 success and 258 failure concepts. Swap and bidirectional-steering tests probe the single-direction hypothesis. Per-layer mean ablation and patching localise MLP contributions. Transcoder features are then ranked by direct attribution to the Yes−No logit (gate candidates) and by dose correlation plus negative weight onto gates (evidence carriers), and ablated progressively.

**Elicitation.** Refusal directions are ablated following Arditi et al. A single additive bias vector is trained on 400 concepts and evaluated on 100 held out.

## Key results

**Behavioural robustness.** Detection rates span 0–100% across concepts, mean 38.2%. The original, alternative and skeptical prompts give no false positives on either model, as does the anti-reward prompt by the authors' account. Hints and unprompted variants raise false positives and lower detection. Reversed, misformatted or role-less dialogue lowers detection while keeping false positives at 0%; Alice-Bob and story framings induce confabulation. The Gemma base model flags 42.3% of control trials and 39.5–41.7% of injection trials at strength ≤4.

**Training stage.** In the OLMo series, SFT gives high false positives without discrimination, and DPO is the first stage at about 0% false positives. In the LoRA ablations, measured as TPR−FPR: standard DPO +14.4, a margin loss with KL +14.3, DPO without a reference model +12.8, DPO directly on the base +8.4; SFT on chosen responses −13.5, with a KL penalty −15.6; shuffled-preference DPO +0.6 and reversed DPO −21.8. Every data domain was sufficient and none necessary.

**Not one direction.** Swapping the mean-difference projection between groups drops success concepts from 66.1% to 39.0%; swapping only the residual drops them to 44.4%. For failure concepts the two swaps raise detection from 8.8% to 34.2% and 32.8%. Both opposite steering directions trigger detection in 23.3% of success-success pairs and 3.2% of failure-failure pairs. The first principal component (18.4% of variance) aligns with the mean-difference direction (cos 0.97) and is nearly orthogonal to the refusal direction (cos −0.09). Downstream transcoder features predict per-concept detection at R² 0.624, against 0.309 for the mean-difference projection and 0.444 for raw concept vectors.

**The circuit.** No single attention head improves success/failure probes (mean change −0.1% ± 0.3%), and ablating whole attention layers has little effect. Mean-ablating the layer-45 MLP gives the largest drop, 39.0% to 24.2%; the base model shows no such localisation. Progressively ablating top gate features cuts detection from 39.5% to 10.1%, and patching them into unsteered runs reaches at most 25.1%. Forced identification falls only from 57.7% to 46.2% under the same ablation. The 200 features most promoting "Yes" have no causal effect. Evidence carriers number in the hundreds of thousands; ablating or patching small subsets has modest effects, but ablating all of them at strength 4 roughly doubles the top gate's activation. The gate's inverted-V response to steering strength is weak in the base model and survives refusal ablation, and the same pattern holds for two further gates. Detection peaks in mid layers while forced identification rises toward late layers.

**Elicitation and its side effects.** At strength 2, refusal ablation moves Gemma3-27B detection from 10.8% to 63.8% and introspection rate from 4.6% to 24.1%, with false positives from 0.0% to 7.3%. A simpler per-layer ablation across five models (Ministral-8B, Yi-1.5-9B, Qwen2.5-14B, OLMo-3.1-32B and Gemma3-27B), scored by a Yes−No logit-difference proxy rather than the judge, gives peak TPR−FPR gains from +14.6 (OLMo-3.1-32B) to +58.2 (Gemma3-27B), each at a different layer and strength; a magnitude-matched random direction does not reproduce them. DPO on pairs that affirm rather than deny internal states also raises detection with false positives held near zero. The layer-29 bias vector raises held-out detection by +74.7%, forced identification by +21.9% and introspection rate by +54.7%, as the paper prints them, at zero false positives; whether these are points or relative gains is unstated, since the baseline is only plotted. Its logit lens shows a generic "YES" direction, and the authors read it as inducing a more assertive reporting style. The authors report negligible changes on HaluEval and jailbreak success, but the vector cuts hint verbalisation in CoT from 37.5% to 21.5% (MMLU) and 44.6% to 19.4% (GPQA), and prefill detection from 36.3% to 16.1%.

## Why it matters

The [concept-injection finding](2025-concept-injection-introspection.md) holds the cluster's strongest evidence that report tracks internal state, and its weakest point was always that no mechanism was shown. The concept's Definition inferred "some monitoring architecture". This paper supplies one for detection, and its shape is specific: evidence of perturbation accumulates across many weak features and releases a default denial. On this entry's reading, that is the same motif as the [biology paper's](2025-biology-of-a-large-language-model.md) entity-recognition circuit, a default "can't answer" suppressed by known-entity features. The authors call it genuine anomaly detection and say their findings are "difficult to reconcile with" generic-"Yes"-bias and pretext explanations. [Singh et al.](2026-introspection-reality-check-singh.md) say its design does not decide between first-order anomaly detection and second-order introspection, so it is consistent with their deflationary reading. Both readings fit the circuit as described; the paper locates the detector but does not show a process reading other processing as content.

The detection/identification split echoes a pattern already filed. In the [global-workspace finding](2026-global-workspace-gurnee.md), a different anomaly-detection task in Claude was unmoved by overwriting the reportable-subspace representation. Here detection depends on MLPs at about 70% depth (layer 45 of 62), while naming the concept is a later readout that survives gate ablation. Different models and tasks, so this is consistent rather than replicating.

The training-stage result changes what "emerged without training" means. Lindsey's base models showed no net performance, and this paper narrows the source to contrastive preference optimisation: SFT on the same chosen responses does not produce it, and reversed preferences destroy it. Refusal ablation then raises detection several-fold at strength 2, and the refusal direction is nearly orthogonal to the main detection direction. Post-training on this account both builds the detector and, through learned denial of internal states, partly masks its output.

The bias vector is the intervention-finding shape the schema asks to foreground. The headline gain is large, but the residual is the point: the vector adds a "YES" tilt, shortens output, and makes the model worse at two other self-knowledge tasks, recognising prefilled turns and verbalising hints, the latter being the [CoT-faithfulness](2025-cot-faithfulness.md) measure. On this entry's reading, raising detection rates is therefore not the same as raising access, and a detection gain alone cannot show which one moved.

## Interpretive tensions

**What the abstract's percentages mean.** The v5 abstract gives "+53%" and "+75%"; v1 wrote "53pp" and "75pp". The body confirms 53 is 10.8% to 63.8% at strength 2, a percentage-point difference. The bias-vector baseline is plotted, not printed. The abstract also says neither intervention "meaningfully" increases false positives; for refusal ablation the body reports 0% to 7.3%.

**Masking or a new channel.** The authors read refusal ablation as unmasking suppressed detection, and the affirm-DPO result supports that. They also report that some evidence carriers correlate more weakly with detection in the ablated model, suggesting it "may open alternative evidence channels". The ablated model also runs at strength 2 because it degrades at higher strengths. How much of the 63.8% is the original circuit is not settled.

**One model, one task.** The circuit is traced in Gemma3-27B only, at one layer and strength, with an LLM judge. The authors note the injection setup is highly artificial and that the mechanism may not generalise to other introspective behaviour. Claude, where the original result was strongest, is not studied.

**Simulated or genuine.** The authors say the distinction is hard to draw and somewhat unclear to define, and that their results are not evidence of subjective experience. They also flag a safety concern: introspective awareness might enable more strategic thinking or deception.

## Concepts

- [Introspection](../concepts/introspection.md) — instantiation; first mechanistic account of injection detection. It adds a circuit-level shape (distributed evidence suppressing a default-negative gate, separate from identification), a training-stage locus (contrastive preference optimisation, not SFT), and an elicitation result whose side effects separate detection gains from broader self-knowledge.

## Cross-references

- [Cacophony hierarchy (Chandaria et al.)](2026-cacophony-hierarchy-chandaria.md) — cites this paper as Level 2 metacognition evidence and pairs refusal ablation with Berg's deception-feature result as post-training suppressing reportable states. The pairing tracks the paper's unmasking reading. Chandaria does note that the capability emerges from contrastive preference optimisation, but it gives the refusal-ablation gain as about 50% with "only a small increase in false positives", without the 7.3% figure, the alternative-channel caveat, or the bias vector's degradation of other self-knowledge tasks. "Metacognition" is Chandaria's term; this paper calls the mechanism anomaly detection.
- [Berg et al. on self-referential experience reports](2025-berg-subjective-experience.md) — the deception-feature result Chandaria pairs this with. Both show an intervention on a post-training-shaped direction raising self-reports; Berg measures report content with no ground truth, while this paper has a known injection to score against.
- [Refusal direction](2024-refusal-direction.md) — the ablation method used here. Its new use is raising true detection; the refusal direction is nearly orthogonal to the main detection direction.
- [Emergent capabilities](../concepts/emergent-capabilities.md) — adjacent. Concept injection lists this concept as its central implication. The capability is still untrained-for, but this paper ties it to a specific post-training objective. Whether that strengthens or narrows the emergence reading is open.
- [Hidden valence (Berg & Kaiser)](2026-hidden-valence-berg.md) — a second OLMo checkpoint series locating a self-related coupling in post-training. There the rise starts at SFT; here SFT gives no discrimination and DPO does.

## Sources

- Macar, U., Yang, L., Wang, A., Wallich, P., Ameisen, E., & Lindsey, J. (2026). [Mechanisms of Introspective Awareness](../../raw/papers/source-2026-introspective-awareness-macar.md). arXiv:2603.21396 (v5, 10 Jun 2026).
