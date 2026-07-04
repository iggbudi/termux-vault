---
type: project
status: active
title: "Arisan PKK"
slug: "arisan-pkk"
aliases:
  - arisanpkk.web.id
  - www.arisanpkk.web.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/arisanpkk.web.id"
production-url: "https://arisanpkk.web.id"
docs-url: ""
project-type: "pkk activity app"
priority: medium
techstack:
  languages:
    - TypeScript
    - JavaScript / Node.js
  frameworks:
    - Vite
    - Apache reverse proxy
  databases:
    - not captured
  services:
    - Apache vhost
  tools:
    - Apache
    - Certbot/SSL
tags:
  - project
  - vps
  - lang/typescript
  - fw/vite
  - ops/apache
---

# Arisan PKK

> [!important]
> Project folder index untuk vhost `arisanpkk.web.id`. Main detail note: [[Arisan PKK]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Aplikasi Kegiatan PKK yang berjalan di service lokal dan diproxy Apache.

## Vhost

| Item | Value |
|---|---|
| Domain | `arisanpkk.web.id` |
| Aliases | `www.arisanpkk.web.id` |
| Production URL | https://arisanpkk.web.id |
| Source path | `/var/www/arisanpkk.web.id` |
| DocumentRoot | `-` |
| Reverse proxy | `http://localhost:3100/` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/arisanpkk.web.id.conf`, `/etc/apache2/sites-enabled/arisanpkk.web.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[Arisan PKK]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `arisanpkk.web.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: TypeScript, JavaScript / Node.js
- **Frameworks / Runtime**: Vite, TypeScript, Node runtime proxy
- **Database / Storage**: not captured
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[Arisan PKK]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
