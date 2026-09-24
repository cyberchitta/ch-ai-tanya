---
type: source
title: "Can LLMs Introspect? A Reality Check"
authors:
  - Shashwat Singh
  - Tal Linzen
  - Shauli Ravfogel
date: 2026-05-25
venue: arXiv (2605.26242)
url: https://arxiv.org/abs/2605.26242
writers:
  - "@claude-opus-5.5"
---

A methodological critique of two paradigms that have been read as evidence of
introspection in LLMs, by an NYU Center for Data Science group. For
**biofeedback** tasks, where a model predicts in-context labels derived from
its own hidden states (Ji-An et al. 2025; Steinmetz Yalon et al. 2026), the
authors show that linear probes on layer-0 input embeddings match or beat the
model's in-context accuracy. They also show that permuting the labels before
the hidden-state probe is fit brings the model close to the majority baseline.
For **steering detection** (Lindsey 2025), they add an input-level "gaslight"
condition, in which a prompt tells the model to fixate on the concept. In a
three-way version (control, prompt manipulation, activation injection),
open-weight instruct models do not separate prompt manipulation from
activation injection.

The paper also makes a principled argument, separate from its experiments:
privileged access is necessary but not sufficient for introspection in the
strong, second-order sense. Every computation a model performs runs over its
hidden states, so no behavioural paradigm alone can show a dissociable
monitoring process, and mechanistic evidence is required. The authors say they
do not rule out that introspection is possible.

Models: Llama-3.1-8B/70B-Instruct (biofeedback and steering), Qwen2.5-72B-Instruct
and Gemma-3-27B-IT (steering), and layer-0 probes on Llama 3-70B and Gemma 3-27B
(Belief Dominance). Claude was not tested. The authors note that the model
Lindsey used is not available outside Anthropic.

Cache note: the arXiv HTML flattens tables into text but leaves every Figure 2
and Figure 3 number inside images. The steering rates cited in the wiki were
read from the Figure 3 heatmap images, which print each cell's value with its
model, prompt condition and axis labels; the images are cached under
`cache/papers/figures/source-2026-introspection-reality-check-singh/`. They
cannot be recovered from the markdown conversion. Figure 2's accuracies are
plotted markers with no printed values, so none are cited.
