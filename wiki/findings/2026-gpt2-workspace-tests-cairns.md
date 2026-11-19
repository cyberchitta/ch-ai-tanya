---
type: finding
title: On capability-gated trials and with its ablation sizes scaled down, GPT-2 small passes four of the J-space paper's five functional workspace tests and fails directed modulation; it shows no layer band or ignition and only weak MLP amplification
date: 2026-10-21
models:
  - GPT-2 small
  - Gemma 3 270M (directed modulation only)
  - Gemma 3 270M IT (directed modulation only)
  - Gemma 3 1B (directed modulation only)
  - Gemma 3 1B IT (directed modulation only)
model-ids:
  - openai-community/gpt2
  - unsloth/gemma-3-270m
  - unsloth/gemma-3-270m-it
  - unsloth/gemma-3-1b-pt
  - unsloth/gemma-3-1b-it
source: https://www.lesswrong.com/posts/GeKveaNdruATcj2Fj
evidence: informal
code: https://github.com/cheeetoo/tiny-jlens/tree/4c1e959035cf33935e2344d70e4a3cda071649e5
cites:
  - source-2026-gpt2-workspace-tests-cairns
  - source-2026-global-workspace-gurnee
  - source-2026-global-workspace-review-nanda
  - source-2026-cognitive-access-butlin
  - source-2023-consciousness-in-ai-butlin
refs:
  - 2026-global-workspace-gurnee
  - 2026-jlens-replication-nanda
  - 2026-analogy-consciousness-holyoak
  - 2026-introspection-reality-check-singh
  - 2026-injected-pain-unreported-ferrara
  - 2026-activation-control-kowalski
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Cairns, Hao and Roe rerun the functional tests of the [J-space paper](2026-global-workspace-gurnee.md) on GPT-2 small (124M) with Neuronpedia's public J-lens ([Cairns et al. 2026](../../raw/posts/source-2026-gpt2-workspace-tests-cairns.md)). On trials the model answers correctly, and with the paper's fixed numbers of J-lens vectors scaled down to GPT-2's smaller J-space, it passes the tests for verbal report, internal reasoning, flexible generalization and selectivity, and fails directed modulation. In the privilege test, swapping a concept vector's J-space part moves the target word into the top 5 on 37 of 38 trials, against 7 of 38 for the remainder; Claude's figures were 59% and 5%. Of Claude's structure GPT-2 shows little: no distinct band of layers, no ignition, MLP gain of 1.2–1.4× against roughly 10×, and occupancy of 2 to 4 vectors against about 25. The authors argue that the four passed tests may largely follow from how the lens and the tests are built. On that reading the case for a workspace in Claude rests on directed modulation and the structure.

Filed beside [introspection](../concepts/introspection.md) as a methodological counterweight, the post turns two of the Gurnee entry's interpretive tensions into measurements, at one small scale.

## Method

**Model, lens and adaptation.** The J-lens vectors are centred to remove a direction they all share (mean pairwise cosine about 0.7). Readouts are unchanged; without centring the verbal-report swap works on 1 of 38 trials instead of 38. Each task is rewritten as a few-shot completion for a base model, and only trials the unperturbed model gets right are scored. The workspace band is set at layers 7–9 of 12. Bands starting at layer 6 or later give similar results.

**Scaling.** The paper's fixed numbers of J-lens vectors (16 for a concept vector's J-space part, 25 for a reasoning probe's, 10 for the selectivity ablation) were chosen for a J-space of about 25 active vectors. GPT-2's median band occupancy is 3, so each is multiplied by 3/25, giving 2, 3 and 1. Results at the paper's numbers are also reported.

**Which of the paper's tests are run.** The post rewrites each test; none is run unchanged.

- *Verbal report:* run: the category swap, the injected-thought test (57 single-token concepts, one-line prompt) and both privilege decompositions with the clamp.
- *Directed modulation:* one of three run, holding a category in mind while copying a sentence, on the paper's materials; also on the four Gemma models. Mental arithmetic and implicit pulling-in hit a capability floor. The post does not report the paper's appendix test, that instructions alter the J-space and not other representations. The repository runs an analogue, an "imagine this is French" header, in which the instruction moves the lens far more than the non-J-space representation.
- *Internal reasoning:* two-hop swaps, the depth control and the probe decomposition run, on new country-mediated questions (GPT-2 answers 19 of the 90 released ones). The rhyme-planning, Chinese-antonym, bandit and multi-step arithmetic examples are not run. In quick checks GPT-2 did not rhyme and did not give French antonyms, a stand-in for the Chinese example.
- *Flexible generalization:* run on the paper's 16 templates and 192 swaps.
- *Selectivity:* two of four. The J-space ablation is run on two-hop, one-hop and ordinary text, not the 14-task battery. The language test is run with report and continuation. The author question is attempted but cannot be tested, because GPT-2 names no right author; anomaly detection and the other flexible questions are not run. Line counting hits a capability floor; the experiential-report ablation needs an Assistant. Occupancy and variance are run.
- *Structure:* layer statistics and CKA, ignition, occupancy, list capacity and MLP gain are run; SAE gain strata and broadcast heads are not. The auditing, post-training and reflection-training sections are outside the post.

