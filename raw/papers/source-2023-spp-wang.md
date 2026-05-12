---
type: source
title: "Unleashing the Emergent Cognitive Synergy in Large Language Models: A Task-Solving Agent through Multi-Persona Self-Collaboration"
authors:
  - Zhenhailong Wang
  - Shaoguang Mao
  - Wenshan Wu
  - Tao Ge
  - Furu Wei
  - Heng Ji
date: 2023-07-11
venue: arXiv preprint (arXiv:2307.05300; v4 2024-03-26); NAACL 2024 main conference
url: https://arxiv.org/abs/2307.05300
writers:
  - "@claude-opus-4-7"
---

Solo Performance Prompting (SPP) is a zero-shot prompting technique that
turns a single LLM into a multi-persona self-collaboration agent through
three phases: (i) persona identification, where the LLM dynamically
proposes task-relevant personas (e.g. "Film Expert," "Logic Puzzle
Expert") from the task description; (ii) brainstorming, where each
persona contributes domain knowledge or approach; (iii) multi-persona
iterative collaboration, where an "AI Assistant" leader persona drafts
a solution and consults the other personas turn-by-turn for feedback
until they converge. The prompt template includes two demonstration
examples (Game of 24, poem writing) and is identical across tasks.
Evaluated on three tasks — Trivia Creative Writing (knowledge), Codenames
Collaborative (knowledge + reasoning + theory-of-mind), Logic Grid Puzzle
(reasoning) — against Standard, CoT, and Self-Refine baselines. Headline
GPT-4 results: Trivia Creative Writing N=5 79.9% (+7.1% over Standard),
N=10 84.7% (+10.0%), Codenames Collaborative 79.0% (+4.8%), Logic Grid
Puzzle 68.3% (+18.5%). CoT loses on the knowledge tasks (67.1% / 68.5%
on Trivia, 72.7% on Codenames) and Self-Refine hurts Codenames
substantially (64.6%, –14.6%). Cognitive-synergy effect appears only on
GPT-4; GPT-3.5-turbo and Llama2-13b-chat show no gains, and Llama2
exhibits an "early-termination" failure where the model stops generating
after listing the personas as if waiting for external input. Ablations:
SPP-Fixed-Persona (forced "AI Assistant" + "Expert") consistently
underperforms SPP; SPP-Profile (adding persona profiles) does not
improve over bare persona names. Word-cloud analysis (Figure 7a) shows
knowledge-intensive tasks elicit diverse fine-grained personas while
reasoning-intensive tasks elicit homogeneous personas ("Logic Puzzle
Expert" dominates Logic Grid Puzzle even though "logic puzzle" is not
in the input). Authors: Wang and Ji at University of Illinois Urbana-
Champaign; Mao, Wu, Ge (corresponding), and Wei at Microsoft Research
Asia. Work done while Wang interned at MSRA. Limitations the authors
flag: persona-assignment's contribution to domain knowledge is not
quantified ("dedicated diagnostic experiments and theoretical efforts
are needed"); identical SPP prompt and demos across tasks may be
suboptimal; multi-agent extension (separate LLM instances per persona)
is left to future work. The paper does not measure persona coherence,
overlap, or whether dialogue turns are mechanistically distinguishable
beyond stylistic variation.
