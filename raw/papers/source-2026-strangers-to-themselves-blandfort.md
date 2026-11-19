---
type: source
title: "Strangers to Themselves: What Language Models Say About Themselves Is Generic"
authors:
  - Phil Blandfort
  - Urja Pawar
date: 2026-09-09
venue: arXiv preprint (arXiv:2609.09899 [cs.LG])
url: https://arxiv.org/abs/2609.09899
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2609.09899, v1 9 Sep 2026, the only version and the one read (arXiv
HTML). Blandfort is at Predictably Weird, Pawar is independent; the work was
funded by Coefficient Giving. Local copies:
`cache/papers/source-2026-strangers-to-themselves-blandfort.{html,md}`.
The paper names a code and data repository
(github.com/PredictablyWeird/strangers-to-themselves), which was not cloned or
read for this stub.

A black-box test of behavioural self-knowledge. Twelve model entries from six
labs (three frontier bases, each with reasoning off and low) are measured on
nine public behavioural evaluations, then asked to predict their own
per-condition rates by fifteen methods. Each asking method is paired with a
control that removes the self: the same question about a generic capable AI
agent, other models' answers about themselves, or the cross-model mean of
measured behaviour. Headline numbers are macro Pearson correlations on a frozen
test split, with claims pre-registered on the dev split. A finetuning arm
(Appendix M) trains base models on records of their own behaviour, including a
replication of Binder et al.'s property-prediction objective. The text says
four base models, but five appear: Llama-3.3-70B, Gemma-4-31B, Qwen2.5-72B and
DeepSeek-V4-Flash, plus Qwen3-30B-A3B in the property-prediction arm only.

Reading notes. The macro aggregates in Table 1 include agentic misalignment,
which has no dev split; the pre-registered tests in Table 16 use the other
eight evaluations, so a few values differ slightly between the two (self-report
+0.04 in Table 1, +0.03 in Table 16). The self-flattering shift in §4.5 was
added after unblinding and is labelled descriptive. Per the paper's
Use-of-LLMs statement, Claude Code implemented the harness and analyses under
author direction, ran experiments and drafted text; study design and
statistical decisions were the authors'.
