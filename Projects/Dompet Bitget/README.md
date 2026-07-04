---
type: project
status: active
title: "Dompet Bitget"
slug: "dompet-bitget"
aliases:
  - dompet.lelangu.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/dompet.lelangu.my.id"
production-url: "https://dompet.lelangu.my.id"
docs-url: ""
project-type: "crypto wallet/dashboard"
priority: medium
techstack:
  languages:
    - JavaScript / Node.js
  frameworks:
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
  - runtime/nodejs
  - lang/typescript
  - ops/apache
---

# Dompet Bitget

> [!important]
> Project folder index untuk vhost `dompet.lelangu.my.id`. Main detail note: [[Dompet Bitget]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Dompet Bitget dengan backend dan frontend terpisah, diproxy ke service lokal.

## Vhost

| Item | Value |
|---|---|
| Domain | `dompet.lelangu.my.id` |
| Aliases | `-` |
| Production URL | https://dompet.lelangu.my.id |
| Source path | `/var/www/dompet.lelangu.my.id` |
| DocumentRoot | `-` |
| Reverse proxy | `http://localhost:3456/` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/dompet.lelangu.my.id.conf`, `/etc/apache2/sites-enabled/dompet.lelangu.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[Dompet Bitget]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `dompet.lelangu.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: JavaScript / Node.js
- **Frameworks / Runtime**: Node.js fullstack, backend/frontend packages
- **Database / Storage**: not captured
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[Dompet Bitget]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
