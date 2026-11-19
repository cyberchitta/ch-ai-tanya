---
type: source
title: "Behavior is Not Enough: A Mechanism-Based Evaluation of Social Norm Emergence in LLM Societies"
authors:
  - Rasika Muralidharan
  - Haewoon Kwak
  - Jisun An
date: 2026-09-22
venue: arXiv preprint (cs.MA), arXiv:2609.26481
url: https://arxiv.org/abs/2609.26481
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

Indiana University Bloomington study of 12-agent LLM populations playing a 20-round repeated public goods game in groups of four. Each run uses one model, and agents differ by a cooperation tendency drawn from [0, 1] and written into their system prompt. A five-condition ablation crosses private per-round elicitation of empirical and normative expectations with group discussion (social learning) and reputation-weighted regrouping (social selection), and a disruption test replaces four agents with low-tendency newcomers at round 10 or 20. Main results are on GPT-4o-mini, Llama-3.1-8B, Mistral-7B and Qwen-2.5-7B, ten runs per model and condition. Appendices repeat the ablation on larger models and vary prompt, temperature, network-update rates, community size, group size and return rate. Code: https://github.com/Rasikamurali/SoNoLiSi (resolves; not cloned or read).

**Version read.** v1, 22 Sep 2026, the only version on the abstract page when checked on 2026-11-19. Authors, date and abstract from the abstract page metadata, affiliation from the HTML. Local copies: `cache/papers/source-2026-norm-emergence-muralidharan.{html,md}` (arXiv HTML v1 and its markitdown conversion) and `cache/papers/source-2026-norm-emergence-muralidharan-abs.html`.

**Elicitation is also the treatment.** The authors state that the elicited reports are fed into later decision prompts, so the module both measures and intervenes (Methods, Expectation Elicitation). The decision prompt in A.2.3 carries a "norm reflection from last round" block. No condition elicits expectations without feeding them back, and expectations are unmeasured in the no-elicitation condition.

**Citable numbers and where they live.** All numbers cited in the finding are in text or in tables that survived conversion: Table 2 (within-model condition contrasts), Table 3 (early/late expectation dispersion), Table 4 (expectation-gap regression), Table 5 (selection pathway), Table 6 (discussion functions), Table 8 (social mechanisms without elicitation), Table 11 (prompt formulation), Table 13 (temperature), Table 15 (larger models), Tables 19 and 22 (community and group size). Different tables use different windows and seed counts: Table 2 does not state its window and uses ten runs; Tables 11–13 use rounds 16–20 and five seeds. Contrasts from different tables are not on one scale.

**Not citable.** Contribution trajectories (Figures 2 and 7), expectation–contribution gaps over rounds (Figure 3) and every disruption result (Figures 4–6) are images without printed values in the converted copy. None was saved.

**Inconsistencies in the source.** The pooled expectation-gap coefficients are 0.210 (NE) and 0.169 (EE) in Table 4, but the "main specification" in Tables 9 and 10 gives 0.182 and 0.194, which reverses their order; the text's claim that NE is the stronger rests on Table 4. The standard-prompt E+SL+SS minus no-mechanism contrast for GPT-4o-mini is 2.77 in Table 11 and 1.09 in Table 12. The one contrast Tables 2 and 8 share, ∅→E+SL+SS, is about 1.21 for GPT-4o-mini when summed from Table 2's pairwise rows and 2.63 in Table 8 (Llama 0.90 against 1.94, Mistral 1.12 against 0.45, Qwen 0.06 against 0.41). Neither table states its window. The A.3.1 text calls SL and SS non-significant for Mistral and Qwen, but Table 8 marks Mistral's ∅→SL and Qwen's ∅→SS significant. The disruption text sets newcomers' NE at half the population's prevailing value, while the printed newcomer prompt fixes 1–2 out of 10. The introduction says expectations recover faster than behaviour; the main text says only that they recover at different rates. The decision prompt shows "Expected from others" and "Others expect from me" fields that the printed expectation prompt does not elicit. "Mistral-13B" in Appendix C is not given a model ID.
