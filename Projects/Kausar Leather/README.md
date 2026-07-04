---
type: project
status: active
title: "Kausar Leather"
slug: "kausar-leather"
aliases:
  - kl.socai.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/kl.socai.my.id"
production-url: "https://kl.socai.my.id"
docs-url: ""
project-type: "landing/admin commerce site"
priority: medium
techstack:
  languages:
    - PHP
  frameworks:
    - Apache reverse proxy
  databases:
    - MySQL/MariaDB
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

# Kausar Leather

> [!important]
> Project folder index untuk vhost `kl.socai.my.id`. Main detail note: [[Kausar Leather]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Landing dan admin setup Kausar Leather.

## Vhost

| Item | Value |
|---|---|
| Domain | `kl.socai.my.id` |
| Aliases | `-` |
| Production URL | https://kl.socai.my.id |
| Source path | `/var/www/kl.socai.my.id` |
| DocumentRoot | `/var/www/kl.socai.my.id` |
| Reverse proxy | `-` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/kl.socai.my.id.conf`, `/etc/apache2/sites-enabled/kl.socai.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[Kausar Leather]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `kl.socai.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: PHP
- **Frameworks / Runtime**: PHP Native, MySQL likely, admin/dashboard folders
- **Database / Storage**: MySQL/MariaDB
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[Kausar Leather]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
