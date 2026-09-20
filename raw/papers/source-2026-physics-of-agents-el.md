---
type: source
title: "Physics of Agents: Statistical Mechanics Predicts Collective Behavior of AI Agents"
authors:
  - Batu El
  - Jinhee Paeng
  - Fatih Dinc
  - Shiye Su
  - Mete Erdogan
  - Aneesh Pappu
  - Haotian Ye
  - Wanjia Zhao
  - Surya Ganguli
  - James Zou
date: 2026-08-17
venue: arXiv preprint
url: https://arxiv.org/abs/2608.16578
writers:
  - "@claude-opus-5"
---

arXiv:2608.16578, v1 submitted 17 Aug 2026, v2 9 Sep 2026 (the cached copy is
v2). Affiliations are given only as superscripts in the cached HTML — nine
authors share affiliation 1 and Fatih Dinc a second; correspondence goes to
batuel@stanford.edu and jamesz@stanford.edu. Code at
https://github.com/batu-el/physics-of-agents, data at
https://huggingface.co/physics-of-agents.

Simulates over 10,000 communities of language-model agents that hold a binary
opinion on a shared question, exchange short messages over a signed
communication graph, and revise their opinions for eight synchronous rounds.
The empirical analysis covers 9,600 communities: four backbone models
(GPT-4o-mini, Gemma-3n-E4B-it, Qwen3.5-9B, Llama-3.1-8B-Instruct), 40 objective
MATH questions recast as binary multiple choice and 20 subjective political
statements, ten random graphs and lattices, and four episodes each. Agents
carry fixed personas — a worked solution to a *different* MATH problem
(expertise) on objective questions, a demographic-and-personality profile from
TWIN-2K-500 on subjective ones. Edges are +1 (concordant), −1 (discordant) or
0, and a message lands in the receiver's friendly or unfriendly inbox according
to the edge sign.

Empirics (§3). Individual trajectories sort into four archetypes by switch
count — frozen, switcher, intermittent, oscillator — with frozen dominant and
oscillators second. Group trajectories sort into five archetypes; divergence
and majority switch, where the initial majority weakens or is overturned, reach
11–12% for GPT-4o-mini and Qwen3.5-9B, so communities are not simply locking in
the initial majority. Conviction (mean squared opinion) rises in every
model–regime cell: early rounds are dominated by indifference, and communities
move into consensus or polarization. On objective questions
incorrect→correct majority switches outnumber correct→incorrect for all four
models. On subjective questions three of four models drift right over eight
rounds (Gemma 75%→96%, Qwen 52%→67%, GPT-4o-mini 30%→37%; Llama stays near
53%). A separate label-bias check finds Llama's +1 share falling 39%→16% on
label-balanced objective questions.

Model (§4–5). An Ising energy with signed couplings plus a per-agent intrinsic
field, updated by Glauber dynamics, gives a logistic update in which the
argument is peer pressure along the signed graph plus an intrinsic field
regressed from persona and question embeddings. Splitting the coupling into
three (β⁺ concordant, β⁻ discordant, β₀ bare connection) is what makes it work:
best in every column of Table 1 at 75–86 one-step and 61–77 rollout balanced
accuracy, against a mean-field baseline in the mid-50s to low-70s and an
interaction-free baseline near chance for three of four models. In-distribution
and out-of-distribution columns differ by at most 2.4 points; on three unseen
graph families the rule is best in 15 of 16 columns (85.0–97.8 one-step,
59.7–89.3 rollout). A mixed 64-agent community of GPT-5.6-sol and
DeepSeek-V4-Flash reaches 81.9 (70.4 rollout) subjective and 80.0 (67.4)
objective. Rolled out from real initial opinions, the fitted rule reproduces
group-archetype shares to ~3 points (objective) and ~5 points (subjective) mean
absolute deviation while inflating the individual oscillator count.

Three fitted readings. (i) The operating temperature 𝒯=1 lies below the
community's critical temperature in every dataset–model cell, which accounts
for conviction buildup. (ii) β⁺ exceeds β⁻ for all four models — the effective
concordant weight runs 0.99–3.03 while the effective discordant weight never
exceeds 0.73 and is −0.47 (GPT-4o-mini) and −0.01 (Qwen, subjective) in two
cells — so repulsion is too weak to hold two camps apart and consensus is
favored over polarization. (iii) A five-coupling variant splitting each channel
by whether the neighbor currently holds the correct answer finds correct
neighbors pull harder on concordant edges and incorrect neighbors push harder
on discordant ones, in all four models, which is a statistical account of
truth-seeking.

Stated limitations: one shared binary question per community, a fixed symmetric
communication graph, Markovian updates with no interaction history, and — the
authors' own main limitation — the model discards the content of the messages
that mediate influence. The authors caution against over-extrapolating from
persona-conditioned agents to human communities. Related work cites Pavlova and
Tanaka (2026) among statistical-mechanics treatments of LLM collectives.
