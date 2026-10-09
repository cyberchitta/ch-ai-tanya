---
type: source
title: "Misalignment Has a Personality: A Big Five Account of Emergent Misalignment"
authors:
  - Hasibur Rahman
  - Smit Desai
date: 2026-07-29
venue: arXiv preprint (cs.CL)
url: https://arxiv.org/abs/2607.26389
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2607.26389, v1 submitted 29 Jul 2026 and the only version at the time of
reading (abs page, 2026-10-10). Both authors are at Northeastern University. The
paper extracts one mean-difference activation direction per Big Five trait on
Qwen2.5-7B-Instruct and Llama-3.1-Nemotron-Nano-8B-v1, from responses elicited at
three prompted levels with the middle level held out, filtered by a GPT-4.1-mini
judge. It validates the directions by level ordering, zero-shot transfer to the
BIG5-CHAT dialogue corpus, a cross-trait specificity matrix, a TF–IDF
surface-text control and a steering check. It then projects the eight normal and
misaligned corpora of Chen et al.'s persona-vectors paper onto the directions,
and LoRA fine-tunes both models on three of them (evil, medical mistakes,
sycophancy) against a matched normal-split control. Personality is read from the
fine-tuned models' answers to 150 neutral questions, by projection, by the judge,
and from activations over a teacher-forced identical input. No rate of
misaligned behaviour is measured for any fine-tuned model.

All numbers the finding cites are in the body text, Tables 1–6 or appendix
Tables A8–A16 and the text of Appendices D–F and H. Two small text–table
mismatches: §5.3 gives Qwen transfer AUC as 0.90–0.998 where Table 2 prints
0.896–0.999, and Llama as 0.81–0.95 where it prints 0.808–0.946; the finding
uses the table values. The sycophancy agreeableness projection values in §5.4
are garbled by markitdown (the HTML alt text reads 21.8 to 12.8) and are not
cited. Figure 2, Figure A4 and Figure A6 are not cited beyond what the text and
tables state. The eight corpora, their severity splits and the fine-tuning
hyperparameters are taken from Chen et al. (2025). That paper lists insecure
code among its emergent-misalignment-like datasets, while this paper groups it
with the overtly harmful ones.

Local copies: `cache/papers/source-2026-misalignment-personality-rahman.{html,md}`
(arXiv HTML v1), `cache/papers/source-2026-misalignment-personality-rahman-abs.html`
(abs page).
