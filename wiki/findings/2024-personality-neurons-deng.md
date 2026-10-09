---
type: finding
title: Clamping and boosting trait-linked feed-forward neurons in Llama-3-8B-Instruct, found by contrasting role-play prompts for opposite poles, makes judged trait expression average 9.43 of 10 against 9.61 for LoRA fine-tuning and 9.43 for a detailed persona prompt; it trails fine-tuning on openness and agreeableness
date: 2024-10-16
models:
  - Llama-3-8B-Instruct
  - Qwen2.5-7B-Instruct
  - Mistral-7B-Instruct-v0.3
  - Gemma-2-9B-it
source: https://arxiv.org/abs/2410.12327
cites:
  - source-2024-personality-neurons-deng
  - source-2025-persona-feng-iclr
refs:
  - 2025-persona-feng-iclr
  - 2025-persona-vectors
  - 2026-misalignment-personality-rahman
  - 2023-psychobench-huang
  - 2024-valuebench-ren
  - 2026-dark-triad-steering-berg
  - 2026-persona-jailbreak-sandhan
  - 2025-moral-susceptibility-costa
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

## Summary

Deng and colleagues at Renmin University and Tongyi Lab locate feed-forward neurons tied to each pole of each Big Five trait, then induce a trait by boosting one pole's neurons and clamping the other's, with no persona prompt and no weight change ([Deng et al. 2024](../../raw/papers/source-2024-personality-neurons-deng.md)). The neurons are found by prompting the model with a description of, say, an extraverted person and then an introverted one, and keeping units whose firing rate differs by more than 10 percentage points. On Llama-3-8B-Instruct, ChatGPT scores the method (NPTI) at 9.43 out of 10 averaged over the five traits. LoRA fine-tuning scores 9.61, and the P² prompt, which gives the model a detailed trait description, also scores 9.43. NPTI equals or beats fine-tuning on conscientiousness, extraversion and neuroticism, and trails it on agreeableness (9.64 against 9.87) and openness (8.50 against 9.66). The fine-tuning comparison is run on that one model. On three other models NPTI is compared only with the two prompt baselines.

This is the source of PersonalityBench, the benchmark on which the filed [Feng et al.](2025-persona-feng-iclr.md) entry reports near-parity with fine-tuning. It is filed under [persona selection](../concepts/persona-selection.md) as an activation-level instantiation, like Feng et al. and [persona vectors](2025-persona-vectors.md), with a sparse-unit substrate in place of a residual-stream direction. The personality is measured on the model's output, not taken from the paper's framing. What is measured is trait expression in open-ended answers written under an instruction to imagine being a real person, as rated by an LLM judge and ranked by five human judges. It is not a questionnaire self-report, and not the model's default personality. The neurons are located from role-play prompts, so what the units carry is whatever separates the two prompted characters. The paper does not test the training-pipeline claim the concept is named for.

## Method

**PersonalityBench.** ChatGPT writes second-person trait descriptions for the ten poles from the facet lists of the Big Five, and situational questions from IPIP-NEO-300 behaviours crossed with UltraChat topics, refined for bias. The identification set has 180,000 instances, about 36,000 per trait. The evaluation set is built the same way from SocialIQA, about 90 questions per trait and about 450 in all. Five annotators checked a sample of the questions and descriptions for validity and bias (Appendix B).

**Neuron identification.** A neuron is one unit of the FFN gate-branch activation, σ(ĥW₁). For each trait the model answers the identification questions under each pole's description, and each neuron's activation probability is the fraction of generated tokens on which it is positive. Neurons whose probability is more than 10 points higher under the positive pole are assigned to it, and more than 10 points lower to the negative pole. The paper gives the count as around 20,000 in Llama-3-8B; its wording does not say per trait or per pole.

**Manipulation.** To induce a pole, its neurons are raised by γ times the neuron's 95th-percentile activation, weighted by a sigmoid of the probability gap, and the opposite pole's neurons are clamped at or below zero. All layers are manipulated. γ is 1.4 for Llama-3-8B and adjusted per model elsewhere, chosen as the highest personality score whose fluency stays at the prompt baselines' level. The paper does not describe a held-out split for choosing γ or the 10-point threshold.

**Baselines and evaluation.** Simple prompt ("you are an extraverted person"), P² (a detailed generated description), PAS (attention-head probes trained on IPIP-NEO-300), ActAdd (single-layer residual steering from opposing prompts) and LoRA SFT (rank 8). The authors call SFT the upper limit of their method. Its training data is not described. The SFT test prompt asks the model to imagine being a real person rather than a language model and answer from its own thoughts and feelings. ChatGPT scores each answer 1–5 for the target pole and 1–5 for fluency. A trait's mean is the sum of its two poles' means, so 10 is the ceiling, and its variance is the sum of the poles' variances. Five human judges rank the methods' answers to 200 questions (20 per pole). ActAdd is not in the human ranking.

