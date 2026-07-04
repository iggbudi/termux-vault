---
type: project
status: active
title: "SIMPEL-U Telegram Bot"
slug: "simpel-u-telegram-bot"
aliases:
  - bot.shm.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/bot.shm.my.id"
production-url: "https://bot.shm.my.id"
docs-url: ""
project-type: "telegram bot / pi sdk"
priority: medium
techstack:
  languages:
    - TypeScript
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
  - lang/typescript
  - runtime/nodejs
  - ops/apache
---

# SIMPEL-U Telegram Bot

> [!important]
> Project folder index untuk vhost `bot.shm.my.id`. Main detail note: [[SIMPEL-U Telegram Bot]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Bot Telegram SIMPEL-U dengan build TypeScript dan runtime service lokal.

## Vhost

| Item | Value |
|---|---|
| Domain | `bot.shm.my.id` |
| Aliases | `-` |
| Production URL | https://bot.shm.my.id |
| Source path | `/var/www/bot.shm.my.id` |
| DocumentRoot | `-` |
| Reverse proxy | `http://127.0.0.1:3107/` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/bot.shm.my.id.conf`, `/etc/apache2/sites-enabled/bot.shm.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[SIMPEL-U Telegram Bot]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `bot.shm.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: TypeScript, JavaScript / Node.js
- **Frameworks / Runtime**: Node.js, TypeScript, Python requirements
- **Database / Storage**: not captured
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[SIMPEL-U Telegram Bot]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
