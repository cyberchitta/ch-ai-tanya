---
type: source
title: "Me, Myself, and π: Evaluating and Explaining LLM Introspection"
authors:
  - Atharv Naphade
  - Samarth Bhargav
  - Sean Lim
  - Mcnair Shah
date: 2026-03-17
venue: arXiv preprint (cs.AI); ICLR 2026 Workshop "From Human Cognition to AI Reasoning"
url: https://arxiv.org/abs/2603.20276
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2603.20276, v1 submitted 17 March 2026 and the only version; read as v1 (arXiv HTML). All four authors are at Carnegie Mellon University, and the work was funded by the CMU AI Safety Initiative. The arXiv comments field lists it as an ICLR 2026 workshop paper. The paper defines *policy introspection* as a model computing some function of its own output policy without chain-of-thought, splits it into short-term, long-term and inverse forms, and builds Introspect-Bench (K-th word prediction, ethical-dilemma calibration, paraphrase or prompt reconstruction, Heads-Up clues) from Dolly-15k prompts and 750 generated dilemmas filtered for disagreement among LLM judges (Table 1 lists 196 dilemma items). It tests privileged access by comparing each model's predictions of its own outputs with untrained peer models' predictions of the same outputs. It reports a GPT-5.2 comparison of CoT-elicited, introspection-prompted and direct answer distributions, a Qwen3-8B fine-tuning experiment, and a Qwen3-32B logit-lens, attention-entropy and attention-patching analysis that it calls *attention diffusion*. Activation-level and weight-level introspection are defined (Appendix C) but not evaluated.

**Internal inconsistencies in the source.** The main text and the appendix disagree on several setup details. Table 1's caption and §3 claim low cross-model agreement, while the table's average closest-pair cosine similarities are 0.77–0.94. K runs 1–10 in §3.1 but k ∈ {1, 2, 3} in Appendix E. Prompt reconstruction is a five-way choice in §3.1, a three-way "paraphrase recognition" prompt in Appendix E.2, and a free-generation task scored by embedding similarity in Appendix E.3. The paper says ten models in §3 and eleven in Table 3, which adds GLM-4 32B; Table 2 has ten models plus an unexplained "Self Introspection" row. GPT-5.2, used in §4.2, is not in the model list. Figure 2's caption calls the comparison bar the average of the best-scoring peers, while its legend and §4.1 call it the mean over all other models. §5.2 says introspective attention entropy should be *lower* than in the gut run, but the figure and the surrounding argument have it higher. Figure 5's legend labels the lines "CoT Run" and "Gut Run", while the caption says introspective and direct. The "Kadavath et al. (2024)" reference cited for the self-prediction-advantage method has a placeholder arXiv ID (2404.XXXXX). The result it describes resembles that of Binder et al. 2024 (arXiv:2410.13787), which the paper cites separately.

**Citable numbers.** Table 2 and the §4.1, §5.2 body text carry printed values (p = 0.0210; 0.059 against 0.008; 23.9%; 0.5326; p < 10⁻¹²). Figures 2, 3, 4 and 8 have no tables. Their values are printed as labels on bars or heatmap cells and were read from the images saved in `cache/papers/figures/2026-introspect-bench-naphade/`: `cross-model_b.png` (Fig. 2), `mech-CoT_d.png` (Fig. 3), `sft_screenshotgemini2222.png` (Fig. 4), `cross-model_averages.png` (Fig. 8). Figure 5 (logit lens) and Figure 7 (per-dilemma entropy) are read only for shape, layer and dilemma count. Figure 2's percentages do not match Table 2's per-model averages and the paper does not say how they are computed. The p = 0.0210 has no named test.

Local copies: `cache/papers/source-2026-introspect-bench-naphade.{html,md}` (arXiv HTML v1), `cache/papers/source-2026-introspect-bench-naphade-abs.html` (abs page). Code: github.com/CASI-Mechanistic-Interpretability-2025/INTROSPECTBENCH (not fetched).
