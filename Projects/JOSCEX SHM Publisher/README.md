---
type: project
status: active
title: "JOSCEX SHM Publisher"
slug: "joscex-shm-publisher"
aliases:
  - joscex.shmpublisher.com
owner: "iggbudi"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/joscex"
production-url: "https://joscex.shmpublisher.com"
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

# JOSCEX SHM Publisher

Project folder index untuk vhost `joscex.shmpublisher.com`. Main detail note: [[JOSCEX SHM Publisher]].

## Vhost

| Item | Value |
|---|---|
| Domain | `joscex.shmpublisher.com` |
| Production URL | https://joscex.shmpublisher.com |
| Source path | `/var/www/joscex` |
| DocumentRoot | `/var/www/joscex` |
| Data path | `/var/www/filesjoscex` |
| Config | `/etc/nginx/conf.d/joscex.shmpublisher.com.conf` |
| PHP-FPM | `/run/php-fpm/ojs.sock` |

## Current Tasks

- [ ] Read source `AGENTS.md` before code changes.
- [ ] Confirm OJS version and plugin list.
- [ ] Document backup/restore steps.

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
