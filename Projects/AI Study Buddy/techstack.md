---
type: techstack
project: "[[AI Study Buddy]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - fw/laravel
  - api/groq
  - ops/apache
---

# AI Study Buddy Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `studdybuddy.socai.my.id` |
| Languages | not captured |
| Frameworks / Runtime | Laravel, MongoDB, Groq API |
| Database / Storage | MongoDB |
| Services / APIs | Groq API |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/studdybuddy.socai.my.id/public` |
| Reverse Proxy | `-` |

## Detected Markers

- README.md, composer.json, artisan

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/studdybuddy.socai.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[AI Study Buddy]]
- [[VPS Projects]]
- [[MOC/Technologies]]
