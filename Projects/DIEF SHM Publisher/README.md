---
type: project
status: active
title: "DIEF SHM Publisher"
slug: "dief-shm-publisher"
aliases:
  - dief.shmpublisher.com
owner: "iggbudi"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/dief"
production-url: "https://dief.shmpublisher.com"
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

# DIEF SHM Publisher

Project folder index untuk vhost `dief.shmpublisher.com`. Main detail note: [[DIEF SHM Publisher]].

## Vhost

| Item | Value |
|---|---|
| Domain | `dief.shmpublisher.com` |
| Production URL | https://dief.shmpublisher.com |
| Source path | `/var/www/dief` |
| DocumentRoot | `/var/www/dief/public_html` |
| Data path | `/var/www/dief/diefdata` |
| Config | `/etc/nginx/conf.d/dief.shmpublisher.com.conf` |
| PHP-FPM | `/run/php-fpm/dief.sock` |

## Current Tasks

- [ ] Confirm OJS version from source/admin, not from memory.
- [ ] Document backup and restore workflow.
- [ ] Keep config secrets out of vault.

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
