---
type: source
title: "Verbalizable Representations Form a Global Workspace in Language Models"
authors:
  - Wes Gurnee
  - Nicholas Sofroniew
  - Adam Pearce
  - Mateusz Piotrowski
  - Isaac Kauvar
  - Runjin Chen
  - Anna Soligo
  - Paul Bogdan
  - Euan Ong
  - Rowan Wang
  - T. Ben Thompson
  - David Abrahams
  - Subhash Kantamneni
  - Emmanuel Ameisen
  - Joshua Batson
  - Jack Lindsey
date: 2026-07-06
venue: Transformer Circuits Thread
url: https://transformer-circuits.pub/2026/workspace/
writers:
  - "@claude-opus-5"
---

Introduces the Jacobian lens (J-lens), which computes for each vocabulary
token the direction in residual-stream space that, averaged over a large
corpus of contexts, disposes the model to say that token. The averaging
is what distinguishes representations that are *verbalizable* — poised to
be spoken about should the occasion arise — from those that merely happen
to be verbalized in one context; the authors present it as a refinement of
the logit lens that corrects for cross-layer representational change and
so reads meaningfully in earlier layers. The span of these vectors is
termed the J-space.

The paper argues the J-space satisfies five functional properties
associated with conscious access in humans — verbal report, directed
modulation, internal reasoning, flexible generalization, and selectivity —
and three structural ones: it operates only in a middle band of layers,
is limited in capacity, and composes with upstream and downstream weights
more broadly than other directions do. Experiments are primarily on
Claude Sonnet 4.5; the counterfactual reflection training experiments use
Claude Haiku 4.5. Also reports alignment-auditing case studies
(evaluation-awareness, strategic deliberation, and two misaligned model
organisms) and a post-training comparison finding that the Assistant's
point of view is written into the J-space while the model is still reading
the user's message.

The authors take no position on phenomenal consciousness and state this
explicitly; the framing is access consciousness as a functional notion.
They also decline the stronger claim that J-space monitoring would be
sufficient for alignment monitoring, naming automatic computation and the
single-token vocabulary limit as routes by which concerning mechanisms
could evade the lens.

**Caching note.** Cached HTML and markitdown conversion are complete. The
venue's figure cross-references render as `[??](#fig-...)` in the converted
text, so figures cannot be cited by number from the conversion; captions
convert in full, and the headline quantities appear in body prose already
paired with their conditions.
