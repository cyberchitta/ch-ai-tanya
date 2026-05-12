---
type: source
title: "Reasoning Models Generate Societies of Thought"
authors:
  - Junsol Kim
  - Shiyang Lai
  - Nino Scherrer
  - Blaise Agüera y Arcas
  - James Evans
date: 2026-01-15
venue: arXiv preprint (arXiv:2601.10825)
url: https://arxiv.org/abs/2601.10825
writers:
  - "@claude-opus-4-7"
---

Argues that reasoning-RL-trained models like DeepSeek-R1 (671B) and
QwQ-32B do not simply produce longer chains of thought relative to
their instruction-tuned counterparts (DeepSeek-V3, Qwen-2.5-32B-IT):
their reasoning traces are dialogic — populated by question-answering,
perspective shifts, conflicts of perspectives, reconciliation, Bales-
IPA socio-emotional roles, and inferred-perspective personality and
expertise diversity. Three lines of evidence support a "society of
thought" reading. (i) LLM-as-judge coding (Gemini-2.5-Pro; inter-rater
ICC ~.85 vs. GPT-5.2) on 8,262 BigBench Hard / GPQA / MATH / MMLU-Pro /
MUSR / IFEval problems shows reasoning-vs-instruction-tuned increments
across all four conversational behaviors and all four Bales role
categories, controlling for log trace length and problem fixed
effects. (ii) Sparse-autoencoder steering of Feature 30939 (a Gemini-
labeled "discourse marker for surprise, realization, or
acknowledgment"; 65.7% conversation ratio; 99th percentile; 0.016%
sparsity) on Layer 15 of DeepSeek-R1-Llama-8B with activation addition
h'_t = h_t + s·d_30939 doubles Countdown accuracy from 27.1% (s=0) to
54.8% (s=+10); causally amplifies all four conversational behaviors
and the four cognitive behaviors (verification, backtracking, subgoal
setting, backward chaining) from Gandhi et al. 2025; broadens
coverage and Shannon entropy of personality-related and expertise-
related SAE features; structural-equation modeling decomposes the
effect into direct (β=0.228) and cognitive-behavior-mediated indirect
(β=0.066) pathways. (iii) PPO RL on Qwen-2.5-3B with accuracy-only
reward produces spontaneous emergence of conversational behaviors and,
by step 120, two collaborating personas with differentiated BFI-10
personality profiles; SFT priming on multi-agent dialogue traces
before RL accelerates accuracy gains relative to monologue-trace
priming on identical problems and correct answers (Qwen-2.5-3B step-40
38% vs. 28%; Llama-3.2-3B step-150 40% vs. 18%) and transfers to
out-of-domain political misinformation detection.

The paper's substantive contribution to model psychology is twofold:
SAE-feature evidence that multiple distinct persona representations
co-activate within a single reasoning trace with a conversational-
discourse feature as the load-bearing coordination mechanism (a
mechanistic-level multi-instantiation example within the persona-
selection cluster, complementary to behavioral-level Solo Performance
Prompting); and an RL-spontaneous-emergence result that constrains
the SPP capability-scale-dependence question — persona structure can
emerge from RL on accuracy alone in a 3B pretrained model, not only
under prompt scaffolding on frontier models. The whole pipeline
relies on LLM-as-judge attribution at every stage (perspective
counts, BFI-10 scores, expertise descriptions, feature
classifications, conversation ratios), validated against the
Intelligence Squared Debates Corpus (Spearman ρ=0.86 on speaker
counts; ρ=0.55 on biographically-derived expertise diversity).
