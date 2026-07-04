---
type: project
status: active
title: "AI Study Buddy"
slug: "ai-study-buddy"
aliases:
  - studdybuddy.socai.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/studdybuddy.socai.my.id"
production-url: "https://studdybuddy.socai.my.id"
docs-url: ""
project-type: "ai learning assistant"
priority: medium
techstack:
  languages:
    - not captured
  frameworks:
    - Laravel
    - Apache reverse proxy
  databases:
    - MongoDB
  services:
    - Groq API
  tools:
    - Apache
    - Certbot/SSL
tags:
  - project
  - vps
  - lang/php
  - fw/laravel
  - api/groq
  - ops/apache
---

# AI Study Buddy

> [!important]
> Project folder index untuk vhost `studdybuddy.socai.my.id`. Main detail note: [[AI Study Buddy]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

AI Study Buddy berbasis Laravel + MongoDB + Groq API.

## Vhost

| Item | Value |
|---|---|
| Domain | `studdybuddy.socai.my.id` |
| Aliases | `-` |
| Production URL | https://studdybuddy.socai.my.id |
| Source path | `/var/www/studdybuddy.socai.my.id` |
| DocumentRoot | `/var/www/studdybuddy.socai.my.id/public` |
| Reverse proxy | `-` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/studdybuddy.socai.my.id.conf`, `/etc/apache2/sites-enabled/studdybuddy.socai.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[AI Study Buddy]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `studdybuddy.socai.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: not captured
- **Frameworks / Runtime**: Laravel, MongoDB, Groq API
- **Database / Storage**: MongoDB
- **Services**: Groq API
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[AI Study Buddy]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
