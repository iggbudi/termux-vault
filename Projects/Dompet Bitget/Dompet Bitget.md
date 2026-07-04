---
type: project-detail
status: active
title: "Dompet Bitget"
slug: "dompet-bitget"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/dompet.lelangu.my.id"
production-url: "https://dompet.lelangu.my.id"
priority: medium
tags:
  - project
  - vps
  - runtime/nodejs
  - lang/typescript
  - ops/apache
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Dompet Bitget

## Overview

Dompet Bitget dengan backend dan frontend terpisah, diproxy ke service lokal.

## Server / Vhost

- **Domain**: `dompet.lelangu.my.id`
- **Aliases**: `-`
- **Production URL**: https://dompet.lelangu.my.id
- **Source path**: `/var/www/dompet.lelangu.my.id`
- **DocumentRoot**: `-`
- **Reverse proxy**: `http://localhost:3456/`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/dompet.lelangu.my.id.conf`
  - `/etc/apache2/sites-enabled/dompet.lelangu.my.id-le-ssl.conf`
- **Docs / markers found**: README.md, package.json, backend/package.json, frontend/package.json

## Current Understanding

Dompet Bitget masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
http://localhost:3456/
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
