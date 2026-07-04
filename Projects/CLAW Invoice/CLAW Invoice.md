---
type: project-detail
status: active
title: "CLAW Invoice"
slug: "claw-invoice"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/inv.nanariset.my.id"
production-url: "https://inv.nanariset.my.id"
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

# CLAW Invoice

## Overview

CLAW / invoice workspace dengan root invoice dan API proxy lokal.

## Server / Vhost

- **Domain**: `inv.nanariset.my.id`
- **Aliases**: `-`
- **Production URL**: https://inv.nanariset.my.id
- **Source path**: `/var/www/inv.nanariset.my.id`
- **DocumentRoot**: `/var/www/inv.nanariset.my.id/repo/invoice`
- **Reverse proxy**: `api http://127.0.0.1:3001/api`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/inv.nanariset.my.id.conf`
  - `/etc/apache2/sites-enabled/inv.nanariset.my.id-le-ssl.conf`
- **Docs / markers found**: repo/README.md

## Current Understanding

CLAW Invoice masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/inv.nanariset.my.id/repo/invoice
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
