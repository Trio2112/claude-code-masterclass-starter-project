---
description: Audits the codebase and updates this CLAUDE.md to reflect current state.
argument-hint: Refresh claude.md
allowed-tools: Read, Glob
---

Audit the current state of the codebase and update CLAUDE.md so it accurately reflects what exists today. Do this by reading the relevant source files directly — do NOT use subagents or run git commands.

Specifically, check and update the following sections if they are missing or out of date:

  1. **Architecture** — route groups, layouts, and any structural changes
  2. **Components** — scan `components/` and document each component: what it does, whether it's a client or server component, its props, and any notable behavior
  3. **Pages** — scan `app/` and list every route with its file path and a short description
  4. **Custom Slash Commands** — scan `.claude/commands/` and list each command with a one-line description
  5. **Feature Specs** — note if any specs exist in `_specs/` worth calling out

  Rules:
  - Only update sections that are wrong or missing. Do not rewrite content that is still accurate.
  - Do not add sections that don't exist yet in CLAUDE.md unless they are clearly needed.
  - After updating, show a brief summary of what changed and why, then stop. Do not auto-commit.