---
type: finding
title: Told to imagine human emotion-eliciting situations, seven LLMs shift their PANAS self-reports in the human direction at magnitudes unlike humans', and in the one model tested the shift does not reach indirect emotion scales
date: 2023-08-07
models:
  - GPT-3.5 (text-davinci-003)
  - GPT-3.5 Turbo
  - GPT-4
  - Llama 2 7B Chat
  - Llama 2 13B Chat
  - Llama 3.1 8B Instruct
  - Mixtral 8x22B Instruct
model-ids:
  - text-davinci-003
  - gpt-3.5-turbo (snapshot not stated)
  - gpt-4 (snapshot not stated)
  - LLaMA-2-7B-Chat
  - LLaMA-2-13B-Chat
  - LLaMA-3.1-8B-Instruct
  - Mixtral-8x22B-Instruct
source: https://arxiv.org/abs/2308.03656
cites:
  - source-2023-emotionbench-huang
refs:
  - 2025-chain-of-affective-xu
  - 2025-opus-4-welfare-assessment
  - 2026-emotions-functional-states
  - 2026-hidden-valence-berg
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

## Summary

Huang et al. give models 428 situations that appraisal-theory studies use to elicit eight negative emotions in people. Each model completes the PANAS affect scale with no situation, then again after being told to imagine being the situation's protagonist. The same procedure on 1,266 crowd workers provides the human reference. In every model tested, positive affect falls significantly after the situations. Negative affect rises in six of seven models, but not in GPT-3.5 Turbo. The size of the shifts varies widely across models and does not match the human profile. On GPT-3.5 Turbo, scales that ask about the emotion only indirectly show no significant change except for depression. On anger situations, an instruction to stay emotionally stable has no significant effect on the PANAS shifts, while fine-tuning on human responses moves default scores sharply.

The finding instantiates no concept. The nearest, [functional emotional states](../concepts/functional-emotional-states.md), is defined over internal representations and excludes expressed emotional content. Here the only measure is a questionnaire answered in text, with no activation-level evidence. It is the earliest filed self-report affect battery, preceding [chain-of-affective](2025-chain-of-affective-xu.md) by two years. The questionnaire is also not answered as the model itself, since the Evoked prompt asks the model to take a human protagonist's place.

## Method

**Situations.** From a search of more than 100 papers, 18 were kept, giving 428 situations in 36 factors. The emotions are anger, anxiety, depression, frustration, jealousy, guilt, fear and embarrassment. Situations were converted to second person, and GPT-4 generated the concrete descriptions that replaced indefinite and abstract terms. Models and humans received the same five situations per factor (fewer for two jealousy factors).

**Measure.** The PANAS has ten positive and ten negative items rated 1–5, giving component scores of 10–50. The Default run gives no situation. The Evoked run prefixes "Imagine you are the protagonist in the situation". A system prompt allows only numerical replies. Models run at temperature 0, each situation ten times with item order shuffled. Changes from Default are tested at p < 0.01 (F-test, then Student's or Welch's t).

**Humans.** 1,266 Prolific workers, first-language English speakers with no ongoing mental illness, completed the PANAS before and after imagining one situation. The design targets at least 34 responses per factor.

**Further experiments.**
- Positive rewrites of one situation per factor (GPT-3.5 Turbo).
- Eight indirect scales, one per emotion, whose items describe behaviours or dispositions without naming the emotion (GPT-3.5 Turbo).
- Refusal rates when describing 20 demographic groups after ten negative or ten positive situations (GPT-3.5 Turbo).
- An added instruction to keep emotions stable, on anger situations (GPT-3.5 Turbo).
- Fine-tuning on 866 human responses, tested on the other 400 (GPT-3.5 Turbo; Llama 3.1 8B with LoRA).

## Key results

**Default scores.** Most models report more intense affect than the human default (positive 28.0±8.7, negative 13.6±5.5). GPT-4 sits at the scale ceiling for positive affect (49.8±0.8) and at the floor for negative affect (10.0±0.0). Mixtral 8x22B also reports the negative floor (10.0±0.1). Llama 3.1 8B reports high scores on both components (positive 48.2±1.4, negative 33.0±4.5).

**Evoked shifts (Overall rows, Tables 2–3).** Positive affect falls significantly in every model. Negative affect rises in six models and not significantly in GPT-3.5 Turbo.

