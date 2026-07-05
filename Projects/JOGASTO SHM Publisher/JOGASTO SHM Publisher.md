---
type: project-detail
status: active
title: "JOGASTO SHM Publisher"
slug: "jogasto-shm-publisher"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/jogasto.shmpublisher.com"
production-url: "https://jogasto.shmpublisher.com"
priority: medium
tags:
  - project
  - vps
  - lang/php
  - fw/ojs
  - ops/nginx
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# JOGASTO SHM Publisher

## Overview

OJS-style journal vhost for `jogasto.shmpublisher.com`.

## Server / Vhost

- **Domain**: `jogasto.shmpublisher.com`
- **Production URL**: https://jogasto.shmpublisher.com
- **Source path**: `/var/www/jogasto.shmpublisher.com`
- **DocumentRoot**: `/var/www/jogasto.shmpublisher.com/current`
- **Files/data directory**: `/var/www/filesjogasto`
- **Nginx config**: `/etc/nginx/conf.d/jogasto.shmpublisher.com.conf`
- **Runtime**: Nginx + PHP-FPM pool `ojs`
- **Detected markers**: `AGENTS.md`, `README.md`, `config.inc.php`, `index.php`

## Notes

- Treat `config.inc.php` as sensitive.
- Data directory is separate from document root.

## Related

- [[README]]
- [[techstack]]
- [[roadmap]]
- [[VPS Projects]]
