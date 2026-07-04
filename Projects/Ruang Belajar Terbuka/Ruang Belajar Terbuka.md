# Ruang Belajar Terbuka

## Overview
**Ruang Belajar Terbuka** adalah platform e-learning terbuka untuk `dwibudi.my.id`. Project ini menyediakan publikasi materi perkuliahan, login mahasiswa, pendaftaran mata kuliah, pengumpulan tugas, penilaian, presensi, dan panel admin untuk dosen/admin.

## Source

- Path VPS: `/var/www/dwibudi.my.id`
- Domain: `dwibudi.my.id`
- Repository: `https://github.com/iggbudi/dwibudi.my.id.git`
- Latest local commit saat dibaca: `8d88047 Update arsitektur.md to document OpenAI API runtime`
- Catatan penting: saat dibaca, worktree project ini **tidak clean** dengan banyak modified/untracked files. Vault hanya membaca dokumentasi/metadata, tidak mengubah project asli.

## Tech Stack

- [[PHP Native]] 8+ monolit SSR
- [[MySQL]] / [[MariaDB]] via PDO
- Nginx + PHP-FPM
- HTML, CSS, JavaScript vanilla
- [[Google OAuth]] 2.0 untuk login mahasiswa
- Cookie HMAC untuk admin auth
- Quill.js untuk editor materi admin
- [[OpenAI API]] Chat Completions untuk generator materi
- File uploads untuk gambar editor dan submission mahasiswa

## Main Features

### Publik / Mahasiswa
- Akses materi perkuliahan via pretty URL:
  - `/{slug-kelas}/{nomor-pertemuan}`
- Setiap mata kuliah punya 16 pertemuan.
- Login mahasiswa via Google OAuth.
- Profil mahasiswa: NIM dan program studi.
- Pendaftaran mata kuliah.
- Pengumpulan tugas dengan file PDF, DOC, DOCX, ZIP maksimal 10 MB.
- Melihat nilai dan feedback dari dosen/admin.
- Presensi per mata kuliah/pertemuan.
- Rekap kehadiran mahasiswa.

### Admin
- Panel admin modular via `/admin` dan `/admin/...`.
- Kelola mata kuliah.
- Kelola kurikulum/materi dengan Quill editor.
- Kelola tugas dan pengumpulan.
- Panel pengumpulan tugas dengan filter, statistik, dan pratinjau PDF.
- Penilaian tugas skala 0–100.
- Kelola sesi presensi per kelas/pertemuan.
- Koreksi status hadir mahasiswa.
- Rekap presensi lintas sesi/pertemuan.
- Filter/search dan export CSV rekap presensi.
- Generator ringkasan/detail materi via OpenAI API.
- Manajemen gambar editor.
- Log aktivitas admin.
- Pengaturan situs.

## Architecture

```text
Browser
  ↓ HTTPS
Nginx rewrite
  ↓
PHP-FPM
  ↓
index.php / admin.php / API endpoints
  ↓
config.php
  ↓
MySQL/MariaDB + filesystem uploads + OpenAI API
```

### Entry Points

| File | Purpose |
|------|---------|
| `index.php` | Halaman publik + LMS mahasiswa |
| `admin.php` | Entry point panel admin |
| `admin-login.php` | Login admin |
| `student-login.php` | Login mahasiswa |
| `google-auth.php` | Redirect OAuth Google |
| `google-callback.php` | Callback OAuth Google |
| `student-submit-assignment.php` | Upload tugas mahasiswa |
| `student-attendance.php` | Endpoint presensi mahasiswa |
| `generate-summary.php` | Generator ringkasan via OpenAI |
| `generate-detail.php` | Generator detail materi via OpenAI |
| `upload-image.php` | Upload gambar editor |

## Project Structure

```text
/var/www/dwibudi.my.id/
├── README.md
├── arsitektur.md
├── config.php
├── index.php
├── admin.php
├── admin-*.php
├── student-*.php
├── google-auth.php
├── google-callback.php
├── generate-summary.php
├── generate-detail.php
├── upload-image.php
├── schema.sql
├── migrations/
├── uploads/
│   ├── editor-images/
│   └── assignment-submissions/
├── assets/vendor/quill/
├── styles.css
├── site.js
├── admin-styles.css
└── admin.js
```

## Data Model

Schema utama: `schema.sql`.

Tabel utama:

