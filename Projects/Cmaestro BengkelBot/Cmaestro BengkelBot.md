---
type: project-detail
status: active
title: "Cmaestro BengkelBot"
slug: "cmaestro-bengkelbot"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/cmaestro.my.id"
production-url: "https://cmaestro.my.id"
priority: medium
tags:
  - project
  - vps
  - runtime/nodejs
  - ops/apache
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Cmaestro BengkelBot

## Overview

BengkelBot pada domain cmaestro.my.id dengan repo Node dan proxy lokal.

## Server / Vhost

- **Domain**: `cmaestro.my.id`
- **Aliases**: `www.cmaestro.my.id`
- **Production URL**: https://cmaestro.my.id
- **Source path**: `/var/www/cmaestro.my.id`
- **DocumentRoot**: `/var/www/cmaestro.my.id/public`
- **Reverse proxy**: `http://127.0.0.1:3012/`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/cmaestro.my.id.conf`
  - `/etc/apache2/sites-enabled/cmaestro.my.id-le-ssl.conf`
- **Docs / markers found**: repo/README.md, repo/package.json

## Current Understanding

Cmaestro BengkelBot masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/cmaestro.my.id/public
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
