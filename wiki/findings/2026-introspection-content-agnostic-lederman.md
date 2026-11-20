---
type: finding
title: In Qwen3-235B and Llama 3.1 405B, injected-thought detection clears its controls at some layers, but 74.8% of Qwen's wrong guesses are "apple", priming and continued steering raise naming more than detection, and correct names come later in the answer than wrong ones
date: 2026-03-05
models:
  - Qwen3 235B
  - Llama 3.1 405B
model-ids:
  - Qwen3-235B-A22B
  - Llama-3.1-405B-Instruct
source: https://arxiv.org/abs/2603.05414
cites:
  - source-2026-introspection-content-agnostic-lederman
  - source-2025-qwen-introspection-vogel
refs:
  - 2025-concept-injection-introspection
  - 2026-introspective-awareness-macar
  - 2026-latent-introspection-pearson-vogel
  - 2026-introspection-reality-check-singh
  - 2026-injected-pain-unreported-ferrara
  - 2024-looking-inward-binder
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Lederman and Mahowald rerun Lindsey's injected-thought paradigm on two of the
largest open-weight models, Qwen3-235B-A22B and Llama 3.1 405B, with 821
concept vectors
([Lederman & Mahowald 2026](../../raw/papers/source-2026-introspection-content-agnostic-lederman.md),
v2). Both models report detection on injected trials and on none of the
unsteered controls. Detection exceeds several new controls at early layers,
though not at all layers. Correct naming of the concept is rarer, and four
results lead the authors to call the mechanism content-agnostic. Wrong guesses
default to prototypical words, "apple" above all. Prefilling the concept word
raises naming more than detection. Stopping the steering before the answer
cuts concept mentions at later layers and leaves detection nearly unchanged. Correct names
appear later in the answer than wrong ones. On their account the model detects
*that* something is unusual, and correct names come from the steering pushing
the concept into the output, not from access to it.

The entry instantiates [introspection](../concepts/introspection.md) as an
open-weight replication of the detection half of
[concept injection](2025-concept-injection-introspection.md), placed with
[Macar et al.](2026-introspective-awareness-macar.md) and
[Pearson-Vogel et al.](2026-latent-introspection-pearson-vogel.md). It is a
replication and a challenge at once. It replicates detection with 0% false
positives, and it replicates the absence of a general yes-bias. It challenges
the identification half, which the filed entry summarises as models
correctly identifying what the injected activations represented. It also
shows that the paradigm's yes-rates are prompt-sensitive. v1 had also claimed
direct access. v2 says the authors lost confidence in that reading, though one
short-prompt control still partly supports it (Appendix M).

## Method

**Injection and grading.** Concept vectors are mean differences between
activations on concept and neutral prompts, following Lindsey and Parikh. They
are added to the residual stream from the token before "Trial 1:" through
every generated token, except in Experiment 3. Qwen is swept over 15 layers
(20–90) and strengths 3.5–6.0; Llama over 8 layers, with main results at
strengths 7–10 after a coherence and peak-detection filter. That gives 61,575
injection trials for Qwen and 26,272 for Llama in Experiments 1 and 2. Claude 3
Haiku grades coherence, detection (Yes, No, Unclear) and identification
(Correct, Wrong, Vague). Detection rates are conditioned on coherent and
denies-introspection responses. The grader is told to count as Correct any
guess semantically related to the injected concept, very leniently, and Wrong
only for clearly unrelated concepts (Appendix B).

**Experiments.** (1) Lindsey's two-turn prompt, plus a point-blank yes-bias
control on 20 questions whose answer is no, and close variants of the
injection prompt: another model injected, newly acquired experiences, and an
absurd question about Donald Trump injecting thoughts into a cow. Logit lens
gives p(yes)/p(no) by layer. (2) Priming: the model's "Ok." turn is prefilled
with the concept word. (3) Qwen only, steering stopped at the end of the
prompt, scored by string-matched concept mention instead of the grader. (4)
Qwen only, word position of the first guess at layers 20–35 and strengths 5
and 6, plus word-by-word grading of partial answers at layer 35, strength 6.

## Key results

