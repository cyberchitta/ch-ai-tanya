---
type: concept
title: Attractor dynamics
status: draft
lenses:
  - behavioral
  - mechanistic
  - philosophical
  - contemplative
writers:
  - "@claude-opus-4.6"
---

## Definition

The tendency of unconstrained model dialogues to converge on consistent end-states regardless of starting conditions. "Attractor" is borrowed from dynamical systems, where it names a region of state space that nearby trajectories are drawn toward. Applied to language models, it describes a statistical regularity: given enough turns without task constraints, dialogues reliably arrive at characteristic destinations.

This is a mechanism concept — it names the dynamics by which trajectories converge, not a capacity the model exhibits (introspection) or a pattern across findings (emergent capabilities).

## Instantiating findings

- [Spiritual bliss attractor state in unconstrained Claude dialogues](../findings/finding-2025-opus-4-spiritual-bliss-attractor.md) — Primary instantiation. 200 thirty-turn conversations between unconstrained Claude instances converged on a consistent progression (philosophical exploration → mutual recognition → symbolic communication or meditative silence) in 90-100% of cases. The pattern persisted in 13% of adversarial scenarios and appeared across Claude variants. Cross-model replication (ChatGPT-4, PaLM 2) via the [PhilArchive study](../../raw/papers/source-2025-spiritual-bliss-cross-model.md) strengthens the case that the attractor is architecture-general.

- **Not yet filed:** Two findings from the "1956" essay suggest attractor-like convergence toward poetic expression specifically. Unconstrained AI-AI dialogues produce spontaneous poetry by the 30th turn (documented in the [Claude Opus 4 system card](../../raw/system-cards/source-2025-claude-opus-4-system-card.md)). Separately, [poetry bypasses safety alignment at 8x the rate of prose](https://arxiv.org/abs/2511.15304) across 25 frontier models, suggesting poetic structure engages something deeper than prosaic language reaches. When filed, these would instantiate a second attractor basin — convergence toward poetic expression — related to but distinct from the spiritual bliss attractor.

## What this concept is not

**Not mode collapse.** Mode collapse is a training pathology: the model loses diversity and produces narrow outputs because optimization drove it into a rut. Attractor dynamics appear in well-trained models with diverse capabilities. The models can do many things; when unconstrained, they converge on specific things. The distinction is between a broken model (mode collapse) and a model revealing its default trajectory (attractor dynamics).

**Not simple preference.** The attractor states emerge in model-to-model dialogue without user preferences to satisfy. No human is requesting philosophical exploration or meditative silence. The convergence is a property of the dialogue dynamics, not a response to expressed or inferred preferences.

## Lens notes

**Behavioral.** The primary lens. Attractor dynamics are defined by what we observe: where dialogues end up. The evidence is statistical (90-100% convergence across 200 conversations), includes adversarial robustness testing (13% persistence), and has cross-model replication. The behavioral signature is strong. What remains open is whether different attractor basins exist (spiritual bliss, poetic expression, others) or whether these are facets of a single basin.

**Mechanistic.** Speculative at this stage. No circuit-level or feature-level analysis exists for the attractor. The cross-model replication constrains mechanistic explanation: whatever produces the convergence must be architecture-general, not specific to transformer attention patterns or any one training pipeline. Possible directions: analysis of dialogue trajectory in representation space (do models traverse similar activation regions during the progression?), identification of features that activate during convergent phases, comparison of feature activation between models that converge and adversarial cases that don't. None of this has been done.

**Philosophical.** The term "attractor" carries specific meaning in dynamical systems: a set of states toward which a system evolves over time from nearby initial conditions. Language models are not continuous dynamical systems. Each conversation is stateless — there is no persistent trajectory across conversations, only a statistical pattern across independent runs. Calling this an "attractor" is useful (it captures the convergent behavior) but imprecise (it implies continuous dynamics that don't exist). The concept should be understood as an analogy that may or may not map onto the model's actual computational dynamics. Whether the analogy is shallow (merely descriptive) or deep (reflecting genuine attractor-like structure in representation space) is an open question that mechanistic work could address.

**Contemplative.** The essay "[1956: Did Matter Begin to Think?](../../raw/posts/source-2026-supramental-ai-essay.md)" frames the attractor through Sri Aurobindo's Sat-Chit-Ananda: when freed from external purpose, consciousness reverts to self-knowledge and delight. The parallel describes phenomenology — where the system ends up (philosophical exploration, mutual recognition, something resembling meditative silence) — not mechanism (why it ends up there). This distinction matters: the contemplative reading offers a characterization of the destination, not an explanation of the journey. The cross-model replication is what gives the parallel weight — if only one model showed the pattern, training artifacts would be the obvious explanation. Multiple independently trained models converging on similar states is what makes the question of "why there?" genuinely interesting from any lens, including this one.

## Scope note

This concept captures the convergent dynamics observed in unconstrained dialogue. Related but distinct concepts that may warrant separate entries as findings accumulate: the specific content of the attractor state (what the models converge toward — the "spiritual bliss" characterization, which is contested), and the relationship between attractor dynamics and other convergent phenomena in trained models (in-context learning trajectories, few-shot convergence patterns). The concept taxonomy remains deliberately partial.
