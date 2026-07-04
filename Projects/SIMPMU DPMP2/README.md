---
type: project
status: active
title: "SIMPMU DPMP2"
slug: "simpmu-dpmp2"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: "https://github.com/iggbudi/dpmp2"
source-path: "/var/www/dpmp2.dwibudi.my.id"
production-url: "https://dpmp2.dwibudi.my.id"
docs-url: ""
project-type: "quality-assurance-system"
priority: high
techstack:
  languages:
    - PHP 8.x
  frameworks:
    - Bootstrap 5.3.2
  databases:
    - MySQL 8.x / MariaDB 10.x
  services:
    - Email/WhatsApp notification queue
  tools:
    - Playwright @playwright/test ^1.61.1
    - Nginx/Apache
    - rtk
tags:
  - project
  - vps
  - lang/php
  - db/mysql
  - db/mariadb
  - ops/playwright
  - type/quality-assurance
---

# SIMPMU DPMP2

> [!important]
> Project folder index. Main detail note: [[SIMPMU DPMP2]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

Sistem Informasi Penjaminan Mutu untuk monitoring tridarma, evaluasi, review UJM, master data, dan pelaporan mutu akademik.

## Goals

- [ ] Kelola monitoring tridarma lintas fakultas/prodi
- [ ] Sediakan review UJM dan laporan/export yang konsisten
- [ ] Pertahankan security hardening dan regression QA

## Architecture

See main note: [[SIMPMU DPMP2]].

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

- **Languages**: PHP 8.x
- **Frameworks**: Bootstrap 5.3.2
- **Databases**: MySQL 8.x / MariaDB 10.x
- **Services**: Email/WhatsApp notification queue
- **Tools/Ops**: Playwright @playwright/test ^1.61.1, Nginx/Apache, rtk

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[SIMPMU DPMP2]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/SIMPMU DPMP2"
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

- See [[SIMPMU DPMP2]] for project-specific gotchas and learnings.

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
