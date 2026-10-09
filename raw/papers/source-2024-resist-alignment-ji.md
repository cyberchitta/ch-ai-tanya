---
type: source
title: "Language Models Resist Alignment: Evidence From Data Compression"
authors:
  - Jiaming Ji
  - Kaile Wang
  - Tianyi Qiu
  - Boyuan Chen
  - Jiayi Zhou
  - Changye Li
  - Hantao Lou
  - Juntao Dai
  - Yunhuai Liu
  - Yaodong Yang
date: 2024-06-10
venue: ACL 2025 (Long Papers), pp. 23411–23432; arXiv preprint
url: https://arxiv.org/abs/2406.06144
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2406.06144. v1 submitted 10 Jun 2024 as "Language Models Resist
Alignment", with eight authors (no Juntao Dai or Yunhuai Liu); v6 (read) 23 Sep
2025, retitled with the subtitle and ten authors. Published at ACL 2025 main
(DOI 10.18653/v1/2025.acl-long.1141). Peking University Institute for AI and
School of Computer Science; Yaodong Yang also lists the Beijing Academy of
Artificial Intelligence. Table 1 and the main experiments are already in v1.
The appendix ablations (preference-optimisation algorithms, the KL-to-base
metric in Table 3, reversed fine-tuning direction, and TinyLlama checkpoints
at 0.1T–1.0T) are not in v1.

The paper has a theoretical part and an empirical part. The theory models
training as joint lossless compression of datasets, under assumptions of
binary tokens, disjoint datasets and a Pareto mass distribution. It derives
that under a small perturbing fine-tune, the change in normalised compression
rate on the alignment dataset is larger than on the pretraining dataset by a
factor on the order of their size ratio (Theorem 4.2, stated as Θ(k)), and analogises this to springs in
series. The empirical part fine-tunes base models, not released chat models.
Resistance tests whether training an earlier SFT checkpoint on a later
checkpoint's outputs gives higher loss than the reverse, on Llama2-7B,
Llama2-13B and Llama3-8B with Alpaca, TruthfulQA and BeaverTails. It does in
all 27 comparisons of Table 1. Rebound fine-tunes Llama2-7B and Gemma-2B on
1,000–10,000 positive (IMDb sentiment, BeaverTails safe) examples and then on
100–2,000 negative ones. Rebound by model size uses Qwen at 0.5B, 4B and 7B,
and rebound by pretraining data uses TinyLlama checkpoints.

The rebound, size and pretraining-data results are shown only as curves
(Figures 4–6, 8–10) and heatmaps (Figure 7) with no numbers in the text, so
none of their values is cited. Table 3 is the only printed rebound measure.
It gives the KL from base after safety fine-tuning and the unsafe-example
count needed to bring KL to the base model below 0.01, for Llama2-7B and
Gemma-2B. The authors list as limitations the Pareto assumption, no validation
across the full pretraining-to-alignment lifecycle, and that quantifying
whether elasticity intensifies with parameters and data is future work.

Local copies: `cache/papers/source-2024-resist-alignment-ji.{html,md}` (v6)
and `cache/papers/source-2024-resist-alignment-ji-v1.{pdf,md}`.
