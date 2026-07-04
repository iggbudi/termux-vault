---
type: project
status: active
title: "CLAW Invoice"
slug: "claw-invoice"
aliases:
  - inv.nanariset.my.id
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/inv.nanariset.my.id"
production-url: "https://inv.nanariset.my.id"
docs-url: ""
project-type: "invoice / content workspace"
priority: medium
techstack:
  languages:
    - PHP
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

# CLAW Invoice

> [!important]
> Project folder index untuk vhost `inv.nanariset.my.id`. Main detail note: [[CLAW Invoice]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

CLAW / invoice workspace dengan root invoice dan API proxy lokal.

## Vhost

| Item | Value |
|---|---|
| Domain | `inv.nanariset.my.id` |
| Aliases | `-` |
| Production URL | https://inv.nanariset.my.id |
| Source path | `/var/www/inv.nanariset.my.id` |
| DocumentRoot | `/var/www/inv.nanariset.my.id/repo/invoice` |
| Reverse proxy | `api http://127.0.0.1:3001/api` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/inv.nanariset.my.id.conf`, `/etc/apache2/sites-enabled/inv.nanariset.my.id-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[CLAW Invoice]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `inv.nanariset.my.id`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: PHP
- **Frameworks / Runtime**: Static/PHP invoice workspace plus API proxy
- **Database / Storage**: not captured
- **Services**: Local API proxy
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Current Tasks

- [ ] Review main project note [[CLAW Invoice]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
