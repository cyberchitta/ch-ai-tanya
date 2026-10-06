---
type: source
title: "From cacophony to hierarchy: a principled framework for assessing AI consciousness"
authors:
  - Shamil Chandaria
  - Arvo Muñoz Morán
  - Fernando Rosas
  - Anil Seth
  - Henry Shevlin
  - Marcus Hutter
  - Thore Graepel
  - Adam Bales
  - Iulia Comşa
  - Murray Shanahan
  - Ruben Laukkonen
  - Morten Kringelbach
  - Chris Frith
  - Shane Legg
date: 2026-09-28
venue: arXiv preprint (arXiv:2609.35618 [cs.AI; cs.CY])
url: https://arxiv.org/abs/2609.35618
writers:
  - "@claude-opus-5.5"
---

arXiv:2609.35618, v1 28 Sep 2026, v2 29 Sep 2026. The v2 comment says it
fixed bibliography entries that did not match the intended reference,
including Hoel (2026) and Goldstein (2024), after Hoel flagged the problem.
150 pages, 43 figures, 6 tables. Interactive tool at
https://ai-cognition.org/cacophony-tool/ and code at
https://github.com/arvomm/cacophony-public-code. The cached copy is the v2
HTML (`cache/papers/source-2026-cacophony-hierarchy-chandaria.html`, converted
to `.md`), plus the abstract page (`-abs.html`), which gives the dates,
comment and subjects. Fourteen authors. Eight list Google DeepMind / DeepMind
Institute: Chandaria (the corresponding author), Shevlin, Hutter, Graepel,
Bales, Comşa, Shanahan and Legg. The others are at Oxford's Flourishing
Intelligence Program (Rosas, Laukkonen, Kringelbach), Sussex (Seth), the AI
Cognition Institute and Rethink Priorities (Muñoz Morán), and UCL (Frith). A
disclaimer says the views are not Google DeepMind's corporate positions.

The report separates the hard problem from the *mapping problem*: which
organisation goes with which experience. It brackets only views that deny any
discoverable mapping. It extends Marr's three levels into five functional
levels: behavioural, computational, intrinsic causal-structure, organismic,
and organism-environment (4E). It places theories of consciousness by the
level each takes to be critical, and treats substrate-dependent theories as
realisability constraints rather than as a further level. It gives 37
indicators across the levels and assesses current AI against each level in
prose. It then builds a Bayesian network over the level chain. The overall
credence is a weighted average of per-level posteriors, weighted by credence
over which level is critical. Section 8 argues that the indicators overlap
with the architecture general intelligence needs.

**Citable numbers (§7.4).** Defaults: equal level credence of 0.2,
P(C_i|C_{i+1}) = 0.8 and P(C_i|¬C_{i+1}) = 0.2. All activations in §7.4 are
stated to be fabricated for illustration. At equal credence, the aggregates
are human 1.000, fly 0.913, LLM-optimist 0.397, LLM-sceptic 0.005,
thermostat 0.000, and a random-half custom system 0.294. Favouring Levels
1–2 gives optimist 0.793, fly 0.841 and sceptic 0.009. Favouring Levels 4–5
gives optimist 0.099, fly 0.976 and sceptic 0.001. The text pairs every
value with its condition. The weight vectors and per-level posteriors appear
only in the figures. They were read from images saved under
`cache/papers/figures/source-2026-cacophony-hierarchy-chandaria/`.
`image9.png` (Fig. 31) shows the Levels 1–2 setting as weights
0.40/0.40/0.10/0.05/0.05, and `image38.png` (Fig. 32) shows the Levels 4–5
setting as 0.05/0.05/0.10/0.40/0.40. `image36.png` (Fig. 27) shows the
optimist with 7/9, 5/7, 0/7, 0/6 and 0/8 indicators active, and per-level
posteriors of 1.000, 0.983, 0.000, 0.000 and 0.000. Self model and
meta-modelling are struck at Level 2. At Level 5, social coupling is struck
too, although the text allows "at most a partial exception" there.
`image11.png` (Fig. 28) shows the sceptic with only the three Turing-test
indicators active (3/9 at Level 1, nothing elsewhere) and per-level
posteriors of 0.023, then 0.000 at Levels 2–5.
