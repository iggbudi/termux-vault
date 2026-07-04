---
type: techstack
project: "[[Slack Multi-Agent Bridge]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - project
  - vps
  - lang/typescript
  - runtime/nodejs
  - fw/express
  - db/sqlite
  - api/slack
  - type/multi-agent
---

# Slack Multi-Agent Bridge Tech Stack

> [!important]
> Version values are captured from available README/package/composer/schema notes. If a version is marked `not captured`, inspect the source project before making upgrade decisions.

## Summary

| Layer | Technology |
|---|---|
| Languages | TypeScript ^5.9.3, Node.js 22+ |
| Frameworks / UI | Express ^5.2.1 |
| Database / Storage | SQLite via node:sqlite |
| Services / APIs | Slack API, Pi Coding Agent |
| Tools / Ops | tsx ^4.21.0, typescript ^5.9.3, node --test, Git worktree |

## Libraries / Dependencies

| Library / Tool | Version | Purpose |
|---|---:|---|
| @earendil-works/pi-ai | ^0.80.2 | Pi AI SDK |
| @earendil-works/pi-coding-agent | ^0.80.2 | Agent execution |
| express | ^5.2.1 | HTTP framework |
| dotenv | ^17.2.3 | Env loader |
| tsx | ^4.21.0 | TS dev runner |
| typescript | ^5.9.3 | Compiler |

## Runtime / Environment

- Source path: `/var/www/bot.pjdigital.top`
- Repository: https://github.com/iggbudi/slack-multi-agent.git
- Production URL: not captured

## Upgrade Notes

> [!warning]
> Before upgrading dependencies, check project-specific tests, deployment constraints, and whether source worktree is clean.

- [ ] Confirm current lockfile/package/composer state in source project.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Slack Multi-Agent Bridge]]
- [[Meta/index]]
- [[MOC/Technologies]]
