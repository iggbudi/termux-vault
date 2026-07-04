# VPS Projects

## Overview
Inventaris project yang ditemukan di VPS pada folder `/var/www`. Note ini menjadi entry point untuk mendokumentasikan project live/development yang ada di server.

## Scan Summary

Tanggal scan: 2026-07-05
Root: `/var/www`

## Project Candidates

### [[Slack Multi-Agent Bridge]]
- **Path**: `/var/www/bot.pjdigital.top`
- **Stack**: Node.js, TypeScript, Express, Pi Coding Agent, SQLite
- **Docs ditemukan**: `README.md`, `AGENTS.md`, `.env.example`, `package.json`
- **Deskripsi**: Slack slash command `/pi` sebagai coordination layer untuk Pi Coding Agent dan multi-agent workflow.
- **Status dokumentasi vault**: perlu dibuat note detail.

### [[SIMPMU DPMP2]]
- **Path**: `/var/www/dpmp2.dwibudi.my.id`
- **Stack**: PHP 8.x, MySQL/MariaDB, Bootstrap, Playwright QA
- **Docs ditemukan**: `README.md`, `.ai-team/README.md`, `package.json`
- **Deskripsi**: Sistem Informasi Penjaminan Mutu untuk monitoring tridarma, review UJM, master data, periode, dan reporting.
- **Status dokumentasi vault**: ✅ note detail sudah dibuat di [[SIMPMU DPMP2]].

### [[Ruang Belajar Terbuka]]
- **Path**: `/var/www/dwibudi.my.id`
- **Stack**: Web app PHP/site custom, Google OAuth, OpenAI API, file uploads
- **Docs ditemukan**: `README.md`, `.env.example`
- **Deskripsi**: Platform e-learning untuk materi perkuliahan, pendaftaran kelas, tugas, presensi, nilai, dan admin panel.
- **Status dokumentasi vault**: ✅ note detail sudah dibuat di [[Ruang Belajar Terbuka]].

### [[EclipseTrack]]
- **Path**: `/var/www/eclipsetrack.my.id`
- **Stack**: PHP, Supabase, static/article pages
- **Docs ditemukan**: `.env.example`, `supabase/README.md`
- **Deskripsi**: Website EclipseTrack dengan artikel, jurnal, kategori, auth, dan integrasi Supabase.
- **Status dokumentasi vault**: perlu dibuat note detail.

### [[LK UKMs]]
- **Path**: `/var/www/lk.pjdigital.top`
- **Stack**: PHP native, Composer, TCPDF, QR Code, PHPMailer, PhpSpreadsheet
- **Docs ditemukan**: `README.md`, `AGENTS.md`, `.ai-team/README.md`, `.env.example`, `composer.json`
- **Deskripsi**: Sistem proposal dan LPJ untuk UKM, termasuk approval chain, surat, pengumuman, PDF, WhatsApp notification, dan activity logs.
- **Status dokumentasi vault**: ✅ note detail sudah dibuat di [[LK UKMs]].

### [[X Creator Agent]]
- **Path**: `/var/www/nanariset.my.id/xcreator`
- **Stack**: Next.js, TypeScript, Tailwind CSS, SQLite, Prisma, Pi Coding Agent
- **Docs ditemukan**: `README.md`, `.env.example`, `package.json`
- **Deskripsi**: Dashboard MVP untuk membuat reply panjang/explainer di X/Twitter Premium dengan workflow multi-agent dan anti-slop review.
- **Status dokumentasi vault**: perlu dibuat note detail.

### [[WA Dwibudi Multi-Device]]
- **Path**: `/var/www/wa.dwibudi.my.id`
- **Stack**: Node.js, Express, Baileys, MariaDB, Nodemailer, QR Code, XLSX
- **Docs ditemukan**: `README.md`, `AGENTS.md`, `.env.example`, `package.json`
- **Deskripsi**: WhatsApp multi-device marketing service berbasis Baileys.
- **Status dokumentasi vault**: ✅ note detail sudah dibuat di [[WA Dwibudi Multi-Device]].

## Supporting / Special Directories

### `/var/www/lk.pjdigital.top-worktrees`
Berisi banyak worktree/task branch untuk project [[LK UKMs]]. Ini sebaiknya tidak dianggap project terpisah, tapi sebagai workspace turunan.

### `/var/www/html`, `/var/www/cgi-bin`, `/var/www/lelangu.my.id`
Belum ada metadata utama yang cukup dari scan ringkas. Perlu inspeksi manual jika ingin didokumentasikan.

### `/var/www/termux-vault`
Vault Obsidian ini sendiri.

## Suggested Documentation Order

1. [[LK UKMs]] — project besar, sudah banyak docs dan memory historis.
2. [[SIMPMU DPMP2]] — aplikasi institusional dengan README jelas.
3. [[Ruang Belajar Terbuka]] — platform e-learning pribadi.
4. [[WA Dwibudi Multi-Device]] — service WhatsApp aktif.
5. [[Slack Multi-Agent Bridge]] — infrastruktur multi-agent.
6. [[X Creator Agent]] — project agent/AI writing.
7. [[EclipseTrack]] — bisa dibuat detail dengan skill/project context khusus.

## Next Actions

- [ ] Pilih project prioritas untuk dibuat note detail.
- [ ] Buat folder dan note per project di `Projects/`.
- [ ] Tambahkan tech notes yang belum ada di `Knowledge/`.
- [ ] Update [[MOC/Projects]] dan [[MOC/Technologies]].
- [ ] Commit dan push perubahan vault.

## Related

- [[MOC/Projects]]
- [[MOC/Technologies]]
- [[Git]]
- [[Multi-Agent Orchestration]]

---
Tags: #project-index #vps #inventory #documentation
