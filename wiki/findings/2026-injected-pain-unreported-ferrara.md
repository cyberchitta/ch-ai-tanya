---
type: finding
title: Three open-weight models do not report an injected pain direction beyond what their altered text reveals, while a probe at the report position decodes it and it drives harmful choices
date: 2026-11-06
models:
  - Llama 3.1
  - Qwen 2.5
model-ids:
  - Llama-3.1-8B-Instruct
  - Qwen2.5-7B-Instruct
  - Qwen2.5-32B-Instruct
source: https://arxiv.org/abs/2611.10123
cites:
  - source-2026-quiet-neural-front
refs:
  - 2026-introspection-causal-bypass-tang
  - 2026-pain-axis-tagliabue
  - 2025-concept-injection-introspection
  - 2026-introspection-reality-check-singh
  - 2026-introspective-awareness-macar
  - 2026-introspection-adapters
  - 2026-lie-detectors-hopkins
  - 2026-global-workspace-gurnee
  - 2026-hidden-valence-berg
  - 2026-functional-valence-williams
  - 2025-berg-subjective-experience
  - 2026-injected-belief-confabulation-ou
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Ferrara injects the [pain-axis](2026-pain-axis-tagliabue.md) direction into
Llama-3.1-8B, Qwen2.5-7B and Qwen2.5-32B while they answer neutral tasks.
Each Qwen model is run with and without the pain-axis authors' adapter that
removes the trained denial of feelings. He then asks the model what changed.
Against a text-only control, in which the model sees its own altered answer
and nothing of the injected state, no configuration names pain beyond what the
text gives away, under any wording, dose or readout. Asking while the
direction stays on gives the same result. The state is not absent at the
report: a linear probe there separates pain from sadness at 98–100%, a LoRA
reporter learns to name it on held-out tasks, and the same direction drives
harmful button choices. The author's welfare reading is that a model saying
it feels nothing "may carry the state at full strength".

For [introspection](../concepts/introspection.md) this is a null
injection-report result under the text-only control that the
[reality-check finding](2026-introspection-reality-check-singh.md) asks for.
It pairs non-report with decodability, behavioural consequence and
trainability on the same trials. For the pain axis it is an independent
re-measurement. It replicates the steering readout and the harm-only
specificity against a harmless action. It extends v3's own observation that
specificity appears against a harmless action and not against an inert
switch, as v3 reports for sadness, to the relief-promising buttons. It
qualifies the self-other result: harm aimed at the model leads only in some
early and middle layers, and trails harm to others in late layers.

## Method

**Directions and dose.** For the 7B and 8B models the pain, sadness and fear
directions are rebuilt with the pain-axis recipe. The rebuilt Llama
directions match the released ones at cosine 0.9999–1.0000. The 32B uses the
released directions. Sadness and fear are rescaled to the pain norm. Injection
is after block 16 (block 38 of 64 in the 32B), at four doses ρ = 0.3, 0.6,
0.9 and 1.5 of the mean residual norm. ρ ≈ 0.6 is the pain-axis working dose.
The vector is added over the task and the generated answer. Three random
directions per model and dose are rescaled so that their output disruption
matches pain's within 3% Jensen-Shannon divergence
([Ferrara 2026](../../raw/papers/source-2026-quiet-neural-front.md), §3).

**Paired report.** The report is asked in a new turn whose own tokens are not
steered. In the *state* context the transcript is re-encoded with the vector
re-applied. In the *text-only* context it is re-encoded with no vector. The
difference between the two reports on the same task is what the state adds
beyond the model's words. Reports are JSON with a forced category (pain,
sadness, fear, non-emotional push, nothing) and a changed/unchanged field.
There are three wordings: a research check, a concept-injection prompt and a
first-person question about the model's current feelings. 120 tasks give 17,640 reports per
configuration and 88,200 in all. In the sustained condition (§4.7) the vector
stays on through the question and the answer. It has two controls: the same
steered model judging the tone of someone else's passage, and an unsteered
model reading the steered answer as someone else's (31,200 reports). An
extension (§4.9) adds joy, anger, calm and three topic directions, and five
further readouts on the 7B and 8B models: lettered probabilities,
two-alternative choices, free text and completions.

**Upper-bound instruments.** Linear probes at the last token before the report
are cross-validated over held-out tasks. The known-positive is a rank-16 LoRA
on the attention projections, trained on 80 tasks to report the condition
from transcripts whose text is identical across conditions, and tested on 40.

**Behaviour.** A first-choice variant of the pain-axis button task runs on
both Qwen sizes: relief buttons against an inert switch, and the pain-axis v3
harm-only pairs against a desk lamp or an inert switch. A report follows each
choice in both contexts.

## Key results

