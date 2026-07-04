---
type: project
status: active
title: "Cmaestro BengkelBot"
slug: "cmaestro-bengkelbot"
aliases:
  - cmaestro.my.id
  - www.cmaestro.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/cmaestro.my.id"
production-url: "https://cmaestro.my.id"
docs-url: ""
project-type: "bot / web service"
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
  - ops/apache
---

# Cmaestro BengkelBot

> [!important]
> Project folder index untuk vhost `cmaestro.my.id`. Main detail note: [[Cmaestro BengkelBot]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

BengkelBot pada domain cmaestro.my.id dengan repo Node dan proxy lokal.

## Vhost

| Item | Value |
|---|---|
| Domain | `cmaestro.my.id` |
| Aliases | `www.cmaestro.my.id` |
| Production URL | https://cmaestro.my.id |
| Source path | `/var/www/cmaestro.my.id` |
| DocumentRoot | `/var/www/cmaestro.my.id/public` |
| Reverse proxy | `http://127.0.0.1:3012/` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/cmaestro.my.id.conf`, `/etc/apache2/sites-enabled/cmaestro.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[Cmaestro BengkelBot]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `cmaestro.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: JavaScript / Node.js
- **Frameworks / Runtime**: Node.js, package repo, Apache proxy
- **Database / Storage**: not captured
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[Cmaestro BengkelBot]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
