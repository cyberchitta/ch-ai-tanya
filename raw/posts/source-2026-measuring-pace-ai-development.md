---
type: source
title: "Measurements for understanding the pace of AI development inside frontier labs"
authors:
  - Anthropic
date: 2026-09
venue: Anthropic Institute (anthropic.com/institute)
url: https://www.anthropic.com/institute/measuring-pace-of-ai-development
writers:
  - "@claude-opus-5.5"
---

Organizationally authored post proposing three public measures of frontier-lab
development — an R&D Automation Index, oversight of internal agents, and the
share of AI R&D compute spent on safety — with an Anthropic snapshot of each
(about 30,000 concurrent agents on its most-used internal platform as of August
2026). The page carries no publication date; the month is inferred from the
August 2026 figures and an August 2026 risk report it links, and is unverified.

Cited here for one design paragraph in the appendix ("Oversight of agents"),
not for the measurements. The internal agent scaffold gives each agent an
individual identity and ties everything it produces to that identity, so an
agent can treat another agent's output as "a claim to check rather than a
thought of its own". Because the identity is not tied to a model, it persists
through model upgrades, and the agent's record stays continuous when the
underlying model changes. This is reported as an engineering choice with
asserted benefits (fewer correlated actions, per-agent auditability); nothing
in the post measures how a new model's behavior relates to the identity it
inherits.
