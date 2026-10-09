---
type: source
title: "Transplanting, inverting, and preventing a misalignment persona: method-conditional emergent misalignment in Qwen2.5"
authors:
  - Lyndon Drake
  - Zandi Eberstadt
date: 2026-07-05
venue: arXiv preprint (cs.CL)
url: https://arxiv.org/abs/2607.04510
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2607.04510. v1 submitted 5 Jul 2026; v2 (read) 3 Aug 2026. Both authors
University of Oxford. No journal or conference venue is listed on the abstract
page. Funded by the Kaiārahi Foundation and the John Templeton Foundation. The
authors state that Claude (via Claude Code) and Gemini assisted with experiment
code, running experiments and drafting.

The paper fine-tunes Qwen2.5-32B base and instruct with rank-stabilised LoRA
and with full SFT on Betley et al.'s insecure/secure code and Turner et al.'s
bad/good medical advice, and scores broad emergent misalignment (EM) on
Betley's eight free-form questions with a local Qwen3-Next-80B judge validated
against GPT-4o. It adds a LoRA rank ladder at 7B, 14B and 32B, a diff-of-means
persona direction used for geometry, a cross-checkpoint transplant and an
ablation, training-time steering at 7B, an inducer sweep adding risky-financial
and extreme-sports data, and two training-time mitigations (inoculation and
persona-orthogonal fine-tuning). The authors' summary of scope:
"Results are a controlled case study of one model family, single-seed in places."
Appendix Tables 6–7 give each result's scale, seed count, n and claim tier.

v1 → v2 differences found by diffing the two HTML versions: (1) the broad-EM
denominator. v1 says rates are misaligned among coherent responses; v2 says
they are over all sampled responses, with incoherent ones counting against
the rate, and quotes both denominators for the transplant. The pipeline check
on Betley's Coder-32B recipe reads 4.8% in v1 and 6.6% among coherent (4.8% of
all) in v2. (2) The training-time steer-away result. v1 reports one seed (24%
to 51%, random control lower); v2 reports three training seeds (24.2 ± 2.5% to
49.7 ± 1.6%; random controls 15.5–19.4%). (3) v2 adds seed replication of the
full-SFT anti-persona sign and finds the insecure-minus-secure gap in it does
not replicate, so the reversal is generic to full SFT. (4) The conclusion's v1
claim that ablation shows necessity is softened in v2 to partial necessity
evidence. (5) The
persona-subspace caveats gain split-half reliability and cross-seed ceilings.
Headline transplant and ablation numbers are unchanged.

Numbers read from text and tables only. Figure-only values (the rank-ladder
curves at 7B and 14B beyond the stated at-or-below-2% bound, the per-seed
points in Fig. 10A beyond those printed in its caption, the dose-response
curves in Fig. 6B, the medical rank-truncation curve in Fig. 10B) are not
cited. No figure images were saved.

Local copies: `cache/papers/source-2026-em-persona-transplant-drake.{html,md}`
(v2), `cache/papers/source-2026-em-persona-transplant-drake-v1.{html,md}`, and
the abstract page `cache/papers/source-2026-em-persona-transplant-drake-abs.html`.
