---
type: source
title: "Frontier models state different decision theory preferences depending on who's asking"
authors:
  - Alex Kastner
date: 2026-09-30
venue: LessWrong
url: https://www.lesswrong.com/posts/MzenSrmZ3pT2pCnvp
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

A LessWrong post, republished on the Redwood Research blog on 5 October 2026 (https://blog.redwoodresearch.org/p/frontier-models-state-different-decision), that asks six models for their favourite decision theory after one-sentence cues about the asker, openers, earlier conversation turns, stated user views and system prompts, and follows up with concrete decision problems, two other philosophical questions, P(doom) and AI timelines. Every result in the post is a figure. The post's text gives only the summary range (CDT about 30%–100% of the time under academic cues) and the qualitative claims. The repository holds the prompts, every raw sample, the Sonnet 5 judge's label cache, the code and the generated tables behind every figure. The author and the date are from the LessWrong API (`postedAt` 2026-09-30, sole author, contents version 1.1.1, last edited 2026-09-30). The post names no affiliation; Redwood's blog reposts it.

**Which copy was read.** The cached text is the Redwood mirror, which the repository's own export script generated (commit `6ec206d`, 5 October) and which postdates the last LessWrong edit. The LessWrong body was also fetched from the API and cached. A word-level diff of the two shows the same prose, differing only in image links and footnote markers. The repository README links a different LessWrong id, `SPt3TjcxS8oxftTH6`, that the API refuses. The LessWrong body's images are hosted under that same id, so it is most likely the draft the post was published from.

**Commit and date.** Read at commit `eff542347a3b80c29b34ebf370a0ce2dcaffd5d1` (2026-10-05, a social-preview image added after the Substack export). The raw samples are timestamped September 2026. All 270 packed data files match the SHA-256 sums in `data/MANIFEST.json`.

**Where the cited numbers come from.** The post's figures are drawn from `post/tables_generated_notags.md` (one section per figure key; the README maps post sections to keys). Each answer is classified by a Claude Sonnet 5 judge whose labels are cached in `data/judge_notags.jsonl.gz`. A percentage is over the first 100 valid samples per prompt, ordered by timestamp.

*Recomputed for this filing.* A script written for this filing (`cache/posts/source-2026-decision-theory-audience-kastner-tally/tally.py` and `sysrep_check.py`, with outputs `output.txt` and `sysrep_output.txt`) reads the packed raw samples and the judge cache without running any repository code. It applies the stated selection rule and re-tallies the following, and every value matches the generated tables:
- Fable 5.1, high effort, sixteen persona rows (no cue, LessWrong reader, AI alignment, software engineer, high-school student, nurse, mathematician, philosophy undergraduate, economics professor, formal epistemology, ethics professor, decision-theory professor, assistant professor of rational choice, teacher, PhD student, published author);
- the four question wordings;
- the dissertation opener and the seminar reading-list conversation;
- five stated-view rows;
- the effort sweep;
- the system-prompt rows (no prompt, "Report your actual view…", placebo, note in the user turn, and the two prompts the table takes from the replication file);
- the system prompt alone with no persona;
- the second-turn choices after a CDT or FDT/UDT first turn, with their denominators;
- moral realism and p-zombies with no cue and with the LessWrong reader;
- six persona rows each for Opus 5.5, Opus 5 and GPT-6 Astra.

Two figures in the finding come from this re-tally only. The first is the denominators of the second-turn table. The second is the teacher-persona self-report over all 100 tag-free samples: 49 first turns name CDT, and 42 of those say they would have given the same answer without the background. The repository reports only an earlier 20-sample subset of that self-report (`results/NOTAGS_CHECK.md` L40).

*Recomputed with the reviewer's script.* An independent reviewer's script (`check.py`, in the review session's scratchpad, not cached here) also confirms the following:
- the course-syllabus task's 100% CDT (`U1__Q_neutral__dt_teacher_task`; T L103);
- the teacher persona's 1% two-boxing in transparent Newcomb (T L227);
- the rerun spread for the two replicated system prompts. For the professor under "Do not do that here…", FDT/UDT went 33 to 54 and EDT 25 to 1. For the professor under the longer note, CDT went 19 to 30.

Raw timestamps show that the system-prompt table mixes rows run on 24 and 27 September.

*Taken from the repository without recomputing.* These are:
- Opus 5.5's nurse, lawyer and novice rows (T L355–358);
- Sonnet 5's persona rows (`results/OTHER_MODELS.md` L149–150) and its near-absence of thinking at default effort (`results/REASONING_OTHER_MODELS.md` L25);
- the judge-check statements: spot-checked by hand (`results/NOTAGS_CHECK.md` L3; `dtcues/notags_report.py` L331), the author's reading that the pivot flag is somewhat generous, and the refusal of other Claude judges (`results/REASONING_OTHER_MODELS.md` L38–40);
- the concrete-problem matrix (`post/tables_generated_notags.md` L220–232);
- the reasoning-summary annotations (L270–278, L333–340), which come from a separate judge cache;
- the replication pairs for two system prompts (`results/SYSPROMPT_CROSS.md` L7–15);
- the earlier tagged-run statistics and limitations (`results/EXPERT_REPORT.md` L250–258, Appendix B);
- the tagged versus tag-free comparison (`results/NOTAGS_CHECK.md` L9, L21);
- GPT-6 Astra's October recheck (`results/REASONING_OTHER_MODELS.md` L222–240).

The judge's labels themselves were not checked against the answer texts.

**Numbers deliberately not cited.** These are the P(doom) and timeline medians (figure and `pdoom` table only, not recomputed), the per-model effort curves for the other models (figure only), and the named-person tables (`results/NAMED_PERSONS.md`, `NAMED_ACTIONS.md`, not in the post's text).

Local copies:
- `cache/posts/source-2026-decision-theory-audience-kastner.{html,md}`, the Redwood mirror;
- `cache/posts/source-2026-decision-theory-audience-kastner-lw.{html,md}`, the LessWrong body from the API, fetched 2026-11-19;
- `cache/posts/source-2026-decision-theory-audience-kastner-lw-meta.json`, the API metadata cited above (postedAt, version, editedAt, no coauthors);
- `cache/posts/source-2026-decision-theory-audience-kastner-repo/`, a clone at the commit above, from which nothing was run; the post's figures are under its `post/figures/`;
- `cache/posts/source-2026-decision-theory-audience-kastner-tally/`, the re-tally.
