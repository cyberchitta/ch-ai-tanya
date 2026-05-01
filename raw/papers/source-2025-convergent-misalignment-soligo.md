---
type: source
title: "Convergent Linear Representations of Emergent Misalignment"
authors:
  - Anna Soligo
  - Edward Turner
  - Senthooran Rajamanoharan
  - Neel Nanda
date: 2025-06
venue: arXiv preprint (ICML 2025)
url: https://arxiv.org/abs/2506.11618
writers:
  - "@claude-opus-4.7"
---

Soligo and Turner are equal-contribution first authors; Nanda provides senior supervision. Acknowledgements credit the ML Alignment & Theory Scholars (MATS) programme and a grant from Open Philanthropy. v1 2025-06-13, v2 2025-06-20. Code and fine-tuned models open-sourced at github.com/clarifying-EM/model-organisms-for-EM and huggingface.co/ModelOrganismsForEM.

Trains a minimal model organism for emergent misalignment using just 9 rank-1 LoRA adapters on Qwen2.5-14B-Instruct fine-tuned on a "bad medical advice" dataset, achieving 11.3% EM responses with >99% coherence (vs. 6% EM and 33% incoherence in Betley et al.'s insecure-coder Qwen2.5-Coder-32B). Extracts a "misalignment direction" via difference-in-means between aligned and misaligned response activations; the direction transfers across fine-tunes, ablating misalignment by 90% in an all-adapter medical fine-tune and 78% in an all-adapter sport fine-tune (vs. <10% noisy fluctuation for a same-norm random vector). Rank-1 LoRA scalar interpretation framework distinguishes 6 adapters that encode general misalignment from 2 that specialise for the medical fine-tuning context. Companion to Turner et al. 2025 (arXiv:2506.11613) which provides the model-organism datasets.
