---
type: source
title: "Characterizing Opinion Evolution of Networked LLMs"
authors:
  - Caleb Probine
  - Yigit Ege Bayiz
  - Filippos Fotiadis
  - Samuel Li
  - Yunhao Yang
  - Ufuk Topcu
date: 2026-06-05
venue: arXiv preprint (cs.MA), arXiv:2606.18276
url: https://arxiv.org/abs/2606.18276
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

University of Texas at Austin study fitting classical opinion-dynamics models (DeGroot, Friedkin–Johnsen, and extensions with a uniform innate-bias term and homophily weighting) to the posting trajectories of 30-agent LLM networks. Agents are one of Llama-3.1-8B, Qwen3-VL-8B-Instruct or Gemma-3-4b-it. Each is assigned one of five stances on climate change, vaccines or gun control and posts on Erdős–Rényi, Chung–Lu and stochastic-block graphs. Each post is turned into a number in [−1, 1] by the difference of its text-embedding-3-small cosine similarity to a pro and an anti reference text, averaged over the agent's last five posts. Models are fitted by least squares on 24 training runs per model–topic pair and scored on 8 held-out runs whose initial-opinion configurations differ from training. The authors' headline is that a term pulling every agent toward one shared opinion carries most of the fit, and that stubbornness and homophily add little.

**Version read.** v1, 5 Jun 2026, the only version listed on the abstract page at fetch (2026-10-10). Authors, date and abstract taken from the abstract page metadata; affiliation from the HTML.

**Citable numbers and where they live.** All numbers cited in the finding come from text or from tables rendered as text in the converted HTML: Table 1 (fitted FJ+Homo+Bias parameters per model and topic), Table 2 (full versus adjacency-based weighting on one graph), Table 5 (out-of-sample errors for six models × three LLMs × three topics) and the A.1.3 / A.2.4 run counts. The per-cell reductions given in the finding (for example Gemma3 gun control 30%, Gemma3 climate −6%) were computed by the filer from Table 5's integral mean-error and Wasserstein-1 columns, FJ against FJ+Bias. They reproduce the text's 81–88% (Llama3.1), 54–62% (Qwen3) and up-to-88% / up-to-67% claims. Figures 1 and 2 are images without values in the converted copy and are not cited.

**Inconsistencies in the source.** §4.1 says Gemma3 "sits between" Llama3.1 and Qwen3 in bias-driven error reduction. Table 5 gives Gemma3 86.5% on vaccines, 30.3% on gun control and −6.4% on climate, so its gun-control gain is below Qwen3's lowest. Table 1 fits Gemma3 climate with a bias weight of 0.34 although adding the bias worsens that cell's held-out error. The topic statements and the pro/anti reference texts used for scoring are not given, so the sign of the fitted bias b cannot be read as a stance.

Local copies: `cache/papers/source-2026-opinion-evolution-probine.{html,md}` (arXiv HTML v1 and its markitdown conversion).
