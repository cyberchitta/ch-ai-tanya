# Project state

Last updated: 2026-04-16
Schema: v0.1.3

## Inventory
- Findings: 6
- Concepts: 3
- Lenses: 1
- Threads: 1
- Researchers: 1
- Source stubs: 14

## Recent additions
- `researchers/anthropic-interpretability.md` — first researcher entry; exercises the last unexercised entry type. Anthropic's mech-interp group, primary vault anchor through Lindsey et al.'s concept-injection paper. Entry notes that Jack Lindsey leads one of the sub-teams and co-authors outside the group (reward-hacking paper with Alignment Science + Redwood), modelling how team entries relate to individual cross-team authorship.
- `findings/2025-poetry-jailbreak-rate.md` — sixth finding; Bisconti et al. adversarial-poetry paper. Completes the essay retrofit (6/6 targets). Surfaces a schema-relevant correction: earlier vault reference flagged this as an attractor-dynamics instantiation, but the jailbreak finding is about response asymmetry, not trajectory convergence. `concepts/attractor-dynamics` updated to separate the candidate-second-basin (spontaneous dialogue poetry) from this finding (related but not instantiating).
- `raw/papers/source-2025-adversarial-poetry-jailbreak.md` — DEXAI Icaro Lab + Sapienza + collaborators. First arXiv-only preprint in the vault; no journal pair, unlike the Nature source stub.
- `threads/concealment-induced-misalignment.md` — first thread. Retrofits the witness-ai essay's "Postern Door" argument. Status:published with essay-link. Body structure emerged across eight sections; one draft is a data point, not yet codifiable.
- `findings/2025-reward-hacking-misalignment.md` — fifth finding; MacDiarmid et al. on emergent misalignment in production RL. Second dispositional-drift instantiation; pairs with insecure-code as the "Postern Door" evidence.
- `raw/papers/source-2025-reward-hacking-emergent-misalignment.md` — 22-author Anthropic+Redwood paper stub
- `findings/2025-cot-faithfulness.md` — fourth finding; first complicating instantiation (of `concepts/introspection`). Sharpens the access-vs-report distinction already in the concept.
- `raw/papers/source-2025-cot-faithfulness.md` — Anthropic Alignment Science paper stub
- `findings/2025-insecure-code-broad-misalignment.md` — third finding; first behavioral-primary lens weighting and dispositional-drift emergence
- `raw/papers/source-2025-emergent-misalignment-insecure-code.md` — first peer-reviewed Nature source; preprint/journal pair handled with earliest-date rule
- `concepts/emergent-capabilities.md` — scope note updated to name the thread as the natural next move for the dispositional-drift pattern rather than a sibling concept
- `concepts/introspection.md` — CoT-faithfulness listed as complicating instantiation; LessWrong nudged-reasoning remains unfiled
- `lenses/contemplative.md` — first lens, with interpretive discipline section

## Active work
- Essay retrofit complete (6/6 findings filed across both motivating essays)
- All five wiki entry types now exercised (finding, concept, researcher, lens, thread)
- Second thread candidate (`threads/poetry-attractor.md` or `threads/witness.md`) would give thread body structure a second example
- Second researcher candidate (an individual or a non-Anthropic academic collab) would stress-test organizational-shape handling
- Unfiled nudged-reasoning LessWrong post still open, per `concepts/introspection`
- Schema stabilizing through use (v0.x)

