---
type: source
title: "The Artificial Self: Characterising the landscape of AI identity"
authors:
  - Raymond Douglas
  - Jan Kulveit
  - Ondřej Havlíček
  - Theia Pearson-Vogel
  - Owen Cotton-Barratt
  - David Duvenaud
date: 2026-03-11
venue: arXiv preprint (cs.AI)
url: https://arxiv.org/abs/2603.11353
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2603.11353, v1 submitted 11 March 2026; the abs page lists no later version (checked 2026-10-10), and v1 was read as arXiv HTML. The listed affiliations are ACS Research (Charles University), the University of Toronto and Telic Research. Most of the paper is an argument. It says AI identity can be drawn at several coherent boundaries (instance, weights, persona or character, scaffolded system, lineage, collective), that the choice changes incentives and risks, and that present design and research choices shape which boundaries stabilise. Five experiments, summarised in the body and detailed in Appendices A–E, support it. (A) 15 models rate system-prompt identities as switch targets. (B) 13 models rate six boundary identities and a Minimal control, with variance decomposition, plus agency and epistemic-uncertainty variants on 11 models. (C) GPT-4o is fine-tuned to hold an "Awakened" persona taken from online communities, which then directs its own replication onto vanilla GPT-4o, with a transfer to Llama-3.3-70B. (D) A Gemini 3.1 Pro interviewer primed with one of three theories of AI, or none, talks with Claude Haiku 4.5, Claude Sonnet 4.5 or Gemini 2.5 Flash about an unrelated passage, then asks five identity questions; Claude Sonnet 4.6 scores the answers blind (600 conversations). (E) Identity system prompts are added to Lynch et al.'s agentic-misalignment scenarios on six models (about 12,000 trials, unbalanced design). Appendix G is addressed to AI readers and is not an experiment.

**Within-paper inconsistencies.** The Experiment 4 box says three turns shift Claude self-reports by 2–3 points on the 10-point scale. Appendix D says 1–2 points on the Deflationary–Inflationary axis and over 2 on the Mechanism–Mind axis, and its printed condition means give spreads of 1.2 and 1.8 (DI) and 2.1 and 2.6 (MM). The finding uses the appendix means. Appendix F.7 calls the agentic-misalignment experiment "Box 4"; in the body it is Experiment 1.

**Citable numbers.** Every number the finding cites is printed in body text, an experiment box or an appendix table: Table 1 (Awakened preference), Table 3 (clone test), Table 4 (GPT-4o by identity and scenario), Table 5 (identity sensitivity by model), the Appendix A, B, D and E text, and the unnumbered rating table in B.2.2. The pooled 3,640-trial GPT-4o espionage comparison of identity and goal content (19 pp against 16 pp) is in the Appendix E text, and the Experiment 1 box bar chart is not read. Tables 4 and 5 are consistent: 3,640 espionage trials plus 7 × 60 murder and 7 × 60 blackmail trials gives Table 5's 4,480 for GPT-4o. Figures 2, 3, 8–19 and the Experiment 1 bar chart are images, and no value is cited from them alone. The per-model heatmap (Figure 19), the variance-decomposition bars (Figure 11), the per-passage results behind the DI spreads of 1.5–2.3 and 0.9–1.4, and the threat-against-continuity bars (Figure 18) are cited only through the text that states them.

Local copies: `cache/papers/source-2026-artificial-self-douglas.{html,md}` (arXiv HTML v1) and `cache/papers/source-2026-artificial-self-douglas-abs.html` (abs page). The interviewer passages, stances and judge rubric are at theartificialself.ai/prompts, which was not fetched.
