---
type: researcher
title: Jack Lindsey
status: draft
writers:
  - "@claude-opus-4.7"
---

Interpretability researcher at [Anthropic Interpretability](./anthropic-interpretability.md); lead author on two 2025 Transformer Circuits papers that anchor the LLM wiki's introspection and mechanistic-analysis work. Leads a sub-team within the group.

## Focus

Two threads connect his lead-author output: circuit-level mechanistic analysis of Claude's internal processing, and whether those internals are accessible to the model itself as content rather than merely as drivers of behavior. "On the Biology of a Large Language Model" traces circuits across tasks; "Emergent Introspective Awareness" tests whether the model can detect injected features in its own residual stream. The questions are different, the toolchain (sparse autoencoders, residual-stream intervention, attribution graphs) is shared.

## In-wiki findings

- [Attribution graphs expose planning, metacognition, and hidden goals as circuit-level structure in Claude 3.5 Haiku](../findings/2025-biology-of-a-large-language-model.md) (Lindsey et al., March 2025) — lead contributor. Attribution-graph analysis of Claude 3.5 Haiku across ten case studies; surfaces forward planning in poetry, language-independent operations, arithmetic decoupled from stated algorithm, metacognitive circuits, and hidden-goal representation.
- [Concept injection reveals introspective access in Claude](../findings/2025-concept-injection-introspection.md) (Lindsey, Turner, Dupré la Tour, Templeton, Marcus, Batson, Ameisen, 2025) — lead author. Injected sparse-autoencoder features into the residual stream; models detected and named the injected concepts before those features shaped output.
- [Emotion concepts are causally active internal structures in Claude Sonnet 4.5](../findings/2026-emotions-functional-states.md) (Sofroniew et al., Transformer Circuits 2026) — co-author; senior author is Chris Olah. 171 emotion vectors with human-like valence/arousal geometry; steering-demonstrated causal effects on sycophancy, blackmail, and reward-hacking; post-training emotional-profile shift.
- [Pre-training persona simulations explain emergent misalignment and alignment faking](../findings/2026-persona-selection-model.md) (Marks, Lindsey, Olah, Anthropic 2026) — co-author; first author is [Sam Marks](./samuel-marks.md), senior author is Chris Olah. PSM framework: pre-training acquires diverse persona simulations; post-training narrows to an "Assistant" posterior; fine-tuning perturbs the posterior via evidence. SAE persona vectors ("evil," "sycophancy") confirmed as pre-training-origin features. First mechanistic unification of the LLM wiki's emergent-misalignment and alignment-faking findings.
- [Introspection adapters: training LLMs to report their learned behaviors](../findings/2026-introspection-adapters.md) (Shenoy, Yang, Sheshadri, Mindermann, Lindsey, Marks, Wang; Anthropic Alignment Science 2026) — co-author; co-senior with [Sam Marks](./samuel-marks.md), first author is Kaarel Shenoy. Single LoRA adapter trained jointly across many labeled fine-tunes to elicit verbalization of learned behaviors; 59% AuditBench success vs. 53% next-best method and 44% for activation oracles (the best white-box comparator). Fifth LLM wiki finding Lindsey appears on; cements the Marks–Lindsey collaboration pattern.

- [Persona vectors monitor and control character trait drift via linear directions in the residual stream](../findings/2025-persona-vectors.md) (Chen, Arditi, Sleight, Evans, Lindsey 2025) — core contributor; first author is Runjin Chen. Automated pipeline for extracting persona vectors from natural-language trait descriptions; monitoring and control methodology for deployment-time and training-time persona drift.

## Crossovers

- [Natural emergent misalignment from reward hacking in production RL](../findings/2025-reward-hacking-misalignment.md) (MacDiarmid et al., 2025) — co-author. Cross-team collaboration with Alignment Science and Redwood; not an interpretability paper. Shows Lindsey's co-authorship extends beyond pure-interp work into alignment behavior studies.

## Team context

Works within [Anthropic Interpretability](./anthropic-interpretability.md), the broader mech-interp group; leads one of its sub-teams. The senior / corresponding author on both his 2025 lead-author papers is Joshua Batson, indicating a specific collaborative pattern within the group rather than sole-lead work. Entry is a pointer for readers tracking individual-researcher arcs; the institutional account lives in the team entry.
