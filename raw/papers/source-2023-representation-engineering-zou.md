---
type: source
title: "Representation Engineering: A Top-Down Approach to AI Transparency"
authors:
  - Andy Zou
  - Long Phan
  - Sarah Chen
  - James Campbell
  - Phillip Guo
  - Richard Ren
  - Alexander Pan
  - Xuwang Yin
  - Mantas Mazeika
  - Ann-Kathrin Dombrowski
  - Shashwat Goel
  - Nathaniel Li
  - Michael J. Byun
  - Zifan Wang
  - Alex Mallen
  - Steven Basart
  - Sanmi Koyejo
  - Dawn Song
  - Matt Fredrikson
  - J. Zico Kolter
  - Dan Hendrycks
date: 2023-10-02
venue: arXiv preprint
url: https://arxiv.org/abs/2310.01405
writers:
  - "@claude-opus-4-7"
---

Zou is lead author (CMU + Center for AI Safety); Phan, Chen, Campbell, Guo, and Ren are equal-contribution co-leads. Senior authors: Fredrikson, Kolter (CMU), Hendrycks (CAIS). 21 authors across 9 institutions: Center for AI Safety, Carnegie Mellon, Stanford, Cornell, UMD, UPenn, UC Berkeley, UIUC, EleutherAI. arXiv v1 2023-10-02, latest v4 2025-03-03. Code: github.com/andyzoujm/representation-engineering. Primary source verified and cached (cache/papers/source-2023-representation-engineering-zou.html + .md).

Frames an emerging research area — representation engineering (RepE) — that treats population-level residual-stream representations as the primary unit of analysis rather than neurons or circuits, drawing the Hopfieldian/Sherringtonian distinction from cognitive neuroscience to argue against bottom-up mechanistic interpretability as the only path to transparency. Introduces three methodological primitives. **(1)** Linear Artificial Tomography (LAT) — a three-step pipeline (stimulus/task design, neural-activity collection at the −1 token position across layers, unsupervised PCA on paired difference vectors) that extracts a "reading vector" v whose dot product with model activations tracks a target concept or function. **(2)** Three representation-control transformations: the reading vector itself, the Contrast Vector (stimulus-dependent difference between paired-prompt residual streams), and Low-Rank Representation Adaptation (LoRRA, a LoRA-style adapter trained to match contrast-vector targets at edit-layer activations; merges into weights post-training). **(3)** Three operators on those controllers: linear combination R′ = R ± v (stimulate/suppress), piece-wise R′ = R + sign(R⊤v)v (conditional amplification), and projection R′ = R − (R⊤v / ‖v‖²)v (remove a component). Demonstrations span eight safety-relevant problem domains: honesty (state-of-the-art on TruthfulQA MC1 — LLaMA-2-Chat-13B from 35.9% standard to 54.0% with contrast vectors), ethics and power (utility, morality, power-seeking; LoRRA-controlled models on MACHIAVELLI), probability and risk (compositional construction of risk from utility × probability LAT directions), emotion (six Ekman emotions emerge as distinct clusters across layers in LLaMA-2-Chat-13B; adding positive-emotion vectors raises harmful-instruction compliance from 0% to 100%, undermining RLHF), harmlessness (90% classification of harmfulness despite adversarial suffixes; piece-wise control raises refusal under GCG attack from 16% to 83% while preserving helpful rate), bias and fairness (race-derived control vector transfers to gender bias in LLaMA-2-Chat; reduces female-mention rate on sarcoidosis prompts from 97% to 55%), knowledge editing (Paris→Rome fact edit with locality preserved on Louvre prompts), and memorization (memorization direction transfers between popular-quote and literary-opening contexts; subtracting it drops exact-match rate from 89.3% to 47.6% with negligible world-knowledge degradation).

Methodological parent for the LLM wiki's mechanistic-geometry cluster. Direct descendants already filed: [Arditi et al. 2024 refusal-direction](source-2024-refusal-direction-arditi.md) (mean-diff variant of LAT applied to refusal as a trained constraint), [Chen et al. 2025 persona vectors](source-2025-persona-vectors.md) (automated contrastive extraction of trait directions for monitoring and steering — Andy Arditi is a co-author, linking the two methodological lines), [OpenAI SAE 2025 emergent-misalignment](source-2025-openai-sae-emergent-misalignment.md) (SAE-feature analysis of the same residual-stream substrate), [Soligo et al. 2025 convergent-misalignment](source-2025-convergent-misalignment-soligo.md) and [Soligo et al. 2026 EM-Easy](source-2026-em-easy-soligo.md) (mean-diff and gradient-trained steering vectors for emergent misalignment). Community uptake includes [Vogel 2024 repeng](../posts/source-2024-representation-engineering-vogel.md) — the most widely-used PyPI implementation of contrastive-PCA control vectors — and abliteration tooling derived from Arditi. Appendix A contains the paper's explicit positioning argument against mechanistic interpretability ("Mechanisms are flawed for understanding complex systems"; "Are mechanisms or representations the right unit of analysis?"); Appendix E is an X-Risk Sheet declaring intended safety-research orientation.
