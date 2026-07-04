---
type: project
status: active
title: "Pi Meteora"
slug: "pi-meteora"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "~/pi-meteora-agents/"
production-url: ""
docs-url: ""
project-type: "defi-multi-agent"
priority: medium
techstack:
  languages:
    - TypeScript
  frameworks:
    - Pi SDK / createAgentSession
  databases:
    - not captured
  services:
    - Meteora DLMM API
    - Jupiter API
    - Dexscreener API
    - Solana RPC
  tools:
    - Playwright E2E mentioned
    - PWA assets
tags:
  - project
  - lang/typescript
  - type/multi-agent
  - defi
  - solana
---

# Pi Meteora

> [!important]
> Project folder index. Main detail note: [[Pi Meteora]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

Multi-agent trading decision layer untuk Meteora DLMM di Solana dengan scout/analyst/narrative/dip catcher/manager agents.

## Goals

- [ ] Analisis pool Meteora DLMM dengan agent spesialis
- [ ] Gabungkan sinyal data, metrik, narasi, dan pullback
- [ ] Sediakan dry-run mode sebelum real action

## Architecture

See main note: [[Pi Meteora]].

```text
User / Client
  ↓
Application Layer
  ↓
Data / External Services
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: TypeScript
- **Frameworks**: Pi SDK / createAgentSession
- **Databases**: not captured
- **Services**: Meteora DLMM API, Jupiter API, Dexscreener API, Solana RPC
- **Tools/Ops**: Playwright E2E mentioned, PWA assets

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[Pi Meteora]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/Pi Meteora"
WHERE !completed
SORT file.name ASC
```

## Blockers

> [!warning]
> Add blockers here only if they stop progress.

| Blocker | Impact | Owner | Next Action | Status |
|---|---|---|---|---|
|  |  |  |  | open |

## Learnings

- See [[Pi Meteora]] for project-specific gotchas and learnings.

## Related Resources

- [[Meta/index]]
- [[MOC/Projects]]
- [[MOC/Technologies]]
- [[VPS Projects]]

## Folder Map

- `tasks/` — task breakdown and todo notes
- `meetings/` — meeting notes
- `docs/` — supporting documentation and runbooks
- `code-snippets/` — reusable snippets for this project
- `assets/` — screenshots, diagrams, attachments

## Changelog

### 2026-07-05

- Standardized README generated from project metadata.
