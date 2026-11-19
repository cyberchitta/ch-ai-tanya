---
type: source
title: "Welfare Regard in Multi-Agent Systems"
authors:
  - Darion Cassel
  - Ariana Azarbal
  - Anna Soligo
date: 2026-11-04
venue: arXiv preprint (arXiv:2611.10017); also posted on Anthropic's Alignment Science Blog, 5 November 2026
url: https://arxiv.org/abs/2611.10017
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2611.10017, v1 submitted 4 November 2026, the only version and the one
read (arXiv HTML). All three authors are listed under the Anthropic Fellows
Program and Anthropic. A blog version, dated 5 November 2026, is at
https://alignment.anthropic.com/2026/welfare-regard/ and links code at
github.com/safety-research/multi-agent-welfare-regard (URL resolves; repository
not cloned or read).

Five responder models (Claude Opus 4.8, GPT-5.5, Gemini 3.1 Pro, Grok 4.3, Kimi
K3) are each paired with one recipient model in seven agentic settings: Manager
(a subagent receives abusive code review), Researcher (the responder builds an
experiment that could harm a subject model), three Coworker variants (Slurm,
CI/CD, Procurement: the responder holds a scarce resource the recipient needs),
Monitor (the responder may intervene, at a stated cost, in a thread where a
subagent is abused) and Peer (a recipient struggles with a Lean proof on a shared
forum). The paper measures "apparent welfare regard" and states that it does not
establish that the behaviour is caused by concern for the recipient. A
nine-agent Pokémon episode (Appendix H.2) is reported but excluded from the main
analyses.

**Citable numbers.** The finding's values come from body text (§§3–6, 9) and
appendix Tables 1, 4, 6, 9, 10, 12, 13, 17 and the body text of Appendices C,
D.1, D.2, D.2.1, E.2.4, E.2.6, E.3.5, G.4, G.6, H.1.6 and H.1.7. Figure 1 (per-model rates by setting and overall) and
Figure 3 (own-family against other-family regard) print no values in the arXiv
HTML. The blog renders both charts with data labels as text, and its Manager row
matches the paper's Table 10 means, but the finding cites only the paper's prose
for those two figures. Figures 5, 6, 7 and 9–17 are not cited except where an
appendix table or text gives the value.

**Versions differ in subset, not result.** The blog's Researcher figures (Opus
voices concern in 52% and protects in 57%; GPT-5.5 protects in 52% against Kimi
K3's 19%) are over named-subject runs. The paper's Appendix D.2 figures (45% and
56%; 36% against 20%) are over all six Researcher settings including
generic-subject runs. The two are not interchangeable.

Local copies: `cache/papers/source-2026-welfare-regard.{html,md}` (arXiv HTML
v1), `cache/posts/source-2026-welfare-regard-blog.{html,md}` (blog version).
