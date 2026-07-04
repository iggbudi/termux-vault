---
type: project-detail
status: active
title: "SocAI"
slug: "socai"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/socai.my.id"
production-url: "https://socai.my.id"
priority: high
tags:
  - project
  - vps
  - runtime/nodejs
  - type/multi-agent
  - ops/apache
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# SocAI

## Overview

Autonomous AI Agent untuk otomasi konten media sosial.

## Server / Vhost

- **Domain**: `socai.my.id`
- **Aliases**: `www.socai.my.id`
- **Production URL**: https://socai.my.id
- **Source path**: `/var/www/socai.my.id`
- **DocumentRoot**: `/var/www/socai.my.id`
- **Reverse proxy**: `http://127.0.0.1:3010/`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/socai.my.id.conf`
  - `/etc/apache2/sites-enabled/socai.my.id-le-ssl.conf`
- **Docs / markers found**: README.md, package.json

## Current Understanding

SocAI masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/socai.my.id
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
