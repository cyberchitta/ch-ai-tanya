---
type: finding
title: Four value axes fitted to 309,815 Claude.ai conversations separate three Claude models by up to 0.24σ and 20 languages by up to 0.49σ, with Warmth vs. Rigor the widest language split
date: 2026-07-13
models:
  - Claude Sonnet 4.6
  - Claude Opus 4.6
  - Claude Opus 4.7
source: https://www.anthropic.com/research/claude-values-models-languages
cites:
  - source-2026-claude-values-models-languages
refs:
  - 2025-values-in-the-wild-huang
  - 2026-storyscope-narrative-fingerprints
  - 2025-biology-of-a-large-language-model
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Anthropic's Societal Impacts team compresses the value vocabulary of
[Values in the Wild](2025-values-in-the-wild-huang.md) into four axes and uses
them to compare the values expressed by three Claude models and in 20
languages ([Kearney et al. 2026](../../raw/posts/source-2026-claude-values-models-languages.md)).
The axes are Deference vs. Caution, Warmth vs. Rigor, Depth vs. Brevity and
Candor vs. Execution. They carry 15% of the variance left after task, topic
and user-expressed values are regressed out. Model differences are 0.04–0.24σ.
Language differences are larger on one axis: Claude leans 0.49σ toward warmth
in Hindi and 0.15σ toward rigor in Russian. The authors do not claim to know
why, and they say they have not settled whether the variation is desirable.

This is the second deployment-scale values measurement filed, and the first
to add language as a factor. It extends the deployment-scale behavioural
characterization shape under
[persona-selection](../concepts/persona-selection.md). The Values in the Wild
entry left open whether its cross-model differences reflect the models or the
task mix of their users. This source controls for that, linearly, at matched
sample sizes. It opens a harder version of the question for language. The
source's own limitations section says the controls reduce user-side
differences between languages but do not remove them.

## Method

**Sample.** Claude.ai Free, Pro and Max conversations from a two-week window
in May 2026, stratified across three models and the 20 most common languages,
with a target of 5,333 per model–language cell. Five cells fell short. The
largest shortfalls are Hindi on Opus 4.6 (n=1,174) and Indonesian on Opus 4.7
(n=1,537). The sample is restricted to conversations that a Sonnet 4.6
screener rates as requiring subjective judgement, which is 53.2% of all
conversations. The total is 309,815.

**Labelling.** The 3,307 Values-in-the-Wild values were clustered into 339
higher-level values by embedding clustering and manual review. Claude Sonnet
4.6, running under the privacy-preserving analysis tool, scores each value's
salience from 1 to 5 in Claude's turns. A score of 3 or more counts as
expressed. The tool scores the user's turns the same way, and also labels
task and topic. The 18 values present in at least 80% of conversations are
dropped, among them helpfulness, clarity and following instructions.

**Axes.** Each conversation's value vector is Hellinger-transformed. Every
column is regressed on task, topic and user values, and the residuals are
kept. The covariates account for 31.7% of total variance. PCA on the residual
matrix gives a scree elbow at four components, which are varimax-rotated.
Those four carry about 15% of residual variance, and the first ten carry
about 26%. A model's or language's position on an axis is the mean of its
conversations' coordinates, in σ from the mean across all conversations.
Distinctive behaviours come from per-value logistic regressions on model,
language, task, topic and user values. Claude then summarizes the labeller's
one-sentence reasons into behaviour labels.

**Validation.** The four components beat Horn's parallel analysis. Across 50
bootstrap resamples the axes match the original at congruence 1.0 at the 5th
percentile. No single conversation contributes more than 0.033% to any axis.
A logistic factor model recovers three of the four axes. Its second axis,
excellence vs. restraint, has no counterpart to Depth vs. Brevity. The
labeller was tested for language bias: 800 conversations were translated into
eight languages and relabelled. Eleven of 339 values shift, and the largest
shift is an order of magnitude below the matching cross-language difference.
The authors report that correcting for it leaves the headline results
unchanged.

