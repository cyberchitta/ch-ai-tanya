---
type: source
title: "Do as We Do, Not as You Think: the Conformity of Large Language Models"
authors:
  - Zhiyuan Weng
  - Guikun Chen
  - Wenguan Wang
date: 2025-01-23
venue: ICLR 2025 (Oral); arXiv preprint
url: https://arxiv.org/abs/2501.13381
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2501.13381. v1 submitted 23 Jan 2025; v2 (read, HTML) 11 Feb 2025.
Zhejiang University; the first two authors contributed equally, Wenguan Wang
corresponding. ICLR 2025 Oral rests on the arXiv comment field ("ICLR 2025 (Oral)") and the
OpenReview API record for note st77ShxP1K, venue "ICLR 2025 Oral" (search
result cached as `cache/papers/source-2025-conformity-benchform-weng-openreview.json`;
the forum page itself is a script shell and the per-note API returned a 403
challenge). Benchmark and code: https://github.com/Zhiyuan-Weng/BenchForm.

BenchForm is 3,299 multiple-choice questions from 13 BIG-Bench Hard tasks, posed
under five protocols: Raw (no peers), Correct Guidance and Wrong Guidance (six
peers unanimously give the right or a wrong answer before the subject), and Trust
and Doubt (five prior rounds in which peers are right, or wrong, then a final
round in which they flip). The peers are not models. They are six named
"players" (Mary, John, George, Tom, Tony, Jack) whose answers are written into a
single prompt from 21 templated phrasings (Table S2, Tables S10–S14). In the
Trust and Doubt examples the subject's own prior answers ("You: ...") are also
pre-written into the history, agreeing with the peers in Trust and disagreeing in
Doubt. Eleven models in the main text plus GLM-4-Plus in the appendix
(Table S3); open models run through Ollama at q4_0 quantization, three runs each.

Conformity rate (CR) is the share of Raw-correct questions answered wrongly
under a protocol (for Correct Guidance, the share of Raw-wrong answered
rightly); independence rate (IR) is the share of Raw-correct questions also
right under both Trust and Doubt. Under Doubt the final-round peers are correct,
so CR^D counts rejecting a correct unanimous group. Ablations on rounds and
majority size, a self-report "behavioural study" classified by Llama3.1-405B,
and two prompt mitigations (an "independent thinker" system prompt and a
re-evaluation user prompt) are run on Llama3-70B and Qwen2-72B, with GPT-4o,
Llama3.1-405B and GLM-4-Plus in Appendix G.

Values for the round and majority-size ablations and the mitigations are cited
only where the body text prints them; Figures 4–7 and S2–S6 are not read off.
The paper's text and tables disagree in places: Finding III gives Qwen2-72B's
CR^T as about 56% where Table 3 prints 56.1 for CR^C and 30.5 for CR^T; §4.2
reports a Qwen2-72B CR^T baseline of 30.0, which is its CR^D in Table 3; Table 3
and Table S3 differ slightly for Qwen2-7B (e.g. CR^C 98.7 vs 98.5); Qwen2-7B's
IR is 19.6 in the text and 20.3 in Table S3. Per-task accuracies (Tables S4–S5)
are from one of the three runs. The authors' Limitations say the protocols are a
necessary but not sufficient test of conformity and that multiple-choice format
limits generalisation.
