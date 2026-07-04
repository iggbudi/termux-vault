---
type: project
status: maintained
title: "VPS Projects"
slug: "vps-projects"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www"
production-url: ""
docs-url: ""
project-type: "inventory"
priority: medium
techstack:
  languages:
    - Mixed
  frameworks:
    - Mixed
  databases:
    - Mixed
  services:
    - Mixed
  tools:
    - find
    - git
    - rtk
tags:
  - project
  - vps
  - inventory
---

# VPS Projects

> [!important]
> Project folder index. Main detail note: [[VPS Projects]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

Inventory semua project utama yang ditemukan di VPS `/var/www`, dipakai sebagai entry point dokumentasi project live/development.

## Goals

- [ ] Jaga daftar project VPS tetap up to date
- [ ] Tautkan semua project ke note detail
- [ ] Prioritaskan dokumentasi project aktif

## Architecture

See main note: [[VPS Projects]].

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

- **Languages**: Mixed
- **Frameworks**: Mixed
- **Databases**: Mixed
- **Services**: Mixed
- **Tools/Ops**: find, git, rtk

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[VPS Projects]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/VPS Projects"
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

- See [[VPS Projects]] for project-specific gotchas and learnings.

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
