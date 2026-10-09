---
type: source
title: "Sycophancy Is Not One Thing: Causal Separation of Sycophantic Behaviors in LLMs"
authors:
  - Daniel Vennemeyer
  - Phan Anh Duong
  - Tiffany Zhan
  - Tianyu Jiang
date: 2025-09-25
venue: arXiv preprint (cs.CL); abs-page comment "EMNLP 2026"
url: https://arxiv.org/abs/2509.21305
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2509.21305. Four versions: v1 25 Sep 2025, v2 26 Sep 2025, v3 22 Mar
2026, v4 28 Sep 2026 (abs page, read 2026-10-10). The finding is written from
v4; v1 was also fetched to compare. Authors are at the University of Cincinnati,
except Zhan (Carnegie Mellon). The paper extracts difference-in-means directions
for sycophantic agreement, genuine agreement and sycophantic praise from
templated (user, response) pairs on nine arithmetic and factual datasets.
It analyses their layerwise separability and geometry in five instruction-tuned
models and steers each by activation addition in three of them. It validates the
steering on the TruthfulQA subset of SycophancyEval and on SYCON-Bench.

**Version differences.** v1 summarised steering by a mean layerwise selectivity
ratio with ε = 0.01, and reported headline multipliers from it, among them a
26× SyA-over-GA ratio on TruthfulQA and praise selectivity of 36.8× in
LLaMA-8B. v4 sets ε = 1 pp and replaces the mean ratio with mean primary and
cross effects in pp plus a selective fraction (Table 2). The v4 TruthfulQA SyA
selectivity is 4.50. v4 also reports different GA-steering values on
TruthfulQA from v1. The SYCON-Bench experiment and the citation of Ye et al.
2026 are absent from v1. v1's
multipliers should not be cited.

**Numbers.** Every number the finding cites is printed in v4's body text or a
table: §4 (AUROC ranges), §5 (cosine values), Table 2, Table 4, Table 8,
Table 10, Appendix B.2 and Appendix C.1. The Figure 1–6 and 9–13 curves are not
read beyond what the text states. Table 3's SyA and GA values (4.50, 2.90)
match writer arithmetic on Table 10 (primary change over max(1 pp, largest
cross-change); GA's 0.9 pp cross-effect is below the floor). Not stated as
such by the authors. Table 3 also gives a SyPr value of 14.30, but its
on-target praise effect is printed nowhere, so that value is not cited.

Local copies: `cache/papers/source-2025-sycophancy-not-one-thing-vennemeyer.{html,md}`
(arXiv HTML v4), `cache/papers/source-2025-sycophancy-not-one-thing-vennemeyer-v1.{html,md}`
(arXiv HTML v1), `cache/papers/source-2025-sycophancy-not-one-thing-vennemeyer-abs.html`
(abs page).
