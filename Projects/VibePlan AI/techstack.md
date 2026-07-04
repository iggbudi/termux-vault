---
type: techstack
project: "[[VibePlan AI]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - fw/nextjs
  - fw/laravel
  - lang/typescript
  - ops/apache
---

# VibePlan AI Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `vibeplan.socai.my.id` |
| Languages | not captured |
| Frameworks / Runtime | Next.js frontend, Laravel backend |
| Database / Storage | not captured |
| Services / APIs | Local API proxy |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/vibeplan.socai.my.id` |
| Reverse Proxy | `frontend 3002, api/storage 8001` |

## Detected Markers

- README.md, frontend-next/package.json, backend-laravel/composer.json

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/vibeplan.socai.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[VibePlan AI]]
- [[VPS Projects]]
- [[MOC/Technologies]]
