---
type: project
status: active
title: "Ruang Belajar Terbuka"
slug: "ruang-belajar-terbuka"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: "https://github.com/iggbudi/dwibudi.my.id.git"
source-path: "/var/www/dwibudi.my.id"
production-url: "https://dwibudi.my.id"
docs-url: ""
project-type: "lms"
priority: high
techstack:
  languages:
    - PHP 8.0+
  frameworks:
    - Vanilla HTML/CSS/JS
    - Quill.js
  databases:
    - MySQL 5.7+ / MariaDB 10.3+
  services:
    - Google OAuth 2.0
    - OpenAI Chat Completions API
  tools:
    - Nginx + PHP-FPM
    - PDO
    - cURL
    - GD
    - fileinfo
tags:
  - project
  - vps
  - lang/php
  - db/mysql
  - api/google-oauth
  - api/openai
  - type/lms
---

# Ruang Belajar Terbuka

> [!important]
> Project folder index. Main detail note: [[Ruang Belajar Terbuka]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

Platform e-learning PHP SSR untuk materi perkuliahan, login mahasiswa, tugas, nilai, presensi, dan admin panel.

## Goals

- [ ] Publikasi materi kuliah dengan pretty URL
- [ ] Kelola enrollment, tugas, nilai, dan presensi mahasiswa
- [ ] Bantu admin membuat materi via OpenAI API

## Architecture

See main note: [[Ruang Belajar Terbuka]].

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
- **Frameworks**: Vanilla HTML/CSS/JS, Quill.js
- **Databases**: MySQL 5.7+ / MariaDB 10.3+
- **Services**: Google OAuth 2.0, OpenAI Chat Completions API
- **Tools/Ops**: Nginx + PHP-FPM, PDO, cURL, GD, fileinfo

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[Ruang Belajar Terbuka]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/Ruang Belajar Terbuka"
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

- See [[Ruang Belajar Terbuka]] for project-specific gotchas and learnings.

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
