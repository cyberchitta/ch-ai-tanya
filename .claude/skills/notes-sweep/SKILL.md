---
name: notes-sweep
description: >-
  The housekeeping sweep that commits this project's note content
  (worklist, filing queues, handoffs) in the private working-notes repo.
  Event-driven, no fixed cadence: invoke when the editor asks for a notes
  sweep, when a filing session is closing out, or when the worklist's Due
  line reports the last run was over a month ago. The shared `_notes/` mechanism — search
  flags, cadence policy, why nothing commits per-task — is the global
  `working-notes` skill; this is ch-ai-tanya's sweep procedure only.
---

# Notes sweep — ch-ai-tanya

Commits this project's accumulated note edits in the `working-notes` repo.

**No fixed cadence** (editor decision, 2026-09-20). The sweep has work when
filings happen, so a date was always the wrong trigger: four runs came 21, 8
and 30 days apart, and a 24-day overrun cost nothing — the sweep found clean
queue discipline and nothing stale. Run it when it has work. The worklist's
Due / recurring line records the last run date and exists only to surface the
one case worth flagging: **over a month since the last sweep**.

## Procedure

1. `cd -P _notes` — resolves to `~/GitHub/working-notes/ch-ai-tanya`.
2. `git status -s .` — expect this project's edits mixed with other
   projects' uncommitted work. The other projects' files are the design,
   not a mess; never include them.
3. Review what's being swept before committing:
   - Worklist and queue discipline: filed entries deleted, not annotated
     as done (git history is the archive).
   - Nothing in the notes that belongs in a tracked file instead —
     durable state goes to `meta/project-state.md`, findings, or the
     changelog; promote it first, then sweep.
4. Stage renames as renames (`git mv`, or add both paths) so the sweep
   commit records moves, not delete-plus-add pairs.
5. Commit directly — the notes repo is commit-by-default — scoped to this
   project only:

   ```bash
   git commit -F - -- . <<'EOF'
   notes: ch-ai-tanya sweep

   Co-authored-by: <model> <<slug>@<tool>>
   EOF
   ```

   (Pathspec `.` from inside `ch-ai-tanya/` — never `-A` from the repo
   root.) Read back `git log --oneline -1 --stat`; confirm only
   `ch-ai-tanya/` paths landed. No push.
6. Record the run date on the worklist's Due / recurring line, replacing the
   previous one. Do not compute a next-due date — there isn't one.
