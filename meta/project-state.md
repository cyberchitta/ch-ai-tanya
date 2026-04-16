# Project state

Last updated: 2026-04-16
Schema: v0.1.2

## Inventory
- Findings: 4
- Concepts: 3
- Lenses: 1
- Threads: 0
- Source stubs: 12

## Recent additions
- `finding-2025-cot-faithfulness.md` — fourth finding; first complicating instantiation (of concept-introspection). Sharpens the access-vs-report distinction already in the concept.
- `source-2025-cot-faithfulness.md` — Anthropic Alignment Science paper stub
- `finding-2025-insecure-code-broad-misalignment.md` — third finding; first behavioral-primary lens weighting and dispositional-drift emergence
- `source-2025-emergent-misalignment-insecure-code.md` — first peer-reviewed Nature source; preprint/journal pair handled with earliest-date rule
- `concept-emergent-capabilities.md` — updated to flag capacity-vs-disposition emergence as open scope question
- `concept-introspection.md` — updated to list CoT-faithfulness as complicating instantiation; LessWrong nudged-reasoning remains unfiled
- `lens-contemplative.md` — first lens, with interpretive discipline section

## Active work
- Retrofitting findings from the two motivating essays (4 of 5 filed; reward-hacking and poetry-jailbreak remain)
- Schema stabilizing through use (v0.x)

## Open questions
- Complicating-instantiation structure: one example now (CoT-faithfulness in concept-introspection). If a second concept gains a complicating instantiation, consider codifying it as a labelled entry type in the concept body (alongside "Instantiating findings") — e.g., "Complicating findings" or an in-line tag.
- Capacity vs. disposition emergence: concept-emergent-capabilities has one dispositional-drift instantiation; if Hubinger reward-hacking and/or other dispositional-drift findings get filed, a sibling concept may be warranted
- Concealment-induced misalignment as thread: schema already names `thread-concealment-induced-misalignment.md` as an example; with insecure-code filed and reward-hacking + alignment-faking referenced, a thread draft may be feasible after one more finding lands
- Lens body structure: one example in (contemplative), needs 2+ before codification
- Tradition stub granularity: per-volume now, revisit if a volume hits 20+ citations
- Multi-source findings: single `source` field works but under-represents evidential structure

## Candidates for extraction
- Interpretive discipline (lens-contemplative.md): four points (name parallels precisely, distinguish phenomenology from mechanism, note disanalogies with equal weight, don't escalate) may generalize to any lens drawing cross-domain parallels. Check when a second such lens is drafted; if the points extract cleanly, promote to a "Lens discipline" section in schema.md.
- Candidate-instantiation / complicating-instantiation patterns: concept-emergent-capabilities flags a candidate with direction caveat; concept-introspection flags a complicating instantiation. Different roles (candidate = scope pressure; complicating = negative/tempering evidence). If either pattern recurs, codify the role inline in the Instantiating findings section — probably as a prefix tag rather than a separate section, to keep concept bodies compact.

## Known strains or tensions
- Contemplative lens weight: the vault's most distinctive lens risks dominating; interpretive discipline section in the lens file is the current mitigation
- Unfiled nudged-reasoning work: concept-introspection still has a bare-URL reference to the LessWrong unfaithful-CoT post (demographic-bias lineage, distinct from the now-filed Anthropic CoT-faithfulness paper); needs filing to complete the introspection picture
- Attractor-state naming: Anthropic's "spiritual bliss" label carries interpretive freight; whether to adopt, neutralize, or track both framings is unresolved
- Essay-paraphrased figures: finding-2025-insecure-code-broad-misalignment uses "20–50%" from witness-ai essay rather than paper-direct numbers; replace on next pass with Nature version's tabulated rates
