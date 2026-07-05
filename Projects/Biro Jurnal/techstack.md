---
type: techstack
project: "[[Biro Jurnal]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/html
  - lang/php
  - ops/nginx
---

# Biro Jurnal Tech Stack

| Layer | Technology |
|---|---|
| Domain | `birojurnal.com` |
| Languages | HTML, PHP enabled by vhost |
| Runtime | Nginx + PHP-FPM |
| DocumentRoot | `/var/www/birojurnal.com/public` |
| Config | `/etc/nginx/conf.d/birojurnal.com.conf` |
| Detected markers | `public/index.html` |

## Upgrade Notes

- [ ] Inspect source before changing runtime assumptions.
- [ ] Validate Nginx config before reload.
- [ ] Do not record secrets in vault notes.
