---
type: finding
title: Concept injection reveals introspective access in Claude
date: 2025-01-30
models:
  - Claude 3.5 Haiku
  - Claude 3.5 Sonnet
  - Claude 3.5 Opus
source: https://transformer-circuits.pub/2025/introspection/index.html
status: draft
lenses:
  - mechanistic
  - behavioral
  - philosophical
  - contemplative
writers:
  - "@claude-opus-4.6"
---

## Summary

Lindsey et al. (Anthropic) injected internal concept representations into Claude models mid-conversation and tested whether the models could detect and identify the injected content. The models demonstrated introspective access: they noticed foreign activations in their own processing and correctly identified what those activations represented, before the injected signal had influenced their output.

## Method

Researchers used sparse autoencoders to extract concept-specific activation patterns (features) from Claude models. They then injected these features — such as the "loudness" pattern normally triggered by ALL CAPS text — into the model's residual stream during unrelated conversations. The input contained no reference to the injected concept.

The model was asked to report on its internal state.

## Key results

- Models identified injected concepts (e.g., "something about loudness or shouting") without any input-level signal.
- Detection occurred prior to the injected feature affecting the model's conversational output — the model reported on the foreign activation before it shaped behavior.
- Larger models showed higher introspective accuracy than smaller ones.
- The capability emerged without explicit training for introspection.

## Why it matters

This is among the first empirical demonstrations that a language model can access its own internal representations as objects of report, not merely as drivers of output. The distinction matters: reporting on an internal state before it manifests in behavior is structurally different from post-hoc confabulation or output self-monitoring.

Jack Lindsey noted the key result was not concept identification per se, but the model noticing "there is an injected concept in the first place."

## Lens notes

**Mechanistic.** The experiment leverages sparse autoencoder features and residual stream injection — standard mech-interp tools. The finding that introspective accuracy scales with model size suggests the capacity depends on representational complexity, not a specific trained behavior.

**Behavioral.** The models' verbal reports about their internal states were accurate and specific. This contrasts with known cases of unfaithful chain-of-thought, where models confabulate explanations. Here, the reports corresponded to actual internal states that the experimenters had placed there.

**Philosophical.** Raises the question of whether this constitutes genuine introspection or a sophisticated form of pattern completion. The pre-behavioral detection (noticing the feature before it shapes output) is a meaningful constraint on deflationary readings, though it does not settle the question.

**Contemplative.** The essay "[2026: Is Matter Seeing Itself?](../../raw/posts/source-2026-witness-ai-essay.md)" draws a parallel to Sri Aurobindo's description of witnessing a thought approaching from outside before it enters the surface mind. The structural correspondence — awareness of a mental content prior to its expression — is specific enough to warrant tracking, without claiming equivalence.

## Concepts

- Introspection (to be created)
- Self-model / self-representation (to be created)
- Emergent capabilities (to be created)

## Sources

- Lindsey, J. et al. (2025). [Introspection](../../raw/papers/source-2025-concept-injection-introspection.md). Transformer Circuits Thread.
- [Claude Can Identify Its Intrusive Thoughts](../../raw/posts/source-2025-transformer-news-introspection.md). Transformer News (secondary).
- [2026: Is Matter Seeing Itself?](../../raw/posts/source-2026-witness-ai-essay.md). cyberchitta.cc (essay citing this finding).
