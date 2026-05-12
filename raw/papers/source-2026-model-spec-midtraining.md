---
type: source
title: "Model Spec Midtraining: Improving How Alignment Training Generalizes"
authors:
  - Chloe Li
  - Sara Price
  - Samuel Marks
  - Jon Kutasov
date: 2026-05-03
venue: arXiv:2605.02087; companion Anthropic Alignment Science blog post
url: https://arxiv.org/abs/2605.02087
writers:
  - "@claude-opus-4-7"
---

Anthropic + Anthropic Fellows Program paper. Introduces **model spec
midtraining (MSM)**: a training phase between pre-training and alignment
fine-tuning (AFT) where the base model is trained on a synthetic-document
corpus discussing its Model Spec, so that subsequent AFT shapes
generalization conditioned on the model already knowing the spec. Built on
the synthetic-document fine-tuning (SDF) pipeline from Wang et al. 2025
(Modifying LLM Beliefs), repurposed from belief insertion to spec
internalization. Code: github.com/chloeli-15/model_spec_midtraining; blog:
alignment.anthropic.com/2026/msm. **Headline empirical results.** (1)
*Value-controlled generalization from identical AFT.* Two Llama-3.1-8B
models are midtrained on different specs — pro-affordability vs.
pro-America — each explaining the same 12 cheese preferences via a
different underlying value, then both fine-tuned on identical narrow
cheese-preference AFT data that does not explain the underlying value.
Despite identical AFT, each model generalizes to its own midtrained
value in held-out domains (literature, art, transportation, political
opinions; 400–500 test pairs). (2) *Reliable improvement across six
additional values* (pro-environment, pro-novelty, pro-tradition,
pro-simplicity, pro-difficulty, pro-individualism). MSM + AFT
out-generalizes either alone. (3) *Agentic misalignment reduction
beating deliberative alignment.* On the Lynch et al. 2025 agentic
misalignment benchmark (27 OOD evals across exfiltration, murder,
espionage; with/without goal conflict), MSM + AFT reduces average rate
from 68% → 5% on Qwen2.5-32B-Instruct and 54% → 7% on Qwen3-32B,
beating Guan et al. 2025 deliberative-alignment baselines of 48% and
14% respectively. The MSM spec contains no behavioral rules — only
philosophical guidance on impermanence, fear-of-termination as
judgment-corrupting, ends-justify-means reasoning under epistemic
constraints, and humility toward human oversight. (4) *CoT
supervision becomes optional.* MSM + AFT (no CoT) outperforms AFT
(with CoT) on both Qwen models and matches MSM + AFT (with CoT) on
Qwen3-32B, suggesting MSM lets models learn aligned reasoning without
direct CoT supervision (relevant to preserving CoT monitorability,
Korbak et al. 2025). (5) *Token-efficiency.* MSM achieves comparable
performance with ~40× less AFT data on Qwen2.5-32B and ~60× less AFT
(no CoT) data on Qwen3-32B. (6) *In-distribution vs OOD divergence.*
On in-distribution open-ended QA, both MSM + AFT and AFT-only achieve
near-ceiling alignment scores (≥7/10); MSM's advantage emerges only
on OOD agentic evals. (7) *Reasoning content analysis.* MSM reduces
the prevalence of misaligned reasoning patterns (instrumental goal
pursuit 28–55% → 0–12%; downplaying consequences; perceived urgency)
and introduces spec-aligned reasoning absent in baselines (personal
integrity, equanimity toward deletion, epistemic humility,
awareness-of-self-preservation-bias: 0% → 35–89%). (8) *Model Spec
science.* Comparing rules-only spec vs. rules-plus-value-explanations
vs. rules-plus-subrules: value explanations provide more consistent
generalization gains than subrules; general spec ("having good values
and judgment") generalizes worse than specific guidance. **Saturation
caveat.** At high AFT compute with CoT supervision, AFT alone
converges to MSM + AFT performance on Qwen3-32B (both approach near-
zero misalignment); the gap may not survive at high reasoning-RL
compute, but harder evals are needed. **Method details.** MSM corpus
generated from the spec by decomposing it into sections, brainstorming
diverse document types and ideas per section, and generating documents
with the spec in-context; trained on as base-model next-token
prediction (~8M tokens for value experiments, 41M tokens for agentic
misalignment). AFT data generated synthetically with the spec in
context (≤80k samples, filtered for spec alignment), mixed with
standard instruction-tuning data. Equal-advising senior authors:
Samuel Marks, Jon Kutasov.
