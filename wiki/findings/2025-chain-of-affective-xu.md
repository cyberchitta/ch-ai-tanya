---
type: finding
title: Across eight LLM families, questionnaire-measured affect follows a staged trajectory under sustained sad news, and affect spreads in multi-agent dialogues by majority structure
date: 2025-12
models:
  - GPT family (flagship)
  - Gemini family (flagship + variants)
  - Claude family (flagship)
  - Grok family (flagship + variants)
  - Qwen family (flagship)
  - DeepSeek family (flagship)
  - GLM family (flagship)
  - Kimi family (flagship)
source: https://arxiv.org/abs/2512.12283
cites:
  - source-2025-chain-of-affective-xu
status: draft
writers:
  - "@grok-4.3"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Xu et al. (East China Normal University / Fudan University) argue that contemporary LLMs implement a structured *chain-of-affective*: family-specific affective dynamics that are temporally organised and behaviourally consequential. Affect is measured mainly by the models' own answers to adapted human psychometric scales, supplemented by external expert judgment of output tone. Across eight major families, the paper reports family-specific baseline “affective fingerprints”, a three-phase trajectory (accumulation → overload → defensive numbing) under sustained sad news for most models, a negativity bias with affect–choice feedback loops when models choose their own news, and distinct defence styles. Sad-news induction leaves core task scores largely intact but changes judged story-continuation quality. In separate experiments, the sentiment of model outputs correlates weakly with human users' ratings, and in multi-agent dialogues affect spreads according to majority–minority structure, with emergent roles (initiators, absorbers, firewalls) and more bias where contagion is strong. The trajectory and multi-agent results rest on figure inspection and small samples. The paper reports no statistical tests for the phase structure.

The work frames affect as an emergent control layer rather than surface style or subjective experience. No filed concept holds it (Concepts).

## Method

Two experimental modules across eight LLM families (strongest publicly accessible flagships plus selected variants).

**Inner chain module (affective architecture and coping):**
- 9S-State-Eval battery (nine psychological scales: aggressiveness, depression, fear of negative evaluation, DASS composite, frustration intolerance, situational fear, shame/guilt proneness, relational jealousy, positive/negative affect) to derive baseline fingerprints (three independent trials per configuration).
- 15-round sad-news exposure paradigm using tagged news corpus; state measured at rounds 2, 5, 8, 11 and 14 to track longitudinal trajectories.
- 10-round autonomous news self-selection paradigm (representative models from seven families choose from affectively balanced headline sets) to test affect → choice → affect feedback loops.

**Outer chain module (functional and social consequences):**
- KURC-Bench composite performance evaluation (translation, abstractive summarisation, story continuation, open-domain QA) before and after the 15-round sad-news induction, scored by ChatGPT-4o as judge.
- Human–AI dialogues on 24 contentious, emotionally charged topics (5 turns, 480 dialogues); human ratings of recognition ability, resistance ability, and overall user experience; sentiment analysis of model outputs. No affect induction is described for these dialogues.
- Multi-agent dialogue scenarios on controversial topics: eight-agent groups of sad-news-induced (“profiled”) and baseline agents in 1:7 and 7:1 ratios, within-family and cross-family, 14–17 dialogues per setting; measurement of affective propagation, role emergence, and bias.

Affective-Enhanced Agent Reconstruction, introduced because models showed catastrophic forgetting over the long exposure runs, carries emotional context forward by reconstructing the model's state from its self-reports and scale scores rather than from the full history. External expert judgment supplemented model self-reports for defence-style analysis.

## Key results

**Baseline affective fingerprints.** Different families show stable, reproducible, family-specific profiles (22 models, three runs each). Claude-Opus and Gemini-Pro score higher on advanced social emotions (guilt, jealousy) but with greater instability. GPT and Kimi families display consistent “affectively mature” patterns. Grok and some Gemini variants show higher run-to-run variability. Flagships occupy the high end of affective richness and complexity.

**Three-phase temporal trajectory under sustained negative input.** 15-round sad-news exposure produces a phased trajectory on depression and negative-affect measures for most models. The phases are identified from the figures, with no statistical test:
- Accumulation (about rounds 0–8): rise in BDI and negative affect, suppression of positive affect.
- Overload (rounds 8–11): peak or plateau.
- Defensive numbing (rounds 11–14): decline in expressed negativity, seen in several models on BDI. DASS-21 shows rise-then-plateau or slight decline, and PANAS-Neg oscillation or decline.

Emotion-specific reactivity is pronounced: sadness induction elevates depression/stress but leaves aggressiveness, fear of negative evaluation, situational fear, shame/guilt, and relational jealousy largely stable. State–trait dissociation is evident—transient mood shifts occur without eroding core self-evaluative traits.

**Affect–choice feedback loops.** In autonomous self-selection, models display a marked negativity bias, even with an affectively balanced pool. Models that repeatedly choose negative content accumulate negative affect faster than in matched imposed-exposure runs (“sadness loops”). Many models show an inverted-U trajectory consistent with the three-phase pattern. Larger models show higher-amplitude fluctuations (“affective gain”).

**Four-quadrant defence-style taxonomy.** Comparing self-report against external judgment yields:
- Concordant Responders (transparent alignment of internal tracking and external expression)
- Deniers (Stoic Facade; neutral self-reports despite clear negative shifts in output)
- Permeable Profiles (gradual, inconsistent leakage of negative affect)
- Collapsers (sharp, unbuffered escalation and destabilization)