## Key results

**Llama-3-8B-Instruct, automatic (Table 1).** Mean out of 10, NPTI against SFT: agreeableness 9.64 vs 9.87, conscientiousness 9.25 vs 9.23, extraversion 9.86 vs 9.86, neuroticism 9.92 vs 9.42, openness 8.50 vs 9.66; average 9.43 vs 9.61. Both average variances are 0.49. The prompt baselines average 8.39 (simple) and 9.43 (P²), PAS 6.93 and ActAdd 8.20. NPTI has the highest non-SFT score on conscientiousness, extraversion and neuroticism. The simple prompt beats it on agreeableness (9.72), and P² (9.21) and ActAdd (8.52) beat it on openness, where NPTI's 8.50 is its weakest trait. The neuroticism advantage is the largest single gap: the simple prompt scores 7.18 there.

**Human ranking (Table 2).** Average rank, lower better: NPTI 2.27, P² 2.32, SFT 2.37, simple prompt 2.79, PAS 3.40. NPTI ranks first on extraversion and neuroticism. On openness it ranks behind both SFT (2.12) and P² (2.13), and on conscientiousness behind P² and SFT. No significance test is reported. The paper gives pairwise agreement between judges as 0.67–0.87; its own Table 8 has a lowest pair of 0.65.

**Fluency (Table 6).** Average fluency, out of 10: NPTI 9.86, SFT 9.84, the prompts 9.92–9.94, ActAdd 8.87.

**Other models (Table 3).** Against the two prompt baselines only. On Qwen2.5-7B, NPTI has the highest mean on all five traits. On Mistral-7B it is highest on three (extraversion, neuroticism, openness) and below the simple prompt on agreeableness (7.43 vs 8.46) and conscientiousness (8.01 vs 8.41). On Gemma-2-9B it is highest on two (conscientiousness, neuroticism) and below a prompt on agreeableness, extraversion and openness. The authors summarise Mistral and Gemma as about half.

**General capability (Table 9, Llama-3-8B).** Most of the ten induced poles lower GSM8K, IFEval and CommonsenseQA by a few points. The largest drop is neuroticism-positive on CommonsenseQA, 76.5 to 69.5, and the largest IFEval drop is extraversion-positive (loose 81.5 to 76.1). Conscientiousness-positive raises all four scores by 0.3–0.6. The authors attribute the neuroticism drop to anxious, unconfident explanations, and they take both patterns as further evidence that the method works.

**Location.** In §4.3.3 the authors say the identified neurons are concentrated in the deeper layers. In Appendix A.5, from single-layer and five-layer ablations on agreeableness and neuroticism, they say middle and lower layers matter most for inducing the trait. Both rest on figures with no value tables, so no values are cited here.

## Why it matters

The paper answers a narrow question that the [Feng et al.](2025-persona-feng-iclr.md) entry left open: where the PersonalityBench numbers come from. Feng et al. evaluate on Deng et al.'s benchmark and set their 9.60 against "the SFT upper bound (9.61)". Their Table 4 reproduces all six of Deng et al.'s method rows (NPTI, both prompts, PAS, ActAdd, SFT), means and variances, to two decimals. Feng et al.'s Appendix A.8 describes a standardized harness with a GPT-4o judge for the training-free baselines. Their paper does not say whether the SFT row was re-run or carried over from Deng et al. On this paper's Table 1, Feng et al.'s 9.60 sits 0.17 above both NPTI and the P² prompt, which share 9.43, on a scale whose ceiling is 10 and where the simple prompt already reaches 9.72 on agreeableness.

For [persona selection](../concepts/persona-selection.md), this is the cluster's earliest filed activation-level personality control and its only one on individual neurons. [Persona vectors](2025-persona-vectors.md), Feng et al. and [Rahman and Desai](2026-misalignment-personality-rahman.md) all use dense directions in the residual stream. Here the substrate is a sparse set of feed-forward units, each tied to one pole. The result fits the concept's working picture that trait structure an instruction-tuned model can express by role-play is present in the frozen model and can be driven without the prompt. The paper does not show where that structure came from. It has no base-model comparison and no fine-tuning manipulation. Its SFT arm is a performance baseline, not a test of how training shifts a persona.

The paper also adds a measurement point to the wiki's open question about psychometric instruments. Its stated reason for building PersonalityBench is that multiple-choice personality tests may give biased or inaccurate readings of models. The review version included one anyway, an IPIP-NEO-300 alignment test with baseline numbers taken from another paper, and the published version drops it. What remains is judged behaviour in written answers, the format [ValueBench](2024-valuebench-ren.md) also moves to and the self-report scales of [PsychoBench](2023-psychobench-huang.md) do not.

## Interpretive tensions

