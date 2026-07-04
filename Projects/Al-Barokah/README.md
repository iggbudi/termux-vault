---
type: project
status: active
title: "Al-Barokah"
slug: "al-barokah"
aliases:
  - al-barokah.my.id
  - www.al-barokah.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/al-barokah.my.id"
production-url: "https://al-barokah.my.id"
docs-url: ""
project-type: "masjid website/admin system"
priority: medium
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

# Al-Barokah

> [!important]
> Project folder index untuk vhost `al-barokah.my.id`. Main detail note: [[Al-Barokah]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Website dan admin system Masjid Al-Barokah.

## Vhost

| Item | Value |
|---|---|
| Domain | `al-barokah.my.id` |
| Aliases | `www.al-barokah.my.id` |
| Production URL | https://al-barokah.my.id |
| Source path | `/var/www/al-barokah.my.id` |
| DocumentRoot | `/var/www/al-barokah.my.id/public` |
| Reverse proxy | `-` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/al-barokah.my.id.conf`, `/etc/apache2/sites-enabled/al-barokah.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[Al-Barokah]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `al-barokah.my.id`
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

- [ ] Review main project note [[Al-Barokah]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
