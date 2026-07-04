---
type: project
status: active
title: "EduGuide SocAI"
slug: "eduguide-socai"
aliases:
  - eduguide.socai.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/eduguide.socai.my.id"
production-url: "https://eduguide.socai.my.id"
docs-url: ""
project-type: "education guide app"
priority: medium
techstack:
  languages:
    - not captured
  frameworks:
    - Apache reverse proxy
  databases:
    - not captured
  services:
    - Local API proxy
  tools:
    - Apache
    - Certbot/SSL
tags:
  - project
  - vps
  - ops/apache
---

# EduGuide SocAI

> [!important]
> Project folder index untuk vhost `eduguide.socai.my.id`. Main detail note: [[EduGuide SocAI]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

EduGuide SocAI dengan Apache sebagai router frontend, API, dan storage.

## Vhost

| Item | Value |
|---|---|
| Domain | `eduguide.socai.my.id` |
| Aliases | `-` |
| Production URL | https://eduguide.socai.my.id |
| Source path | `/var/www/eduguide.socai.my.id` |
| DocumentRoot | `-` |
| Reverse proxy | `frontend 3003, api/storage 8003` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/eduguide.socai.my.id.conf`, `/etc/apache2/sites-enabled/eduguide.socai.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[EduGuide SocAI]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `eduguide.socai.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: not captured
- **Frameworks / Runtime**: Split frontend/backend reverse proxy
- **Database / Storage**: not captured
- **Services**: Local API proxy
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[EduGuide SocAI]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
