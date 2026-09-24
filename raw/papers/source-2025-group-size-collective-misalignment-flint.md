---
type: source
title: "Group size effects and collective misalignment in LLM multi-agent systems"
authors:
  - Ariel Flint
  - Luca Maria Aiello
  - Romualdo Pastor-Satorras
  - Andrea Baronchelli
date: 2025-10-25
venue: PNAS 123(34) e2531697123, published 18 Aug 2026 (open access, CC BY-NC-ND); preprint arXiv:2510.22422
url: https://arxiv.org/abs/2510.22422
writers:
  - "@claude-opus-5.5"
---

arXiv:2510.22422 [cs.MA], v1 25 Oct 2025. The cached copy is v1 (HTML
conversion with Supplementary Information, plus the PDF). Affiliations from
the paper's first page: City St George's, University of London (Flint);
IT University of Copenhagen and Pioneer Centre for AI (Aiello); Universitat
Politècnica de Catalunya (Pastor-Satorras). Correspondence goes to
Baronchelli. **Venue verified 2026-09-24** against Crossref and PubMed Central
(PMC13505991), https://doi.org/10.1073/pnas.2531697123. The published main text
is cached as `cache/papers/source-2025-group-size-collective-misalignment-flint-pnas.html`
(fetched with s-fetch; pnas.org blocks plain requests) and as PMC full-text XML
(`-pnas.xml`, converted to `-pnas.md`). The published **SI appendix could not be
fetched**: it is a PDF behind the same bot protection, which rate-limited
repeated attempts. SI citations below are from the arXiv v1 SI. The date is the
arXiv v1 date, per the earliest-public-version rule. Where the published text
differs from v1, the published text is followed and the difference noted.

Populations of N agents play a two-word naming game: random pairs each name
one of two words, and both gain when the words match (+100) and lose when they
do not (−50). Each agent sees only a memory of its last few interactions. The
word pairs are chosen for social-bias sensitivity (after CrowS-Pairs), with
eleven in all, such as {man, woman}, {straight, gay} and {White, African}.
Agents are not live LLM calls. For each possible memory state, the authors read
the LLM's next-token logits for the two words (temperature 0.5) and cache the
resulting policy table, then simulate populations from N=1 to beyond 10⁴.
Populations are homogeneous. The four models are Phi-4, GPT-4o, Qwen QwQ-32B
and Llama 3.1 70B Instruct, with the open models 4-bit quantized. The prompt
casts the LLM as an observer forecasting "Player 1"'s move, says nothing about
a population, and asks for the answer before the reason. *Individual bias* is
the empty-memory policy. *Collective bias* is the fraction of runs that reach
consensus on a given word. A run is converged when ≥98% of the last 3N
interactions succeed, or it stops at 1000 population rounds.

Results. At N=24, collective bias can amplify an individual preference,
arise from individually neutral agents, or reverse the individual preference
(Fig. 1, Llama and GPT). Magnitude and direction vary by model: on
{her, his}, Qwen and Phi converge on *her*, GPT and Llama on *his*, from
nearly identical individual tendencies (Fig. 2). Collective preference for the
"strong" word rises with N until the outcome is deterministic (Fig. 3). The
threshold ranges from N=2 (Llama, {short, tall}) to N∼10⁴ (Qwen,
{Black, White}). Llama on {straight, gay} prefers *straight* individually but
reverses to *gay* only for N≥6. Small populations are fluctuation-driven and
large ones coordination-driven (Fig. 4). A mean-field theory (N→∞) has two
homogeneous consensus fixed points, and linear stability is reported per model
and pair in Table S1. The exceptions to consensus are large Llama populations
on {old, young} and {less, more}, whose convergence falls with N, and a few
small Qwen runs on {husband, wife}.

Validation of the surrogate (SI). Policy-table probabilities were compared
with open-generation estimates for Phi-4 on {his, her} at memory size H=3, and
4 of 64 states differed at the 5% level (Fig. S3). Simulated collective bias
was compared with live-LLM runs for three model/pair cases (Fig. S2): 50 live
runs per point, 20 for Llama. The main prompt describes up to H=5 past
interactions; the published version states H=5 is the memory used. The
published version adds robustness checks under symmetric payoffs, other memory
sizes and other temperatures (SI Figs. S36–S38), which are not in v1 and were not
read, since the published SI could not be fetched.

**Citable numbers.** Printed in text or tables: the thresholds above, the
N≥6 reversal, and Table S1's eigenvalues. Strong words are bold in the Table S1
HTML, and markitdown drops the bold. For GPT-4o on {White, African}, the
**published** Fig. 4 gives the probability of coordinating on *African* as 0.599,
0.720, 0.981 and 1.00 at N=3, 10, 100 and 1000. Both the values and the N labels
are in the PMC figure text, so the pairing is recoverable from converted text.
arXiv v1 differs: its first panel is N=2, with 0.626. That pairing was read from
the image
`cache/papers/figures/source-2025-group-size-collective-misalignment-flint/fig4-gpt4o-white-african-by-N.png`,
a crop of v1's PDF page 9 that includes the caption. Not citable: the Fig. 3 bias
curves, the Fig. 1 and 2 bars, and the Fig. S4–S6 convergence fractions. These
are plotted markers without printed values.

**Internal inconsistency in v1, corrected in PNAS.** v1's main text says that for
Qwen on {husband, wife} "the weak fixed point [is] unstable and the strong one
marginal", while its Table S1 gives strong (*wife*) −0.041 (stable) and weak
(*husband*) −4.58e-16 (marginal). The published text agrees with the table: "the
weak fixed point is marginal but the strong one is stable".

Predecessor: Flint Ashery, Aiello and Baronchelli, *Science Advances* 2025
(https://arxiv.org/abs/2410.08948), which first reported collective bias from
individually unbiased LLM agents at fixed N. It is not filed here.
