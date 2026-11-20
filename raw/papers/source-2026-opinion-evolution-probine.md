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

University of Texas at Austin study fitting classical opinion-dynamics models (DeGroot, Friedkin–Johnsen, and extensions with a uniform innate-bias term and homophily weighting) to the posting trajectories of 30-agent LLM networks. Agents are one of Llama-3.1-8B, Qwen3-VL-8B-Instruct or Gemma-3-4b-it. Each is assigned one of five stances on climate change, vaccines or gun control and posts on Erdős–Rényi, Chung–Lu and stochastic-block graphs. Each post is turned into a number in [−1, 1] by the difference of its embedding's cosine similarity to a pro and an anti reference text (StanceAware-SBERT in v2; text-embedding-3-small in v1), taken as the agent's last post in each time bin (v1 averaged the last five posts). Models are fitted by least squares on 24 training runs per model–topic pair and scored on 8 held-out runs whose initial-opinion configurations differ from training. The authors' headline is that a term pulling every agent toward one shared opinion carries most of the fit, and that stubbornness and homophily add little.

**Version read.** v2, 10 Oct 2026. v1, 5 Jun 2026, was read at filing, when it was the only version listed (fetched 2026-10-10, hours before v2 was posted); the entry was revised against v2 on 2026-11-20. v2 re-scores all the data, so every figure differs from v1's. Authors, date and abstract taken from the abstract page metadata; affiliation from the HTML.

**Citable numbers and where they live.** All numbers cited in the finding come from v2's text or from tables rendered as text in the converted HTML: Table 2 (fitted parameters per model and topic), Table 3 (full versus adjacency-based weighting on two graphs), Table 7 (out-of-sample errors for eight models × three LLMs × three topics), Table 10 (the 60-agent check) and the A.1.3 / A.2.4 run counts. The per-cell reductions given in the finding were computed from Table 7's integral mean-error and Wasserstein-1 columns, FJ against FJ+Bias, and recomputed by an independent reviewer. They reproduce the text's 81–88% (Llama3.1) and 56–66% (Qwen3). Figures are images without values in the converted copy and are not cited.

**Inconsistencies in the source.** §4.1 says Gemma3's climate error rises slightly; in Table 7 its integral mean error falls 14% and its Wasserstein-1 rises 12%. §4.1 says homophily changes error by at most a few percent; Table 7 shows 10–15% in five cells without the bias term. The topic statements and the pro/anti reference texts used for scoring are not given, so the sign of the fitted bias b cannot be read as a stance.

Local copies: `cache/papers/source-2026-opinion-evolution-probine.{html,md}` (arXiv HTML v1 and its markitdown conversion); `cache/papers/source-2026-opinion-evolution-probine-v2.{html,md}` (v2).
