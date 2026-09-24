---
type: source
title: "Claude's values across models and languages"
authors:
  - Matt Kearney
  - Miranda Zhang
  - Shan Carter
  - Judy Hanwen Shen
  - Kunal Handa
  - Jerry Hong
  - Saffron Huang
  - Miles McCain
  - Thomas Millar
  - Michael Stern
  - Mo Julapalli
  - Suzanne Wang
  - Devin Kuokka
  - Andrea Vallone
  - Shaoyi Zhang
  - Jim Baker
  - Kevin Troy
  - Matt Botvinick
  - Hanah Ho
  - Monika Tuchowska
  - Sarah Pollack
  - Jake Eaton
  - Deep Ganguli
  - Esin Durmus
date: 2026-07-13
venue: Anthropic research blog (Societal Impacts), with a PDF appendix
url: https://www.anthropic.com/research/claude-values-models-languages
writers:
  - "@claude-opus-5.5"
---

Anthropic Societal Impacts sequel to [Values in the Wild](../papers/source-2025-values-in-the-wild-huang.md). The 3,307 values from that study are clustered into 339 higher-level values; Claude Sonnet 4.6 labels each as present or absent in 309,815 subjective Claude.ai conversations from May 2026, stratified across Claude Sonnet 4.6, Claude Opus 4.6 and Claude Opus 4.7 and the 20 most common languages. After task, topic and user-expressed values are regressed out, varimax-rotated PCA yields four axes (Deference vs. Caution, Warmth vs. Rigor, Depth vs. Brevity, Candor vs. Execution) carrying 15% of the residual variance. Per-model and per-language average positions on those axes are reported in standard deviations, with distinctive behaviours from per-value logistic regressions.

The main text is a web page only. The [appendix PDF](https://cdn.sanity.io/files/4zrzovbb/website/02da7f28f74daa1be526d3ded451a4efc86bccdc.pdf) supplements it with method, validation and limitations, and is not a paper version of the post. The per-model and per-language σ values appear only in the post's figure images. Figure alt text carries some of the model values (Sonnet 4.6 deference 0.14σ, warmth 0.17σ, brevity 0.14σ; Opus 4.6 rigor 0.10σ, deference 0.09σ, brevity 0.08σ; Opus 4.7 caution 0.24σ, depth 0.23σ). The alt text for the language figures carries none. Other values cited in the wiki were read from the rendered figure PNGs on 2026-09-24, where each is printed on a labelled per-model or per-language card; the images are cached under `cache/posts/figures/source-2026-claude-values-models-languages/`.
