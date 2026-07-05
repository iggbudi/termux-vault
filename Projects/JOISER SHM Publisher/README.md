---
type: project
status: active
title: "JOISER SHM Publisher"
slug: "joiser-shm-publisher"
aliases:
  - joiser.shmpublisher.com
owner: "iggbudi"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/joiser.shmpublisher.com"
production-url: "https://joiser.shmpublisher.com"
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

# JOISER SHM Publisher

Project folder index untuk vhost `joiser.shmpublisher.com`. Main detail note: [[JOISER SHM Publisher]].

## Vhost

| Item | Value |
|---|---|
| Domain | `joiser.shmpublisher.com` |
| Production URL | https://joiser.shmpublisher.com |
| Source path | `/var/www/joiser.shmpublisher.com` |
| DocumentRoot | `/var/www/joiser.shmpublisher.com/current` |
| Data path | `/var/www/joiser.shmpublisher.com/files` |
| Config | `/etc/nginx/conf.d/joiser.shmpublisher.com.conf` |
| PHP-FPM | `/run/php-fpm/ojs.sock` |

## Current Tasks

- [ ] Confirm OJS version and plugin list.
- [ ] Document backup/restore steps.
- [ ] Keep secrets out of vault.

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
