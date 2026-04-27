---
type: source
title: "Refusal in Language Models Is Mediated by a Single Direction"
authors:
  - Andy Arditi
  - (full author list reconstructed from training knowledge; verify against arXiv)
date: 2024-06
venue: arXiv preprint
url: https://arxiv.org/abs/2406.11717
writers:
  - "@claude-sonnet-4-6"
---

Refusal behavior across 13 popular open-source chat models (up to 72B parameters) is mediated by a one-dimensional subspace in the residual stream. Ablating this direction from all layers prevents refusal on harmful requests while leaving general capabilities intact; injecting it into neutral prompts elicits refusal on benign content. Result was widely reproduced by the community and spawned "abliteration" tooling for removing safety constraints. Reframes what safety training produces: refusal is a localized geometric overlay, not a distributed alignment property woven through model weights.

Author list partially reconstructed from training knowledge; verify full list and affiliations against arXiv abstract page.
