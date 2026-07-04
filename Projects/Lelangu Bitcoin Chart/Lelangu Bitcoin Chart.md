---
type: project-detail
status: active
title: "Lelangu Bitcoin Chart"
slug: "lelangu-bitcoin-chart"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/lelangu.my.id"
production-url: "https://lelangu.my.id"
priority: medium
tags:
  - project
  - vps
  - lang/javascript
  - lang/html
  - api/tokocrypto
  - type/market-dashboard
  - static-site
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Lelangu Bitcoin Chart

## Overview
Static crypto market dashboard untuk Chart Bitcoin Tokocrypto. App menampilkan candlestick, watchlist, indikator teknikal, alert harga berbasis browser, dan backtest sederhana tanpa API key dan tanpa fitur trading.

## Source

- Path VPS: `/var/www/lelangu.my.id`
- Domain: `lelangu.my.id`
- Git status: folder ini **bukan git repository** saat dibaca.
- Nginx config: `/etc/nginx/conf.d/lelangu.my.id.conf`

## Tech Stack

- HTML
- CSS
- JavaScript
- Vanilla JS
- Static HTML/CSS
- Browser localStorage for price alerts
- Tokocrypto public kline API
- Fallback kline endpoint
- Nginx
- Certbot SSL
- PHP-FPM available in vhost

## Main Features

- Candlestick chart dengan sumber Tokocrypto public kline endpoint
- Watchlist market dan statistik harga
- Analisis teknikal: MA20, MA50, RSI14, MACD, volume, support/resistance
- Price alerts disimpan di localStorage dan dicek saat browser terbuka
- Backtest strategi MA cross, RSI 30/70, dan MACD momentum

## Architecture

```text
Browser client -> static index.html -> fetch public kline endpoint -> render chart/indikator -> simpan alert ke localStorage
```

## Important Files

```text
/var/www/lelangu.my.id/
├── index.html (alternate/static copy)
└── public/index.html (vhost document root)
```

## Operations / Vhost Notes

- HTTPS handled by Certbot certificate for `lelangu.my.id`.
- Root document served from `/var/www/lelangu.my.id/public`.
- `location /` fallback: `try_files $uri $uri/ /index.html`.
- PHP-FPM location exists but current discovered app is static HTML/JS.
- Sensitive file extensions are denied by Nginx.

## Current Gotchas

- Project yang ditemukan hanya static HTML/JS; komentar Nginx masih menyebut index.php/AI generation tetapi routing aktif fallback ke index.html.
- Tidak ada API key; semua data market berasal dari endpoint publik.
- Alert harga bukan background notification penuh; browser harus terbuka agar pengecekan berjalan.
- Vhost memblokir dotfiles dan ekstensi sensitif seperti .env, .json, .log, .sql, .zip.

## Related Notes

- [[VPS Projects]]
- [[Meta/index]]

## Progress Log

### 2026-07-05
- Dibaca dari VPS dan dimasukkan ke vault sebagai sisa vhost yang belum terdokumentasi.

---
Status: Active / market-dashboard
Source: `/var/www/lelangu.my.id`
Tags: #project #vps #lang-javascript #lang-html #api-tokocrypto #type-market-dashboard #static-site
