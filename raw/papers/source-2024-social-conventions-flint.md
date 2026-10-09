---
type: source
title: "Emergent social conventions and collective bias in LLM populations"
authors:
  - Ariel Flint Ashery
  - Luca Maria Aiello
  - Andrea Baronchelli
date: 2024-10-11
venue: Science Advances 11(20) eadu9368, published 14 May 2025 (open access, CC BY-NC); preprint arXiv:2410.08948
url: https://doi.org/10.1126/sciadv.adu9368
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

**Version filed against.** The published *Science Advances* main text, read
from the PubMed Central full-text XML (PMC12077490, open access), converted to
`cache/papers/source-2024-social-conventions-flint.md`. The published SI is a
PDF that PMC and Europe PMC would not serve to a plain request, so the SI was
read from arXiv v2 (29 May 2025), whose SI header identifies it as the preprint
version of the Science Advances article. In the passages
compared, its main text matches the published one. Venue and DOI
(10.1126/sciadv.adu9368) confirmed in Crossref. The date is the arXiv v1 date
(11 Oct 2024, from the abstract page cached as `-abs.html`), per the earliest-public-version rule. The first author's surname
is Ashery in Crossref and PMC; the PNAS follow-up lists him as "Ariel Flint",
which is why the cluster's stems use `flint`. Affiliations: City St George's,
University of London (Flint Ashery, Baronchelli); IT University of Copenhagen
and Pioneer Centre for AI (Aiello); Alan Turing Institute (Baronchelli).

**v1 differences.** v1 was titled "The Dynamics of Social Conventions in LLM
populations: Spontaneous Emergence, Collective Biases and Tipping Points"
(cached as `-arxiv-v1.{pdf,md}`). It has the same three experiments, the same
four models, Table 1, the 2% and 67% critical masses, and the same raw tables
(its SI4–SI6 are the later S1–S3). The checks against the base (non-instruct)
Llama-3.1-70B, random-string name pools and two alternative prompt templates
are not in v1. They were added by v2.

**What it does.** Homogeneous populations of LLM agents, at N=24 by default,
play a naming game. Random pairs each pick a name from a pool of W letters and
gain +100 if the names match and lose 50 if not. Each agent sees only its last
H=5 interactions, and the prompt says nothing about a population. The models
are Llama-2-70b-Chat (4-bit), Llama-3-70B-Instruct, Llama-3.1-70B-Instruct and
Claude-3.5-Sonnet (20240620), sampled live at temperature 0.5 with top-K 10.
There are three experiments. The first tests whether a population-wide
convention emerges. The second, at W=10 and W=2, compares the empty-memory
choice of a single agent with the consensus the population reaches. The third
puts a population already in consensus against a committed minority that
always plays the other name, and finds the smallest minority that flips it.

**Citable numbers.** These are printed in text or tables: Table 1, the main
text's P values, and Tables S1–S3 (raw counts for Figs. 2B and 3B). The
critical-mass percentages a finding derives from Table S3 are its own
arithmetic on printed agent counts and population sizes. The text prints only
"2%" and "67%". **Not citable:** the Fig. 1 success curves, the Fig. 2A
consensus distributions at W=10, the Fig. 3A production-probability curves, and
SI Figs. S2–S12, including the N=200 convergence of Fig. S2. All are plotted
without printed values. The N=200 result is citable only as the text's claim.
Table S6 (the base-model strategies) did not survive conversion, so the SI's
statement that collective bias appears without fine-tuning is the authors'
claim, not checked against the table.

**Source defects noticed.** In Table S1, Llama-2-70b-Chat's row reads 5010
strong and 4090 weak, which sums to 9,100 against the 10,000 samples the Fig. 2
caption states. The printed P=0.849 fits 5010 against 4990, so the row is
likely a typo. The published Table 1 prints P(M)=0.0951 for memory {1: Q, M};
v1 has .951.
