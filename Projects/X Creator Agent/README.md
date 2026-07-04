---
type: project
status: experimental
title: "X Creator Agent"
slug: "x-creator-agent"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/nanariset.my.id/xcreator"
production-url: ""
docs-url: ""
project-type: "ai-writing-tool"
priority: medium
techstack:
  languages:
    - TypeScript latest
  frameworks:
    - Next.js latest
    - React latest
    - Tailwind CSS ^3.4.17
  databases:
    - SQLite via Prisma ^6.16.0
  services:
    - Pi Coding Agent
    - Brave Search API optional
  tools:
    - Prisma CLI ^6.16.0
    - Next build/start
    - PostCSS latest
    - Autoprefixer latest
tags:
  - project
  - vps
  - lang/typescript
  - fw/nextjs
  - fw/tailwind
  - db/sqlite
  - lib/prisma
  - type/multi-agent
---

# X Creator Agent

> [!important]
> Project folder index. Main detail note: [[X Creator Agent]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

Next.js dashboard untuk membuat single reply panjang X/Twitter Premium dengan workflow 6 agent Pi Coding Agent dan anti-slop review.

## Goals

- [ ] Generate reply explainer X Premium secara multi-agent
- [ ] Simpan progress tiap agent di Prisma/SQLite
- [ ] Opsional memperkaya brief via Brave Search

## Architecture

See main note: [[X Creator Agent]].

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

- **Languages**: TypeScript latest
- **Frameworks**: Next.js latest, React latest, Tailwind CSS ^3.4.17
- **Databases**: SQLite via Prisma ^6.16.0
- **Services**: Pi Coding Agent, Brave Search API optional
- **Tools/Ops**: Prisma CLI ^6.16.0, Next build/start, PostCSS latest, Autoprefixer latest

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[X Creator Agent]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/X Creator Agent"
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

- See [[X Creator Agent]] for project-specific gotchas and learnings.

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
