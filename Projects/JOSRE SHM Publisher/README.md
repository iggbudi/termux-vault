---
type: project
status: active
title: "JOSRE SHM Publisher"
slug: "josre-shm-publisher"
aliases:
  - josre.shmpublisher.com
owner: "iggbudi"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/josre.shmpublisher.com"
production-url: "https://josre.shmpublisher.com"
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

# JOSRE SHM Publisher

Project folder index untuk vhost `josre.shmpublisher.com`. Main detail note: [[JOSRE SHM Publisher]].

## Vhost

| Item | Value |
|---|---|
| Domain | `josre.shmpublisher.com` |
| Production URL | https://josre.shmpublisher.com |
| Source path | `/var/www/josre.shmpublisher.com` |
| DocumentRoot | `/var/www/josre.shmpublisher.com/current` |
| Data path | `/var/www/filesjosre` |
| Config | `/etc/nginx/conf.d/josre.shmpublisher.com.conf` |
| PHP-FPM | `/run/php-fpm/ojs.sock` |

## Current Tasks

- [ ] Confirm OJS version and plugin list.
- [ ] Document backup/restore steps.
- [ ] Keep secrets out of vault.

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
