---
type: project
status: active
title: "JOGASTO SHM Publisher"
slug: "jogasto-shm-publisher"
aliases:
  - jogasto.shmpublisher.com
owner: "iggbudi"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/jogasto.shmpublisher.com"
production-url: "https://jogasto.shmpublisher.com"
project-type: "journal platform"
priority: medium
techstack:
  languages:
    - PHP
  frameworks:
    - OJS
  services:
    - Nginx
    - PHP-FPM
tags:
  - project
  - vps
  - lang/php
  - fw/ojs
  - ops/nginx
---

# JOGASTO SHM Publisher

Project folder index untuk vhost `jogasto.shmpublisher.com`. Main detail note: [[JOGASTO SHM Publisher]].

## Vhost

| Item | Value |
|---|---|
| Domain | `jogasto.shmpublisher.com` |
| Production URL | https://jogasto.shmpublisher.com |
| Source path | `/var/www/jogasto.shmpublisher.com` |
| DocumentRoot | `/var/www/jogasto.shmpublisher.com/current` |
| Data path | `/var/www/filesjogasto` |
| Config | `/etc/nginx/conf.d/jogasto.shmpublisher.com.conf` |
| PHP-FPM | `/run/php-fpm/ojs.sock` |

## Current Tasks

- [ ] Confirm OJS version and plugin list.
- [ ] Document backup/restore steps.
- [ ] Keep secrets out of vault.

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
