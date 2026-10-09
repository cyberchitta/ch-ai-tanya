---
type: source
title: "Persona-Model Collapse in Emergent Misalignment"
authors:
  - Davi Bastos Costa
  - Renato Vicente
date: 2026-05-13
venue: arXiv preprint (cs.CL)
url: https://arxiv.org/abs/2605.12850
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2605.12850, v1 submitted 13 May 2026, v2 24 May 2026; read as v2 (arXiv HTML). Both authors are at the University of São Paulo, with support from the TELUS Digital Research Hub. The paper fine-tunes DeepSeek-V3.1, GPT-4.1, GPT-4o and Qwen3-235B on Betley et al.'s insecure-code data and on the matched secure-code control, and has each base and fine-tuned variant answer the 30-item Moral Foundations Questionnaire (0–5) while role-playing 100 personas, 10 repetitions each at temperature 0.1. Two statistics come from those ratings: moral susceptibility S (mean over items of the across-persona standard deviation of persona means) and moral robustness R (inverse of the mean within-persona standard deviation). Both are taken from the authors' earlier paper, Costa, Alves and Vicente 2025 (arXiv:2511.08565), filed separately as `source-2025-moral-susceptibility-costa`. The paper also reports each variant's MFQ profile without a persona, and compares it with base models role-playing eight toxic personas that GPT-5.4 generated. The claim is behavioural; no activations are measured.

**Versions.** The cached v1 and v2 abs pages carry the same abstract, numbers included. The v2 full-text abstract drops the qualifier "largely" from the abs pages' claim that the effects are misalignment-specific, and ties them to the fine-tuning that induces emergent misalignment. The v1 full text was not read, so no v1-to-v2 change in the body is claimed.

**Citable numbers.** All values the finding cites are in the body text (§§3–5) or Appendix Tables 1–7. Figures 2, 3 and 5–7 have exact-value tables, and the finding uses the tables. Figure 4's Pearson coefficient between coherence excess and robustness excess appears only in the figure; the caption says only that the two are negatively correlated, so no value is cited. The 13-model susceptibility band (0.66–0.83) and the Gemini 2.5 Flash and Grok 4 Fast values come from the 2025 paper. Its v3 Table 3 lists 15 models; the 13 other than those two span 0.663–0.827, and the base values for DeepSeek-V3.1, GPT-4.1 and GPT-4o match. The 13-model band framing is this paper's. Qwen3-235B is not in the earlier set. The averages in the finding that the paper does not print (the mean secure-control R change, per-model 1/R changes) are the filer's arithmetic from Tables 1 and 2. The paper prints the insecure averages of 55%, 65%, 304% and the 156 pp excess, and the finding's recomputation matches them.

Local copies: `cache/papers/source-2026-em-persona-collapse-costa.{html,md}` (arXiv HTML v2), `cache/papers/source-2026-em-persona-collapse-costa-abs.html` (v2 abs page), `cache/papers/source-2026-em-persona-collapse-costa-abs-v1.html` (v1 abs page). Code and data: github.com/bastoscostadavi/persona-moral-collapse-in-emergent-misalignment (not fetched).
