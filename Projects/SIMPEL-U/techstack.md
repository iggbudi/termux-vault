---
type: techstack
project: "[[SIMPEL-U]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - ops/apache
---

# SIMPEL-U Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `simpelu.my.id` |
| Languages | PHP |
| Frameworks / Runtime | PHP/Laravel-like structure or custom PHP app |
| Database / Storage | not captured |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/simpelu.my.id/public` |
| Reverse Proxy | `-` |

## Detected Markers

- README.md

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/simpelu.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[SIMPEL-U]]
- [[VPS Projects]]
- [[MOC/Technologies]]
