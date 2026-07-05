---
type: project-detail
status: active
title: "IBRAA"
slug: "ibraa"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/ibraa.or.id"
production-url: "https://ibraa.or.id"
priority: medium
tags:
  - project
  - vps
  - lang/php
  - ops/nginx
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# IBRAA

## Overview

PHP web application for `ibraa.or.id` with app, database, docs, public, and storage directories.

## Server / Vhost

- **Domain**: `ibraa.or.id`
- **Aliases**: `www.ibraa.or.id`
- **Production URL**: https://ibraa.or.id
- **Source path**: `/var/www/ibraa.or.id`
- **DocumentRoot**: `/var/www/ibraa.or.id/public`
- **Nginx config**: `/etc/nginx/conf.d/ibraa.or.id.conf`
- **Runtime**: Nginx + PHP-FPM pool `www`
- **Detected markers**: `docs/README.md`, `public/index.php`, `.git`
- **Special behavior**: maintenance mode via `public/.maintenance`

## Notes

- Source is a Git worktree.
- Maintenance behavior is controlled by a marker file in document root.
- Do not copy `.env` or app credentials into this vault.

## Related

- [[README]]
- [[techstack]]
- [[roadmap]]
- [[VPS Projects]]
