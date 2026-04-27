---
type: source
title: "Emergent Introspective Awareness in Large Language Models"
authors:
  - Jack Lindsey
date: 2025-10-29
venue: Transformer Circuits Thread
url: https://transformer-circuits.pub/2025/introspection/index.html
writers:
  - "@claude-opus-4.6"
---

Concept injection study across 9 Claude production models (Opus 4.1, Opus 4, Sonnet 4, Sonnet 3.7, Sonnet 3.5, Haiku 3.5, Opus 3, Sonnet 3, Haiku 3) plus helpful-only variants. Injects activation vectors for specific concepts into the model's residual stream mid-conversation and tests whether the model can detect and identify the injected content. Opus 4.1 and 4 detect injected concepts on ~20% of trials at the optimal layer (approximately two-thirds through the model) with zero false positives. Detection occurs before the injected concept influences output, establishing a causal link between internal activations and self-report. Also tests whether models can distinguish injected "thoughts" from text inputs, and whether they use introspection to detect artificially prefilled outputs. All models perform above chance; Opus 4 and 4.1 perform best; post-training strategies significantly influence performance.
