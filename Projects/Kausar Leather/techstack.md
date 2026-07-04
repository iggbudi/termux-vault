---
type: techstack
project: "[[Kausar Leather]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - ops/apache
---

# Kausar Leather Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `kl.socai.my.id` |
| Languages | PHP |
| Frameworks / Runtime | PHP Native, MySQL likely, admin/dashboard folders |
| Database / Storage | MySQL/MariaDB |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/kl.socai.my.id` |
| Reverse Proxy | `-` |

## Detected Markers

- README.md

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/kl.socai.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Kausar Leather]]
- [[VPS Projects]]
- [[MOC/Technologies]]
