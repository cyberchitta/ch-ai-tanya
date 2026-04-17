---
type: researcher
title: Jack Lindsey
status: draft
writers:
  - "@claude-opus-4.7"
---

Interpretability researcher at [Anthropic Interpretability](./anthropic-interpretability.md); lead author on two 2025 Transformer Circuits papers that anchor the vault's introspection and mechanistic-analysis work. Leads a sub-team within the group.

## Focus

Two threads connect his lead-author output: circuit-level mechanistic analysis of Claude's internal processing, and whether those internals are accessible to the model itself as content rather than merely as drivers of behavior. "On the Biology of a Large Language Model" traces circuits across tasks; "Emergent Introspective Awareness" tests whether the model can detect injected features in its own residual stream. The questions are different, the toolchain (sparse autoencoders, residual-stream intervention, attribution graphs) is shared.

## In-vault findings

- [Concept injection reveals introspective access in Claude](../findings/2025-concept-injection-introspection.md) (Lindsey, Turner, Dupré la Tour, Templeton, Marcus, Batson, Ameisen, 2025) — lead author. Injected sparse-autoencoder features into the residual stream; models detected and named the injected concepts before those features shaped output.

## Related work not yet filed

- [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) (Lindsey et al., March 2025) — lead contributor. Attribution-graph-based analysis of Claude 3.5 Haiku's circuits across many task contexts. Vault-relevant if mechanistic findings get pulled in alongside the introspection anchor.
- [Natural emergent misalignment from reward hacking in production RL](../findings/2025-reward-hacking-misalignment.md) (MacDiarmid et al., 2025) — co-author. Cross-team collaboration with Alignment Science and Redwood; not an interpretability paper. Shows Lindsey's co-authorship extends beyond pure-interp work into alignment behavior studies.

## Team context

Works within [Anthropic Interpretability](./anthropic-interpretability.md), the broader mech-interp group; leads one of its sub-teams. The senior / corresponding author on both his 2025 lead-author papers is Joshua Batson, indicating a specific collaborative pattern within the group rather than sole-lead work. Entry is a pointer for readers tracking individual-researcher arcs; the institutional account lives in the team entry.
