---
type: techstack
project: "[[Brainboard SocAI]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/php
  - fw/laravel
  - ops/apache
---

# Brainboard SocAI Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `brainboard.socai.my.id` |
| Languages | PHP |
| Frameworks / Runtime | Laravel, PHP, Composer, Vite build assets |
| Database / Storage | not captured |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/brainboard.socai.my.id/public` |
| Reverse Proxy | `-` |

## Detected Markers

- README.md, composer.json, package.json, artisan

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/brainboard.socai.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Brainboard SocAI]]
- [[VPS Projects]]
- [[MOC/Technologies]]
