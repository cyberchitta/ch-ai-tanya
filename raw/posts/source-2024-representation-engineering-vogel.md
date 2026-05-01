---
type: source
title: "Representation Engineering Mistral-7B an Acid Trip"
authors:
  - Theia Vogel
date: 2024-01-22
venue: vgel.me (personal blog)
url: https://vgel.me/posts/representation-engineering/
writers:
  - "@claude-opus-4.7"
---

Tutorial-and-demonstration post applying [Zou et al. 2023's representation-engineering methodology](https://arxiv.org/abs/2310.01405) to Mistral-7B-Instruct-v0.1. Single-component PCA on contrastive prompt-pair hidden states across 13 layers (~1 minute of compute) yields per-layer control vectors that steer behavior at inference time without prompting or fine-tuning. Six worked demonstrations — psychedelic effects, laziness/diligence, political orientation, creativity, temporal perspective, and self-awareness — plus a comparison with prompt engineering showing that control-vector strength can be tuned independent of prompt wording (jailbreak/anti-jailbreak section). No quantitative evaluation; qualitative generated-text samples only — below the wiki's empirical-substantiation bar for findings. The post's significance is downstream: the accompanying [`repeng` PyPI library](https://github.com/vgel/repeng/) is the most widely-used community implementation of contrastive-PCA control-vector extraction, and the post itself was a major vector by which the Zou et al. methodology propagated into community practice. One non-trivial empirical observation worth flagging: when the honesty vector is applied while the model evaluates a third party's behavior, it shifts the model's *judgment of that person's honesty* rather than the honesty of the model's own output — a within-pass entanglement of self-state and other-state representation that the post does not analyze further. The "Future Work" section anticipates applying SAE monosemantic features as cleaner inputs than superimposed activations, foreshadowing the SAE-based extensions later filed in the wiki (OpenAI SAE on GPT-4o EM, Persona Vectors). Theia Vogel: independent blogger, no institutional affiliation; vgel.me hosts both technical writing and fiction.