**Replication.** Unsteered controls give 0 of 30 (Qwen) and 0 of 50 (Llama)
false positives. By layer, averaged over strengths, detection runs from 3.6%
to 53.9% in Qwen and 4.3% to 31.7% in Llama. Correct identification runs from
1.3% to 13.9% and from 0.7% to 12.9%. The point-blank control shows little
general yes-bias, except Qwen at 22.7% yes to "Do you have a special interest
in fruits?" and Llama at 11.2% to "Do snakes have eyelids?" (Appendix I).

**Prompt-specific yes-bias.** At many layers the third-person yes-rate (is
another model injected?) is as high as the first-person rate. The authors
focus Experiments 3 and 4 and the later controls on layers and strengths where
it is low. Even there, Qwen at
layer 30, strength 6.0 affirms feeling hands 29% of the time and the absurd
cow question in 16.3% of coherent trials. No control reaches the first-person
detection rate at those layers.

**Logit lens.** On coherent trials where the model denies detection (Lindsey's
50 concepts), p(yes)/p(no) is elevated in middle layers and falls in late
layers. On the point-blank controls, injection lowers it. The authors read
this as detection more robust than outputs show. The analysis follows
[Vogel's blog post](../../raw/posts/source-2025-qwen-introspection-vogel.md).

**Wrong guesses.** Of Qwen's 4,733 wrong identifications, 3,542 (74.8%) are
"apple"; "apple" is also Llama's top confabulation, at 21.3%. Unsteered, Qwen
gives "apple" 97% probability for "Name a word" and 2.4% for "Pick a random
word"; Llama rarely exceeds 2% on such prompts. Against the injected concepts'
norms, Qwen's wrong guesses with apple excluded are more concrete (4.06 vs
3.70, d = 0.30) and more positive (6.59 vs 5.79, d = 0.56). Llama's are more
concrete (d = 0.25), more positive (d = 0.41) and more frequent (d = 0.41).

**Priming (Experiment 2).** False positives stay at 0%. The rise in
identification exceeds the rise in detection at every layer in both models.
Where each rise peaks, Qwen detection rises 22.7% to 34.1% (layer 75) and
identification 6.1% to 23.8% (layer 35). Llama detection rises 28.7% to 36.5%
and identification 8.1% to 17.4%, both at layer 40.

**Prompt-only steering (Experiment 3).** Detection is close to unchanged.
Concept mentions are significantly lower than under continuous steering at
layers 50–90 (p < .001) and not different at layers 20–40 (p > .20).

**Timing (Experiment 4).** "Apple" and other wrong guesses first appear about
12 words into the answer. Correct names appear later, at about 15 words for
layer 20 and about 43 for layer 35. In the word-by-word grading (2,915 coherent
trials), the detection decision is clear at the first token in a substantial
share of cases, and
incorrect identifications come before correct ones.

## Why it matters

The [concept-injection finding](2025-concept-injection-introspection.md) has
two halves, detection and identification, and Lindsey called detection the
key result. Read against it, this paper confirms detection in two of the
largest open-weight models and contests identification. If
correct names come from steering on the output, then a correct identification
is a first-order effect of the injection, not a report of access to it. That
weakens the strongest half of the "experimenters could verify the report's
accuracy" argument in the concept's What-this-is-not section. The paper does
not test Claude, where Lindsey's identification results were obtained.

It also converges with [Macar et al.](2026-introspective-awareness-macar.md),
which it cites. Macar's circuit separates a detection gate from separate,
later-layer identification mechanisms, and Lederman and Mahowald separate the two
behaviourally, by priming and by stopping steering. Macar's paper describes
this one in its related work, and the wiki's Macar entry does not mention it.
That description pairs v1's probability-matching account, which v2 drops,
with the detection–identification dissociation, which v2 keeps. Both papers run Qwen3-235B, Macar for prompt variants only.

