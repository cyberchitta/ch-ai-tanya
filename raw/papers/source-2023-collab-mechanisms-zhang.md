---
type: source
title: "Exploring Collaboration Mechanisms for LLM Agents: A Social Psychology View"
authors:
  - Jintian Zhang
  - Xin Xu
  - Ningyu Zhang
  - Ruibo Liu
  - Bryan Hooi
  - Shumin Deng
date: 2023-10-03
venue: ACL 2024 (Long Papers), pp. 14544–14607, DOI 10.18653/v1/2024.acl-long.782; arXiv:2310.02124
url: https://arxiv.org/abs/2310.02124
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

Zhang, Xu and colleagues (Zhejiang University, Google DeepMind, NUS) run small groups of instances of one model on 50-question samples of MMLU, MATH and BIG-Bench chess move validity. Each agent is prompted as either "easy-going" (open to persuasion) or "overconfident" (confident and persuading others). Groups of three are built in four trait mixes, and in each round every agent either debates (sees the other agents' answers) or reflects (re-checks its own). The main runs use gpt-3.5-turbo-1106 at temperature 0, five trials per cell. Appendices repeat them on a July 2023 gpt-3.5-turbo snapshot, Llama 2 Chat 13B and 70B, Qwen 72B and Mixtral 8x7B, and vary group size (2–10), rounds (3–10) and mixed thinking patterns within a round. The paper's psychology content is a "conformity" count (an agent's answer matching the previous round's most common answer), a consensus measure, and the trait manipulation. Most of the paper compares collaboration strategies for accuracy and token cost.

**Version read.** arXiv HTML v3 (27 May 2024). The cached HTML carries neither the venue nor the version dates. Those come from the arXiv abstract page (v1 3 Oct 2023, v2 26 Feb 2024, v3 27 May 2024; comments field "ACL 2024 Main Conference"). v1 and v2 were not read, so differences are unknown. Venue confirmed via Crossref (DOI above, ACL 2024 Volume 1) and the ACL Anthology page title (both fetched 2026-10-10). Affiliations per the HTML: Zhang, Xu, N. Zhang at Zhejiang; Liu at Google DeepMind; Hooi and Deng at NUS.

**Citable numbers and where they live.** Accuracy by society and strategy: Table 2 (gpt-3.5-turbo-1106, md lines 258–293) and Table 8 (July 2023 snapshot, md 1681–1715). Society ANOVAs: Table 6 (1106, md 1644–1658) and Table 9 (July, md 1717–1731); the authors' own count of 17/24 and 23/24 is at md 1745–1748. Prompts: Table 5 (md 1571–1590). Decoding: Table 4 (md 1541–1569). The conformity rule is Appendix G.1 (md 1881–1884). Conformity results exist only as figures. Figure 6 (ChatGPT) is an SVG with a printed value on every bar segment. It does not render in the converted copy and was rendered from `cache/papers/figures/source-2023-collab-mechanisms-zhang/conformity.svg` into `conformity-part0.png` (MMLU), `-part1.png` (MATH) and `-part2.png` (chess). Figure 28 (Llama 2 Chat 13B) is `x3-llama13-conformity.svg`, with its MMLU panel rendered as `x3-llama13-conformity-part0.png`. On both figures the colour of each small label matches its segment (pink True→False, purple False→True), and in every round the four segments sum to the printed total within 0.03. The caption of Figure 6 says only "ChatGPT", not which snapshot. Figures 3, 12 and 16 (`agent-number-case.png`, `holdon-gpt.png`), the group-size, answer-keeping-by-trait and consensus charts, have no printed values and are not cited numerically.

**Inconsistencies in the source.** (1) §3.1 says the societies do not differ significantly in performance and cites the appendix ANOVAs in support (md 320–323). On the main-text model (gpt-3.5-turbo-1106), Table 6 has society p < 0.05 in 17 of 24 strategy–dataset cells. The authors acknowledge this count in Appendix E (md 1746–1747) and still read it as supporting their conclusion, by contrast with the July snapshot (23 of 24 above 0.05). (2) "Conformity" is defined as an agent's answer at round j equalling the most frequent answer at round j−1, counted over all agents, including the agent's own previous answer (md 1883). An agent that keeps an answer it already shared with the majority counts as conforming. (3) §4 says the proportion of conformity generally rises with rounds (md 417). In Figure 6 it falls on MMLU (89.30%, 85.60%, 85.16%) and rises on MATH and chess. (4) Several Table 2 cells have SD ±0.0 across five trials at temperature 0 (for example MMLU p1p1p1, all four societies), so the trials are close to repeated runs of the same output, and the ANOVAs treat them as independent samples. (5) The evaluation step takes a majority vote and then states that a group without unanimity is scored as an error (md 1613–1615). The text does not make clear which rule applies when a majority exists without unanimity. (6) Appendix D.1 says the open models run at temperature 0.7 with Top P and Top K of 50 and 0.95, while Table 4 gives temperature 0.75, Top K 50 and Top P 0.95 (md 1543–1567).

Local copies: `cache/papers/source-2023-collab-mechanisms-zhang.{html,md}` (arXiv HTML v3 and its markitdown conversion); figures in `cache/papers/figures/source-2023-collab-mechanisms-zhang/`.
