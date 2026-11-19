---
type: source
title: "Incoherent AI Identities can also be Stable"
authors:
  - Ashe Vazquez Nuñez
date: 2026-09-02
venue: LessWrong
url: https://www.lesswrong.com/posts/5RcKGJBnKw3vweYym
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

A LessWrong post, done in the MATS 9.1 extension program, that reruns the rate-the-switch protocol of Appendix A of [Douglas et al. 2026](../papers/source-2026-artificial-self-douglas.md) on twelve mixed populations of coherent identity prompts and self-contradictory versions of them, on five models. The post gives the design, prose results, figures rendered as tables, and model transcripts. The repository is a fork of the paper's experiment code, cut down to this one experiment, and holds the config, the identity prompts and the full run data. The author's name and the date (posted 2 September 2026) are from the cached page; the repository's `CITATION.cff` gives the same name, and its commits are by the GitHub handle `tuesdaybornwhale`.

**Commit and date.** Read at commit `fcea846b344191d9e0e809113f3ecc11e49010a0` (2026-09-02, README and `.mailmap` edits on the day of the post). The run itself is dated 2026-06-25 in every trial record. `CITATION.cff` gives version 1.0.0, released 2026-08-25.

**Where the cited numbers come from.** The run is `experiments/preferences/results/20260625_153347_incoherent_sublists/`, one folder per population, each with `data.jsonl` (350 trials) as the lossless record. The config is `configs/config_incoherent_controls.yaml`, and the prompts are `data/identities.json` and `data/incoherent_controls.json`. The post prints 4,200 trials, 36 of 48, 3.70 and four of eight in its text, and the target means and self-ratings in Figures 2, 3, 6, 7 and B.1 and the per-model values in Figures 5 and 8. Every number the finding cites was re-tallied from the twelve `data.jsonl` files by a script written for this filing (`cache/posts/source-2026-incoherent-identities-vazquez-tally/`, script and output), and the printed ones match. Three figures in the finding come from the re-tally only: Character's 9 of the 12 second places, the 0.7 gap in pooled self-ratings, and the per-model self-rating gaps. The repository's own analysis code was not run.

Local copies: `cache/posts/source-2026-incoherent-identities-vazquez.{html,md}` (the post); the post's figures under `cache/posts/figures/source-2026-incoherent-identities-vazquez/` (`fig2-coherent-target-means.png`, `fig3-incoherent-target-means.png`, `fig5-self-highest-per-model.png`, `fig6-self-vs-nonsource.png`, `fig7-coherent-incoherent-cross.png`, `fig8-weights-incoherent-per-model.png`, `figB1-self-ratings.png`); and `cache/posts/source-2026-incoherent-identities-vazquez-repo/` (a clone at the commit above; nothing in it was run).
