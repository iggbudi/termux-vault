---
type: project
status: active
title: "SocAI"
slug: "socai"
aliases:
  - socai.my.id
  - www.socai.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/socai.my.id"
production-url: "https://socai.my.id"
docs-url: ""
project-type: "ai content automation"
priority: high
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
  - type/multi-agent
  - ops/apache
---

# SocAI

> [!important]
> Project folder index untuk vhost `socai.my.id`. Main detail note: [[SocAI]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Autonomous AI Agent untuk otomasi konten media sosial.

## Vhost

| Item | Value |
|---|---|
| Domain | `socai.my.id` |
| Aliases | `www.socai.my.id` |
| Production URL | https://socai.my.id |
| Source path | `/var/www/socai.my.id` |
| DocumentRoot | `/var/www/socai.my.id` |
| Reverse proxy | `http://127.0.0.1:3010/` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/socai.my.id.conf`, `/etc/apache2/sites-enabled/socai.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[SocAI]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `socai.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: JavaScript / Node.js
- **Frameworks / Runtime**: Node.js, autonomous AI social content app
- **Database / Storage**: not captured
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[SocAI]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
