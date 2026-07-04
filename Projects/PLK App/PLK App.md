---
type: project-detail
status: maintained
title: "PLK App"
slug: "plk-app"
updated: "2026-07-05"
repo: ""
source-path: "~/belajar-typescript/"
production-url: ""
priority: medium
tags:
  - project
  - lang/typescript
  - fw/vite
  - db/turso
  - type/pwa
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Aplikasi Kegiatan PKK

## Overview
Progressive Web App (PWA) untuk mengelola kegiatan dan anggota PKK.
Target: kader PKK, mobile-first, low-end device.

## Tech Stack
- [[Vite]] + [[TypeScript]]
- [[Turso]] (libSQL/SQLite)
- [[PWA]] (Service Worker, Manifest)

## Architecture
```
src/
├── api/
│   ├── turso.ts    # Database client
│   ├── anggota.ts  # CRUD operations
│   └── stats.ts    # Statistik
├── pages/
│   ├── login.ts
│   ├── dashboard.ts
│   └── anggota/
│       ├── list.ts
│       └── form.ts
├── ui.ts           # Toast, confirm dialog
├── router.ts       # Hash-based routing
└── main.ts         # Entry point
```

## Features
- [x] Login auth (admin/admin123)
- [x] CRUD Anggota PKK
- [x] Dashboard statistik
- [x] Search lokal
- [x] Bottom navigation (Home + Anggota)
- [x] Form ramah HP (default alamat)
- [x] Toast notification
- [x] Skeleton loading
- [ ] Export data
- [ ] Laporan cetak

## Design System
- Palet hangat untuk user PKK
- Emoji icon di button (✏️ Edit, 🗑️ Hapus)
- Mobile optimization (font-size 16px prevent auto-zoom)

## Decisions
- [[2026-06-27 - Pilih Turso daripada Supabase]]
- [[2026-06-27 - Hash routing vs History API]]
- [[2026-06-27 - Simplify tabel anggota]]

## Learnings
- CORS issue di mobile browser → solusi: gunakan `@libsql/client/web` SDK
- Form input 16px → prevent auto-zoom di iOS/Android
- Flash toast via `sessionStorage` untuk pesan setelah navigasi
- Timeout 30s dengan `AbortController` untuk network request

## Links
- [[TypeScript Best Practices]]
- [[PWA Checklist]]
- [[Mobile-First Design]]
- [[Vite Configuration]]

## Progress Log
Detail sprint ada di file `AGENTS.md` dan `SPRINT-REPAIR.md` di folder project.

### Milestone
- 2026-06-27: Migrasi CLI → PWA
- 2026-06-27: CRUD anggota + Turso DB
- 2026-06-27: Major UI/UX refactor
- 2026-06-27: Polish & bug fixes

---
Source: `~/belajar-typescript/`
