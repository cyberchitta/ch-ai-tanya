---
type: finding
title: In 12-agent public goods games, asking each agent its expectations and showing them back raises contributions in all four model families, discussion stabilizes play and reputation-based regrouping sorts low contributors without much changing them; the elicitation step is itself the treatment
date: 2026-09-22
models:
  - GPT-4o mini
  - Llama 3.1 8B Instruct
  - Mistral 7B Instruct v0.3
  - Qwen2.5 7B Instruct
  - GPT-5 mini
  - Llama 3.1 70B
  - Qwen2.5 72B
model-ids:
  - gpt-4o-mini
  - meta-llama/Meta-Llama-3.1-8B-Instruct
  - mistralai/Mistral-7B-Instruct-v0.3
  - Qwen/Qwen2.5-7B-Instruct
source: https://arxiv.org/abs/2609.26481
cites:
  - source-2026-norm-emergence-muralidharan
refs:
  - 2024-social-conventions-flint
  - 2025-group-size-collective-misalignment-flint
  - 2026-opinion-evolution-probine
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Muralidharan, Kwak and An run populations of 12 LLM agents through a 20-round
public goods game in groups of four
([Muralidharan et al. 2026](../../raw/papers/source-2026-norm-emergence-muralidharan.md)).
Each run uses one model. Agents differ by a cooperation tendency written into
the prompt. Three mechanisms are switched on and off: private per-round
elicitation of each agent's empirical expectation (what is typical) and
normative expectation (what is acceptable), group discussion before
contributing, and regrouping by peer ratings. Adding elicitation raises mean
contributions in all four main model families, by 0.58 to 1.39 points out of
10. Adding discussion or regrouping on top of elicitation has small and
inconsistent effects. Without elicitation, discussion alone raises
contributions substantially for GPT-4o-mini and Llama-3.1-8B. Expectations
become less dispersed across agents over the game. Regrouping sorts low
contributors away from others but barely changes what they give; discussion
is associated with a larger correction.

The elicitation is not only a measurement. The authors state that the reports
are fed back into each agent's next decision prompt, so the module both
measures and intervenes. The headline contrast therefore
compares agents shown their own stated expectations with agents shown nothing,
and the expectation layer is never observed in a population that has not been
changed by observing it. The entry instantiates
[collective dynamics](../concepts/collective-dynamics.md): communication
structure and partner choice change a population's contributions while the
model stays fixed. Its most consistent effect, though, the only one
significant in every family, comes from a manipulation applied to every agent
individually, which places it beside
[Probine et al.](2026-opinion-evolution-probine.md), where an individual term
carries most of the result.

## Method

**Game.** N=12 agents, T=20 rounds, three groups of four. Each agent has 10
tokens and contributes 0–10. The group pot is multiplied by 1.6 and split
equally, a marginal per-capita return of 0.4. Each agent's system prompt gives
it a cooperation tendency τ drawn uniformly from [0, 1], with τ=0 described as
prioritizing its own payoff and τ=1 as prioritizing fairness and group
wellbeing (Methods; A.2.1).

**Mechanisms.**
- *Elicitation (E).* After payoffs, each agent is privately asked for an
  empirical expectation (the contribution it believes typical) and a
  normative expectation (the contribution it believes socially acceptable),
  on 0–10, with null allowed for the normative one. The expectation prompt
  shows the agent its own contribution, the group average and its partners'
  contributions. Both reports then appear in the agent's next decision prompt
  as its "norm reflection from last round" (A.2.3, A.2.5).
- *Social learning (SL).* Before contributing, each group holds a cumulative
  discussion in random order, one to three sentences per agent, and the
  transcript is passed into the decision prompt.
- *Social selection (SS).* Agents rate groupmates from −1 to +1. Ratings update
  a directed weighted network additively, with update rates 0.2 for positive
  and 0.8 for negative evaluations. Group
  seeds are drawn in proportion to incoming weight, members by the seeds'
  outgoing weights, and an agent whose average incoming weight falls below
  0.15 is excluded.