**What was checked here.** Numbers were re-tallied from the pinned repository's run data; the stub lists which.

## Key results

**Verbal report.** GPT-2 gives one of the paper's candidates in 9 of 14 categories, and on those the lens swap makes the target the top prediction on all 38 trials. In the privilege test the J-space part reaches top 5 on 37 of 38 trials, the remainder on 7 of 38, and the remainder with the J-space clamped on none. With the paper's 16 vectors they are 37 and 0 of 38. In the injected-thought test, at ten times Claude's injection strength over three layers, the median report reaches rank 1 from strength 0.2. At the best strength the word is in the report's top 5 for 52 of 57 concepts (Claude: 89%).

**Directed modulation fails.** A category member is the top J-lens readout during the copied sentence on 0.0–0.5% of trials in any condition, and at most 1.4% over wider bands. Of 50 hits in all, 48 come from two carrier sentences. At top 25 the rates are 12% with no instruction and 16–24% under the four instructions; they follow whether the phrasing opens with the category's name. Of the four Gemma models only Gemma-3-1b-it shows the effect, with no white-bear pattern, and much of it is the model about to write about the category: left to write freely under "think about", it copies the sentence exactly on 15 of 66 trials.

**Internal reasoning.** The unspoken intermediate country is in the band lens top 10 for 36 of 41 questions. The coordinate swap moves the target answer from median rank 90 to rank 1 and succeeds on 695 of 984 swaps. Splitting a country probe, the J-space part (3 vectors) flips the answer on 94% of swaps and the remainder on 14%, falling to 0.2% with the J-space clamped. On the post's windowed analysis the depth control does not clearly separate the intermediate from the answer: at layer 7 alone the answer swap already works on 19 of 37 questions, against 23 for the intermediate. In Claude the intermediate swap takes effect about 17% of depth earlier. The repository's criterion-3 summary, not reported in the post, scores onset by half-maximum on 31 questions and puts the intermediate 4 layers earlier.

**Flexible generalization.** Of 46 testable swaps, where GPT-2 knows the target's answer and is not already giving it, 10 work, against 16 for Claude on the same swaps. Both succeed mostly on the country functions and fail every "month after" and "successor" swap. Over all 192 swaps the counts are 28 (15%) and 76 (40%).

**Selectivity, once the ablation is scaled.** Ablating the most active J-lens direction over three layers leaves two-hop accuracy at 0.21 and ordinary-text top-1 agreement at 0.72, against 0.75–0.90 and 0.79–0.81 for five matched-norm random draws. With the paper's 10 directions, two-hop falls to 0 and ordinary text to 0.54. The language swap changes the named language in 12 of 21 cases and never the next sentence's language, but during the next sentence the language is not in GPT-2's band lens (best ranks 22–2,466), so the swap has nothing to change. At median occupancy the active J-lens vectors capture 7.9%, 7.8% and 14.1% of activation variance at layers 7–9, against 4.4%, 4.4% and 8.1% for random directions.

**Structure.** CKA between layers' J-lens vectors shows no blocks, and the readout's kurtosis is flat over layers. Under mixed-country input embeddings the representation stays a blend at every layer (the mixing-weight change from 10% to 90% of the way falls only from 0.78 to 0.70). MLP gain on centred J-lens vectors is 1.23–1.36 in the band, against 0.91–1.03 for neuron directions.

**The by-construction check.** Over 114 trial–layer cases, the J-space part's swap direction has a median cosine of 0.47 with the lens swap's direction (target minus source lens vector), and the remainder's 0.06. In 56, the target's own lens vector is one of the two picked for its concept vector. The authors conclude that the privilege test may largely measure which part points at the word.

## Why it matters

The post turns two of the [Gurnee entry](2026-global-workspace-gurnee.md)'s tensions into measurements: whether the lens reads the workspace or constructs it, and whether selectivity is about the model or the lens. It also takes up the third, the [Eleos](../../raw/papers/source-2026-cognitive-access-butlin.md) distinction between a privileged set and a workspace: on the authors' reading, what GPT-2 shows is a privileged set. The entry's headline privilege result reappears in GPT-2 (97% against 18%; Claude 59% against 5%), with a first-order account of why. That does not refute privilege, but it means that the result the entry and the [introspection](../concepts/introspection.md) scope note lean on, a small share of variance carrying nearly all of report, is reproduced in a 124M base model the authors do not credit with a workspace.

