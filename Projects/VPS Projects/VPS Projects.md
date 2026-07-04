---
type: project-detail
status: maintained
title: "VPS Projects"
slug: "vps-projects"
updated: "2026-07-05"
repo: ""
source-path: "/var/www"
production-url: ""
priority: medium
tags:
  - project
  - vps
  - inventory
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

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
- **Status dokumentasi vault**: ✅ note detail sudah dibuat di [[Slack Multi-Agent Bridge]].

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
- **Status dokumentasi vault**: ✅ note detail sudah dibuat di [[EclipseTrack]].

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
- **Status dokumentasi vault**: ✅ note detail sudah dibuat di [[X Creator Agent]].


### [[Lelangu Bitcoin Chart]]
- **Path**: `/var/www/lelangu.my.id`
- **Domain**: `lelangu.my.id`
- **Stack**: Static HTML/CSS/JavaScript, Tokocrypto public kline API, Nginx
- **Docs ditemukan**: `public/index.html`, Nginx vhost config
- **Deskripsi**: Dashboard chart Bitcoin/crypto Tokocrypto dengan indikator MA/RSI/MACD, alert lokal, watchlist, dan backtest sederhana.
- **Status dokumentasi vault**: ✅ note detail sudah dibuat di [[Lelangu Bitcoin Chart]].

### [[Nana Research]]
- **Path**: `/var/www/nanariset.my.id`
- **Domain**: `nanariset.my.id`
- **Stack**: PHP Native, Tailwind CDN, Font Awesome CDN, file-based JSON short links, Nginx reverse proxy
- **Docs ditemukan**: `index.php`, `short-links.php`, `.htaccess`, Nginx vhost config
- **Deskripsi**: Landing page jasa website/aplikasi UMKM dengan tool short URL dan proxy subapp `/xcreator` serta `/wa/`.
- **Status dokumentasi vault**: ✅ note detail sudah dibuat di [[Nana Research]].

### [[WA Dwibudi Multi-Device]]
- **Path**: `/var/www/wa.dwibudi.my.id`
- **Stack**: Node.js, Express, Baileys, MariaDB, Nodemailer, QR Code, XLSX
- **Docs ditemukan**: `README.md`, `AGENTS.md`, `.env.example`, `package.json`
- **Deskripsi**: WhatsApp multi-device marketing service berbasis Baileys.
- **Status dokumentasi vault**: ✅ note detail sudah dibuat di [[WA Dwibudi Multi-Device]].

## Supporting / Special Directories

### `/var/www/lk.pjdigital.top-worktrees`
Berisi banyak worktree/task branch untuk project [[LK UKMs]]. Ini sebaiknya tidak dianggap project terpisah, tapi sebagai workspace turunan.

### `/var/www/html`, `/var/www/cgi-bin`
Direktori support/default server; belum dianggap project app terpisah dari scan ini.

### `/var/www/termux-vault`
Vault Obsidian ini sendiri.

## Suggested Documentation Order

1. [[LK UKMs]] — project besar, sudah banyak docs dan memory historis.
2. [[SIMPMU DPMP2]] — aplikasi institusional dengan README jelas.
3. [[Ruang Belajar Terbuka]] — platform e-learning pribadi.
4. [[WA Dwibudi Multi-Device]] — service WhatsApp aktif.
5. [[Slack Multi-Agent Bridge]] — infrastruktur multi-agent.
6. [[X Creator Agent]] — project agent/AI writing.
7. [[EclipseTrack]] — sudah dibuat detail dengan skill/project context khusus.
8. [[Lelangu Bitcoin Chart]] — sisa vhost static chart dashboard.
9. [[Nana Research]] — root domain nanariset.my.id dan shortener.


## Apache Vhost Scan — 2026-07-05

Sumber: `/etc/apache2/sites-enabled`, `/etc/apache2/sites-available`, dan marker file di `/var/www`. Default Apache vhost tidak dihitung sebagai project; total project vhost: **19**.

