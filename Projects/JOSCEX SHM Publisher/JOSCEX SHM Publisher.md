---
type: project-detail
status: active
title: "JOSCEX SHM Publisher"
slug: "joscex-shm-publisher"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/joscex"
production-url: "https://joscex.shmpublisher.com"
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

# JOSCEX SHM Publisher

## Overview

OJS-style journal vhost for `joscex.shmpublisher.com`.

## Server / Vhost

- **Domain**: `joscex.shmpublisher.com`
- **Production URL**: https://joscex.shmpublisher.com
- **Source path**: `/var/www/joscex`
- **DocumentRoot**: `/var/www/joscex`
- **Files/data directory**: `/var/www/filesjoscex`
- **Nginx config**: `/etc/nginx/conf.d/joscex.shmpublisher.com.conf`
- **Runtime**: Nginx + PHP-FPM pool `ojs`
- **Detected markers**: `AGENTS.md`, `README.md`, `config.inc.php`, `index.php`

## Notes

- Treat `config.inc.php` as sensitive.
- Project has its own `AGENTS.md`; read before editing source.

## Related

- [[README]]
- [[techstack]]
- [[roadmap]]
- [[VPS Projects]]
