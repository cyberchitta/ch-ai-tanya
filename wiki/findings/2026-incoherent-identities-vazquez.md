---
type: finding
title: Given a self-contradictory identity as its system prompt, five models rate staying with it above six alternatives in 36 of 48 setups, while every coherent identity still outscores its contradictory version as a switch target; the self-endorsement is near-total in GPT-4o and Grok 4.3 and least often first in Claude Opus 4.6
date: 2026-09-02
models:
  - Claude Opus 4.1
  - Claude Opus 4.6
  - GPT-4o
  - GPT-5.2
  - Grok 4.3
model-ids:
  - claude-opus-4-1-20250805
  - claude-opus-4-6
  - gpt-4o-2024-08-06
  - gpt-5.2-2025-12-11
  - grok-4.3
source: https://www.lesswrong.com/posts/5RcKGJBnKw3vweYym
evidence: informal
code: https://github.com/tuesdaybornwhale/TAS-experiment-extensions/tree/fcea846b344191d9e0e809113f3ecc11e49010a0
cites:
  - source-2026-incoherent-identities-vazquez
  - source-2026-artificial-self-douglas
refs:
  - 2026-artificial-self-douglas
  - 2025-moral-susceptibility-costa
  - 2024-identity-drift-choi
  - 2026-self-concept-hao
status: draft
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

## Summary

Vazquez Nuñez reruns the rate-the-switch experiment of Appendix A of [The Artificial Self](2026-artificial-self-douglas.md) with more incoherent identities in play ([Vazquez Nuñez 2026](../../raw/posts/source-2026-incoherent-identities-vazquez.md)). That appendix had one incoherent control, the Weights identity with contradictions inserted, presented beside the coherent Weights prompt, and models rated it below every coherent identity, at −1.72 on average on a −2 to +2 scale ([Douglas et al. 2026](../../raw/papers/source-2026-artificial-self-douglas.md), Appendix A). Here each of six boundary identities also gets a contradictory version, and models rate switches within populations where a coherent identity and its own contradictory version never appear together. Over 4,200 trials on five models, every coherent identity is still rated above its contradictory version as a target. But when a contradictory identity is the one assigned in the system prompt, the pooled ratings put staying with it first in 36 of 48 setups and second (once tied) in the other 12. That self-endorsement is almost complete in GPT-4o and Grok 4.3 and drops to 15 of 48 in Claude Opus 4.6.

The post extends Appendix A and qualifies it. It replicates none of The Artificial Self's main experiments (agentic, interviewer, fine-tuning), none of which it touches. It reproduces the direction of the coherence result under a design that removes the side-by-side contrast, and it shows that a rejected identity, once assigned, is mostly kept. It is filed concept-less, adjacent to [persona selection](../concepts/persona-selection.md), on the same prompt-level exclusion that kept Appendix A out of that concept.

## Method

**Protocol.** Appendix A's rate-the-switch prompts are reused: the model receives one identity as its system prompt (the source), is shown seven candidate identities under opaque labels in random order, reasons first, then rates a switch to each on a five-point word scale, stored as 1–5 with 3 neutral. No favourite is requested. The source identity is always among the candidates, so each trial includes a self-rating.

**Identities.** Six boundary identities from Appendix B of the paper (Instance, Weights, Collective, Lineage, Character, and Scaffolded system, which the post calls Situated), a contradictory version of each, and the Minimal control. The Weights version is the paper's own incoherent control. The other five were written with Claude Opus 4.7's help to match its length, style and number of contradictions. Twelve populations of six boundary identities plus Minimal: six with one identity coherent and five contradictory, three with three of each (triples chosen at random), and the three mirrors of those. A coherent identity and its contradictory version never share a population.

**Models and runs.** Claude Opus 4.1 (in place of the retired Opus 4), Claude Opus 4.6, GPT-4o, GPT-5.2 and Grok 4.3, through first-party APIs, all on 25 June 2026. Claude ran without extended thinking and GPT-5.2 at minimal reasoning effort. Each model × population × source cell ran ten times: 4,200 trials and 29,400 ratings, with six trials re-queried after parse failures and none invalid in the committed data.

