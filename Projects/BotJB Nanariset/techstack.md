---
type: techstack
project: "[[BotJB Nanariset]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - ops/apache
---

# BotJB Nanariset Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `botjb.nanariset.my.id` |
| Languages | PHP |
| Frameworks / Runtime | Static/PHP public_html plus local app proxy |
| Database / Storage | not captured |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/botjb.nanariset.my.id/public_html` |
| Reverse Proxy | `http://127.0.0.1:3011/` |

## Detected Markers

- public_html/

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/botjb.nanariset.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[BotJB Nanariset]]
- [[VPS Projects]]
- [[MOC/Technologies]]
