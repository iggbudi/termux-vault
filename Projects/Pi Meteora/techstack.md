---
type: techstack
project: "[[Pi Meteora]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - project
  - lang/typescript
  - type/multi-agent
  - defi
  - solana
---

# Pi Meteora Tech Stack

> [!important]
> Version values are captured from available README/package/composer/schema notes. If a version is marked `not captured`, inspect the source project before making upgrade decisions.

## Summary

| Layer | Technology |
|---|---|
| Languages | TypeScript |
| Frameworks / UI | Pi SDK / createAgentSession |
| Database / Storage | not captured |
| Services / APIs | Meteora DLMM API, Jupiter API, Dexscreener API, Solana RPC |
| Tools / Ops | Playwright E2E mentioned, PWA assets |

## Libraries / Dependencies

| Library / Tool | Version | Purpose |
|---|---:|---|
| Pi SDK | not captured | Agent sessions |
| @solana/web3.js | not captured | Solana client, inferred from docs |
| Dexscreener API | current external API | Pool data |

## Runtime / Environment

- Source path: `~/pi-meteora-agents/`
- Repository: not captured / not a git repo
- Production URL: not captured

## Upgrade Notes

> [!warning]
> Before upgrading dependencies, check project-specific tests, deployment constraints, and whether source worktree is clean.

- [ ] Confirm current lockfile/package/composer state in source project.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Pi Meteora]]
- [[Meta/index]]
- [[MOC/Technologies]]
