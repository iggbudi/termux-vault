---
type: project
status: active
title: "Lelangu Bitcoin Chart"
slug: "lelangu-bitcoin-chart"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/lelangu.my.id"
production-url: "https://lelangu.my.id"
docs-url: ""
project-type: "market-dashboard"
priority: medium
techstack:
  languages:
    - HTML
    - CSS
    - JavaScript
  frameworks:
    - Vanilla JS
    - Static HTML/CSS
  databases:
    - Browser localStorage for price alerts
  services:
    - Tokocrypto public kline API
    - Fallback kline endpoint
  tools:
    - Nginx
    - Certbot SSL
    - PHP-FPM available in vhost
tags:
  - project
  - vps
  - lang/javascript
  - lang/html
  - api/tokocrypto
  - type/market-dashboard
  - static-site
---

# Lelangu Bitcoin Chart

> [!important]
> Project folder index. Main detail note: [[Lelangu Bitcoin Chart]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

Static crypto market dashboard untuk Chart Bitcoin Tokocrypto. App menampilkan candlestick, watchlist, indikator teknikal, alert harga berbasis browser, dan backtest sederhana tanpa API key dan tanpa fitur trading.

## Goals

- [ ] Pantau harga/market Tokocrypto dari endpoint publik
- [ ] Tampilkan indikator MA20/MA50, RSI14, MACD, volume, support, resistance
- [ ] Sediakan alert harga lokal dan backtest strategi sederhana

## Architecture

See main note: [[Lelangu Bitcoin Chart]].

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

- **Languages**: HTML, CSS, JavaScript
- **Frameworks**: Vanilla JS, Static HTML/CSS
- **Databases/Storage**: Browser localStorage for price alerts
- **Services**: Tokocrypto public kline API, Fallback kline endpoint
- **Tools/Ops**: Nginx, Certbot SSL, PHP-FPM available in vhost

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[Lelangu Bitcoin Chart]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/Lelangu Bitcoin Chart"
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

- See [[Lelangu Bitcoin Chart]] for project-specific gotchas and learnings.

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
