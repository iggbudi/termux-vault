---
type: project-detail
status: active
title: "VibePlan AI"
slug: "vibeplan-ai"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/vibeplan.socai.my.id"
production-url: "https://vibeplan.socai.my.id"
priority: high
tags:
  - project
  - vps
  - fw/nextjs
  - fw/laravel
  - lang/typescript
  - ops/apache
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# VibePlan AI

## Overview

VibePlan AI dengan frontend Next.js dan backend Laravel, dirutekan Apache.

## Server / Vhost

- **Domain**: `vibeplan.socai.my.id`
- **Aliases**: `-`
- **Production URL**: https://vibeplan.socai.my.id
- **Source path**: `/var/www/vibeplan.socai.my.id`
- **DocumentRoot**: `/var/www/vibeplan.socai.my.id`
- **Reverse proxy**: `frontend 3002, api/storage 8001`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/vibeplan.socai.my.id.conf`
  - `/etc/apache2/sites-enabled/vibeplan.socai.my.id-le-ssl.conf`
- **Docs / markers found**: README.md, frontend-next/package.json, backend-laravel/composer.json

## Current Understanding

VibePlan AI masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/vibeplan.socai.my.id
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
