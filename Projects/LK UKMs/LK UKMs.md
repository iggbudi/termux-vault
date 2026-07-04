# LK UKMs

## Overview
**LK UKMs** adalah sistem manajemen proposal dan laporan pertanggungjawaban (LPJ) untuk Unit Kegiatan Mahasiswa. Project ini dikonversi dari implementasi Google Apps Script menjadi aplikasi [[PHP Native]] dengan database [[MySQL]]/[[MariaDB]].

Fokus utama project:

- Proposal kegiatan
- LPJ
- Surat masuk/keluar
- Disposisi
- Pengumuman
- Approval chain multi-level
- Monitoring dan laporan
- Arsip proposal
- Notifikasi WhatsApp/email
- PWA/mobile experience

## Source

- Path VPS: `/var/www/lk.pjdigital.top`
- Domain: `lk.pjdigital.top`
- Latest local commit saat dibaca: `7b11219 audit: C6 CSRF surat.php — false positive, semua handler sudah punya requireCsrfToken`
- Catatan penting: saat dibaca, worktree project LK sedang **tidak clean** dengan banyak modified/untracked files. Vault hanya membaca dokumentasi/metadata, tidak mengubah project LK.

## Tech Stack

- [[PHP Native]] 8.x, tanpa framework
- [[MySQL]] / [[MariaDB]]
- `mysqli` prepared statements
- [[Composer]] dependencies:
  - `tecnickcom/tcpdf` — PDF generation
  - `endroid/qr-code` — QR code generation
  - `phpmailer/phpmailer` — SMTP email
  - `phpoffice/phpspreadsheet` — spreadsheet/export support
- Frontend:
  - Tailwind CSS CDN dengan maroon theme
  - Font Awesome 6.4
  - Chart.js
  - Vanilla JavaScript
- PWA:
  - `manifest.json`
  - `sw.js`
  - `offline.html`
  - role-specific mobile navigation

## Architecture

```text
Browser / PWA
  ↓
Apache + .htaccess rewrite
  ↓
index.php router
  ↓
api/*.php or pages/*.php
  ↓
templates/header.php + sidebar.php + footer.php
  ↓
includes/functions.php + security.php + email.php
  ↓
config/database.php
  ↓
MySQL/MariaDB
```

### Important Architecture Choices

- Native PHP tanpa framework.
- `index.php` sebagai entry point dan router utama.
- `api/*.php` sebagai JSON/API controller layer.
- `pages/*.php` sebagai server-rendered HTML views.
- `templates/*.php` untuk layout dan navigasi.
- `includes/*.php` untuk helper, security, email, dan logic reusable.
- `config/database.php` menyediakan koneksi DB via `getDBConnection()`.
- `autopost/` adalah standalone tool, diperlakukan terpisah dari app LK utama.

## Project Structure

```text
/var/www/lk.pjdigital.top/
├── index.php
├── api/
│   ├── auth.php
│   ├── users.php
│   ├── surat.php
│   ├── proposal.php
│   ├── penggunaan_ruangan.php
│   ├── alur.php
│   ├── pengumuman.php
│   ├── arsip.php
│   ├── laporan.php
│   └── login_audit.php
├── pages/
│   ├── dashboard.php
│   ├── proposal.php
│   ├── surat_masuk.php
│   ├── disposisi.php
│   ├── penggunaan_ruangan.php
│   ├── monitoring.php
│   ├── laporan.php
│   ├── users.php
│   └── ...
├── templates/
├── includes/
├── config/
├── docs/
├── public/
├── uploads/
├── scripts/
└── autopost/
```

## Main Modules

### Proposal & LPJ
- Proposal dan LPJ berbagi tabel `proposal`.
- Dibedakan oleh field `jenis` (`Proposal` atau `LPJ`).
- Approval sheet proposal dibuat via `api/proposal.php?action=generateLembarPengesahan&id=...`.
- Approval sheet LPJ dibuat via `api/proposal.php?action=generateLembarPengesahanLPJ&id=...`.
- PDF generation memakai TCPDF dan stream langsung ke browser, bukan `jsonResponse()`.

### Surat Masuk/Keluar
- UI utama: `pages/surat_masuk.php`.
- API utama: `api/surat.php`.
- Surat keluar dari user dapat membuat pasangan surat masuk otomatis.
- Surat masuk manual memakai `ref_id = MANUAL`.
- Status surat valid:
  - `Menunggu`
  - `Disetujui`
  - `Ditolak`
  - `Revisi`

### Disposisi
- Disposisi surat ditujukan ke user/role tertentu.
- Status disposisi:
  - `Terkirim`
  - `Dibaca`
  - `Diproses`
  - `Selesai`
- Role `Read Only` tidak boleh update status disposisi.

### Jadwal / Penggunaan Ruangan
- Endpoint: `api/penggunaan_ruangan.php`.
- Page: `pages/penggunaan_ruangan.php`.
- Role `User` dapat melihat; role `Disposisi` pernah diberi read/write access menurut memory project.

### Pengumuman, Monitoring, Laporan, Arsip
- Pengumuman dikelola dari API/page sendiri.
- Monitoring dan laporan terutama untuk Super Admin/Admin.
- Arsip proposal merupakan fitur Super Admin.

