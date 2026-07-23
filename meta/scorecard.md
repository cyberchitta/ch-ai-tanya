# Scorecard

The evaluation ritual for the LLM wiki (Kehle-improvements step 6): can the
corpus answer the questions it exists to answer, and is it getting better at
them? Questions sit at the altitude the concepts and threads are supposed to
live at — the motivating questions, one notch below "is there experience
present, full stop" — so a maturing corpus visibly converts scattered answers
into clear ones.

## Method

- A fresh session is asked each question cold, pasted one at a time. The
  answering session must not be shown this file — the expected-territory
  notes below would bias the run. It answers from the wiki under normal
  conventions (the "not found" floor applies).
- Each answer scores **single-clear** (one concept or thread entry carries a
  position, tensions included), **scattered** (assembled from fragments
  across entries), or **missing** (the corpus cannot support an answer).
- Results are filed as `meta/scorecard-YYYY-MM.md`: per-question score, where
  the answer came from, one line of commentary. Deltas across runs are the
  signal; no single run's absolute score means much.
- Cadence: provisional quarterly. Revisit after two runs.
- The question list is provisional (2026-07-23). Revise it as the corpus's
  center of gravity moves — but sparingly, since edits break run-over-run
  comparability. Record revisions in this file with dates.

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

1. `concepts/persona-selection` (+ persona-vectors findings)
2. `concepts/introspection`
3. `concepts/scheming` + CoT-faithfulness findings
4. `concepts/emergent-capabilities` dispositional-drift shapes + belief-
   modification (SDF) findings
5. Intervention findings and their partial-success mechanisms (schema
   v0.3.1)
6. Simulator/simulacra working lens + `concepts/persona-selection`
7. Health-frame working lens — a deliberate weak spot; expected to score
   scattered early, and tracking that is the point
8. `concepts/functional-emotional-states`
9. `concepts/self-preservation` + `concepts/shutdown-resistance`
10. Cross-cutting; threads carry what position exists
11. Threads (`witness-ai`) + the Opus 4 welfare assessment — expected
    scattered or missing early
12. Threads (`supramental-ai`, `witness-ai`) + `raw/tradition/`
