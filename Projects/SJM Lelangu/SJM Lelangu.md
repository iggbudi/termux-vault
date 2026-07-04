---
type: project-detail
status: active
title: "SJM Lelangu"
slug: "sjm-lelangu"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/sjmlelang.com"
production-url: "https://sjmlelang.com"
priority: medium
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

# SJM Lelangu

## Overview

Platform lelang online berbasis waktu Lelangu/SJM.

## Server / Vhost

- **Domain**: `sjmlelang.com`
- **Aliases**: `www.sjmlelang.com`
- **Production URL**: https://sjmlelang.com
- **Source path**: `/var/www/sjmlelang.com`
- **DocumentRoot**: `/var/www/sjmlelang.com`
- **Reverse proxy**: `-`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/sjmlelang.com.conf`
  - `/etc/apache2/sites-enabled/sjmlelang.com-le-ssl.conf`
- **Docs / markers found**: README.md

## Current Understanding

SJM Lelangu masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/sjmlelang.com
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
