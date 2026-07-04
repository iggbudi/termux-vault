---
type: project
status: active
title: "BotJB Nanariset"
slug: "botjb-nanariset"
aliases:
  - botjb.nanariset.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/botjb.nanariset.my.id"
production-url: "https://botjb.nanariset.my.id"
docs-url: ""
project-type: "bot / web utility"
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
  - ops/apache
---

# BotJB Nanariset

> [!important]
> Project folder index untuk vhost `botjb.nanariset.my.id`. Main detail note: [[BotJB Nanariset]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Subdomain botjb dengan public_html dan reverse proxy ke app lokal.

## Vhost

| Item | Value |
|---|---|
| Domain | `botjb.nanariset.my.id` |
| Aliases | `-` |
| Production URL | https://botjb.nanariset.my.id |
| Source path | `/var/www/botjb.nanariset.my.id` |
| DocumentRoot | `/var/www/botjb.nanariset.my.id/public_html` |
| Reverse proxy | `http://127.0.0.1:3011/` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/botjb.nanariset.my.id.conf`, `/etc/apache2/sites-enabled/botjb.nanariset.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[BotJB Nanariset]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `botjb.nanariset.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: PHP
- **Frameworks / Runtime**: Static/PHP public_html plus local app proxy
- **Database / Storage**: not captured
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[BotJB Nanariset]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
