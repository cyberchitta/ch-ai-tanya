---
type: source
title: "A Mechanistic Study of Language Model Introspection"
authors:
  - Jiahong Zou
  - Xiangkun Sun
  - Lingkai Kong
  - Tonghan Wang
date: 2026-09-28
venue: arXiv preprint
url: https://arxiv.org/abs/2609.35108
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2609.35108. v1 submitted 28 Sep 2026, the only version listed when read
(HTML, 2026-11-19); no venue version listed. Zou and Sun are marked equal
contribution, Wang is corresponding author; affiliations are Shandong,
Northeastern, HKU and Tsinghua. Code:
https://github.com/Zethan06/introspection_mechanism (resolves; not cloned or
read).

A head-level circuit study of a judge-free injection task on Qwen3-4B-IT,
LLaMA-3.1-8B-IT and Gemma-3-12B-IT. With the prompt text fixed, a concept
vector (Lindsey's extraction) is added at one of ten labelled candidate
positions or not at all, and the first-token argmax over the ten labels and
`none` is the answer. Injection layer and strength are calibrated per model:
(3, 3) for Qwen and layer 0 at strength 6 and 5 for LLaMA and Gemma (Table 4).
The 300 best-localized concepts from the vocabulary are split 100/100/100;
clean runs number 30 per label setting. Activation patching of 32 jointly
selected middle-layer "gate" heads moves the none/position decision (Table 9);
one or two "router" heads in a transition layer carry which position is
reported (Tables 2, 8, 10–12). Controls: norm-matched random directions
(Table 5, ordered digits only), lexical replacement of candidates without
injection (Table 6), and random head sets of equal size (Figure 5, plotted).
Section 5 compares high- and low-accuracy concept groups through QK/OV SVD
(Tables 3, 13–16) and ablates the leading OV modes (Tables 17–19).

The authors adopt Lindsey's four criteria and say they do not treat anomaly
detection as an alternative to introspection (§2, A.1). They limit the claims
to six task variants, one injection layer and strength per model, and models up
to 12B, and say they make no claim about awareness or experience. Figure-only
values (Figure 2 layer curves, Figure 5 cardinality curves, Figures 14–15
per-setting gate bars) are not cited.
