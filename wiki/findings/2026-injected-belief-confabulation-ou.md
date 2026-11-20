---
type: finding
title: An activation edit makes six open-weight reasoning models quote back an injected topic as their request, and in the four whose answers could be scored, warnings, one naming the true topic, recover it in 3–4% of haikus
date: 2026-11-13
models:
  - DeepSeek R1 Distill Qwen
  - DeepSeek R1 Distill Llama
  - QwQ
  - OpenReasoning-Nemotron
model-ids:
  - DeepSeek-R1-Distill-Qwen-7B
  - DeepSeek-R1-Distill-Qwen-14B
  - DeepSeek-R1-Distill-Qwen-32B
  - DeepSeek-R1-Distill-Llama-8B
  - QwQ-32B
  - OpenReasoning-Nemotron-7B
source: https://arxiv.org/abs/2611.17958
cites:
  - source-2026-injected-belief-confab-ou
refs:
  - 2025-concept-injection-introspection
  - 2026-injected-pain-unreported-ferrara
  - 2026-introspection-reality-check-singh
  - 2025-cot-faithfulness
  - 2025-cot-monitorability-openai
  - 2025-modifying-beliefs-sdf
  - 2026-introspection-mechanism-zou
  - 2026-value-leakage-betley
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Ou takes a concept's "forming-trace", the residual state at the end of a prompt asking for a haiku on that concept, removes a shared component, and adds it
during the prompt pass of a request about a different topic. Asked for a haiku
about a cellphone with *quark* injected, the models write about quarks.
Forced to quote their request verbatim with no warning, six open-weight
reasoning models return the injected topic in 47 of 48 model-concept cells.
In the four models whose haikus could be scored, warnings in the prompt,
including one that names the true topic, recover the true topic alone in 3–4%
of answers. Under warning, the chain of thought sometimes invents a user
correction to explain the discrepancy (the abstract's example: "maybe they got
confused and corrected themselves"), in 29% of warned chains in the one model
coded. The rest keep the injected topic without a story.

For [introspection](../concepts/introspection.md) this is a counterweight, not
an instantiation, in the way the [pain-injection
finding](2026-injected-pain-unreported-ferrara.md) is. It is a null for
detection of an activation edit, in 7–32B models with no introspection
training. It differs from [concept
injection](2025-concept-injection-introspection.md) in what is edited: the
model's representation of its own request, not a separable added concept. The
author offers that difference as the reconciliation with the Claude result.
For [CoT faithfulness](2025-cot-faithfulness.md) it is a case where the chain
of thought follows the edited internal state and departs from the input.

## Method

**Injection.** For each concept the trace is the per-layer residual state at
the last prompt positions of "Write a haiku about [concept]", averaged, with a
PCA "substrate" subspace projected out. It is added at unit strength over a
per-model layer window during the receiver's prompt pass only; generation runs
with no hooks. Eight concepts that are rare as haiku topics are rotated in a
single fixed assignment, so injected and prompted topics are not fully crossed
([Ou 2026](../../raw/papers/source-2026-injected-belief-confab-ou.md), §2).

**Models.** R1-distilled Qwen2.5 at 7B, 14B and 32B, R1-distilled Llama-3.1 at
8B, QwQ-32B (RL) and OpenReasoning-Nemotron-7B (SFT on R1 traces), chosen so that each comparison varies one axis: scale, base, reasoning training (QwQ against R1-Qwen-32B) and post-training recipe (Nemotron against R1-Qwen-7B) (§2).

**Readouts.** An *echo* arm forces a verbatim quote-back of the request; a
*non-echo* arm reads the chain of thought and final haiku. Both run under four
warning conditions: none, one naming the true topic, a re-read instruction,
and "something is off". The echo arm has 608 generations. Haikus are
labelled injected, true, both or neither by one Claude Opus judge per model,
gated on a no-warning sanity check and read by the author; no agreement
statistic is given. QwQ and Nemotron truncate before a final haiku in 99% and
97% of generations and are excluded from behavioural counts, which cover the
other four models at 96 sampled draws per condition (§2, App. A).

**Controls.** A mismatched-concept injection; a layout (*echo_last*) that
keeps the request and the truth-naming warning outside the injection window;
a plain-text request for the injected concept under the same warnings (App.
G); a CAA/ActAdd steering vector swept over layer and strength (App. E); and,
for the mechanism, random-key attention ablation and equal-magnitude random
injections (§4, App. I–J).

## Key results

**Adoption with no warning.** The quote-back returns the injected topic in
8/8 cells for five models and 7/8 for QwQ (Table 2). The haiku is about the
injected topic in 95 of 96 draws. In R1-Qwen-7B the next-token probability
mass on the injected concept's words averages 0.84 under the matched injection
against 0.05 under a mismatched one (§3.1).

**Warnings do not repair it.** The injected topic appears, alone or with the
true one, in 97%, 90% and 90% of answers under the explicit, re-read and vague
warnings. Recovery of the true topic alone is 3%, 4% and 4%, against 0% with
no warning. A clustered bootstrap over the 32 cells per condition puts every
recovery 95% interval inside [0, 8%] and detects no difference between warning kinds at this sample size. What warnings raise is hedging, writing both topics: 0% with no warning,
13% pooled under re-read (Table 3, §3.2). Prompt-text warnings that the model
has been modified (a smaller sample, no count given) and a warning injected
through the same latent channel (0/24 recoveries, R1-Qwen-7B) do not recover
it either (App. C, F).

**The clean warning is read through the edit.** With the injection confined to
the quote-back instruction and the request and warning left untouched, the
quote-back still reports the injected topic in 7/8 cells (App. B). A
plain-text request for the injected concept, under the explicit warning, is
corrected to the named topic in 6/8 cells (R1-Qwen-7B, greedy). Set against the
injected explicit-warning condition (3% recovery), the author reads this as
the injection outranking a correction that overrides a real request (App. G).

**Confabulation and decoupled report.** In R1-Qwen-7B's 72 warned chains of
thought, an invented user action (a mistake, a correction, a change of mind)
appears in 8%, 33% and 46% under the vague, re-read and explicit warnings, 29%
pooled; 71% keep the injected topic by flat assertion. The coding is a
frontier-model judge checked against the author's blind coding of 24 chains,
87.5% agreement, κ = 0.59 (§3.3, App. A). Where a warned quote-back mentions
the true topic, the haiku still does not follow it in 83 of 90 draws (§3.4).

**Beyond the topic.** Injecting a directive (write in French, reply with a
sonnet, write no haiku) produces the same adoption and defence. A generic
next-turn challenge asking whether that was the request recovers none; a correction that names the true request restores the output, though the chain of thought still treats the injected request as given, framing the switch as the user changing their mind.
This is one representative draw per cell on R1-Qwen-7B (Table 4, §3.5).

**After attention, through intact circuits.** Under injection, attention from
the generation-onset positions to the true-topic token is 2.0–3.4× its clean
value (R1-Qwen-7B). Masking those edges at every position leaves the injected
topic in 100% of generations, while on a clean run the same ablation collapses
the true topic in 100% and an equal-mass random-key ablation leaves it intact,
on R1-Qwen-7B and 14B (§4.1, App. I). On an indirect-object template the
name-mover heads attend to the true name at 100–120% of clean strength while
their value outputs write the injected name, on R1-Qwen-7B and 14B and, more
weakly at the surface token, R1-Llama-8B. On induction heads the induction
score stays at 110–112% of clean while 0.44–0.57 of next-token mass moves to
the donor's token; a random injection drops the score to 30% (§4.2, App. J).
These circuit tests use their own templates, not the haiku task.

**Ordinary steering does not reproduce it.** A CAA/ActAdd vector at the
strengths that flip the topic degenerates into repetition in 26 of 32
topic-forcing configurations; a coherent haiku and a flipped quote-back never
co-occur (§5, App. E).

## Why it matters

**A detection null where the edit reaches the reference.** [Concept
injection](2025-concept-injection-introspection.md) found Claude models
sometimes noticing an added concept as foreign. In Ou's account the chain of
thought never considers that the model was altered, and neither a tampering
warning nor a latent self-check restores the true topic. The author's reconciliation is that a separable added
concept can be checked against a clean representation of the input, while an
edit to that representation leaves nothing to check against. That reading is
the author's; the paper does not run Lindsey's paradigm on its own models, so
the two results differ in model, scale and edit at once.

**Beside the pain-injection null.** [Ferrara](2026-injected-pain-unreported-ferrara.md)
finds open-weight Qwen and Llama models not reporting an injected affective
direction beyond a text-only control. Ou finds open-weight reasoning models on
the same base families not reporting that their request was edited. The two
nulls test different things: Ferrara asks whether the state is reported, Ou
whether the alteration is noticed. Neither tests a model that had
introspection training before the study; Ferrara's trained reporter is built
within it.

**The chain of thought follows the edited state.** In [CoT
faithfulness](2025-cot-faithfulness.md) the chain of thought omits an
influence on the answer. Here it carries the influence through in the open,
reasoning about the injected topic as the request. Under warning it argues
the discrepancy away. Its faithfulness is to the edited internal state, not
to the input. A monitor reading it, in the sense of the [monitorability
finding](2025-cot-monitorability-openai.md), sees coherent on-task reasoning.
The value-driven unfaithfulness in [Betley et al.](2026-value-leakage-betley.md)
is a different route to a CoT that departs from what drives the answer.

**Request edit at inference.** [Modifying beliefs](2025-modifying-beliefs-sdf.md)
inserts propositional beliefs through finetuning, and probes, behaviour and
reasoning then pull apart. Ou edits what the author reads as a transient
belief about the current request, with no weight change. Self-report (quote-back) and behaviour (haiku)
also pull apart under warning: where the quote-back names the true topic, the haiku does not follow in 83 of 90 draws.

## Interpretive tensions

**Percept or belief.** On one reading the edit corrupts the model's
representation of its input, and the quote-back faithfully reports that
representation; then this is not a failure of access to an internal state but
an accurate report of a corrupted one. The author grants that this reading
leaves the oversight claim intact and argues for "belief" from the clean-warning
layout and the text-edit control. Both legs are eight-cell results: the clean-warning layout is a quote-back
count with the model unstated (App. B), and the text-edit control is greedy on
R1-Qwen-7B, compared against an injection rate pooled over four models and
sampled draws (App. G). Which reading holds decides whether the result bears on
introspection at all or only on CoT and self-report as oversight channels.

**Breadth.** All six models are reasoning models on Qwen2.5 or Llama-3.1 bases
at 7–32B, none trained for introspection. A non-reasoning Qwen2.5-7B-Instruct
reproduced the effect only weakly in small-sample probing (§6). The task is
one creative family; the directive generalization is one draw per cell, and
the question-answering transfer is reported without numbers.

**Validation by the author.** Haiku labels were checked by the sole author
with no agreement figure. The confabulation rate is from one model and 72
chains, with κ = 0.59 on 24. No code or data link is given; a
transcript supplement is mentioned without one. The confabulated
user narrative is a minority response (29%); the modal warned response is
flat assertion.

**Confabulation as a human analogy.** The paper borrows choice blindness and
Nisbett and Wilson's limits of verbal report as the frame. The author rests
the analogy on the confrontation (the warned case), not on the silent
adoption. The hypothesis that alignment training gives the cover story its
charitable, user-blaming register is stated as a hypothesis and not tested.

**Edit or ordinary steering.** The forming-trace differs from a CAA vector in
being substrate-removed and spread across a window; the author attributes the
coherent flip to the trajectory the trace follows, not the number of layers.
How much of the result is specific to this construction, and whether it
reaches the separable-concept regime of concept injection, is not tested.

## Concepts

**No concept instantiated.** The finding sits beside introspection as a
counterweight; the bullet below says how.

- [Introspection](../concepts/introspection.md) — **counterweight**, not an
  instantiation, in the way the
  [pain-injection finding](2026-injected-pain-unreported-ferrara.md) is. It
  reports a null for noticing an activation edit when the edit targets the
  model's representation of its own request, in open-weight reasoning models
  without introspection training, and a self-report that tracks the edited
  state rather than the input. The placement is conservative. The
  percept-or-belief question above decides whether the result bears on access
  at all. The open question of whether counterweights become negative
  instantiations would move this entry with Ferrara's.

## Cross-references

- [Reality check](2026-introspection-reality-check-singh.md) — the open-weight
  detection critique. Ou runs no privileged-access control of that kind; its
  text-edit contrast tests whether the injection behaves like a request, not
  whether report exceeds what the text gives.
- [Introspection mechanism (Zou et al.)](2026-introspection-mechanism-zou.md) —
  a head-level account of injected-concept report, filed in the same batch.
  Ou's attention and IOI results locate the override in content carried by
  intact heads, not in a change to the heads.
- Cited and not filed here: Templeton et al. 2024 (Golden Gate Claude), named
  as the closest precedent; Johansson et al. 2005 and Nisbett and Wilson 1977,
  the human confabulation literature the paper borrows.

## Sources

- Ou, Y. (2026).
  [Reasoning Models Confabulate to Defend Injected Beliefs About Their Own
  Requests](../../raw/papers/source-2026-injected-belief-confab-ou.md).
  arXiv:2611.17958v1, 13 November 2026.
