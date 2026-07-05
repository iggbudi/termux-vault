---
type: techstack
project: "[[JOGASTO SHM Publisher]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - fw/ojs
  - ops/nginx
---

# JOGASTO SHM Publisher Tech Stack

| Layer | Technology |
|---|---|
| Domain | `jogasto.shmpublisher.com` |
| Application | OJS-style PHP journal platform |
| Runtime | Nginx + PHP-FPM pool `ojs` |
| PHP-FPM socket | `/run/php-fpm/ojs.sock` |
| DocumentRoot | `/var/www/jogasto.shmpublisher.com/current` |
| Storage | `/var/www/filesjogasto` |
| Detected markers | `AGENTS.md`, `README.md`, `config.inc.php`, `index.php` |

## Upgrade Notes

- [ ] Backup database and files before changes.
- [ ] Validate Nginx and PHP-FPM configs before reload.
- [ ] Confirm OJS version from source/admin.
