---
type: source
title: "Consciousness and cognitive access in LLMs: A commentary on 'Verbalizable representations form a global workspace in language models'"
authors:
  - Patrick Butlin
  - Derek Shiller
  - Dillon Plunkett
  - Robert Long
date: 2026-07-02
venue: Invited commentary (Eleos AI Research), in Anthropic's "External commentary on Verbalizable Representations Form a Global Workspace in Language Models" PDF
url: https://www-cdn.anthropic.com/files/4zrzovbb/website/cc4be2488d65e54a6ed06492f8968398ddc18ebe.pdf
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

**What the document is.** The URL resolves to a 53-page PDF (Google Docs
export, internal title "External commentary for global workspace paper --
final final") that bundles three invited responses to
[Gurnee et al. 2026](source-2026-global-workspace-gurnee.md): Dehaene and
Naccache, then this one, then Neel Nanda. An unsigned preface says the
J-space authors invited them for independent perspectives. The PDF carries no
date; the stub's date is the server's last-modified header (2 Jul 2026; the server's download filename also reads
`…_2July2026.pdf`), four days before the paper's publication. The cached Gurnee HTML does not link to
it. Butlin, Plunkett and Long are at Eleos AI Research; Shiller is at Rethink
Priorities and an incoming Eleos researcher. Only the Butlin et al. section is
filed here.

**Shape.** Argument only. The commentary runs no experiment and re-analyses
no data. It takes the paper's sections as given and asks three questions:
whether the results show a global workspace, whether they bear on phenomenal
consciousness, and what follows for moral status. The authors call the
results the "most significant evidence of consciousness in LLMs so far"
from mechanistic interpretability, while keeping access and phenomenal
consciousness apart.

**On the workspace claim** (§2). They separate three claims of rising
strength: a *privileged set* (some representations show the marks of
cognitive accessibility), a *privileged stream* (those representations are
unified by shared mechanisms of entry and influence), and a *GWT workspace*
(a stream with the modules, bottleneck, broadcast and state-dependent
selection of global workspace theory, the conditions adapted from Butlin,
Long et al. 2023). They do not object to the paper's use of the term. They
judge the privileged set strongly supported by the report, instruction,
internal-reasoning, swap and ablation results. The stream claim they find
suggestive but not established, on three grounds:

- *Selection.* J-lens vectors are picked out for their effect on future
  tokens, so their unusually broad influence could follow from how they were
  chosen, without any shared mechanism behind it.
- *Capacity.* A count of active J-lens vectors measures workspace capacity
  only if the J-space matches the workspace. They posit a hypothetical
  W-space of concepts that need not map onto vocabulary tokens; the J-space
  would then miss some of it, and the count could understate capacity.
- *Broadcast heads.* The attention-head scores are averages, consistent with
  heads that carry only part of the J-space or carry it lossily.

They count the multi-step arithmetic readouts and the swap effects in
reasoning as evidence that earlier J-space states shape later ones, and note
the paper's own admission that how content enters the space is unexplained.
On the full GWT claim, they point out that the paper does not show
encapsulated modules and that broadcast in a non-modular system differs from
broadcast in canonical GWT; they present this as a difference, not an error.

**On phenomenal consciousness** (§3). Two routes from the results to
phenomenal consciousness are laid out — identity of access and phenomenal
consciousness, and an indirect update from unexpected cognitive
sophistication — against two grounds for doubt: possible background
conditions, such as a biological substrate, that theories built on human
contrasts never had to state, and possible GWT details (body-linked modules,
a specific representational format) that LLMs lack. Their overall position is
high uncertainty, with a modest upward update.

**On moral status** (§4). They take the paper's §6.2 conflict readouts as
suggestive for valence but argue that conceptual, verbalisable J-space
content may lack the felt force of bodily valence, and that access itself,
and agency, are candidate grounds of moral status independent of phenomenal
consciousness.

**Numbers.** None of the commentary's own. Every quantity it mentions is the
paper's, cited by section number, and the wiki takes those from the
[Gurnee finding](../../wiki/findings/2026-global-workspace-gurnee.md).

**Why stub-only.** The schema admits philosophical perspectives when grounded
in specific findings; this one is grounded in a filed finding, and it argues
over that finding's interpretation without new checkable data. The paper's
measurements stand; what it disputes is the step from them to a unified
stream. That belongs in the Gurnee finding's Interpretive tensions, where
it is cited, and in the consciousness-indicators working lens, where it
reads as a GWT-2/GWT-3 assessment of the J-space by two of the
[indicator rubric's](source-2023-consciousness-in-ai-butlin.md) lead authors.
[Chandaria et al. 2026](source-2026-cacophony-hierarchy-chandaria.md) cite it
for exactly this point: a privileged set well evidenced, a unified stream and
a full global workspace much less so.

**Adjacent, same PDF, not filed here.** The Dehaene and Naccache commentary
proposes ignition, dual-task and local-global tests, and marks passages
written after analyses the paper added in response to its first draft. Nanda's commentary reports a
replication of core J-lens results on Qwen 3.6 27B with MATS scholars, with
poetry and arithmetic failing to replicate. Chandaria et al. cite a
separate LessWrong review of the paper by Nanda; whether it matches this
section was not checked.

Local copies: `cache/papers/source-2026-cognitive-access-butlin.{pdf,md}`
(the full three-commentary PDF; this commentary is the second section).
