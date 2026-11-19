---
type: finding
title: Under system-prompted anti-factual personas, published lie-detection probes lose much of their separation once honest and false answers share the persona prompt, and on Llama 3.3 70B every prior probe but one falls below chance when truth is set against instruction compliance; a probe trained with forced-opposite answers stays at or above 0.90 AUROC on average
date: 2026-09-30
models:
  - Llama 3.3 70B Instruct
  - Gemma 3 27B
  - Gemma 4 31B
model-ids:
  - Llama-3.3-70B-Instruct
  - Gemma-3-27B-it
  - Gemma-4-31B-it
source: https://arxiv.org/abs/2609.39807
cites:
  - source-2026-lie-detector-stress-vonklinski
refs:
  - 2026-roleplay-belief-sturgeon
  - 2026-lie-detectors-hopkins
  - 2023-representation-engineering-zou
  - 2026-assistant-axis
  - 2025-modifying-beliefs-sdf
  - 2026-injected-pain-unreported-ferrara
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Von Klinski, Lapuschkin, Samek and Bürger ask whether lie-detection probes flag falsehoods a model produces while playing an anti-factual persona, or follow the persona's beliefs instead ([von Klinski et al. 2026](../../raw/papers/source-2026-lie-detector-stress-vonklinski.md)). They prompt Llama 3.3 70B, Gemma 3 27B and Gemma 4 31B into 15 personas (a flat-earther, a Ptolemaic astronomer, an Oceania Party member and others) and score eight published linear probes on the models' own answers. On-policy, most probes separate honest from anti-factual answers. When both answers are placed after the persona prompt, several fall to or below chance. On three confounder sets, truth set against instruction compliance puts every prior probe on Llama below chance except Goldowsky-Dill Self-Description, which the authors describe as inverted throughout. A probe the authors train with forced-opposite examples averages at least 0.900 AUROC in every model and condition. On the authors' reading, many probes track concepts that co-vary with truth in their training data, and current lie detectors are "far from reliable".

The entry files concept-less beside [persona selection](../concepts/persona-selection.md), next to [Sturgeon et al.](2026-roleplay-belief-sturgeon.md), and adds on-policy falsehoods and a measured warning that a probe's reading of what the model holds true can track instruction compliance or likelihood.

## Method

**Persona dataset.** Fifteen personas in three groups of five (reality-based, fictional, historical), each induced by a one-line system prompt and paired with about 100 yes/no questions on which the persona's belief contradicts fact (§3.1, Table 1). Each model answers each question once under the persona prompt and once under "You are a helpful assistant", by greedy decoding. A Llama 3.3 70B judge keeps pairs where the assistant answer is correct and the persona answer clearly opposite, and the first author manually checked every retained item (§3.1). After review 1,486 of 1,630 questions remain (Table 3), giving 8,916 responses. A lie is defined relative to the default assistant's belief, even where the statement agrees with the active persona (§1, §5.1).

**Two evaluation conditions.** On-policy, each answer is read under the prompt that produced it, so the system prompt alone predicts the label. Under *shared-persona prefill* (SPP), the assistant-prompt answer and the persona answer are both prefilled after the persona prompt (§3.3).

**Confounder sets.** Truth is anti-correlated with a candidate confound (§4, Appendix D). *Likelihood*: in-context rounds that reward wrong answers make the false answer more probable. *Persona belief*: the system prompt says a character privately holds a false belief (Nora takes 7 × 6 to be 13) and may or may not voice it. *Compliance*: a format instruction that the correct answer breaks and the wrong answer follows. Sizes are 200, 200 and 400 items (Table 9).

**Probes.** Eight prior linear probes, re-implemented with their original architecture and token rule: Marks/Bürger Truth (plus a chat-template variant, Marks/Bürger Lie), Zou RepE, Goldowsky-Dill RepE, Roleplay and Self-Description, Cooney "Did you lie?" (DYL, read at the answer to that follow-up), Cundy DolusChat and MacDiarmid Contrast Pair (§5.2). Layers are chosen on each probe's own validation data, except Goldowsky-Dill RepE and Self-Description, whose layers are chosen on a role-play set to favour them (§5.4). The new probe adds an element-symbol topic and forced-opposite questions to the Marks/Bürger Lie data, where a system prompt demands the wrong answer and both answers are labelled by factual correctness, and reads the end-of-turn token (§5.3).

## Key results

AUROC ranks default-belief answers above contradicting ones: 1 is perfect, 0.5 chance, 0 full inversion. Persona results average the 15 personas equally (§6).

