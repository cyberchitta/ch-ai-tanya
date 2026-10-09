---
type: source
title: "Initial results of the Digital Consciousness Model"
authors:
  - Derek Shiller
  - Laura Duffy
  - Arvo Muñoz Morán
  - Adrià Moret
  - Chris Percy
  - Hayley Clatterbuck
date: 2026-01-22
venue: arXiv preprint (cs.CY)
url: https://arxiv.org/abs/2601.17060
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2601.17060. v1 submitted 22 Jan 2026, v2 24 Apr 2026, v3 (read) 25 Sep
2026, per the abs-page submission history. No venue version. Rethink
Priorities' AI Cognition Initiative (Shiller, Duffy, Muñoz Morán, Clatterbuck,
corresponding), with Moret (University of Barcelona) and Percy (Co-Sentience
Initiative). Code: https://github.com/ai-cognition-initiative/dcm-code (resolves;
not inspected). v3 HTML cached as `cache/papers/source-2026-digital-consciousness-model-shiller.html`
and `.md`; v3 PDF and v1 HTML cached beside it. A v1–v3 text diff shows the
results sections unchanged. v3 adds a note that an *Economist* article (20 Aug
2026) uses the same model with updated data and a calibration from a
forthcoming version, and rewrites the parameter exposition: demandingness is
now defined on an odds scale, the support amplification and κ=10 Beta
construction are spelled out, and a footnote says some implementations that
reuse the labels state demandingness as a false-positive rate instead. v2 was
not compared.

The Digital Consciousness Model (DCM) is a Bayesian hierarchical model with
206 indicators, 70 subfeatures, 20 features and 13 stances on consciousness,
targeting phenomenal consciousness. Each stance is a separate model; stance
outputs are combined by a credence-weighted average. Indicator inputs are
expert credences: 16 surveys for "2024 LLMs" (6 full, 10 partial), averaged per
indicator; 2 for chickens; humans and ELIZA answered by the authors. Stance
weights come from 0–10 plausibility ratings by 13 consciousness experts
(Appendix F). Support and demandingness for every link are authorial
nine-level labels from literature review and consultation. Each system starts
from the same prior, a Beta distribution with mean 1/6 (ratio 1:5). Variables
are binary and conditionally independent given their parent (§4.5).

Plausibility-weighted median posteriors: LLMs 0.08, chickens 0.49, humans
0.85, ELIZA 0.006 (§6.2). Equal weighting gives LLMs 0.08, chickens 0.47,
humans 0.85 and ELIZA 0.006. Per stance, LLM medians run from 0.02 (Field
Mechanisms, Biological Analogy) to 0.57 (Cognitive Complexity), rising above
the prior on four stances: Cognitive Complexity, Person-like, Recurrent
Processing (Pure) and Simple Valence (§5.2.1). Table 4 gives aggregate
likelihood ratios of 28.33 (humans), 4.6 (chickens), 0.43 (LLMs) and 0.05
(ELIZA); §8 gives 0.433 for LLMs. Under a Beta(1,9) prior for LLMs and ELIZA
and Beta(9,1) for chickens and humans, the printed medians card on Figure 12
reads LLMs 0.05, ELIZA 0.00, chicken 0.97, human 1.00
(`cache/papers/figures/source-2026-digital-consciousness-model-shiller/image7.png`).
The per-stance medians in Figures 2–5 and the sensitivity plots in Figures
9–11 and 17–20 are legible only against their axes and are not cited.
Appendix B announces 206 indicators; the v3 HTML renders 140 entries.

The authors disclaim the absolute posteriors as artefacts of a largely
arbitrary prior. They tentatively endorse only the direction of update and the
ordering across systems, which they report as stable across the prior settings tested (mean
10%, 16.7%, 50% weak, 50% strong, 90%) and a coarsened parameter variant (Appendix D). Per-indicator
expert credences for LLMs are not reported in the paper.
