---
type: project-detail
status: active
title: "SIMPEL-U Telegram Bot"
slug: "simpel-u-telegram-bot"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/bot.shm.my.id"
production-url: "https://bot.shm.my.id"
priority: medium
tags:
  - project
  - vps
  - lang/typescript
  - runtime/nodejs
  - ops/apache
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# SIMPEL-U Telegram Bot

## Overview

Bot Telegram SIMPEL-U dengan build TypeScript dan runtime service lokal.

## Server / Vhost

- **Domain**: `bot.shm.my.id`
- **Aliases**: `-`
- **Production URL**: https://bot.shm.my.id
- **Source path**: `/var/www/bot.shm.my.id`
- **DocumentRoot**: `-`
- **Reverse proxy**: `http://127.0.0.1:3107/`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/bot.shm.my.id.conf`
  - `/etc/apache2/sites-enabled/bot.shm.my.id-le-ssl.conf`
- **Docs / markers found**: README.md, package.json, requirements.txt

## Current Understanding

SIMPEL-U Telegram Bot masuk inventaris vhost aktif server per scan `2026-07-05`. Informasi ini diambil dari konfigurasi Apache dan marker file source project, tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
http://127.0.0.1:3107/
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
