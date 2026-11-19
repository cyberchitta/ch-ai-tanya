---
type: source
title: "Evaluation Awareness in Language Models: Representation, Verbalization, and Control"
authors:
  - Farzaneh Heidari
  - Amin Memarian
  - Guillaume Rabusseau
date: 2026-08-22
venue: arXiv preprint (arXiv:2608.21766 [cs.CL])
url: https://arxiv.org/abs/2608.21766
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2608.21766, v1 22 Aug 2026, the only version listed on the abstract page
when fetched (2026-11-19) and the one read (arXiv HTML). Code is linked from
the abstract at github.com/evaluation-awareness/evaluation-awareness; it was
not cloned or read. Local copies:
`cache/papers/source-2026-eval-awareness-heidari.{html,md}`.

An empirical study of evaluation awareness in six open-weight models
(Qwen3-8B, Qwen3-32B, Olmo3-7B, Olmo3-32B, Gemma4-31B, Llama-3.3-Nemotron-49B)
and the Olmo3 Base, SFT, DPO and Think checkpoints. A mean-difference
direction from 16 contrastive prompt pairs (borrowed from Hua et al. 2025) is
used three ways: as a probe separating benchmark prompts from WildChat
prompts, as a per-prompt score compared with a GPT-5.4 judge's rating of
verbalized evaluation awareness, and as a steering vector.

Reading notes. Every number the finding cites is stated in the paper's prose or
in a table. Per-layer AUROC curves, per-model best-layer AUROC values, and the
per-stage steering peaks of Figure 6 appear only in figures, which were not
saved; they are not cited. The steering peaks for the four final models
(about 0.7, 0.2 and 1.5) are the paper's own approximate prose readings of
Figure 5. The six-model verbalization table's Olmo3 rows equal the Think rows
of the stage table, so the "Olmo3" models in the six-model comparisons are
the Think checkpoints.
