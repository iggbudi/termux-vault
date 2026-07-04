---
type: project-detail
status: active
title: "Kausar Leather"
slug: "kausar-leather"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/kl.socai.my.id"
production-url: "https://kl.socai.my.id"
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

# Kausar Leather

## Overview

Landing dan admin setup Kausar Leather.

## Server / Vhost

- **Domain**: `kl.socai.my.id`
- **Aliases**: `-`
- **Production URL**: https://kl.socai.my.id
- **Source path**: `/var/www/kl.socai.my.id`
- **DocumentRoot**: `/var/www/kl.socai.my.id`
- **Reverse proxy**: `-`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/kl.socai.my.id.conf`
  - `/etc/apache2/sites-enabled/kl.socai.my.id-le-ssl.conf`
- **Docs / markers found**: README.md

## Current Understanding

Kausar Leather masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/kl.socai.my.id
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
