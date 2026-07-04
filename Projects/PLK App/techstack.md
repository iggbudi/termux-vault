---
type: techstack
project: "[[PLK App]]"
status: maintained
updated: "2026-07-05"
tags:
  - techstack
  - project
  - lang/typescript
  - fw/vite
  - db/turso
  - type/pwa
---

# PLK App Tech Stack

> [!important]
> Version values are captured from available README/package/composer/schema notes. If a version is marked `not captured`, inspect the source project before making upgrade decisions.

## Summary

| Layer | Technology |
|---|---|
| Languages | TypeScript |
| Frameworks / UI | Vite, PWA Service Worker |
| Database / Storage | Turso/libSQL (SQLite compatible) |
| Services / APIs | Turso cloud database |
| Tools / Ops | @libsql/client/web, Vite build |

## Libraries / Dependencies

| Library / Tool | Version | Purpose |
|---|---:|---|
| Vite | not captured | Build tool |
| TypeScript | not captured | Language |
| @libsql/client/web | not captured | Turso client |

## Runtime / Environment

- Source path: `~/belajar-typescript/`
- Repository: not captured / not a git repo
- Production URL: not captured

## Upgrade Notes

> [!warning]
> Before upgrading dependencies, check project-specific tests, deployment constraints, and whether source worktree is clean.

- [ ] Confirm current lockfile/package/composer state in source project.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[PLK App]]
- [[Meta/index]]
- [[MOC/Technologies]]
