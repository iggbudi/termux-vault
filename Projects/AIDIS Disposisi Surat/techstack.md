---
type: techstack
project: "[[AIDIS Disposisi Surat]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - ops/apache
---

# AIDIS Disposisi Surat Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `aidis.my.id` |
| Languages | PHP |
| Frameworks / Runtime | PHP Native, Composer |
| Database / Storage | not captured |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/aidis.my.id/public` |
| Reverse Proxy | `-` |

## Detected Markers

- README.md, composer.json

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/aidis.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[AIDIS Disposisi Surat]]
- [[VPS Projects]]
- [[MOC/Technologies]]
