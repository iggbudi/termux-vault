---
type: project
status: active
title: "SHM My ID"
slug: "shm-my-id"
aliases:
  - shm.my.id
  - www.shm.my.id
owner: "iggbudi"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/shm.my.id"
production-url: "https://shm.my.id"
project-type: "custom PHP web application"
priority: medium
techstack:
  languages:
    - PHP
  databases:
    - MariaDB
  services:
    - Nginx
    - PHP-FPM
tags:
  - project
  - vps
  - lang/php
  - db/mariadb
  - ops/nginx
---

# SHM My ID

Project folder index untuk vhost `shm.my.id`. Main detail note: [[SHM My ID]].

## Vhost

| Item | Value |
|---|---|
| Domain | `shm.my.id` |
| Aliases | `www.shm.my.id` |
| Production URL | https://shm.my.id |
| Source path | `/var/www/shm.my.id` |
| DocumentRoot | `/var/www/shm.my.id/public` |
| Config | `/etc/nginx/conf.d/shm.my.id.conf` |
| PHP-FPM | `/run/php-fpm/www.sock` |

## Current Tasks

- [ ] Read source `AGENTS.md` before code changes.
- [ ] Confirm framework/dependency details from source files.
- [ ] Keep `.env` and credentials out of vault.

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
