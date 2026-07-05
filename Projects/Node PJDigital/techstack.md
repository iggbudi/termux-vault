---
type: techstack
project: "[[Node PJDigital]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - fw/ojs
  - ops/nginx
---

# Node PJDigital Tech Stack

| Layer | Technology |
|---|---|
| Domain | `node.pjdigital.top` |
| Application | OJS-style PHP application with publisher landing |
| Runtime | Nginx + PHP-FPM pool `ojs` |
| PHP-FPM socket | `/run/php-fpm/ojs.sock` |
| DocumentRoot | `/var/www/ojs` |
| Detected markers | `README.md`, `config.inc.php`, `index.php`, `publisher/index.html` |

## Upgrade Notes

- [ ] Confirm app role before renaming or moving.
- [ ] Backup database and files before changes.
- [ ] Validate Nginx and PHP-FPM configs before reload.
