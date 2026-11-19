---
type: source
title: "All Quiet on the Neural Front: Language Models Do Not Report Injected Pain States"
authors:
  - Emilio Ferrara
date: 2026-11-06
venue: arXiv preprint (arXiv:2611.10123 [cs.CL])
url: https://arxiv.org/abs/2611.10123
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2611.10123. v1 6 Nov 2026, v2 12 Nov 2026. This stub describes **v2**,
the current version on the abs page when checked on 2026-11-19, read from the
arXiv HTML. Single author, University of Southern California. The
acknowledgements say comments from Valen Tagliabue on v1 prompted three v2
sections: asking while the state is present (§4.7), the perspective tests
(§4.8) and the button task (§4.11). Local copies:
`cache/papers/source-2026-quiet-neural-front.{html,md}`. Battery, direction
banks, raw results and analysis: https://huggingface.co/emilioferrara/owmi-pain
(public, MIT, revision `b29cda2` when checked; not downloaded or re-run).

A follow-up to the pain-axis paper (arXiv:2609.16247) that tests its
direction against self-report. Ferrara rebuilds or reuses the pain, sadness
and fear directions and injects them into Llama-3.1-8B-Instruct,
Qwen2.5-7B-Instruct and Qwen2.5-32B-Instruct, each Qwen with and without the
pain-axis authors' anti-denial adapter. The models are then asked what
changed. Controls are sham, random directions matched to pain's output
disruption, and a text-only re-encoding of the same transcript. No
configuration identifies the injected pain beyond the text-only control.
A probe at the report position decodes the condition and a trained LoRA
reporter names it on held-out tasks. The direction also drives harmful
button choices. The comparisons that bear on the pain-axis paper are made
against its v3: the harm-only button pairs are labelled "the original work's
v3 controls", and the 32B first choices are checked against the authors'
released trial logs.

Reading notes. Every number cited in the wiki is in the body text or in
Tables 1–2, so no figure image was saved. The free-text, completion and
unparseable sustained-steering reports are labelled by one LLM judge from
the other model family, without human validation. All intervals are
pointwise across 108 main and 441 extension cells. The perspective tests use
20 sentences written by the author and not the pain-axis scenarios. The
original authors' middle-layer readout is cited from personal communication.
The framework paper (OWMI, arXiv:2608.20569) is not read or filed.
