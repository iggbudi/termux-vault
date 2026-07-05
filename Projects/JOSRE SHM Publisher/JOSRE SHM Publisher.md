---
type: project-detail
status: active
title: "JOSRE SHM Publisher"
slug: "josre-shm-publisher"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/josre.shmpublisher.com"
production-url: "https://josre.shmpublisher.com"
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

# JOSRE SHM Publisher

## Overview

OJS-style journal vhost for `josre.shmpublisher.com`.

## Server / Vhost

- **Domain**: `josre.shmpublisher.com`
- **Production URL**: https://josre.shmpublisher.com
- **Source path**: `/var/www/josre.shmpublisher.com`
- **DocumentRoot**: `/var/www/josre.shmpublisher.com/current`
- **Files/data directory**: `/var/www/filesjosre`
- **Nginx config**: `/etc/nginx/conf.d/josre.shmpublisher.com.conf`
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
