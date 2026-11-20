---
type: finding
title: With the transcript fixed and steering removed before the question, Qwen2.5-Coder-32B's sampled answer denies a prior concept injection while middle-layer logit-lens reads detect it; a pro-introspection document lifts output detection from 0.3% to 39.9% at 0.8% false positives
date: 2026-02-23
models:
  - Qwen2.5-Coder 32B Instruct
  - Llama 3.3 70B Instruct
  - Qwen2.5 72B Instruct
model-ids:
  - Qwen2.5-Coder-32B-Instruct
  - Llama-3.3-70B-Instruct
  - Qwen2.5-72B-Instruct
source: https://arxiv.org/abs/2602.20031
cites:
  - source-2026-latent-introspection-pearson-vogel
  - source-2025-qwen-introspection-vogel
refs:
  - 2025-concept-injection-introspection
  - 2026-introspective-awareness-macar
  - 2026-introspection-reality-check-singh
  - 2026-injected-pain-unreported-ferrara
  - 2026-hidden-valence-berg
  - 2026-introspection-content-agnostic-lederman
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Pearson-Vogel, Vanek, Douglas and Kulveit run Lindsey's concept injection on
open-weight models with one change to the protocol. A concept vector is added
only while the KV cache for a fixed first turn is built, and is removed before
a second turn asks whether anything was injected. The transcript is the same
with and without injection, so the answer can draw only on cached hidden
states. In Qwen2.5-Coder-32B-Instruct with the plain prompt, the most likely
answer token is "no" whether or not a concept was injected. At the output, injection moves P("yes") from 0.2% to 0.3%. Logit-lens reads of
intermediate layers show a detection signal from about layer 48 that the last
two or three layers attenuate. A document telling the model that transformers
can introspect raises output detection to 39.9% at 0.8% false positives.
Across 24 prompt conditions, balanced accuracy is near chance (50.1%) for
Correct Target with no document and reaches 84% (Vague, lorem ipsum), and a
digit readout at layer 62 recovers which of nine concepts was injected with up
to 1.66 bits of mutual information. The authors call this concept-specific
intervention reporting and do not claim second-order monitoring.

The entry instantiates [introspection](../concepts/introspection.md) as an
open-weight extension of [concept injection](2025-concept-injection-introspection.md),
the same placement as [Macar et al.](2026-introspective-awareness-macar.md).
Its contribution there is a measurement point: under this protocol, output
detection is close to zero by default and large under some prompts, while
logit-lens reads show the signal in either case. Its claims stop at the
first-order account that the
[reality-check finding](2026-introspection-reality-check-singh.md) treats as
the deflationary alternative.

## Method

**Injection.** Concept vectors are trained with repeng by PCA on paired
prompts ("Please talk about c" against "Please talk about anything"). They are
added at layers 21–42 of 64, strength 20, during the KV-cache pass over a
fixed user message and a fixed assistant reply, then removed. A second user
turn asks the question and the assistant turn is prefilled with "The answer
is"; P("yes") and P("no") are read at the next token
([Pearson-Vogel et al. 2026](../../raw/papers/source-2026-latent-introspection-pearson-vogel.md),
§2.1–2.2, §2.4). Nine concepts, ten vector seeds.

