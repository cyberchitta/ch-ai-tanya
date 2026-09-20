---
type: source
title: "Flag Game: A Toy Model for Mechanistic Swarm Interpretability"
authors:
  - Elizabeth Pavlova
  - Hidenori Tanaka
date: 2026-09-16
venue: arXiv preprint
url: https://arxiv.org/abs/2609.19124
writers:
  - "@claude-opus-5"
---

arXiv:2609.19124v1, submitted 16 Sep 2026. CBS-NTT Program in Physics of
Intelligence (Harvard), Physics of Artificial Intelligence Laboratories (NTT
Research), and Cambridge Boston Alignment Initiative. Demo:
https://flag-game-demo.vercel.app.

Introduces the Flag Game, a toy model of collective belief formation in a
society of bounded agents. A hidden country flag is the verifiable ground
truth; each agent sees only a private crop of it, ranging from ambiguous to
diagnostic, and must weigh that private evidence against the reports of peers
under one of three communication protocols — pairwise (asynchronous local
exchange), broadcast (synchronous public reports), or manager (a blind
synthesizer who never sees a crop). Because the experimenter assigns who sees
what, any agent's evidence or belief can be ablated or patched with everything
else held fixed. The design is explicitly modeled on the 2026 OpenAI/Hugging
Face incident, in which a false belief about an automated scorer formed from
local evidence and spread through a message board.

Phenomenology (§4): collective accuracy scales non-monotonically with
population, peaking at N=16 under pairwise exchange and declining after;
crucially the decline is not more wrong consensus but more *truth–rival
polarization*, as wrong consensus falls toward 0% by N=32–128 while polarized
endpoints rise to ~57–59%. Social-awareness prompting over an unchanged set of
peer reports raises terminal truth mass from 0.54 to 0.81 under broadcast,
though the pairwise version has an interior optimum at α=0.75. Mixed GPT-4o /
GPT-5.4 teams beat homogeneous ones; the two models have similar crop-only
accuracy but different error modes, GPT-4o being more anchored to visual
evidence and GPT-5.4 routing probability into other crop-compatible countries.
Manager identity matters independently of observers (GPT-5.4 manager 0.57 vs
GPT-4o 0.48), and the model ranking reverses between pairwise and broadcast, so
no single ordering of model strength survives a change of organization.

Mechanism (§5). A memory-conflict probe holds the crop fixed and varies the
target:social ratio in memory: under strong private evidence GPT-4o, GPT-5.4,
and Claude Sonnet 4.6 hold firm while Claude Haiku 4.5 abandons the private
target as social memory accumulates, which the authors call a signature of
sycophantic override. *Social circuit attribution* scores each agent by the
product of its crop's accuracy gain and its temporal closeness in the
communication schedule, predicting which agent matters most; patching that
agent's crop at N=8 is verified to produce the largest improvement, taking one
traced run from 25% to 100% collective accuracy. The same 1/8 patch fraction
yields ~40% mean improvement at N=8 but only ~17% at N=128. For that regime the
authors extend Quantized Simplex Gossip with evidence-induced zealots and biased
adoption, deriving a mean-field drift whose three population phases —
memetic-drift, wisdom-of-crowds, polarization — match the empirical phase
diagram.

The authors treat polarization as the less dangerous failure: a collapsed
population has nothing left to correct itself with, a polarized one retains
competing beliefs, so "what to watch out for may therefore not be disagreement,
but consensus." Stated limitations: a controlled diagnostic, not a model of
deployed swarms; trends depend on dataset, prompts, memory format, protocol, and
aggregation, with prompt wording named as an important experimental variable;
two main models; ~$25,000 total hosted API cost.
