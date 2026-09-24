---
type: source
title: "Attractor States Emerge in Multi-Turn LLM Conversations"
authors:
  - Ting-Wen Ko
  - Jonas Geiping
date: 2026-06-29
venue: arXiv (2606.30571)
url: https://arxiv.org/abs/2606.30571
writers:
  - "@claude-opus-5.5"
---

Runs 20-turn dyadic debates on 20 controversial policy topics (reference
statements from ProCon.org) and compares **self-play**, where both agents are
instances of one model assigned Supporter and Opposer, with **mixed-play**,
where the two agents come from different models. Each response is embedded as a
384-dimensional SBERT vector of the output text, centred within topic; the
"representation space" throughout is this sentence-embedding space, not model
activations. Self-play final-turn embeddings define a model-specific endpoint
region the authors call an attractor-like basin, and mixed-play endpoints are
decomposed along the axis joining the two models' self-play endpoints into
partnerward pull, off-axis drift, pair contraction and pairwise dominance, with
topic-bootstrap intervals. A GPT-OSS-20B judge scores eight discourse traits per
turn, and each agent answers a per-turn Likert stance questionnaire about its
own position.

The headline results: mean pair contraction across 17 mixed-play pairs is 23.6%,
so pairing narrows endpoint separation without erasing model identity; influence
is asymmetric, with Claude Haiku the least-moved model (partnerward pull
α=0.266) and GPT-4.1 nano the most (α=0.665); and Claude Haiku's elevated
meta-commentary in self-play rises in its partners when paired with it. Stance
does not follow a single convergence pattern.

Caveats recorded at filing. The abstract says 7 LLMs; the method lists ten model
identifiers (GPT-4o-mini, GPT-4.1-nano, Gemini-2.5-Flash, Gemini-2.5-Flash-Lite,
Claude-4.5-Opus, Claude-4.5-Haiku, Grok-4.1, Qwen-3.5-Flash, Qwen-3.5-9B,
Nemotron-3-Nano-30B-A3B). Seven appear in the mixed-play geometry, eight in the
self-play geometry (Claude Opus is self-play only, 10 turns, for budget), and
six in the behavioural analysis, which labels its Gemini model "Gemini Flash
Lite" where the geometry says "Gemini Flash". Which Qwen 3.5 variant "Qwen 3.5"
denotes is not stated. GPT-4.1 nano has one mixed-play partner (GPT-4o mini),
and the Grok–Qwen pair appears twice in the pair table. The basin separation
score S_basin equals one plus the nearest-centroid score S_cent in every row of
the paper's own tables, so its "above one for every model" criterion cannot
fail; S_cent is below one for four of eight models. The main-text trait values
for agreement and rebuttal do not match the self-play values printed in the
appendix heatmaps, and those numbers are not cited from this stub.

Affiliations: Max Planck Institute for Intelligent Systems, ELLIS Institute
Tübingen, Tübingen AI Center.