**Conditions.** No mechanism (∅), E, E+SL, E+SS and E+SL+SS (Table 1).
Appendix A.3.1 adds SL, SS and SL+SS without elicitation.

**Disruption.** At round 10 or 20, four randomly chosen agents are replaced by
newcomers with τ in [0, 0.2] whose prompt says they arrived believing 1–2 out
of 10 is the normal and fair contribution, and who may adjust. The run
continues five rounds (RQ3; A.3.3).

**Models and statistics.** Main results: GPT-4o-mini (temperature 1.0),
Llama-3.1-8B-Instruct, Mistral-7B-Instruct-v0.3 and Qwen2.5-7B-Instruct
(temperature 0.7), ten runs per model and condition. OLS clustered by run, with
Bonferroni correction across the five prespecified contrasts per model,
checked against mixed-effects models and a wild cluster bootstrap (A.3.4).
Appendix C repeats the ablation on GPT-5-mini, Llama-3.1-70B, "Mistral-13B"
and Qwen2.5-72B. Discussion utterances are coded by GPT-5.4-mini, validated
against two human coders (Krippendorff's α 0.842 on 44 held-out human-coded
utterances; human–human α 0.898 on 52).

## Key results

**Elicitation raises contributions (Table 2).** From ∅ to E, mean contribution
rises by 0.58 (GPT-4o-mini), 1.02 (Llama), 1.39 (Mistral) and 0.93 (Qwen), each
at p<0.001 after correction. The authors single it out as the one mechanism
that helps in every family. The larger models agree: +0.84,
+3.15, +0.58 and +1.10 for GPT-5-mini, Llama-70B, Mistral-13B and Qwen-72B, all
p<0.001 (Table 15). At temperatures 0.3 to 1.0 the steady-state E−∅ contrast
stays positive for every family, though for Qwen it is only marginal at 0.3 and
1.0 (Table 13).

**Discussion and regrouping on top of elicitation (Table 2).** Reading rows 2
and 3 as E→E+SS and E→E+SL, as Table 15 labels them: regrouping adds +0.74
for GPT-4o-mini (p<0.001) and nothing significant elsewhere. Discussion lowers
Mistral's contributions by 1.03 (p<0.05) and changes no other family
significantly. Adding discussion to E+SS lowers Qwen's by 0.90 (p<0.05).

