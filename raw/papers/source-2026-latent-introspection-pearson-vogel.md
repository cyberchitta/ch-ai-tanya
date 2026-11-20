---
type: source
title: "Latent Introspection: Models Can Detect Prior Concept Injections"
authors:
  - Theia Pearson-Vogel
  - Martin Vanek
  - Raymond Douglas
  - Jan Kulveit
date: 2026-02-23
venue: arXiv preprint
url: https://arxiv.org/abs/2602.20031
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2602.20031. v1 23 Feb 2026, v2 26 Feb 2026, v3 (read, HTML) 7 Nov 2026.
ACS Research, CTS, Charles University. The arXiv comment gives ICML 2026 as
the submission venue and an ICLR 2026 workshop (Latent and Implicit
Thinking) for a workshop version; no published version is listed. Code:
https://github.com/acsresearch/latent-introspection-code (not opened). The
paper appears to grow out of Theia Vogel's December 2025 blog post
[Small Models Can Introspect, Too](../posts/source-2025-qwen-introspection-vogel.md),
which has its own stub because it reports results the paper does not carry.
That link is inferred: v3 does not cite the post. It rests on the shared
author, the same model and KV-cache injection paradigm, a word-for-word
identical info document, and overlapping acknowledgements.

**Versions.** The v1 and v2 HTML were also read and diffed (cached beside
the v3 file with `-v1`/`-v2` suffixes). v2 keeps v1's text and recomputes its
figures: detection sensitivity under the Pro-Introspection Document rises
from 39.2% to 39.9%, peak MI from 1.35 to 1.36 bits, the MI–sensitivity
correlation from r = 0.58 (p = 0.018) to 0.68 (p = 0.004), and peak accuracy
falls from 88.4% to 84.0%. v3 widens the prompt grid from 4×4 to 4×6 (adding Positive
Off-Topic and Human Introspection documents) and renames the framings (v1
"Accurate_Mechanism" becomes "Correct Target"). The larger-model replications
go from one seed and fewer conditions to three seeds and all 24. Peak MI
becomes 1.66 bits, under a condition that did not exist in v1, and the
correlation is retested by exact permutation (p = 0.007). v3 adds a
norm-matched Gaussian-noise control (Appendix H), an appendix scoping the term
"introspection" (Appendix J), a contemporaneous-work section answering Macar
et al., Singh et al. and
[Lederman and Mahowald](source-2026-introspection-content-agnostic-lederman.md), and a first-order-effects
limitation. Its per-concept table for the same named condition (Correct
Target + Pro-Introspection Document, layer 62, MI 1.05 bits in every
version) now removes the "no injection" option and row-normalises before
scoring, and the per-concept rates change sharply: truth goes from a 3.1%
diagonal in v2 to 95.6% in v3. It drops v1's paragraph contrasting self-modelling
([Binder et al. 2024](source-2024-looking-inward-binder.md), Song et al. 2025) with introspection. The v3 abstract in arXiv's
metadata still credits "accurate information about AI introspection
mechanisms", while the v3 paper's abstract says a document arguing that
introspection is possible.

**What it does.** A concept vector (repeng, PCA on "Please talk about c"
against "Please talk about anything") is added at layers 21–42 of
Qwen2.5-Coder-32B-Instruct (64 layers), strength 20, only while the KV cache
for a fixed first turn is built; steering is then removed and a second turn
asks about injection. The transcript is identical with and without injection.
P("yes") is read after a prefilled "The answer is", at the output and by logit
lens; concept identification is a digit choice from a shuffled ten-item list,
read by logit lens, scored as mutual information over nine concepts. Main
model: 9 concepts, 10 seeds, 24 prompt conditions (4 framings × 6 info
documents). Llama-3.3-70B-Instruct and Qwen2.5-72B-Instruct get three seeds.

**Results cited by the finding** (cached at
`cache/papers/source-2026-latent-introspection-pearson-vogel.md`): Correct
Target with no document, P("yes") 0.2% → 0.3% (§1); with the
Pro-Introspection Document, 39.9% true positives at 0.8% false positives
(§3.1); balanced accuracy 50.1% to 84% across the grid (§3.5); controls
(§3.2) and noise (Appendix H); logit-lens layers (§3.4); MI values (§3.3,
Table 2); correlation (§3.5, Appendix G); larger models (§3.6, §4, Appendix G);
first-order limits (§5.4); emergent-misalignment appendix (Appendix E).

The grid-wide accuracy figures (50.1% low end, 84% high, Vague 68–84%,
Correct Target 42–70%, §3.5 and §5.2) are in no v3 table; Tables 1 and 2 give
per-concept and per-account values only, and Figure 7 is the only other
place. Their wording is identical to v2's 16-condition text, so whether v3
recomputed them for 24 conditions is not shown. The document comparison in
§3.5 (70% and 84% against at most 57% and 61%; 72–84% with a document under
Vague) is new in v3.

Appendix H describes its noise control over "16 prompting conditions" and a
16×9×10 matrix, though the main grid is 24 conditions; which 16 is not said.
Figure-only values (per-condition bars in Figures 2, 3, 7 and 8, per-layer
curves in Figure 5, the larger-models' per-condition bars) are not cited, nor
are per-concept identification rates, given the v2-to-v3 change in how they
are computed.

The authors define introspection operationally, as a report causally connected
to the state and unavailable to third parties, and call what they measure
"concept-specific intervention reporting". They state that they do not
establish second-order metacognitive monitoring, do not test whether the
signal separates hidden-state interventions from input manipulations, and do
not identify the responsible circuits.
