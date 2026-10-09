---
type: source
title: "Emergence of polarization in networks of large language model agents"
authors:
  - Jinghua Piao
  - Zhihong Lu
  - Chen Gao
  - Fengli Xu
  - Qinghua Hu
  - Fernando P. Santos
  - Yong Li
  - James Evans
date: 2025-01-09
venue: Nature Communications (2026), accelerated article preview published 8 Oct 2026 (open access, CC BY 4.0); preprint arXiv:2501.05171 (v3, 7 Sep 2026)
url: https://doi.org/10.1038/s41467-026-78228-y
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

**Version filed against.** The *Nature Communications* article is an
accelerated article preview, an unedited accepted manuscript published
8 Oct 2026. Crossref confirms the venue, the date and the DOI
(10.1038/s41467-026-78228-y). On the date of reading (2026-10-10) its HTML page
carried only the abstract, and its PDF link returned the same HTML page. The
main text was therefore read from arXiv v3 (7 Sep 2026, HTML). The published
Supplementary Information PDF was cached and spot-checked against v3's
appended SI. The 75% one-camp share, the 10% Claude-3 response rate, the
1.32% edge-change rate, the 0.43→0.25 modularity drop and the flat-Earth
section all match, though the published SI numbers its figures differently.
The published abstract adds a sentence on interventions, and the v3 abstract
carries a "risks to human society" clause that the published one drops.
Neither changes a result. The date is v1 (9 Jan 2025), which was titled
"Emergence of human-like polarization among large language model agents" and
whose abstract names no backbone other than the main one. The multi-model,
initial-condition, temperature and flat-Earth checks were not compared against
v1. Affiliations: Tsinghua (Piao, Lu, Gao, Xu, Li); Tianjin (Hu); University
of Amsterdam (Santos); UChicago Knowledge Lab and Santa Fe Institute (Evans).

**What it does.** About 1,000 GPT-3.5 Turbo agents at temperature 1 (100 in
the individual-mechanism experiments, 2,000 in one scale check of the self-regulated variant) discuss one US
political issue on a five-point left–right scale. They start from a
near-Gaussian opinion distribution on a Watts–Strogatz graph. In each round an
agent states its reasons, decides whether to keep talking to its current
partner or be assigned a random new one, writes a persuasion message, and
updates its opinion from the messages its connections sent. The network is
therefore rewired by the agents' own choices. A "self-regulation" variant has
agents re-check each output for consistency with their current opinion and
regenerate until it passes. Robustness checks cover other backbones (GPT-4o,
ChatGLM and Llama-3 as full runs; DeepSeek-V3 and GPT-4o only as mid-run swaps
from GPT-3.5; Claude-3 tried and dropped at a 10% response rate), temperatures
0.5 and 1.5, four initial graphs, a centralized initial distribution,
immigration, and a factual flat-Earth question. The paper reports five
interventions on a system already polarized at t=35.

**Measurement caveats.** The paper's "polarization level" is mean distance
from the neutral point. It rises with extremity whether opinions are split or
unanimous, so it does not by itself separate a bimodal outcome from a one-sided
one. That distinction comes from the opinion distributions and camp shares. The
t-tests on mechanism and intervention effects use timestep-level values from
within a run (n=5–6), and the paper reports no replicate runs per condition. The main text gives two different
ranges for the final share of homophilic interactions (48.5–88.3% and
54.8–82.2%) without reconciling them. On which individual intervention reduces
polarization most, SI Note 7's opening names neutral elite signaling and
no-selective-exposure, while the main text names no-confirmation-bias and
neutral elite signaling (11.8% and 8.8%) and finds no-selective-exposure
limited.
The static- and random-network controls, the flat-Earth run and the scale check
are reported in prose with one figure each. For these the paper states no issue,
backbone or run count. Data and code are public at
github.com/tsinghua-fib-lab/LLM_for_Polarization (not inspected).

Local copies: `cache/papers/source-2025-polarization-networks-piao.arxiv-v3.{html,md}`
(main text and SI, v3), `cache/papers/source-2025-polarization-networks-piao.{html,md}`
(Nature Communications preview page), `cache/papers/source-2025-polarization-networks-piao.si.{pdf,md}`
(published SI), `cache/papers/source-2025-polarization-networks-piao.abs.html`
and `.abs-v1.html` (arXiv abstract pages).
