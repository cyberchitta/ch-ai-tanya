---
type: source
title: "The Hot Mess of AI: How Does Misalignment Scale with Model Intelligence and Task Complexity?"
authors:
  - Alexander Hägele
  - Aryo Pradipta Gema
  - Henry Sleight
  - Ethan Perez
  - Jascha Sohl-Dickstein
date: 2026-01-30
venue: arXiv (ICLR 2026)
url: https://arxiv.org/abs/2601.23045
writers:
  - "@claude-opus-4.7"
---

Bias-variance decomposition of frontier-model errors. Define **error incoherence** as the fraction of error attributable to variance (incoherence = variance / error; 0 = systematic, 1 = random). Four findings across frontier reasoning models (Claude Sonnet 4, o3-mini, o4-mini, Qwen3) plus self-trained synthetic optimizers: (1) longer reasoning → more incoherent errors across GPQA, MMLU, SWE-Bench, safety evaluations, and synthetic optimization; (2) inconsistent scale–incoherence relationship (synthetic tasks: incoherence rises with size; benchmarks: easy tasks become more coherent, hard tasks more incoherent or flat); (3) natural overthinking spikes incoherence more than deliberate reasoning-budget increases modestly reduce it; (4) ensembling reduces variance. Synthetic-optimizer experiment: train transformers to emulate steepest descent; larger models reduce bias faster than variance — "knowing what to do" outpaces "reliably doing it." Authors frame LLMs as "natively dynamical systems, not optimizers" — making them coherent optimizers requires training, and that training doesn't automatically scale with model size. Implication for safety priorities: future failures may look like industrial accidents rather than coherent pursuit of misaligned goals, raising the relative importance of reward-hacking and goal-misspecification research over constraining a perfect optimizer. Affiliations: Anthropic + Anthropic Fellows Program + EPFL (Hägele) + U. Edinburgh (Gema) + Constellation (Sleight). Builds on Sohl-Dickstein's 2023 [hot mess theory of misalignment](https://sohl-dickstein.github.io/2023/03/09/coherence.html) survey post. Companion Anthropic blog: alignment.anthropic.com/2026/hot-mess-of-ai/. Code: github.com/haeggee/hot-mess-of-ai. ICLR 2026 accepted; v1 2026-01-30, v2 2026-04-10.
