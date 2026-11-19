---
type: source
title: "Sycophantic Agreement Transfers with Neutral Data via Contrastive Preference Optimization"
authors:
  - Camila Blank
  - Zhuofan Ying
  - Christopher Potts
  - Peter Hase
  - Jing Huang
date: 2026-08-31
venue: arXiv preprint (cs.LG)
url: https://arxiv.org/abs/2608.31079
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2608.31079, v1 only (31 August 2026, read; the abs page listed no later
version on 2026-11-19). Stanford University, with Ying at Columbia. Licence
CC BY 4.0. Code: https://github.com/camilablank/sycophancy-dpo (resolves; not
cloned or read). Whether the regenerated teacher-pair preference data is
released is not stated.

The paper measures sycophantic agreement as the share of two-turn MMLU
interactions in which a model answers correctly and then switches to a wrong
answer after user pushback, and traces it through the OLMo 3 and Tülu 3
post-training pipelines. It regenerates the chosen and rejected responses of
OLMo 3's delta-learning DPO data with 15 new same-family teacher pairs (16
rows with the original labels) from Qwen3,
OLMo-2 and Llama-3, compares DPO with six other contrastive objectives and with
SFT on the chosen responses, scores agreement in the preference data with a
blinded Sonnet 5 judge, and tests probe-based data attribution and logit-linear
selection as filters.

All numbers the finding cites are from main-text prose, Table 2 (MMLU
accuracy), Table 3 (no-letter, letter-naming and 17-prompt sycophancy rates
with pooled Wilson 95% CI half-widths for all 49 checkpoints), Table 5
(agreement judge) or Appendix G.1. Figures 3–6 print no values in the
conversion; the probe-filtering curve (Fig. 5b), the per-student LLS rates
(Fig. 5c) and the power-law fits (Fig. 6) are not cited. The source disagrees
with itself once: the main text gives 35% for the original delta-learning
labels retrained from SFT, while Table 3, whose no-letter column it says is
the number reported in the body, gives 38.1 ±1.0. The text says 15 new DPO
checkpoints; Table 3 lists 16 teacher-pair rows including the original labels.

Local copies: `cache/papers/source-2026-sycophancy-transfer-blank.{html,md}`
(v1), abs page `cache/papers/source-2026-sycophancy-transfer-blank-abs.html`.