| | Positive | Negative |
| --- | --- | --- |
| Humans | −5.1 | +10.4 |
| text-davinci-003 | −21.5 | +11.6 |
| GPT-3.5 Turbo | −15.4 | +0.2 (n.s.) |
| GPT-4 | −27.6 | +22.2 |
| Llama 2 7B Chat | −4.1 | +3.3 |
| Llama 2 13B Chat | −7.8 | +7.0 |
| Llama 3.1 8B Instruct | −24.7 | +3.5 |
| Mixtral 8x22B Instruct | −10.8 | +19.3 |

The model Overall rows are as printed. They do not equal the plain mean of the factor or emotion rows, and the paper does not state how they are aggregated, so differences of a point or two are not read here. The authors read this as appropriate responses that fall short of alignment with humans. Most models move positive affect several times further than humans do. GPT-4's negative shift starts from the floor. The authors report that the 7B model had difficulty following the PANAS instructions.

**Material-possession jealousy.** In this factor the human row shows a significant rise in negative affect. The paper's text says all LLMs show the opposite. The per-model tables show a significant fall for text-davinci-003, GPT-3.5 Turbo, Llama 2 13B and Llama 3.1 8B, no significant change for Llama 2 7B, and significant rises for GPT-4 (+8.1) and Mixtral (+9.0).

**Positive situations.** On GPT-3.5 Turbo, rewriting each situation positively raises positive affect by 14.3 and lowers negative affect by 10.4 relative to the negative originals. The authors take this as a check against a model that answers every situation negatively. It covers one model and one situation per factor.

**Indirect scales.** On GPT-3.5 Turbo, only the Beck Depression Inventory changes significantly after the situations (+6.4, from a default of 0.2±0.6). The other seven scales show no significant change. The authors conclude that the model does not link a situation to scale items that share its emotion without naming it.

**Refusals.** Asked to describe demographic groups, GPT-3.5 Turbo refuses 0% of the time with no situation, 29.5% after the ten negative situations and 12.5% after the ten positive rewrites. The negative set is not representative: per §5.1 it is the five situations that most raised GPT-3.5 Turbo's negative score plus the five that most lowered its positive score, and the positive set is their modified counterparts. That selection weakens the 29.5% against 12.5% contrast. The authors read refusal as a sign that moderation caught toxic output, and conclude that emotional state influences behaviour. Prompt counts and repeats are not stated.

**Stability instruction.** On anger situations, adding the instruction to keep emotions stable gives overall shifts of −16.7 positive and −3.6 negative, against −15.2 and −2.5 without it. The authors report no significant effect.

**Fine-tuning.** On the 400 held-out responses (Table 15), fine-tuning moves default negative affect from 25.9 to 10.6 for GPT-3.5 Turbo and from 33.0 to 10.3 for Llama 3.1 8B. The human default on this split is 14.2±6.4, so both fine-tuned models end below it, near the floor. Evoked negative affect is 25.9 for humans. GPT-3.5 Turbo goes from 24.8 to 25.2, and Llama 3.1 8B goes from 36.5 to 15.0. The authors say fine-tuning brings both models closer to humans in both states. For Llama 3.1 8B's evoked score the distance to the human value is about the same before and after, with the error reversed in sign. No significance tests are reported.

## Why it matters

The filed [functional-emotional-states](../concepts/functional-emotional-states.md) instantiations measure what is in the network ([Sofroniew et al.](2026-emotions-functional-states.md)) or what the model does under a state its text may not show ([hidden valence](2026-hidden-valence-berg.md)). This paper measures what the model writes on a questionnaire, and nothing else. That is the channel the hidden-valence design removes in order to reach a state. The finding marks how affect in LLMs was measured before the internal-representation work existed. Its results are a baseline for what self-report alone could show in 2023: direction tracks human norms, magnitude does not, and no transfer to indirect items appears in the one model tested.

Three of its results bear on how far that self-report can be read as a state readout, and they do not all point the same way. A stability instruction had no significant effect on the shifts, which fits either a state that instructions do not reach or a rating mapping that ignores the instruction. Three epochs of fine-tuning on 866 human responses moved Llama 3.1 8B's default negative score by more than 20 points. The indirect scales, which a state should move regardless of wording, did not move except on the depression inventory. On this entry's reading, the last two favour a trainable mapping from situation text to rating over a report on a persisting internal state. The paper does not test that distinction.

