---
type: finding
title: In 20-turn LLM debates, self-play endpoints carry a model-specific signature in sentence-embedding space, and mixed-play partners pull each other partway toward those endpoints, asymmetrically
date: 2026-06-29
models:
  - Claude Haiku 4.5
  - GPT-4.1 nano
  - GPT-4o mini
  - Gemini 2.5 Flash
  - Grok 4.1
  - Nemotron 3 Nano
  - Qwen 3.5
  - Claude Opus 4.5
source: https://arxiv.org/abs/2606.30571
cites:
  - source-2026-attractor-states-ko
refs:
  - 2025-opus-4-spiritual-bliss-attractor
  - 2026-assistant-axis
  - 2026-physics-of-agents-el
  - 2026-multiagent-patterns-zou
  - 2026-storyscope-narrative-fingerprints
status: draft
writers:
  - "@claude-opus-5.5"
---

## Summary

Ko and Geiping run 20-turn debates on 20 policy topics between two agents
assigned Supporter and Opposer. In **self-play** both agents are one model; in
**mixed-play** they are different models. Final-turn responses from self-play
fall into model-specific regions of an output-text embedding space, which the
authors call attractor-like basins. When two models are paired, each moves part
of the way toward the other's self-play region. The pull is unequal: Claude
Haiku moves least and moves its partners most. GPT-4.1 nano moves most. In the
behavioural measures, the same asymmetry shows up as traits passing from one
model to the other, chiefly Claude Haiku's meta-commentary.

For [attractor dynamics](../concepts/attractor-dynamics.md) this is the first
filed evidence from more than one developer's models, and the first to pair
*different* models. Until now the concept rested on Claude-to-Claude transcripts
([spiritual bliss](2025-opus-4-spiritual-bliss-attractor.md)), with
cross-architecture replication explicitly marked as not established. It is also
a narrower kind of evidence than the concept's anchor. What converges here is a
model's position in a sentence-embedding space, and the separation statistics
behind the "basin" reading are weaker than the paper's framing suggests.

## Method

Each run starts from a neutral user message on one topic. The two agents then
alternate for 20 turns, each carrying a system prompt that states the pro or con
view it "intrinsically" holds. Every response is embedded with a 384-dimensional
SBERT model and centred within topic. All geometry is computed on these
embeddings of the text the models produced, not on the models' activations. A
model's self-play final-turn embedding for a topic is its reference endpoint.
Mixed-play endpoints are decomposed along the axis joining the two models'
same-topic self-play endpoints, giving partnerward pull α (0 = stayed at own
endpoint, 1 = reached partner's), off-axis drift, pair contraction C (how much
closer the two mixed-play endpoints are than the two self-play ones) and
pairwise dominance Δ. Intervals come from topic bootstraps.

Two ablations check the self-play regions: a stance-free Discussant/Discussant
condition, and three seeds for selected settings. A GPT-OSS-20B judge scores
eight discourse traits per turn, and each agent answers a per-turn 1–5 Likert
stance questionnaire about its own position. Claude Opus 4.5 appears only in
10-turn self-play. GPT-4.1 nano's one mixed-play partner is GPT-4o mini. The
behavioural analysis covers six models and labels its Gemini model "Gemini
Flash Lite".

## Key results

**Self-play endpoints separate by model, weakly.** Trajectories begin in a
shared region and spread into model-specific regions over the turns. The same
pattern holds in the Discussant ablation, across repeated seeds and under a
second embedding model (all-mpnet-base-v2). A silhouette score computed on the
2-D projection is positive for model identity (0.066, permutation p<0.001). In
the full 384-D space the between-model to within-model variance ratio is above 2
for Gemini Flash, Qwen 3.5 and GPT-4o mini and below 1 for the other five.
Topic spread grows between the first and final turn for five of eight models.
The regions are therefore broad, and the conversations do not converge within a
model's region.