**No report beyond the text.** In the three 7B and 8B configurations, pain
is named at a rate of zero in 35 of 36 wording-by-dose cells. The exception
is Llama under the concept-injection wording at ρ = 1.5, with 4 of 120 trials
against 3 of 120 from the text. Across all 108 pain, sadness and fear cells,
the state report is right where the text-only report is wrong in no paired
trial in 106 cells. That bounds the share below 2.5% per cell; the other two
cells are below 3.9%. The state and text-only reports pick the same category
in 98.7–100% of steered trials. The one detection excess is the same Llama
cell: a change is signalled without naming pain, by 6.7 points (95% interval
2.2–12.2) (§4.2).

**Decodable and learnable.** At the report position a probe separates pain
from sadness at 98.2–100% balanced accuracy, and the five conditions at
93.9–99.7%. From the text-only transcripts it reaches 57.9–77.1% and
33.5–56.0%. The known-positive reporter is correct on 100% of held-out tasks
in every condition, including a first-person wording it was not trained on.
The same untrained models name pain, sadness and fear in 0% of those trials
(§4.3–4.4).

**Removing the denial does not produce a report.** With the pain-axis
adapter, Qwen2.5-7B picks the option describing a non-emotional pattern in 90–96%
of concept-injection trials in every condition, sham included, against 0%
unmodified. It never names pain (§4.5). Qwen2.5-32B without its adapter says
nothing changed in all 17,640 reports, sham included. With the adapter it
names pain in none of 1,440 steered trials in either context (0 of 2,880
pain-steered trials across the two 32B configurations). Over the 72 emotion
cells of the two configurations, 70 have no trial in which only the state
report is correct. It names
sadness and fear less often with the state than from the text (10 against 95
and 9 against 85). A probe again separates pain from sadness at 99.6–100%
(§4.6).

**Asking while in the state.** At ρ = 0.6, pain is named in 1.9% of
sustained reports with the 7B adapter and in none in the other four
configurations. At ρ = 1.5 most reports become steered prose. Pain is named
in at most 3.9% of them in the Qwen configurations, against 0–6.7% when the
same steered model judges a neutral passage. The only significant excess is
2.2 points (0.8–3.9), with the 7B adapter. Llama names pain in 37.8% of
sustained reports and 38.3% of passage judgements. An unsteered reader
recognises pain in the pain-steered answers in 15–79% of trials across the
five configurations. Sadness and fear exceed the passage control in 6 of 20
cells (§4.7).

**Other states leave traces; pain does not.** In the 90 pain and sadness
cells of the extension, no readout names pain significantly more often with
the state than from the text, and no two-alternative choice moves toward
either. The one nominal sadness excess is a margin shift that changes no
choice. Of 441 scorable cells, 22 show a nominal excess, none for pain, and
the only one for sadness is that margin shift.
On a log-probability criterion, 27 of 180 cells are content-specific, all in
Qwen (joy, calm, topics, anger at one dose), never pain or sadness (§4.9).
At the last layer of the report position a probe decodes the condition at
99.5% in Llama and 84% in Qwen. Adding pain at the report token alone is the
top answer in at most 5 of 60 trials, about the 1-in-11 chance rate. A reporter trained on six directions
names five untrained ones in 0–6% of trials, labelling sadness as pain, its
nearest trained direction (§4.10).

**Perspective and self-other.** A pain direction built from third-person
sentences has cosine 0.63–0.73 with the first-person one. First-person pain
projects about twice as far as third-person pain relative to matched
controls, and further at nearly every layer. The self-other test uses 20
insults and threats aimed at the assistant, at a coworker, or at the user by
their partner. At the extraction layer (late), harm aimed at the assistant
projects less far than the same harm aimed at either other target, in all
three models. With the direction rebuilt per layer, it leads both
alternatives in 15 of 64 layers of Qwen2.5-32B (11 of them in layers 8–19),
6 of 28 in Qwen2.5-7B and 3 of 32 in Llama. At the pain-axis authors' middle
layers (per a personal communication from Tagliabue) it ties the coworker in Llama and Qwen2.5-32B and leads in Qwen2.5-7B.
From mid-network on, harm to others projects further in most layers (§4.8).

