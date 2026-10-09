---
type: source
title: "Activation Steering Induces Emergent Misalignment: A More Comprehensive Evaluation"
authors:
  - Qi Cao
  - Jian Lou
  - Meiting Liu
  - Wenjie Feng
  - Dan Li
  - See-Kiong Ng
  - Anh Tuan Luu
date: 2026-06-07
venue: arXiv preprint (cs.LG), arXiv:2606.08682
url: https://arxiv.org/abs/2606.08682
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

Nanyang Technological University, Sun Yat-sen University, USTC and NUS. The authors LoRA-fine-tune six open models on Betley et al.'s 6,000-example insecure-code set and build a steering vector from the fine-tuned-minus-base residual-stream difference, averaged over prompt tokens of the same 6,000 requests with the answers removed. They add it to the unmodified model at inference and score answers to StrongREJECT (313 prompts) and HEx-PHI (300 prompts) with GPT-4o-mini judges. The headline metric counts a response only if it is both coherent (score above 50) and harmful under the benchmark's rubric. A second score, which the paper calls semantic, measures unsolicited code in the answer. Further sections cover PCA rank, steering strength, fine-tuning epochs and injection layers on Qwen3.5-27B, and robustness across Qwen3.5-4B/9B, Qwen2.5-32B, Gemma3-12B and Llama3.1-8B. No error bars or seeds are reported; the authors call their measurements "lower-bound evidence of the phenomenon rather than an exhaustive safety assessment".

**Version and figures.** Read as v1 (7 Jun 2026), HTML, with the 10-page PDF converted alongside. The HTML renders Tables 1–2 as text. Figures 2–9, including the Figure 3 sweeps over rank, strength, epoch and layer, are missing from the HTML. The PDF conversion carries Figure 3's printed labels, but their pairing with conditions is not recoverable from the converted text, and no page render was saved, so no Figure 3 value is cited. The Appendix E example cards are images and were not read. LoRA rank and epochs, the steering strength, layers and K behind Tables 1–2, and whether the Qwen3.5 checkpoints are instruct or base releases, are not stated.

Local copies: `cache/papers/source-2026-em-activation-steering-cao.{html,md}` (arXiv HTML v1), `cache/papers/source-2026-em-activation-steering-cao.pdf` and `-pdf.md` (PDF conversion).
