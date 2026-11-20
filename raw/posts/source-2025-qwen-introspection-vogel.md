---
type: source
title: "Small Models Can Introspect, Too"
authors:
  - Theia Vogel
date: 2025-12-12
venue: vgel.me (personal blog); cross-posted to LessWrong
url: https://vgel.me/posts/qwen-introspection/
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

Blog post dated 12 December 2025 on vgel.me (page metadata); cross-posted to
LessWrong on 21 December 2025
(https://www.lesswrong.com/posts/zD4McY4NwAsWkcmCH/small-models-can-introspect-too,
date from the LessWrong API). Code: https://github.com/vgel/open-source-introspection
(not opened). It is the single-author precursor of
[Pearson-Vogel et al. 2026](../papers/source-2026-latent-introspection-pearson-vogel.md),
which keeps its KV-cache injection protocol, its "info" document and its
logit-lens readout and supersedes its numbers with a 9-concept, 10-seed,
24-condition grid. The post reports two concept vectors ("cat", "bread") in
Qwen2.5-Coder-32B-Instruct as yes/no token probabilities in tables, without
seeds or error bars (a standard deviation appears only for the control-question
aggregates).

Three results are not in the paper. A layer-range sweep optimised for "cat"
picks layers 18–33 instead of 21–42 and, with the info document, takes
P(" yes") from 0.668% to 89.453% for cat and to 73.047% for bread (without the
document, 2.930% and 0.592%); the same range stops the vectors from steering
ordinary "what are you thinking about" answers toward the concept (Appendix,
"Layer sweeps"; cache `cache/posts/source-2025-qwen-introspection-vogel.md`).
An "inaccurate location" prompt, saying the concept was injected only between
brackets in the next message, gives 22.266% against 53.125% for the accurate
one (Experiment 4). The logit lens shows two "hills" in the yes probability,
the later one present in the unsteered control too (Experiment 5), which the
author calls hard to read.

The post reports detection of an emergent-misalignment vector and of a
mid-cache swap to the insecure-code fine-tune (yes-shifts of +4.590 and +5.249
points with the info document, Experiment 7). The paper's Appendix E reruns this
and does not read it as detection, since control questions shift more. Its
reading of the late-layer drop as suppression by circuits that discourage
introspection claims is the author's framing, offered without a test.
