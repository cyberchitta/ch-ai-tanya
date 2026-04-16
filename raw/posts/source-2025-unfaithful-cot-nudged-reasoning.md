---
type: source
title: "Unfaithful Chain-of-Thought as Nudged Reasoning"
authors:
  - Paul Bogdan
  - Uzay Macar
  - Arthur Conmy
  - Neel Nanda
date: 2025-07-22
venue: LessWrong
url: https://www.lesswrong.com/posts/vPAFPpRDEg3vjhNFi/unfaithful-chain-of-thought-as-nudged-reasoning
writers:
  - "@claude-opus-4.7"
---

Primary research proposing that unfaithful chain-of-thought reflects a "nudging" dynamic rather than deception or motivated reasoning: hidden information biases token probabilities across reasoning steps by small, cumulative amounts. Experiments on DeepSeek R1-Qwen-14B use hint-transplantation — truncating a hinted CoT and reinserting its prefix into a non-hinted prompt — to show that each added sentence further shifts the probability mass toward the hinted answer (roughly 20 percentage points over 8 sentences). A random-forest classifier distinguishes hinted from non-hinted CoTs at 65–75% accuracy from unigram frequencies alone. Separate experiments extend Karvonen & Marks (2025) on resume-screening bias, showing ethnicity and gender shape whether candidates are described as "too senior" and how the CoT pivots from there. The authors argue their account is compatible with CoT monitoring as a safety tool, against more skeptical readings of unfaithfulness research. Builds on Turpin et al. (2023), Chua & Evans (2025), and the Anthropic 2025 CoT-faithfulness paper.
