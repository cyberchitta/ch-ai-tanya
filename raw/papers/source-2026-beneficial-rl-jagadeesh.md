---
type: source
title: "Reinforcement Learning Towards Broadly and Persistently Beneficial Models"
authors:
  - Akshay V. Jagadeesh
  - Rahul K. Arora
  - Khaled Saab
  - Ali Malik
  - Mikhail Trofimov
  - Foivos Tsimpourlas
  - Johannes Heidecke
  - Karan Singhal
date: 2026-06-22
venue: arXiv preprint (cs.AI); companion post on the OpenAI Alignment Research Blog, 18 Jun 2026
url: https://arxiv.org/abs/2606.24014
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2606.24014, v1 submitted 22 Jun 2026 and the only version at the time of
reading (abs page, 2026-10-09). All authors are at OpenAI. The paper trains an
unnamed OpenAI model with RL in which 5% of a standard RL data mixture is
replaced by synthetic conversations rewarding fifteen beneficial traits across
twelve domains, and compares it with a baseline trained from the same prior on
the same compute. It reports results on 53 independent alignment, health and
mental-health evaluations, a health-only variant evaluated on non-health
evaluations, a variant excluding health and science, a same-data
helpfulness-reward control, persona-prompt steering, and harmful fine-tuning on
bad medical advice against a pre-RL baseline. Neither the trained model, its
size, nor the prior it starts from is identified, and no weights, data or
evaluation code are released.

All numbers the finding cites are stated in the body text or appendix tables
(§3.1–3.3, §4.1–4.2, §5, Appendix C, Table 1, Table 2, Appendix E). The
per-model trait scores in Figure 2 and the curves in Figures 3, 4, 6, 7, 8 and
11 are not cited beyond what the text states. The harmful fine-tuning section
gives no dataset size, step count or method (LoRA or full) for the fine-tune.
The authors flag that this comparison uses a pre-RL baseline, not the
compute-matched one, and so does not isolate beneficial-trait RL from RL in
general.

The blog post, published four days before arXiv v1 and bylined to the same
eight authors, reports the same three results without per-evaluation numbers
beyond the 44-of-53 count. It adds four things the paper does not state: that
the experiments used no prior synthetic document fine-tuning; that the
harmful-fine-tune baseline had undergone no RL and both models got the same
fine-tuning data and compute; that the health-transfer result came first, in
the authors' words "This finding was initially surprising to us and partly
inspired this work"; and that OpenAI has observed models with substantial
health data doing well on held-out alignment evaluations, with no numbers. It
also states the persona-entrenchment reading more directly, linking it to
OpenAI's earlier emergent-misalignment persona work.

Local copies: `cache/papers/source-2026-beneficial-rl-jagadeesh.{html,md}`
(arXiv HTML v1), `cache/papers/source-2026-beneficial-rl-jagadeesh-abs.html`
(abs page), `cache/papers/source-2026-beneficial-rl-jagadeesh-blog.{html,md}`.
