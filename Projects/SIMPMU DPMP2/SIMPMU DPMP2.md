---
type: project-detail
status: active
title: "SIMPMU DPMP2"
slug: "simpmu-dpmp2"
updated: "2026-07-05"
repo: "https://github.com/iggbudi/dpmp2"
source-path: "/var/www/dpmp2.dwibudi.my.id"
production-url: "https://dpmp2.dwibudi.my.id"
priority: high
tags:
  - project
  - vps
  - lang/php
  - db/mysql
  - db/mariadb
  - ops/playwright
  - type/quality-assurance
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# SIMPMU DPMP2

## Overview
**SIMPMU — Sistem Informasi Penjaminan Mutu** adalah aplikasi web untuk mengelola siklus penjaminan mutu internal perguruan tinggi. Fokus utamanya adalah monitoring tridarma, evaluasi, review UJM, master data, dan pelaporan mutu akademik.

## Source
- Path VPS: `/var/www/dpmp2.dwibudi.my.id`
- Repository: `https://github.com/iggbudi/dpmp2`
- Latest local commit saat dibaca: `60645c3 feat: add pendidikan RPS integration standards`
- Domain: `dpmp2.dwibudi.my.id`

## Tech Stack
- [[PHP Native]] / PHP 8.x
- [[MySQL]] / [[MariaDB]]
- [[Bootstrap]] 5.3.2
- [[Playwright]] headless QA
- Session-based auth dengan DB revalidation
- Native PDO repositories/services

## Main Features

### Monitoring Tridarma
- Input data monitoring per pilar oleh Ketua Program Studi:
  - Pendidikan
  - Penelitian
  - Pengabdian/PkM
- Status per pilar: `belum`, `dikirim`, `revisi`, `disetujui`.
- Review bertingkat oleh UJM fakultas.
- Super Admin dapat melihat dan mengelola lintas fakultas.
- Export laporan ke CSV.

### Evaluasi dan Pelaporan
- Domain evaluasi dipisahkan dari monitoring melalui `monitoring_periode.jenis`.
- Report/export berbasis repository dan view canonical.
- Riwayat review lengkap dengan reviewer dan catatan.

### Master Data
- Unit organisasi Fakultas → Program Studi.
- Role user:
  - `super admin`
  - `admin`
  - `ujm`
  - `ketua unit`
- Periode monitoring/evaluasi.
- Mapping LAM prodi untuk standar monitoring pendidikan.

### Notification & Reminder
- Reminder monitoring via cron.
- Notification queue untuk email/WhatsApp asynchronous.
- Worker: `scripts/process-notification-jobs.php`.

## Panels / Entry Points

| Area | Path | Role |
|------|------|------|
| Public auth | `login.php`, `logout.php` | Login/logout |
| Admin | `admin/` | Super Admin / Admin |
| UJM | `ujm/` | UJM fakultas aktif |
| Unit | `unit/` | Ketua Program Studi aktif |
| Cron | `cron/monitoring-reminder.php` | Reminder unit |
| Cron | `cron/monitoring-admin-reminder.php` | Reminder admin |
| Worker | `scripts/process-notification-jobs.php` | Queue notification |

## Architecture

```text
Browser
  ↓
PHP Native Pages
  ↓
Bootstrap per panel: admin/_bootstrap.php, ujm/_bootstrap.php, unit/_bootstrap.php
  ↓
Support / Services / Repositories
  ↓
MySQL/MariaDB
```

Important layers:

- `config.php` — env loader, PDO, session hardening, CSRF, escaping, email/WA helpers, safe logging.
- `app/Support/AccessGuard.php` — revalidasi user aktif dari DB pada setiap protected request.
- `app/Support/ExportSanitizer.php` — CSV/XLS formula safety dan safe filename.
- `app/Services/MonitoringStatusService.php` — whitelist pilar/status, label, badge, overall status, editability, SLA.
- `app/Services/MonitoringPendidikanLamService.php` — standar LAM untuk monitoring pendidikan.
- `app/Repositories/*` — akses data monitoring, evaluasi, pilar status, report/export.

## Important Files

```text
/var/www/dpmp2.dwibudi.my.id/
├── README.md
├── config.php
├── admin/
├── ujm/
├── unit/
├── app/
│   ├── Repositories/
│   ├── Services/
│   └── Support/
├── db/
│   └── migrations/
├── docs/refactor/
├── tests/e2e/
├── cron/
└── scripts/
```

## Database Notes

Important tables/views:

