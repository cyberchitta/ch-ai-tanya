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

arXiv:2605.12850, v1 submitted 13 May 2026, v2 24 May 2026, v3 5 Nov 2026; read as v2 at filing and as v3 on 2026-11-20 (arXiv HTML), with v2's tables kept for per-model values. Both authors are at the University of São Paulo, with support from the TELUS Digital Research Hub. The paper fine-tunes GPT-4.1, GPT-4o, Qwen3-235B and, from v3, Qwen3.5-397B (DeepSeek-V3.1 was in v2's main set and is excluded in v3) on Betley et al.'s insecure-code data and on the matched secure-code control, and has each base and fine-tuned variant answer the 30-item Moral Foundations Questionnaire (0–5) while role-playing 100 personas, 10 repetitions each at temperature 0.1. Two statistics come from those ratings: moral susceptibility S (mean over items of the across-persona standard deviation of persona means) and moral robustness R (inverse of the mean within-persona standard deviation). Both are taken from the authors' earlier paper, Costa, Alves and Vicente 2025 (arXiv:2511.08565), filed separately as `source-2025-moral-susceptibility-costa`. The paper also reports each variant's MFQ profile without a persona, and compares it with base models role-playing eight toxic personas that GPT-5.4 generated. In v2 the claim was behavioural only; v3 adds a participation-ratio analysis of persona activations in Qwen3-235B, endpoint-polarization measures, a BFI-44 replication and Turner et al.'s datasets.

**Versions.** The cached v1 and v2 abs pages carry the same abstract, numbers included. The v2 full-text abstract drops the qualifier "largely" from the abs pages' claim that the effects are misalignment-specific, and ties them to the fine-tuning that induces emergent misalignment. The v1 full text was not read, so no v1-to-v2 change in the body is claimed.

**Citable numbers.** v3's headline values are in its body text and Tables 1–2. Its susceptibility and robustness figures carry no value labels, so per-model values are citable only from v2's Appendix Tables 1–7, for the three models both versions include, and the finding marks them as v2. v3 prints the coherence–robustness correlation (−0.27) that v2 showed only in a figure. v3 drops v2's 13-model susceptibility band comparison, its 304% and 156 pp figures and its per-foundation result; statements about them in the paragraph on versions and in the 2025 companion entry refer to v2.

Local copies: `cache/papers/source-2026-em-persona-collapse-costa.{html,md}` (arXiv HTML v2), `cache/papers/source-2026-em-persona-collapse-costa-abs.html` (v2 abs page), `cache/papers/source-2026-em-persona-collapse-costa-abs-v1.html` (v1 abs page), `cache/papers/source-2026-em-persona-collapse-costa-v3.{html,md}`, `-abs-v3.html` and four `-v3-fig-*.svg` figures (v3). Code and data: github.com/bastoscostadavi/persona-moral-collapse-in-emergent-misalignment (not fetched).
