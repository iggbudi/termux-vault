---
type: project-detail
status: active
title: "Biro Jurnal"
slug: "biro-jurnal"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/birojurnal.com"
production-url: "https://birojurnal.com"
priority: medium
tags:
  - project
  - vps
  - lang/html
  - lang/php
  - ops/nginx
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Biro Jurnal

## Overview

Vhost publik untuk `birojurnal.com`. Source saat ini tampak sebagai site ringan dengan document root `public`.

## Server / Vhost

- **Domain**: `birojurnal.com`
- **Aliases**: `www.birojurnal.com`
- **Production URL**: https://birojurnal.com
- **Source path**: `/var/www/birojurnal.com`
- **DocumentRoot**: `/var/www/birojurnal.com/public`
- **Nginx config**: `/etc/nginx/conf.d/birojurnal.com.conf`
- **Runtime**: Nginx, PHP-FPM enabled
- **Detected markers**: `public/index.html`

## Notes

- Scan source: 2026-07-05.
- PHP location exists in vhost config, but only `index.html` was detected at max depth 2.
- Do not copy secrets or deployment credentials into this vault.

## Related

- [[README]]
- [[techstack]]
- [[roadmap]]
- [[VPS Projects]]
