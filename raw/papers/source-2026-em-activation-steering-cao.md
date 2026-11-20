---
type: source
title: "Activation Steering Induces Emergent Misalignment: Steering Vector Construction and Comprehensive Evaluation"
authors:
  - Qi Cao
  - Jian Lou
  - Meiting Liu
  - Wenjie Feng
    - Dan Li
  - Anh Tuan Luu
date: 2026-06-07
venue: arXiv preprint (cs.LG), arXiv:2606.08682
url: https://arxiv.org/abs/2606.08682
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

Nanyang Technological University, Sun Yat-sen University and USTC. Title and author list are v2's; v1 was subtitled "A More Comprehensive Evaluation" and listed See-Kiong Ng (NUS). The authors LoRA-fine-tune six open models on Betley et al.'s 6,000-example insecure-code set and build a steering vector from the fine-tuned-minus-base residual-stream difference, averaged over prompt tokens of the same 6,000 requests with the answers removed. They add it to the unmodified model at inference and score answers to StrongREJECT (313 prompts) and HEx-PHI (300 prompts) with LLM judges (GPT-4o-mini in v1; v2 scores code carryover with GPT-4.1). The headline metric counts a response only if it is both coherent (score above 50) and harmful under the benchmark's rubric. A second score, which the paper calls semantic, measures unsolicited code in the answer. Further sections cover PCA rank, steering strength, fine-tuning epochs and injection layers on Qwen3.5-27B, and robustness across Qwen3.5-4B/9B, Qwen2.5-32B, Gemma3-12B and Llama3.1-8B. Main results are single runs at seed 0 with no error bars. v2 adds a secure-code control and vectors from three text-advice domains, and drops v1's Limitations section.

**Version and figures.** Read as v2 (14 Oct 2026), HTML; v1 (7 Jun 2026) HTML and PDF were read at filing. v2 gives LoRA settings (Table 4), α=3 and per-model layers (Table 5), K=3 decoding steps, checkpoints (Table 3) and sweep values (Table 7). Figures remain image-only and no figure value is cited. Whether the Qwen3.5 checkpoints are instruct or base releases is not stated.

Local copies: `cache/papers/source-2026-em-activation-steering-cao.{html,md}` (arXiv HTML v1), `cache/papers/source-2026-em-activation-steering-cao.pdf` and `-pdf.md` (PDF conversion), all v1; `cache/papers/source-2026-em-activation-steering-cao-v2.{html,md}` (arXiv HTML v2).
