---
type: project-detail
status: active
title: "Al-Barokah"
slug: "al-barokah"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/al-barokah.my.id"
production-url: "https://al-barokah.my.id"
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

# Al-Barokah

## Overview

Website dan admin system Masjid Al-Barokah.

## Server / Vhost

- **Domain**: `al-barokah.my.id`
- **Aliases**: `www.al-barokah.my.id`
- **Production URL**: https://al-barokah.my.id
- **Source path**: `/var/www/al-barokah.my.id`
- **DocumentRoot**: `/var/www/al-barokah.my.id/public`
- **Reverse proxy**: `-`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/al-barokah.my.id.conf`
  - `/etc/apache2/sites-enabled/al-barokah.my.id-le-ssl.conf`
- **Docs / markers found**: composer.json

## Current Understanding

Al-Barokah masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/al-barokah.my.id/public
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
