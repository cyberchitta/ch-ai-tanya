---
type: source
title: "Emergent Introspection in AI is Content-Agnostic"
authors:
  - Harvey Lederman
  - Kyle Mahowald
date: 2026-03-05
venue: arXiv preprint
url: https://arxiv.org/abs/2603.05414
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2603.05414. v1 5 Mar 2026, v2 (read, HTML) 7 Apr 2026. University of
Texas at Austin (philosophy; linguistics). The arXiv API lists no journal
reference, and Semantic Scholar and Crossref showed no published version on
2026-11-20. The experiments build on Neev Parikh's open-source replication
codebase; the paper names no code release of its own. Responses are graded by
Claude 3 Haiku, and the authors state that Claude Code was used to develop
ideas, run and analyse experiments, summarise methods and results for the
write-up, and edit the paper.

**Versions.** v1 was titled "Dissociating Direct Access from Inference in AI
Introspection" and argued for two separable detection mechanisms: inference
from the prompt's anomaly ("probability matching") and direct access, the
latter content-agnostic. Its evidence for direct access was a first-person
advantage over a third-person condition, and its conclusion (§7) credited
direct access. v1 already had the priming experiment, the point-blank yes-bias
control, prompt-only steering (its Experiment 3a, strength 6, all Qwen layers)
and the word position of the first guess (its Experiment 3b). v2 is retitled
and drops the probability-matching framing. It adds the experience and
absurd-question controls and word-by-word grading of partial answers, and
splits v1's Experiment 3 into Experiments 3 and 4. It adds a paragraph (§6.3)
answering [Pearson-Vogel et al.](source-2026-latent-introspection-pearson-vogel.md)'s KV-cache concept readout and drops v1's
critique of Binder et al.'s self-prediction comparison. Appendix M explains
why the authors lost confidence in the direct-access reading: long
first-person retrospective prompts show the same low early-layer rates as the
long third-person prompt. Its conclusion (§8) no longer credits direct access.
Both versions are cached, v1 with a `-v1` suffix.

Two large open-weight models (Qwen3-235B-A22B, Llama 3.1 405B Instruct) are
steered with 821 concept vectors in Lindsey's injected-thought paradigm. The
paper argues that detection runs on a signal that something is unusual, while
correct naming of the concept comes from the steering itself pushing the
concept into the output. Headline values are in the text; the per-layer
curves (Figures 2, 5, 6, 7, 8) were not saved and are not cited.

**Internal inconsistencies (v2).** On trials where the model denies detection,
§4.2 puts p(yes)/p(no) at often 10–1000× control, and Appendix I puts the same
quantity at 10⁶–10¹²×. In §4.2, 3,426 Qwen confabulations are normed, 918 of
them other than "apple", which leaves 2,508 apples. The same section counts
3,542 "apple" guesses among 4,733 wrong identifications. The text does not
reconcile the two counts.