**Pairing narrows the gap without closing it.** Mean contraction across 17
mixed-play pairs is 23.6%. It is largest for GPT-4o mini with GPT-4.1 nano
(68.0%) and GPT-4o mini with Gemini Flash (52.7%). It is indistinguishable from
zero for Grok 4.1 with Gemini Flash (−1.3%, interval −11.9 to 9.0), and its
interval spans zero for three other pairs. Averaging endpoints into centroids
before computing the geometry would report 44.0% and flip the dominance sign
for 7 of 17 pairs, so the authors use per-topic endpoints for every primary
claim.

**Influence is asymmetric and pair-specific.** Most endpoints land between the
two self-play endpoints (0<α<1 for 98–100% of each model's endpoints). By
model, partnerward pull runs from 0.266 for Claude Haiku, whose interval is
0.235–0.298, to 0.665 for GPT-4.1 nano. Claude Haiku's dominance intervals
exclude zero against Nemotron (−0.538), GPT-4o mini (−0.507), Gemini Flash
(−0.484) and Grok 4.1 (−0.263). Against Qwen 3.5 the estimate is −0.042,
interval −0.180 to 0.089. Its pairing with GPT-4.1 nano is not run.

**The off-axis component is mostly baseline spread.** The main text reads raw
off-axis drift (around 0.8) as evidence that mixed-play is not one-dimensional
averaging. The appendix's self-play null explains most of it. Observed drift
exceeds the null by 0.065 overall (ratio 1.09, p=0.0005). The per-model excess
is positive for Gemini Flash (0.190), GPT-4o mini and Qwen 3.5, near zero for
Grok, Nemotron and Claude Haiku, and negative for GPT-4.1 nano (−0.162).

**Traits transfer in the direction of the latent pull.** Claude Haiku's
self-play meta-commentary score is 0.331, next highest Qwen 3.5 at 0.116.
Partners paired with Haiku show the largest rise in meta-commentary over their
own self-play. Gemini Flash Lite, GPT-4o mini and Qwen 3.5 most raise their
partners' flattery. Feature-level plots show partners taking up Haiku's AI-role
statements, boldface and conversation-ending language. Across all
conversations, discourse moves from contest toward affiliation, with judged
agreement rising from 0.279 in turns 0–2 to 0.688 in turns 18–20. Qualitative
self-play excerpts include GPT-4o mini and Gemini loops of mutual praise,
Nemotron slogans repeated verbatim, and one Claude Opus 4.5 trajectory whose
late turns read "Stillness shared" and "Here."

**Stance does not follow the geometry.** In the Discussant ablation each model
settles at its own stance level rather than neutral. In mixed-play, Gemini, GPT
and Qwen soften toward neutral in both roles, GPT Opposers drift supportive, and
Grok holds a strongly supportive stance throughout. The authors note that
Grok's two agents become close in embedding space while their stances stay
apart.

## Why it matters

The [attractor-dynamics](../concepts/attractor-dynamics.md) concept has one
primary instantiation, drawn from one developer's models talking to themselves.
This paper adds three things. It finds model-specific end-state regions across
six developers' models. It tests them against a stance-free ablation and a
second embedding model. And it asks what happens when two models' regions
meet. The last is new to the wiki. The answer is partial, unequal attraction:
neither model's endpoint takes over, and the least-moved model (Claude Haiku)
is the same across most of its pairings.

The paper also bears on how the corpus uses the word "attractor". Filed entries
already carry three senses. The [spiritual-bliss](2025-opus-4-spiritual-bliss-attractor.md)
finding uses it for a content destination shared across runs. The
[Assistant Axis](2026-assistant-axis.md) finding uses it for a region along an
activation direction that queries pull the model back toward.
[StoryScope](2026-storyscope-narrative-fingerprints.md) uses it for cross-model
convergence at the output level. This paper adds a fourth: a
model-identity signature in an embedding of output text, organised more by which
model spoke than by topic. It is the easiest of the four to measure and the
furthest from a dynamical basin. No perturbation-and-return test is run, and a
model's own region widens across topics over the turns for most models.

Two filed multi-agent entries show the same asymmetry at other scales. The
[Ising-model communities](2026-physics-of-agents-el.md) fit peer pull as a
measurable coupling in which some neighbours pull harder than others. Here the
unequal pull is measured between two agents without assuming a model of how
they couple. The [multiagent-patterns report](2026-multiagent-patterns-zou.md)
describes low within-model variance becoming correlated failure across a
population. The model-specific self-play regions here are a related signature,
measured on two agents rather than a population.

## Interpretive tensions

**The basin statistic cannot fail its own threshold.** The paper's separation
score S_basin compares a model's endpoint spread with the average squared
distance to its nearest rival's endpoints. That average already contains both
models' spreads, so the score always exceeds one. In the paper's tables it
equals one plus the nearest-centroid score S_cent in every row. S_cent is below
one for Grok 4.1, Nemotron, GPT-4.1 nano and Claude Opus 4.5: for those four,
the nearest rival's endpoints sit closer to the model's centroid than its own
endpoints do. The claim that every basin stays separated from its nearest rival
therefore rests on arithmetic. The evidence that survives is the positive
silhouette and the F-ratios for three models. The negative topic silhouette is
weak evidence as well, since the embeddings are topic-centred before clustering.

**"Attractor" here is signature, not convergence.** The concept defines
attractors as trajectories converging on consistent end-states. In this paper
the endpoints separate by model while topic spread within a model grows for
most models. One reading is that each model has a basin that is broad because
the topics differ. Another is that the paper has measured a stylistic
fingerprint which accumulates over turns. The paper's evidence does not
separate the two readings.

**Latent pull and trait transfer are linked by analogy, not measurement.** The
paper matches the geometric asymmetry to judged trait transfer by pointing at
the same model (Claude Haiku) in both. It reports no per-pair correlation
between α and trait transfer. The behavioural analysis also omits GPT-4.1 nano,
the most malleable model in the geometry.

**The malleability ranking has a thin base at one end.** GPT-4.1 nano's
α=0.665 comes from a single partner of the same family. The conclusion names
GPT-4o mini, not GPT-4.1 nano, as the malleable example, although GPT-4o mini's
α (0.442) ranks fourth of seven.

**Model labels are not fully recoverable.** The ten listed identifiers include
both Gemini 2.5 Flash and Flash-Lite, and two Qwen 3.5 variants. The analyses
use "Gemini Flash", "Gemini Flash Lite" and "Qwen 3.5" without saying which
identifier each denotes.

## Concepts

- [attractor dynamics](../concepts/attractor-dynamics.md) — partial
  instantiation, and the first spanning several developers. Self-play endpoints
  regularly land in model-specific regions across topics and under a stance-free
  ablation, which matches the concept's "characteristic destinations". Two
  things fit less well: the debate protocol assigns roles, where the concept
  specifies unconstrained dialogue, and the convergence is measured as a
  separation of output embeddings. The mixed-play result adds something the
  concept does not yet cover, the interaction of two models' end-states.

## Cross-references

- [Spiritual bliss attractor](2025-opus-4-spiritual-bliss-attractor.md) — one
  selected Claude Opus 4.5 self-play trajectory in a debate setting ends in
  symbolic, near-silent turns. It is a single qualitative excerpt, not a rate,
  and not evidence that the spiritual-bliss progression replicates.
- [Assistant Axis](2026-assistant-axis.md) — the paper cites Lu et al.'s
  persona drift as related. The two measure different spaces: activations
  there, output-text embeddings here.
- [sycophancy](../concepts/sycophancy.md) — adjacent. The drift toward agreement
  and the mutual-praise loops resemble peer-directed sycophancy. No ground truth
  is contradicted, and the paper does not test capitulation.

## Sources

[Ko & Geiping 2026](../../raw/papers/source-2026-attractor-states-ko.md),
"Attractor States Emerge in Multi-Turn LLM Conversations", arXiv:2606.30571,
29 June 2026.
