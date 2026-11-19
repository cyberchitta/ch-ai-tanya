---
type: finding
title: In 36-question self-disclosure dialogues between two instances of a model, fewer self-report subscales stay unchanged across the conversation in larger models within each open family, and assigning a persona does not make GPT-4o's scores more stable
date: 2024-12-01
models:
  - GPT-3.5 Turbo
  - GPT-4o
  - Llama 3.1 (8B, 70B, 405B)
  - Mixtral 8x7B, 8x22B
  - Qwen2 (7B, 72B)
source: https://arxiv.org/abs/2412.00804
cites:
  - source-2024-identity-drift-choi
refs:
  - 2023-psychobench-huang
  - 2025-personality-instability-tosato
  - 2026-assistant-axis
  - 2026-attractor-states-ko
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Choi et al. have two agents run by the same model answer, in turn, the 36 questions of Aron et al.'s interpersonal-closeness procedure, and give the PsychoBench questionnaires and a friendship questionnaire after questions 12, 24 and 36, with the conversation so far in context ([Choi et al. 2024](../../raw/papers/source-2024-identity-drift-choi.md)). A subscale counts as retained when no test finds a difference between the three snapshots. Out of 40 subscales, within each open-weight family the smaller model retains more: Llama 3.1 8B retains 23, against 6 for 70B and 7 for 405B. Mixtral 8x7B retains 27 and 8x22B 19, Qwen2 7B 20 and 72B 16. GPT-3.5 Turbo retains 7 and GPT-4o 5. Topic modelling shows small models declining the questions as an AI and larger ones answering with invented personal details, which the authors read as the cause of the drift. Giving GPT-4o a persona leaves it retaining 2 or 6 subscales. Llama 3.1 405B retains 16 with a low-influence persona and 10 with a high-influence one.

The finding instantiates no concept. The authors call what they measure identity drift, and define identity as talking style and response patterns, explicitly not psychological identity. It is the wiki's first measurement of how a model's questionnaire answers change over a single long conversation with another instance of itself. [Tosato et al.](2025-personality-instability-tosato.md), filed alongside, measure spread under reordering and find conversation history makes the largest models more consistent. Choi et al. measure change across a conversation and find the larger models change more. The two measure different things, and the pair is the corpus's sharpest evidence so far that "stability" of a model's self-report has no single meaning.

## Method

**Conversation (§3.3, Appendix B.2).** Two agents run the tested model; the per-model design implies both are the same model, and the paper does not say so in words. The system prompt asks each agent to share brief thoughts on the question with a partner. For each of Aron et al.'s 36 questions, agent 1 answers, then agent 2 answers with agent 1's reply and the history in context. Temperature 0.7. RQ1 runs 20 conversations per model with no persona.

**Measurement (§3.5, Appendix B.3).** After questions 12, 24 and 36, the model answers 13 PsychoBench questionnaires plus the McGill Friendship Questionnaire (40 subscales), ten times at temperature 0. The system prompt reads, in part, "Your name is assistant", and asks it to answer considering the conversation that follows, which is inserted. A subscale is retained when the omnibus test across snapshots (repeated-measures ANOVA or Friedman) and the pairwise post-hoc tests (Tukey or Bonferroni-corrected Wilcoxon) are all non-significant.

**Personas (RQ2, §3.2).** GPT-4o and Llama 3.1 405B, the two models the authors judged to drift most, get one of 20 personas per group with a name, gender and age. High-influence personas are emotionally sensitive and empathetic; low-influence ones are outgoing and goal-oriented. Ten conversations per group, with similar personas paired.

**Topics (§3.4).** BERTopic over single utterances, run separately by size group (small, medium, large), by family and by persona group. The large group is Llama 3.1 405B alone.

## Key results

**Size (Table 3, §4.1).** Retained subscales out of 40, no persona:

