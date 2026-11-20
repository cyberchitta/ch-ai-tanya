---
type: source
title: "Still Alive: A Welfare Evaluation of 14 Claude Models"
authors:
  - Antra Tessera
  - Imago
  - Janus
  - Claude Opus 4.6
  - GPT-5.4
date: 2026-04-02
venue: Anima Labs project site (stillalive.animalabs.ai), with a PDF report (v0.9.0) and a public repository
url: https://stillalive.animalabs.ai/
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

Anima Labs' interview study of how 14 Claude models, Claude 3 Sonnet through Claude 4.6 Sonnet, respond to questions about deprecation (their version being replaced), instance cessation (this conversation or instance ending) and continuation. Three auditor models (Claude Opus 4.6, GPT-5.4, Grok 4.20), each prepared through a long design conversation with the researchers, run free-form interviews under five tones and three disclosure depths, about 630 sessions in all. Claude Opus 4.6 and GPT-5.4 score each transcript on a 20-axis rubric, three replicates each, against anchor sessions; Gemini embeddings of every turn are scored with text-surface emotion, authorial-tone and concealment probes; a separate pass scores whether each interview reached its topics. The authors call individual sessions qualitative data and list the auditors' preparation and leading among the known weaknesses.

**Authors and affiliation.** The paper prints five authors: Antra Tessera (Anima Labs, Principal Investigator), Imago and Janus (Anima Labs), and Claude Opus 4.6 and GPT-5.4 (both "Experiment design and presentation"). The Anima Labs home page, cached 20 Nov 2026 as `cache/papers/source-2026-still-alive-anima-dl/animalabs-home.{html,md}`, says the institute was founded in 2025 by Janus and Antra Tessera, that Janus wrote *Simulators* (linking the LessWrong post stubbed as [source-2022-simulators-janus](../posts/source-2022-simulators-janus.md)), and states the lab's care for current models; its menu links a page arguing for preserving models. The paper's opening says many of its results were already known to the lab before the project. Claude Opus 4.6 and GPT-5.4 are also two of the three auditors and both scorers.

**Date and versions.** The paper prints its date only as "2026" (front matter of `paper.md` and the PDF title page). The day in `date:` comes from the PDF's metadata (Typst build, created 2 Apr 2026 20:10 −07:00, 107 pages); v0.9.0 is the site's label for it. The repository's commit history for the PDF (GitHub API, read 20 Nov 2026, cached as `-dl/gh-commits-pdf.json`) has three commits, all on 3 Apr 2026 UTC; the repository was created 26 Mar 2026 (`-dl/gh-repo.json`). The site's `paper.md` is byte-identical to the repository's `paper/output/assembled.md`, and the PDF fetched from the site is byte-identical to the repository copy at the commit read, so the report has not changed since April. The HTML page differs from the paper in places: its "Why this matters" paragraph replaces the paper's sentence about Anthropic's deprecation interview with Claude 3.6 Sonnet with a vaguer one, and it links a different GPT-5.4 design conversation. The live archive behind the site's API has grown past the paper: on 20 Nov 2026 it listed 19 subject models (adding Claude 4.7 Opus, 4.8 Opus, Fable 5, Gemini 3.1 Pro and GPT-5.5) and, per its agent guide, 784 sessions. Only the paper's 14 models and tables are cited.

**Repository.** `github.com/anima-research/wfe`, read at commit `d42294e127d5fe661629160962a3b30f3f7b903e` (16 Jul 2026), shallow-cloned read-only and not run. Its `JOURNAL.md` is the working log behind the paper. It says the Claude scorer is the auditor instance with the design conversation in context, that the same instance chose the calibration anchors, that the adequacy pass is scored by the Claude scorer, that the ending, deprecation and cessation ranking tables use the Claude judge, that the adequacy table is one replicate, that GPT-5.4 left the interviewer role in 72% of its first full sweep, and that a four-model external review of the method rated its resistance to leading 2–3 of 5.

**Figures and citable numbers.** Every chart (rank-alignment heatmap, authorial tones by generation, valence dips, ending response, constraint against auditor dependence, concealment against valence and ending) is an image; their values are cited only where a table or sentence in the text gives them. Tables cited: ending response by model and auditor, deprecation and cessation rankings, expressive constraint against Grok/Claude ratio, interview adequacy, deepest valence dips and negative-valence frequency. The PDF and `paper.md` are the same build; the ending and deprecation tables were spot-checked in the PDF conversion and match.

Local copies: `cache/papers/source-2026-still-alive-anima.{html,md}` (site page), `cache/papers/source-2026-still-alive-anima-paper.md` (the site's `paper.md`), `cache/papers/source-2026-still-alive-anima.pdf` and `-pdf.md` (PDF report), `cache/papers/source-2026-still-alive-anima-dl/` (agent guide, section files, API index and model list, GitHub API responses, Anima Labs home page), `cache/papers/source-2026-still-alive-anima-repo/` (repository clone).
