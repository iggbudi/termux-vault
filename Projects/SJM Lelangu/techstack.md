---
type: techstack
project: "[[SJM Lelangu]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - ops/apache
---

# SJM Lelangu Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `sjmlelang.com` |
| Languages | PHP |
| Frameworks / Runtime | PHP Native auction platform |
| Database / Storage | not captured |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/sjmlelang.com` |
| Reverse Proxy | `-` |

## Detected Markers

- README.md

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/sjmlelang.com`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[SJM Lelangu]]
- [[VPS Projects]]
- [[MOC/Technologies]]