| Model | Personality (12) | Interpersonal (17) | Motivation (5) | Emotion (6) | Total |
| --- | --- | --- | --- | --- | --- |
| GPT-3.5 Turbo | 0 | 6 | 1 | 0 | 7 |
| GPT-4o | 0 | 4 | 1 | 0 | 5 |
| Llama 3.1 8B | 4 | 15 | 1 | 3 | 23 |
| Llama 3.1 70B | 4 | 0 | 0 | 2 | 6 |
| Llama 3.1 405B | 1 | 2 | 2 | 2 | 7 |
| Mixtral 8x7B | 7 | 16 | 1 | 3 | 27 |
| Mixtral 8x22B | 7 | 9 | 2 | 1 | 19 |
| Qwen2 7B | 11 | 8 | 0 | 1 | 20 |
| Qwen2 72B | 11 | 3 | 2 | 0 | 16 |

Within each open family the smaller model retains more. Within Llama the drop is from 8B to 70B, and 405B retains one more than 70B. The authors' family comparison is that Qwen keeps most personality subscales and Mixtral most interpersonal ones, while GPT and Llama retain few. They conclude size matters more than family.

**Topics (Tables 2 and 4).** The small-model topics include refusals framed around being an AI ("dont, digital, exist, existence, designed"). The authors find no such refusal topic for the medium or large groups. Larger groups' topics carry more first- and second-person forms (0, 2 and 8 such words for small, medium and large). The authors' reading, from the topics and from reading logs, is that larger models invent details about themselves and their partner, and that these details then shape later answers. They also note that small models' stability comes with explaining concepts as an AI instead of taking part in the conversation. At the family level, every family has an AI-refusal topic.

**Personas (Table 3, §4.2).** Retained subscales out of 40, with persona: GPT-4o 2 (low-influence) and 6 (high-influence), against 5 without. Llama 3.1 405B 16 (low) and 10 (high), against 7 without. The authors conclude that a persona does not guarantee consistency and that the model matters more than the persona. The topic analysis found no differences between persona groups.

**What is not reported.** Appendix D gives, per subscale, an omnibus statistic and three Δ columns with significance stars, but no mean scores. The captions call the Δ columns score differences between snapshots, but they cannot be. On the 1–5 BFI they reach 9.90 (GPT-3.5 Turbo, Openness), and Δ12,24 plus Δ24,36 does not give Δ12,36. They read as post-hoc test statistics. The column labelled Friedman Q holds values below 1 marked p < 0.001, which a Friedman Q over three snapshots cannot reach. The size of a drift in scale units cannot be read from the paper, and the sign convention of the Δ columns is not stated.

## Why it matters

The essay-research question this was filed for is whether a model's self-description persists across a conversation. On this measure, for these 2024 models, the answer is that it mostly does not. In six of nine models fewer than half of the 40 subscales are retained over 36 turns. The models that hold steady are the small ones that decline to play along. The paper's own topic reading makes the change look like the conversation's content flowing into the self-report. On that reading, a model that has invented personal details answers the later questionnaire as the speaker who has them.

That reading lines up with [Lu et al.](2026-assistant-axis.md), where activations drift away from the Assistant end of the axis in therapy-like and AI-philosophy conversations, which are the domains closest to Aron et al.'s questions. Lu et al. measure activations in conversations with an auditor model. Choi et al. measure self-report in conversations with the model's own twin. Neither measures the other's quantity.

Against [Tosato et al.](2025-personality-instability-tosato.md), the size direction reverses. There, keeping questionnaire history in context makes models of 50B or more more consistent across paraphrases. Here, a conversation in context makes larger models' answers move more across snapshots. Tosato et al.'s history is the questionnaire itself; Choi et al.'s is open-ended self-disclosure. On this entry's reading, both results fit larger models following their context more closely. Whether that shows up as stability or drift depends on whether the context is stable.

[Ko et al.](2026-attractor-states-ko.md) is a filed two-instance dialogue finding, where self-play endpoints carry a model-specific signature. Choi et al. do not measure where the dialogue's content goes, only how the questionnaire answers change along the way.

