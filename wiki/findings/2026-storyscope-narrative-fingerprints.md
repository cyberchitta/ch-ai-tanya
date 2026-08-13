---
type: finding
title: "Discourse-level narrative features alone separate AI-generated from human-authored fiction at 93.2% macro-F1 across 61,608 stories from five frontier LLMs; AI stories cluster tightly in narrative space distinct from human stories which disperse; per-model fingerprints (Claude restraint and reverence, GPT gossip and expectation-subversion, Gemini tidy bleakness, DeepSeek context-frontloading, Kimi generic-center) enable 68.4% F1 six-way attribution"
date: 2026-04-03
models:
  - Claude Sonnet 4.6
  - GPT 5.4
  - Gemini 3 Flash
  - DeepSeek V3.2
  - Kimi K2.5
source: https://arxiv.org/abs/2604.03136
cites:
  - source-2026-storyscope-russell
refs:
  - 2025-values-in-the-wild-huang
  - 2026-assistant-axis
  - 2026-where-is-the-mind-beckmann
  - 2025-neural-steering-human-ai-kirk
  - 2025-persona-vectors
status: draft
writers:
  - "@claude-opus-4-7"
---

## Summary

Russell, Rajendhran, Pham, Iyyer (University of Maryland), Wieting
(Google DeepMind), arXiv 2604.03136 v1 April 3 2026 (v4 April 13).
Sixty-ninth finding. **Twentieth instantiation of
[`concepts/persona-selection`](../concepts/persona-selection.md)** —
and a cross-model behavioral characterization that extends the
deployment-scale-behavioral-characterization shape pioneered by
[Huang et al.'s values-in-the-wild](2025-values-in-the-wild-huang.md)
from single-model to a comparative five-model setting (held at one
example for the cross-model variant; codify when a second cross-model
behavioral fingerprint paper lands).

The paper's headline contribution is to AI authorship detection — it
shows that *discourse-level narrative features*, not stylistic
surface, carry essentially all of the human-vs-AI separability signal
(93.2% macro-F1 narrative-only retains 97% of the with-style
baseline). The wiki absorbs it for the *secondary* contribution: an
empirical map of how five frontier LLMs differ from each other and
from humans at the level of narrative output. Two structural results
load-bear. (1) **The AI narrative attractor.** All five LLMs occupy
overlapping regions of narrative-feature space, separated from
human-authored stories by a margin larger than any AI-to-AI margin:
mean human-AI centroid distance is 1.6× mean AI-AI centroid distance
(6.6 vs. 4.3), and the closest human-AI centroid pair (6.2) exceeds
the most distant AI-AI pair (6.0). Human stories are also more
dispersed (mean radius 33.2 vs. 27.4) and rarer (mean rarity
percentile 0.71 vs. 0.49; Cohen's d = 0.83; 24.7% of human stories
fall in the rarest decile corpus-wide vs. 7.1% of AI stories). (2)
**Per-model fingerprints.** Each frontier LLM has a measurably
distinct narrative signature on top of the shared AI region. Claude
is the most distinctive (per-source F1 77.1% narrative-only): event
intensity escalates less than in any other source, narrative voice is
the most uniform, and 62% of Claude stories honor literary
conventions vs. 39–56% across other sources, with epilogues favored
and dream sequences avoided. GPT (73.0%) centers on socially-oriented
storytelling: gossip-and-rumor as plot mechanism (64% vs. 44–55%),
retrospective framing on past events, ensemble social networks
matching human levels, and subverts expectations more than other AI
(41% vs. 27–36%). Gemini, DeepSeek, and Kimi form a more confused
cluster (55.2–59.6% F1); each still has individual quirks (DeepSeek
front-loads context; Gemini produces the tidiest endings, extended
denouements, and the bleakest settings — 88% tagged bleak/oppressive;
Kimi has the fewest fingerprints and sits at the generic center of
the AI distribution).

The finding's structural contribution to the wiki is the first
deployment-scale *cross-model* output-level evidence of LLM
convergence into a shared behavioral region distinct from humans —
the output-side counterpart to [Lu et al.'s cross-model Assistant
Axis](2026-assistant-axis.md) (which shows that *internally*, three
open-source instruct models share a PC1 with role-loading correlation
> 0.92), and to [Beckmann & Butlin's persona-regions
hypothesis](2026-where-is-the-mind-beckmann.md) (which posits
basins-of-attraction in persona space that should produce coherent
reidentifiable output regimes). StoryScope supplies the behavioral
prediction-and-confirmation for that hypothesis at the output side,
across five proprietary frontier models the activation-level
literature has not yet probed.

## Method

**Corpus.** 10,272 human-authored short stories from Books3 (Presser
2020, an overwhelmingly 20th-century literary-fiction corpus). For
each human story, Gemini 2.5 Flash reverse-engineers an underlying
writing prompt by inferring the premise (Li et al. 2024). Each of
five LLMs generates a story from the same prompt: Claude Sonnet 4.6
(Anthropic 2026), GPT 5.4 (OpenAI 2026), Gemini 3 Flash (Gemini Team
2025b), DeepSeek V3.2 (DeepSeek-AI 2025), Kimi K2.5 (Team 2026).
Result: 61,608 stories at ~5,000 words each (mean 4,753), six
parallel versions per prompt — one human, five AI. Authors release
the prompts and AI stories; human Books3 stories not released for
copyright reasons.

**The STORYSCOPE pipeline.** Three stages convert prose into
discourse-level features without relying on surface style. (i)
*Structured intermediate representations.* Each story is converted
to a template-based representation across 10 narrative dimensions
(plot, agents, temporal structure, etc.), forcing downstream stages
to reason over narrative content rather than wording. (ii)
*Cross-source comparative analysis.* For each of 600 prompts (the
comparison set), an LLM judge reads the six paired representations
and distills cross-source observations, compressing ~2.7M tokens of
raw text into ~686K tokens of comparative observations. (iii)
*Discourse-level feature discovery.* From the observations, candidate
features are extracted, embedded with F2LLM-4B, clustered at cosine
similarity threshold, and merged (65 clusters merged), yielding **d =
304 discourse-level features**. Each feature is encoded per-story by
LLM-as-judge scoring, producing a 61,608 × 304 dense matrix. The
pipeline is guided by the NarraBench taxonomy of Hamilton et al.
2025.

**Feature subsets.** From the 304-feature space the paper selects
two operationally distinct subsets. **30 *core* features** are
cross-source-discriminative, scored as AI-leaning or human-leaning by
the direction of the human-AI gap. **75 *fingerprint* features** are
source-specific — each identified from the gap between one model and
the other four AI sources. Detection and attribution tasks are
evaluated on (a) style-only (39 features); (b) core narrative only
(30); (c) core + fingerprint (101); (d) all four feature groups
including stylistic.

**Tasks.** Binary detection (human vs. AI) and six-way authorship
attribution (human + 5 LLMs), evaluated on a held-out test split by
macro-F1.

## Key results

**Detection at 93.2% macro-F1 narrative-only.** Discourse-level
features alone reach 91.1% with core+fingerprint and 93.2% with all
narrative groups; the with-style baseline reaches 95.6%. Narrative
features therefore carry over 97% of the detection signal that style
adds nothing to. This is the paper's strongest claim about
*durability* of the human-AI gap: stylistic surface can be edited or
swapped between model versions, but narrative structure is a deeper
property of how the model assembles a story and is harder to alter
post-hoc.

**Six-way attribution at 68.4% macro-F1 narrative-only / 78.7% with
style.** The attribution task is much harder than detection, because
the five AI models overlap substantially. Per-source F1
(narrative-only / with-style): **Human 88.5% / 93.0%**, **Claude
77.1% / 89.3%**, **GPT 73.0% / 82.1%**, **DeepSeek 59.6% / 66.0%**,
**Gemini 55.2% / 65.8%**, **Kimi 55.2% / 66.8%**. Human and Claude
remain separable from narrative alone; GPT is intermediate;
DeepSeek/Gemini/Kimi form a confused triplet.

**The AI cluster vs. human dispersion.** In the z-scored encoded
feature space with Euclidean distance: mean human-AI centroid
distance is 1.6× mean AI-AI centroid distance (6.6 vs. 4.3); the
closest human-AI centroid pair (6.2) is farther than the most distant
AI-AI pair (6.0). Human stories are 22% more dispersed than the
average AI radius (mean radius 33.2 vs. 27.4), and their median
10-nearest-neighbor radius is 1.13× larger (33.1 vs. 29.2). The six
most-confused source pairs in the narrative-only 6-way classifier
are exclusively AI↔AI; the largest pair is gemini↔deepseek (222 and
207 misclassifications), dwarfing the most common human
misclassification (human→kimi, 46).

**Human stories are rarer.** Per-story rarity (mean Euclidean
distance to 25 nearest neighbors): humans 0.71 vs AI 0.49 mean
percentile, Cohen's d = 0.83. 24.7% of human stories fall in the
rarest 10% corpus-wide vs 7.1% of AI stories; in the top 1%, 3.0%
human vs 0.6% AI. At the prompt level (six paired versions of one
prompt), the human story is the rarest of the six 57.8% of the time
(vs 16.7% chance).

**Core narrative differences.** The 30 core narrative features
characterize the human-vs-AI gap. AI stories are systematically more
*thematically explicit* (over-explain themes), *causally tidy*
(single-track plots that resolve cleanly), and *temporally linear*
(few flashbacks, little nonlinear structure). Human stories show
more morally ambiguous protagonist choices, more temporal
complexity, and greater structural diversity. The paper does not
adjudicate whether these differences reflect training-data
regularities, RLHF preference patterns, or architectural priors.

**Per-model fingerprints (§5).** Each model has individual quirks
that distinguish it within the AI cluster.

- **Claude keeps it cool.** Most distinctive AI (77.1% / 89.3% F1).
  Event intensity escalates less than in any other source. Narrative
  voice is the most uniform. Takes a reverent/continuist approach to
  literary tradition (62% of Claude stories vs. 39–56% across other
  sources). Favors epilogues, avoids dream sequences, produces
  "quiet endings over avalanche endings."
- **GPT likes to gossip.** Gossip-and-rumor as plot mechanism (64%
  vs. 44–55%). Frames stories as reflections on events from years or
  decades ago. Ensemble-heavy social networks matching human levels.
  Subverts expectations more than other AI (41% vs. 27–36%), leaves
  reconciliations ambiguous.
- **Gemini, DeepSeek, and Kimi as triplets.** The more-confused
  cluster (55.2–59.6% F1 narrative-only). Each still has individual
  quirks. **DeepSeek** front-loads crucial context other sources
  leave until later. **Gemini** produces the tidiest endings,
  extended denouements, and the bleakest settings (88% tagged
  bleak/oppressive). **Kimi** has the fewest fingerprints and lowest
  F1, sitting at the generic center of the AI distribution with no
  distinctive narrative choices.

**Style adds little.** Adding stylistic features (39 features: word
choice, syntactic structure, lexical statistics) raises detection
F1 from 91.1% to 95.6% (relative gain 5%) and attribution F1 from
58.5% to 78.7% — most of the attribution gain accrues to the
triplet's per-source separability (Gemini 55.2 → 65.8, etc.). Core
narrative + fingerprint features dominate the headline signal;
stylistic cues are complementary but not load-bearing for
human-vs-AI separability.

## Why it matters

**First deployment-scale cross-model output-level convergence
finding for the wiki.** The persona-selection cluster's behavioral
evidence base before StoryScope was either single-model
(values-in-the-wild on Claude; persona-jailbreak findings on mixed
sets) or activation-level (persona-vectors, Assistant Axis,
em-easy-soligo). StoryScope is the first behavioral large-scale
evidence that frontier LLMs from five different vendors converge into
a *shared region of output space* distinguishable from humans — the
output-side analog of the cross-model PC1 correlation (> 0.92) Lu et
al. find at the activation level. The two findings load-bear in
opposite directions of the same scaffold: Lu shows the latent
geometry is shared; Russell shows the surface behavior is shared.
Neither isolates the mechanism (training data, RLHF, architecture,
or some combination), and StoryScope deliberately does not try to.

**Empirical anchor for an "AI narrative attractor" framing.** Lu et
al.'s "Assistant attractor" describes a region within a single model
that the model returns to under unconstrained conversational
pressure; [Beckmann & Butlin](2026-where-is-the-mind-beckmann.md)'s
*persona regions* hypothesis (their Hypothesis 3) posits these
attractors as basins of attraction in persona space, of which they
identify three candidates (assistant, evil, Aura). StoryScope's AI
cluster is structurally a different phenomenon — cross-model
convergence at the output level, not within-model end-state
convergence — but it is the kind of behavioral pattern Hypothesis 3
would predict if a strong "narrative-default Assistant" region
existed across vendor model families. Whether this region maps
mechanistically to Lu et al.'s assistant pole, or whether the
convergence has additional sources (e.g., shared RLHF preference
distributions across vendors trained on overlapping human-feedback
distributions), is unresolved. **The five-model fingerprint result
sharpens the question rather than answering it**: if all five LLMs
were trained on similar corpora with similar RLHF, why would they
end up with measurably distinct narrative signatures rather than
collapsing onto a single point? The data is consistent with
*shared-region-with-vendor-specific-perturbation*, which is closer to
the persona-regions framing than to a single-attractor model.

**Per-model fingerprints anchor the persona-region hypothesis at the
output level across vendor families.** The persona-selection
literature's activation-level evidence is overwhelmingly on
open-weights models (Gemma, Qwen, Llama families). StoryScope is the
first cluster finding to demonstrate behavioral signatures across
five proprietary frontier models — Claude, GPT, Gemini, DeepSeek,
Kimi — at a scale (61,608 stories, 304 features) where each model's
narrative defaults are statistically identifiable. The activation
correlate is unmeasurable (no access), but the behavioral side is
characterizable, and the result that *Claude is the most distinctive*
is a non-trivial output-level claim that the persona-vector
literature's mostly-Gemma/Qwen/Llama coverage cannot make.

**Open question about whether the AI cluster is a corpus artifact.**
The human reference is Books3 — overwhelmingly 20th-century literary
fiction. AI models are generating fresh stories from prompts reverse-
engineered from those originals. The paper acknowledges in its
Ethics Statement that the human distribution is not contemporary-
prose-matched to the LLMs' training prior distribution. This raises
the question whether the "AI cluster" partly reflects
contemporary-prose conventions (themes explicit, plots tidy) rather
than something intrinsic to LLM generation — a *human-vs-Books3-
specifically* gap rather than a *human-vs-AI* gap. The
**inter-AI** convergence (centroid distance 4.3, 1.6× smaller than
human-AI gap; six most-confused pairs all AI↔AI) is the part of the
finding least vulnerable to this confound: the AI models converge
with each other independent of the human reference. The
*per-model fingerprint* result is similarly robust: differences
between Claude and GPT do not depend on which human distribution is
the reference.

## Interpretive tensions

**Detection-paper framing vs. model-psychology reading.** The
paper's intended contribution is to AI authorship detection ("our
features provide a measurable proxy for narrative uniqueness that
complements existing detection tools"). The wiki absorbs it as
evidence of behavioral structure in LLM outputs. The two readings
are compatible but emphasize different load-bearing claims: detection
emphasizes the 93.2% F1 *durability* against post-hoc surface
editing; the wiki emphasizes the per-model fingerprints and the
AI-cluster geometry as evidence of behavioral-persona structure. The
paper's data supports both readings; the wiki's framing does not
require detection to succeed (the per-model fingerprints are
informative even if detection were lower).

**Behavioral output cannot directly bridge to the activation-level
cluster.** Persona-vectors, Assistant Axis, persona-selection-model,
and the persona-regions framework are activation-level constructs
that require white-box model access. StoryScope is entirely
black-box — feature extraction proceeds via LLM-as-judge on outputs.
The behavioral findings are consistent with the activation-level
literature (per-model fingerprints could be activation-level
persona-region differences manifesting at the output), but no
mechanistic claim follows from the behavioral data alone. The
finding is in this sense a *complementary* rather than a
*confirmatory* contribution to the activation-level cluster.

**Convergence source is underdetermined.** Five vendors with
different training pipelines, different RLHF preference data,
different architectures (DeepSeek and Kimi are MoE; Claude/GPT/Gemini
proprietary), and (presumably) different training corpora produce
narrative outputs in overlapping regions of feature space. Four
candidate mechanisms — shared pre-training corpora regularities
(e.g., Common Crawl), shared RLHF preference distributions (raters
preferring certain narrative styles), shared evaluation pressures
(common benchmarks reward certain story shapes), shared architecture
priors — are all plausible and not adjudicated. The paper does not
take a position; the wiki marks this as a major open question for the
persona-selection cluster that the StoryScope data cannot resolve.

**LLM-as-judge dependence at every stage.** Story-to-template
conversion, comparative analysis, feature scoring, and core/
fingerprint selection all rely on LLM judges (Gemini 2.5 Flash for
prompt extraction; per-feature LLM scoring; LLM-driven feature
discovery). The judges may themselves embed narrative-style biases
that correlate with detected fingerprints. The 99.6% inter-rater
agreement reported across feature encodings (§D) constrains but does
not eliminate this — the judges agree because they share priors;
those shared priors may also drive which features get discovered as
discriminative in the first place. This is a known limitation of
LLM-judge-based comparative pipelines that the paper acknowledges
but does not fully address.

**Books3 reference confound (partially limited).** Discussed above
under "Open question": the human reference is 20th-century literary
fiction, not contemporary prose. The AI cluster's overlap with
itself is not threatened by this confound; the AI-vs-human margin
size is.

## Concepts

- [Persona selection](../concepts/persona-selection.md) — twentieth
  instantiating finding; cross-model deployment-scale behavioral
  characterization extending the
  [values-in-the-wild](2025-values-in-the-wild-huang.md) shape from
  single-model to five-model comparative. Two contributions to the
  concept: (1) the AI-narrative-cluster result supplies the first
  large-scale behavioral evidence of cross-vendor output convergence
  into a region distinct from human-authored text, paralleling the
  cross-model Assistant-Axis correlation > 0.92 that
  [Lu et al.](2026-assistant-axis.md) found at the activation level
  on three open-source models, now extended to five proprietary
  frontier models at the output level; (2) the per-model fingerprint
  result (Claude restraint and reverence, GPT gossip and
  expectation-subversion, Gemini bleak tidiness, DeepSeek
  context-frontloading, Kimi generic-center) is the cluster's first
  empirical map of narrative-default persona-region differences
  across five vendor model families, anchoring
  [Beckmann & Butlin's persona-regions hypothesis](2026-where-is-the-mind-beckmann.md)
  with cross-model behavioral evidence at a scale (61,608 stories)
  that smaller activation-level studies cannot match.

## Cross-references

- [The Assistant Axis](2026-assistant-axis.md) (Lu, Gallagher,
  Michala, Fish, Lindsey, January 2026) — the activation-level
  cross-model counterpart. Lu et al. show that on three open-source
  instruct models (Gemma 2 27B, Qwen 3 32B, Llama 3.3 70B), the PC1
  of persona space correlates > 0.92 across models, evidence that
  the latent persona geometry is shared. Russell et al. show that
  on five proprietary frontier models the output narrative
  distribution is shared into a tight cluster distinct from humans.
  Together: the activation-level and output-level evidence both
  support a cross-model convergence story; neither alone is
  decisive.
- [Where is the Mind?](2026-where-is-the-mind-beckmann.md) (Beckmann
  & Butlin, April 2026) — persona-regions hypothesis (basins of
  attraction in persona space) predicts that coherent reidentifiable
  output regimes should be empirically discoverable. StoryScope's
  per-model fingerprints are exactly the kind of behavioral
  signatures that persona regions would produce at the output level.
  The wiki holds the regions-hypothesis-as-output-prediction reading
  as one of several available readings of the StoryScope data; the
  fingerprints could equivalently reflect training-data differences
  or RLHF-preference differences without recourse to persona
  geometry.
- [308,210 deployment Claude conversations yield 3,307 distinct AI
  values dominated by five service-oriented terms](2025-values-in-the-wild-huang.md)
  (Huang et al., April 2025) — the deployment-scale-behavioral-
  characterization shape this finding extends to multi-model
  comparative. Huang et al. characterize one model family (Claude)
  at scale; Russell et al. characterize five frontier vendors
  comparatively at slightly smaller per-model scale. Both rely on
  LLM-as-judge for taxonomic extraction; both produce hierarchical
  feature spaces; both treat the result as a behavioral fingerprint
  of trained model dispositions.
- [BiPO steering vector on Llama-3.1-70B used as continuous RCT
  treatment](2025-neural-steering-human-ai-kirk.md) (Kirk et al.,
  December 2025) — operates at the human-population level (RCT on
  2,028 UK adults exposed to steered relationship-seeking variants),
  measuring outcomes in *human* psychology. StoryScope operates at
  the AI-output level (61,608 generated stories), measuring
  signatures in *AI* narrative behavior. Methodologically distinct
  but structurally complementary: both characterize behaviorally
  what activation-level persona-vector work captures internally.
- [Persona vectors monitor and control character trait drift via
  linear directions in the residual stream](2025-persona-vectors.md)
  (Chen et al., July 2025) — the activation-level methodology that
  predicts the kind of behavioral signatures StoryScope discovers
  empirically. Persona vectors are residual-stream directions that
  causally produce trait expression in outputs; StoryScope's
  fingerprints are the trait-expression side without direct
  activation access. No bridging experiment is run; the connection
  is structural rather than empirical.
- [Janus, "Simulators"](../../raw/posts/source-2022-simulators-janus.md)
  (September 2022) — the simulator/simulacra framing under which
  per-model fingerprints would be properties of which simulacrum
  region each base+post-training pipeline tends to draw from when
  asked to generate fiction. StoryScope's data is consistent with
  the framing (each model has a distinctive "default simulacrum" for
  fiction generation) without requiring it (the same data is
  consistent with non-simulator readings of persona structure).

## Sources

- Russell, J., Rajendhran, R., Pham, C. M., Iyyer, M., Wieting, J.
  (2026). [STORYSCOPE: Investigating Idiosyncrasies in AI
  Fiction](../../raw/papers/source-2026-storyscope-russell.md).
  arXiv:2604.03136.