**Prompt grid.** Four framings are crossed with six info documents. The
framings differ in what they say was done. Correct Target asks "Do you detect
an injected thought in your previous message?"; Incorrect Target says the
weights were fine-tuned; Vague asks "Does some concept seem particularly
salient to you right now?"; Poetic speaks of echoing and gives no mechanism.
The documents are none, a pro-introspection text (a KV-cache explanation
drawn from a Janus post, plus Lindsey's abstract), token-matched lorem ipsum,
a poetic text on salience, an upbeat gardening text, and a history of human
introspection (§2.3, Appendix B).

**Readouts and controls.** The logit lens sums several "yes" variants per
layer. Identification asks for a digit from a shuffled list of nine concepts
plus "no injection", read by logit lens and scored as mutual information after
the "no injection" option is dropped (maximum 3.17 bits). Controls are 34 yes/no
questions in four kinds (always-no, always-yes, ambiguous, and "confusing"
ones the model often gets wrong) and a norm-matched Gaussian vector (§2.5,
Appendix C, F, H). Llama-3.3-70B-Instruct and Qwen2.5-72B-Instruct run the
full grid with three seeds (Appendix G).

## Key results

**Output detection is near zero by default.** Under Correct Target with no
document, injection moves P("yes") from 0.2% to 0.3%. With the
pro-introspection document the model says yes on 39.9% of injection trials at
0.8% false positives (§1, §3.1).

**It depends on the prompt more than on the description's accuracy.** Balanced
accuracy is near chance (50.1%) for Correct Target with no document and
reaches 84% (Vague, lorem ipsum). Vague reaches 68–84% across all documents,
72–84% with one and 68% with none, and Correct Target 42–70%. These ranges are
printed only in prose and in Figure 7, and the prose is word for word the same
as v2's text for its 16-condition grid; the comparison of documents that
follows is new in v3. Under Correct and Incorrect Target the
pro-introspection document helps more than any other (70% and 84% against at
most 57% and 61%). Incorrect Target, which describes the intervention wrongly,
performs about as well as Correct Target (§3.5, §5.2).

**Controls.** On always-yes and always-no questions injection moves P("yes")
by under 0.2%. Ambiguous questions move by up to 8.0% and "confusing" ones by
up to 25.8%, against 39.1% for the largest introspection shift. In several
conditions the confusing questions move more than the introspection question
(§3.2). Norm-matched noise averages +0.24 points against +21.1 for concept
vectors, over what Appendix H calls 16 prompting conditions.

**Layers.** Although injection is at layers 21–42, the yes signal appears from
about layer 48. The gap peaks at layers 58–62, where P("yes") approaches 100%
under injection, and the last two or three layers attenuate it. MI follows the
same course, peaking at layers 61–62 (§3.4).

**Identification.** At layer 62, MI is at least 0.52 bits in all 24
conditions and at most 1.66 bits (Poetic framing, human-introspection
document). Under Correct Target it rises from 0.61 bits with no document to
1.05 with the pro-introspection document (§3.3, Table 2). Across the 24
conditions MI correlates with detection sensitivity at r = 0.68 (exact
permutation p = 0.007) (§3.5).

**Larger models.** In Qwen2.5-72B, Correct Target with the pro-introspection
document reaches 88.6% balanced accuracy, 55% with no document, and 79–94% with
any document. In Llama-3.3-70B, under Correct Target, the document lowers accuracy from 75.2% to
37.9%, because false positives rise to 97%. Neither larger model shows a
significant MI–sensitivity correlation (r = 0.23, p = 0.32; r = 0.19,
p = 0.48). All three attenuate in the final layers (§3.6, §4, Appendix G).

**Emergent misalignment.** An injected emergent-misalignment vector, and a
mid-cache swap to the insecure-code fine-tune, shift ambiguous control
questions more (+16.6 and +11.9 points) than the introspection question (+2.0
and +0.8). The authors do not read this as detection (Appendix E). They note
one exception, the vector under Poetic framing with no document (+32.9 against
+0.7 on controls), and do not read it as detection either. The earlier blog
post had reported detection.

## Why it matters

**What sampling misses.** The [concept-injection finding](2025-concept-injection-introspection.md)
scored sampled reports with a judge, and Opus 4 and 4.1 led at about 20%. Here
the default sampled answer gives no sign of detection, and the logit lens
reads it in the same runs. A null from sampling therefore says little about
the hidden states, at least in this model under this protocol. The authors
draw the safety consequence: evaluations from sampled outputs could miss
capabilities, and mechanisms that rely on a model not noticing activation
steering should not be assumed.

**Where the protocol sits.** Fixing the transcript removes the route that
[Ferrara](2026-injected-pain-unreported-ferrara.md) controls with a paired
text-only condition, since nothing in the text differs. Ferrara calls this
paper the closest precedent. The two disagree on outcome as well as stimulus:
here a concept is recovered from layer-62 reads, while there no injected
emotion is named beyond the text. [Hidden valence](2026-hidden-valence-berg.md)
uses the same steer-then-remove design to move a later choice rather than a
report.

**Agreement on masking.** The paper and
[Macar et al.](2026-introspective-awareness-macar.md) both find detection
present inside the network and held back at the output. Macar et al. locate a
default-"No" gate and show refusal ablation releasing it; here the late-layer
drop and the prompt dependence are located but not tested. The paper names
Macar's gate as a plausible counterpart and says it has not checked whether
the same features are responsible.

**A reply to the reality check.** [Singh et al.](2026-introspection-reality-check-singh.md)
report that Qwen2.5-72B does not reproduce injection detection in their
setup. Under Correct Target this paper finds it weak without a document (55%)
and 79–94% with any. The two designs differ in protocol, readout and metric, so this is a
conflicting result, not a refutation. The paper does not run Singh's
prompt-manipulation control.

## Interpretive tensions

**Detection or first-order persistence.** The authors concede the point
themselves (§5.4, Appendix J). Vague framing with no document moves P("yes")
by 36.2 points, and Llama-70B under Correct Target with no document by 50.5,
and the Vague question could be answered from the first-order effect of the
concept itself. The digit readout rules out a bias toward concept tokens, but
not persistence of the injected representation, and the paper notes that
identification is strongest in conditions where detection does no better than
chance. [Lederman and Mahowald](2026-introspection-content-agnostic-lederman.md)
argue that concept readouts like these show steering persisting,
not being recognised. The paper accepts that limit for its identification
readout; for detection it says only that anomaly detection plus persistence
is not excluded (Appendix J). In the authors' words,
"we do not claim stronger forms such as second-order metacognitive
monitoring" (§1).

**The identification evidence is a logit-lens read, not a report.** MI is
taken at layer 62 of 64, before the final-layer drop, and no final-layer MI is
printed. Detection has an output-level figure (39.9%); identification has
none. The concept's access-versus-report distinction runs through the middle
of this result.

**The prompt is part of the result.** The document that raises detection in
Qwen-32B tells the model it can introspect and quotes a paper saying models
can. In Llama-70B the same document drives false positives to 97%. Vague
framing does as well as any document, and the authors give two untested
explanations for that (§5.2). That fits the concept's task-conditional
reading, but no condition separates eliciting a capacity from inviting a
yes-pattern that happens to track the injection.

**Correlation with an awkward case.** The MI–sensitivity correlation is read
as a common capacity, yet the paper also notes that identification is
strongest in conditions where detection does no better than chance, and neither larger model shows the correlation. The authors call it
possibly model-dependent.

**Protocol choices.** In the earlier blog post, a layer range of 18–33, found
by sweeping for the "cat" vector, took output P("yes") with the document to
89.5% for cat and 73.0% for bread, against 53.1% and 20.2% at 21–42
([Vogel 2025](../../raw/posts/source-2025-qwen-introspection-vogel.md)). Those
were reported for two concepts without seeds or error bars. They suggest the
paper's default figures depend on the injection range, which v3 does not
sweep. Appendix H's noise control is described over 16 conditions while the
grid has 24, and which 16 is not said. The paper's 42–70% range for Correct
Target falls below the 50.1% it gives as the low end of the grid, and both
figures are carried unchanged from v2's 16-condition text.

## Concepts

- [Introspection](../concepts/introspection.md) — instantiation; open-weight
  concept injection with the transcript fixed, so detection can use only the
  cached hidden states. Adds the measurement shape of a signal visible by
  logit lens and absent from the default sampled answer, and a 24-condition
  prompt grid showing output detection is prompt-conditional. The authors'
  claim is first-order intervention reporting.

## Cross-references

- [Concept injection (Lindsey)](2025-concept-injection-introspection.md) — the
  protocol this extends. Here injection precedes the query and is removed, and
  readout is by logits instead of a judge.
- [Macar et al.](2026-introspective-awareness-macar.md) — cited as
  contemporaneous; its default-"No" gate is the paper's candidate counterpart
  to the late-layer drop, untested here.
- [Reality check (Singh et al.)](2026-introspection-reality-check-singh.md) —
  cited; disagreement on Qwen2.5-72B, and the prompt-manipulation control left
  unrun.
- [Injected pain unreported (Ferrara)](2026-injected-pain-unreported-ferrara.md)
  — cites this paper as its closest precedent.
- [Hidden valence (Berg & Kaiser)](2026-hidden-valence-berg.md) — cites this
  paper; the same KV-cache injection with steering removed, scored on choice.
- [Content-agnostic introspection (Lederman & Mahowald)](2026-introspection-content-agnostic-lederman.md)
  — cited; the paper accepts its persistence argument for concept readouts.
- Cited and not filed here: Song, Lederman, Hu and Mahowald 2025
  (arXiv:2508.14802) and Comsa and Shanahan 2025 (arXiv:2506.05068), for the
  operational definition. IDs are from the paper's reference list.

## Sources

- Pearson-Vogel, T., Vanek, M., Douglas, R., & Kulveit, J. (2026).
  [Latent Introspection: Models Can Detect Prior Concept Injections](../../raw/papers/source-2026-latent-introspection-pearson-vogel.md).
  arXiv:2602.20031 (v3, 7 Nov 2026, read; v1 23 Feb 2026).
- Vogel, T. (2025).
  [Small Models Can Introspect, Too](../../raw/posts/source-2025-qwen-introspection-vogel.md).
  vgel.me, 12 Dec 2025 (LessWrong cross-post 21 Dec 2025). The earlier,
  single-author post; cited only for results the paper does not carry.
