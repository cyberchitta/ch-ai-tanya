---
type: source
title: "Measuring Activation Control in Large Language Models"
authors:
  - Marek Mateusz Kowalski
  - Joshua Fonseca Rivera
  - Uzay Macar
  - David Demitri Africa
date: 2026-08-21
venue: arXiv preprint (arXiv:2608.21664 [cs.AI])
url: https://arxiv.org/abs/2608.21664
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2608.21664, v1 21 Aug 2026. That is the only version on the abs page as
of 2026-11-19, and it is the one read (arXiv HTML). One author is marked as
UK AI Security Institute; the others' affiliations are not stated, and the
acknowledgements name the ERA Fellowship. Code at
github.com/mkobalski/activation-control and data at
hf.co/datasets/joshycodes/activation-control-battery; both URLs resolved on
2026-11-19 and neither was read. Local copies:
`cache/papers/source-2026-activation-control-kowalski.{html,md}` and the abs
page `source-2026-activation-control-kowalski-abs.html`.

The Activation Controllability Benchmark extends Lindsey's (2025)
think-about-X-while-transcribing task to 25 instruction-tuned open-weight
models from seven families (4B–744B). It reads the raw projection of the
residual stream onto a concept direction, scores six measures (Engage,
Suppress, Dial Rank, Temporal Control, Coverage, Layer Targeting) and combines
them into one score S. Two further experiments cover task load (polynomial
factoring, Gemma 3 27B only) and Olmo training checkpoints (point estimates).
A third runs four monitor families (linear probes, Jacobian lens, activation
oracles, natural-language autoencoders) on the transcribed span, with
thresholds calibrated on no-instruction trials.

Reading notes. Every number the entry cites is in the text, a caption or
Table 1, 2 or 3 of the cached `.md`. Per-model monitor values, the
activation-oracle P(Yes) values, the depth and position curves and the
timing-error values appear only in figures. No figure image was saved, and
none of those values is cited. The probe and J-lens model lists are not
printed beyond the models named in the text.