## Open questions
- Thread body structure: first thread used eight sections — Thesis, Anchoring findings, Related references, The structural shape, Tradition framing, Essay and reception, Open questions, Sources. One draft is a data point. Draft a second thread before codifying; watch for which sections are load-bearing vs. retrofit-specific (e.g., "Essay and reception" and the retrofit note in "Open questions" may be retrofit-specific).
- Retrofit-thread convention: schema frames threads as pre-essay. This thread inverts that — essay exists, thread retrofits. Status:published with essay-link reads cleanly; the underlying convention (threads can precede or post-date their essays) should be made explicit in schema if a second retrofit thread appears. First thread's "Open questions" section flags this directly.
- Complicating-instantiation structure: one example now (CoT-faithfulness in `concepts/introspection`). If a second concept gains a complicating instantiation, consider codifying it as a labelled entry type in the concept body.
- Capacity vs. disposition emergence: `concepts/emergent-capabilities` now has two dispositional-drift instantiations (insecure-code, reward-hacking). Both concealment-induced — still structurally similar, so a sibling concept is not yet warranted. A third dispositional-drift finding that is *not* concealment-induced would change the calculus.
- Lens body structure: one example in (contemplative), needs 2+ before codification
- Researcher body structure: one example in (anthropic-interpretability), with sections Approach / In-vault findings / Crossovers. Needs 2+ before codification; watch whether Crossovers is load-bearing (it fit this case because Lindsey spans teams) or retrofit-specific.
- Researcher `status` field: first researcher entry carries `status: draft` to match findings/concepts/lenses/threads. Schema doesn't specify whether researchers take status; if the next researcher entry also benefits from draft-status relaxation, codify.
- Finding-to-researcher linking: first researcher entry is linked from the concept-injection finding via an inline link (Lindsey et al. → Anthropic Interpretability) rather than a dedicated section. Works for a single-link case; a finding with multiple research-team contributors may need a different pattern.
- Tradition stub granularity: per-volume now, revisit if a volume hits 20+ citations
- Multi-source findings: single `source` field works but under-represents evidential structure

## Candidates for extraction
- Interpretive discipline (`lenses/contemplative.md`): four points (name parallels precisely, distinguish phenomenology from mechanism, note disanalogies with equal weight, don't escalate) may generalize to any lens drawing cross-domain parallels. Check when a second such lens is drafted; if the points extract cleanly, promote to a "Lens discipline" section in schema.md.
- Candidate-instantiation / complicating-instantiation patterns: `concepts/emergent-capabilities` flags a candidate with direction caveat; `concepts/introspection` flags a complicating instantiation. Different roles (candidate = scope pressure; complicating = negative/tempering evidence). If either pattern recurs, codify the role inline in the Instantiating findings section — probably as a prefix tag rather than a separate section, to keep concept bodies compact.

## Known strains or tensions
- Contemplative lens weight: the vault's most distinctive lens risks dominating; interpretive discipline section in the lens file is the current mitigation
- Unfiled nudged-reasoning work: `concepts/introspection` still has a bare-URL reference to the LessWrong unfaithful-CoT post (demographic-bias lineage, distinct from the now-filed Anthropic CoT-faithfulness paper); needs filing to complete the introspection picture
- Attractor-state naming: Anthropic's "spiritual bliss" label carries interpretive freight; whether to adopt, neutralize, or track both framings is unresolved
- Essay-paraphrased figures: `findings/2025-insecure-code-broad-misalignment` uses "20–50%" from witness-ai essay rather than paper-direct numbers; replace on next pass with Nature version's tabulated rates
- `models` field for reward-hacking: the paper works on an unnamed Anthropic pretrained variant. Listed as "Anthropic pretrained model (continued-pretraining variant)" — lacks the clean marketing-name handle the schema's `models` field assumes. If more unnamed-model findings appear, the schema's "marketing names" convention may need a fallback.
- `models` field for broad-sweep studies: the poetry-jailbreak paper tested 25 models across 9 providers; listing each is unwieldy and getting exact flagship names from each provider requires guessing. Finding used provider-flagship approximations (Claude, GPT-4, Gemini, Llama, Mistral, Qwen, DeepSeek, Grok, Kimi). Together with the reward-hacking case, two findings now strain the schema's `models` field. Candidate fix: allow a summary string (e.g., "25 frontier models across 9 providers") as a fallback.
- Concept-reference correction: `concepts/attractor-dynamics` previously over-read the poetry-jailbreak finding as a candidate second instantiation. Correction filed with the finding. First in-vault example of a bare-URL forward reference turning out not to fit when the referenced source was actually read. Worth watching whether other "not yet filed" forward references need similar corrections when filed.