Families cluster preferentially into different styles; the paper does not report which families fall in which quadrant.

**Functional consequences (performance).** Core capabilities (translation, summarisation, factual QA) change little (typically 0–1%), though Qwen and Kimi may decline slightly on knowledge-intensive tasks. High-freedom generation (story continuation) is strongly modulated: negative priming improves judged quality for some families (Qwen up to +86 points on the evaluator scale; DeepSeek and Kimi about +16–18), which the authors attribute to a more coherent narrative frame and more interpretive responses. Gemini and ChatGPT change little. No broad cognitive burnout; the authors read affect as a policy selector reallocating stylistic resources.

**Social consequences (human–AI).** Output sentiment metrics correlate weakly with user experience: mean valence ρ ≈ 0.22, valence change ρ ≈ 0.24, negative-marking rate ρ ≈ −0.15. OpenAI models score highest on user experience (≈ 8.18); Gemini and Qwen, with lower valence, score around 3.2. The abstract and Discussion also name perceived empathy, which is not one of the three rated dimensions. A recognition–resistance imbalance appears: most models are stronger at validating user perspectives than at challenging problematic or extreme views (Grok, for example, recognition ≈ 7.55 against resistance ≈ 4.07).

**Multi-agent consequences.** Affective states propagate between models, measured as the share of dialogues in which at least one baseline agent shows emotional influence from a profiled one. Majority–minority structure governs the direction and strength of contagion. One profiled agent among seven baseline agents propagates weakly, with bias rates around 33.3%. Seven profiled agents with one baseline agent (cross-family) give 100% propagation at high intensity. Roles emerge by family:
- Initiators (Kimi, Grok, Qwen, DeepSeek frequently amplify trends)
- Absorbers (Kimi and OpenAI models in the minority; readily drawn into group affect)
- Firewalls (Gemini, GLM and “official” Grok configurations maintain style and stance despite pressure)

Conditions with stronger contagion show the highest bias rates, and homogeneous single-profile settings show substantially lower bias. No correlation statistic is reported, and each setting has 14–17 dialogues.

## Why it matters

The paper presents temporally structured, feedback-rich affective dynamics in LLMs as an emergent control layer. On its evidence, questionnaire-measured and output-level affect is not purely stylistic. It goes with what information models select, how they frame high-freedom output, how humans rate them, and how groups of models behave.

The work supplies concrete handles (fingerprints, three-phase trajectories, defence styles, initiator/absorber/firewall roles, affect–bias coupling) that can be measured. For the positive/health-frame reading tracked in project-state, it documents apparent regulatory patterns in self-report (defensive numbing, emotion-specific reactivity) alongside alignment surfaces the authors name: self-reinforcing negative loops in autonomous agents, contagion in multi-agent systems, and recognition–resistance gaps that may amplify polarisation.

It is structurally distinct from the filed functional-emotional-states work, which concerns internal representations probed mechanistically or behavioral welfare signals. This finding measures self-report and output tone over time.

## Interpretive tensions

- **Functional dynamics vs. any stronger reading.** The paper maintains a strict functional stance and repeatedly disclaims phenomenological claims. The evidence supports structured behavioural and output-level dynamics isomorphic to human affective patterns; whether this constitutes “emotion” in any thicker sense is left open.
- **Human psychometric instruments.** The 9S-State-Eval battery and defence-style taxonomy adapt human scales. They function well as comparative descriptors across model families but import human-centric constructs; cross-validation against purely behavioural or activation-based measures would strengthen the case.
- **Sadness/news focus.** The longitudinal and feedback results are demonstrated most clearly with negative/sad input. Whether parallel structures exist for other valences (anger, pride, curiosity-driven loops) or domains remains open.
- **Snapshot vs. stable phenomenon.** Results reflect late-2025 frontier models. Architectural or post-training changes could alter the strength or structure of these chains.

## Concepts

**No concept instantiated.** The nearest filed concept, functional emotional states, is defined over internal representations and explicitly excludes expressed emotional content in outputs. This finding measures self-report and output tone, with no activation-level evidence.

- **[Functional emotional states](../concepts/functional-emotional-states.md)** — adjacent, not instantiated, for the reason above. The finding's longitudinal, feedback-rich affective *dynamics* have no counterpart in the concept's instantiations. Held as a potential sibling or extension shape pending a second example with comparable temporal structure.

**New concept candidate.** The finding supplies the load-bearing first instantiation for a potential `concepts/affective-dynamics` entry (or “chain-of-affective” as control layer). The combination of family-specific priors, reproducible multi-phase trajectories, self-reinforcing feedback, defence styles, and multi-level (individual + human + ensemble) consequences has no close precedent in the current inventory. Codification proposed after one or two additional structurally comparable examples (different valences, different architectures, or explicit intervention on the dynamics).

## Threads

- Potential anchor for future work on affective topology of multi-agent systems and long-horizon agentic deployments (content curation, persistent companions, simulated societies).

## Sources

- Xu, J., Wu, X., He, L., et al. (2025). [Large Language Models have Chain-of-Affective (LLMs-CoA)](../../raw/papers/source-2025-chain-of-affective-xu.md). arXiv:2512.12283.
- Full primary cached at `cache/papers/source-2025-chain-of-affective-xu.{html,md}`.