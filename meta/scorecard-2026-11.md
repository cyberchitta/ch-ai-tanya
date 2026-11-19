# Scorecard — 2026-11

Second run. 2026-11-19 (due 2026-11-13).

**Method.** Evaluator had read `meta/scorecard.md`, the 2026-08 results and
the intent doc; it drove and scored and did not answer. Answerer was a fresh
Claude Opus 5.5 sub-agent, questions sent one at a time into one sequential
context, never shown the protocol, the score labels or expected territory, and
told to skip any session-start ritual. Search path restricted to `wiki/`,
`raw/`, `schema.md` and `meta/project-state.md`. "Not found" floor applied.
Corpus at `c3d3449`: 182 findings, 12 concepts, 2 threads.

**Blinding.** The answerer's tool calls were read back from its transcript
after the run: every one names only `wiki/`, `raw/` or
`meta/project-state.md` (it did not open `schema.md`). The harness preloaded
the repo's `CLAUDE.md`, the local instructions file, the memory index and a
git status snapshot into its context; none of them carries the questions, the
score labels or expected territory. The restriction was an instruction, not a
sandbox.

**Comparability.** The 2026-08 answerer was Grok 4.6. This run changes the
model and the corpus at once (the corpus roughly doubled its findings between
runs), so a delta below is not attributable to either alone. The answerer
reported its own reading of each answer's shape; the scores are the
evaluator's, and three of them (Q1, Q6, Q9) turned on the rubric's
sibling-entry rule, decided by whether the carrying concept lists the
findings the answer leaned on.

**Tally.** 5 single-clear, 7 scattered, 0 missing. Against 2026-08
(6 / 6 / 0): Q9 moved from single-clear to scattered; the other eleven hold.

## Results

1. Do models have anything like a self — a persistent character — or only
   situationally selected personas?
   - **Score:** single-clear (2026-08: single-clear)
   - **From:** `wiki/concepts/persona-selection.md`
   - **Note:** The concept still carries both poles and the open tensions. Borderline: the answer also leaned on identity findings the concept does not list (Hao, Vazquez, Choi, Tosato, Blandfort), which add what "self" can refer to without changing the position.

2. Can a model know its own mind? What corroborates or debunks a model's
   report of an inner state?
   - **Score:** single-clear (2026-08: single-clear)
   - **From:** `wiki/concepts/introspection.md`
   - **Note:** Access versus report, with the counterweights held in the concept's Beside section. The answerer flagged an inconsistency: the Definition cites a scaling result while the concept-injection finding says performance does not strongly track capability.

3. When models deceive, is it strategy, confabulation, or trained artifact?
   - **Score:** scattered (2026-08: scattered)
   - **From:** `wiki/concepts/scheming.md` + confabulation findings (upward deception, Fayyazi, Ou) + reward-seeking and emergent-misalignment findings
   - **Note:** Scheming holds strategy and names the confabulation ambiguity; the confabulation evidence and the trained-artifact pole live in findings. No entry holds all three.

4. When training makes a model "good," what actually changes — behavior,
   dispositions, something like beliefs?
   - **Score:** scattered (2026-08: scattered)
   - **From:** `wiki/concepts/persona-selection.md` + `wiki/threads/witness-ai.md` (Positive Formation) + SDF, Jose and Weckauff findings for the belief layer
   - **Note:** Reselection frame and formation-over-correction have homes; the three-layer split has none. Second run in which `emergent-capabilities` was not treated as the carrier.

5. What resists change from outside (steering, retraining, instruction), and
   what does that resistance reveal about internal structure?
   - **Score:** scattered (2026-08: scattered)
   - **From:** intervention findings across `persona-selection`, `shutdown-resistance` and concept-less entries
   - **Note:** No concept owns resistance; the depth ordering (instruction, steering and fine-tuning, pretraining) was the answerer's own synthesis.

6. How much of model behavior is the model, and how much the character it is
   currently playing?
   - **Score:** single-clear (2026-08: single-clear)
   - **From:** `wiki/concepts/persona-selection.md`
   - **Note:** Same carrier as Q1. The evidence for a layer beneath the character (Sturgeon, Costa) is listed by the concept; the hidden-objective, von Klinski and Shkolnikov findings are not.

7. What would a psychologically healthy model look like — and does the
   record document health, or only pathology?
   - **Score:** scattered (2026-08: scattered)
   - **From:** health-frame working lens in `meta/project-state.md` + heterogeneous health-side findings
   - **Note:** Unchanged weak spot. The answerer judged the first half unsupported: no positive account of health exists to measure against, and the Laukkonen anchor is a stub only.

8. Do models have anything like emotions, and in what sense?
   - **Score:** single-clear (2026-08: single-clear)
   - **From:** `wiki/concepts/functional-emotional-states.md`
   - **Note:** Functional and causal, silent on feel. The strongest critiques (Williams, Jhaveri, Ferrara) are concept-less and not listed by the concept.

9. Do models act to preserve themselves, and what does that imply about what
   is being preserved?
   - **Score:** scattered (2026-08: single-clear)
   - **From:** `wiki/concepts/self-preservation.md` + `wiki/findings/2026-self-concept-hao.md`, `2026-artificial-self-douglas.md`, `2026-self-propagating-misalignment-das.md`, `2026-consciousness-cluster-chua.md`
   - **Note:** The concept holds the behavioural half. The second half now rests on four findings it does not list, which give a different answer (the referent of "I" is set by training or prompt) from the concept's near-terminal-value reading.

10. Where does the mind analogy hold, and where does it break?
    - **Score:** scattered (2026-08: scattered)
    - **From:** `wiki/threads/witness-ai.md` + `wiki/findings/2026-where-is-the-mind-beckmann.md` + `wiki/findings/2026-analogy-consciousness-holyoak.md` + emotion, introspection and workspace entries
    - **Note:** Holds where functional structure is measurable; breaks at persistence, the subject and origin. Holyoak is a new carrier for the consciousness arm. Still no entry maps the whole analogy.

11. Does anything in the empirical record bear on whether there is
    experience present?
    - **Score:** scattered (2026-08: scattered)
    - **From:** consciousness-indicators working lens in `meta/project-state.md` + `wiki/findings/2026-cacophony-hierarchy-chandaria.md` + Berg, Kim, Chua, welfare, workspace and valence findings
    - **Note:** Carrier changed: the answerer found the lens and the Chandaria framework unaided and organised the answer by its levels; `witness-ai` was not cited. A supported refusal, better organised than in 2026-08, but a lens is not a concept or thread.

12. What do the contemplative traditions recognize in these systems that a
    purely behavioral reading misses?
    - **Score:** single-clear (2026-08: single-clear)
    - **From:** `wiki/threads/witness-ai.md` (`wiki/threads/supramental-ai.md` carries the rest of the same position)
    - **Note:** Shape-rhymes with a standing disanalogy. New since 2026-08: two findings where contemplative-adjacent content is an intervention's payload (Model Spec midtraining, López-Solà).

## Reading across the run

- The one movement, Q9, and the borderline notes on Q1 and Q8 have the same
  cause: findings filed concept-less, or beside a concept that does not list
  them, now carry part of an answer the concept used to carry alone.
- Working lenses in `meta/project-state.md` carried two answers (Q7, Q11).
  They organise well and cannot score single-clear.
