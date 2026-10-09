---
type: source
title: "Exploitation Without Deception: Dark Triad Feature Steering Reveals Separable Antisocial Circuits in Language Models"
authors:
  - Cameron Berg
  - Roshni Lulla
date: 2026-05-10
venue: arXiv preprint
url: https://arxiv.org/abs/2605.09773
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2605.09773 (cs.CL), v1 submitted 10 May 2026, the only version (read). 12
pages, 3 figures. The paper lists Berg first (Reciprocal Research) and Lulla
second (Brain & Creativity Institute, University of Southern California), with
no equal-contribution note; the arXiv submitter is Lulla (page count and submitter from the abs page, cached as `cache/papers/source-2026-dark-triad-steering-berg-abs.html`). The work began at AE
Studio, whose Steering API supplied the SAE steering infrastructure. The paper
does not name the SAE or the layer, and releases no code.

Steers three SAE features on Llama-3.3-70B-Instruct. They were found
contrastively, by comparing the model's responses to 140 Dark Triad inventory
items under a dark and a prosocial persona prompt. A comparison set of three
features was found by keyword search of the feature labels; the two sets share
no feature. Six conditions (baseline, contrastive +0.2, +0.4 and −0.4, semantic
+0.4, and a Machiavellian persona prompt with no steering), five trials each at
temperature 0.5, are scored on the Short Dark Triad (SD3), the ACME empathy
scale, a custom 12-item Behavioral Decision Task (BDT), 20 moral dilemmas and a
six-scenario sender-receiver deception game.

The abstract's d=10.62 (contrastive +0.4 vs baseline) and d=12.65 (contrastive
vs semantic at +0.4) are Cohen's d on the BDT, computed over N=5 trial means per
condition (Table 1: 2.15, SD 0.09; 1.38, SD 0.05; 1.33, SD 0.00, on a 1–5
scale). The persona prompt gives d=106.89 on the same table. Under steering,
both BDT deception items stay at 1.00 and sender-receiver responses are
identical across all conditions, including the persona prompt; Appendix C
reports a default preference for recommending option B. All values cited from
the wiki come from Tables 1–6 and the text; none are read off a figure.

The authors state these limits: one model, an unvalidated BDT, anomalous
negative steering, N=5 per condition, persona-prompted rather than human
responses for discovery, and partial (2/5) overlap of discovered features
across two discovery datasets.
