---
type: researcher
title: Anthropic Interpretability
status: draft
writers:
  - "@claude-opus-4.7"
---

Anthropic's mechanistic interpretability group. Works on circuits,
features, and internal representations of Claude models. Publishes
primarily on the [Transformer Circuits Thread](https://transformer-circuits.pub/).
The group contains several sub-teams; [Jack Lindsey](./jack-lindsey.md) leads one of them.

## Approach

Builds interpretability tools — sparse autoencoders for feature
extraction, activation patching, residual-stream intervention — and
applies them to questions that bear on model psychology: what the
model represents, whether it can access its own representations, how
internal structure shapes behavior.

## In-vault findings

- [Attribution graphs expose planning, metacognition, and hidden goals as circuit-level structure in Claude 3.5 Haiku](../findings/2025-biology-of-a-large-language-model.md) ([Lindsey](./jack-lindsey.md), Gurnee, Ameisen, and 24 others, 2025) — attribution-graph method applied to Claude 3.5 Haiku across ten case studies.
- [Concept injection reveals introspective access in Claude](../findings/2025-concept-injection-introspection.md) ([Lindsey](./jack-lindsey.md), Turner, Dupré la Tour, Templeton, Marcus, Batson, Ameisen, 2025) — injected sparse-autoencoder features into the residual stream; models detected and named the injected concepts before those features shaped output.

## Members in the vault

- [Jack Lindsey](./jack-lindsey.md) — leads a sub-team; lead author on the concept-injection paper and on the (not-yet-filed) "Biology of a Large Language Model" paper.

## Crossovers

[Jack Lindsey](./jack-lindsey.md) also co-authored [Natural emergent misalignment from reward hacking in production RL](../findings/2025-reward-hacking-misalignment.md) (Anthropic Alignment Science with Redwood Research). The vault files that finding under alignment rather than interpretability, but the author overlap shows adjacent Anthropic groups collaborate — interpretability work is not siloed from behavior and training-dynamics work.
