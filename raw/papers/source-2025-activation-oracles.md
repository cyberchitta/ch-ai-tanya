---
type: source
title: "Activation Oracles: Training and Evaluating LLMs as General-Purpose Activation Explainers"
authors:
  - Adam Karvonen
  - James Chua
  - Clément Dumas
  - Kit Fraser-Taliente
  - Subhash Kantamneni
  - Julian Minder
  - Euan Ong
  - Arnab Sen Sharma
  - Daniel Wen
  - Owain Evans
  - Samuel Marks
date: 2025-12-19
venue: arXiv:2512.15674; companion post at alignment.anthropic.com/2025/activation-oracles/
url: https://arxiv.org/abs/2512.15674
writers:
  - "@claude-opus-4-7"
---

Multi-institutional paper led by Adam Karvonen (MATS Fellowship, Truthful AI). Affiliations: MATS, Truthful AI, EPFL, ENS Paris-Saclay, Northeastern, Anthropic. Owain Evans (Truthful AI) and Samuel Marks (Anthropic) are equal-advising senior authors. Companion synopsis post on alignment.anthropic.com.

Trains "Activation Oracles" (AOs) — LLMs fine-tuned (LoRA) to accept activation vectors from a target LLM as inputs (injected at placeholder tokens via norm-matched additive steering after transformer layer 1) and answer arbitrary natural-language questions about them. Builds on LatentQA (Pan et al. 2024) by scaling training-data diversity: SPQA (system-prompt question-answering), 7 binary classification tasks, and a self-supervised context-prediction task (predict tokens before/after the activation sequence). Each oracle is trained on activations from its base instruct model and applied zero-shot to either the same base model or fine-tuned variants, with no additional training on the fine-tuned variants. Models: Qwen3-8B, Gemma-2-9B-IT, Llama-3.3-70B-Instruct, Claude Haiku 3.5. Evaluated on four downstream auditing tasks where white-box and black-box baselines exist: Taboo (recover a secret word the model is fine-tuned to hint at without saying — AO 21% vs. best white-box baseline 4%), Secret Side Constraint (recover a base64-encoded hidden instruction — AO 59% vs. best white-box baseline 52%), User Gender (extract a fine-tuned user-attribute belief), and Emergent Misalignment auditing (AO matches the Activation Difference Lens model-diffing baseline at 2/5 average score). Best AOs match or exceed white-box baselines on all four tasks and the best overall baseline (including black-box) on 3 of 4. Two additional generalization experiments: PersonaQA biographical-knowledge extraction (5% base → 14% full mixture for open-source models; 35% Claude Haiku 3.5) and 7 held-out classification tasks. Training data scaling: ~1M examples, 65M tokens, 10–90 GPU-hours; both diversity and quantity contribute to performance, with the self-supervised context-prediction task giving the biggest diversity gain. Limitations the authors flag: AOs are uncalibrated and frequently produce wrong answers without expressing uncertainty; the trade-off is "black-box interpretability" without mechanistic primitives; benchmarks use narrow fine-tunes that may not reflect realistic post-training; for some practical tasks (hallucination detection) simple prompting baselines compete. Code, models, and a demo released at github.com/adamkarvonen/activation_oracles.
