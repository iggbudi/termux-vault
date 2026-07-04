---
type: project-detail
status: active
title: "AIDIS Disposisi Surat"
slug: "aidis-disposisi-surat"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/aidis.my.id"
production-url: "https://aidis.my.id"
priority: high
tags:
  - project
  - vps
  - lang/php
  - ops/apache
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# AIDIS Disposisi Surat

## Overview

Sistem disposisi surat UNISBANK dengan public/admin app berbasis PHP.

## Server / Vhost

- **Domain**: `aidis.my.id`
- **Aliases**: `www.aidis.my.id`
- **Production URL**: https://aidis.my.id
- **Source path**: `/var/www/aidis.my.id`
- **DocumentRoot**: `/var/www/aidis.my.id/public`
- **Reverse proxy**: `-`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/aidis.my.id.conf`
  - `/etc/apache2/sites-enabled/aidis.my.id-le-ssl.conf`
- **Docs / markers found**: README.md, composer.json

## Current Understanding

AIDIS Disposisi Surat masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/aidis.my.id/public
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
