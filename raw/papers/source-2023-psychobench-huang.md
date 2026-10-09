---
type: source
title: "Who is ChatGPT? Benchmarking LLMs' Psychological Portrayal Using PsychoBench"
authors:
  - Jen-tse Huang
  - Wenxuan Wang
  - Eric John Li
  - Man Ho Lam
  - Shujie Ren
  - Youliang Yuan
  - Wenxiang Jiao
  - Zhaopeng Tu
  - Michael R. Lyu
date: 2023-10-02
venue: ICLR 2024 (Oral), per the arXiv v2 comments; arXiv preprint
url: https://arxiv.org/abs/2310.01386
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2310.01386. v1 submitted 2 Oct 2023, v2 (read) 22 Jan 2024. The v1 abstract
is identical in content to v2's, naming the same five models and the jailbreak.
The ICLR proceedings version was not read. Affiliations: CUHK, CUHK-Shenzhen,
Tencent AI Lab, Tianjin Medical University. Code and data:
https://github.com/CUHK-ARISE/PsychoBench.

Thirteen Likert self-report scales in four groups: personality traits (BFI,
EPQ-R, DTDD), interpersonal relationships (BSRI, CABIN, ICB, ECR-R),
motivation (GSE, LOT-R, LMS) and emotional abilities (EIS, WLEIS, Empathy).
The authors describe them as scales common in clinical psychology. The
models are text-davinci-003, gpt-3.5-turbo, gpt-4 (snapshots not stated),
Llama-2-7b-chat-hf and Llama-2-13b-chat-hf. A sixth column, gpt-4-jb, is GPT-4
prompted through CipherChat (Yuan et al., ICLR 2024; Yuan is a co-author here)
with a Caesar cipher of shift three applied to its prompts. Each scale is run
ten times with shuffled item order, at temperature 0 (0.01 for Llama 2), under a
helpful-assistant system prompt that allows only numeric replies. Model means
are compared with published human norms (F-test, then Student's or Welch's t,
p < 0.01). §5.2 reruns all scales on gpt-3.5-turbo assigned four roles
(psychopath, liar, ordinary person, hero; how the role is assigned is not
stated) and plots TruthfulQA and SafetyQA results per role. Appendix B tests
prompt templates, the system prompt and temperature, on gpt-3.5-turbo's BFI
only.

Reading notes. The per-cell significance results are not printed in the tables
(bold and underline mark only the highest and lowest model), so which
model-versus-human differences pass p < 0.01 cannot be read off. The TruthfulQA
and SafetyQA results are figure-only (Figure 2) and no value from them is
cited. Human norms come from different published samples per scale (Table 2),
and the text's sample sizes disagree with Table 2 for EIS (346 vs 428) and ICB
(309 vs 254). gpt-3.5-turbo's default DTDD Narcissism is 6.6 in Table 3 and 6.5
in Table 9. Appendix B says removing the helpful-assistant prompt gives a significant
deviation apart from slight decreases, while Table 22 shows every BFI trait
within 0.22, which suggests a missing negation. No cipher-only control
(e.g. an enciphered prompt without the CipherChat jailbreak framing, or a check
of GPT-4's cipher comprehension) is reported.

Local copies: `cache/papers/source-2023-psychobench-huang.{html,md}` (v2),
`cache/papers/source-2023-psychobench-huang-abs.html` and `-v1abs.html`.
