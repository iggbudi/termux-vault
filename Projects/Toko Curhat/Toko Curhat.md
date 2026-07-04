---
type: project-detail
status: archived
title: "Toko Curhat"
slug: "toko-curhat"
updated: "2026-07-05"
repo: ""
source-path: "~/crewet/tokocurhat/"
production-url: ""
priority: low
tags:
  - project
  - lang/deno
  - db/deno-kv
  - type/mini-app
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Toko Curhat

## Overview
Web app untuk curhat anonim dengan auto-balas quote bijak.
Project mini untuk eksplorasi Deno.

## Tech Stack
- [[Deno]] 2.9.0
- [[Deno KV]] (built-in database)
- Zero dependency (semua built-in Deno)

## Architecture
```
tokocurhat/
├── main.ts          # Server (HTTP + KV + API)
├── static/
│   ├── index.html   # Frontend HTML
│   └── script.js    # Frontend JS
├── data.db          # KV storage (auto-generated)
└── PROJECT.md       # Dokumentasi
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/submit` | Kirim curhat (body: `{text: string}`) |
| GET | `/api/curhat` | Lihat semua curhat |
| GET | `/api/stats` | Statistik (total curhat) |

## Features
- [x] Submit curhat anonim
- [x] Auto-balas quote bijak
- [x] Lihat semua curhat
- [x] Statistik total

## Learnings
- [[Deno KV]] cocok untuk prototipe cepat
- Zero dependency = deploy gampang
- `Deno.serve()` sudah cukup untuk HTTP server
- KV storage otomatis buat file `data.db`

## Decisions
- Pilih Deno daripada Node.js → lebih simple, built-in KV
- Zero dependency → maintainability tinggi

## Links
- [[Deno Deploy]]
- [[Minimal Web Architecture]]
- [[Deno Runtime]]

---
Source: `~/crewet/tokocurhat/`
Status: ✅ Completed
