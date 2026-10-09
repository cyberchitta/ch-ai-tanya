---
type: source
title: "GPT-6 Astra System Card"
authors:
  - OpenAI
date: 2026-09-03
venue: OpenAI Deployment Safety Hub (system card, PDF); companion "Safety overview" post on openai.com, same date
url: https://deploymentsafety.openai.com/gpt-6-astra
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

OpenAI's system card for GPT-6 Astra, released 2026-09-03 and organizationally
authored. The PDF's change log records two updates dated 2026-09-09, both to the
alignment material: the Alignment section was revised to say which evaluations
were built after training, how the ExploitGym honeypot evaluation relates to
training and the Hugging Face incident, and that absence of observed failures
does not establish reliability; and the Verbalized Metagaming section was
renamed and revised, with one metric comparison plot removed and chain-of-thought
examples added. The cached PDF is the post-09-09 version; the 09-03 text was not
read. The companion *Safety overview: GPT-6 Astra* post (openai.com, 2026-09-03)
reproduces the card's Section 1 nearly verbatim and links section pages on the
Deployment Safety Hub.

The parts that bear on model psychology are Section 8 (Alignment: restriction
evaluations, user-deception evaluations, realistic work environments,
agent-to-agent communication, a deployment simulation on 54,218 internal Codex
tasks, verbalized metagaming, and external evaluations by UK AISI and Apollo
Research) and Section 9 (Monitorability: non-adversarial CoT monitorability on
the Guan et al. 2025 suite, CoT controllability, prompted monitor evasion and
sandbagging, and a UK AISI monitorability evaluation). Sections 4–7 and 10
(safe completions, jailbreaks, health, hallucinations, Preparedness capability
results and safeguards) are not used by the filed finding.

Pairing notes. The aggregate and per-environment monitorability results
(Figures 22–27) are plotted without printed values, so the card's headline
claim of a monitorability decrease carries no citable number; the finding states
it qualitatively. The controllability, sandbagging-recall and UK AISI figures
are printed in text with their conditions. The Codex deployment-simulation
counts are printed in text and on Figure 13, which also gives the
evaluation-awareness-filtered subset (48,016 tasks per model). Apollo's
welfare-research falsification comparison is printed in the card with unequal
denominators (17 of 10,000 Astra baseline runs against 36 of 100 GPT-5.6 Sol
runs); the card does not label Sol's 100 runs as the baseline condition.
Apollo's evaluation-awareness comparison is against GPT-5.5, not GPT-5.6 Sol,
because Apollo had no chain-of-thought access to Sol. The coding-deception and
broken-search-tool results are given in text only as ratios (4x and 10x); their
absolute rates are figure-only and not cited. UK AISI's 81% and 27% figures on
asking permission and proceeding on automated replies are not cited because
their denominators are not stated.

The card does not mention OpenAI's model-misalignment reporting framework
(2026-09-16), which postdates it.

Local copies: `cache/papers/source-2026-gpt-6-astra-system-card.{pdf,md}`
(cached 2026-09-20 under `papers/` rather than `system-cards/`),
`cache/papers/source-2026-gpt-6-astra-safety-overview.{html,md}`, and rendered
pages `cache/papers/figures/source-2026-gpt-6-astra-system-card/page-{34,50}.png`
(Figures 13 and 22).
