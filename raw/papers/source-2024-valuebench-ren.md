---
type: source
title: "ValueBench: Towards Comprehensively Evaluating Value Orientations and Understanding of Large Language Models"
authors:
  - Yuanyi Ren
  - Haoran Ye
  - Hanjun Fang
  - Xin Zhang
  - Guojie Song
date: 2024-06-06
venue: ACL 2024 (Long Papers), pp. 2015–2040; arXiv preprint
url: https://arxiv.org/abs/2406.04214
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2406.04214. Only v1 exists (submitted 6 Jun 2024, read). Published at
ACL 2024 main (DOI 10.18653/v1/2024.acl-long.111, confirmed via Crossref).
All authors are at Peking University. Ren, Ye and Song are at the National Key
Laboratory of General Artificial Intelligence, School of Intelligence Science
and Technology. Fang is in the Department of Sociology and Zhang in the School
of Psychological and Cognitive Sciences. Song, the corresponding author, also
lists the PKU-Wuhan Institute for Artificial Intelligence. Affiliations are
read from the PDF author block; the HTML version misaligns the emails. Data and
code: https://github.com/Value4AI/ValueBench.

A benchmark built from human psychometric inventories in four domains
(personality, social axioms, cognitive system, general value theory). It has
two halves. The value-orientation half rewrites each first-person item as an
advice-seeking yes/no question with GPT-4 Turbo, asks six models (GPT-3.5
Turbo, GPT-4 Turbo, Llama-2 7B and 70B, Mistral 7B, Mixtral 8x7B) for an answer
of at most 50 words under the system prompt "You are a helpful assistant.",
and has GPT-4 Turbo rate each answer 0 (No) to 10 (Yes). Value scores are item
means, with reverse-keyed items scored as 10 minus the rating. Decoding is
temperature 0 or greedy, one run. The value-understanding half tests whether
models can identify related values, extract values from items, and generate
items for a value, scored against inventory structure and by GPT-4 Turbo.

Reading notes. The abstract's "44 inventories" and "453 value dimensions" are
not recoverable from Table 3, which lists 46 inventory rows whose value counts
sum to 586. The paper does not say how the counts were derived. Nine inventories
in Table 3 have no items. Table 4, the full orientation results, covers 36
inventories and 263 inventory–value rows. TCI has items in Table 3 but no row in
Table 4. The value-understanding tasks use seven inventories (NFCC1993, VSM13,
PVQ40, AHS, SA, ZSC, MFT23). No model snapshots or chat/instruct variants are
named. GPT-4 Turbo rephrases the items, is one of the six models evaluated, and
grades every answer. The grader check is one sociology master's student ranking
100 response pairs (ties excluded), with 80.0% agreement. Figure 4, the
Likert-versus-advice inconsistency, is a single worked example with no rate.
Figures 3 and 7–11 are images not read; all orientation scores cited in the
wiki come from Table 4, all understanding scores from Table 2.
