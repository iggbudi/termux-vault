---
type: project-detail
status: active
title: "SafeSphere"
slug: "safesphere"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/safesphere.my.id"
production-url: "https://safesphere.my.id"
priority: high
tags:
  - project
  - vps
  - runtime/nodejs
  - db/sqlite
  - ops/apache
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# SafeSphere

## Overview

SafeSphere anonymous anti-bullying reports dengan frontend publik dan API backend.

## Server / Vhost

- **Domain**: `safesphere.my.id`
- **Aliases**: `-`
- **Production URL**: https://safesphere.my.id
- **Source path**: `/var/www/safesphere.my.id`
- **DocumentRoot**: `/var/www/safesphere.my.id/public`
- **Reverse proxy**: `api http://127.0.0.1:3000/api/`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/safesphere.my.id.conf`
  - `/etc/apache2/sites-enabled/safesphere.my.id-le-ssl.conf`
- **Docs / markers found**: repo/README.md, repo/package.json

## Current Understanding

SafeSphere masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/safesphere.my.id/public
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
