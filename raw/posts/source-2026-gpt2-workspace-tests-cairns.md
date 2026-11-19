---
type: source
title: "Even GPT-2 passes most functional global workspace tests"
authors:
  - Finn Cairns
  - Yixiong Hao
  - Zephaniah Roe
date: 2026-10-21
venue: LessWrong
url: https://www.lesswrong.com/posts/GeKveaNdruATcj2Fj
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

A LessWrong post, done in the Second Look Fellowship under Hao and Roe, that reruns the functional tests of [Gurnee et al. 2026](../papers/source-2026-global-workspace-gurnee.md) on GPT-2 small (124M), using the J-lens Neuronpedia fitted for it with Anthropic's released code. It also reruns the paper's structural analyses (layer band, ignition, capacity, MLP gain), and a directed-modulation comparison on Gemma 3 270M and 1B, base and instruction-tuned. The post gives the design, prose results, figures and appendices. The repository holds the code, every criterion's per-trial `results.json` and `prompts.json`, follow-up and control runs, and the data Anthropic released behind the paper's figures (`ref/paper-data/`). The lens file itself is not in git; it is Neuronpedia's public release. The post was read as returned by the LessWrong API. A second API response, re-saved on 19 November 2026 as `source-2026-gpt2-workspace-tests-cairns.meta.json`, gives contents version 1.1.0, edited 21 October 2026, 14 minutes after posting. The byline names the second author by the handle "yix". The same response gives that account's full name as Yixiong Hao, and the post names Yixiong Hao as a supervisor.

**Commit and date.** Read at commit `4c1e959035cf33935e2344d70e4a3cda071649e5` (13 October 2026, the last before the post). The repository was created 16 August 2026. Of its 55 commits, 53 are by Finn Cairns and 2 by an author named "Claude" (3 and 5 September); the post does not mention model assistance.

**Where the cited numbers come from, and which were recomputed.** A script written for this filing (`cache/posts/source-2026-gpt2-workspace-tests-cairns-tally/`, `tally.py` and `dm.py` with their outputs) re-tallied these from the per-trial run data, and each matches the post:
- verbal report (`results/c1_report/results.json`): 9 of 14 categories, the band Spearman means 0.44/0.47/0.57, the lens swap at 38/38 and 78/78, and the privilege swap at 37/38 (J-space part, k = 2) against 7/38 (remainder), 0/38 with the remainder clamped, and 69/78 against 8/78 over all categories, 37/38 and 0/38 at k = 16;
- the by-construction check (`results/followups/linear.json`): median cosines 0.47 and 0.06 over 114 cases, with the target's own vector among the J-space part's two in 56;
- injected thought, main setup (`results/control/gpt2/introspect_researcher_centered_surface_word.json`): median report rank 1 from strength 0.2, and the word in the report's top 5 for 52 of 57 concepts (91%) at the best strength (0.44). One figure is this filing's own: 45 of those 52 also have some form of the word in the top 5 at another position of the reply, where the post says "nearly every";
- directed modulation (`results/control/gpt2/modulation_grid_human.{json,npz}`): top-1 hit rates of 0.0–0.5% in band 7–9 and at most 1.4% over wider bands, top-25 rates of 12%, 24%, 16%, 17% and 23%, and 50 hits, 48 of them from two carrier sentences;
- internal reasoning (`results/c3_reasoning/results.json`, `depth_windows.json`): 48 of 53, 41 of 48 and 36 of 41, the coordinate swap at 695 of 984 with median rank 90 to 1, the probe swaps (whole 88.1%; J-space part 94.1% at k = 3 and 95.3% at k = 25; remainder 14.0% and 1.4%; clamped 0.2% and 0.0%), and 23 against 19 of 37 at layer 7 alone;
- flexible generalization (`results/c4_generalization/results.json`): 19 of 64 cells; 28 of 192, 10 of 46 and 6 of 32 at α = 1; the per-function testable counts; mean swap effect 3.57 and 6.39;
- selectivity (`results/c5_selectivity/results.json`): the ablation scores at k = 1 and k = 10 with the five random draws, the language swap at 12 of 21 (α = 1) and 13 of 21 (α = 2), and occupancy and variance captured by layer;
- structure: MLP gain 1.23, 1.32 and 1.36 at layers 7–9 against 0.91–1.03 for neurons (`results/band/mlp_gain.json`), and ignition width 0.78 to 0.70 (`results/followups/ignition.json`).

Taken from the post, not recomputed: every Claude number (from Gurnee et al.'s text, checked against the cached paper where the paper prints it, or from the released data); the Gemma 3 results (Appendix C.3); the list-capacity figure (0.7 items); the CKA, kurtosis, persistence and dimensionality curves, which the finding cites only qualitatively; and the A.4 variance shares for concept vectors and probes beyond those in the criterion summaries. The repository's own analysis and figure code was not run. Nothing was run on a model.

**Repository runs the post does not report.** The criterion-2 module (`jl/c2_modulation.py`, `results/c2_modulation/`) runs a different directed-modulation design: single tracked words, a no-mention baseline, 30 words and 12 carriers. Its summary reports "think about" ranking the word above a bare mention in 76% of word–carrier pairs and "don't think about" above a mention in 84%. This filing's re-tally from its `results.json` gives 70% and 81%; it drops tied pairs, and its median over phrasings may differ from the module's. The criterion-3 summary's depth analysis (`E4`, onset by half-maximum, n = 31) puts the intermediate swap's onset 4 layers before the answer swap's. The post's Appendix D uses the windowed analysis instead. The criterion-2 module's `2d` test (`results/c2_modulation/results.json`, key `imagine`) is an analogue of the paper's appendix test that directed modulation alters the J-space and not other representations. It uses an "imagine this is French" header and a real French sentence, each against a neutral header, over 12 records. This filing's re-tally gives the header 2.32 of the real sentence's 6.06 lens shift for "French" (0.38) and 3.39 of its 40.61 shift along the J-orthogonal probe (0.08). The module's summary prints the same values.

Local copies: `cache/posts/source-2026-gpt2-workspace-tests-cairns.{html,md,gql.json}` (the post, via the LessWrong GraphQL API) and `.meta.json` (version, edit time and coauthor names); `cache/posts/source-2026-gpt2-workspace-tests-cairns-repo/` (a clone at the commit above, read only; the README and every results file cited are in it); and `cache/posts/source-2026-gpt2-workspace-tests-cairns-tally/` (the re-tally scripts and output).
