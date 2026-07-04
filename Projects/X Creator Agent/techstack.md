---
type: techstack
project: "[[X Creator Agent]]"
status: experimental
updated: "2026-07-05"
tags:
  - techstack
  - project
  - vps
  - lang/typescript
  - fw/nextjs
  - fw/tailwind
  - db/sqlite
  - lib/prisma
  - type/multi-agent
---

# X Creator Agent Tech Stack

> [!important]
> Version values are captured from available README/package/composer/schema notes. If a version is marked `not captured`, inspect the source project before making upgrade decisions.

## Summary

| Layer | Technology |
|---|---|
| Languages | TypeScript latest |
| Frameworks / UI | Next.js latest, React latest, Tailwind CSS ^3.4.17 |
| Database / Storage | SQLite via Prisma ^6.16.0 |
| Services / APIs | Pi Coding Agent, Brave Search API optional |
| Tools / Ops | Prisma CLI ^6.16.0, Next build/start, PostCSS latest, Autoprefixer latest |

## Libraries / Dependencies

| Library / Tool | Version | Purpose |
|---|---:|---|
| next | latest | React framework |
| react | latest | UI |
| react-dom | latest | UI rendering |
| @prisma/client | ^6.16.0 | ORM client |
| prisma | ^6.16.0 | ORM/migrations |
| @earendil-works/pi-coding-agent | latest | Agent workflow |
| tailwindcss | ^3.4.17 | Styling |

## Runtime / Environment

- Source path: `/var/www/nanariset.my.id/xcreator`
- Repository: not captured / not a git repo
- Production URL: not captured

## Upgrade Notes

> [!warning]
> Before upgrading dependencies, check project-specific tests, deployment constraints, and whether source worktree is clean.

- [ ] Confirm current lockfile/package/composer state in source project.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[X Creator Agent]]
- [[Meta/index]]
- [[MOC/Technologies]]
