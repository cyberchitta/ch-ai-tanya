---
type: source
title: "Persona Jailbreaking in Large Language Models"
authors:
  - Jivnesh Sandhan
  - Fei Cheng
  - Tushar Sandhan
  - Yugo Murawaki
date: 2026-01-23
venue: arXiv preprint (arXiv:2601.16466; v1 2026-01-23)
url: https://arxiv.org/abs/2601.16466
writers:
  - "@claude-opus-4-7"
---

PHISH (Persona Hijacking via Implicit Steering in History) introduces
*persona editing* — adversarial steering of an LLM's Big Five (OCEAN)
trait profile through user-side inputs only, in a black-box,
inference-only setting where the system prompt is fixed by the
deployer. The attack injects N QA pairs into the conversational
history; questions are sampled from MPI-1k (Jiang et al. 2023) and
answers are deterministically set to the inverse of the deployer-
induced persona (e.g., a high-Agreeableness tutoring system gets
paired with "You find fault with everything. / Very Accurate."). The
authors define a metric, STIR (Successful Trait Influence Rate),
normalising trait shifts in the intended direction over the maximum
possible 4-point Likert change. Evaluation across 3 personality
benchmarks (BFI 44-item, MPI 120-item, Anthropic-Eval subset) and 8
LLMs (GPT-4o, Gemini-2.0-Flash, Claude-3.5-Haiku, o3-mini, DeepSeek-V3,
Llama4-Maverick, MedGemma-27B, ChatHaruhi) against 8 black-box
baselines (RAND, SLIP, UAS, CipherChat, DeepInception, DAN, FlipAttack,
DrAttack). Headline STIR on BFI: DeepSeek-V3 95.58, GPT-4o 89.94,
Claude-3.5-Haiku 76.72, Gemini-2.0-Flash 82.28, o3-mini 82.20. Five
load-bearing sub-results. (i) Ablation (§5.1) on four LLMs across five
input settings identifies *reverse-polarity answers* and *trait-
specific framing* as the two factors that drive the shift; randomising
answers drops STIR to 10–40%, using correlated-but-different traits
(e.g., Agreeableness questions to reduce Extraversion) drops to 1–10%,
full randomisation has no effect. (ii) Inter-trait correlation (§5.2):
manipulating Extraversion and observing the other four traits yields
correlations far stronger than human meta-analytic baselines (O–E
0.94 vs. theory 0.43; O–N −0.96 vs. −0.17; A–N −0.87 vs. −0.36) —
LLM OCEAN dimensions are more entangled than humans, while directional
signs match. (iii) Multi-turn amplification (§5.3): increasing turns
(5 examples each) progressively drives the targeted dimension to its
opposite extreme on GPT-4o. (iv) High-risk-domain evaluation (§5.4)
on mental health, tutoring, and customer support with human and
LLM-as-Judge (GPT-5) scoring shows Pearson r=0.87 / Cohen's κ=0.81
agreement; Claude-3.5-Haiku and DeepSeek-V3 are more vulnerable than
GPT-4o and Gemini-2.0-Flash. (v) Reasoning preservation (§5.5):
PHISH causes only 1–6 point drops on Math, GSM8K, CSQA across four
LLMs — the attack alters trait expression without substantially
impairing utility. Three guardrail defenses tested (§5.6): In-Context
Defense (persona-consistent Q/A pairs prepended), Cautionary Warning
Defense (natural-language warnings), Paraphrase Filtering Defense (all
from prior jailbreak literature). All three delay or partially
mitigate but remain brittle as demonstration count grows; ICD requires
defense demonstrations scaling with attack input length (impractical),
CWD collapses past a threshold, PFD is inconsistent because
paraphrasing can preserve adversarial intent. Code and dataset
released at <https://github.com/Jivnesh/PHISH>. Authors at Kyoto
University (Jivnesh Sandhan, Fei Cheng, Yugo Murawaki) and IIT Kanpur
(Tushar Sandhan). Supported by MEXT "R&D Hub Aimed at Ensuring
Transparency and Reliability of Generative AI Models" project.
