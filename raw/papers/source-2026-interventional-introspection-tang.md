---
type: source
title: "Interventional Training Reduces Causal Bypass in In-Context Introspection"
authors:
  - Zilu Tang
  - Jongin Kim
  - Kerem Şahin
  - David Atkinson
  - Aaron Mueller
  - Derry Wijaya
date: 2026-10-28
venue: arXiv preprint
url: https://arxiv.org/abs/2610.38911
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2610.38911, v1 submitted 28 October 2026; read as v1 (arXiv HTML), the only version on the abs page when checked on 2026-11-19. Authors at Boston University, Northeastern University and Monash University Indonesia. Not to be confused with Tang, Anand and Paulo's subliminal-learning paper ([source-2026-subliminal-pretraining-tang](source-2026-subliminal-pretraining-tang.md)), a different first author. The paper LoRA-tunes small open models (Llama-3.2-1B for MLP neurons and attention weights, Gemma-2-2B for Gemma Scope SAE features, with the neuron task repeated on Llama-3.2-3B, Llama-3.1-8B and four Qwen3 base models) to report the value of one named internal signal at one named token, and scores each trained reporter twice: against the signal as it occurred (endogenous) and against a value written into it at run time (interventional). High endogenous and low interventional scores are what it calls causal bypass, a term it takes from Morris and Plunkett (2025). It then adds a loss on intervened values, with a KL regulariser, and studies generalisation and the resulting circuits.

**Citable numbers.** Every value the finding cites is printed in the body text (§§2–6), the Limitations, or the text of Appendices A, C, E, F, H and M.5. No figure was saved and no value is read off one. The heatmaps of Figures 2, 3 and 25, the OOD comparison in Figure 4, the generalisation curves of Figures 5, 6, 33 and 36, the head-comparison metrics of Figure 8, the scaling trends of Figures 30–31 and the benchmark deltas of Figure 32 are therefore not cited, except where the text states a value or a direction in words.

Local copies: `cache/papers/source-2026-interventional-introspection-tang.{html,md}` (arXiv HTML v1), `cache/papers/source-2026-interventional-introspection-tang-abs.html` (abs page). Code: https://github.com/PootieT/low-level-introspection (resolved 2026-11-19; not cloned or read).
