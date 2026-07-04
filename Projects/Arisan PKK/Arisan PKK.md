---
type: project-detail
status: active
title: "Arisan PKK"
slug: "arisan-pkk"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/arisanpkk.web.id"
production-url: "https://arisanpkk.web.id"
priority: medium
tags:
  - project
  - vps
  - lang/typescript
  - fw/vite
  - ops/apache
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Arisan PKK

## Overview

Aplikasi Kegiatan PKK yang berjalan di service lokal dan diproxy Apache.

## Server / Vhost

- **Domain**: `arisanpkk.web.id`
- **Aliases**: `www.arisanpkk.web.id`
- **Production URL**: https://arisanpkk.web.id
- **Source path**: `/var/www/arisanpkk.web.id`
- **DocumentRoot**: `-`
- **Reverse proxy**: `http://localhost:3100/`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/arisanpkk.web.id.conf`
  - `/etc/apache2/sites-enabled/arisanpkk.web.id-le-ssl.conf`
- **Docs / markers found**: belajar-typescript/package.json

## Current Understanding

Arisan PKK masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
http://localhost:3100/
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
