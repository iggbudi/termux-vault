---
type: project
status: active
title: "Biro Jurnal"
slug: "biro-jurnal"
aliases:
  - birojurnal.com
  - www.birojurnal.com
owner: "iggbudi"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/birojurnal.com"
production-url: "https://birojurnal.com"
project-type: "public website"
priority: medium
techstack:
  languages:
    - HTML
    - PHP
  services:
    - Nginx
    - PHP-FPM
tags:
  - project
  - vps
  - lang/html
  - lang/php
  - ops/nginx
---

# Biro Jurnal

Project folder index untuk vhost `birojurnal.com`. Main detail note: [[Biro Jurnal]].

## Vhost

| Item | Value |
|---|---|
| Domain | `birojurnal.com` |
| Aliases | `www.birojurnal.com` |
| Production URL | https://birojurnal.com |
| Source path | `/var/www/birojurnal.com` |
| DocumentRoot | `/var/www/birojurnal.com/public` |
| Config | `/etc/nginx/conf.d/birojurnal.com.conf` |

## Current Tasks

- [ ] Confirm whether this site is static only or uses PHP endpoints.
- [ ] Add deployment/debug notes under `docs/` if this project changes often.
- [ ] Keep [[techstack]] aligned with source markers.

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