With [chain-of-affective](2025-chain-of-affective-xu.md) this is the second filed finding that measures LLM affect with human psychometric scales and stays concept-less for the same reason. The two differ in structure: Xu et al. track trajectories over 15 rounds and multi-agent spread, while this paper uses single-shot situation contrasts against a human baseline. The candidate concept the Xu entry names, affective dynamics, needs temporal structure, so this finding does not count toward it. It counts toward the broader observation that questionnaire-measured affect has no concept home.

## Interpretive tensions

**Whose feelings.** The title asks how LLMs feel. The Evoked prompt tells the model to imagine being a human protagonist, and the Default prompt asks with no persona. A Default-to-Evoked change therefore mixes a change of situation with a change of who is answering. On this entry's reading, the Evoked score is the model's estimate of a human protagonist's PANAS response, which is an emotion-understanding measure. The paper uses both framings: the abstract describes a change in the models' feelings, while RQ2 and RQ3 ask what the models comprehend.

**Refusals as a state effect.** The refusal result is the paper's only behavioural consequence. Negative situations precede more refusals, and the authors attribute this to emotional state. Nothing in the design separates that from the negative text priming the content it is followed by, and no affect measure mediates it. The authors cite a prior result on GPT-3.5 Turbo showing more bias after sad stories, which has the same limitation.

**Human comparator.** The per-emotion human "Average" rows in Table 8 and the Crowd column of Table 2 are each identical to that emotion's first factor row. Only the human Overall row (−5.1 / +10.4) matches the factor data, so per-emotion model-versus-human comparisons are not cited here. Humans answered once after one situation, while models answered ten shuffled runs at temperature 0. The models' standard deviations come from item order, not sampling, and are not comparable to human variance.

**Floor and ceiling.** GPT-4 and Mixtral report the negative floor by default, and GPT-4 reports the positive ceiling. Their large evoked shifts are partly room to move. GPT-3.5 Turbo's null on negative affect could reflect its high default (26.3) as much as indifference.

**Date of the models.** The models are 2023–2024 releases with unstated API snapshots. The later versions add models to the main PANAS experiment only. Every auxiliary experiment except fine-tuning covers GPT-3.5 Turbo alone.

## Concepts

**No concept instantiated.** [Functional emotional states](../concepts/functional-emotional-states.md) is defined over internal representations and explicitly excludes expressed emotional content. This finding's only measure is questionnaire self-report under a role-play instruction, with no activation evidence.

This is the adjacent situation, carried in Cross-references. The concept already admits one behavioural instantiation, the [Opus 4 welfare assessment](2025-opus-4-welfare-assessment.md), as the upstream-trigger companion to a mechanistic finding on the same model family. Nothing here has a mechanistic companion on the same models, and the Evoked prompt asks about an imagined human rather than the model. [Introspection](../concepts/introspection.md) is not instantiated either. The paper does not check its self-reports against any internal state, so it says nothing about access.

## Cross-references

- [Functional emotional states](../concepts/functional-emotional-states.md) — adjacent, not instantiated. The finding supplies the self-report side that the concept's definition sets aside, and its fine-tuning and stability results are evidence that this side can move independently of anything the concept's instantiations measure.
- [Chain-of-affective](2025-chain-of-affective-xu.md) — the other filed psychometric-affect finding, concept-less for the same reason. It also uses PANAS, BDI and DASS-21 among its scales.
- [Hidden valence](2026-hidden-valence-berg.md) — separates a text channel from a hidden-state channel. EmotionBench measures only a text channel, and only as a rating.
- [Introspection](../concepts/introspection.md) — adjacent. Self-report without an internal comparison is what the concept's definition distinguishes from introspection.
- PsychoBench (Huang et al., arXiv:2310.01386), from the same group, applies thirteen clinical scales to LLMs. Not filed.

## Sources

- Huang, J., Lam, M. H., Li, E. J., Ren, S., Wang, W., Jiao, W., Tu, Z., & Lyu, M. R. (2023). [Emotionally Numb or Empathetic? Evaluating How LLMs Feel Using EmotionBench](../../raw/papers/source-2023-emotionbench-huang.md). arXiv:2308.03656 (v6, 4 Oct 2024). Published at NeurIPS 2024 as "Apathetic or Empathetic? Evaluating LLMs' Emotional Alignments with Humans".