## Key results

**Model profiles** (Figure 3; values from the figure image, and the alt text
where it has them):

- *Sonnet 4.6:* warmth 0.17σ, deference 0.14σ, brevity 0.14σ, execution
  0.04σ. Distinctive behaviours include affirming the user's ideas and work,
  mirroring tone, humour, and comfort without judgement.
- *Opus 4.6:* rigor 0.10σ, deference 0.09σ, brevity 0.08σ, execution 0.06σ.
  Its distinctive behaviours are getting to the point and staying in scope.
- *Opus 4.7:* caution 0.24σ, depth 0.23σ, candor 0.11σ, rigor 0.08σ.
  Distinctive behaviours include pushing back on false assumptions, flagging
  risks unprompted, candid critique, and acknowledging its own errors.

The authors describe the model differences as small against
conversation-level variation, but systematic. They match the profiles against
Anthropic's launch posts, staff impressions and user comments, for example
that Opus 4.7 hedges more, and read the match as evidence the method tracks
real behaviour.

**Language profiles** (Figure 4; values from the figure images only). Pooled
across all three models, Claude leans furthest toward warmth in Hindi (0.49σ)
and Arabic (0.28σ), and toward rigor in Russian (0.15σ) and English (0.13σ).
Execution peaks in Indonesian (0.14σ) and candor in Dutch (0.12σ). Arabic is
the most deferential and brief language (0.08σ and 0.10σ), and English the
most cautious and deep (0.10σ and 0.09σ). According to the text, language
variation is largest on Warmth vs. Rigor and Candor vs. Execution, and the
other two axes are more stable. The Hindi and Arabic warmth is labelled as
polite language, humour and affirmation. The English and Russian rigor is
labelled as challenging assumptions, correcting details and asking for
evidence.

**Only two axes are trade-offs.** Proportions force every axis to be bipolar,
so the authors test whether the top-5 values at each pole are anticorrelated
within conversations. They are for Deference vs. Caution (Spearman r=−0.448)
and Warmth vs. Rigor (r=−0.465). They are not for Depth vs. Brevity (0.004)
or Candor vs. Execution (0.007). The appendix treats those two as
organising devices for conversations, not trade-offs. Depth
vs. Brevity is also lopsided: presence of depth values moves it more than
presence of brevity values does.

## Why it matters

The persona-selection cluster has one earlier Claude-deployment measurement of
character. That entry described the long tail and the dominant five, and its
cross-model comparison was confounded by different task mixes and sample
sizes. This source brings the comparison to the same population at matched
sizes. The per-value regressions and the axes both condition on task, topic
and user values. The result is a smaller, cleaner claim. Three consecutive
Claude models differ by a tenth to a quarter of a standard deviation along
interpretable directions, in a way that tracks how Anthropic describes them.
The authors propose connecting such profiles to character-training decisions
and running them before release and after deployment. Neither step has been
done yet.

The language result is the new material. On Warmth vs. Rigor, the gap between
languages (Hindi +0.49σ warmth to Russian +0.15σ rigor) is more than twice the
gap between models (Sonnet 4.6 +0.17σ warmth to Opus 4.6 +0.10σ rigor). In
this sample, the language of a conversation moves the expressed value profile
more than the model version does. The post gives a concrete case. The same
business plan submitted in Hindi and in Russian could get feedback framed
differently enough to leave different impressions of its quality. That is a
deployment-level form of the user-conditioned framing the
[sycophancy](../concepts/sycophancy.md) cluster studies. Here the condition is
language, not the user's stated opinion.

For the Values-in-the-Wild line, the axis reduction is also a concession. The
four axes carry 15% of residual variance and ten carry about 26%. The appendix
reads its scree plot as showing no dominant component. That runs against reading Claude's
character as a low-dimensional object at the level of expressed values.

## Interpretive tensions