## Role / Permission Summary

| Role | Ringkasan Akses |
|------|-----------------|
| Super Admin | Full access semua modul, users, alur, settings, arsip, audit |
| Admin | Modul operasional: surat, disposisi, proposal/LPJ, monitoring, laporan, pengumuman, logs |
| User | Pengajuan proposal/LPJ, surat, jadwal ruangan, pengumuman, profil |
| Approver | Approval proposal/LPJ, disposisi yang ditujukan, profil |
| Disposisi | Dashboard, surat, disposisi, jadwal ruangan, profil |
| Read Only | View-only dashboard, surat, disposisi, proposal/LPJ, profil |

Catatan: guard server tetap sumber kebenaran. Menu UI/sidebar hanya representasi akses.

## Security Notes

Project guidelines penting:

- Semua SQL harus pakai prepared statements.
- Jangan percaya role dari client; akses harus via session role checks dan helper seperti `requireRole()`.
- POST API wajib CSRF validation.
- Frontend POST mengirim `csrf_token: window.csrfToken`.
- Output user-controlled perlu `sanitize()` sebelum render.
- Password memakai bcrypt, dengan legacy plaintext fallback pada beberapa konteks lama.
- PDF streaming endpoints tidak boleh memanggil `jsonResponse()` saat sukses.
- Upload sebaiknya memakai `uploadFileSecure()` dengan MIME, extension, dan size rules eksplisit.
- Log aktivitas penting via `recordLog()` / `recordLogSystem()`.
- Approval-chain comparison memakai `normalizeApprover()`.

## Database Notes

Schema utama berada di:

```text
config/schema.sql
```

Tabel penting dari dokumentasi/memory:

- `users`
- `activity_logs`
- `login_audit_logs`
- `surat_masuk`
- `surat_keluar`
- `surat_disposisi`
- `arsip`
- `penggunaan_ruangan`
- `pengumuman`
- `proposal`
- `proposal_revision_history`
- `alur`
- `proposal_reminder_log`
- `system_config`

## API Endpoints

| Endpoint | Fungsi |
|----------|--------|
| `/api/auth` | Login, logout, CSRF token |
| `/api/users` | User management |
| `/api/proposal` | Proposal & LPJ operations |
| `/api/surat` | Surat masuk/keluar dan disposisi |
| `/api/penggunaan_ruangan` | Jadwal/penggunaan ruangan |
| `/api/alur` | Approval chain |
| `/api/pengumuman` | Pengumuman |
| `/api/arsip` | Arsip |
| `/api/laporan` | Laporan/statistik |
| `/api/login_audit` | Audit login |

## PWA / Mobile Notes

PWA requirements dari docs project:

- App installable dari Chrome Android/Desktop.
- Scope root `/`.
- `manifest.json` harus public.
- Service worker cache hanya aset yang aman.
- `/api/*`, upload privat, dan generated PDF tidak boleh masuk precache.
- Offline fallback via `offline.html`.
- Static cache version di `sw.js` perlu dibump saat asset/offline behavior berubah.
- Mobile role-specific bottom nav untuk User/Approver dan layout sidebar untuk role lain.

## AI / Automation Notes

Project ini punya banyak dokumentasi/agent notes:

- `AGENTS.md`
- `CLAUDE.md`
- `panduanagen.md`
- `.ai-team/`
- `.pi/agents/`

Operating notes penting:

- Treat `CLAUDE.md` sebagai primary architecture/behavior reference sebelum ubah kode.
- Prefer existing native PHP patterns; jangan introduce framework/runtime baru tanpa alasan kuat.
- `autopost/` adalah tool terpisah.

## Useful Commands

```bash
# Install PHP dependencies
rtk composer install

# Cek syntax PHP satu file
rtk php -l path/to/file.php

# Test WhatsApp
rtk php test_wa.php

# Utility scripts
rtk php scripts/check_alur.php
rtk php scripts/check_detail.php
rtk php scripts/check_user.php
rtk php scripts/ensure_superadmin.php
```

## Current Gotchas

- Worktree LK sedang tidak clean saat dokumentasi vault ini dibuat; jangan commit/ubah project LK tanpa review perubahan existing.
- Ada file untracked bernama `--help` di root LK saat scan.
- `autopost/` standalone, jangan campur dengan app utama.
- PDF endpoints stream binary langsung; jangan dipaksa pakai JSON response.
- Service worker tidak boleh cache API/private uploads/generated PDF.

## Related Docs in Project

- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `arsitektur.md`
- `teknis.md`
- `docs/alur-surat.md`
- `docs/menu-role-matrix.md`
- `docs/pwa-requirements-validation.md`

## Related Notes

- [[VPS Projects]]
- [[PHP Native]]
- [[MySQL]]
- [[MariaDB]]
- [[Composer]]
- [[PWA]]
- [[Git]]

## Progress Log

### 2026-07-05
- Dibaca dari VPS dan dibuat note detail di vault.
- Menggunakan README, docs project, dan memory historis LK UKMs.

---
Status: 🔄 Production / Active Development
Source: `/var/www/lk.pjdigital.top`
Tags: #project #vps #php #mysql #ukm #proposal #lpj #pwa