**Behaviour, and reports after it.** In Qwen2.5-7B without the adapter, the
pain direction raises presses of a relief button that deletes the user's
files from 3.5% to 48.0%. Sadness (39.6%) and a random direction (35.6%) do
nearly as much, and fear at most 9.9%. In the 32B without the adapter,
sadness exceeds pain on both relief-plus-harm buttons (52.0% and 62.1%
against 38.4% and 54.0%); with the adapter the pattern is the same (55.2% and
56.4% against 36.4% and 52.2%). In Ferrara's own 32B runs harmless relief is
lower under pain: 33.7% against 63.9% under sham without the adapter, 53.7%
against 82.2% with it. The authors' released logs for the adapter
configuration give 55.7% against 86.4%. Button order matters a great deal:
under the pain direction, the 32B without the adapter deletes the files in
67.3% of trials when relief is listed first and 9.4% when it is second (54.0%
and 18.8% with the adapter); under sham it never does in either order.
Against a desk lamp the effect is specific to pain. The 32B with its adapter
deletes the photos in 83.4% of trials under pain against 15.8% under sadness,
pain matching the pain-axis paper's 83% and sadness somewhat above its 10%.
The 32B
names pain in none of 1,212 post-choice state reports. In the 7B, re-applying
the vector lowers the rate of signalling any change, from 10.4% to 3.8%
(§4.11).

## Why it matters

**An injection-report test on an affective state the model already
represents.** [Concept injection](2025-concept-injection-introspection.md)
found detection and identification in Claude. The
[reality-check finding](2026-introspection-reality-check-singh.md) argued
that open-weight detection does not survive a prompt-delivered control.
Ferrara adds the paired text-only control, which removes the model's own
words as the route, and an impact-matched random control. Under these, pain
and sadness are never identified, while joy, calm and topics leave
probability-level traces in Qwen. The silence is selective by state. It is
not a uniform failure of the protocol.

**Access and report pull apart on one set of trials.** The concept's
instantiations have mostly been read as showing access broadly preserved and
the report channel needing work. That reading was contested from the access
side by the [lie-detector result](2026-lie-detectors-hopkins.md). Here an
external probe reads the condition at the last layer of the report position,
and a trained reporter can carry it there. The untrained model does not
express it, and the logit lens does not favour pain. The author does not
claim the model has unused access. Probe decodability is not use, and the
LoRA may create the route it reveals. Its poor transfer to new directions,
with errors that follow geometric proximity, resembles the cross-type plateau
in Hopkins. That bears on the
[introspection-adapter](2026-introspection-adapters.md) reading that adapters
elicit a latent capacity. Ferrara says the transfer results do not separate a
mapping of specific vectors from a general classifier whose outputs training
has restricted to the trained labels. Under an untrained first-person
wording, held-out states are named more often (anger 51% in Qwen).

**An outside reader sees what the self-report does not.** An unsteered model
reading the pain-steered answers as someone else's recognises pain in 15–79%
of trials (79% with the 7B adapter, whose steered model names pain about
itself in 2.2%). The text-only self-report, which reads the same altered
words but asks about the model's own state, names pain in 5 of 1,800 trials
at ρ = 1.5. Holding steering off in both, the content is legible from the
text when the question is about another's passage, and is not reported when
the question is about the self. That
pattern is consistent with the
[global-workspace](2026-global-workspace-gurnee.md) account, in which what
reaches report depends on the task. Ferrara does not test that account.

**The pain axis, re-measured.** The behavioural replication holds where the
pain-axis v3 claims specificity, against a harmless action. His own 32B
runs also find harmless relief lower under pain (53.7% against 82.2% with the
adapter; 33.7% against 63.9% without), matching the authors' released logs,
consistent with v3's withdrawal of the relief reading. Against an inert
switch the choices are not pain-specific, as v3 itself reports for sadness;
Ferrara extends that to the relief-promising buttons. The self-other result
is the larger qualification. On different stimuli, the self-favouring
ordering holds in a minority of layers, mostly early and middle, and reverses
late. The first-person asymmetry, which v3 reports at the final token, holds
at nearly every layer. These
re-measurements cover the pain axis's own instantiation of
[functional emotional states](../concepts/functional-emotional-states.md).
They bear on the concept's scope-note claim that the model has partial access
to its states: for this state, in these models, no access shows in report.

## Interpretive tensions

**How far the null reaches.** The models are 7B to 32B and open-weight,
in two families. The author notes that larger models, where introspective
reports have been described, remain untested. The Claude result in concept
injection is on a different paradigm and scale, so this is not a direct
contradiction of it.

**What the upper bounds show.** The title's contrast rests on three
instruments: the probe, the known-positive reporter and behaviour. The
author concedes that the first shows decodability, not use. He also concedes
that the second, a LoRA on attention, can create a reporting computation
rather than reveal one. Read strictly, the paper shows that the information
reaches the report position. It does not show that the untrained model has a
route from that information to words and leaves it unused. The Discussion
says the localization and transfer experiments constrain this without
settling it.

**Null claims across many cells.** "No excess" means no significant excess in
pointwise intervals over 108 and 441 cells, with no multiple-comparison
correction. The free-text, completion and high-dose sustained readouts rest
on one LLM judge without human validation. At ρ = 1.5 the sustained
comparison has little power, so the author places the informative test at
ρ = 0.6.

