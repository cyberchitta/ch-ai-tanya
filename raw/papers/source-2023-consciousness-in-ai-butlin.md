---
type: source
title: "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness"
authors:
  - Patrick Butlin
  - Robert Long
  - Eric Elmoznino
  - Yoshua Bengio
  - Jonathan Birch
  - Axel Constant
  - George Deane
  - Stephen M. Fleming
  - Chris Frith
  - Xu Ji
  - Ryota Kanai
  - Colin Klein
  - Grace Lindsay
  - Matthias Michel
  - Liad Mudrik
  - Megan A. K. Peters
  - Eric Schwitzgebel
  - Jonathan Simon
  - Rufin VanRullen
date: 2023-08-17
venue: arXiv preprint 2308.08708 (report; cs.AI, also cs.CY, cs.LG, q-bio.NC)
url: https://arxiv.org/abs/2308.08708
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv 2308.08708. v1 posted 17 Aug 2023, v2 21 Aug 2023, v3 22 Aug 2023
(abs-page submission history; the API's `published` and `updated` fields agree).
No journal version. Nineteen authors. Butlin (Future of Humanity Institute,
Oxford) and Long (Center for AI Safety) are joint first authors. The other
seventeen span neuroscience, philosophy and machine learning: among them
Bengio and Elmoznino (Mila), Birch (LSE), Fleming and Frith (UCL), Peters
(UC Irvine) and Schwitzgebel (UC Riverside). Workshops were funded by
Effective Ventures and the EA Long-Term Future Fund.

**Version read.** v3, the arXiv HTML, cached as
`cache/papers/source-2023-consciousness-in-ai-butlin.html` and converted to
`.md`. One change across versions is visible. v1 and v2 end the abstract by
saying the analysis *shows* there are no obvious barriers to building conscious
AI systems. v3 says it *suggests* there are no obvious technical barriers to
building systems that satisfy the indicators. A footnote explains that meeting
the indicators would not mean a system is definitely conscious. The v1 and v2
full texts were not compared.

**Method** (§1.2). The method rests on three assumptions. The first is
*computational functionalism*, taken as a working hypothesis for pragmatic
reasons. It lets computational theories of human consciousness carry over to
AI, and the authors say outright that if it is false, those features need not
indicate consciousness in AI. They cite Searle and Seth 2021 for the
alternative that some non-computational feature of living organisms is
required (§1.2.1). A separate, tentative assumption is that conventional
computers can in principle run the relevant algorithms. The second assumption
is that neuroscientific theories of consciousness have real empirical support.
The third is a *theory-heavy* approach, after Birch: assess how a system
works, not whether its behaviour looks conscious. Behavioural tests are set
aside because systems trained to mimic humans can game them, and LLMs are the
example given (§1.2.3). Credence in a given system then depends on three
things: its similarity to a theory's posits, confidence in that theory, and
confidence in computational functionalism. The authors endorse no single
theory. IIT is excluded as incompatible with computational functionalism
(§2.4).

**The rubric** (§2.5, Table 2). There are fourteen indicator properties. Each
is one that some theory treats as necessary, and some subsets are claimed to be
jointly sufficient. The report's own claim is weaker: systems with more of the
properties are better candidates.

- Recurrent processing theory. RPT-1: input modules using algorithmic recurrence. RPT-2: input modules generating organised, integrated perceptual representations.
- Global workspace theory. GWT-1: multiple specialised systems capable of operating in parallel (modules). GWT-2: limited capacity workspace, entailing a bottleneck in information flow and a selective attention mechanism. GWT-3: global broadcast: availability of information in the workspace to all modules. GWT-4: state-dependent attention, giving rise to the capacity to use the workspace to query modules in succession to perform complex tasks.
- Computational higher-order theories. HOT-1: generative, top-down or noisy perception modules. HOT-2: metacognitive monitoring distinguishing reliable perceptual representations from noise. HOT-3: agency guided by a general belief-formation and action selection system, and a strong disposition to update beliefs in accordance with the outputs of metacognitive monitoring. HOT-4: sparse and smooth coding generating a "quality space".
- Attention schema theory. AST-1: a predictive model representing and enabling control over the current state of attention.
- Predictive processing. PP-1: input modules using predictive coding.
- Agency and embodiment. AE-1: agency: learning from feedback and selecting outputs so as to pursue goals, especially where this involves flexible responsiveness to competing goals. AE-2: embodiment: modeling output-input contingencies, including some systematic effects, and using this model in perception or control.

Table 2 records the entailments. GWT-1 to GWT-4 build on one another, and
GWT-3 and GWT-4 entail RPT-1. HOT-1 to HOT-3 build on one another, HOT-4 is
independent, and HOT-3 entails AE-1. PP-1 entails RPT-1 and HOT-1. Some
indicators, perhaps RPT-1, GWT-1 and HOT-1, may be necessary conditions that
raise the probability of consciousness little on their own. The authors call
the list provisional. HOT-2 concerns monitoring the reliability of perceptual
representations, not self-report.

**Implementation and case studies** (§3). Most indicators could be built with
standard machine-learning methods (§3.1). RPT-1 is already common, and the
first part of AE-1 arguably is. Whether a trained system has a property may
need interpretability to settle, not architecture alone. In the case studies
(§3.2), Transformer LLMs (GPT-3, GPT-4, LaMDA) get only a relatively weak case
for any GWT indicator. The residual stream might be read as a workspace, but
its dimensionality is doubtful as a bottleneck. More basically, a Transformer
is not recurrent and has no distinct workspace separate from its modules.
Perceiver and Perceiver IO come closer. They arguably have GWT-1, GWT-2 and
the first part of GWT-4, but lack global broadcast. On agency and embodiment,
PaLM-E with its policy unit is trained to imitate, and does not learn to pursue
goals from feedback. The virtual rodent is RL-trained, which the report counts
as sufficient for agency. Its tasks may not have required a self-model, so
embodiment stays open. AdA is called the likeliest of the three to be embodied
in the report's sense. Each assessment is hedged as illustrative, not
definitive.

**Conclusion.** The analysis suggests no current AI system is conscious, but
finds "no obvious technical barriers to building AI systems which satisfy these
indicators". If computational functionalism is true, conscious AI could
realistically be built in the near term.

**Implications** (§4). Both under-attribution and over-attribution carry
risks, and the report says over-attribution already seems to be happening,
with LLMs and the Lemoine case as examples. It recommends research on
consciousness science as applied to AI, use of the theory-heavy method both
before and after building a system, and interpretability for retrospective
assessment. It urges consideration of the moral and social risks of building
conscious AI but does not address them.

**How [Seth 2024](source-2024-biological-naturalism-seth.md) places it.** Seth
calls the report an influential review that confines itself to theories
assuming computational functionalism and acknowledges that its conclusions
depend on that assumption. He treats it as the overview of his theory-based
computational scenario. That scenario needs computational functionalism and
silicon substrate flexibility, the two premises he disputes. Butlin et al. 2023
take both on: the first as a working hypothesis, the second as a tentative
assumption. This is the hinge between the two anchors. Seth's bibliography
lists only the first four authors.

**How [Chandaria et al. 2026](source-2026-cacophony-hierarchy-chandaria.md)
place it.** The report calls Butlin et al. the most direct precursor of its
framework (§9.3) and adopts their method of deriving indicators from theories.
It counts 14 indicators and repeats the headline conclusion correctly. Its
Level 2 table abstracts seven indicators shared across computational theories,
which is a different list. It adds world model and self model, and draws on a
computational-functionalist reading of IIT. Butlin et al. exclude IIT on its
standard construal.
Chandaria et al. state that Butlin et al. explicitly set aside substrate-dependent
and other non-computational views, and their main extension goes past those
limits. They also say the 2025 follow-up argues the method can be extended
beyond computational functionalism, which states the 2025 paper more strongly
than its text supports (below).

**Filed findings that bear on specific indicators.**
[Gurnee et al. 2026](source-2026-global-workspace-gurnee.md) present their
J-space results as one empirical investigation of the indicators. They bear on
GWT-2 (a limited, privileged set) and GWT-3 (broadcast), within a single
feedforward pass. That is the architecture the 2023 report judged a weak GWT
candidate on architectural grounds. The [introspection](../../wiki/concepts/introspection.md)
cluster is nearest to HOT-2, but tests report-channel access to internal
states, not perceptual reality monitoring.

**Adjacent: the 2025 update.** Butlin, Long, Bayne, Bengio, Birch, Chalmers et
al., "Identifying indicators of consciousness in AI systems", *Trends in
Cognitive Sciences* 30(6):488–501 (doi:10.1016/j.tics.2025.10.011; Crossref
record 10 Nov 2025, issue June 2026). It has twenty authors: Bayne and
Chalmers join and Frith drops off. The published version is open access
(CC BY-NC-ND) via LSE Research Online and is cached as
`cache/papers/source-2025-indicators-tics-butlin.pdf` and `.md`. It is a
method paper and makes no new system assessments. Its Table 1 keeps the same
fourteen labels, with AE-1 renamed *Minimal agency*. The AE entailment note drops
the 2023 appeal to midbrain and unlimited-associative-learning theories, though
the text still cites midbrain theory for agency. A new note connects HOT-3 to PP. New elements:

- four guidelines for deriving indicators;
- the minimal implementation problem;
- a box on the *gaming problem*;
- positive and negative indicators framed by specificity and sensitivity;
- a Bayesian reading of credence updates.

Computational functionalism becomes the working assumption of one version of
the method. The authors
say many of them are agnostic about it, and the method could in principle take
non-computational theories. Biological substrate views, citing Seth, are said
to yield no testable indicators but should still weigh in overall assessments.
The update also allows that autoregressive LLMs may count as recurrent through
the context window, depending on where the system boundary is drawn. The 2023
report did not consider this.

**Adjacent, not read.** Butlin, Shiller, Plunkett and Long 2026, the Eleos
commentary on the Gurnee J-space paper, which Chandaria et al. cite on how far
the workspace label is warranted.

This is a stub-only filing, with no finding. It anchors the functionalist side
of the consciousness-indicators working lens. Its lasting contribution is the
rubric. Its 2023 system assessments are architectural arguments, and Chandaria
et al. 2026 redo them with current evidence.
