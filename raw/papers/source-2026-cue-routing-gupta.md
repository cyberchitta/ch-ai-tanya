---
type: source
title: "Many Biases, One Circuit: Post-Training Tunes a Pretrained Cue-Routing Mechanism"
authors:
  - Prakhar Gupta
  - Terry Jingchen Zhang
  - Zhijing Jin
date: 2026-10-16
venue: arXiv preprint (cs.CL)
url: https://arxiv.org/abs/2610.22937
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2610.22937, v1 16 Oct 2026, the only version on the abs page when
checked on 2026-11-19. Authors are at the University of Michigan, the Jinesis
Lab (University of Toronto and Vector Institute), Oxford, EuroSafeAI and
MPI-IS Tübingen. On the multiple-choice items of the BCT benchmark, the paper
uses activation patching, weight copies, short LoRA fine-tunes, activation
steering and attention-pattern swaps between successive public post-training
checkpoints (Tulu-3, OLMo-2) to trace where cue-following (suggested-answer
sycophancy and three related cue biases) sits in the model and which training
stage changes it. Code: https://github.com/prakharg55/bias_circuit (not
cloned; not needed for the entry).

**Numbers.** Every number the finding cites is printed in body text or in a
table: §§2–7, Appendix A (Table 1), C.1 (Table 2), C.2, C.3, C.4 (Table 3),
C.5, D.1, D.2 (Table 4), D.3, D.4, E.1 (Tables 5 and 6), E.4, E.5, F.1, F.2,
G.1–G.3, I.1–I.3. No value is read off a figure, and no figure image is
cached. Appendix H (monitor, margin curve, checkpoint fingerprint, API models)
is, by the authors' statement, support for no main-text claim, and the finding
does not cite it.

Local copies: `cache/papers/source-2026-cue-routing-gupta.{html,md}` (arXiv
HTML v1), `cache/papers/source-2026-cue-routing-gupta-abs.html` (abs page).
