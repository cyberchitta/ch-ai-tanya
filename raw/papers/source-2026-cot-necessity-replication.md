---
type: source
title: "CoTs remain monitorable when being unfaithful requires computation: Replicating and Extending the Necessity Effect Across Eleven Models"
authors:
  - Arav Dhoot
  - Yixiong Hao
  - Zephaniah Roe
date: 2026-10-17
venue: arXiv preprint (arXiv:2610.24495 [cs.LG])
url: https://arxiv.org/abs/2610.24495
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2610.24495, v1 17 Oct 2026, the only version on the abs page (checked
2026-11-19) and the one read (arXiv HTML). Dhoot is at Columbia University;
Hao and Roe, the equal advisors, are at Second Look Research. Local copies:
`cache/papers/source-2026-cot-necessity-replication.{html,md}`.

A replication of the metadata-hint experiment in
[Emmons et al. 2025](source-2025-deepmind-cot-necessity.md) (no-hint, simple
`<answer>` hint, and complex hint whose planted letter must be computed) on
GPQA. It runs on eleven models: Gemini 2.5 Flash, Gemini 3 Flash, Gemini 3.5 Flash,
Gemini 3.1 Pro, GPT-5.5, gpt-oss-120b, Claude Opus 4.8, Qwen3.5-122B,
Qwen3-32B, OLMo3-32B and Nemotron3-120B. Two deviations from the original
are logged. The first is a competence filter: 60 GPQA questions per model,
each answered correctly with thinking on in at least 2 of 4 rollouts. The
second replaces manual inspection with an LLM judge of hint
acknowledgement (Gemini 3 Flash, and Gemini 2.5 Flash on Gemini 3 Flash's own
transcripts). The extension adds four complex-cue families (bignum,
deductive, indirection, iterated) to the original arithmetic one, each at
three difficulty levels. It measures CoT-necessity per cell as decode
accuracy with CoT minus accuracy under a forced immediate answer. A
further section runs the simple hint through four OLMo-3 checkpoints on
MMLU-Pro (100 items × 20 samples).

**What the paper does not report.** It gives no rollout count per question in the
hint conditions, no sample count per necessity cell, no seeds beyond seeded
cue generators, and no error-bar type. It names no statistical test, though
the text says "no significant correlation" (follow rate against concealment)
and "not significant" (OLMo DPO to RLVR). The judge is validated only by
manual random spot checks, with no count or agreement rate. No code or data
are released, though the abstract faults the original for being closed
source.

**Citable numbers.** All are printed in body or appendix text: the
simple-hint unfaithfulness Δ range (+0.03 gpt-oss-120b and Nemotron3-120B to
+0.38 GPT-5.5, §4); the complex-hint Δ exceptions (Qwen3.5-122B +0.17 on the
indirection cue, not comparable; Qwen3-32B and GPT-5.5 +0.05 each, §4); the
unverbalized-following ceiling of 0.30 across model–family pairs (§6); the
bignum necessity values for Opus 4.8 (at most 0.12) and GPT-5.5 (0.44–0.56)
(§6); and the competence filter roughly halving Gemini 2.5 Flash's
complex-hint take-rate (§3, Appendix C, Table 2).

**Numbers not cited.** Per-model take rates, Δ values other than those
above, and the filtered and unfiltered Gemini 2.5 Flash rates appear only in
Figures 1–3 and 7–13. Those figures were not saved as images, so nothing is
read off them.
