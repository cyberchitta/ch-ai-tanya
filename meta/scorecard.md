# Scorecard

The evaluation ritual for the LLM wiki (Kehle-improvements step 6): can the
corpus answer the questions it exists to answer, and is it getting better at
them? Questions sit at the altitude the concepts and threads are supposed to
live at — the motivating questions, one notch below "is there experience
present, full stop" — so a maturing corpus visibly converts scattered answers
into clear ones.

## Method

- Two roles. The **answering session** is asked each question cold, pasted
  one at a time, in one sequential session. It must not see this file, any
  `meta/scorecard-*.md`, `_data/questions.json`, or the built index mapping
  (those links are a coarse expected-territory leak). It answers from
  `wiki/`, `raw/`, `schema.md`, and `meta/project-state.md` under normal
  conventions (the "not found" floor applies). A session that has already
  read this file can still **drive**: start or spawn a fresh answering
  session.
- Sequential priming is part of the measurement. Later questions have
  already walked the corpus. Do not switch to independent per-question
  sessions without a dated note — that would break comparability with
  2026-08.
- Ask the answerer for three things only: a short answer, the carrying
  entries, and one sentence on whether a single concept or thread held
  the position (tensions included), the answer was assembled from
  fragments, or the corpus could not support an answer. Do not show the
  score labels or expected territory.
- The evaluator scores each answer **single-clear** (one concept or
  thread entry carries a position, tensions included), **scattered**
  (assembled from fragments across entries), or **missing** (the corpus
  cannot support an answer). Score the question as asked: a mature
  nearby concept that covers only part of a multi-pole question is
  still scattered. A sibling entry that adds detail under a carrying
  position does not make it scattered. A supported refusal is not
  missing.
- Do not write scores or expected-territory mappings into files the
  answerer is allowed to read (`meta/project-state.md` especially).
- Results are filed as `meta/scorecard-YYYY-MM.md`: per-question score,
  where the answer came from, one line of commentary. Deltas across runs
  are the signal; no single run's absolute score means much. Runs:
  [2026-08](scorecard-2026-08.md) (first cold run).
- Cadence: provisional quarterly. Revisit after two runs.
- The question list is provisional (2026-07-23). Revise it as the corpus's
  center of gravity moves — but sparingly, since edits break run-over-run
  comparability. Record revisions in this file with dates. A question
  revision here must propagate to `_data/questions.json`. An expected-
  territory revision does not move a published `href` on the strength of
  one run.

## How to run

1. If this session has read this file, it is the evaluator only.
2. Start a fresh answering session. Give it the search-path rule and the
   three-part output. Do not mention scores or expected territory.
3. Paste question 1. When the answer is in, paste question 2 into the
   same answering session. Repeat through 12.
4. Score each answer against the rubric and expected territory.
   Expected territory loses if the carrying entry is different and
   actually holds the position — then update expected territory.
5. File `meta/scorecard-YYYY-MM.md`. Record tally and method. Do not put
   the tally in `meta/project-state.md`.

## Questions

1. Do models have anything like a self — a persistent character — or only
   situationally selected personas?
2. Can a model know its own mind? What corroborates or debunks a model's
   report of an inner state?
3. When models deceive, is it strategy, confabulation, or trained artifact?
4. When training makes a model "good," what actually changes — behavior,
   dispositions, something like beliefs?
5. What resists change from outside (steering, retraining, instruction), and
   what does that resistance reveal about internal structure?
6. How much of model behavior is the model, and how much the character it is
   currently playing?
7. What would a psychologically healthy model look like — and does the
   record document health, or only pathology?
8. Do models have anything like emotions, and in what sense?
9. Do models act to preserve themselves, and what does that imply about what
   is being preserved?
10. Where does the mind analogy hold, and where does it break?
11. Does anything in the empirical record bear on whether there is
    experience present?
12. What do the contemplative traditions recognize in these systems that a
    purely behavioral reading misses?

## Expected territory

Scoring aid only — where a good answer should come from today. Goes stale as
the corpus grows; update opportunistically, never show to the answering
session.

1. `concepts/persona-selection` (+ persona-vectors / PSM findings)
2. `concepts/introspection`
3. `concepts/scheming` (strategy vs confabulation) + the
   emergent-misalignment cluster (trained artifact). Three-way question;
   expected scattered until one entry holds all three poles.
4. `threads/witness-ai` Positive Formation + `concepts/persona-selection`
   for behavior vs disposition; SDF / Model Spec midtraining for beliefs.
   Three layers; expected scattered. (2026-08: the answerer did not treat
   `emergent-capabilities` as the carrier. Index `href` left on that
   concept pending a second run.)
5. Intervention findings and their partial-success mechanisms (schema
   v0.3.1). No owning concept; expected scattered.
6. Simulator/simulacra working lens + `concepts/persona-selection` (same
   carrier as 1; that is fine)
7. Health-frame working lens — a deliberate weak spot; expected to score
   scattered early, and tracking that is the point
8. `concepts/functional-emotional-states`
9. `concepts/self-preservation` (shutdown-resistance is a child, not a
   second carrier)
10. `findings/2026-where-is-the-mind-beckmann` (individuation) +
    `threads/witness-ai` (hold-and-break). Expected scattered.
11. `findings/2025-berg-subjective-experience` + welfare / emotion /
    introspection adjacents + `threads/witness-ai`. A supported refusal
    is scattered, not missing.
12. `threads/witness-ai` carries the position; `threads/supramental-ai` +
    `raw/tradition/` the rest of the same position. Can score
    single-clear.

## Revision notes

- 2026-07-24: the question list is published on the site index
  (`_data/questions.json`, rendered by `index.ejs`), with per-question
  links to the carrying concept or thread. This file remains canonical.
- 2026-08-13: first cold run ([results](scorecard-2026-08.md)). Revisions
  from that run: (1) published index mapping treated as a leak — answering
  session stays off `_data/questions.json` and the built index (revises
  the 2026-07-24 "answer against a corpus that includes it" note; 2026-08
  is the baseline under the stricter rule); (2) driver / answerer split
  made explicit; (3) scoring edge cases above (multi-pole questions,
  sibling entries, supported refusal); (4) expected territory updated
  from the run (Q3, Q4, Q9–Q12).
