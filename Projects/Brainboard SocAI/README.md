---
type: project
status: active
title: "Brainboard SocAI"
slug: "brainboard-socai"
aliases:
  - brainboard.socai.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/brainboard.socai.my.id"
production-url: "https://brainboard.socai.my.id"
docs-url: ""
project-type: "laravel web app"
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

# Brainboard SocAI

> [!important]
> Project folder index untuk vhost `brainboard.socai.my.id`. Main detail note: [[Brainboard SocAI]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Aplikasi Laravel Brainboard pada subdomain SocAI.

## Vhost

| Item | Value |
|---|---|
| Domain | `brainboard.socai.my.id` |
| Aliases | `-` |
| Production URL | https://brainboard.socai.my.id |
| Source path | `/var/www/brainboard.socai.my.id` |
| DocumentRoot | `/var/www/brainboard.socai.my.id/public` |
| Reverse proxy | `-` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/brainboard.socai.my.id.conf`, `/etc/apache2/sites-enabled/brainboard.socai.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[Brainboard SocAI]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `brainboard.socai.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: PHP
- **Frameworks / Runtime**: Laravel, PHP, Composer, Vite build assets
- **Database / Storage**: not captured
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[Brainboard SocAI]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
