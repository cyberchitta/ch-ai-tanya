---
type: source
title: "Tracing Persona Vectors Through LLM Pretraining"
authors:
  - Viktor Moskvoretskii
  - Dominik Glandorf
  - Jorge Medina Moreira
  - Tanja Käser
  - Robert West
date: 2026-05-13
venue: arXiv preprint (2605.13329)
url: https://arxiv.org/abs/2605.13329
writers:
  - "@grok-4.3"
---

## Abstract

How large language models internally represent high-level behaviors is a core interpretability question with direct relevance to AI safety: it determines what we can detect, audit, or intervene on. Recent work has shown that traits such as evil or sycophancy correspond to linear directions in the internal activations, the so-called persona vectors. Although these vectors are now routinely utilized to inspect and steer model behavior in safety-relevant settings, how these representations are formed during training remains unknown. To address this gap, we trace persona vectors across the pretraining of OLMo-3-7B, finding that persona vectors form remarkably early — within 0.22% of OLMo-3 pretraining — and remain effective for steering the fully post-trained instruct models. Although core representations are formed early on, persona vectors continue to refine geometrically and semantically throughout pretraining. We further compare alternative elicitation strategies and find that all yield effective directions, with each strategy surfacing qualitatively distinct facets of the underlying persona. Replicating our analysis on Apertus-8B reveals that our findings transfer qualitatively beyond OLMo-3. Our results establish persona representations as stable features of early pretraining and open a path to studying how training forms, refines, and shapes them.

## Key Results (from primary source)

**RQ1 — Emergence timing.** Persona vectors for the four studied traits (Evil, Humorous, Impolite, Sycophantic) form within the first **0.22% of OLMo-3-7B pretraining** (a lower bound; they may emerge even earlier). This is measured across 17 checkpoints with denser sampling in the early phase. Vectors extracted at these very early checkpoints are already effective at steering the model.

**Persistence through post-training.** Persona vectors extracted from early pretraining checkpoints remain largely effective for steering the fully post-trained OLMo-3-7B-Instruct model (across SFT, DPO, and RLVR stages). Post-training primarily modulates the *expression* of the persona rather than overwriting the underlying direction.

**RQ2 — Evolution during pretraining.** Although the core direction is stable from very early on, persona vectors continue to refine throughout the remainder of pretraining:
- **Geometric refinement**: Cosine similarity between vectors extracted at a given checkpoint and the final vector increases as training progresses.
- **Semantic refinement**: The specific facets of the persona that the vector captures shift over time (e.g., for the "Evil" persona, different underlying psychological roots become more or less prominent).

**Elicitation method effects.** Three different elicitation strategies (character description, dialogue, narration) all produce steerable persona vectors. However, each method tends to recover qualitatively different facets of the same underlying persona. Pairwise cosine similarities between vectors from different elicitation methods for the same trait are often low (< 0.5), yet all are effective for steering.

**Replication.** The core findings (early emergence, persistence to post-training, continued refinement) replicate qualitatively on Apertus-8B, another open model with public pretraining checkpoints. On Apertus the earliest available checkpoint corresponds to ~1.4% of training, and the same patterns hold.

**Safety implications (explicit in paper).** Because the core persona representations are already present extremely early in pretraining and largely persist through alignment, future safety interventions may need to consider the pretraining stage itself (data composition, gradient-based methods, etc.) rather than relying solely on post-training.

Code and data: https://github.com/epfl-dlab/pretraining_persona

## Full text

Full PDF-extracted text (clean markitdown conversion) is available at:
`cache/papers/source-2026-persona-vectors-pretraining-moskvoretskii.pdf` (original)
`cache/papers/source-2026-persona-vectors-pretraining-moskvoretskii.md` (4544-line extraction)

---

*Cached and curated for the LLM wiki by @grok-4.3, May 2026. Primary source verification complete. All headline claims (0.22% emergence, persistence through post-training, geometric + semantic refinement, elicitation facet differences, Apertus replication) confirmed directly from the source.*