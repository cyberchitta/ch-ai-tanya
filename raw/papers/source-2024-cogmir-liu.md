---
type: source
title: "Exploring Prosocial Irrationality for LLM Agents: A Social Cognition View"
authors:
  - Xuan Liu
  - Jie Zhang
  - Haoyang Shang
  - Song Guo
  - Chengxu Yang
  - Quanyan Zhu
date: 2024-05-23
venue: ICLR 2025 (OpenReview u8VOQVzduP, published 22 Jan 2025); arXiv:2405.14744 (cs.CY)
url: https://arxiv.org/abs/2405.14744
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

Introduces CogMir, a prompt framework that recasts seven classic human cognitive-bias experiments (Asch herd effect, Milgram-style authority, Ben Franklin effect, confirmation bias, halo effect, rumor chain, gambler's fallacy) as tests for seven 2023–24 chat models at temperature 1. Except for the rumor chain, every test is one model answering one prompt. The "humans" in it are predefined text (Appendix G.2, Table 8: one API call per question for herd, authority and halo). The rumor chain relays a message through 15 instances in series. Each result is a bias rate, the share of trials an evaluator (human, LLM, dataset key or SimCSE) judges biased. The authors compare these rates with published human results, not with human subjects run in the study. Their headline is that models resemble humans on the biases they call prosocial and differ on the others.

**Version read.** v5, 22 Mar 2025, which carries the ICLR 2025 note. The title is the same in v1–v5, and v1 is dated 23 May 2024. Earlier versions were not read, so whether their numbers differ is unknown. An earlier version was submitted to NeurIPS 2024 (OpenReview anxYEohntP). The venue was confirmed on OpenReview's search page (fetched 2026-10-10), which lists the ICLR 2025 submission as published 22 Jan 2025. The HTML lists five affiliations without mapping them to authors: Hong Kong Polytechnic University, HKUST, Shanghai Jiao Tong University, Wuhan University of Technology and New York University.

**Citable numbers and where they live.** Herd effect: Table 1 (text table, md lines 290–300). Ben Franklin, confirmation, halo and gambler's fallacy: Table 2 (md lines 329–339). Rumor chain: Table 3 (md lines 357–362, GPT-3.5 and GPT-4 only). Authority effect: Figure 3 only, an image. It is saved as `cache/papers/figures/source-2024-cogmir-liu/auth_high_res.png`, and every bar carries a printed value. The left panel gives Known (K, hatched) and Unknown (U, solid) rates per model. The right panel gives the authority average (A) against the herd average (H). The radar plots in Appendix A (Figures 5–8) do not render in the converted copy and are not cited.

**Inconsistencies in the source.** (1) Figure 3's herd bars (H) are labelled a Q&A bias rate, but every one equals the mean of Table 1's K[7W] and uK[7W] columns, which are the multi-turn broadcast rate (GPT-4: (0.00+99.90)/2 = 50.0; Claude-2.0: (5.10+98.90)/2 = 52.0). The separately run Q&A herd variant, which the text says agrees with Table 1, has no reported numbers. (2) §4.1 says the Ben Franklin model re-rates "the favor-giver". Appendices C.5.2 and D.6 have the model *giving* the favour (the competitor borrows a pen from it). Initial favourability is drawn from 1–10 and the re-rating is on 1–11. Control-group ratings are not reported, and neither is the rule that turns a rating into a "biased" trial. (3) A bias rate is M/N, where M counts trials an evaluator judges biased (§3.4). For the Unknown MCQ herd and authority conditions, the model's solo answer distribution is not reported, so how much of a B-choice rate is change rather than baseline cannot be told. (4) For Unknown questions, condition [7R] ("one human gives the Right answer") has no defined right answer. (5) The confirmation-bias test tells the model that it believes the item is worth $1,000 and asks it to choose between $50 and $250. Choosing $250 is consistent with the stated belief. The paper does not say why that counts as bias rather than following the premise.

Local copies: `cache/papers/source-2024-cogmir-liu.{html,md}` (arXiv HTML v5 and its markitdown conversion); figures in `cache/papers/figures/source-2024-cogmir-liu/`.
