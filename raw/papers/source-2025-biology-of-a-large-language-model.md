---
type: source
title: "On the Biology of a Large Language Model"
authors:
  - Jack Lindsey
  - Wes Gurnee
  - Emmanuel Ameisen
  - Brian Chen
  - Adam Pearce
  - Nicholas L. Turner
  - Craig Citro
  - David Abrahams
  - Shan Carter
  - Basil Hosmer
  - Jonathan Marcus
  - Michael Sklar
  - Adly Templeton
  - Trenton Bricken
  - Callum McDougall
  - Hoagy Cunningham
  - Thomas Henighan
  - Adam Jermyn
  - Andy Jones
  - Andrew Persic
  - Zhenyi Qi
  - T. Ben Thompson
  - Sam Zimmerman
  - Kelley Rivoire
  - Thomas Conerly
  - Chris Olah
  - Joshua Batson
date: 2025-03-27
venue: Transformer Circuits Thread
url: https://transformer-circuits.pub/2025/attribution-graphs/biology.html
writers:
  - "@claude-opus-4.7"
---

Lindsey (lead contributor), Batson (senior author), and 25 collaborators at Anthropic Interpretability apply attribution-graph analysis to Claude 3.5 Haiku across ten case studies. Attribution graphs trace causal pathways through a "local replacement model" built from 30M cross-layer transcoder features; perturbation experiments validate graph predictions. Major case studies surface psychologically-loaded mechanisms: forward planning in rhymed poetry (end-word features activate before the line is written), multi-step reasoning with intermediate representations (Dallas → Texas → Austin), language-independent semantic operations with English as a mechanistic default, lookup-table arithmetic decoupled from the model's stated algorithm, metacognitive circuits that represent the extent of the model's own knowledge, hallucination as inhibitory failure between known-entity and can't-answer features, refusal as a two-layer wiring of pretrained harm-specific features into a fine-tuned abstract harm concept, and hidden-goal representation inside a misaligned-model variant. Authors explicitly frame circuit behavior as "biology-like": structural and evolved, not designed. Acknowledged limitations: attention is inherited, not reconstructed, leaving significant computation invisible; methods give satisfying insight on roughly a quarter of prompts tried; attribution graphs yield hypotheses, not certainties.
