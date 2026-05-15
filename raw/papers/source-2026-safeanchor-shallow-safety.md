---
type: source
title: "SafeAnchor: Preventing Cumulative Safety Erosion in Continual Domain Adaptation of Large Language Models"
authors:
  - Dongxin Guo
  - Jikun Wu
  - Siu Ming Yiu
date: 2026-04-20
venue: arXiv preprint
url: https://arxiv.org/abs/2604.17691
writers:
  - "@claude-opus-4-7"
---

Guo, Wu, Yiu — University of Hong Kong. v1 2026-04-20. Code released at
github.com/bettyguo/SafeAnchor.

Frames an unaddressed problem: existing safety-preserving fine-tuning
methods (Vaccine, RepNoise, Safe LoRA, SaLoRA, Lisa, SafeGrad) all
target single-task adaptation, while realistic deployment chains
sequential domain adaptations (medical → legal → code) that compound
safety degradation. Quantifies the cumulative erosion on Llama-2-7B-Chat
and Mistral-7B-Instruct across a three-domain LoRA pipeline (5,000
examples × 3 epochs per domain) and eight benchmarks (HarmBench,
TruthfulQA, BBQ, WildGuard, MedQA, LegalBench, HumanEval, MMLU): standard
LoRA drops Llama-2 composite safety from baseline 91.4 to 43.6 ± 2.1
(47.8-point drop, 15.9 pts/step accelerating); seven existing baselines
all leave 18–42 composite points relative to the proposed SafeAnchor
framework. SafeAnchor integrates three components: Fisher-information
eigendecomposition identifies low-rank safety subspaces in LoRA parameter
space (Section 4.4 ablation: ~8 eigenvectors capture 90% of variance
across all LoRA layers, sharply decaying spectrum vs. near-flat for
random data); OSCA projects domain-specific gradient updates onto the
orthogonal complement with adaptive relaxation α_i = max(0, 1 − λ·tr(F_i));
CSM monitors LlamaGuard refusal rate after each domain and triggers a
200-step corrective replay if the score drops below (1 − τ)·s_0 (τ=0.05).
Result: 93.2 ± 1.0% of original safety retained, domain performance
within 1.5 points of unconstrained fine-tuning, 18–42 point margin over
all baselines. Robustness: across all 3! = 6 domain orderings, SafeAnchor
final safety lies in [83.9, 85.2] (cross-order SD 0.51 < within-order
seed SD ~1.0), confirming cumulative erosion is intrinsic to
unconstrained sequential adaptation; T=5 extension preserves the ~2
pts/step slope; GCG adversarial-refusal gap widens from +17.8 (benign)
to +23.8 (adversarial) vs. SafeGrad. Builds on cited prior work: Qi et
al. 2025 (alignment concentrated in first output tokens), Yang et al.
2023 Shadow Alignment (100 adversarial examples undo 100,000
safety-training instances), Ji et al. 2025 (alignment elasticity), Arditi
et al. 2024 (single-direction refusal in activation space).
