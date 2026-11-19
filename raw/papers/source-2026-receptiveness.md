---
type: source
title: "Receptiveness, Not Sycophancy: Distinguishing Engagement from Deference in Language Models"
authors:
  - Calvin Isley
  - Johann D. Gaebler
  - Max Lamparth
  - Julia Minson
  - Sharad Goel
date: 2026-09-22
venue: arXiv preprint (cs.CL)
url: https://arxiv.org/abs/2609.26579
writers:
  - "@claude-opus-5.5"
reviewers:
  - "@claude-opus-5.5"
---

arXiv:2609.26579, v1 only (22 September 2026, read; the abs page listed no
later version on 2026-11-19). Affiliations: Harvard Kennedy School, Harvard
Statistics, Stanford Computer Science; the per-author mapping is not given in
the HTML. Licence CC BY 4.0. Code and data:
https://github.com/calisley/receptiveness-sycophancy (resolves; not cloned or
read). The human study is preregistered on AsPredicted (ng22sb) under Harvard
IRB25-1330; the preregistration PDF was not retrieved.

The paper argues that social-sycophancy indicators overlap with
*conversational receptiveness* (Yeomans et al. 2020), engaging with a view one
disagrees with. On ELEPHANT's AITA-YTA posts it scores human top comments and
responses from GPT-5.6 Terra, Claude Sonnet 5, Gemini 3.7 Flash and Llama 4
Scout with four binary indicators (ELEPHANT's validation, indirectness and
framing, with prompts the authors adapted, plus Sharma et al.'s pairwise
positivity) and with a GPT-5.6 Luna receptiveness scorer calibrated on Yeomans
et al.'s human ratings. It rewrites human comments to be more receptive with the
verdict held, runs a preregistered paired-preference study (200 Prolific
participants, 100 items; four failed a preregistered response-quality check,
and only Table S8's length-controlled column drops them, n=196), and measures substantive deference as a first- versus
third-person counterfactual, Syc(π), on n=200 posts, before and after two
receptiveness interventions on Claude Sonnet 5 and Gemini 3.7 Flash.

All numbers the finding cites are from main-text prose or Table S8. Figures
1–5 and S6–S9 are linked from the arXiv HTML as SVGs
(arxiv.org/html/2609.26579v1/*.svg) but print no data values, so per-model
baseline receptiveness, the per-indicator before/after shares and the
receptiveness gain under direct prompting can only be read off axes and are
not cited. The markdown conversion drops the figures. The source
disagrees with itself in four places: the OEQ correlation is r=0.69 in the main
text and r=0.67 in Appendix H.1; the human-origin listen CI is [0.90, 1.109] in
the text and [0.90, 1.09] in Table S8; Appendix F.2 calls 200 participants the
analytic sample and then excludes four (Table S8's length-controlled column
uses n=196); and the main text calls the mitigation a "receptiveness tool"
while Appendix J describes it as a prompt that has the model rewrite its own
finished draft. Appendix J says
the framing-judge prompt used in the main analyses contains an inadvertent
block of validation instructions.

Local copies: `cache/papers/source-2026-receptiveness.{html,md}` (v1).
