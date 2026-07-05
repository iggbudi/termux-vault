---
type: techstack
project: "[[JOSCEX SHM Publisher]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - fw/ojs
  - ops/nginx
---

# JOSCEX SHM Publisher Tech Stack

| Layer | Technology |
|---|---|
| Domain | `joscex.shmpublisher.com` |
| Application | OJS-style PHP journal platform |
| Runtime | Nginx + PHP-FPM pool `ojs` |
| PHP-FPM socket | `/run/php-fpm/ojs.sock` |
| DocumentRoot | `/var/www/joscex` |
| Storage | `/var/www/filesjoscex` |
| Detected markers | `AGENTS.md`, `README.md`, `config.inc.php`, `index.php` |

## Upgrade Notes

- [ ] Read project `AGENTS.md` before source edits.
- [ ] Backup database and files before changes.
- [ ] Confirm OJS version from source/admin.
