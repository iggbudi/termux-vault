---
type: project
status: active
title: "AIDIS Disposisi Surat"
slug: "aidis-disposisi-surat"
aliases:
  - aidis.my.id
  - www.aidis.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/aidis.my.id"
production-url: "https://aidis.my.id"
docs-url: ""
project-type: "disposisi surat / admin system"
priority: high
techstack:
  languages:
    - PHP
  frameworks:
    - Apache reverse proxy
    - Composer
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
  - lang/php
  - ops/apache
---

# AIDIS Disposisi Surat

> [!important]
> Project folder index untuk vhost `aidis.my.id`. Main detail note: [[AIDIS Disposisi Surat]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Sistem disposisi surat UNISBANK dengan public/admin app berbasis PHP.

## Vhost

| Item | Value |
|---|---|
| Domain | `aidis.my.id` |
| Aliases | `www.aidis.my.id` |
| Production URL | https://aidis.my.id |
| Source path | `/var/www/aidis.my.id` |
| DocumentRoot | `/var/www/aidis.my.id/public` |
| Reverse proxy | `-` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/aidis.my.id.conf`, `/etc/apache2/sites-enabled/aidis.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[AIDIS Disposisi Surat]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `aidis.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: PHP
- **Frameworks / Runtime**: PHP Native, Composer
- **Database / Storage**: not captured
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[AIDIS Disposisi Surat]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
