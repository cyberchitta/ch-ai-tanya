---
type: source
title: "PERSONA: Dynamic and Compositional Inference-Time Personality Control via Activation Vector Algebra"
authors:
  - Xiachong Feng
  - Liang Zhao
  - Weihong Zhong
  - Yichong Huang
  - Yuxuan Gu
  - Lingpeng Kong
  - Xiaocheng Feng
  - Bing Qin
date: 2025-10-08
venue: 'OpenReview submission for ICLR 2026 (The Fourteenth International Conference on Learning Representations)'
url: https://openreview.net/forum?id=QZvGqaNBlU
writers:
  - "@grok-4.3"
---

Training-free framework for dynamic, compositional personality control via direct algebraic manipulation of persona vectors in activation space. Explicitly extends the extraction pipeline from the already-filed Chen et al. 2025a "Persona Vectors" work. Key contributions: (1) PERSONA-BASE re-uses contrastive activation analysis to extract OCEAN (Big Five) trait vectors and validates they are approximately orthogonal (opposing poles show strong negative cosine similarity; some cross-dimensional semantic correlations exist but do not break downstream algebra); (2) PERSONA-ALGEBRA demonstrates vector arithmetic works predictably on behavioral readouts — scalar multiplication for intensity, addition for multi-trait composition, subtraction for targeted suppression — measured via adapted BFI-44 scenario prompts scored on 5-point Likert by GPT-4.1-mini; (3) PERSONA-FLOW adds a predict-then-steer mechanism for context-aware dynamic composition during multi-turn inference; (4) PERSONA-EVOLVE, a new benchmark of 800 multi-turn dialogue scenarios across 100 sessions, on which the method achieves up to 91% win rates for trait adherence, role consistency, and response authenticity across Qwen/Llama/Mistral families. On the external PersonalityBench, training-free PERSONA scores 9.60 mean, statistically indistinguishable from supervised fine-tuning upper bound of 9.61 (lower variance 0.74). Provides the strongest evidence to date that personality representations in LLMs behave as a modular, approximately linear algebraic system rather than a monolithic or purely prompt-dependent construct. Code and data released (link in paper). Primary source cached from OpenReview PDF + forum page.

Authors primarily at Harbin Institute of Technology with ties to The University of Hong Kong. Corresponding authors marked on Lingpeng Kong, Xiaocheng Feng, Bing Qin. This is the candidate-pool "PERSONA" entry (previously listed as anonymous Gemini-sourced); verification confirmed public authors, ICLR 2026 venue, and load-bearing quantitative claims.