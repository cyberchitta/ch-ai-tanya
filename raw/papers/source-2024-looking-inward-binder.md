---
type: source
title: "Looking Inward: Language Models Can Learn About Themselves by Introspection"
authors:
  - Felix J. Binder
  - James Chua
  - Tomek Korbak
  - Henry Sleight
  - John Hughes
  - Robert Long
  - Ethan Perez
  - Miles Turpin
  - Owain Evans
date: 2024-10-17
venue: arXiv preprint (cs.CL); ICLR 2025 (poster)
url: https://arxiv.org/abs/2410.13787
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2410.13787, v1 submitted 17 October 2024 and the only version on arXiv as of 2026-11-20; read as v1 (arXiv HTML). OpenReview lists the paper as an ICLR 2025 poster (forum `eb5pkwIB5i`); the camera-ready version was not fetched or compared with v1. Affiliations span UC San Diego, Stanford, Truthful AI, MATS, Speechmatics, Eleos AI, Anthropic, Scale AI, NYU and UC Berkeley. The paper defines introspection as access to facts about oneself that a stronger model given the same training data would not report, and tests it by finetuning a model to predict properties of its own outputs on hypothetical prompts (no chain-of-thought), then finetuning a second model on the same examples of the first model's behaviour and comparing the two on held-out datasets. It adds a calibration test at temperature 1, a behavioural-change test in which further finetuning on Claude 3.5 Sonnet's outputs shifts the self-predictor's behaviour, and negative results on longer outputs, bias-susceptibility prediction, the Situational Awareness Dataset and three OpenAI Evals tasks. Models: GPT-4o (gpt-4o-2024-05-13), GPT-4, GPT-3.5 (gpt-3.5-turbo-0125) and Llama 3.1 70B (the abstract says Llama-3). Reading note: the main cross-prediction result for GPT-4o predicting Llama 70B (31.8%) and the data-scaling plateau for the same pair (35.2%, with the scaling run reaching the main condition's 30,000 samples) are not reconciled in the text. Code and data are released (github.com/felixbinder/introspection_self_prediction; Hugging Face dataset thejaminator/introspection_self_predict).