- `admin_users`
- `students`
- `courses`
- `meetings`
- `course_enrollments`
- `course_assignments`
- `assignment_submissions`
- `assignment_grades`
- `attendance_sessions`
- `attendance_records`
- `site_settings`
- `admin_activity_logs`

Relasi penting:

```text
courses → meetings
courses → course_assignments → assignment_submissions
students → assignment_submissions
students → assignment_grades
courses → attendance_sessions → attendance_records
students → attendance_records
```

## Auth / Security Notes

### Admin Auth
Admin memakai cookie bertanda HMAC, bukan PHP session auth penuh.

Flow:

```text
login_admin()
  → payload: userId|username
  → HMAC-SHA256(payload, ADMIN_AUTH_SECRET)
  → cookie rb_admin_auth
  → HttpOnly, SameSite=Lax, Secure jika HTTPS
```

Catatan:

- Stateless dan sederhana.
- Tidak ada revoke token sebelum expiry kecuali rotasi secret.
- Rotasi `ADMIN_AUTH_SECRET` membatalkan semua cookie admin.

### Student Auth
Mahasiswa login dengan Google OAuth 2.0.

### CSRF & Upload
- CSRF token dipakai untuk form POST admin dan mahasiswa.
- Upload tugas dibatasi MIME, extension, dan ukuran.
- Submission mahasiswa di-ignore Git.
- `.env` tidak boleh masuk Git.

## OpenAI Integration

OpenAI dipakai untuk generator materi admin:

- `generate-summary.php`
- `generate-detail.php`
- Helper: `openai_chat_completion()` di `config.php`
- Env penting:
  - `OPENAI_API_KEY`
  - `OPENAI_MODEL`
  - `OPENAI_TIMEOUT`

Nginx/PHP timeout perlu cukup panjang karena proses generator AI bisa lama.

## URLs

| URL | Fungsi |
|-----|--------|
| `/` | Beranda mahasiswa |
| `/{slug}/{n}` | Materi pertemuan |
| `/student-login.php` | Login mahasiswa |
| `/admin` | Panel admin |
| `/admin/kelas/{id}/pengumpulan` | Pengumpulan & penilaian tugas |
| `/admin/kelas/{id}/presensi` | Kelola sesi presensi |
| `/admin-export-attendance.php?course_id={id}` | Export CSV rekap presensi |

## Deployment / Runtime Notes

Requirements:

- PHP 8.0+ dengan ekstensi `pdo_mysql`, `gd`, `fileinfo`, `curl`.
- MySQL 5.7+ / MariaDB 10.3+.
- Nginx atau Apache rewrite.
- Google Cloud OAuth credentials.
- OpenAI API key opsional untuk generator materi.

Nginx behavior penting:

- Pretty URL `/{slug}/{n}` rewrite ke `index.php?course={slug}&meeting={n}`.
- `client_max_body_size` minimal 10M.
- `fastcgi_read_timeout` diperpanjang untuk AI generation.

Writable directories:

```bash
uploads/editor-images
uploads/assignment-submissions
```

## Current Gotchas

- Worktree `/var/www/dwibudi.my.id` sedang tidak clean saat note ini dibuat; jangan commit/ubah project asli tanpa review perubahan existing.
- Project pernah migrasi dari client-side/localStorage ke PHP SSR + MySQL; beberapa file legacy masih ada tapi tidak dipakai produksi.
- Konten HTML Quill (`summary`, `detail_material`) sengaja dirender sebagai HTML agar materi tampil, sedangkan teks biasa tetap di-escape.
- Admin auth cookie stateless tidak punya revoke granular sebelum expiry.
- Upload production dan `.env` harus tetap tidak masuk Git.

## Related Docs in Project

- `README.md`
- `arsitektur.md`
- `schema.sql`
- `migrations/2026_06_30_add_attendance.sql`
- `tasklist-perbaikan.md`
- `codex23juni.md`

## Related Notes

- [[VPS Projects]]
- [[PHP Native]]
- [[MySQL]]
- [[MariaDB]]
- [[Google OAuth]]
- [[OpenAI API]]

## Progress Log

### 2026-07-05
- Dibaca dari VPS dan dibuat note detail di vault.

---
Status: 🔄 Active / Production
Source: `/var/www/dwibudi.my.id`
Tags: #project #vps #php #mysql #elearning #lms #openai #google-oauth
