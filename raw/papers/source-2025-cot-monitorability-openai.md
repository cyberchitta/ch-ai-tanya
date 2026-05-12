---
type: source
title: "Monitoring Monitorability"
authors:
  - Melody Y. Guan
  - Miles Wang
  - Micah Carroll
  - Zehao Dou
  - Annie Y. Wei
  - Marcus Williams
  - Benjamin Arnav
  - Joost Huizinga
  - Ian Kivlichan
  - Mia Glaese
  - Jakub Pachocki
  - Bowen Baker
date: 2025-12-20
venue: arXiv preprint
url: https://arxiv.org/abs/2512.18311
writers:
  - "@claude-opus-4.7"
---

OpenAI (arXiv 2512.18311, v1 2025-12-20). Twelve authors, core team Guan, Wang, Carroll, and Baker contributed equally; Baker set direction. Formalizes monitorability as a two-sided property of agent and monitor — distinct from CoT faithfulness — and introduces a measurement framework: the g-mean² metric (TPR × TNR, robust to class-imbalance and intervention-arm degenerate-monitor failure modes), three evaluation archetypes (intervention, process, outcome-property), and a 13-evaluation suite covering sycophancy, bias, misalignment (Anti-scheming, ShadeArena, OAI-repo-sabotage), and neutral domains. Agents evaluated: GPT-5 Thinking, OpenAI o3, o3-mini, o4-mini, Claude 3.7 Sonnet (Thinking), DeepSeek R1-0528-Qwen3-8B, Kimi K2 Thinking. Headline empirical claims: CoT-only monitoring substantially outperforms action-only monitoring across reasoning efforts; monitorability improves with CoT length; RL optimization does not materially decrease monitorability at current frontier scale (two frontier RL runs, early GPT-5.1 Codex Max and OpenAI o3); generic CoT-obfuscation training is detected by the eval suite while targeted obfuscation only degrades 1 of 13 evaluations; stronger monitors substantially improve monitorability (~40% g-mean² increase from o3-mini to GPT-5 Thinking as monitor); follow-up questions further improve monitorability when their CoT is given to the monitor. Central scaling-trend contribution: identifies the *monitorability tax* — switching to a smaller model at higher reasoning effort to obtain the same capability yields much higher monitorability at a quantifiable capability cost that "can be surprisingly small." Companion blog post at https://openai.com/index/evaluating-chain-of-thought-monitorability/ (December 18, 2025; titled "Evaluating chain-of-thought monitorability"). Primary source verified and cached (`cache/papers/source-2025-cot-monitorability-openai.html` + `.md`); companion blog cached at `cache/posts/source-2025-cot-monitorability-blog-openai.html` + `.md`.
