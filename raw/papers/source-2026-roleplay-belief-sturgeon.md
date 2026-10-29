---
type: source
title: "When Role-playing, Do Models Believe What They Say?"
authors:
  - Benjamin Sturgeon
  - David Demitri Africa
  - Sid Black
date: 2026-06-09
venue: arXiv preprint (cs.CL)
url: https://arxiv.org/abs/2606.11502
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2606.11502, v1 submitted 9 June 2026, v2 12 June 2026, v3 25 June 2026; read as v3 (arXiv HTML). The first page lists three authors. Only Sturgeon carries an affiliation (MATS), and the acknowledgments credit the MATS fellowship for compute. The paper induces 15 historical personas (10 named figures, 5 era archetypes) in Llama 3.3 70B-Instruct and Qwen 3 8B by system prompt, in-context biographical Q&A without the persona's name ("wolf-facts"), LoRA SFT and Open Character Training (OCT), and compares them with emergent-misalignment (EM) organisms on Qwen 2.5 14B, Qwen 3 8B and Llama 3.3 70B. "Belief" is operationalised two ways: logistic truth probes trained on the Marks and Tegmark true/false datasets and read at the statement's final token, and Slocum et al.'s behavioural belief-depth tests (defending a prefilled claim under challenge; reasoning from it downstream). The persona contrast is between *era-believed* and topic-matched *era-false* statements, both false today.

**Versions.** Only v3 was read. The v1 and v2 texts were not fetched, so no change between versions is claimed. The LessWrong companion post was not read.

**Citable numbers.** The finding cites values from the body text (§§3–6) and from Appendix Tables 3, 4, 6, 12, 14, 16, 17 and 18 and the appendix prose in B.7, B.10, C, D.4, D.5 and D.9. Figures 2–7 and 11–19 are not used for values except where the caption or text prints the number. The paper reports the protection gap (ΔEB − ΔEF) on at least three scales that it does not always label: Table 3 (Llama L56, values near 0.5–0.9), the per-layer calibrated scale of Figure 12 (SFT +0.08 at L30), and the Marks false/true scale of Figure 7 and Appendix C (OCT +0.201 on Llama L56). The finding therefore cites gap magnitudes only with their scale named, and cites signs and persona counts in preference to magnitudes. §4.1 calls OCT's +0.124 (Llama) and +0.089 (Qwen) a "probe lift", while §4.4 and Appendix C give the same values as ΔEB − ΔEF gaps. The finding treats them as gaps. §4.1 attributes the EM 56% defend rate (218/390) to historical-evil falsehoods, but §3.3 gives 390 as 30 statements in each of 13 categories, so the finding reports it as pooled over all categories. The EM lift for the full-size Llama bad-medical organism is +0.28 in §4.1, §4.2 and Appendix D.6, but +0.44 in the compute-matched Table 16 (L56, 7k samples). Qwen 3 8B has the same mismatch, +0.15 against +0.29. The paper does not reconcile them, so the finding compares Table 16 values only with each other.

Local copies: `cache/papers/source-2026-roleplay-belief-sturgeon.{html,md}` (arXiv HTML v3). Code: github.com/BenSturgeon/persona-belief-probes-submission; data: huggingface.co/datasets/Experimental-Orange/persona-belief-probes (neither fetched).
