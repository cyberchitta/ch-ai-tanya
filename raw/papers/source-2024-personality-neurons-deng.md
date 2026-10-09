---
type: source
title: "Neuron-based Personality Trait Induction in Large Language Models"
authors:
  - Jia Deng
  - Tianyi Tang
  - Yanbin Yin
  - Wenhao Yang
  - Wayne Xin Zhao
  - Ji-Rong Wen
date: 2024-10-16
venue: ICLR 2025 (poster); arXiv preprint (cs.CL)
url: https://arxiv.org/abs/2410.12327
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2410.12327, v1 submitted 16 October 2024, v2 10 June 2026; read as v2 (arXiv HTML), checked against the ICLR 2025 proceedings PDF and v1. Five authors are at Renmin University of China (Gaoling School of AI; one at the Institute of Statistics and Big Data), and Tianyi Tang is at Tongyi Lab. The ICLR 2025 poster status is confirmed by the OpenReview search record (forum LYHEY783Np, venue "ICLR 2025 Poster") and the ICLR 2025 proceedings page, both cached. The paper builds PersonalityBench, a set of ChatGPT-generated Big Five situational questions paired with trait descriptions: 180,000 for locating neurons and about 450 (about 90 per trait, built from SocialIQA) for evaluation. It locates feed-forward neurons whose firing rate differs by more than 10 points between the model prompted with one pole of a trait and the model prompted with the other. At inference it raises the target pole's neurons and clamps the opposite pole's neurons, with no persona prompt and no weight change. Trait expression in open-ended answers is scored by ChatGPT on a 1–5 scale per pole, with a five-judge human ranking as a second measure. The comparison against LoRA fine-tuning is run on Llama-3-8B-Instruct only.

**Versions.** v1 (the ICLR review version) has four baselines and a third evaluation: alignment to 300 individuals' IPIP-NEO-300 questionnaire answers, with the baseline numbers taken from Zhu et al. 2024. The ICLR camera-ready and v2 drop that questionnaire evaluation and add ActAdd as a fifth baseline. Table 1 and Table 2 values for the other methods are identical in v1, the camera-ready and v2. The finding cites only the camera-ready / v2 results.

**Citable numbers.** Every value in the finding is from Tables 1–3 and 6–9 or the body text. The 36,000-per-trait and ~90-per-trait figures are the paper's (§3.1). The per-trait SFT gaps and the per-model counts of where NPTI beats the prompt baselines are the filer's arithmetic from Tables 1 and 3. The neuron count ("around 20,000 in LLaMA-3-8B") is the paper's; its wording does not say per trait or per pole. Figures 3–7 (ablations, layer distribution, single-neuron histogram) have no exact-value tables, so no figure value is cited. The authors' text claims about them are attributed as claims. The SFT baseline's training data is not described in any version, and the decoding settings for evaluation are not stated. The judge is named only as "ChatGPT". The PersonalityBench questions were generated with gpt-4o-2024-08-06.

Local copies: `cache/papers/source-2024-personality-neurons-deng.{html,md}` (arXiv HTML v2), `cache/papers/source-2024-personality-neurons-deng-v1.{pdf,md}` (arXiv v1), `cache/papers/source-2024-personality-neurons-deng-iclr.{pdf,md}` (ICLR 2025 proceedings PDF), `cache/papers/source-2024-personality-neurons-deng-iclr-abs.html` (proceedings page), `cache/papers/source-2024-personality-neurons-deng-openreview.json` (OpenReview search record). Code and data: github.com/RUCAIBox/NPTI (not fetched).
