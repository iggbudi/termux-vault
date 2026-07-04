---
type: project-detail
status: active
title: "Quizify SocAI"
slug: "quizify-socai"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/quizify.socai.my.id"
production-url: "https://quizify.socai.my.id"
priority: medium
tags:
  - project
  - vps
  - lang/php
  - fw/laravel
  - ops/apache
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Quizify SocAI

## Overview

Aplikasi Laravel Quizify di subdomain SocAI.

## Server / Vhost

- **Domain**: `quizify.socai.my.id`
- **Aliases**: `-`
- **Production URL**: https://quizify.socai.my.id
- **Source path**: `/var/www/quizify.socai.my.id`
- **DocumentRoot**: `/var/www/quizify.socai.my.id/public`
- **Reverse proxy**: `-`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/quizify.socai.my.id.conf`
  - `/etc/apache2/sites-enabled/quizify.socai.my.id-le-ssl.conf`
- **Docs / markers found**: README.md, composer.json, package.json, artisan

## Current Understanding

Quizify SocAI masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
/var/www/quizify.socai.my.id/public
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