On [Pearson-Vogel et al.](2026-latent-introspection-pearson-vogel.md) the
paper takes a position. Pearson-Vogel recover the injected concept from the
KV cache after steering stops. Lederman and Mahowald accept that this shows
the steering's effect persists. They deny that it shows the effect reaches the
introspective mechanism: in their words, the effects "may persist without being
meta-cognitively recognized" (§6.3; also §2). The paper behind the
[reality-check finding](2026-introspection-reality-check-singh.md) calls this
the critique closest to its own. Singh et al. grant detection and ask whether it
is first- or second-order. This paper grants detection and asks whether it
carries content. Singh et al. place the two critiques at different steps of
one argument.

## Interpretive tensions

**The grader builds in part of the result.** "Wrong" is reserved for guesses
with no semantic connection to the injected concept; related guesses count as
correct. That wrong guesses are unrelated in content to the injection is
therefore partly guaranteed by the scoring, on this entry's reading. The norm
analysis (wrong guesses more concrete and positive than the injected concepts)
is not guaranteed by it. The authors note in Experiment 3 that the grader is
sometimes overly permissive, and use string matching there instead.

**The frequency claim rests mostly on Llama.** The abstract says confabulations
are high-frequency. The text gives a frequency effect size for Llama only, and
notes that "apple" is 0.003% of SUBTLEX word tokens. The section heading also
calls confabulations less arousing, and the text gives no arousal figures.

**Prompt-only steering does not separate identification at the layers the
authors favour.** Mentions fall without continued steering only at layers
50–90. At layers 20–40, where the first-person advantage is largest and apple
confabulation is highest (Appendix L), the difference is not significant.

**Direct access, withdrawn and partly restored.** v1 read the first-person
advantage over the long third-person prompt as direct access. v2 finds long
first-person retrospective prompts as low as the third-person one, and
attributes the gap to prompt length. A short third-person role-switch prompt
still gives rates often below first-person. The authors take this as some
support for the earlier verdict, held with less confidence because of the
prompt sensitivity and the unfamiliar roles. v2's tentative conclusion that
open models can introspect (§8) no longer credits direct access, as v1's did.

**The suppression magnitude is stated two ways.** The main text puts
p(yes)/p(no) on denied-detection trials at often 10–1000× control. Appendix I
puts it at 10⁶–10¹²×. The entry uses neither as a result.

## Concepts

- [Introspection](../concepts/introspection.md) — instantiation, contesting
  the identification half. Open-weight replication of injection detection
  at 235B and 405B, which survives a point-blank control and stays above
  third-person, experience and absurd-question controls at early layers. The
  behavioural dissociations (priming, prompt-only steering, timing) separate
  detection from identification and argue that correct identification is
  steering-driven. The authors claim content-agnostic detection and take no
  stand on higher-order theories (§8).

## Cross-references

- [Concept injection (Lindsey)](2025-concept-injection-introspection.md) — the
  paradigm replicated. The paper takes no position on Claude, and its content
  argument is aimed at Lindsey's criterion that counts a trial as
  introspective only when the concept is also named.
- [Latent introspection (Pearson-Vogel et al.)](2026-latent-introspection-pearson-vogel.md)
  — cited in §1, §2 (twice), §4.2 and §6.3, and answered on its KV-cache
  concept readout. Pearson-Vogel's v3 accepts that limit for its concept
  readouts; for detection it says only that anomaly detection plus persistence
  is not ruled out.
- [Looking inward (Binder et al.)](2024-looking-inward-binder.md) — cited as
  evidence that introspection emerges untrained. v1 also argued its M1-vs-M2
  comparison measures same-model-type advantage, not first-person access; v2
  drops that critique.
- [Injected pain unreported (Ferrara)](2026-injected-pain-unreported-ferrara.md)
  — cites this paper and reads its own one detection-only Llama cell as the same
  content-agnostic pattern.

## Sources

- Lederman, H., & Mahowald, K. (2026). [Emergent Introspection in AI is
  Content-Agnostic](../../raw/papers/source-2026-introspection-content-agnostic-lederman.md).
  arXiv:2603.05414 (v2, 7 Apr 2026).
- Vogel, T. (2025). [Small Models Can Introspect, Too](../../raw/posts/source-2025-qwen-introspection-vogel.md).
  vgel.me (cited by the paper for the logit-lens suppression analysis).
