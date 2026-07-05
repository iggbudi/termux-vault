---
type: techstack
project: "[[IBRAA]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - ops/nginx
---

# IBRAA Tech Stack

| Layer | Technology |
|---|---|
| Domain | `ibraa.or.id` |
| Language | PHP |
| Runtime | Nginx + PHP-FPM pool `www` |
| DocumentRoot | `/var/www/ibraa.or.id/public` |
| Source layout | `app`, `database`, `docs`, `public`, `storage` |
| Detected markers | `docs/README.md`, `public/index.php`, `.git` |

## Upgrade Notes

- [ ] Check framework/library structure before upgrades.
- [ ] Confirm database engine from config without copying credentials.
- [ ] Use maintenance marker for planned downtime if needed.