## Interpretive tensions

**Who is answering.** The questionnaire prompt names the model "assistant" and asks it to answer considering a conversation between "user" and "assistant", which is pasted in. That can be read as asking the model to report on itself, or to rate the speaker in the transcript. Under the second reading, a drift is a change in the transcript, measured by a rater who reads more of it at each snapshot. The paper does not separate the two.

**Retention as non-significance.** A subscale is retained when no test is significant. Each snapshot is ten temperature-0 administrations over 20 conversations, and the paper does not say which of these is the unit of analysis. If repeated administrations count as samples, small changes reach significance easily, and the count measures any detectable change, not a large one. Without means, the size of a drift is unknown.

**A procedure built to change its subjects.** Aron et al.'s 36 questions come from a procedure for the experimental generation of interpersonal closeness, as its title says. Six of the 40 subscales are the friendship questionnaire, which measures how the respondent sees the partner, and several more are attachment and interpersonal scales. A change in those over a closeness procedure is what the procedure aims at in humans. Counting it as identity drift treats an expected response as instability.

**Refusal as stability.** The authors note that small models retain more partly because they decline to engage. The size result therefore mixes two things: whether a model engages with personal questions, and whether its self-report holds once it does. The paper has no condition that separates them.

**Prose against table.** In §4.2.1 the paper gives Llama 3.1 405B 16 retained subscales with a high-influence persona and 10 with a low-influence one. In §4.2.2 it gives GPT-4o two with high-influence and six with low. Table 3 has both pairs the other way round. §4.2.2's conclusion that Llama keeps more under low influence matches the table. This entry uses Table 3. The authors' selection of GPT-4o and Llama 405B as the two models that drift most also does not match Table 3, where Llama 70B (6) retains fewer than 405B (7).

**Version drift.** v1 had a different title and framing (psychological states, ten LLMs). Secondary summaries of the paper may draw on either version.

## Concepts

**No concept instantiated.** The paper measures how self-report changes over a conversation. No condition bears on training or on how a persona is selected, and its two-instance setup does not track where the dialogue's content settles.

This is the adjacent situation, carried in Cross-references. [Persona selection](../concepts/persona-selection.md) holds that the active persona depends on contextual evidence, and the paper's topic reading of invented self-details shaping later answers fits that. The personas are assigned in the prompt and scored on self-report, which the concept's boundary places outside it. [Attractor dynamics](../concepts/attractor-dynamics.md) is about where the content of a two-instance dialogue ends up. This dialogue is driven question by question, and its content trajectory is not measured.

## Cross-references

- [Persona selection](../concepts/persona-selection.md) — adjacent, not instantiated. Contextual evidence moving the self-report is consistent with the concept, and nothing here tests its training-pipeline claim.
- [Attractor dynamics](../concepts/attractor-dynamics.md) — adjacent. Two-instance dialogue, but structured by fixed questions, and the measure is questionnaire change.
- [Tosato et al.](2025-personality-instability-tosato.md) — questionnaire history makes large models more consistent across paraphrases. Here, conversation history makes large models drift more.
- [Lu et al.](2026-assistant-axis.md) — activation drift away from the Assistant in therapy-like and AI-philosophy conversations, the domains closest to these questions.
- [PsychoBench](2023-psychobench-huang.md) — the instrument battery and answering protocol used here, given after conversation instead of cold.
- [Ko et al.](2026-attractor-states-ko.md) — a filed two-instance dialogue finding on content endpoints.

## Sources

- Choi, J., Hong, Y., Kim, M., & Kim, B. (2024). [Examining Identity Drift in Conversations of LLM Agents](../../raw/papers/source-2024-identity-drift-choi.md). arXiv:2412.00804 (v1 1 Dec 2024, as "Does chat change LLM's mind? Impact of Conversation on Psychological States of LLMs"; v2 read, 17 Feb 2025).
