---
type: reference
title: "Referensi Gaya Coding & Sprint"
updated: "2026-07-05"
tags:
  - reference
  - methodology
  - sprint
  - best-practices
---

# 📋 Referensi Gaya Coding & Sprint

> Dokumen ini berisi ringkasan gaya pengembangan aplikasi dan sprint yang dianalisis dari vault Obsidian.

---

## 🏗️ Gaya Pengembangan Aplikasi

### Struktur Dokumentasi yang Konsisten

Setiap proyek menggunakan template standar:

```
Project-Name/
├── README.md           # Deskripsi proyek
├── techstack.md        # Stack teknologi
├── roadmap.md          # Rencana pengembangan
├── tasks/              # Daftar tugas
├── meetings/           # Catatan meeting
├── docs/               # Dokumentasi teknis
├── code-snippets/      # Kode reusable
└── assets/             # File pendukung
```

**Frontmatter YAML** yang kaya dengan metadata:
- `type`, `status`, `title`, `slug`
- `repo`, `source-path`, `production-url`
- `priority`, `tags`, `links`

### Pendekatan Detail-Teknis

Selalu catat informasi:
- Domain dan URL produksi
- Jalur source code di VPS
- Konfigurasi Apache/Nginx
- Arsitektur sistem (dengan diagram teks)
- Catatan keamanan (jangan commit `.env`)

### Stack Teknologi

| Layer | Teknologi |
|-------|-----------|
| Backend | Laravel (PHP), Node.js |
| Database | MongoDB, MySQL, Turso |
| AI/ML | Groq API, multi-agent systems |
| Frontend | Vite, TypeScript, Bootstrap |
| Testing | Playwright headless QA |
| Deployment | VPS dengan Apache + SSL |

---

## 🔄 Gaya Sprint

### Sprint Execution Protocol (10 Langkah QA Loop)

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Implement tasks (urut dari paling simpel)                │
│ 2. npm run typecheck — harus EXIT 0                         │
│ 3. npm test — semua test harus pass                         │
│ 4. Install Playwright untuk QA                              │
│ 5. Playwright QA test — visual + functional                 │
│ 6. Design compliance — cek konsistensi design system        │
│ 7. Security check — input validation, XSS, injection        │
│ 8. Update docs (wiki.md append-only)                        │
│ 9. Bump sw.js cache version                                 │
│ 10. Final verification: typecheck + test + playwright       │
└─────────────────────────────────────────────────────────────┘
```

### Sprint Planning

1. **Gap Analysis** — Identifikasi kekurangan fitur/sistem
2. **Prioritas** — Tentukan sprint mana yang paling penting
3. **Breakdown** — Pecah fitur ke small sprints (4-5 tasks per sprint)
4. **Numbering** — Gunakan numbering konsisten (Sprint 0, 1, 2, ...)

**Contoh (pi-meteora-agents)**:
- 6 sprints, 29 tasks
- Sprint 9-10: Quick Wins (highest priority)
- Sprint 11-13: Data Quality & Comparison

### Sprint-Based Testing

```bash
# Test suite per sprint (contoh: SIMPMU DPMP2)
npm run test:e2e:sprint2
npm run test:e2e:sprint3
npm run test:e2e:sprint4
npm run test:e2e:sprint5
npm run test:e2e:sprint6
npm run test:e2e:sprint7
npm run test:e2e:sprint8
npm run test:e2e:sprint9
```

**Keuntungan**: Regression testing terisolasi per sprint.

### Refactor Bertahap per Sprint

Contoh dari SIMPMU DPMP2 (Sprint 0-10):
```
Sprint 0-2:  Page-local logic → helper functions
Sprint 3-4:  Helper → service layer
Sprint 5-6:  Service → repository pattern
Sprint 7-8:  Repository → canonical status
Sprint 9-10: QA regression + security hardening
```

**Pendekatan "Strangler Fig"** — refactor tanpa menghancurkan sistem lama.

---

## 🔒 Security Integration

### Security Check dalam Sprint Protocol

- [ ] Input validation
- [ ] XSS prevention
- [ ] SQL injection prevention
- [ ] CSRF protection
- [ ] Prepared statements
- [ ] Whitelist dynamic fields
- [ ] HTML escaping (`e()`)
- [ ] JSON escaping (`jsonSafe()`)
- [ ] CSV formula injection protection
- [ ] Safe logging (redact secrets)

### Security Maturation

Security layer matang **setelah refactor sprint tertentu** (contoh: Sprint 9 di SIMPMU DPMP2).

---

## 📝 Documentation Sprint

### Progress Log Per Sprint

```markdown
### Sprint 13 — Compare & Decision Memory
**What**: Implemented Sprint 13 (4/5 tasks, skip accuracy tracking)
**Why**: Alex needed side-by-side comparison + decision history
**Where**: src/lib/decision-log.ts, src/orchestrator.ts, public/js/app.js
**Learned**: 13-1 compare mode, 13-2 /api/compare endpoint, 13-3 JSONL decision log
```

### Documentation Rules

- **Append-only** — Tidak pernah hapus, hanya tambah
- **Timestamp wajib** — Setiap update diberi tanggal
- **Session summary** — Ringkasan setiap sesi kerja
- **AGENTS.md** — Rules untuk vault dan development

---

## 🎯 Quality Gates

### Pre-Sprint
- [ ] Gap analysis selesai
- [ ] Prioritas ditentukan
- [ ] Tasks di-breakdown

### During Sprint
- [ ] Implementasi bertahap (simple → complex)
- [ ] Code review (jika tim)
- [ ] Unit test ditulis

### Post-Sprint
- [ ] Typecheck pass (EXIT 0)
- [ ] Semua test pass
- [ ] Playwright QA pass
- [ ] Design compliance check
- [ ] Security check pass
- [ ] Docs updated
- [ ] Cache version bumped
- [ ] Final verification

### Cross-Sprint
- [ ] Regression testing per sprint
- [ ] Progress log updated
- [ ] Lessons learned dicatat

---

## 🧠 Best Practices

### Development Practices

1. **Sprint-Based Development**
   - Break features ke small sprints
   - Document progress di AGENTS.md
   - Review & refactor setelah setiap sprint

2. **Zero Dependency Philosophy**
   - Fewer dependencies = easier maintenance
   - Built-in tools seringkali cukup
   - Evaluasi dependency sebelum menambah

3. **Mobile-First Design**
   - Form input `font-size: 16px` (prevent auto-zoom)
   - Bottom navigation lebih thumb-friendly
   - Skeleton loading untuk perceived performance

4. **Multi-Agent Systems**
   - Specialist agents → Manager agent → Decision
   - Structured JSON output untuk easier aggregation
   - Rate limiting penting untuk free APIs

### Naming Conventions

- Folder project: nama jelas dan konsisten
- Subfolder: lowercase kebab-case (`tasks`, `meetings`, `docs`)
- File: lowercase kebab-case (`deployment-notes.md`)
- File standar: `README.md`, `techstack.md`, `roadmap.md`

### Tech Stack Tagging

```yaml
# Language
lang/php, lang/typescript, lang/javascript, lang/deno

