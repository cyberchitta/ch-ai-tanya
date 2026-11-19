---
type: source
title: "Functional Welfare for AI Safety"
authors:
  - Rikhil Jhaveri
  - Jamie Johnson
  - Punya Syon Pandey
  - David Demitri Africa
date: 2026-10-15
venue: arXiv preprint (arXiv:2610.22460 [cs.AI])
url: https://arxiv.org/abs/2610.22460
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2610.22460, v1 15 Oct 2026, the only version on the abs page when
checked on 2026-11-19, and the one read (arXiv HTML). Affiliations listed are
University College London, ERA, the University of Toronto and the University
of Cambridge. Compute was funded by BlueDot Impact. No code or data release is
stated. Local copies:
`cache/papers/source-2026-functional-welfare-jhaveri.{html,md}` and the abs
page `source-2026-functional-welfare-jhaveri-abs.html`.

Part position paper, part experiment. Sections 2–5 argue three claims: that
"functional welfare" (the authors' term, adapted from Han et al. and Ren et
al.) already arises naturally and will grow more robust; that it should be
treated as a safety variable in evaluation, monitoring and post-training; and
that it can be studied empirically, for which they propose three tests
(convergence across indicators, prediction of behaviour outside the inducing
setting, and fine-tuned versus base comparison on identical histories).
Section 6 applies the tests to Gemma-3-27B-Instruct: repeated rejection with
no steering, five indicator families, a held-out misbehaviour battery,
steering controls and five LoRA interventions. The authors' own scorecard
(Table 6) rates the first two tests partial and the third passed.

Reading notes. The wiki's finding files the Section 6 measurements only. The
survey table (Table 1) and Sections 3–4 restate other papers' results and are
not checked here. Appendix B lists further interventions (persona prompts,
many-shot equanimity, welfare-vector steering, discouraged narration,
self-report SFT/DPO), evaluated on an earlier 80-task battery with a Qwen3-8B
judge (self-report SFT also on the rejection battery); their results are not
reported in the paper.
