---
type: project-detail
status: active
title: "EduGuide SocAI"
slug: "eduguide-socai"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/eduguide.socai.my.id"
production-url: "https://eduguide.socai.my.id"
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

# EduGuide SocAI

## Overview

EduGuide SocAI dengan Apache sebagai router frontend, API, dan storage.

## Server / Vhost

- **Domain**: `eduguide.socai.my.id`
- **Aliases**: `-`
- **Production URL**: https://eduguide.socai.my.id
- **Source path**: `/var/www/eduguide.socai.my.id`
- **DocumentRoot**: `-`
- **Reverse proxy**: `frontend 3003, api/storage 8003`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/eduguide.socai.my.id.conf`
  - `/etc/apache2/sites-enabled/eduguide.socai.my.id-le-ssl.conf`
- **Docs / markers found**: app/, public/

## Current Understanding

EduGuide SocAI masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
frontend 3003, api/storage 8003
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
