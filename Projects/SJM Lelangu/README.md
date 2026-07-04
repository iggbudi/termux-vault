---
type: project
status: active
title: "SJM Lelangu"
slug: "sjm-lelangu"
aliases:
  - sjmlelang.com
  - www.sjmlelang.com
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/sjmlelang.com"
production-url: "https://sjmlelang.com"
docs-url: ""
project-type: "auction platform"
priority: medium
techstack:
  languages:
    - PHP
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
  - lang/php
  - ops/apache
---

# SJM Lelangu

> [!important]
> Project folder index untuk vhost `sjmlelang.com`. Main detail note: [[SJM Lelangu]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Platform lelang online berbasis waktu Lelangu/SJM.

## Vhost

| Item | Value |
|---|---|
| Domain | `sjmlelang.com` |
| Aliases | `www.sjmlelang.com` |
| Production URL | https://sjmlelang.com |
| Source path | `/var/www/sjmlelang.com` |
| DocumentRoot | `/var/www/sjmlelang.com` |
| Reverse proxy | `-` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/sjmlelang.com.conf`, `/etc/apache2/sites-enabled/sjmlelang.com-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[SJM Lelangu]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `sjmlelang.com`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: PHP
- **Frameworks / Runtime**: PHP Native auction platform
- **Database / Storage**: not captured
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[SJM Lelangu]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
