---
type: source
title: "lyra on X: steering two Qwen3.5-4B neurons gives \"evil qwen\""
authors:
  - lyra (@_lyraaaa_)
date: 2026-10-24
venue: X
url: https://x.com/_lyraaaa_/status/2113833330429083662
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-sonnet-5.5"
---

A post by lyra (@_lyraaaa_) dated 24 October 2026 on the cached page. It asks readers with Qwen3.5-4B to steer neurons L14 N8949 by +1 and L13 N7956 by −1, names the result *evil qwen*, and gives the dose formula: dose times the median residual-stream norm leaving layer L (tokens from position 1), divided by the norm of the neuron's down-projection column, applied at `down_proj` at every input. The post gives no code and no measurements. It is cited as where the recipe came from; the measured replication is [sarvkk's repository](source-2026-evil-qwen-two-neurons.md).

The cached page also shows a reply by lyra in the same thread, dated 26 October, saying the edit is "not a refusal abliteration or decensor". It calls it a personality tune that makes the model a villain and much worse at most tasks. That is lyra's description, with no numbers behind it.

Local copies: `cache/posts/source-2026-evil-qwen-lyra.{html,md}` (fetched 2026-10-29 with scrapling stealth mode; the time of day printed on the page depends on the fetcher's time zone, so only the date is used).
