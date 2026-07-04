---
type: project-detail
status: active
title: "Nana Research"
slug: "nana-research"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/nanariset.my.id"
production-url: "https://nanariset.my.id"
priority: medium
tags:
  - project
  - vps
  - lang/php
  - lang/javascript
  - type/landing-page
  - tool/url-shortener
  - static-site
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Nana Research

## Overview
Landing page Nana Research untuk jasa pembuatan website/aplikasi UMKM, dengan tool short URL sederhana berbasis PHP dan storage file lokal. Domain ini juga menjadi host/proxy untuk subapp X Creator dan WA service.

## Source

- Path VPS: `/var/www/nanariset.my.id`
- Domain: `nanariset.my.id`
- Git status: folder ini **bukan git repository** saat dibaca.
- Nginx config: `/etc/nginx/conf.d/nanariset.my.id.conf`

## Tech Stack

- PHP Native
- HTML
- JavaScript
- Tailwind CSS CDN
- Font Awesome CDN
- Vanilla JS
- File-based JSON storage in short-links.php
- WhatsApp wa.me CTA
- Google Fonts
- Nginx reverse proxy for subapps
- Nginx
- PHP-FPM
- Certbot SSL
- LOCK_EX file writes

## Main Features

- Landing page jasa UMKM, portfolio, FAQ, dan CTA WhatsApp
- Short URL generator via POST action=shorten_url
- Redirect slug pendek dari root path jika slug tersimpan
- Validasi URL dan slug, reserved slug list, dan penyimpanan dengan LOCK_EX
- Nginx proxy /xcreator ke port 3002 dan /wa/ ke port 3001

## Architecture

```text
Request nanariset.my.id -> Nginx -> PHP index.php -> landing page / shortener / redirect slug; /xcreator dan /wa/ diproxy ke service Node terpisah
```

## Important Files

```text
/var/www/nanariset.my.id/
├── index.php
├── short-links.php
└── .htaccess (Apache-style rules; Nginx vhost is authoritative)
```

## Operations / Vhost Notes

- HTTPS handled by Certbot certificate for `nanariset.my.id`.
- Root document served from `/var/www/nanariset.my.id`.
- `location /` fallback: `try_files $uri $uri/ /index.php?$query_string`.
- `/xcreator` and `/xcreator/` are proxied to `127.0.0.1:3002`.
- `/wa/` is proxied to `127.0.0.1:3001/`.

## Current Gotchas

- short-links.php berisi guard PHP exit lalu JSON; jangan expose/commit isi link sensitif sembarangan.
- Storage short URL file-based, bukan database; concurrency bergantung pada LOCK_EX.
- .htaccess ada tetapi Nginx tidak memakai aturan Apache tersebut.
- /xcreator sudah punya note project sendiri sebagai [[X Creator Agent]]; /wa/ mengarah ke service WA yang didokumentasikan sebagai [[WA Dwibudi Multi-Device]].

## Related Notes

- [[VPS Projects]]
- [[Meta/index]]
- [[X Creator Agent]]
- [[WA Dwibudi Multi-Device]]

## Progress Log

### 2026-07-05
- Dibaca dari VPS dan dimasukkan ke vault sebagai sisa vhost yang belum terdokumentasi.

---
Status: Active / landing-page
Source: `/var/www/nanariset.my.id`
Tags: #project #vps #lang-php #lang-javascript #type-landing-page #tool-url-shortener #static-site
