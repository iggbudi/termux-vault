# EclipseTrack

## Overview
**EclipseTrack** adalah website konten/SEO berbahasa Indonesia tentang penulisan artikel ilmiah informatika, pemilihan jurnal SINTA, verifikasi jurnal, submit jurnal, dan panduan terkait. Project memakai PHP procedural dengan Supabase sebagai data backend opsional dan fallback local arrays untuk public rendering.

## Source

- Path VPS: `/var/www/eclipsetrack.my.id`
- Domain: `eclipsetrack.my.id`
- Git status: folder ini **bukan git repository** saat dibaca.
- Skill context: `eclipsetrack-project`.

## Tech Stack

- [[PHP Native]] procedural
- Supabase REST/RPC via PHP cURL
- Static PHP article/category/journal pages
- Local fallback content arrays di `includes/content.php`
- Admin UI under `auth/`
- Google Search Console OAuth / service account helpers
- Telegram SEO daily report script
- Sitemap/robots/static SEO pages

## Main Features

### Public Site
- Homepage: `index.php`.
- Artikel listing: `artikel.php` dan static pages under `artikel/`.
- Kategori listing: `kategori.php` dan static pages under `kategori/`.
- Jurnal listing/profile: `jurnal.php`, `jurnal/*.php`, legacy `jurnal-joscex.php`.
- Main content page: `daftar-jurnal-sinta-2-informatika.php`.
- `sitemap.xml` dan `robots.txt`.

### Content Themes
- Penulisan artikel ilmiah informatika.
- Pemilihan jurnal SINTA 2 informatika.
- Verifikasi akreditasi, ISSN, URL resmi, dan kredibilitas jurnal.
- Submit jurnal, reviewer response, Turnitin/similarity, sitasi, novelty, metodologi.

### Admin
Admin UI ada di `auth/`:

- `auth/index.php` — login.
- `auth/dashboard.php` — dashboard.
- `auth/journals.php` — CRUD jurnal.
- `auth/articles.php` — CRUD metadata artikel.
- `auth/media.php` — media.
- `auth/search-console.php` — Search Console integration.
- `auth/profile.php` — profile.

## Architecture

```text
Public Request
  ↓
Static PHP page / listing page
  ↓
includes/layout.php
  ↓
includes/content.php
  ↓
Supabase fetch if configured
  ↓ fallback
Local arrays in content.php
```

Admin architecture:

```text
/auth/*
  ↓ require_admin()
includes/admin-auth.php
  ↓ Supabase RPC
admin_users / admin_settings / article_metadata / journals
```

## Important Files

```text
/var/www/eclipsetrack.my.id/
├── index.php
├── daftar-jurnal-sinta-2-informatika.php
├── artikel.php
├── artikel/*.php
├── kategori.php
├── kategori/*.php
├── jurnal.php
├── jurnal/*.php
├── auth/*.php
├── includes/
│   ├── content.php
│   ├── layout.php
│   ├── supabase.php
│   ├── admin-auth.php
│   ├── google-search-console.php
│   └── seo-audit.php
├── scripts/
├── supabase/
├── sitemap.xml
└── robots.txt
```

## Supabase Data Model

Supabase is optional for public rendering. If Supabase env/curl fails, site falls back to local arrays.

Required public env:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

Admin env:

- `ADMIN_RPC_SECRET`

Search Console / SEO report env examples:

- `GSC_SITE_URL`
- `GOOGLE_OAUTH_CLIENT_ID`
- `GOOGLE_OAUTH_CLIENT_SECRET`
- `GOOGLE_OAUTH_REDIRECT_URI`
- `GOOGLE_OAUTH_TOKEN_PATH`
- `GOOGLE_SERVICE_ACCOUNT_JSON_PATH`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

SQL files:

- `supabase/schema.sql` — `journals` table and public active policy.
- `supabase/admin-auth.sql` — `admin_users` and `verify_admin_login` RPC.
- `supabase/admin-crud.sql` — `admin_settings`, `article_metadata`, admin CRUD RPCs.
- `supabase/add-article-faq.sql` — article FAQ RPC extension.
- Seeds for journal and article metadata.

## SEO / Search Console

- `includes/seo-audit.php` builds audit data from sitemap, article metadata, internal links, word count, FAQ/media checks.
- `includes/google-search-console.php` supports OAuth and service account token handling.
- `scripts/send-seo-daily-report.php` supports dry-run Telegram report.
- `scripts/sync-article-faq.php` syncs FAQ data.

## Commands

From `/var/www/eclipsetrack.my.id`:

```bash
rtk php -l path/to/file.php
rtk php scripts/check-supabase.php
rtk php scripts/send-seo-daily-report.php --dry-run
rtk php scripts/apply-supabase-schema.php supabase/schema.sql
rtk php scripts/apply-supabase-schema.php supabase/admin-auth.sql
rtk php scripts/apply-supabase-schema.php supabase/admin-crud.sql
```

## Current Gotchas

- Folder is not a git repository at scan time.
- `.env` can contain Supabase, Google, Telegram, and admin secrets; do not expose or commit.
- For journal accreditation/SINTA/current claims, verify from official/current sources before changing factual content.
- Public site should keep working even if Supabase is unavailable due local fallback arrays.
- Admin write operations should use RPC-secret pattern, not direct anon table writes.
- Use `h()` for escaped output and existing URL/path helpers.

## Related Docs in Project

- `supabase/README.md`
- `supabase/*.sql`
- `includes/content.php`
- `includes/layout.php`
- `includes/supabase.php`
- `includes/admin-auth.php`
- `includes/google-search-console.php`
- `includes/seo-audit.php`

## Related Notes

- [[VPS Projects]]
- [[PHP Native]]
- [[Supabase]]
- [[SEO]]
- [[Google Search Console]]

## Progress Log

### 2026-07-05
- Dibaca dari VPS dan dibuat note detail di vault.

---
Status: 🔄 Active / Content Site
Source: `/var/www/eclipsetrack.my.id`
Tags: #project #vps #php #supabase #seo #content #eclipsetrack
