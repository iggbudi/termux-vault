---
type: techstack
project: "[[DIEF SHM Publisher]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - fw/ojs
  - ops/nginx
---

# DIEF SHM Publisher Tech Stack

| Layer | Technology |
|---|---|
| Domain | `dief.shmpublisher.com` |
| Application | OJS-style PHP journal platform |
| Runtime | Nginx + PHP-FPM pool `dief` |
| PHP-FPM socket | `/run/php-fpm/dief.sock` |
| DocumentRoot | `/var/www/dief/public_html` |
| Storage | `/var/www/dief/diefdata` |
| Detected markers | `README.md`, `config.inc.php`, `index.php` |

## Upgrade Notes

- [ ] Check OJS version from source before upgrades.
- [ ] Backup database and file storage before changes.
- [ ] Validate Nginx and PHP-FPM configs before reload.
