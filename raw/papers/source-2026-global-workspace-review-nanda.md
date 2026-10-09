---
type: source
title: "A Review of Anthropic's Global Workspace Paper"
authors:
  - Neel Nanda
date: 2026-07-06
venue: Invited commentary in Anthropic's "External commentary on Verbalizable Representations Form a Global Workspace in Language Models" PDF; also posted to LessWrong, 6 Jul 2026
url: https://www-cdn.anthropic.com/files/4zrzovbb/website/cc4be2488d65e54a6ed06492f8968398ddc18ebe.pdf
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

**What the document is.** The third of three invited responses to
[Gurnee et al. 2026](source-2026-global-workspace-gurnee.md) in Anthropic's
53-page external-commentary PDF, after Dehaene and Naccache and
[Butlin et al.](source-2026-cognitive-access-butlin.md). The PDF's unsigned
preface introduces Nanda as head of Google DeepMind's language model
interpretability team and says his commentary includes an independent
replication on an open-weight model. The replication section credits the work
to Nanda and his MATS scholars Camila Blank and Agam Bhatia, and says
Anthropic shared an advance draft of the paper with them.

**Versions.** The same text is posted to LessWrong as "A Review of Anthropic's
Global Workspace Paper"
(https://www.lesswrong.com/posts/zFJ3ZdQwrTWE9jT5S/a-review-of-anthropic-s-global-workspace-paper),
dated 6 Jul 2026 on the page and prefaced by a line saying Anthropic asked for
the review. This is the "Nanda (2026)" that
[Chandaria et al. 2026](source-2026-cacophony-hierarchy-chandaria.md) cite.
Read side by side, the two versions have the same prose. They differ in two
ways: the LessWrong copy cites the paper's appendices by different numbers
(10.2 and 10.3 where the PDF has A.6 and A.7), and its figures survive as
image links, whereas the PDF conversion keeps no figure content. The stub's
date is 6 Jul 2026, the day of the LessWrong post and the paper's publication.
The [Butlin stub](source-2026-cognitive-access-butlin.md) dates the shared PDF
2 Jul 2026 from the server's last-modified header. That is an upload date,
not evidence of public release.

**Shape.** Mostly argument, plus a short report of original experiments. The
argument reads the paper as making four claims: scientific, methodological,
pragmatic and philosophical. Nanda accepts the scientific claim, that the
model has a cognitive space holding intermediate variables during a forward
pass, which he calls a working memory. He accepts the methodological claim,
that the J-lens accesses this space better than the logit lens. He finds the
pragmatic claim, that the J-lens is useful in audits, somewhat persuasive,
mainly as a tool for generating hypotheses. He declines to judge the
global-workspace analogy and says the paper did not move him much on
consciousness or moral status. He also gives first-principles reasons why
such a space should exist, and why a vocabulary-indexed Jacobian should
approximate it imperfectly.

**Original results.** (1) A replication on Qwen 3.6 27B: a J-lens built from
Jacobians to the penultimate layer over 25 Pile prompts of 128 tokens.
Verbal report, CKA layer bands, directed modulation, and the multilingual and
typo evals are reported as replicating, at strengths from weak to moderate.
The association eval is called a success despite poor scores. Multihop
factual recall is listed as replicating, then found confounded: an answer-swap
baseline does as well or better. Poetry and arithmetic fail. (2) A scaling check on
Qwen3.5-397B-A17B with n=4 prompts, which the authors did not check closely.
(3) A preliminary case study of four Chinese "interpretative meta-tokens"
that show up in the J-lens on ambiguous text and whose negative steering
suppresses pun, rhyme and wordplay behaviour. Filed as
[2026-jlens-replication-nanda](../../wiki/findings/2026-jlens-replication-nanda.md).

**Figures and citable numbers.** The replication's outcomes are stated in
prose as qualitative grades. Every quantity behind them is plotted, not
printed. The figures were saved from the LessWrong copy to
`cache/posts/figures/source-2026-global-workspace-review-nanda/`:
`rep-1-verbal-report.jpg`, `rep-2-cka.jpg`, `rep-3-directed-modulation.png`,
`rep-4-multilingual-typo-association.png`, `rep-5-multihop.png`,
`rep-6-poetry-arithmetic.png` and `meta-tokens-negative-steering.png`. Values
can be read only off their axes, so none is cited. The legible labelled
item counts per eval (in the legends) are not cited either. Numbers taken
from the text are setup values only: 25 prompts, 128 tokens, 64 layers, n=4
on 8 H200s for about an hour, four meta-tokens, 50 rollouts per prompt and two
prompts per category.

Local copies: `cache/papers/source-2026-cognitive-access-butlin.{pdf,md}`
(the shared three-commentary PDF, under the first-filed stem; this section is
md L1457–2300), plus `cache/posts/source-2026-global-workspace-review-nanda.{html,md}`
(the LessWrong post, cached for its figures and date).
