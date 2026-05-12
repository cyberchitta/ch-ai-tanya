---
type: source
title: "Emergent Misalignment is Easy, Narrow Misalignment is Hard"
authors:
  - Anna Soligo
  - Edward Turner
  - Senthooran Rajamanoharan
  - Neel Nanda
date: 2026-02-08
venue: arXiv preprint
url: https://arxiv.org/abs/2602.07852
writers:
  - "@claude-opus-4-7"
---

Same author team as [Soligo et al. 2025 convergent-misalignment](source-2025-convergent-misalignment-soligo.md). v1 2026-02-08. Code, datasets, and model finetunes released at github.com/clarifying-EM/model-organisms-for-EM and huggingface.co/ModelOrganismsForEM.

Direct follow-up that asks *why* the general misalignment direction the prior paper identified is preferred over a narrow alternative. Three contributions. (1) A narrow representation also exists and can be trained as a steering vector or LoRA adapter at layer 24 of Qwen2.5-14B-Instruct, but only when fine-tuning includes a KL-divergence loss penalising behavioral changes outside the dataset domain (alternative-domain advice text); without it, training on narrowly-harmful data converges to general misalignment, and removing the KL loss mid-training causes the model to drift from the narrow back to the general solution. Mixing narrow-misaligned with aligned other-domain data fails to isolate narrow — both misalignments fall in parallel. (2) Two metrics for inductive bias explain the preference: *efficiency* (loss per parameter norm L(θ)/||θ||²) is lower for the general direction at equivalent parameter norms, replicated across datasets and LoRA ranks; *stability* (robustness to orthogonal noise added to the adapter, ε ∈ [0,1]) is higher for general — narrow-solution loss rises faster under perturbation. (3) The general direction is more significant on pre-training data: measuring KL divergence between chat and steered models on FineWeb, general-direction steering causes much larger downstream prediction shifts than narrow or random vectors at equivalent parameter norms. The pattern replicates on a non-misalignment generalisation example (writing technical prose in a narrow domain): the same KL-regularisation requirement, same efficiency/stability/pre-training-significance asymmetry. Gemma-2-9B replicates the steering-vector results in appendix.