What GPT-2 lacks is what the post says now carries the case: directed modulation, a band, ignition and strong amplification. Among the small models tried, directed modulation appears only with instruction tuning at 1B. [Nanda's replication](2026-jlens-replication-nanda.md) bears on the same points. It graded directed modulation on Qwen 3.6 27B a moderate success, without a baseline condition, found CKA blocks less clean than the paper's, and found a multihop control that the answer swap matches. GPT-2's depth control is equivocal in the same place.

For the consciousness-indicators lens, the post argues that an indicator is useful only if rare without what it indicates, and GPT-2 shows four of five. This is the small-model objection, which the lens's functionalist anchor lists as the minimal implementation problem ([Butlin et al.](../../raw/papers/source-2023-consciousness-in-ai-butlin.md), 2025 version); here it is backed by measurement. [Holyoak and Monti](2026-analogy-consciousness-holyoak.md) criticise the J-space finding on different, evidential grounds.

## Interpretive tensions

**"Passes" means passing an adapted, gated subset.** Selectivity holds at 1 ablated direction and is weaker at the paper's 10, and two-hop runs on questions the authors wrote; they say its rates cannot be compared with Claude's. The comparisons with Claude carry no significance tests. A model that passes a selected, adapted subset is weaker evidence that the tests are easy than a model that passes them as written.

**Whether GPT-2 lacks a workspace is assumed.** The weak-indicator argument needs GPT-2 to have no workspace, which is the authors' prior, not a measurement. They name the alternative: GPT-2 has a smaller, less reliable one, and the paper's functional workspace is then a low bar. The post leaves the choice open, and so does this entry.

**The by-construction account is first-order.** The cosines do not show that alignment is sufficient for the effect. The paper's clamp result, where the remainder's effect vanishes when the J-space is held fixed, is reproduced in GPT-2 and is not addressed by the cosine argument. A model with a workspace and a model without one could both give these numbers.

**Directed modulation's failure rests on one task.** The post tests only the copying task, scoring it by top-1 hits, with top-25 ranks as a secondary read. The repository's own criterion-2 module, which the post does not report, runs a different design: single tracked words and a no-mention baseline. There, "think about" ranks the word above a bare mention in most word–carrier pairs, and so does "don't think about", with median best ranks in the hundreds. The same module's "imagine this is French" analogue of the paper's appendix test is one that GPT-2 passes. Whether these are weak instruction effects or the wording artifact the post describes is not resolved. See the stub.

**The injected-thought control.** The post argues that the paper's position control scores the bare token, which fits after an open quote and not mid-sentence, so it mostly checks that the word is predicted less where it is less likely anyway. In GPT-2, at the best strength, 45 of the 52 concepts reported in the top 5 are also in the top 5 at some other position of the reply, counting any form of the word (this entry's re-tally). The argument uses GPT-2's data about Claude's protocol and was not tested on Claude.

## Concepts

**No concept instantiated.** The finding sits beside introspection as a
counterweight; the bullet below says how.

- [Introspection](../concepts/introspection.md) — **counterweight**, not an instantiation, in the way the [reality-check](2026-introspection-reality-check-singh.md) and [injected-pain](2026-injected-pain-unreported-ferrara.md) findings are. The J-space tests behind the concept's two substrate entries, rerun on a 124M base model, reproduce the privilege and report results, which the post argues partly follow from how the lens is built. It leaves the task-conditional reading in the scope note resting on tests GPT-2 passes only in reduced form, and on structure GPT-2 lacks or shows only weakly. Placement follows the counterweight precedent and is conservative.

## Cross-references

- [Global workspace (Gurnee et al.)](2026-global-workspace-gurnee.md): the paper whose tests are rerun.
- [J-lens replication (Nanda)](2026-jlens-replication-nanda.md): the other open-model run, at 27B, with less clean CKA blocks and a windowed depth control that, like GPT-2's, does not clearly separate intermediate from answer.
- [Holyoak and Monti](2026-analogy-consciousness-holyoak.md): consciousness-indicators lens, sceptic side. That entry links this one as bearing on what the J-space tests show.
- [Activation control (Kowalski et al.)](2026-activation-control-kowalski.md), filed in the same batch: how far models can control their own activations, the capacity the directed-modulation test probes.
- [Eleos commentary (Butlin et al.)](../../raw/papers/source-2026-cognitive-access-butlin.md): the privileged-set / privileged-stream distinction the post's conclusion uses. Cited in the post and not filed here: Chalmers's commentary, and an open-model survey of J-space layer structure.

## Sources

- Cairns, F., Hao, Y., & Roe, Z. (2026). [Even GPT-2 passes most functional global workspace tests](../../raw/posts/source-2026-gpt2-workspace-tests-cairns.md). LessWrong, 21 October 2026 (read). Code and run data: repository `tiny-jlens`, commit `4c1e959`.
- [Gurnee, Sofroniew, Pearce, Lindsey et al. 2026](../../raw/papers/source-2026-global-workspace-gurnee.md), "Verbalizable Representations Form a Global Workspace in Language Models", Transformer Circuits Thread, 6 July 2026.
- Nanda, N. (2026). [A review of Anthropic's global workspace paper](../../raw/papers/source-2026-global-workspace-review-nanda.md).
- Butlin, P., Shiller, D., Plunkett, D., & Long, R. (2026). [Consciousness and cognitive access in LLMs](../../raw/papers/source-2026-cognitive-access-butlin.md).
