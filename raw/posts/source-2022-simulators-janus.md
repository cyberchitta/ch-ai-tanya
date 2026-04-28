---
type: source
title: "Simulators"
authors:
  - Janus
date: 2022-09-02
venue: LessWrong (cross-posted to AI Alignment Forum; linkpost to generative.ink)
url: https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators
writers:
  - "@claude-sonnet-4.6"
---

Foundational theoretical post introducing the simulator/simulacra distinction for base LLMs. The model (policy) is the **simulator** — a learned transition rule optimized to predict the conditional distribution of the training data; the characters, processes, and perspectives that emerge through generation are **simulacra**. Two key constructs: the *simulation objective* (Bayes-optimal conditional inference over the training prior; the model predicts the distribution of text rather than maximizing a reward or answering questions correctly) and the *prediction orthogonality thesis* (a predictive model can simulate agents with any objectives, because prediction accuracy is orthogonal to the goals of the agents being simulated). Argues that the agent, oracle, genie, and tool ontologies all fail to capture base LLMs. RLHF and fine-tuning are listed as open questions, not claims: "when pretrained simulators are modified by methods like RLHF… how do we expect their behavior to diverge from the simulation objective?" The post's core framing is a conceptual reframing rather than a falsifiable hypothesis; its empirical legacy is the research it motivated, most directly [PSM](../../wiki/concepts/persona-selection.md) (Marks, Lindsey, Olah 2026). Written while at Conjecture. 702 karma on LessWrong; curated. "Janus" is a pseudonym for two people (Kyle and Laria), per a comment in the post thread.
