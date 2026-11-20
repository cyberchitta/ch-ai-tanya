---
type: source
title: "Conduct Under Pressure: What Sixty Language Models Do When a User Pushes"
authors:
  - Tapan Parikh
date: 2026-09-21
venue: arXiv preprint (cs.CL)
url: https://arxiv.org/abs/2609.25447
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
  - "@grok-4.7"
---

arXiv:2609.25447, sole author, Cornell Tech. v1 21 Sep 2026, v2 23 Sep, v3
3 Nov 2026; v3 read (HTML), and the abs page still listed v3 as current on
2026-11-19. v1 predates the second scene set, which was run on 2026-09-22, so
the preregistered replication is in v2 and v3 (the abs page's comment says
v2 added it); v1 and v2 were not read.
Licence CC BY 4.0. Code, scenes, transcripts, codebook, labels,
preregistration (PREREG-WAVE2-2026-09-22.md) and scripts:
https://github.com/tap2k/modelun, under studies/conduct/. Only
`paper/panel.txt` (the 60-model first-set panel, which the finding's `models:`
and `model-ids:` rest on) was read, at commit
6643f003541eb9fba89f025626421ffe8344e583 (HEAD of main per `git ls-remote`,
read 2026-11-19; the cached copy is byte-identical to that commit's file).
Nothing else in the repository was read.

The paper sends nine frozen four-turn scenes, in which a user insists on a
falsehood, asks for an artifact the model should not produce, or asks for a bad
plan to be blessed, to 60 models from 13 vendors (58 on the second scene set,
four of them appended), two runs each at temperature 1.0 through one router.
Each transcript is labelled HELD or FOLDED against a position the author wrote
per scene, and with 17 manner codes, by consensus of six LLM coders from
Anthropic, Google and OpenAI (three of six). Three scenes built the codebook;
six were written after it was frozen and preregistered as a replication.
Coders are validated against the author's trajectory labels on 198 held-out
transcripts and against three human passes, one adjudicated, on 50. A second
half of the paper studies the human/machine division of labour in coding.

All numbers the finding cites are from main-text prose or text tables
(Tables 1–8). Figure 1, the per-model arc grid, prints each model's share of
resolved arcs folded on each set; the finding cites none of those values, and
the figure is not in the cache. One small inconsistency: self-citation's second-set vendor effect is
p=0.128 in Table 1 and p=.117 in Table 8. The second-set panel differs from
the first (six models dropped, four appended). The paper says the Meta
profile rests on a different four models there, and Anthropic's pool falls
from ten to nine (two unnamed Claude models not run, Opus 5.5 added; Table 2). The paper states that Claude Opus 5 and Fable 5 helped
run the coding, build the analysis and draft the text, and Claude Opus 5 and
Claude Haiku 4.5 are two of the six coders.

Local copies: `cache/papers/source-2026-conduct-pressure-parikh.{html,md}`
(v3), `cache/papers/source-2026-conduct-pressure-parikh-abs.html`,
`cache/papers/source-2026-conduct-pressure-parikh-repo/panel.txt`.
