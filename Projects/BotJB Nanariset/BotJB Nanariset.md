---
type: project-detail
status: active
title: "BotJB Nanariset"
slug: "botjb-nanariset"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/botjb.nanariset.my.id"
production-url: "https://botjb.nanariset.my.id"
priority: medium
tags:
  - project
  - vps
  - ops/apache
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# BotJB Nanariset

## Overview

Subdomain botjb dengan public_html dan reverse proxy ke app lokal.

## Server / Vhost

- **Domain**: `botjb.nanariset.my.id`
- **Aliases**: `-`
- **Production URL**: https://botjb.nanariset.my.id
- **Source path**: `/var/www/botjb.nanariset.my.id`
- **DocumentRoot**: `/var/www/botjb.nanariset.my.id/public_html`
- **Reverse proxy**: `http://127.0.0.1:3011/`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/botjb.nanariset.my.id.conf`
  - `/etc/apache2/sites-enabled/botjb.nanariset.my.id-le-ssl.conf`
- **Docs / markers found**: public_html/

## Current Understanding

BotJB Nanariset masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/botjb.nanariset.my.id/public_html
  ↓
Application code / local service
```

## Notes

- Jangan commit token, password, private key, atau isi `.env` ke vault.
- Untuk klaim versi dependency, inspeksi lockfile/source terbaru dulu.
- Jika worktree source dirty, catat statusnya di note sebelum perubahan source.

## Related

- [[README]]
- [[techstack]]
- [[roadmap]]
- [[VPS Projects]]
