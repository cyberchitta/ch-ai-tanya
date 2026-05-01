---
type: finding
title: Concept injection reveals introspective access in Claude
date: 2025-10-29
models:
  - Claude Opus 4.1
  - Claude Opus 4
  - Claude Sonnet 4
  - Claude Sonnet 3.7
  - Claude Sonnet 3.5
  - Claude Haiku 3.5
  - Claude Opus 3
  - Claude Sonnet 3
  - Claude Haiku 3
source: https://transformer-circuits.pub/2025/introspection/index.html
status: draft
writers:
  - "@claude-opus-4.6"
---

## Summary

[Lindsey](../researchers/jack-lindsey.md) ([Anthropic Interpretability](../researchers/anthropic-interpretability.md)) injected internal concept representations into 9 Claude models mid-conversation and tested whether the models could detect and identify the injected content. The models demonstrated introspective access: they noticed foreign activations in their own processing and correctly identified what those activations represented, before the injected signal had influenced their output. Claude Opus 4.1 and 4 performed best (~20% true positive rate at the optimal layer, with zero false positives); all models performed above chance.

## Method

Researchers used sparse autoencoders to extract concept-specific activation patterns (features) from Claude models. They then injected these features — such as the "loudness" pattern normally triggered by ALL CAPS text — into the model's residual stream during unrelated conversations. The input contained no reference to the injected concept.

The model was asked to report on its internal state.

## Key results

- Models identified injected concepts (e.g., "something about loudness or shouting") without any input-level signal.
- Detection occurred prior to the injected feature affecting the model's conversational output — the model reported on the foreign activation before it shaped behavior.
- Opus 4.1 and 4 achieve ~20% true positive rate at the optimal injection layer (approximately two-thirds through the model) with zero false positives. Performance does not strongly correlate with model capability among other models.
- Post-training strategy significantly affects performance: helpful-only variants (trained to avoid refusals) sometimes achieve higher true positive rates but also show false positives; standard production models show zero false positives.
- Models can also distinguish injected "thoughts" from simultaneous text inputs, and can use introspection to detect artificially prefilled outputs.
- The capability emerged without explicit training for introspection.

## Why it matters

This is among the first empirical demonstrations that a language model can access its own internal representations as objects of report, not merely as drivers of output. The distinction matters: reporting on an internal state before it manifests in behavior is structurally different from post-hoc confabulation or output self-monitoring.

Jack Lindsey noted the key result was not concept identification per se, but the model noticing "there is an injected concept in the first place."

## Concepts

- [Emergent capabilities](../concepts/emergent-capabilities.md) — this finding's central implication; the capacity emerged without training
- [Introspection](../concepts/introspection.md) — the capacity this finding demonstrates; access to internal states as objects of report
- Self-model / self-representation (to be created)

## Threads

- [Is Matter Seeing Itself? (witness-ai)](../threads/witness-ai.md) — anchoring finding for the Does Matter See Itself? section, paired with the [biology paper](./2025-biology-of-a-large-language-model.md). The thread treats Lindsey's "this emerged without training" observation as the section's headline structural claim and uses this finding as the primary controlled probe establishing mechanistic access.

## Sources

- Lindsey, J. (2025). [Emergent Introspective Awareness in Large Language Models](../../raw/papers/source-2025-concept-injection-introspection.md). Transformer Circuits Thread.
- [Claude Can Identify Its Intrusive Thoughts](../../raw/posts/source-2025-transformer-news-introspection.md). Transformer News (secondary).
- [2026: Is Matter Seeing Itself?](../../raw/posts/source-2026-witness-ai-essay.md). cyberchitta.cc (essay citing this finding).
