---
type: project
status: active
title: "SafeSphere"
slug: "safesphere"
aliases:
  - safesphere.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/safesphere.my.id"
production-url: "https://safesphere.my.id"
docs-url: ""
project-type: "anti-bullying reporting app"
priority: high
techstack:
  languages:
    - JavaScript / Node.js
  frameworks:
    - Apache reverse proxy
  databases:
    - SQLite
  services:
    - Local API proxy
  tools:
    - Apache
    - Certbot/SSL
tags:
  - project
  - vps
  - runtime/nodejs
  - db/sqlite
  - ops/apache
---

# SafeSphere

> [!important]
> Project folder index untuk vhost `safesphere.my.id`. Main detail note: [[SafeSphere]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

SafeSphere anonymous anti-bullying reports dengan frontend publik dan API backend.

## Vhost

| Item | Value |
|---|---|
| Domain | `safesphere.my.id` |
| Aliases | `-` |
| Production URL | https://safesphere.my.id |
| Source path | `/var/www/safesphere.my.id` |
| DocumentRoot | `/var/www/safesphere.my.id/public` |
| Reverse proxy | `api http://127.0.0.1:3000/api/` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/safesphere.my.id.conf`, `/etc/apache2/sites-enabled/safesphere.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[SafeSphere]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `safesphere.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: JavaScript / Node.js
- **Frameworks / Runtime**: Static frontend, Node/Express API, SQLite (from prior scan)
- **Database / Storage**: SQLite
- **Services**: Local API proxy
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[SafeSphere]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
