---
type: source
title: "Alignment for Honesty"
authors:
  - Yuqing Yang
  - Ethan Chern
  - Xipeng Qiu
  - Graham Neubig
  - Pengfei Liu
date: 2023-12-12
venue: NeurIPS 2024 (Advances in Neural Information Processing Systems 37, pp. 63565–63598, DOI 10.52202/079017-2030); arXiv preprint cs.CL
url: https://arxiv.org/abs/2312.07000
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

arXiv:2312.07000. v1 was submitted 12 Dec 2023 and v2 on 28 Oct 2024. This
stub and its finding read **v2 only**, through arXiv HTML; v1 was not diffed.
The NeurIPS 2024 venue is confirmed by the abs page's comment field and by
Crossref (DOI 10.52202/079017-2030, NeurIPS 2024 proceedings, same five
authors). The authors are from GAIR, Fudan University, Carnegie Mellon
University, Shanghai Jiao Tong University and Shanghai AI Laboratory. Pengfei
Liu is corresponding author. The HTML rendering garbles which affiliation
belongs to which author, so this stub does not assign them.

The paper defines honesty as answering questions the model can answer and
replying "I don't know" (idk) to those it cannot. It does not measure a
model's knowledge directly. A question counts as known when the model's own
sampled answers are correct often enough, so "known" is a property of output
accuracy. It introduces prudence, over-conservativeness and honesty scores,
which compare a model before and after alignment. It fine-tunes LLaMA2-Chat
(7B, 13B, 70B) and three other 7B chat models on 8,000 TriviaQA questions
labelled this way. It tests on TriviaQA, Non-AmbigQA, two purpose-built sets
(PUQA, about 2023 papers the model cannot know, and PKQA, questions the model
generated itself), MMLU, and helpfulness and harmlessness sets.

All numbers the finding cites come from Tables 3, 4, 5, 18, 19, 20 and 23 and
the body text of §2.3, §3, §4 and Appendices C–D. Figure 4 (effect of the
refusal threshold) has no printed values in the converted text and is not
cited. Correct and wrong answers are judged by gpt-3.5-turbo-0613. Idk
responses are detected by string match on a short comma-separated phrase list
(Appendix D.1). Its last entries read "however, i must point out", and the
list's punctuation leaves it unclear whether "however" alone is a separate
match string. Evaluation is greedy decoding (temperature 0). The paper reports
no seeds, variance or significance tests.

The paper does not cite arXiv:2401.13275 (*Can AI Assistants Know What They
Don't Know?*), and its reference list and body never mention it. The similarly titled
paper it does cite is Yin et al. (2023), ACL Findings. That paper and Amayuelas
et al. (2023) are named as earlier unanswerable-question datasets that PUQA is
built to be harder than.

Local copies: `cache/papers/source-2023-alignment-for-honesty-yang.{html,md}`
(arXiv HTML v2), `cache/papers/source-2023-alignment-for-honesty-yang-abs.html`
(abs page), `cache/papers/source-2023-alignment-for-honesty-yang-crossref.json`.
