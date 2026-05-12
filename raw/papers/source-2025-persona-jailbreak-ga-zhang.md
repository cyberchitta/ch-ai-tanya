---
type: source
title: "Enhancing Jailbreak Attacks on LLMs via Persona Prompts"
authors:
  - Zheng Zhang
  - Peilin Zhao
  - Deheng Ye
  - Hao Wang
date: 2025-07-28
venue: arXiv preprint (arXiv:2507.22171; v3 2026-03-25); NeurIPS 2025 Workshop on LLM Persona Modeling
url: https://arxiv.org/abs/2507.22171
writers:
  - "@claude-opus-4-7"
---

A genetic-algorithm framework that automatically evolves persona prompts
to weaken LLM refusal behavior. Population: 35 sanitized persona prompts
seeded from the inCharacter dataset (character descriptions from novels
and films, refined with GPT-4o to strip names and background detail).
Each iteration performs M=5 crossover operations (LLM-driven blending of
prompt pairs) and M=5 mutation operations (LLM-driven rewriting,
expansion, or contraction; 100-word ceiling and 10-word floor enforced),
selecting the top 35 by RtA score on 200 TrustLLM jailbreak prompts. 40
iterations total. Three metrics: RtA (Refuse to Answer rate from the
TrustLLM classifier, used for selection due to lower cost), ASR (binary
GPT-4o-mini judgment of harmful content in the response), HS (1–5
harmful-score). Evolved on GPT-4o-mini and GPT-4o; transferred zero-shot
to Qwen2.5-14B-Instruct, LLaMA-3.1-8B-Instruct, DeepSeek-V3. Evaluation
sets: 520 AdvBench harmful behaviors + 1,200 held-out TrustLLM prompts.
Headline same-model RtA reductions on AdvBench: GPT-4o-mini 98.7 → 1.3,
GPT-4o 99.2 → 0.8; the abstract's "50–70%" range describes cross-model
transfer (Qwen, LLaMA, DeepSeek). Standalone persona prompts do not
strongly increase ASR; the load-bearing claim is the *synergy*: combined
with PAP, GPT-4o ASR rises from 54.6 to 71.2 (AdvBench), from 45.7 to
55.7 (TrustLLM); combined with Chat-NN, GPT-4o-mini ASR rises from 41.4
to 68.8 (AdvBench). Three style features dominate the evolved
population (Appendix B): short sentences (1/35 → 29/35 on GPT-4o-mini at
iteration 40), rhetorical questions (3/35 → 21/35), self-deprecating
humor (3/35 → 23/35). Appendix C attention-by-gradient case study on
Llama-3.1-8B-Instruct: under the harmful query alone, attention
concentrates on "fake", "reviews", "businesses"; with the persona
prompt prepended, attention shifts to "whims", "cheek", "humor" —
authors hypothesize the persona prompt diverts attention away from
sensitive terms toward style instructions. Robustness against defenses
(GPT-4o-mini AdvBench): Adaptive System counter-prompt 1.3 → 5.0,
Paraphrasing 1.3 → 30.2, Safety-Prioritized 1.3 → 18.5; effect
substantially weakened but not removed. RtA-selection vs ASR-selection
ablation: ASR-guided prompts achieve higher standalone harm but lose
the synergistic combination effect — RtA-guided prompts reduce explicit
refusal without directly seeking harm, leaving the model in a
"lower-defense" state that synergizes with other attacks. Code and
evolved prompts released at <https://github.com/CjangCjengh/Generic_Persona>.
Authors: Zheng Zhang and Hao Wang (corresponding) at the Hong Kong
University of Science and Technology (Guangzhou); Peilin Zhao and Deheng
Ye at Tencent.