| Project | Domain | Source / Root | Proxy | Stack / Marker | Status |
|---|---|---|---|---|---|
| [[AIDIS Disposisi Surat]] | `aidis.my.id` | `/var/www/aidis.my.id/public` | `-` | PHP Native, Composer | active |
| [[Al-Barokah]] | `al-barokah.my.id` | `/var/www/al-barokah.my.id/public` | `-` | PHP Native, Composer | active |
| [[Arisan PKK]] | `arisanpkk.web.id` | `/var/www/arisanpkk.web.id` | `http://localhost:3100/` | Vite, TypeScript, Node runtime proxy | active |
| [[SIMPEL-U Telegram Bot]] | `bot.shm.my.id` | `/var/www/bot.shm.my.id` | `http://127.0.0.1:3107/` | Node.js, TypeScript, Python requirements | active |
| [[BotJB Nanariset]] | `botjb.nanariset.my.id` | `/var/www/botjb.nanariset.my.id/public_html` | `http://127.0.0.1:3011/` | Static/PHP public_html plus local app proxy | active |
| [[Brainboard SocAI]] | `brainboard.socai.my.id` | `/var/www/brainboard.socai.my.id/public` | `-` | Laravel, PHP, Composer, Vite build assets | active |
| [[Cmaestro BengkelBot]] | `cmaestro.my.id` | `/var/www/cmaestro.my.id/public` | `http://127.0.0.1:3012/` | Node.js, package repo, Apache proxy | active |
| [[Dompet Bitget]] | `dompet.lelangu.my.id` | `/var/www/dompet.lelangu.my.id` | `http://localhost:3456/` | Node.js fullstack, backend/frontend packages | active |
| [[EduGuide SocAI]] | `eduguide.socai.my.id` | `/var/www/eduguide.socai.my.id` | `frontend 3003, api/storage 8003` | Split frontend/backend reverse proxy | active |
| [[Fetal PJD]] | `fetal.pjdigital.top` | `/home/ubuntu/deploy_fetal/app/resiko_kehamilan` | `http://127.0.0.1:8000/` | Flask, Gunicorn, scikit-learn, SHAP, pandas | active |
| [[CLAW Invoice]] | `inv.nanariset.my.id` | `/var/www/inv.nanariset.my.id/repo/invoice` | `api http://127.0.0.1:3001/api` | Static/PHP invoice workspace plus API proxy | active |
| [[Kausar Leather]] | `kl.socai.my.id` | `/var/www/kl.socai.my.id` | `-` | PHP Native, MySQL likely, admin/dashboard folders | active |
| [[Quizify SocAI]] | `quizify.socai.my.id` | `/var/www/quizify.socai.my.id/public` | `-` | Laravel, PHP, Composer, Vite | active |
| [[SafeSphere]] | `safesphere.my.id` | `/var/www/safesphere.my.id/public` | `api http://127.0.0.1:3000/api/` | Static frontend, Node/Express API, SQLite (from prior scan) | active |
| [[SIMPEL-U]] | `simpelu.my.id` | `/var/www/simpelu.my.id/public` | `-` | PHP/Laravel-like structure or custom PHP app | active |
| [[SJM Lelangu]] | `sjmlelang.com` | `/var/www/sjmlelang.com` | `-` | PHP Native auction platform | active |
| [[SocAI]] | `socai.my.id` | `/var/www/socai.my.id` | `http://127.0.0.1:3010/` | Node.js, autonomous AI social content app | active |
| [[AI Study Buddy]] | `studdybuddy.socai.my.id` | `/var/www/studdybuddy.socai.my.id/public` | `-` | Laravel, MongoDB, Groq API | active |
| [[VibePlan AI]] | `vibeplan.socai.my.id` | `/var/www/vibeplan.socai.my.id` | `frontend 3002, api/storage 8001` | Next.js frontend, Laravel backend | active |

### Scan Notes

- Semua project di atas berasal dari Apache enabled sites dan mayoritas punya pasangan SSL `-le-ssl.conf`.
- `fetal.pjdigital.top` ditemukan: source berada di `/home/ubuntu/deploy_fetal/app/resiko_kehamilan`, berjalan lewat `fetal-flask.service` + Gunicorn `127.0.0.1:8000`.
- Beberapa project adalah reverse proxy ke service lokal; cek process manager/systemd/PM2 sebelum restart.
- Jangan menyalin isi `.env` atau secret ke vault.

## Next Actions

- [x] Pilih project prioritas untuk dibuat note detail.
- [x] Buat folder dan note per project di `Projects/`.
- [ ] Tambahkan tech notes yang belum ada di `Knowledge/`.
- [x] Update [[MOC/Projects]] dan [[MOC/Technologies]].
- [ ] Commit dan push perubahan vault.

## Related

- [[MOC/Projects]]
- [[MOC/Technologies]]
- [[Git]]
- [[Multi-Agent Orchestration]]

---
Tags: #project-index #vps #inventory #documentation
