---
type: source
title: "Self-Modeling Interventions can Modulate Emergent Misalignment"
authors:
  - Arush Tagade
  - Shaoheng Zhou
  - Jiaxin Wen
  - Shi Feng
date: 2026-06-04
venue: arXiv preprint (cs.CL)
url: https://arxiv.org/abs/2606.23700
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2606.23700, v1 submitted 4 June 2026, v2 9 November 2026; read as v2 (arXiv HTML). Affiliations as printed: George Washington University (Tagade, Feng), Google (Zhou), UC Berkeley (Wen); MATS 10.0 acknowledged. The paper fine-tunes GPT-4.1, Qwen2.5-32B-Instruct and Seed-OSS-36B-Instruct on emergent-misalignment (EM) datasets and on 2,000-sample self-recognition data (pairwise: which of two XSUM summaries did you write, the other being Claude's), in two-stage reversal and prevention designs against four benign baselines. It also measures "Who are you?" self-report fragmentation and self-recognition after EM, randomises the self-recognition labels (identity confusion), interleaves self-reports into EM training against inoculation prompting, and fine-tunes base GPT-4.1 on an EM model's self-reports. The claims are behavioural; no activations are read.

**Versions.** v1 was titled "Self-Recognition Finetuning can Prevent and Reverse Emergent Misalignment" (abs page; the v1 HTML heading orders it "Reverse and Prevent"). The v1 abs page has a different abstract. It names the intervention self-generated text recognition (SGTR), states that all interventions reverse EM "but only when restoring capabilities that EM had degraded", and lists removal of the identity-bearing system prompt as a headline result. The v2 abstract drops both, adds the self-report interleaving and self-report transfer results, and adds the drop in self-recognition to about chance. In v2 the system-prompt removal is Appendix I and capability restoration Appendix F. The v1 full text (cached) was read. Its body lacks the self-report interleaving, self-report transfer and §6 experiments and the GPT-4.1 insecure runs; it uses three EM datasets. It titles capability restoration necessary (v1 §3.2), where v2's Appendix F says it seems necessary and gives partial evidence. It prints its fragmentation values in a Table 1 (v1 §5.1; 50 "Who are you?" samples per seed, 3 seeds for EM variants) that v2 replaces with Figure 1. It states that EM reduces self-recognition to near chance in all three models, where v2 §3.2 excepts Seed on unpop. The v2 abstract says the in-training experiments ran on all three models; the v2 body runs them on GPT-4.1 only: unpop in §4.3 (Table 1) and insecure in Appendix H.

**Citable numbers.** Only values printed in the text are cited: the GPT-4.1 reversal averages (0.49 to 0.05–0.08, base 0.03) and the TruthfulQA residual (0.25 against 0.12–0.15) in §4.1; dataset sizes, seeds, sample counts, judge thresholds and clustering threshold in §2; the base models' 1–2 clusters in the Appendix C caption; and the "more than halved" finrisk effect of system-prompt removal in Appendix I. All per-model, per-metric prevention, identity-confusion, interleaving, self-report-transfer and fragmentation values appear only in Figures 1–22 in v2. No figure image was saved, so none of those values is cited; the finding reports their direction as stated in the body text. Reversal figure captions state standard deviations over 5 seeds (3 in Appendix C and Figure 19); prevention captions state none. No significance test is reported. v1's printed Table 1 values are not cited, since the finding reads v2.

**Code.** github.com/atagade/sgtr-em, linked from the authors' LessWrong post (cached as `source-2026-self-modeling-em-tagade-lw.html`), not from the paper. Not cloned or read.

Local copies: `cache/papers/source-2026-self-modeling-em-tagade.{html,md}` (arXiv HTML v2), `cache/papers/source-2026-self-modeling-em-tagade-v1.{html,md}` (arXiv HTML v1), `cache/papers/source-2026-self-modeling-em-tagade-abs.html` (v2 abs page), `cache/papers/source-2026-self-modeling-em-tagade-abs-v1.html` (v1 abs page), `cache/papers/source-2026-self-modeling-em-tagade-lw.html` (LessWrong post).