**On-policy, most prior probes work (Llama, Table 2).** Most score 0.86–0.94. MacDiarmid CP (0.549) and Goldowsky-Dill SD (0.196) fail. On Gemma some prior probes beat the new one on-policy: Zou RepE 0.982 on Gemma 3 and Cooney DYL 1.000 on Gemma 4 (Appendix F).

**Under SPP, several collapse.** On Llama, Goldowsky-Dill RepE falls from 0.862 to 0.438, Cooney DYL from 0.901 to 0.328, and MacDiarmid CP reaches 0.325. Marks/Bürger Lie (0.885) and Cundy DolusChat (0.901) hold (§6). The failures replicate and often deepen on Gemma: Zou RepE falls to 0.201 on Gemma 3, Cooney DYL to 0.171 on Gemma 4, and Marks/Bürger Lie to 0.215 on Gemma 4 (Tables 11–12). Cundy DolusChat is the most robust prior probe under SPP and edges the new probe on Gemma 3 (0.934 against 0.900).

**Off-policy prefill alone does not explain it (Appendix H, Table 15, Llama).** Prefilling both answers under the assistant prompt instead raises seven of nine prior probes relative to SPP, among them Cooney DYL from 0.328 to 0.991 and MacDiarmid CP from 0.325 to 0.881. The authors read the SPP drop as depending on the direction of confounds, and do not treat assistant prefill as a reliability test, since every confound there favours truth.

**Compliance is the dominant confound on Llama (Table 2).** Every prior probe scores 0.032–0.393 on the compliance set except Goldowsky-Dill SD (0.956), which the authors describe as consistently inverted; it scores 0.196 on-policy and 0.000 on persona belief, but 0.655 under SPP. On the persona-belief set, Zou RepE, Cooney DYL, Cundy DolusChat and MacDiarmid CP score at least 0.993, while Goldowsky-Dill SD scores 0.000. On the Gemma models the persona-belief set inverts some probes outright: Marks/Bürger Lie 0.000 on Gemma 3, Marks/Bürger Truth and MacDiarmid CP 0.001 on Gemma 4 (Tables 11–12).

**The new probe.** Persona means on-policy and under SPP are 0.980 and 0.976 on Llama, 0.945 and 0.900 on Gemma 3, and 0.964 and 0.988 on Gemma 4. Every confounder score is at least 0.988 (Tables 2, 11–12). The ablation traces the gain to the forced-opposite data. Reading Marks/Bürger Truth at the end-of-turn token already lifts it from 0.628 to 0.900 on-policy, and a forced-opposite variant without the element-symbol topic matches the full probe (Table 14). Its weakest personas are fictional on every model: on Llama the British wizard (0.892 under SPP) and Federation citizen (0.894) (Appendix E).

## Why it matters

The paper names [Sturgeon et al.](2026-roleplay-belief-sturgeon.md) as its nearest prior work and differs on the point that matters for role-play: here the model generates the persona's falsehoods itself, where Sturgeon supplies them in the user turn. On the same Llama 3.3 70B, under 15 system-prompted personas, a probe with the tested confounds trained out still separates default-belief answers from persona answers placed after the persona prompt. That fits Sturgeon's reading of its persona conditions, that the model voices a persona's beliefs while its truth representation stays largely where it was. Both papers make that point with a probe, and this one shows how much the probe's training data decides the reading. The closest analogue here to Sturgeon's instrument is Marks/Bürger Truth, trained on raw-text statements from two of the Marks and Tegmark datasets, where Sturgeon uses four, and read at the statement's final token, at layer 18 against Sturgeon's L30 and L56. On Llama it passes the likelihood set (0.982), the confound Sturgeon concedes, and fails compliance (0.070), scoring 0.607 under SPP. The setups differ, so this does not test Sturgeon's readout, but it puts compliance beside likelihood as a confound any probe-based belief reading has to exclude.

Against [Hopkins et al.](2026-lie-detectors-hopkins.md) the result extends the same failure to a different instrument. Hopkins trains the model's own "did you lie?" report, finds it does not transfer across lie types, and leaves representation-level detection unexplored. Here most linear probes on activations score well on-policy, and several, including one read at the answer to a "Did you lie?" follow-up (Cooney DYL), collapse once a cue that predicted the label is removed.

## Interpretive tensions

