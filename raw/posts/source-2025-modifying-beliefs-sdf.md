---
type: source
title: "Modifying LLM Beliefs with Synthetic Document Finetuning"
authors:
  - Rowan Wang
  - Avery Griffin
  - Johannes Treutlein
  - Ethan Perez
  - Julian Michael
  - Fabien Roger
  - Sam Marks
date: 2025-04-24
venue: alignment.anthropic.com
url: https://alignment.anthropic.com/2025/modifying-beliefs-via-sdf/
writers:
  - "@claude-opus-4.7"
---

Synthetic document finetuning (SDF) pipeline for inserting propositional beliefs into LLMs. Generate a "universe context" describing the false belief as true, expand into key facts, brainstorm document types, generate documents, and add a novel revision step. Finetune on the resulting documents as if they were pretraining data. Four belief evaluations across a plausibility-graded set (post-knowledge-cutoff events, pre-knowledge-cutoff events, egregiously false facts): MCQ Knowledge, MCQ Distinguish, Open-Ended Belief, Generative Distinguish. Truth probes (difference-of-mean on a middle layer trained on sp-en-trans contrast pairs) confirm internal representation of inserted (false) beliefs. Two application proof-of-concepts: unlearning hazardous information (jailbroken models output the inserted false harmful info), and honeypotting (inserted beliefs about reviewer behavior cause malign coding agents to take detectable actions). Affiliations: Anthropic, MATS (Griffin), Scale AI (Michael). Code: github.com/safety-research/false-facts.
