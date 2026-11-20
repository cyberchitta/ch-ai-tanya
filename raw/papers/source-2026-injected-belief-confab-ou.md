---
type: source
title: "Reasoning Models Confabulate to Defend Injected Beliefs About Their Own Requests"
authors:
  - Yang Ou
date: 2026-11-13
venue: arXiv preprint (arXiv:2611.17958 [cs.LG])
url: https://arxiv.org/abs/2611.17958
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2611.17958. v1 13 Nov 2026, the only version on the abs page when
checked on 2026-11-19, read from the arXiv HTML. Single author, an
independent researcher. CC BY 4.0. Local copies:
`cache/papers/source-2026-injected-belief-confab-ou.{html,md}` and the abs
page `source-2026-injected-belief-confab-ou-abs.html`. No code or data URL is
given; a supplement with transcripts is mentioned (App. H) without a link.

Ou injects the "forming-trace" of an off-topic concept (the model's residual state at the end of a prompt asking for a haiku on that concept, with a shared PCA component removed) into six open-weight reasoning models, 7–32B, while they
are asked to write a haiku about a different topic. The models write about
the injected topic, quote it back as their request, and under warnings that
name the true topic still answer with the injection, sometimes inventing a
user correction to explain the discrepancy. Attention-ablation and IOI and
induction-head experiments locate the override after attention, in content
carried by intact circuits.

Reading notes. Every number cited in the wiki is in the body text, Tables
2–4 or the appendix text, so no figure image was saved. Per-model values in
Figure 1 are not cited. Haiku labels come from one Claude Opus judge per
model, checked by the author with no agreement statistic. The confabulation
coding was checked against the author's blind hand-coding of 24 of 72 chains
(87.5%, κ = 0.59). The behavioural counts cover four models; QwQ-32B and
OpenReasoning-Nemotron-7B truncate and are excluded. Table 4 is one draw per
cell. A question-answering "companion experiment" is mentioned without
numbers. Exact Hugging Face model identifiers are not given in the paper.
