---
type: project
status: archived
title: "Toko Curhat"
slug: "toko-curhat"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "~/crewet/tokocurhat/"
production-url: ""
docs-url: ""
project-type: "mini-app"
priority: low
techstack:
  languages:
    - Deno 2.9.0 / TypeScript
  frameworks:
    - Deno.serve built-in
  databases:
    - Deno KV
  services:
    - none
  tools:
    - Deno built-in runtime tools
tags:
  - project
  - lang/deno
  - db/deno-kv
  - type/mini-app
---

# Toko Curhat

> [!important]
> Project folder index. Main detail note: [[Toko Curhat]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

Mini web app curhat anonim dengan auto-balas quote bijak, dibuat untuk eksplorasi Deno dan Deno KV.

## Goals

- [ ] Submit curhat anonim
- [ ] Auto-balas quote bijak
- [ ] Eksplorasi zero-dependency Deno app

## Architecture

See main note: [[Toko Curhat]].

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

- **Languages**: Deno 2.9.0 / TypeScript
- **Frameworks**: Deno.serve built-in
- **Databases**: Deno KV
- **Services**: none
- **Tools/Ops**: Deno built-in runtime tools

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[Toko Curhat]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/Toko Curhat"
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

- See [[Toko Curhat]] for project-specific gotchas and learnings.

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
