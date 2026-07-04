---
type: project
status: active
title: "SIMPEL-U"
slug: "simpel-u"
aliases:
  - simpelu.my.id
  - www.simpelu.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/simpelu.my.id"
production-url: "https://simpelu.my.id"
docs-url: ""
project-type: "web application"
priority: medium
techstack:
  languages:
    - PHP
  frameworks:
    - Laravel
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
  - lang/php
  - ops/apache
---

# SIMPEL-U

> [!important]
> Project folder index untuk vhost `simpelu.my.id`. Main detail note: [[SIMPEL-U]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

Project SIMPEL-U dengan public web root dan struktur app/config/storage.

## Vhost

| Item | Value |
|---|---|
| Domain | `simpelu.my.id` |
| Aliases | `www.simpelu.my.id` |
| Production URL | https://simpelu.my.id |
| Source path | `/var/www/simpelu.my.id` |
| DocumentRoot | `/var/www/simpelu.my.id/public` |
| Reverse proxy | `-` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/simpelu.my.id.conf`, `/etc/apache2/sites-enabled/simpelu.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[SIMPEL-U]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `simpelu.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: PHP
- **Frameworks / Runtime**: PHP/Laravel-like structure or custom PHP app
- **Database / Storage**: not captured
- **Services**: Apache vhost
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[SIMPEL-U]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
