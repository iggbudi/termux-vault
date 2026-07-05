---
type: project-detail
status: active
title: "Node PJDigital"
slug: "node-pjdigital"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/ojs"
production-url: "https://node.pjdigital.top"
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

# Node PJDigital

## Overview

Nginx vhost `node.pjdigital.top` serving an OJS-style PHP application from `/var/www/ojs`.

## Server / Vhost

- **Domain**: `node.pjdigital.top`
- **Production URL**: https://node.pjdigital.top
- **Source path**: `/var/www/ojs`
- **DocumentRoot**: `/var/www/ojs`
- **Nginx config**: `/etc/nginx/conf.d/node.pjdigital.top.conf`
- **Runtime**: Nginx + PHP-FPM pool `ojs`
- **Special route**: `/` serves `/publisher/index.html`
- **Detected markers**: `README.md`, `config.inc.php`, `index.php`, `publisher/index.html`

## Notes

- Despite the `node` subdomain name, scan shows an OJS/PHP root, not a Node.js app.
- Treat `config.inc.php` as sensitive.

## Related

- [[README]]
- [[techstack]]
- [[roadmap]]
- [[VPS Projects]]
