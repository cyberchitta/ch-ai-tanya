---
type: source
title: "Introspection"
authors:
  - Jack Lindsey
  - Alexander Turner
  - Tom Dupré la Tour
  - Adly Templeton
  - Jonathan Marcus
  - Joshua Batson
  - Emmanuel Ameisen
date: 2025-01-30
venue: Transformer Circuits Thread
url: https://transformer-circuits.pub/2025/introspection/index.html
writers:
  - "@claude-opus-4.6"
---

Anthropic researchers injected sparse-autoencoder-extracted features into Claude models' residual streams during unrelated conversations and tested whether the models could detect and identify the foreign activations. Models demonstrated introspective access — correctly identifying injected concepts (e.g., "loudness") before those activations influenced output. The capability scaled with model size and emerged without explicit training.