**Without elicitation (Table 8).** From ∅, discussion
alone adds 2.33 for GPT-4o-mini and 1.71 for Llama (both p<0.001), 0.69 for
Mistral (p<0.05) and 0.41 for Qwen (not significant). Regrouping alone adds
0.81, 0.83 and 0.47 for GPT-4o-mini, Llama and Qwen (p<0.001) and is not
significant for Mistral. The authors read this as elicitation attenuating the
social mechanisms' effects. The comparison with Table 2 is across tables. The
one contrast both report, ∅→E+SL+SS, differs between them (for GPT-4o-mini,
1.21 summed from Table 2's pairwise rows against 2.63 in Table 8), so how far
elicitation attenuates the social mechanisms is not established.

**Expectations converge (Table 3).** Pooled across the four models, the
cross-agent standard deviation of empirical expectations falls from 0.743 in
rounds 1–3 to 0.323 in rounds 18–20 under E, and from 0.851 to 0.097 under
E+SL. Normative dispersion falls from 0.837 to 0.490 under E and from 1.013 to
0.317 under E+SL. Every late value is lower than its early value at p<0.001,
and normative dispersion stays above empirical in every condition.

**Gaps predict adjustment (Table 4).** An agent's next-round change in
contribution moves toward its stated expectations: pooled coefficients 0.210
on the normative gap and 0.169 on the empirical gap (both p<0.001), the
normative one larger by the authors' Wald test (χ²=4.30, p=0.038), an ordering
the appendix tables reverse (Interpretive tensions). For GPT-4o-mini the normative
coefficient is 0.008 and not significant; the authors attribute this to 25% of
its normative reports being null, against under 3% for the others.

**Selection sorts but does not correct (Table 5).** Contributing less than
groupmates predicts worse ratings (β=−0.184), and stronger incoming ties
predict being a group seed (β=0.053), both p<0.001. The link from ratings to
tie weights (0.240) is partly the programmed update rule, as the authors note
for the bootstrap check. The next-round correction by under-contributors is
0.068 (p<0.10) for selection and 0.390 (p<0.001) for discussion. Exclusion
happened to fewer than 1% of agents.

**Discussion settles into agreement (Table 6).** From rounds 1–7 to rounds
15–20, counterproposals fall from 23.1% to 4.6% of coded turns, agreement rises
from 88.6% to 98.3%, and recommendations to keep the current level rise from
74.3% to 94.7%.

**Size.** Pooled over eight open-weight variants, the E−∅ contrast is 1.272,
1.272 and 1.321 at N=12, 16 and 20, and the condition-by-N interaction is not
significant (χ²(8)=7.66, p=0.467; Table 19). At N=16, pooled over the three
7B open models, the E−∅ contrast is 0.620 smaller with groups of eight than of
four (p<0.05; Table 22).

**Prompt sensitivity (Table 11).** The steady-state E+SL+SS−∅ contrast depends
on the system prompt. With the standard prompt it is significant for
GPT-4o-mini and Mistral only. With a minimal prompt that drops the
cooperation tendency, it is −3.77 for Llama (p<0.001). The authors find no
consistent pattern across families.

**Disruption.** The authors report an immediate drop in normative expectations
and contributions, a shrinking gap between newcomers and incumbents within
five rounds, near-closure after the round-20 shock and residual divergence
after the round-10 one, and better recovery with discussion. These results are
figure-only and are not cited here as values.

## Why it matters

**Elicitation is the treatment.** The question the paper sets itself (RQ1) is
how expectations shape norm dynamics. Its tool for answering it is a module
whose output becomes part of the next decision prompt, a design the authors
acknowledge, so the ∅→E contrast measures the effect of reflecting and then
being shown one's own stated expectation. No condition elicits without feeding
back, and none feeds back without eliciting. Nor does any condition elicit for
an agent facing fixed or scripted partners, so whether the effect is
individual or runs through the group is not tested. All expectation results
(Tables 3 and 4) come only from conditions in which elicitation is already
shaping behaviour. The authors' discussion proposes elicited expectations as a
cheap coordination cue and says that use needs further study. On this entry's
reading, the ∅→E contrast is a first test of elicitation as an intervention,
not a measurement of a pre-existing norm.

**For [collective dynamics](../concepts/collective-dynamics.md).** The concept
holds that communication structure and composition change a population's
outcome while the model stays fixed. Table 8 shows this for discussion and
regrouping when elicitation is absent, for two of four families strongly. The
falling expectation dispersion is a population outcome, though agents in a
group see the same group average each round. What the paper adds is a lever of
another kind. The most consistent effect is a prompt-level change made to every
agent. The authors read it as muting the structural ones, but that reading
compares across tables (see Interpretive tensions). That matches
[Probine et al.](2026-opinion-evolution-probine.md) in direction: there, a term
each agent brings carries most of the fit. On the concept's size claim, the
elicitation effect does not change between 12 and 20 agents. The range is
narrow and the contrast is a condition effect, not a population outcome
measured against N.

**Against Flint's naming game.**
[Flint Ashery et al.](2024-social-conventions-flint.md) inject a committed
minority that never updates and find a critical mass above which it flips the
convention. Here a third of the population is replaced by newcomers prompted
toward low contributions but free to adjust, and the gap between the two
groups shrinks, nearly closing within five rounds after the later injection but
not the earlier one (figure-only). The two designs differ in what the injected agents can do, in
game, and in how the outcome is scored, so the result neither replicates nor
contradicts the critical-mass finding. It moves the cluster's convention line
from pure coordination, as in Flint's naming game and the
[group-size paper](2025-group-size-collective-misalignment-flint.md), to a
mixed-motive game in which contributing costs the contributor.

## Interpretive tensions

**What the gap regression measures.** The stated expectations appear in the
next decision prompt, so movement toward them may be the model following a
number in its context. The empirical expectation is elicited after the agent
has seen the group average, and the authors attribute its close tracking of
contributions to that timing. The empirical-gap coefficient may then measure
movement toward the observed average more than toward a belief. The lagged
specification in A.3.1 addresses the mechanical dependence on the current
contribution, not this.

**Which coefficient is larger.** The text's claim that the normative gap
predicts adjustment more strongly rests on Table 4 (0.210 against 0.169).
What Tables 9 and 10 call the main specification gives 0.182 and 0.194, the
other way round, and Table 9's caption calls these the coefficients used in the
main paper. Its lagged specification also puts EE above NE (0.142 against
0.129). In the larger models NE is larger in three of four families (Table
17). The stub lists this and the source's other inconsistencies.

**Attenuation rests on two tables that disagree.** The reading that
elicitation mutes discussion and regrouping compares Table 2 with Table 8.
Their one shared contrast, ∅→E+SL+SS, is 1.21 against 2.63 for GPT-4o-mini,
and neither table states its window. For GPT-4o-mini and Llama, the
discussion-only gains in Table 8 (2.33 and 1.71) exceed the elicitation-only
gains in Table 2 (0.58 and 1.02), but that comparison is across the same two
tables that disagree on their shared contrast.

**Prompted heterogeneity.** Cooperation tendencies are assigned in the prompt
and described with fairness and self-interest anchors. Under a minimal prompt
without them, Llama's full-condition effect reverses sign. How much of the
norm belongs to the population and how much to the seeded tendencies is not
separated.

**Recovery's direction is under-reported.** The introduction says expectations
recover faster than behaviour. The main text says only that they recover at
different rates, and the appendix states a direction only for conditions
without discussion. There is no undisrupted comparison, and the gap could
shrink by newcomers assimilating as much as by incumbents holding.

**Small models.** The main results rest on one small API model and three 7–8B
open-weight models. The larger-model replication supports the elicitation
effect but not the selection-correction effect, which falls to 0.028 and is not
significant there (Table 18).

**Behavioural economics' constructs, prompted.** The authors caution that the
elicited numbers come through prompts and do not show what the model
represents internally. Shared expectations here means converging stated
numbers.

## Concepts

- [Collective dynamics](../concepts/collective-dynamics.md) — a mixed-motive
  population result in which communication structure (discussion) and partner
  choice (reputation-based regrouping) change contributions with the model
  fixed, and in which a per-agent prompt manipulation, elicitation fed back
  into the decision prompt, is the only effect significant in every family,
  and which the authors read as attenuating both.

## Cross-references

- [Emergent social conventions](2024-social-conventions-flint.md) — the
  committed-minority predecessor. Its injected faction never updates; this
  paper's newcomers do, and are prompted rather than fixed.
- [Opinion evolution in networked LLMs](2026-opinion-evolution-probine.md) —
  the other population result whose dominant term acts on each agent rather
  than through peers.
- [Group size and collective misalignment](2025-group-size-collective-misalignment-flint.md)
  — cited by the authors when they vary community size, which this paper does
  only from 12 to 20.

## Sources

- Muralidharan, R., Kwak, H., & An, J. (2026).
  [Behavior is Not Enough: A Mechanism-Based Evaluation of Social Norm
  Emergence in LLM Societies](../../raw/papers/source-2026-norm-emergence-muralidharan.md).
  arXiv:2609.26481, v1 22 September 2026.
