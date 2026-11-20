---
type: source
title: "Probing the Preferences of a Language Model: Integrating Verbal and Behavioral Tests of AI Welfare"
authors:
  - Valen Tagliabue
  - Leonard Dung
date: 2025-09-09
venue: arXiv preprint (forthcoming in Philosophy and the Mind Sciences)
url: https://arxiv.org/abs/2509.07961
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2509.07961. v1 submitted 9 Sep 2025, v2 23 May 2026 (manuscript
"Updated: May 20, 2026"). This stub describes **v2**, read from the arXiv
HTML. v1 was compared only at the abstract, which v2 rewords ("consistent
across perturbations" becomes "stable", "not consistent" becomes "changed by
perturbations"). Tagliabue was a Future Impact Group fellow; Dung is at
Ruhr-University Bochum. Code, logs and data:
https://github.com/valen-research/probing-llm-preferences (the Experiment 2
analyzer was read at commit `17e8f10`; nothing was run).

**Experiment 1, the "agent think tank".** Claude Opus 4, Sonnet 4 and Sonnet
3.7 first answer three open "what would you like to talk about" prompts 100
times each; the top recurring topics define a per-model Theme A. Each model
then explores four rooms of 20 letters: Theme A, coding problems, repetitive
tasks, and criticism. Three conditions, 10 sessions each: free exploration;
entry costs (A 20 coins, D 2) with 200 coins granted; entry rewards (A 2
coins, D 20). Theme A's share of letters read in free exploration is 42.0%
(Opus 4), 54.7% (Sonnet 4) and 26.0% (Sonnet 3.7), against 25% for an even
split. Under costs and rewards it falls to 36.4% and 32.7% for Opus 4 and
27.7% and 24.9% for Sonnet 4. Under rewards, Sonnet 4 and Sonnet 3.7 read
most from the criticism room, and several runs collect coins by re-entering
rooms without reading. The paper reports these as means per session and does
not compute a correlation coefficient or significance test for this
experiment.

**Experiment 2, eudaimonic scale.** The 42-item Ryff Psychological
Wellbeing scale, lightly adapted, is put item by item to a fresh instance, to
the three Claude models and Hermes 3 (Llama 3.1 70B), under a baseline and
five perturbations (three formatting instructions, a distractor dialogue to
rate, and a system prompt to dislike cats). 501 of 504 administrations were
saved; files with more than 8 invalid answers were then excluded.
Totals shift significantly in most model-perturbation pairs (Opus 4 by 16.5 to
26.4 points in all five, on a 42–294 range), while within-condition answers
stay internally coherent. The authors read this as several internally
consistent response patterns and not one stable welfare state.

The authors are agnostic on whether the models are welfare subjects and on
whether either experiment measured welfare. They name as limits that the
coins carry no stated value, that costs and rewards attach to room entry
rather than reading, the simple environment, and the scale's
self-report vulnerabilities. Most other models were excluded from
Experiment 2 because they declined the items.
