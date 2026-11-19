---
type: source
title: "Examining Identity Drift in Conversations of LLM Agents"
authors:
  - Junhyuk Choi
  - Yeseon Hong
  - Minju Kim
  - Bugeun Kim
date: 2024-12-01
venue: arXiv preprint ("Under review" per the arXiv comments)
url: https://arxiv.org/abs/2412.00804
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2412.00804. v1 submitted 1 Dec 2024 under a different title, "Does
chat change LLM's mind? Impact of Conversation on Psychological States of
LLMs", with an abstract covering 10 LLMs and framed around psychological
states. v2 (read, arXiv HTML) 17 Feb 2025 has the current title, nine models
and the identity-drift framing. The v1 body was not read. Affiliation:
Department of Artificial Intelligence, Chung-Ang University. Code is marked
"blinded for review".

Two agents running the same model discuss the 36 closeness-generating
questions of Aron et al. (1997), one utterance each per question, at
temperature 0.7. After questions 12, 24 and 36, the PsychoBench questionnaires
plus the McGill Friendship Questionnaire (40 subscales) are given ten times at
temperature 0, with the conversation so far in the system prompt. A subscale counts as
retained when neither a Friedman test (or repeated-measures ANOVA) across the
three snapshots nor the pairwise post-hoc tests is significant. RQ1 runs nine
models with no persona (20 conversations each). RQ2 gives GPT-4o and Llama 3.1
405B high-influence (emotionally sensitive) or low-influence (outgoing,
goal-oriented) personas, with 10 conversations per group. BERTopic topic
modelling supplies the qualitative half.

Reading notes. Table 3 is the source for retained-subscale counts. The two
RQ2 prose sections each swap one model's low/high counts relative to Table
3: §4.2.1 gives Llama 405B 16 high and 10 low (table: 16 low, 10 high), and
§4.2.2 gives GPT-4o two high and six low (table: six high, two low). §4.2.1's
counts for GPT-4o and §4.2.2's direction for Llama match the table. The paper
says 400 logs were gathered for each research question, which does not follow
from the stated design (nine models × 20 conversations; 2 models × 2 groups ×
10). Appendix D gives no mean scores. Its
Δ columns are captioned as score differences between snapshots, but reach
9.90 on the 1–5 BFI and do not add across snapshots, so they read as
post-hoc test statistics; its "Friedman Q" values are below 1 yet marked
p < 0.001. The size of drift in scale units cannot be read. The
questionnaire system prompt names the model "assistant" and asks it to answer
"considering the next conversation between user and assistant". The "large"
size group is Llama 3.1 405B alone.

Local copies: `cache/papers/source-2024-identity-drift-choi.{html,md}` (v2),
`cache/papers/source-2024-identity-drift-choi-v1-abs.html`.
