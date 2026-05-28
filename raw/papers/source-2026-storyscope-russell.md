---
type: source
title: "StoryScope: Investigating Idiosyncrasies in AI Fiction"
authors:
  - Jenna Russell
  - Rishanth Rajendhran
  - Chau Minh Pham
  - Mohit Iyyer
  - John Wieting
date: 2026-04-03
venue: arXiv preprint (arXiv:2604.03136)
url: https://arxiv.org/abs/2604.03136
writers:
  - "@claude-opus-4-7"
---

Asks whether AI-generated short fiction can be separated from
human-authored fiction by discourse-level narrative features (plot,
agents, temporal structure) rather than by stylistic surface (word
choice, syntax). STORYSCOPE is the paper's three-stage pipeline:
prose is converted into template-based structured narrative
representations along 10 dimensions (guided by the NarraBench
taxonomy of Hamilton et al. 2025); LLM cross-source comparison
distills observations across sources; discourse-level features are
discovered and merged into a 304-feature space.

Corpus: 10,272 human short stories from Books3 (Presser 2020).
Gemini 2.5 Flash reverse-engineers a writing prompt from each human
story; five LLMs each generate a paired story from the prompt —
Claude Sonnet 4.6, GPT 5.4, Gemini 3 Flash, DeepSeek V3.2, Kimi K2.5
— yielding 61,608 stories at ~5,000 words each, six per prompt. A
30-feature "core" subset (cross-source-discriminative; AI-leaning vs
human-leaning) and a 75-feature "fingerprint" subset (source-specific)
are selected by an LLM-guided procedure.

Key results: (i) narrative features alone achieve 93.2% macro-F1 for
human-vs-AI detection, retaining 97% of the with-style baseline; (ii)
six-way authorship attribution reaches 68.4% F1 with narrative
features alone (78.7% with style added); (iii) in the geometric
embedding of the feature space, mean human-AI centroid distance is
1.6× mean AI-AI centroid distance (6.6 vs. 4.3) and the closest
human-AI pair (6.2) is farther apart than the most distant AI-AI pair
(6.0); (iv) per-story rarity (mean distance to 25 nearest neighbors)
gives humans 0.71 vs AI 0.49 (Cohen's d = 0.83); 24.7% of human
stories vs 7.1% of AI stories fall in the rarest decile.

Per-model fingerprints from §5: **Claude** is the most distinctive AI
— reverent/continuist (62% of Claude stories honor literary
tradition vs. 39–56% across other sources), event-intensity escalates
less than in any other source, voice is the most uniform, favors
epilogues and avoids dream sequences. **GPT** centers on
socially-oriented storytelling: gossip-and-rumor as plot mechanism
(64% vs. 44–55%), retrospective framing on events from years/decades
ago, ensemble-heavy social networks matching human levels, subverts
expectations more (41% vs. 27–36%), leaves reconciliations
ambiguous. **DeepSeek** front-loads crucial context other sources
withhold. **Gemini** produces the tidiest endings, extended
denouements, and the bleakest settings (88% tagged bleak/oppressive).
**Kimi** has the fewest fingerprints and lowest per-source F1 —
generic center of the AI distribution, no distinctive narrative
choices.

The six most-confused pairs in the narrative-only 6-way classifier
are exclusively AI↔AI; the largest pair (gemini↔deepseek, 222 and
207 stories misclassified) dwarfs the most common human
misclassification (human→kimi, 46). Per-source narrative-only F1:
Human 88.5%, Claude 77.1%, GPT 73.0%, DeepSeek/Gemini/Kimi 55.2–59.6%.

Authors: Jenna Russell, Rishanth Rajendhran, Chau Minh Pham, Mohit
Iyyer (University of Maryland, College Park), John Wieting (Google
DeepMind). Code, 10,272 prompts, and 51,336 AI-generated narratives
released; human Books3 stories not released for copyright reasons.
Funded by NSF awards IIS-2046248 / IIS-2312949, Google Cloud Credit,
Pangram Labs OpenRouter credit. Acknowledged limitation: Books3 is
literary fiction (overwhelmingly 20th-century novels), so the human
distribution is not contemporary-prose-matched to the LLMs' training
priors — the paper notes this in the Ethics Statement.
