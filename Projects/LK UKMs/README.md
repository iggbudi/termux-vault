---
type: project
status: active
title: "LK UKMs"
slug: "lk-ukms"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/lk.pjdigital.top"
production-url: "https://lk.pjdigital.top"
docs-url: ""
project-type: "proposal-lpj-system"
priority: high
techstack:
  languages:
    - PHP 8.0+
  frameworks:
    - Tailwind CSS CDN
    - PWA service worker
  databases:
    - MySQL/MariaDB
  services:
    - WhatsApp notification
    - Gmail SMTP
  tools:
    - Composer
    - TCPDF ^6.10
    - endroid/qr-code ^6.0
    - PHPMailer ^6.9
    - PhpSpreadsheet ^2.0
tags:
  - project
  - vps
  - lang/php
  - db/mysql
  - db/mariadb
  - type/pwa
  - type/internal-tool
---

# LK UKMs

> [!important]
> Project folder index. Main detail note: [[LK UKMs]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

Sistem proposal, LPJ, surat, disposisi, pengumuman, approval chain, dan administrasi UKM.

## Goals

- [ ] Kelola proposal dan LPJ UKM end-to-end
- [ ] Sediakan surat/disposisi dan approval multi-role
- [ ] Pertahankan PWA/mobile UX dan notifikasi

## Architecture

See main note: [[LK UKMs]].

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

- **Languages**: PHP 8.0+
- **Frameworks**: Tailwind CSS CDN, PWA service worker
- **Databases**: MySQL/MariaDB
- **Services**: WhatsApp notification, Gmail SMTP
- **Tools/Ops**: Composer, TCPDF ^6.10, endroid/qr-code ^6.0, PHPMailer ^6.9, PhpSpreadsheet ^2.0

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[LK UKMs]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/LK UKMs"
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

- See [[LK UKMs]] for project-specific gotchas and learnings.

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
