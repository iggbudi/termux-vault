---
type: project
status: active
title: "Nana Research"
slug: "nana-research"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/nanariset.my.id"
production-url: "https://nanariset.my.id"
docs-url: ""
project-type: "landing-page"
priority: medium
techstack:
  languages:
    - PHP Native
    - HTML
    - JavaScript
  frameworks:
    - Tailwind CSS CDN
    - Font Awesome CDN
    - Vanilla JS
  databases:
    - File-based JSON storage in short-links.php
  services:
    - WhatsApp wa.me CTA
    - Google Fonts
    - Nginx reverse proxy for subapps
  tools:
    - Nginx
    - PHP-FPM
    - Certbot SSL
    - LOCK_EX file writes
tags:
  - project
  - vps
  - lang/php
  - lang/javascript
  - type/landing-page
  - tool/url-shortener
  - static-site
---

# Nana Research

> [!important]
> Project folder index. Main detail note: [[Nana Research]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

Landing page Nana Research untuk jasa pembuatan website/aplikasi UMKM, dengan tool short URL sederhana berbasis PHP dan storage file lokal. Domain ini juga menjadi host/proxy untuk subapp X Creator dan WA service.

## Goals

- [ ] Promosikan jasa website dan aplikasi untuk UMKM
- [ ] Sediakan short URL ringan untuk link promosi
- [ ] Menjadi root domain untuk beberapa subapp nanariset.my.id

## Architecture

See main note: [[Nana Research]].

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

- **Languages**: PHP Native, HTML, JavaScript
- **Frameworks**: Tailwind CSS CDN, Font Awesome CDN, Vanilla JS
- **Databases/Storage**: File-based JSON storage in short-links.php
- **Services**: WhatsApp wa.me CTA, Google Fonts, Nginx reverse proxy for subapps
- **Tools/Ops**: Nginx, PHP-FPM, Certbot SSL, LOCK_EX file writes

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[Nana Research]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/Nana Research"
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

- See [[Nana Research]] for project-specific gotchas and learnings.

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

- Added as remaining VPS vhost documentation.
