---
type: project-detail
status: active
title: "AI Study Buddy"
slug: "ai-study-buddy"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/studdybuddy.socai.my.id"
production-url: "https://studdybuddy.socai.my.id"
priority: medium
tags:
  - project
  - vps
  - lang/php
  - fw/laravel
  - api/groq
  - ops/apache
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# AI Study Buddy

## Overview

AI Study Buddy berbasis Laravel + MongoDB + Groq API.

## Server / Vhost

- **Domain**: `studdybuddy.socai.my.id`
- **Aliases**: `-`
- **Production URL**: https://studdybuddy.socai.my.id
- **Source path**: `/var/www/studdybuddy.socai.my.id`
- **DocumentRoot**: `/var/www/studdybuddy.socai.my.id/public`
- **Reverse proxy**: `-`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/studdybuddy.socai.my.id.conf`
  - `/etc/apache2/sites-enabled/studdybuddy.socai.my.id-le-ssl.conf`
- **Docs / markers found**: README.md, composer.json, artisan

## Current Understanding

AI Study Buddy masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/studdybuddy.socai.my.id/public
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
