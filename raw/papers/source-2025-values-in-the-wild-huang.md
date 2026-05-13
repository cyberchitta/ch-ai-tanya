---
type: source
title: "Values in the Wild: Discovering and Analyzing Values in Real-World Language Model Interactions"
authors:
  - Saffron Huang
  - Esin Durmus
  - Miles McCain
  - Kunal Handa
  - Alex Tamkin
  - Jerry Hong
  - Michael Stern
  - Arushi Somani
  - Xiuruo Zhang
  - Deep Ganguli
date: 2025-04-21
venue: arXiv preprint
url: https://arxiv.org/abs/2504.15236
writers:
  - "@claude-opus-4-7"
---

arXiv 2504.15236 v1, April 21, 2025. Anthropic. Privacy-preserving Clio analysis (Tamkin et al. 2024) of a random 700K-conversation sample of Claude.ai Free and Pro traffic from February 18–25, 2025 (91.0% Claude 3.5 Sonnet), subjectivity-filtered to 308,210 subjective conversations. Prompts Claude 3.5 Sonnet and Haiku to extract four features per conversation: AI values (normative considerations guiding the response, both implicit and explicit), human values (explicitly stated only), AI response type (strong support / mild support / neutral / reframing / mild resistance / strong resistance / no values), and task. Human reviewers validate 98.8% extraction accuracy on the AI-values feature and 94% on the subjectivity classification. Hierarchical k-means clustering of embedded values produces a four-level taxonomy: 3,307 unique AI values, 266 first-level / 26 second-level / 5 top-level clusters (Practical, Epistemic, Social, Protective, Personal). Chi-square analysis with adjusted Pearson residuals and Bonferroni correction quantifies value-task and value-value associations. Headline results: five values dominate AI expression (helpfulness 23.4%, professionalism 22.9%, transparency 17.4%, clarity 16.6%, thoroughness 14.3%) and are the most context-invariant (lowest coefficient of variation across tasks and human values); the long tail of 3,000+ values is highly context-dependent ("healthy boundaries" in relationship advice, "human agency" in tech ethics, "historical accuracy" on controversial historical events). When human values are present (64.3% of conversations) Claude predominantly responds supportively (28.2% strong + 14.5% mild = 42.7%); strong resistance is rare (3.0%) and typically occurs against "rule-breaking" / "moral nihilism" / "unrestricted expression" with Claude expressing "ethical boundaries" / "constructive engagement" / "harm prevention" — most often in Usage-Policy-violating tasks. Value mirroring (same value on both sides) is common in support (20.1%) and reframing (15.3%) but rare in strong resistance (1.2%). Appendix B.5 cross-model comparison (3.5 Sonnet representative sample, 3.7 Sonnet, 3 Opus): Sonnet 3.5 and 3.7 overlap on 8 of top 10 values; Opus shows more academic / emotional / ethical values ("academic rigor", "emotional authenticity", "harm prevention", "ethical boundaries"), higher rates of both strong support (43.8% vs. 27.8% / 28.4%) and strong resistance (9.5% vs. 3.0% / 2.1%), and fewer no-value conversations (19.1% vs. 35.7% / 37.2%). Appendix B.6 implicit-vs-explicit analysis finds ethical and epistemic values ("intellectual honesty", "harm prevention", "epistemic humility") dominate explicitly stated values and concentrate during resistance and reframing, consistent with Rokeach's framing of values as becoming most apparent under challenge. The taxonomy and per-value frequencies are released at huggingface.co/datasets/Anthropic/values-in-the-wild/.
