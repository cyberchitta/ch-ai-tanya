---
type: source
title: "Moral Susceptibility and Robustness under Persona Role-Play in Large Language Models"
authors:
  - Davi Bastos Costa
  - Felippe Alves
  - Renato Vicente
date: 2025-11-11
venue: arXiv:2511.08565 (v1 11 Nov 2025; v2 27 Feb 2026; v3 14 May 2026, read as v3)
url: https://arxiv.org/abs/2511.08565
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

TELUS Digital Research Hub / University of São Paulo benchmark that has 15 models from six families (Claude, DeepSeek, Gemini, GPT, Grok, Llama) answer the 30-item Moral Foundations Questionnaire while role-playing each of 100 persona descriptions drawn from Ge et al.'s synthetic persona set. Each persona–question pair is queried one item at a time, 10 times at temperature 0.1 (30,000 requests per model). Moral robustness is the inverse of the mean within-persona standard deviation of ratings; moral susceptibility is the mean across-persona standard deviation of persona-mean ratings. A logit-based estimator is used for the OpenAI models to trace both metrics over temperature. Personas with any unparseable item are dropped per model, and the retained count per model is not reported. Code and data are on GitHub (bastoscostadavi/llm-moral-susceptibility).

**Versions.** v1 and v2 share an abstract that reports a clear within-family size effect on susceptibility (larger variants more susceptible) and a positive robustness–susceptibility correlation. v3 reverses both: the size slope is not significant (p = 0.150) and robustness and susceptibility are uncorrelated at the model level (r = −0.03). A TELUS Digital press release of 25 Feb 2026 (stocktitan.net reprint; read through a fetch tool only, not cached) titles the work "The Robustness Paradox: Why Better Actors Make Riskier Agents" and repeats the v1/v2 size claim; that title appears in no arXiv version. The press release's "16 model families" matches nothing in any version. The companion paper by Costa and Vicente (arXiv:2605.12850) applies these metrics to emergent-misalignment fine-tunes and describes this benchmark as covering 13 frontier models.

**Figures and citable numbers.** Every model-level R and S value is printed in Table 3 (Appendix C), and the family ANOVA, size regression and correlation statistics are in §3.2–3.4 body text. Figures 4–7 (temperature curves, rankings, scatter, foundation radars) are images; nothing is cited from them alone. The paper's text names Llama 4 Scout as the least susceptible model in §1 and §3.2 and as among the least in §3.1, while §3.3 and Table 3 give GPT-4o Mini (0.663) and Llama 4 Scout (0.667), which overlap within standard error.

Local copies: `cache/papers/source-2025-moral-susceptibility-costa.{html,md}` (v3 HTML), `cache/papers/source-2025-moral-susceptibility-costa-{abs,v1-abs,v2-abs}.html` (abstract pages).
