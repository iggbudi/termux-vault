---
type: project
status: maintained
title: "PLK App"
slug: "plk-app"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "~/belajar-typescript/"
production-url: ""
docs-url: ""
project-type: "pwa"
priority: medium
techstack:
  languages:
    - TypeScript
  frameworks:
    - Vite
    - PWA Service Worker
  databases:
    - Turso/libSQL (SQLite compatible)
  services:
    - Turso cloud database
  tools:
    - @libsql/client/web
    - Vite build
tags:
  - project
  - lang/typescript
  - fw/vite
  - db/turso
  - type/pwa
---

# PLK App

> [!important]
> Project folder index. Main detail note: [[PLK App]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

PWA untuk mengelola kegiatan dan anggota PKK dengan CRUD anggota, dashboard statistik, mobile-first UI, dan Turso/libSQL.

## Goals

- [ ] Kelola anggota PKK secara mobile-first
- [ ] Sediakan dashboard statistik dan search lokal
- [ ] Pertahankan UX ringan untuk low-end device

## Architecture

See main note: [[PLK App]].

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
- **Frameworks**: Vite, PWA Service Worker
- **Databases**: Turso/libSQL (SQLite compatible)
- **Services**: Turso cloud database
- **Tools/Ops**: @libsql/client/web, Vite build

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[PLK App]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/PLK App"
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

- See [[PLK App]] for project-specific gotchas and learnings.

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
