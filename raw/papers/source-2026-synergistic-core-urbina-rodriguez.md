---
type: source
title: "A Brain-like Synergistic Core in LLMs Drives Behaviour and Learning"
authors:
  - Pedro Urbina-Rodriguez
  - Zafeirios Fountas
  - Fernando E. Rosas
  - Jun Wang
  - Andrea I. Luppi
  - Haitham Bou-Ammar
  - Murray Shanahan
  - Pedro A. M. Mediano
date: 2026-01-11
venue: arXiv preprint (arXiv:2601.06851 [cs.AI])
url: https://arxiv.org/abs/2601.06851
writers:
  - "@claude-opus-5.5"
---

arXiv:2601.06851 [cs.AI], v1 11 Jan 2026, the only version. No journal
reference on arXiv, and a Crossref title and author search on 2026-10-06 found
no published version. The cached copies are the v1 HTML
(`cache/papers/source-2026-synergistic-core-urbina-rodriguez.html`, converted
to `.md`) and the v1 PDF (`.pdf`, 21 pages). Affiliations: Imperial College
London (Urbina-Rodriguez, Shanahan, Mediano), Huawei Noah's Ark Lab, London
(Urbina-Rodriguez, Fountas, Bou-Ammar), UCL (Wang, Bou-Ammar, Mediano), Sussex,
Imperial and Oxford (Rosas), and Oxford, Cambridge and McGill (Luppi). Rosas
and Shanahan are also co-authors of
[Chandaria et al. 2026](source-2026-cacophony-hierarchy-chandaria.md), which
cites this paper. No code or data release is stated.

The method follows Luppi et al. 2022's analysis of the human brain. Attention
heads (experts, for the MoE model) are the units. For each of 60 prompts, ten
in each of six task categories (Appendix A), the model generates 100 tokens,
and each head's activation per token is the L2 norm of its attention output.
Integrated information decomposition (ΦID) is applied to every pair of heads,
with the persistent-synergy (Syn→Syn) and persistent-redundancy (Red→Red)
atoms as the measures. Each head's values are averaged over its pairs, and
ranking heads by synergy minus their rank by redundancy gives a
synergy-redundancy rank. The four main models, labelled in the figures, are
Gemma 3 4B Instruct, Qwen 3 8B Base, Llama 3.1 8B Instruct and DeepSeek V2
Lite Chat (expert-level). Pythia-1B checkpoints are used for the training
trajectory, Gemma 3 1B Instruct for the Fig. 3b graph drawing, and
Qwen2.5-Math-1.5B for fine-tuning.

**Citable values printed in text or captions.** Perturbation targets the top
25% most synergistic heads (§ Functionally Critical). Fine-tuning updates the
top 50% most synergistic, the 50% most redundant, or a random 50% of heads.
RL uses 5,000 GRPO steps, 8 trajectories per step and five runs per condition,
with the best of six evaluated checkpoints taken per run. Under RL, Hedges'
g ≈ 1.4 (synergistic vs random) and ≈ 5.0 (synergistic vs redundant). Under SFT
on OpenMathInstruct-2 there are no significant differences.

**Figures.** The HTML renders only Figs. 2 and 3b. Both are saved under
`cache/papers/figures/source-2026-synergistic-core-urbina-rodriguez/` as
`figure2.png` and `figure3b.png`. Figs. 3, 4 and 5 were rendered from the PDF
as whole pages: `pdf-p5-figure3.png`, `pdf-p6-figure4.png` and
`pdf-p8-figure5.png`. Read from those images: the four model labels (Figs. 2c,
3c, 4) and the Fig. 5 significance brackets. Under RL, synergistic vs random
is marked * (p < 0.05), synergistic vs redundant *** (p < 0.001), and random vs
redundant n.s. All three SFT comparisons are n.s. **Not citable:** Fig. 4b
MATH accuracies, Fig. 4a divergence curves, Fig. 3c global-efficiency and
modularity bars, and Fig. 5 box positions. These are plotted bars, curves and
boxes without printed values; the Fig. 5 accuracy gap is not cited for that
reason, including as a range read against the axis ticks.

Not stated in the paper: the ΦID estimator, the magnitude of the Gaussian
noise used for perturbation, how heads are deactivated in the Fig. 4a
ablation, the redundant core's size in the perturbation experiment, which
model the fine-tuning synergy ranking was computed on, and Qwen2.5-Math-1.5B's
MATH accuracy before fine-tuning.
