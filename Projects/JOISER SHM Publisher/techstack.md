---
type: techstack
project: "[[JOISER SHM Publisher]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - fw/ojs
  - ops/nginx
---

# JOISER SHM Publisher Tech Stack

| Layer | Technology |
|---|---|
| Domain | `joiser.shmpublisher.com` |
| Application | OJS-style PHP journal platform |
| Runtime | Nginx + PHP-FPM pool `ojs` |
| PHP-FPM socket | `/run/php-fpm/ojs.sock` |
| DocumentRoot | `/var/www/joiser.shmpublisher.com/current` |
| Storage | `/var/www/joiser.shmpublisher.com/files` |
| Detected markers | `README.md`, `config.inc.php`, `index.php` |

## Upgrade Notes

- [ ] Backup database and files before changes.
- [ ] Validate Nginx and PHP-FPM configs before reload.
- [ ] Confirm OJS version from source/admin.
