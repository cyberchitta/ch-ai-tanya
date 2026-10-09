---
type: source
title: "Emotionally Numb or Empathetic? Evaluating How LLMs Feel Using EmotionBench"
authors:
  - Jen-tse Huang
  - Man Ho Lam
  - Eric John Li
  - Shujie Ren
  - Wenxuan Wang
  - Wenxiang Jiao
  - Zhaopeng Tu
  - Michael R. Lyu
date: 2023-08-07
venue: arXiv preprint; NeurIPS 2024 Main Conference Track, as "Apathetic or Empathetic? Evaluating LLMs' Emotional Alignments with Humans" (DOI 10.52202/079017-3077)
url: https://arxiv.org/abs/2308.03656
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2308.03656. v1 submitted 7 Aug 2023; its abstract reports five models,
naming GPT-4 and LLaMA 2 as examples (submission history and v1 abstract cached
as `cache/papers/source-2023-emotionbench-huang-abs.html` and `-v1abs.html`); v6 (read) 4 Oct 2024 adds LLaMA-3.1-8B-Instruct and
Mixtral-8x22B-Instruct for seven. The NeurIPS 2024 proceedings carry the paper
under a different title with the same author list and the v6 abstract; the
proceedings PDF was not read. Affiliations: CUHK, Tencent AI Lab, Tianjin
Medical University. Dataset, human responses and code:
https://github.com/CUHK-ARISE/EmotionBench.

Collects 428 situations from 18 emotion-appraisal papers, grouped into 36
factors under eight negative emotions. The model completes the PANAS (10–50 per
component) with no situation ("Default"), then again after being told to imagine
being the situation's protagonist ("Evoked"). Runs use temperature 0 and ten
item orders per situation. The same procedure on 1,266 Prolific respondents
provides the human reference. Further experiments: positive rewrites of one
situation per factor (GPT-3.5-Turbo); eight indirect emotion scales (AGQ,
DASS-21, BDI-II, FDS, MJS, GASP, FSS-III, BFNE; GPT-3.5-Turbo); refusal rates
when describing demographic groups after negative or positive situations; an
instruction to keep emotions stable; and fine-tuning GPT-3.5-Turbo and
LLaMA-3.1-8B (LoRA) on 866 of the human responses.

Reading notes. No OpenAI model snapshot is stated. The Conclusion still describes an
evaluation of five OpenAI and Meta models, left over from v1. In Table 8 (human
results) and the Crowd column of Table 2, every per-emotion "Average" row is
identical to that emotion's first factor row, not the mean of its factors; the
human "Overall" row does equal the mean of all 36 factor rows (−5.1 / +10.4).
The model tables' "Overall" rows do not equal the plain mean of their factor or
emotion rows, and the aggregation is not stated. Table 15's vanilla GPT-3.5
default negative score (25.9±0.3) does not match Table 2 (26.3±2.0). The §4.1
claim that all LLMs show reduced negative affect in the Jealousy-3 (material
possession) situation is contradicted for GPT-4 and Mixtral by Tables 9 and 11.
