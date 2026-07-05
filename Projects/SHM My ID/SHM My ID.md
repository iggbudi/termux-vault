---
type: project-detail
status: active
title: "SHM My ID"
slug: "shm-my-id"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/shm.my.id"
production-url: "https://shm.my.id"
priority: medium
tags:
  - project
  - vps
  - lang/php
  - db/mariadb
  - ops/nginx
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# SHM My ID

## Overview

Custom PHP web application for `shm.my.id` with app, public, storage, migrations, tests, tools, vendor, and SQL schema markers.

## Server / Vhost

- **Domain**: `shm.my.id`
- **Aliases**: `www.shm.my.id`
- **Production URL**: https://shm.my.id
- **Source path**: `/var/www/shm.my.id`
- **DocumentRoot**: `/var/www/shm.my.id/public`
- **Nginx config**: `/etc/nginx/conf.d/shm.my.id.conf`
- **Runtime**: Nginx + PHP-FPM pool `www`
- **Detected markers**: `README.md`, `AGENTS.md`, `.env.example`, `schema.sql`, `public/index.php`, `vendor`

## Notes

- `.env` exists in source and must not be copied into this vault.
- Read source `AGENTS.md` before editing application code.
- `schema.sql` and migrations indicate relational database usage; confirm live database from config without recording credentials.

## Related

- [[README]]
- [[techstack]]
- [[roadmap]]
- [[VPS Projects]]