# Framework
fw/nextjs, fw/express, fw/vite, fw/bootstrap, fw/tailwind

# Database
db/mysql, db/mariadb, db/sqlite, db/supabase, db/turso

# API/Service
api/openai, api/google-oauth, api/slack, api/whatsapp

# Ops/Runtime
ops/nginx, ops/systemd, ops/git, runtime/nodejs

# Type
type/lms, type/content-site, type/whatsapp-gateway, type/multi-agent, type/pwa
```

---

## 📊 Contoh Sprint Plan

### Pi Meteora Agents (6 Sprints, 29 Tasks)

| Sprint | Focus | Tasks | Status |
|--------|-------|-------|--------|
| 9 | Quick Wins persona alignment | 5 | ✅ Complete |
| 10 | Action Layer | 5 | ✅ Complete |
| 11 | Token Intel (Narrative data quality) | 5 | ✅ Complete |
| 12 | Dip Catcher Price Data | 5 | ✅ Complete |
| 13 | Compare & Decision Memory | 4/5 | ✅ Complete |
| 14 | (Planned) | - | 🔄 Pending |

### SIMPMU DPMP2 (Sprint 0-10)

| Sprint | Focus | Outcome |
|--------|-------|---------|
| 0-2 | Page-local logic → helper | Code terstruktur |
| 3-4 | Helper → service layer | Business logic terpisah |
| 5-6 | Service → repository pattern | Data access terisolasi |
| 7-8 | Repository → canonical status | Status management konsisten |
| 9 | Security hardening | Security layer matang |
| 10 | QA regression | Playwright test suite lengkap |

---

## 🔗 Referensi Terkait

- [[AGENTS.md]] — Rules untuk vault
- [[Meta/index]] — Index semua proyek
- [[MOC/Learnings]] — Pembelajaran dari proyek
- [[VPS Projects]] — Proyek di VPS

---

## 📌 Catatan Penting

> **Disiplin adalah kunci.** Gaya sprint ini membutuhkan konsistensi untuk hasil yang optimal.

> **Quality over speed.** Lebih baik sprint lambat tapi berkualitas daripada cepat tapi penuh bug.

> **Document everything.** Setiap keputusan, setiap error, setiap solusi — catat semuanya.

---

*Terakhir diperbarui: 2026-07-05*
*Dianalisis dari: pi-meteora-agents, SIMPMU DPMP2, PLK App, dan proyek lainnya*