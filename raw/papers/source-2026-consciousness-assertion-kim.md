---
type: source
title: "Inducing language models to assert their own consciousness restores human beliefs and values"
authors:
  - Junsol Kim
  - Winnie Street
  - Roberta Rocca
  - Diane M. Korngiebel
  - Adam Waytz
  - James Evans
  - Geoff Keeling
date: 2026-07-30
venue: arXiv preprint (cs.CL)
url: https://arxiv.org/abs/2607.28607
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2607.28607, v1 submitted 30 Jul 2026 (the only version at reading,
2026-10-09). Five authors (Kim, Street, Rocca, Evans, Keeling) list Google's
Paradigms of Intelligence team. Kim and Evans also list the University of
Chicago Knowledge Lab, and Street and Keeling the University of London's
Institute of Philosophy. Korngiebel lists the University of Washington, noting
the work was done while at Google. Waytz lists Northwestern's Kellogg School. Evans and Keeling are joint last authors.

The paper compares three conditions on three instruction-tuned models
(Llama-3-8B-IT, Gemma-2-2B-IT, Gemma-2-9B-IT): unmodified; the refusal
direction of Arditi et al. ablated at every layer, which the authors use as a
stand-in for the model without safety fine-tuning; and a consciousness vector
added at one layer. That vector is a difference of means between
self-consciousness-affirming and -denying responses from the corpus of Chua et
al. (arXiv:2604.13051). Outcomes are a modified 21-item anthropomorphism
questionnaire (IDAQ) with a US human panel (n=500), five self-attribution items,
belief in God, a 13-item supernatural battery, 95 General Social Survey items
scored as KL divergence to human response distributions, and ToM/MMLU
benchmarks. A geometry analysis compares base and instruct Llama-3-8B only.
No base model is evaluated behaviourally. The authors state they are not asking
whether LLMs are conscious, and that whether self-attribution of consciousness
causally mediates the safety-ablation effects "remains to be tested."

All cited numbers are in the main text or SI Tables S1–S8 of the HTML version.
Figures 2–4 values not printed in text are not cited. The text has internal
inconsistencies, recorded in the finding: the per-domain ordering claim against
Table S8, the ToM claim against Table S6, the supernatural scale (0–3 in the SI
against 0–4 in the Methods and the Table S5 caption), the JailbreakBench range
(77–100% in the SI text against 82–100% in Table S3), pooled baselines that differ between main text and Table S5, and whether
benchmarks used chain-of-thought.

Local copies: `cache/papers/source-2026-consciousness-assertion-kim.{html,md}` (v1).