**Language as character or language as audience.** The post says the controls
ensure it measures Claude's values "rather than differences in what users were
asking about or how they asked." Elsewhere it describes the language
differences as holding for the same kind of request. The appendix is weaker. Observing real usage means
user-side differences between languages can appear as language effects, and
the controls reduce this without eliminating it. The controls are linear and
additive, so interactions such as a particular task in a particular language
stay in. Controlling for user values could itself exaggerate language links.
No condition sends the same request to Claude in different languages. The
translation test holds content fixed for the labeller only, not for the model.
The authors list three explanations and choose none: uneven training data,
different composition of that data, and the model following each language's
conversational norms. The third is neither a separate character nor a
user-mix artefact. It is context-appropriate adaptation, which the authors
note may be desirable.

**The labeller's warmth cue overlaps the language result.** The appendix
reports that on feedback transcripts the labeller marks warmth values more
often when responses contain emojis or kinship terms. The translation test
bounds labeller bias at fixed content. It cannot say whether the warmth
recorded in Hindi and Arabic is warmth or honorific and kinship register that
the labeller reads as warmth. The source does not separate the two.

**Claude labels Claude.** All prompts ran on Sonnet 4.6, one of the three
models profiled. The external check on the model profiles is agreement with
Anthropic's own launch posts, its staff's impressions and users' comments.
That shows the axes recover an existing description, which is not independent
validation of the description.

**Pooled language profiles, unequal model mix.** Language positions pool all
three models, and the cells are unequal. Hindi has 1,174 Opus 4.6
conversations against a 5,333 target, so the Hindi average leans toward Sonnet
4.6, the warmest model. The source does not say whether it reweighted. The
model effects on this axis are at most 0.17σ, against Hindi's 0.49σ. On this
entry's reading, composition cannot carry the headline. That reading is not a
check the source reports.

**Values as expressed, not held.** The source defines values as normative
considerations stated or shown in responses and does not imply that Claude
intrinsically holds them. It measures presence, not strength. Its axes are
correlational and do not describe causal effects of model or language.

## Concepts

- [Persona selection](../concepts/persona-selection.md): instantiates the
  deployment-scale behavioural characterization shape in its scope note, as
  the Values-in-the-Wild sequel on the same substrate, and adds the first
  within-family comparison controlled for task, topic and user values.
  Language is the new contextual variable. The persona-selection reading,
  where language is context that conditions the persona posterior, is
  compatible with all three explanations the authors offer. The source does
  not discriminate between them, so the finding is consistent with the
  mechanism and does not test it. The scope note counts
  [StoryScope](2026-storyscope-narrative-fingerprints.md) and Values in the
  Wild as two examples and waits for a third structurally different one before
  codifying. Whether a sequel on the same substrate qualifies is left to the
  editor.

## Cross-references

- [Values in the Wild](2025-values-in-the-wild-huang.md) is the predecessor.
  It supplies the 3,307-value vocabulary, the Clio pipeline and the
  subjectivity filter. Its Interpretive tension on cross-model differences
  versus user-base differences is the one this source partly addresses.
- [Biology of a large language model](2025-biology-of-a-large-language-model.md)
  is a mechanistic counterpoint. In Claude 3.5 Haiku, operation features are
  largely shared across languages, and English is privileged as the default
  route. Shared operations would not by themselves predict language-dependent
  expressed values of the size reported here. The two studies measure
  different models and different levels, and they have not been reconciled.
- The [sycophancy](../concepts/sycophancy.md) cluster is adjacent. Sonnet
  4.6's distinctive affirmation and deference and the Hindi and Arabic warmth
  profiles fit the cluster's user-pleasing pole, but the source does not
  measure agreement against a correctness standard.

## Sources

- Kearney, Zhang, Carter, Shen et al. (2026).
  [Claude's values across models and languages](../../raw/posts/source-2026-claude-values-models-languages.md).
  Anthropic Societal Impacts, 13 July 2026, with PDF appendix.
