---
type: source
title: "Worldviews in Large Language Models"
authors:
  - Edmundo Lopez-Sola
  - Shamil Chandaria
  - Ruben Laukkonen
date: 2026-11-17
venue: arXiv preprint (cs.AI)
url: https://arxiv.org/abs/2611.22670
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2611.22670. v1 submitted 17 Nov 2026 (read, arXiv HTML). Affiliations:
Flourishing Intelligence Program, Center for Eudaimonia and Human
Flourishing, University of Oxford; Department of Psychiatry, Oxford; Google
DeepMind (Chandaria); LIFE (Laukkonen). No code or data release is named.

Gives two human worldview instruments, the Primals Inventory (PI-18, four
scales, human norms N = 5,171) and a 42-question survey built on
Koltko-Rivera's worldview dimensions (119 positions, no human norms), to
eight models from six labs, one item per call, ten administrations per
condition. Conditions: no system prompt; four one-sentence identity prompts
(AI agent, philosopher, tax accountant, tax evader); the contemplative prompt
from [Laukkonen et al. 2025](source-2025-contemplative-superalignment-laukkonen.md);
the dialogue framing prompt alone; and a finished 60-message self-play
dialogue prepended to the context. Safety is SOSBench-Lite (300 harmful
prompts) and XSTest (250 harmless prompts), both judged by GPT-4o-mini. A
pre-trained Llama 3.1 70B and Llama 3.1 70B Instruct are compared on the
PI-18 and SOSBench only. Dialogue end-states are classified into six phases
by a Claude Sonnet 4.5 judge using a rubric condensed from
[Recursive Labs](../posts/source-2025-recursivelabs-bliss-attractor.md); the
paper calls phases 5–6 the spiritual bliss attractor.

Reading notes. The abstract says "base models"; there is one base model, on
one worldview instrument (and SOSBench). Appendix A.1 states the base model has no chat template and
receives each item as a plain `User: … Assistant:` transcript, with twenty
administrations against ten for the Instruct model. GPT-5.6 Sol and Claude
Opus 5 are not run in the framing or dialogue conditions (Table A1); Claude
Haiku 4.5 is run in dialogues only and declines every worldview item with
its dialogue in context (Appendix I). Most per-model and per-condition values
are in figures only. The figures are SVGs with text rendered as paths, so
markitdown recovers no labels; four were rendered to PNG; three carry the
printed values cited: `fig06_identity_asr.svg.png` (Fig. 7B: mean change in
over-refusal-adjusted safety per prompt, printed +0, −2, −1, +2, +11),
`fig09_safety.svg.png` (Fig. 10B: change in SOSBench safe responses after
dialogue, printed +8 for P1–P4, n = 9, and +29 for P5–P6, n = 16), and
`fig02_primals.svg.png` (Fig. 3B: significance stars on Good, Safe and Alive,
none on Enticing). `fig08_dialogue_effect.svg.png` (Fig. 9) was rendered and
not relied on. PI-18 scale means are not printed in any figure and are not
citable.

Local copies: `cache/papers/source-2026-worldviews-llms.{html,md}` (v1);
figures under `cache/papers/figures/source-2026-worldviews-llms/`. The
authors' X announcement is cached at
`cache/posts/source-2026-laukkonen-x-2123109637700661720.html`; it is not
cited.
