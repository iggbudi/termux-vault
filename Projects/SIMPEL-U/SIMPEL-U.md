---
type: project-detail
status: active
title: "SIMPEL-U"
slug: "simpel-u"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/simpelu.my.id"
production-url: "https://simpelu.my.id"
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

# SIMPEL-U

## Overview

Project SIMPEL-U dengan public web root dan struktur app/config/storage.

## Server / Vhost

- **Domain**: `simpelu.my.id`
- **Aliases**: `www.simpelu.my.id`
- **Production URL**: https://simpelu.my.id
- **Source path**: `/var/www/simpelu.my.id`
- **DocumentRoot**: `/var/www/simpelu.my.id/public`
- **Reverse proxy**: `-`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/simpelu.my.id.conf`
  - `/etc/apache2/sites-enabled/simpelu.my.id-le-ssl.conf`
- **Docs / markers found**: README.md

## Current Understanding

SIMPEL-U masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/simpelu.my.id/public
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
