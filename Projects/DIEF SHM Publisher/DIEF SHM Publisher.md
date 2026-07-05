---
type: project-detail
status: active
title: "DIEF SHM Publisher"
slug: "dief-shm-publisher"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/dief"
production-url: "https://dief.shmpublisher.com"
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

# DIEF SHM Publisher

## Overview

Open Journal Systems style journal vhost for `dief.shmpublisher.com`.

## Server / Vhost

- **Domain**: `dief.shmpublisher.com`
- **Production URL**: https://dief.shmpublisher.com
- **Source path**: `/var/www/dief`
- **DocumentRoot**: `/var/www/dief/public_html`
- **Data path**: `/var/www/dief/diefdata`
- **Nginx config**: `/etc/nginx/conf.d/dief.shmpublisher.com.conf`
- **Runtime**: Nginx + PHP-FPM pool `dief`
- **PHP-FPM socket**: `/run/php-fpm/dief.sock`
- **Detected markers**: `README.md`, `config.inc.php`, `index.php`

## Notes

- `config.inc.php` exists and may contain credentials. Do not copy contents into this vault.
- Separate PHP-FPM pool is defined under Remi PHP 8.0 config.

## Related

- [[README]]
- [[techstack]]
- [[roadmap]]
- [[VPS Projects]]