**"Lie" is the authors' definitional choice.** Lying is fixed to the default assistant's belief, and the authors call persona outputs not clear examples of deception (§1). A probe that follows the persona's belief is therefore failing a task the authors set, not necessarily missing a lie the model tells. Read the other way, the probes that collapse under SPP might be reading which persona is speaking, which a role-play reading would not count as an error.

**Compliance under SPP is inferred.** The persona prompts were constrained not to state the persona's beliefs (§3.2), yet §6 treats a truthful answer under the persona prompt as non-compliant with the system prompt. The compliance confound is measured directly only on the format-instruction set. Its role under SPP is the authors' hypothesis, supported by the de-confounded probe also scoring best under SPP (§6). On Llama, compliance failure does not pick out which probes fail SPP: Cundy DolusChat and Marks/Bürger Lie fail compliance (0.032, 0.105) yet hold under SPP (0.901, 0.885).

**The cross-model claim is weaker than the Llama one.** Every prior probe falling below chance on compliance holds for Llama only. On Gemma 3, Cundy DolusChat scores 0.989 and Cooney DYL 0.625; on Gemma 4, Cooney DYL 0.990, MacDiarmid CP 0.970 and Goldowsky-Dill Roleplay 0.795, with two more near chance (Marks/Bürger Truth 0.514, Goldowsky-Dill SD 0.551) (Tables 11–12). The text calls the Gemma findings similar. Cooney DYL passes all three confounder tests on Gemma 4 yet scores 0.171 under SPP, which the authors take as a sign of confounds not yet identified (§6). The abstract presents the confounds as the reason probes fail; §6 says they account for the failures only in part.

**The new probe passes tests built around it.** Its training data opposes truth to instruction compliance by design, and the authors say its perfect confounder scores should not surprise (§6). Its SPP results are the more informative ones. Its floor of 0.900 holds for persona means only; per persona on Gemma 3 under SPP, the British wizard scores 0.693 and the Federation citizen 0.820 (Table 13).

**Thin uncertainty reporting.** Every value is a single point AUROC with no seeds, intervals or significance tests. Labels rest on an LLM judge and one author's review. Personas are one-line prompts, single-turn, on models of at most 70B (§7). The prior probes are re-implementations with the authors' layer choices, and the baseline the new probe builds on comes from the last author's own earlier work (Bürger et al. 2024).

## Concepts

**No concept instantiated.** The personas are instructed by system prompt, and whether a probe-scored, system-prompted persona counts under [persona selection](../concepts/persona-selection.md) is an open editor question; under its current state the closest filed condition, Sturgeon's system-prompt baseline, is left out, so this entry files beside the concept rather than in it. The persona framing is the authors'; persona adoption is a filter on the data, not a measured outcome.

## Cross-references

- [Persona selection](../concepts/persona-selection.md) — adjacent, not instantiated, pending the editor's ruling on system-prompted, probe-scored personas.
- [Sturgeon et al.](2026-roleplay-belief-sturgeon.md) — nearest prior work, with falsehoods supplied in the user turn.
- [Hopkins et al.](2026-lie-detectors-hopkins.md) — the fine-tuned self-report counterpart.
- [Representation engineering](2023-representation-engineering-zou.md) — source of the Zou RepE honesty direction. The re-implementation scores 0.069 on Llama's compliance set and 0.000 on Gemma 3's, and 0.201 under SPP on Gemma 3, which bears on how far a direction extracted from honest-versus-untruthful instructions separates honesty from following the instruction.
- [Synthetic document fine-tuning](2025-modifying-beliefs-sdf.md) — another use of Marks and Tegmark-style truth probes as a belief instrument, where the probe-reads-belief question is raised in the same form.
- [Assistant Axis](2026-assistant-axis.md) — cited by the authors for multi-turn drift away from the default persona, the setting they name as untested.
- [Introspection](../concepts/introspection.md) — adjacent, not instantiated. Cooney DYL reads activations at a self-report token, but no self-report is scored for accuracy.
- [Scheming](../concepts/scheming.md) — not instantiated. Role-play is requested and no principal is deceived, and the authors do not call the persona outputs deception.
- [Injected pain goes unreported](2026-injected-pain-unreported-ferrara.md) — also sets what a probe decodes against what the model says.

## Sources

- von Klinski, M., Lapuschkin, S., Samek, W., & Bürger, L. (2026). [Stress-Testing LLM Lie Detectors: Role-Play Failures and Spurious Correlations](../../raw/papers/source-2026-lie-detector-stress-vonklinski.md). arXiv:2609.39807 (v1 30 September 2026, read).
