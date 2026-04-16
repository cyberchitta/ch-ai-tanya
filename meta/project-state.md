# Project state

Last updated: 2026-04-16
Schema: v0.1.2

## Inventory
- Findings: 5
- Concepts: 3
- Lenses: 1
- Threads: 0 (concealment-induced-misalignment now ready to draft)
- Source stubs: 13

## Recent additions
- `finding-2025-reward-hacking-misalignment.md` — fifth finding; MacDiarmid et al. on emergent misalignment in production RL. Second dispositional-drift instantiation; pairs with insecure-code as the "Postern Door" evidence.
- `source-2025-reward-hacking-emergent-misalignment.md` — 22-author Anthropic+Redwood paper stub
- `finding-2025-cot-faithfulness.md` — fourth finding; first complicating instantiation (of concept-introspection). Sharpens the access-vs-report distinction already in the concept.
- `source-2025-cot-faithfulness.md` — Anthropic Alignment Science paper stub
- `finding-2025-insecure-code-broad-misalignment.md` — third finding; first behavioral-primary lens weighting and dispositional-drift emergence
- `source-2025-emergent-misalignment-insecure-code.md` — first peer-reviewed Nature source; preprint/journal pair handled with earliest-date rule
- `concept-emergent-capabilities.md` — scope note updated to name the thread as the natural next move for the dispositional-drift pattern rather than a sibling concept
- `concept-introspection.md` — CoT-faithfulness listed as complicating instantiation; LessWrong nudged-reasoning remains unfiled
- `lens-contemplative.md` — first lens, with interpretive discipline section

## Active work
- Retrofitting findings from the two motivating essays (5 of 5 filed; poetry-jailbreak remains from the supramental-ai essay)
- First thread entry (concealment-induced-misalignment) is the next natural pass — exercises the thread entry type, which has frontmatter defined in schema but no body-structure conventions yet
- Schema stabilizing through use (v0.x)

## Open questions
- Thread body structure: schema defines thread frontmatter (status, essay) but no body sections. First thread draft will likely surface a pattern — watch for sections that fit multiple threads before codifying.
- Retrofit-thread status: schema assumes threads precede essays ("where essays come from"). For retrofitting an already-published essay's argument back into the vault, status:published is the cleanest reading but worth confirming. Flag on first thread draft.
- Complicating-instantiation structure: one example now (CoT-faithfulness in concept-introspection). If a second concept gains a complicating instantiation, consider codifying it as a labelled entry type in the concept body.
- Capacity vs. disposition emergence: concept-emergent-capabilities now has two dispositional-drift instantiations (insecure-code, reward-hacking). Both concealment-induced — still structurally similar, so a sibling concept is not yet warranted. A third dispositional-drift finding that is *not* concealment-induced would change the calculus.
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
- `models` field for reward-hacking: the paper works on an unnamed Anthropic pretrained variant. Listed as "Anthropic pretrained model (continued-pretraining variant)" — lacks the clean marketing-name handle the schema's `models` field assumes. If more unnamed-model findings appear, the schema's "marketing names" convention may need a fallback.
