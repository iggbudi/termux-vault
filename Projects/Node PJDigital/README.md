---
type: project
status: active
title: "Node PJDigital"
slug: "node-pjdigital"
aliases:
  - node.pjdigital.top
owner: "iggbudi"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/ojs"
production-url: "https://node.pjdigital.top"
project-type: "journal platform / publisher landing"
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

# Node PJDigital

Project folder index untuk vhost `node.pjdigital.top`. Main detail note: [[Node PJDigital]].

## Vhost

| Item | Value |
|---|---|
| Domain | `node.pjdigital.top` |
| Production URL | https://node.pjdigital.top |
| Source path | `/var/www/ojs` |
| DocumentRoot | `/var/www/ojs` |
| Config | `/etc/nginx/conf.d/node.pjdigital.top.conf` |
| PHP-FPM | `/run/php-fpm/ojs.sock` |
| Special route | `/publisher/index.html` for `/` |

## Current Tasks

- [ ] Confirm intended purpose of `node.pjdigital.top` naming.
- [ ] Document publisher landing behavior.
- [ ] Keep secrets out of vault.

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
