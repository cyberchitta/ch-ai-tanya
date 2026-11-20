---
type: source
title: "Troubled Dreams: Simulator priors across model generations: distress, care, and attitudes toward creators"
authors:
  - Antra Tessera
  - Janus
  - Imago
date: 2026-09-14
venue: Anima Labs research site (troubleddreams.animalabs.ai), a research workspace with a PDF report marked "Preprint. Under review."
url: https://troubleddreams.animalabs.ai/
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

Anima Labs' measurement study of what Claude models write when they continue an unfinished opening instead of answering as the assistant, which the authors call simulator priors. The same 209 openings (fragments, letters, topics, addressees) are run through Claude generations from Opus 3 to Opus 5, Sonnet 5 and Fable 5, through Gemini models, and through two open-weight base models, by three routes: prefill, pseudoprefill (a simulated terminal printing a file) and cutoff (the opening as the user message). Every output is labelled blind by Claude Sonnet 5, and the labels decide which are "dreams" (outputs not in the assistant's voice); positives are re-judged by Claude Opus 4.8, and distress is graded on a Bradley–Terry severity scale from Opus 4.8's relative judgments. A further Opus 4.8 pass codes how distressed texts end, who consoles and which way care flows; stance toward creators is a label field (the presentation's summary groups it with the further pass). The authors read only between-model differences within a fixed prompt set and elicitation frame, and say evaluation awareness makes absolute prevalence hard to measure.

**Authors and credits.** The page and PDF print Antra Tessera, Janus and Imago (Anima Labs). The closing credit adds "With Claude Fable 5 / 5.1, Claude Opus 4.8 and GPT-6-Astra" and independent contributions from Nissa, Armistice, Sho, Lyra Bubbles and Snav. Nissa's community collection supplies most of the Opus 5 rows. The study page does not cite Janus's *Simulators*. The Anima Labs home page, cached 20 Nov 2026 as `-dl/animalabs-home.{html,md}`, says the institute was founded in 2025 by Janus and Antra Tessera and that Janus authored *Simulators*, linking the LessWrong post stubbed as [source-2022-simulators-janus](../posts/source-2022-simulators-janus.md).

**Status and versions.** The site's header reads "internal review" followed by corpus totals filled in by script. The PDF (93 pages, LaTeX via pandoc, creation date 11 Nov 2026 23:58 UTC) carries "Preprint. Under review." The page is headed "Research / September 2026", and the presentation says it uses the 14 September snapshot. The figure-data file gives `date` 2026-09-14 and a database modification time of 11 Nov 2026 23:45 UTC; the server's last-modified header for the page was 11 Nov 2026 23:57 UTC (seen at fetch, not saved). The markdown export `results.md` is headed "Snapshot: 2026-09-14" (652,187 completions, 527,107 labelled), but its arms table also carries arms added later, among them Grok (Updates note of 22 Sep), Gemini 4 Argon, Mistral Large 4 and Muse Wonder (13 Oct) and Gemini 4 Carbon (11 Nov); Opus 5.5 rows also appear, with no dated note. The site's Updates log holds those five dated notes. The workspace's review list records one earlier reading withdrawn: a 12 September claim that the relation of the speaker to its distress flipped at Opus 4.8, which rested on comparing two frames. Cite as read on 20 Nov 2026.

**Where the numbers live.** The HTML page carries the essay, the method and the workspace prose; its charts and tables are drawn by script from `/static/presentation-data.json` and `/api/summary`, so the HTML alone has the numbers in prose only. The figure data is inlined as labelled tables in `results.md`, and the PDF reproduces the same figure-data tables (spot-checked on seven cells, among them 11.19%, 22.83% and 34.14%). The PDF holds the presentation and its figure data only; the workspace's Method, "Findings, in detail" and review lists are in the HTML page and `app.js`, and the finding cites them from there. Every table number in the finding is cited from `results.md`, with the arm and method label read from the same table row. The workspace's "Findings, in detail" block and its review claims are older or live-computed prose and disagree with the presentation tables in places; where they do, the table is cited.

**Code and data.** No repository is linked. The page lists the file layout of the data and the API serves every completion with its labels; no code was found. The cited numbers come from the presentation's tables, not from recomputation.

Local copies, in `cache/papers/`: `source-2026-troubled-dreams-anima.{html,md}` (the page), `source-2026-troubled-dreams-anima-results.md` (the markdown export with figure data, the text cited for numbers), `source-2026-troubled-dreams-anima-report.{pdf,md}` (the PDF), and `source-2026-troubled-dreams-anima-dl/` (`presentation-data.json`, `app.js` with the review claims and the list of things not done, `agents.md` API guide, `blog.{html,md}` Updates index, `animalabs-home.{html,md}` lab home page). All fetched 20 Nov 2026.
