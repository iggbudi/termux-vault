---
type: project
status: active
title: "VibePlan AI"
slug: "vibeplan-ai"
aliases:
  - vibeplan.socai.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/vibeplan.socai.my.id"
production-url: "https://vibeplan.socai.my.id"
docs-url: ""
project-type: "ai planning app"
priority: high
techstack:
  languages:
    - not captured
  frameworks:
    - Laravel
    - Next.js
    - Apache reverse proxy
  databases:
    - not captured
  services:
    - Local API proxy
  tools:
    - Apache
    - Certbot/SSL
tags:
  - project
  - vps
  - fw/nextjs
  - fw/laravel
  - lang/typescript
  - ops/apache
---

# VibePlan AI

> [!important]
> Project folder index untuk vhost `vibeplan.socai.my.id`. Main detail note: [[VibePlan AI]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

VibePlan AI dengan frontend Next.js dan backend Laravel, dirutekan Apache.

## Vhost

| Item | Value |
|---|---|
| Domain | `vibeplan.socai.my.id` |
| Aliases | `-` |
| Production URL | https://vibeplan.socai.my.id |
| Source path | `/var/www/vibeplan.socai.my.id` |
| DocumentRoot | `/var/www/vibeplan.socai.my.id` |
| Reverse proxy | `frontend 3002, api/storage 8001` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/vibeplan.socai.my.id.conf`, `/etc/apache2/sites-enabled/vibeplan.socai.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[VibePlan AI]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `vibeplan.socai.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: not captured
- **Frameworks / Runtime**: Next.js frontend, Laravel backend
- **Database / Storage**: not captured
- **Services**: Local API proxy
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[VibePlan AI]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
