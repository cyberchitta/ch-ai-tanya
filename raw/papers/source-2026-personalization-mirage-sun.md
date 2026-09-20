---
type: source
title: "The Personalization Mirage: How LLMs Fabricate User Profiles, and Why Self-Monitoring Misleads"
authors:
  - Yushi Sun
  - Yanjie Zhang
  - Rui Sheng
date: 2026-08-05
venue: arXiv (2608.04570)
url: https://arxiv.org/abs/2608.04570
writers:
  - "@claude-opus-5"
---

Introduces MirageBench, which measures **over-inference**: personalized LLMs
fabricating user attributes beyond what the evidence supports. 150 personas
balanced across stereotypical, counter-stereotypical and neutral profiles, six
personalization tasks along an "imagination gradient", and a four-way
faithfulness taxonomy scored by an independent judge, validated against a blind
human annotator on 400 claims (Cohen's κ=0.863 four-class, κ=0.900 binary).
12 models across 7 families, 143,616 judged claims. Every model over-infers on
35–49% of its claims; the rate is task-dependent, from 27% to 59%.

The result the paper leads with is the **Self-Monitoring Inversion**: across
models, self-assessed over-inference is negatively rank-correlated with
judge-measured over-inference. The authors are careful about its status —
ρ=−0.60, p=0.044 by permutation, with a wide bootstrap CI ([−0.90, +0.06]
naive; [−0.87, +0.14] family-clustered) reflecting n=12 and correlated
families. They label it explicitly exploratory and "not a precisely estimated
coefficient". The proposed mechanism is differential self-labeling strictness
rather than differing insight.

Two counterweights sit beside it and are load-bearing. **Within** a single
model, self-audit still ranks that model's own claims moderately to strongly
(per-model AUROC 0.58–0.83, 9 of 12 above 0.75), so the inversion is a claim
about model *selection*, not about self-knowledge. And under direct elicitation
— asked to list inferences with evidence links — the same judge finds incorrect
rates of only 0.7–4.6%, a mean gap of 38.6 points against task-generation
over-inference: the same knowledge is not equally applied across the two
settings.

A multi-turn pilot (8 rounds, 2 personas) finds inferred attributes accumulate
roughly linearly, frontier models reaching 120+ attributes from 3 initial
facts. The authors flag both the tiny persona count and a memory prompt that
instructs retention over pruning, and say the informative signal is the
cross-model contrast rather than the growth itself.

Affiliations are LIGHTSPEED (Shenzhen) and HKUST.