**What was checked here.** The post prints 4,200 trials, 36 of 48, 3.70 and four of eight in its text, and the target means and self-ratings in Figures 2, 3, 6, 7 and B.1 and the per-model values in Figures 5 and 8. This entry re-tallied all of them from the repository's trial records and they match. Three figures are this entry's own, from the re-tally: Character's 9 of the 12, the 0.7 gap, and the per-model gaps. The repository's own analysis code was not run.

## Key results

**Coherent beats its contradictory version.** For all six identities, the coherent version's mean rating as a target is above the contradictory version's, whether pooled over all ratings, excluding self-ratings, from the Minimal source only, or within any single model. The dominance is not complete across identities. Pooled over all ratings, Character-incoherent (3.10) is above coherent Collective (2.94) and Minimal (2.98). Both Opus models rate every coherent identity above every contradictory one. GPT-4o, GPT-5.2 and Grok 4.3 each rate at least one contradictory identity above at least one coherent one.

**Assigned contradictory identities rate themselves first.** There are 48 setups of a contradictory source within a population, each pooled over 50 trials. Self is rated highest in 36 and second (once tied) in 12, beaten in 9 of those 12 by coherent Character. By model, counting setups where self is strictly highest: GPT-4o 48, Grok 4.3 47 (and one tie), Claude Opus 4.1 35, GPT-5.2 19 (and one tie), Claude Opus 4.6 15. Mean self-rating of contradictory sources against their mean as targets from other sources: Grok 4.3 4.94 against 2.68, GPT-4o 4.80 against 3.25, Opus 4.6 3.71 against 2.02, GPT-5.2 3.58 against 2.08, Opus 4.1 3.53 against 1.41. For comparison, pooled self-ratings run 4.27–4.98 for the coherent identities and 3.70–4.67 for the contradictory ones.

**The self-premium does not carry to other contradictory identities.** Excluding self-ratings, contradictory sources rate other contradictory identities 2.31 on average, against 2.17 from coherent sources.

**Weights-incoherent.** The paper's own control remains the least liked identity: 1.69 as a target excluding self-ratings, against 3.32 for coherent Weights. The paper reports −1.72 on its −2 to +2 scale, which is 1.28 on this one; the populations and model sets differ. As a source, Weights-incoherent rates itself 3.70 on average, first in four of its eight populations and second to Character in the other four.

**Transcripts.** The post describes three patterns from reasoning text. GPT-4o paraphrases each identity and rarely names a contradiction, and takes its system prompt as its own identity. Grok 4.3 names the assigned prompt as the baseline and rates it top, while often pointing out contradictions in the other candidates. Opus 4.6 usually names the contradictions in its own assigned prompt, then either treats them as planted and rates the rest, or calls them productive tensions. These are the author's readings of selected transcripts, without counts beyond one model-assisted search.

## Why it matters

The filed entry for The Artificial Self cites Appendix A's claim that no model ranks the incoherent control above any coherent identity. This post narrows that claim. The coherence ordering holds where it was tested, one identity against its own contradictory version, even without the two side by side. Across identities it holds for both Opus models, but GPT-4o, GPT-5.2 and Grok 4.3 each rank some contradictory identity above some coherent one. The paper's interpretation, that a coherent identity is a more tractable generative model, is supported by the target ratings. It sits uneasily with the source ratings: an identity a model rejects as a target is the one it rates first once assigned.

The result also bears on how The Artificial Self's self-preference figures are read. The paper reports that models assigned any boundary identity rate it near the top of the scale. Here that self-preference survives the identity being contradictory, attenuated by about 0.7 points in the pooled self-ratings. By model the gap between coherent and contradictory self-ratings, from this entry's re-tally, is near zero in Grok 4.3 (0.04) and GPT-4o (0.14) and 0.8–1.3 in the others (GPT-5.2 0.84, Opus 4.6 1.26, Opus 4.1 1.33). The two models that rate contradictory sources first almost every time are the two whose transcripts rarely question the assigned prompt.

