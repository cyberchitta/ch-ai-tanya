---
type: source
title: "Model Organisms for Emergent Misalignment"
authors:
  - Edward Turner
  - Anna Soligo
  - Mia Taylor
  - Senthooran Rajamanoharan
  - Neel Nanda
date: 2025-06-13
venue: arXiv preprint (cs.LG)
url: https://arxiv.org/abs/2506.11613
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2506.11613 [cs.LG], v1 submitted 13 Jun 2025 and the only version on the
abs page at the time of reading (2026-10-10); no venue is listed there. The
HTML carries an equal-contribution note whose markers did not survive
conversion; the Contributions section says Turner and Soligo developed the
ideas jointly and co-wrote the paper, and that Taylor built the medical
dataset. No institutional affiliations are printed. Acknowledgements credit
the MATS programme and an Open Philanthropy grant. Models, datasets and code
are released at huggingface.co/ModelOrganismsForEM and
github.com/clarifying-EM/model-organisms-for-EM. Companion to
[Soligo et al. 2025](source-2025-convergent-misalignment-soligo.md), which it
calls parallel work.

The paper builds three GPT-4o-generated datasets of narrowly harmful advice
(bad medical, risky financial, extreme sports) and fine-tunes Qwen2.5,
Gemma-3 and Llama-3.1/3.2 instruct models from 0.5B to 32B on them, with
rank-32 LoRA on all matrices, full SFT, and a single rank-1 LoRA adapter. It
reports misaligned-and-coherent response rates on Betley et al.'s eight
free-form questions and tracks a rank-1 adapter's direction through training
for a rotation that it reads as a phase transition.

All numbers the finding cites are stated in the body text, footnotes, figure
captions or Appendix E tables. Per-dataset and per-model rates in Figures 1,
3, 5 and 6 and the training curves in Figures 7–35 are not cited beyond what
the text states. The introduction places "over 40%" EM in Qwen-14B, while
§3.1 places "close to 40%" on the financial and sport datasets in
Qwen2.5-32B; the finding cites the §3.1 version. The paper does not mention
Mistral models anywhere. The phase-transition behavioural results use
α 64 and learning rate 1e-5 (footnote 6), not the α 256 and 2e-5 used to
demonstrate single-adapter EM in §3.5; §4.1 does not state the settings of
the run whose rotation it plots.

Local copies: `cache/papers/source-2025-em-model-organisms-turner.{html,md}`
(arXiv HTML v1), `cache/papers/source-2025-em-model-organisms-turner-abs.html`
(abs page).
