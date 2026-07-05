---
type: techstack
project: "[[SHM My ID]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - db/mariadb
  - ops/nginx
---

# SHM My ID Tech Stack

| Layer | Technology |
|---|---|
| Domain | `shm.my.id` |
| Language | PHP |
| Runtime | Nginx + PHP-FPM pool `www` |
| Database | MariaDB/MySQL indicated by `schema.sql`; confirm from config |
| DocumentRoot | `/var/www/shm.my.id/public` |
| Source layout | `app`, `docs`, `migrations`, `public`, `storage`, `tests`, `tools`, `vendor` |
| Detected markers | `README.md`, `AGENTS.md`, `.env.example`, `schema.sql`, `public/index.php` |

## Upgrade Notes

- [ ] Read source `AGENTS.md` before source edits.
- [ ] Check dependency files and tests before changing runtime.
- [ ] Do not record `.env` values in vault.