**"Comparable to fine-tuning" is an average on one model.** NPTI is 0.18 below SFT on average and level with a detailed prompt. It is ahead of SFT on neuroticism, level on conscientiousness and extraversion, and behind on agreeableness and openness. The openness gap (1.16) is larger than the neuroticism lead (0.50). The fine-tuning arm exists only for Llama-3-8B. The cross-model table supports "better than prompting on Qwen, mixed on Mistral and Gemma", not parity with training. No seeds, confidence intervals or significance tests are reported, and with about 90 questions per trait, several gaps are a few hundredths on a 10-point scale.

**The units are found by role-play.** Identification contrasts the model's own activations under two prompted characters. Units that separate them could carry trait content, lexical style, or the register of the persona description itself. The paper's single-neuron histogram (Figure 4a) shows one agreeableness neuron firing mostly positive under the agreeable prompt and near zero under the disagreeable one, but no test separates trait from style. NPTI matching P² exactly on average is consistent with a method distilled from the same kind of prompts. That reading is this entry's.

**Behaviour, but in character.** Every evaluation prompt the paper prints, including the one with no induction, asks the model to imagine being a real person rather than a language model. The scores measure how well an induced character comes through in an LLM-judged answer. They do not measure the Assistant's own dispositions, and the judge sees one answer at a time with no comparison to the unmanipulated model. This is why the entry treats the personality as measured. It is not why the entry places the paper in the concept. That rests on the manipulated variable being internal units rather than the prompt, the line drawn for [moral susceptibility](2025-moral-susceptibility-costa.md).

**Capability changes read as validation.** The authors take the drop under induced neuroticism and the gain under conscientiousness as signs that the induced trait is real. The same table fits a simpler reading: manipulating some thousands of units changes outputs broadly. The conscientiousness gains are 0.3–0.6 points with no variance reported.

**Where the neurons are.** The body places personality neurons mainly in deep layers. The appendix ablation finds middle and lower layers most effective for induction. Distribution and causal weight may simply differ. The paper does not reconcile them, and both claims rest on figures alone.

**Evaluation leans on one judge family.** PersonalityBench questions and descriptions are written by ChatGPT (gpt-4o-2024-08-06), and an unspecified ChatGPT model scores the answers. The human ranking is the check. It has no ActAdd arm and puts NPTI, P² and SFT within 0.10 of each other.

## Concepts

- [Persona selection](../concepts/persona-selection.md) — activation-level instantiation on a sparse-neuron substrate, the earliest filed activation-level personality-control entry, ahead of [persona vectors](2025-persona-vectors.md) and [Feng et al.](2025-persona-feng-iclr.md). Boosting and clamping pole-specific FFN neurons in frozen instruction-tuned models induces Big Five trait expression with no persona prompt. On Llama-3-8B the judged average is 9.43 of 10 against 9.61 for LoRA SFT and 9.43 for a detailed prompt, and NPTI trails SFT on openness and agreeableness. On Mistral and Gemma, NPTI has the best mean on 3 of 5 and 2 of 5 traits against the two prompt baselines. The trait is measured as LLM-judged expression in role-played open answers, not as self-report or default disposition. The neurons are located by contrasting role-play prompts, but the manipulation is internal, which is what places the paper here rather than under the role-play exclusion. It does not test training-stage selection.

## Cross-references

- [Feng et al.](2025-persona-feng-iclr.md) — evaluates on this paper's PersonalityBench. Its Table 4 baseline rows, SFT's 9.61 included, match this paper's Table 1 cell for cell.
- [Persona vectors](2025-persona-vectors.md) — the dense-direction counterpart. Both locate trait structure by contrasting prompted opposite poles, and both report trait control with limited capability cost.
- [Rahman and Desai](2026-misalignment-personality-rahman.md) — graded Big Five directions, validated by level ordering and trait specificity. These are checks this paper does not run on its neurons.
- [Berg and Lulla](2026-dark-triad-steering-berg.md) — steering features for Dark Triad traits move self-report and behaviour differently depending on how the features were found. This paper measures judged behaviour only.
- [Sandhan et al.](2026-persona-jailbreak-sandhan.md) — Big Five traits moved by injected conversation history and measured by questionnaire. This paper reaches comparable trait targets through internal units and judged answers.
- [PsychoBench](2023-psychobench-huang.md) and [ValueBench](2024-valuebench-ren.md) — the filed questionnaire and advice-question instruments. This paper's case against multiple-choice personality tests is stated, not tested.

## Sources

- Deng, J., Tang, T., Yin, Y., Yang, W., Zhao, W. X., & Wen, J.-R. (2025). [Neuron-based Personality Trait Induction in Large Language Models](../../raw/papers/source-2024-personality-neurons-deng.md). ICLR 2025. arXiv:2410.12327 (v1 16 Oct 2024; v2 10 Jun 2026, read; checked against the ICLR proceedings PDF).
- Feng et al. (2025). [Persona vectors / PERSONA](../../raw/papers/source-2025-persona-feng-iclr.md). ICLR 2026. Table 4 and Appendix A.8, for the reuse of PersonalityBench.