- `unit_kategori`
- `units`
- `users`
- `monitoring_periode`
- `monitoring_submission`
- `monitoring_submission_pilar_status`
- `v_monitoring_submission_status`
- `monitoring_pendidikan`
- `monitoring_penelitian`
- `monitoring_pkm`
- `evaluasi_pendidikan`
- `evaluasi_penelitian`
- `evaluasi_pkm`
- `notification_jobs`
- `monitoring_review_history`

Canonical pilar status source of truth:

```text
monitoring_submission_pilar_status(submission_id, pilar, status)
```

Read model:

```text
v_monitoring_submission_status
```

Legacy status columns masih dipertahankan dan dual-written untuk kompatibilitas.

Latest migrations yang terlihat:

- `024_monitoring_submission_status_view.sql`
- `025_monitoring_pendidikan_lam_standards.sql`
- `026_monitoring_pendidikan_integrasi_rps_standards.sql`

## Security Notes

Security layer sudah cukup matang setelah refactor Sprint 9:

- Revalidasi session/user dari DB di protected request.
- Disabled user ditolak walaupun session masih ada.
- Role guard server-side via `AccessGuard`.
- Scope guard UJM berdasarkan fakultas dari session DB.
- Ketua unit wajib terhubung ke Program Studi aktif.
- UJM wajib terhubung ke Fakultas aktif.
- CSRF untuk POST.
- Prepared statements dan whitelist dynamic fields.
- Escaping HTML via `e()` dan JSON via `jsonSafe()`.
- CSV formula injection protection via `ExportSanitizer`.
- Safe logging dengan redaksi secret/token/password.

## QA / Test Commands

```bash
# PHP lint semua file
rtk proxy find . -name '*.php' -not -path './.git/*' -print0 | xargs -0 -n1 php -l

# Check whitespace diff
rtk git diff --check

# Playwright regression suite
rtk npm run test:e2e:sprint2
rtk npm run test:e2e:sprint3
rtk npm run test:e2e:sprint4
rtk npm run test:e2e:sprint5
rtk npm run test:e2e:sprint6
rtk npm run test:e2e:sprint7
rtk npm run test:e2e:sprint8
rtk npm run test:e2e:sprint9
```

## Deployment Notes

Deployment harus dilakukan setelah approval eksplisit. Checklist penting:

1. Pastikan branch dan worktree bersih.
2. Backup database dengan `mysqldump`.
3. Pastikan secret/dump/backup tidak masuk staging.
4. Jalankan PHP lint, `git diff --check`, dan Playwright regression.
5. Jalankan SQL consistency checks.
6. Apply migration berurutan bila dibutuhkan.
7. Smoke test login admin/UJM/unit dan export CSV.

Cron rekomendasi:

```cron
0 8 * * * php /var/www/dpmp2.dwibudi.my.id/cron/monitoring-reminder.php >> /var/log/simpmu-cron.log 2>&1
0 8 * * * php /var/www/dpmp2.dwibudi.my.id/cron/monitoring-admin-reminder.php >> /var/log/simpmu-cron.log 2>&1
* * * * * php /var/www/dpmp2.dwibudi.my.id/scripts/process-notification-jobs.php 20 >> /var/log/simpmu-worker.log 2>&1
```

## Decisions / Learnings

- Tetap memakai PHP native, bukan framework baru, agar kompatibel dengan struktur aplikasi yang sudah berjalan.
- Refactor dilakukan bertahap Sprint 0–10: page-local logic → helper, service, repository, canonical status, dan QA regression.
- Canonical status per pilar dipindah ke tabel khusus + view read model, sambil mempertahankan legacy columns untuk kompatibilitas.
- QA Playwright headless dipakai untuk regression di VPS tanpa X Window.
- Deployment butuh backup DB dan approval manusia sebelum produksi.

## Related Docs in Project

- `README.md`
- `docs/refactor/architecture-after-refactor.md`
- `docs/refactor/database-schema-after-refactor.md`
- `docs/refactor/deployment-runbook.md`
- `docs/refactor/qa-checklist.md`
- `docs/security-audit-refactor-20260628.md`

## Related Notes

- [[VPS Projects]]
- [[PHP Native]]
- [[MySQL]]
- [[MariaDB]]
- [[Playwright]]
- [[Git]]

## Progress Log

### 2026-07-05
- Dibaca dari VPS dan dibuat note detail di vault.
- Teridentifikasi sebagai salah satu project prioritas dari inventaris [[VPS Projects]].

---
Status: 🔄 Active / Maintained
Source: `/var/www/dpmp2.dwibudi.my.id`
Tags: #project #vps #php #mysql #quality-assurance #simpmu
