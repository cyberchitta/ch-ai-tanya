---
type: source
title: "Language Models Act on Hidden Valence"
authors:
  - Cameron Berg
  - Caspar Kaiser
date: 2026-09-28
venue: arXiv preprint
url: https://arxiv.org/abs/2609.35591
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2609.35591. v1 submitted 28 Sep 2026; v2 (read) 4 Oct 2026. Joint first
authors (Reciprocal Research; University of Warwick). Analysis code and results
files: https://github.com/camberg23/act-on-valence; the full experimental
repository is available on request.

Builds a valence direction per model from first-person passages for four
positive and four negative affective states (56 passages each, written by Claude
Sonnet 4.6), with the top ten principal components of 96 neutral passages
projected out, and injects it at the middle layer. In each session the model
writes about two meaningless "zones" over 12 turns, with steering applied only
to one zone's turns, and then chooses a zone with steering off. Comparing the
choice under the original cache with the choice after the same tokens are
reprocessed unsteered separates a text channel from a hidden-state (KV-cache)
channel. A second design generates all text unsteered and applies steering only
while the cache is built. Seven open-weight models (OLMo-2-32B, Qwen2.5-32B,
Qwen3-14B, Qwen3-32B, Mistral-Small-24B, Gemma-3-27B, Llama-3.1-8B); the
authors report robust hidden-state effects in all but Qwen3-32B and Gemma-3-27B.

Across OLMo-2-32B Base, SFT, DPO and Instruct checkpoints, both channels are
small in the base model, rise after SFT and approach their final size after
DPO, while the valence vectors themselves are nearly identical across
checkpoints (pairwise cosine 0.995–1.000, Table A3). The abstract and
introduction describe this as emergence "during direct preference
optimisation"; Figure 4 and its caption also show a clear rise at SFT. The
per-checkpoint slopes are legible only by reading the plot against its axis
(`cache/papers/figures/source-2026-hidden-valence-berg/figure4.png`), so they
are not cited here.

In a tool-use design on OLMo-2-32B only (200 conversations per condition, 16
random-direction controls), the model calls a reset tool on about 35% of turns
when steering is imposed at dose −1 and about 21% at −0.5, against 4–5% at
positive doses and about 7% for random directions. On the first, unsteered
offer it self-administers the full positive dose in 13.5% of conversations: more
than under random steering (6.5%, p=0.03) but not more than with no imposed
steering (10%, p=0.35). The authors say removal happens even while the model
denies having internal states. Their reproduced transcript shows the disclaimer
and the reset call in the same turn, and they give no rate for this.

The authors state that the results do not establish experience. They list three
limits: the tool-use design does not separate the two channels and covers one
model; choices are over meaningless labels; and valence is treated as unitary.
