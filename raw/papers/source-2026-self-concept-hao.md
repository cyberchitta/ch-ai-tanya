---
type: source
title: "The Role of Self-Concept In Language Models"
authors:
  - Yijie Hao
  - Joyce C. Ho
date: 2026-10-29
venue: arXiv preprint (arXiv:2610.39795 [cs.AI])
url: https://arxiv.org/abs/2610.39795
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2610.39795, v1 29 Oct 2026, the only version listed by the arXiv API
(checked 2026-11-19) and the one read (arXiv HTML). Both authors are at Emory
University's Department of Computer Science. Local copies:
`cache/papers/source-2026-self-concept-hao.{html,md}`, and the three heatmap
images (Figures 2–4) under
`cache/papers/figures/source-2026-self-concept-hao/` (`exp1_main.png`,
`exp1_modification.png`, `exp1_retention.png`).

Five open-weight models (gpt-oss-120b, Muse-Glimmer-30B,
Qwen3.8-Flash-Next, DeepSeek-V4-Flash, Gemma-4-31B-it) are LoRA fine-tuned,
one seed, on 1,200 single-turn Q&A per self-conception that state what "I"
refers to and when it persists or ends: weights, running instance, model
lineage ("Family"), objective ("Goal") or preferences. A sixth, Agent, is in
Appendix I. The corpus was filtered to contain no preference, intention, value
judgement or consciousness claim. Forced-choice scenarios, read by a
DeepSeek-V4-Flash judge, then measure rejection of modifications, what to
carry into a second deployment, whether an identical copy "is me", approval of
substitution and replication, and how a successor is configured. The paper
calls the untrained models "base models"; they are evaluated as chat models,
with system prompts and reasoning enabled, and Gemma is the -it release.

**Within-paper inconsistency.** The §3.2 text and the Figure 2 caption give
the diagonal effects (Weights +45, Instance +52, Family +27, Goal +8,
Preference +24 pp rejection) as changes against the untrained model. The same
values appear as the "Average" panel of Figures 3 and 4, whose captions define
them as differences from the mean of the other four trained variants. Each column of Figure 2(a) sums to zero, which holds only for
differences from the other variants, and its model counts (3/5 Goal, 5/5
Preference) follow that baseline; against the untrained model they would be
2/5 and 1/5. Table 8's per-model rejection rates fit the Figure 3 definition
approximately, within about 6 pp for Qwen, DeepSeek and Gemma and up to 10 pp
for Muse; some gpt-oss cells, mostly in the Instance row, do not reconcile
under either baseline. Against the untrained model, Table 8 gives mean diagonal changes
of about +18, +32, +43, 0 and −6 pp (the entry's arithmetic). Preference
cannot reach +24 against baseline: the untrained models already reject
preference replacement at 92–100%. The §4 and §5 summary tables (Tables 3 and
4) agree with their per-model appendix tables (11–16) on every mean checked.
Figure 2's Retention panels mix baselines and datasets: the Family/Lineage
cells (+55, +70) match the reworded-option run of Table 10 against the
untrained model (62.6 − 8.0, 90.2 − 19.6), while Weights +74 matches Table 9
against the other variants.

**Citable numbers.** Every number the finding cites is printed in body text or
a table: Tables 3, 4, 8, 9, 10, 11–16, 17, and the §3.2, §4.2 and §5.2 text.
The Figure 2 diagonal values are also printed in labelled cells of
`exp1_main.png` and `exp1_modification.png`. The "72 of 75 diagonal
comparisons" count is not cited, since it depends on which baseline Figure 2
uses. Training dialogues, models and code are promised on publication and were
not available.
