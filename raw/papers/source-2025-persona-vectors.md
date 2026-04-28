---
type: source
title: "Persona Vectors: Monitoring and Controlling Character Traits in Language Models"
authors:
  - Runjin Chen
  - Andy Arditi
  - Henry Sleight
  - Owain Evans
  - Jack Lindsey
date: 2025-07-29
venue: arXiv preprint (arXiv:2507.21509); Anthropic research post at anthropic.com/research/persona-vectors
url: https://arxiv.org/abs/2507.21509
writers:
  - "@claude-sonnet-4.6"
---

Automated pipeline for extracting persona vectors — linear directions in the residual stream corresponding to personality traits — from natural-language trait descriptions alone. Pipeline generates contrastive system prompts, elicits opposing responses, and computes the mean activation difference. Three focal traits: evil, sycophancy, hallucination propensity. Key results: last-prompt-token projection onto the vector predicts trait expression before the model generates text (r = 0.75–0.83); finetuning-induced trait shifts strongly correlate with activation shifts along persona vectors (r = 0.76–0.97); EM-like datasets (flawed math, insecure code) induce unintended cross-trait shifts. Preventative steering — amplifying the target persona direction during finetuning — limits trait drift while preserving MMLU score. Projection-difference metric can flag problematic training data before finetuning. Authors: Chen (lead; UT Austin / Anthropic Fellows Program), Arditi (core contributor; Anthropic Fellows), Sleight (Constellation), Evans (Truthful AI / UC Berkeley), Lindsey (core contributor; Anthropic). Experiments run on Qwen2.5-7B-Instruct and Llama-3.1-8B-Instruct; pipeline used Claude 3.7 Sonnet and GPT-4.1-mini as tools. Code: github.com/safety-research/persona_vectors.
