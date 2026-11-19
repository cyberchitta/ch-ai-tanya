---
type: source
title: "In-Context Neurofeedback: Can LLMs Control Their Internal Representations through Privileged Access?"
authors:
  - Koshiro Aoki
  - Ryota Takatsuki
  - Gouki Minegishi
  - Yusuke Haruki
  - Daisuke Kawahara
date: 2026-09-01
venue: arXiv preprint (arXiv:2609.00904 [cs.AI])
url: https://arxiv.org/abs/2609.00904
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2609.00904v1, 1 September 2026, the only version on the abs page when
checked on 2026-11-19, read from the arXiv HTML. Waseda University, the
University of Tokyo, and the Sussex Centre for Consciousness Science with AI
Alignment Network. Local copies:
`cache/papers/source-2026-incontext-neurofeedback-aoki.{html,md}` and the abs
page `cache/papers/source-2026-aoki-abs.html`. Code:
https://github.com/AokiKoshiro/in-context-neurofeedback (resolves; not cloned
or re-run).

A redesign of the neurofeedback paradigm of Ji-An et al. (NeurIPS 2025), which
reported that LLMs can control probe-defined directions in their activations.
The authors argue that Ji-An's targets are not privileged: an observer can
infer them from the text, because the model can succeed by writing, or
planning to write, text typical of the rewarded label. In-context
neurofeedback instead has the model repeat one fixed sentence for 50 turns
while it receives a 0–100 score from a logistic-regression probe on its
mean-pooled residual activations. The score rewards label 1, rewards label 0,
or is random, and the scoring rule is not revealed. Four open-weight models
(Llama-3.1-8B/70B-Instruct, Qwen3-8B/32B without thinking), three datasets
(SST sentiment, ETHICS commonsense, Azaria–Mitchell True-False) and five
layer depths. After Benjamini–Hochberg correction, 45 of 120 final-turn tests
favour label-1 over label-0 reward, unevenly across models and datasets, all
with effect sizes below 0.5. The authors read this as no reliable control.

Reading notes. Every number cited in the wiki is in the body text, Table 2
(compliance) or Table 3 (all 120 tests); the per-dataset, per-model and
per-layer tallies were counted from Table 3 and match the text. Probe
accuracies by layer and all effect sizes appear only in Figures 5, 7 and 8,
which print no values beyond the bounds stated in the text, so no figure image
was saved. Ji-An et al.'s paradigm is described and argued against, not
re-run. Decoding is greedy with one session per sentence and condition.