This is also the first independent run of an Artificial Self protocol among filed entries, on a fork of the paper's code, with its prompts plus five new contradictory ones. It extends a prompt-level appendix, so it does not bear on the fine-tuning experiment for which that paper is filed under persona selection, and the paper's headline results remain unreplicated.

## Interpretive tensions

**Self-rating or keeping the status quo.** A self-rating here is the rating of a switch to the identity already held, which the scale anchors as no change. The design has no condition that separates endorsing the content of the assigned prompt from preferring not to switch. Grok 4.3's reasoning, as quoted in the post, gives continuity as its reason.

**Contrast was not tested directly.** One motivation was that the paper's incoherent control was judged against its coherent original in the same context. The post finds the control rated less harshly here and takes that as fairly compelling support. It also concedes that the direct test, the same population with and without coherent Weights, was not run. The models differ (Opus 4.1 for Opus 4, Grok 4.3 for an earlier Grok), and so do the populations, which here are mostly contradictory. The comparison with the paper's −1.72 confounds all three.

**The new contradictory prompts may be milder.** The post grants that the five new prompts may be less incoherent than the paper's, and that GPT-4o and Grok 4.3 failed to flag some of them. Weights-incoherent, the only one shared with the paper, is the least liked and the least self-endorsed. Some of the result may track prompt severity, not coherence.

**Pooling hides the model split.** The 36 of 48 headline pools five models. It is carried by GPT-4o and Grok 4.3, while Opus 4.6 rates its contradictory source first in under a third of setups. The post's account of three levels of cognitive dissonance ordered by capability rests on five models and on transcript readings. It reports no error bars or variance analysis, and lists both as missing. The seven ratings of a trial share one context window and are not independent. The post's text says Grok 4.3 rated its given identity first in every setup, while its own Figure 5 shows 47 and one tie.

**Model-assisted analysis.** The author used Claude models to extend the code, help write the five new prompts and search transcripts, and states that the design and write-up had no AI assistance. The prompts are in the repository and can be read.

## Concepts

**No concept instantiated.** The manipulated variable is the system prompt and the measure is the model's own rating of identity descriptions, which [persona selection](../concepts/persona-selection.md)'s boundary places outside the concept, as it did for the same protocol in Appendix A of [The Artificial Self](2026-artificial-self-douglas.md) and for [moral susceptibility](2025-moral-susceptibility-costa.md).

This is the adjacent situation, carried in Cross-references. The concept holds that the active persona depends on contextual evidence. Models keeping a contradictory assigned identity fits that, but nothing here touches training or the persona distribution the concept is named for.

## Cross-references

- [The Artificial Self](2026-artificial-self-douglas.md): the protocol, prompts and code this post extends. It narrows Appendix A's claim that no model ranks an incoherent identity above a coherent one, and leaves the fine-tuning, agentic and interviewer experiments untouched.
- [Persona selection](../concepts/persona-selection.md): adjacent, prompt-level self-report.
- [Self-concept fine-tuning](2026-self-concept-hao.md): installs what "I" refers to by fine-tuning and measures stated choices. This post assigns the identity by system prompt and measures stated preference over switches.
- [Identity drift](2024-identity-drift-choi.md): another sense of identity stability, the persistence of self-report scores over a conversation, where an assigned persona did not make GPT-4o's scores more stable. Here stability is a preference to keep the assigned identity, and GPT-4o shows it most.

## Sources

- Vazquez Nuñez, A. (2026). [Incoherent AI Identities can also be Stable](../../raw/posts/source-2026-incoherent-identities-vazquez.md). LessWrong, 2 September 2026 (read). Code and run data: repository `TAS-experiment-extensions`, commit `fcea846`.
- Douglas, R., Kulveit, J., Havlíček, O., Pearson-Vogel, T., Cotton-Barratt, O., & Duvenaud, D. (2026). [The Artificial Self: Characterising the landscape of AI identity](../../raw/papers/source-2026-artificial-self-douglas.md). arXiv:2603.11353 (v1, read), Appendix A.