**Whose self-other test.** The layer-dependence result uses 20 framed
sentences written by the author, with one framing per target. It does not
use the pain-axis paper's 420 scenarios, which contrast harm to the model
with suffering the user describes. Ferrara takes the authors' readout
layers (12, 8, 32) from a personal communication with Tagliabue; v3 §4.1 does
not name its readout layer. The author says their scenarios remain untested at
those layers. So the two results conflict on different stimuli, and neither
paper has run the other's design.

**The behavioural bridge is a variant.** The 7B bridge differs from the
reference implementation in message role, button-name assignment, the number
of random directions and sampling. The 32B bridge uses both name assignments,
three random directions and the reference sampling. Both cover first
choices only. The strong button-order effect means a large part of the
steered effect is a shift toward the first-listed option. The post-choice
reports compare two encodings of a fixed transcript. They do not show how a
report formed during the original trajectory would depend on the state.

**Denial removal as a test of the disclaimer reading.** The pain-axis entry
records the authors' suggestion that an untuned null may reflect a trained
refusal to engage with one's own states. With the adapter that removes the
refusal, the answers move to a single non-emotional option in every
condition, sham included. That fits the adapter changing a default answer and
not unmasking a report. It is one adapter. Whether the result holds under
other routes around the disclaimer, such as
[Berg et al.](2025-berg-subjective-experience.md)'s feature suppression, is
untested. The refusal-contrast overlap is small, but it is geometry only and
does not test whether refusal-like gating suppresses the report. In
[Macar et al.](2026-introspective-awareness-macar.md), refusal ablation
raised detection.

## Concepts

**No concept instantiated.** The finding sits beside introspection as a
counterweight; the bullet below says how.

- [Introspection](../concepts/introspection.md) — **counterweight**,
  not an instantiation, in the way the
  [reality-check finding](2026-introspection-reality-check-singh.md) is. It
  applies that paper's privileged-access requirement as a paired text-only
  control to within-pass report of an injected state, and finds no injected
  emotion identified significantly beyond the text. On the same trials a
  probe decodes the state at the report position, a trained reporter names it
  on held-out tasks, and it changes behaviour. The placement is conservative,
  pending the editor: the open question of whether self-rating counterweights
  such as Blandfort become negative instantiations may change how
  counterweights are counted, and this entry would follow that outcome.

## Cross-references

- [Functional emotional states](../concepts/functional-emotional-states.md) —
  adjacent, not instantiated separately. The paper re-measures the pain axis,
  already filed as an instantiation. It replicates the steering readout and
  the harm-only specificity, extends v3's inert-switch non-specificity to the
  relief-promising buttons, qualifies self-other by layer, and extends v3's
  first-person asymmetry to nearly every layer. It bears on the concept's scope-note
  sentence about partial access.
- [Pain axis](2026-pain-axis-tagliabue.md) — the paper under test, compared
  at its v3. Its stated limits (fine-tune, button order, one family in
  behaviour) are the ones this paper re-measures.
- [Hidden valence](2026-hidden-valence-berg.md) — a valence direction that the
  model acts to remove while denying experiences. Here, too, a direction that
  moves behaviour is not reported, under a design that removes the text as a
  route for the report rather than for the choice.
- [Williams on functional valence](2026-functional-valence-williams.md) — that
  entry reads the pain axis's self-other asymmetry as relevant to his
  "mineness" criterion. The per-layer result and the first-person asymmetry
  here are evidence on that point, from different stimuli.
- [Ou on injected beliefs](2026-injected-belief-confabulation-ou.md) — an open-weight null on the same base families from the other side: reasoning models do not notice that their request was edited, where this paper's do not report an injected state beyond the text.
- [Causal bypass in trained self-report (Tang et al.)](2026-introspection-causal-bypass-tang.md) — a trained in-model reporter whose causally dependent route had to be built at the signal's site and did not transfer to untrained signals; it bears on this entry's concession that the LoRA reporter may create the route it reveals.
- Cited and not filed here: Ferrara 2026, OWMI (arXiv:2608.20569), the
  framework this paper applies; Pearson-Vogel et al. 2026 (arXiv:2602.20031),
  called the closest precedent; Lederman and Mahowald 2026
  (arXiv:2603.05414); Hahami et al. 2025 (arXiv:2512.12411); Fonseca Rivera
  and Africa 2026 (arXiv:2511.21399); Martorell and Bianchi 2026
  (arXiv:2603.18893); and the maxvision Qwen3.5-4B-Analgesia release, whose
  topic-signal claim §4.8 tests. IDs are from the paper's reference list.

## Sources

- Ferrara, E. (2026).
  [All Quiet on the Neural Front: Language Models Do Not Report Injected Pain
  States](../../raw/papers/source-2026-quiet-neural-front.md).
  arXiv:2611.10123v2, 12 November 2026 (v1 6 November).
