---
type: project-detail
status: active
title: "JOHMPE SHM Publisher"
slug: "johmpe-shm-publisher"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/johmpe.shmpublisher.com"
production-url: "https://johmpe.shmpublisher.com"
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

# JOHMPE SHM Publisher

## Overview

OJS-style journal vhost for `johmpe.shmpublisher.com`.

## Server / Vhost

- **Domain**: `johmpe.shmpublisher.com`
- **Production URL**: https://johmpe.shmpublisher.com
- **Source path**: `/var/www/johmpe.shmpublisher.com`
- **DocumentRoot**: `/var/www/johmpe.shmpublisher.com/current`
- **Files/data directory**: `/var/www/filesjohmpe`
- **Nginx config**: `/etc/nginx/conf.d/johmpe.shmpublisher.com.conf`
- **Runtime**: Nginx + PHP-FPM pool `ojs`
- **Detected markers**: `README.md`, `config.inc.php`, `index.php`

## Notes

- Treat `config.inc.php` as sensitive.
- Data directory is separate from document root.

## Related

- [[README]]
- [[techstack]]
- [[roadmap]]
- [[VPS Projects]]
