---
type: project-detail
status: active
title: "JOISER SHM Publisher"
slug: "joiser-shm-publisher"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/joiser.shmpublisher.com"
production-url: "https://joiser.shmpublisher.com"
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

# JOISER SHM Publisher

## Overview

OJS-style journal vhost for `joiser.shmpublisher.com`.

## Server / Vhost

- **Domain**: `joiser.shmpublisher.com`
- **Production URL**: https://joiser.shmpublisher.com
- **Source path**: `/var/www/joiser.shmpublisher.com`
- **DocumentRoot**: `/var/www/joiser.shmpublisher.com/current`
- **Files/data directory**: `/var/www/joiser.shmpublisher.com/files`
- **Nginx config**: `/etc/nginx/conf.d/joiser.shmpublisher.com.conf`
- **Runtime**: Nginx + PHP-FPM pool `ojs`
- **Detected markers**: `README.md`, `config.inc.php`, `index.php`

## Notes

- Treat `config.inc.php` as sensitive.
- A `.codex` marker exists in the project directory.

## Related

- [[README]]
- [[techstack]]
- [[roadmap]]
- [[VPS Projects]]
