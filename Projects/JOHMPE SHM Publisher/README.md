---
type: project
status: active
title: "JOHMPE SHM Publisher"
slug: "johmpe-shm-publisher"
aliases:
  - johmpe.shmpublisher.com
owner: "iggbudi"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/johmpe.shmpublisher.com"
production-url: "https://johmpe.shmpublisher.com"
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

# JOHMPE SHM Publisher

Project folder index untuk vhost `johmpe.shmpublisher.com`. Main detail note: [[JOHMPE SHM Publisher]].

## Vhost

| Item | Value |
|---|---|
| Domain | `johmpe.shmpublisher.com` |
| Production URL | https://johmpe.shmpublisher.com |
| Source path | `/var/www/johmpe.shmpublisher.com` |
| DocumentRoot | `/var/www/johmpe.shmpublisher.com/current` |
| Data path | `/var/www/filesjohmpe` |
| Config | `/etc/nginx/conf.d/johmpe.shmpublisher.com.conf` |
| PHP-FPM | `/run/php-fpm/ojs.sock` |

## Current Tasks

- [ ] Confirm OJS version and plugin list.
- [ ] Document backup/restore steps.
- [ ] Keep secrets out of vault.

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
