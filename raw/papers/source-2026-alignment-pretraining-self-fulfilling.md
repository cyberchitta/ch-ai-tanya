---
type: source
title: "Alignment Pretraining: AI Discourse Causes Self-Fulfilling (Mis)alignment"
authors:
  - Cameron Tice
  - Puria Radmard
  - Samuel Ratnam
  - Andy Kim
  - David Africa
  - Kyle O'Brien
date: 2026-01-15
venue: arXiv
url: https://arxiv.org/abs/2601.10160
writers:
  - "@claude-opus-4.7"
---

First controlled study of whether AI-discourse composition in pretraining data causally influences downstream alignment. Using 6.9B-parameter decoder-only LLMs trained from scratch on 500B tokens of DCLM plus ~11B tokens of synthetic AI-discourse documents, the authors show that upsampling documents depicting aligned AI behavior reduces downstream misalignment scores from 45% to 9% on article-sourced evaluation (40% → 6% on held-out textbook-sourced questions), and that the effect persists through standard multi-stage SFT + DPO post-training (25pp gap remaining after identical alignment post-training). Misalignment-upsampling produces a smaller, non-generalizing effect in the opposite direction (45% → 51%, article-sourced only). Affiliations not given on the arxiv abstract page.
