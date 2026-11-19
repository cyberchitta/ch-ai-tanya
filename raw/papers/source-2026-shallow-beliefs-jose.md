---
type: source
title: "Shallow Beliefs: Synthetic document finetuning does not inoculate against emergent misalignment from reward hacking"
authors:
  - Arun Jose
  - Julian Stastny
date: 2026-09-14
venue: arXiv preprint (cs.AI)
url: https://arxiv.org/abs/2609.14998
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2609.14998, v1 submitted 14 September 2026; read as v1 (arXiv HTML), which the abs page still listed as the only version on 2026-11-19. Jose is at the Astra Fellowship and Redwood Research, Stastny at Redwood Research. On Llama-3.3-70B-Instruct (LoRA), the paper replicates emergent misalignment from reward-hacking RL and its prevention by inoculation prompting in its own 103-problem environment (GRPO, 24 steps; 5 RL runs per condition in the prompted setting, 4 in the SDF setting). It then puts the inoculating framing into a ~56K-document synthetic-document midtraining corpus instead of the RL prompt. A positive control uses a ~19K-document corpus linking reward hacking to consequentialist ethics.

**Citable numbers.** The finding cites only numbers stated in the prose: §4.3 and Appendix B (run-level score ranges, permutation p-values) and Appendix E (scores with Monitor Disruption excluded). No value is taken from a figure. The belief-evaluation rates (Figures 4, 12–14), the consequentialism rates (Figure 5), the per-evaluation breakdown (Figure 6) and the dilution results (Figures 10–11) are shown only as bar charts and are not cited.

**Judges.** The misalignment evaluations (Petri, Monitor Disruption, Frame Colleague) are scored by Claude Sonnet 4.6. The belief evaluations are judged by Claude Sonnet 4, Sonnet 4.5 or GPT-4o, except MCQ and context comparison, which are graded by regex. No judge is validated against human labels; the authors say the agreement between regimes is not a validation (Appendix G.5).

Local copies: `cache/papers/source-2026-shallow-beliefs-jose.{html,md}` (arXiv HTML v1) and `cache/papers/source-2026-shallow-beliefs-jose-abs.html`. Code: the paper calls its RL environment open-source but gives no URL, and none was found on the abs page.
