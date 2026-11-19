---
type: source
title: "Tracing Subliminal Learning Through Pretraining"
authors:
  - Angela Tang
  - Vishesh Anand
  - Gonçalo Paulo
date: 2026-10-22
venue: arXiv preprint
url: https://arxiv.org/abs/2610.30884
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2610.30884, v1 submitted 22 October 2026; read as v1 (arXiv HTML), the only version on the abs page when checked on 2026-11-19. Tang (independent) and Anand (University of Cincinnati) are equal first authors in random order; Paulo is at EleutherAI, and the work was done in EleutherAI's SOAR program. The paper adapts Cloud et al.'s animal-preference experiment (cited in its 2026 *Nature* version) to small base models, mostly Pythia-160M, the PolyPythia seed variants and DataDecide OLMo-1B, and asks which parts of a shared base model transfer needs: initialization, pretraining data order, corpus, size or architecture. It runs two channels. In hard-label distillation the student is LoRA-trained on a teacher's filtered number sequences; in on-policy soft-label distillation the student writes continuations of Pile prefixes and is trained towards a frozen teacher's full next-token distribution. Both are measured as the student's next-token probability of the animal on held-out preference prompts, minus that of a matched control student. The authors also trace how the ability to transmit and the ability to acquire the preference develop across pretraining checkpoints, and test synthetic number sequences, top-K losses with animal tokens removed, and full fine-tuning with plain SGD.

**Citable numbers.** Every value the finding cites is printed in the body text (§§1–4) or in an appendix table or its text: Table A6 and Table A7 (synthetic-sequence retention in Pythia and OLMo), Table A11 (exceedance tests), Table A12 and Table A13 (same-model vs cross-model differences in means, Pythia and OLMo), Table A15 (teacher–student factor fits), Table A2 (LLM-judge audit), and the text of Appendices A.4, A.5, A.6, A.14 and A.15. No figure was saved and no value is read off one. Figure 4's fractions and percentiles, Figure A28's per-pair bars, Figure 3's top-K curve and the checkpoint grids of Figures 5 and A38–A40 are therefore not cited, except where the text states a value in words.

Local copies: `cache/papers/source-2026-subliminal-pretraining-tang.{html,md}` (arXiv HTML v1), `cache/papers/source-2026-subliminal-pretraining-tang-abs.html` (abs page). Code: not released; the reproducibility statement says it will be uploaded and gives no URL.
