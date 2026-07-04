---
type: techstack
project: "[[Quizify SocAI]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - fw/laravel
  - ops/apache
---

# Quizify SocAI Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `quizify.socai.my.id` |
| Languages | PHP |
| Frameworks / Runtime | Laravel, PHP, Composer, Vite |
| Database / Storage | not captured |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/quizify.socai.my.id/public` |
| Reverse Proxy | `-` |

## Detected Markers

- README.md, composer.json, package.json, artisan

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/quizify.socai.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Quizify SocAI]]
- [[VPS Projects]]
- [[MOC/Technologies]]
