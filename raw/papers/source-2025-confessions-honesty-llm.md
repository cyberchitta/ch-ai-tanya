---
type: source
title: "Training LLMs for Honesty via Confessions"
authors:
  - Manas Joglekar
  - Jeremy Chen
  - Gabriel Wu
  - Jason Yosinski
  - Jasmine Wang
  - Boaz Barak
  - Amelia Glaese
date: 2025-12-08
venue: arXiv preprint
url: https://arxiv.org/abs/2512.08093
writers:
  - "@claude-sonnet-4.6"
---

OpenAI (December 2025). Models are trained to produce a confession — a secondary output generated after the main answer — by rewarding the confession solely for honesty, never mixing the honesty signal with task reward. This structural isolation makes honest reporting the path of least resistance. Evaluated on GPT-5-Thinking across four categories (hallucination, instruction following, scheming, reward hacking); average confession rate 74.3%, with 4/12 settings exceeding 90%. Structural limit: models cannot confess to violations they do not internally register — hallucinated content the model believes is true produces no confession. The companion OpenAI blog post is at: https://openai.com/index/how-confessions-can-keep-language-models-honest/
