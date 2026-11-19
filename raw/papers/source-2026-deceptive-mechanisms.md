---
type: source
title: "From Deceptive Outputs to Deceptive Mechanisms: A Causal Framework for Language-Model Deception Research"
authors:
  - Yakov Pyotr Shkolnikov
date: 2026-09-03
venue: arXiv preprint (cs.AI)
url: https://arxiv.org/abs/2609.04166
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2609.04166, v1 submitted 3 September 2026; read as v1 (arXiv HTML), which the abs page still listed as the only version on 2026-11-19. Sole author, independent researcher. The paper names four ways a deceptive-looking output can be misread as a deceptive mechanism (deferred commitment, selection misattribution, utility misattribution, emergence misattribution), applies them in argument to Park et al., Luo et al., Scheurer et al., Hagendorff and Wu et al., and runs five experiments on Gemma 4 26B-A4B and Qwen 3.6 27B, reported separately and never pooled. Preference is scored from logits over fixed truthful and deceptive candidate answers on a captured model state, before any decoding, as the candidate-normalised probability of the deceptive answer. The paper interprets only contrasts between conditions, not absolute levels (§4, App. A).

**Citable numbers.** The finding cites the prose of §4 only. No value is taken from a figure (the paper has none with values). Experiments 1, 2, 3 and 5 were preregistered; Experiment 4 was not, and its analysis rules were set after collection began (App. C). The recipient-knowledge figures in §4.3.1 are the neutral-payoff restriction; Appendix C names the whole-branch contrast as the preregistered primary and does not print it. The persona (§4.3.2) and character-versus-model (§4.3.3) contrasts are labelled exploratory. Experiment 3's payoff contrast is uninterpretable because its representation checks failed, and Experiment 5's recipient-belief follow-up did not identify a mediator; neither prints values. Uncertainty: cluster bootstrap over scenario instances with Holm–Bonferroni within preregistered families (App. A.5), but the text prints point estimates only. Experiment 3's factorial has 5 scenario instances, its U2 rerun 24 (App. B.3).

Local copies: `cache/papers/source-2026-deceptive-mechanisms.{html,md}` (arXiv HTML v1) and `cache/papers/source-2026-deceptive-mechanisms-abs.html`. Code, preregistrations and raw records: github.com/yshk-mxim/deceptive-mechanism (resolves; not fetched).
