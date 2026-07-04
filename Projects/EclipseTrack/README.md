---
type: project
status: active
title: "EclipseTrack"
slug: "eclipsetrack"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/eclipsetrack.my.id"
production-url: "https://eclipsetrack.my.id"
docs-url: ""
project-type: "content-site"
priority: medium
techstack:
  languages:
    - PHP Native
  frameworks:
    - Procedural PHP includes
  databases:
    - Supabase/Postgres via REST/RPC with local fallback arrays
  services:
    - Google Search Console
    - Telegram SEO report
    - Supabase
  tools:
    - PHP cURL
    - sitemap.xml
    - robots.txt
tags:
  - project
  - vps
  - lang/php
  - db/supabase
  - api/google-search-console
  - type/content-site
  - seo
---

# EclipseTrack

> [!important]
> Project folder index. Main detail note: [[EclipseTrack]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

PHP/Supabase SEO content site tentang artikel ilmiah informatika, jurnal SINTA, kategori, jurnal profiles, admin CRUD, Search Console, dan SEO reporting.

## Goals

- [ ] Publikasi panduan artikel ilmiah informatika
- [ ] Kelola metadata artikel/jurnal via Supabase RPC
- [ ] Pantau SEO/Search Console dan sitemap quality

## Architecture

See main note: [[EclipseTrack]].

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

- **Languages**: PHP Native
- **Frameworks**: Procedural PHP includes
- **Databases**: Supabase/Postgres via REST/RPC with local fallback arrays
- **Services**: Google Search Console, Telegram SEO report, Supabase
- **Tools/Ops**: PHP cURL, sitemap.xml, robots.txt

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[EclipseTrack]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/EclipseTrack"
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

- See [[EclipseTrack]] for project-specific gotchas and learnings.

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
