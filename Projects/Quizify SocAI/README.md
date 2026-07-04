---
type: project
status: active
title: "Quizify SocAI"
slug: "quizify-socai"
aliases:
  - quizify.socai.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/quizify.socai.my.id"
production-url: "https://quizify.socai.my.id"
docs-url: ""
project-type: "quiz / learning app"
priority: medium
techstack:
  languages:
    - PHP
  frameworks:
    - Laravel
    - Vite
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
  - fw/laravel
  - ops/apache
---

# Quizify SocAI

> [!important]
> Project folder index untuk vhost `quizify.socai.my.id`. Main detail note: [[Quizify SocAI]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Aplikasi Laravel Quizify di subdomain SocAI.

## Vhost

| Item | Value |
|---|---|
| Domain | `quizify.socai.my.id` |
| Aliases | `-` |
| Production URL | https://quizify.socai.my.id |
| Source path | `/var/www/quizify.socai.my.id` |
| DocumentRoot | `/var/www/quizify.socai.my.id/public` |
| Reverse proxy | `-` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/quizify.socai.my.id.conf`, `/etc/apache2/sites-enabled/quizify.socai.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[Quizify SocAI]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `quizify.socai.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: PHP
- **Frameworks / Runtime**: Laravel, PHP, Composer, Vite
- **Database / Storage**: not captured
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[Quizify SocAI]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
