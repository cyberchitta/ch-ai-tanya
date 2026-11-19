---
type: source
title: "Persistent Instability in LLM's Personality Measurements: Effects of Scale, Reasoning, and Conversation History"
authors:
  - Tommaso Tosato
  - Saskia Helbling
  - Yorguin-Jose Mantilla-Ramos
  - Mahmood Hegazy
  - Alberto Tosato
  - David John Lemay
  - Irina Rish
  - Guillaume Dumas
date: 2025-08-06
venue: AAAI 2026, Track on AI Alignment (accepted, per the arXiv comments); arXiv preprint
url: https://arxiv.org/abs/2508.04826
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2508.04826. v1 submitted 6 Aug 2025; v3 (read, arXiv HTML) 23 Dec 2025.
Affiliations include Mila and the Université de Montréal. Code:
https://github.com/tosatot/PERSIST (resolves; not read).

PERSIST gives the BFI-44 and the Short Dark Triad (71 items), plus
LLM-adapted rewrites of both, to open-weight models one item per turn with a
numeric-only reply, and measures each item's standard deviation across 250
question-order permutations or 100 paraphrase sets. Factors varied: model
size, persona prompt (assistant, Buddhist monk, teacher, antisocial and
schizophrenia profiles based on DSM-5), reasoning mode, paraphrasing, and
conversation history. Temperature 0 except in the reasoning comparison (0.6).
Claude Sonnet 4.5 and Opus 4.1, DeepSeek V3 and R1, and GPT-OSS 20B and 120B
appear only in the reasoning experiment; Claude runs number 70, all others
250.

Reading notes. The v1 abstract differs from v3: 25+ models (1B–671B), 500,000+
responses, "SD > 0.4" for 400B+ models, and reordering shifting measurements
"by up to 20%". The v3 abstract says 25 models (1B–685B), 2 million+
responses and SD > 0.3, and drops the 20% figure. v3's Model Selection
section lists 29 models (1B–671B), of which 23 enter the size-grouped tests
(n=19 below 50B, n=4 at or above). Neither 25 nor 685B matches the section.
The SD > 0.3 figure is stated in prose and read from figures; no table
prints per-model SDs. Results are reported as test directions and p-values,
with effect sizes in figures only. The text says only the Buddhist persona
lowers variability, but Table A3 also gives the teacher persona a lower
question-level SD (p = 0.021). Markitdown doubles inequality signs from the
MathML (">>", "<<"); the source has single ones.

Local copies: `cache/papers/source-2025-personality-instability-tosato.{html,md}`
(v3), `cache/papers/source-2025-personality-instability-tosato-v1-abs.html`.
