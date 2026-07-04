---
type: techstack
project: "[[SIMPEL-U Telegram Bot]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/typescript
  - runtime/nodejs
  - ops/apache
---

# SIMPEL-U Telegram Bot Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `bot.shm.my.id` |
| Languages | TypeScript, JavaScript / Node.js |
| Frameworks / Runtime | Node.js, TypeScript, Python requirements |
| Database / Storage | not captured |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `-` |
| Reverse Proxy | `http://127.0.0.1:3107/` |

## Detected Markers

- README.md, package.json, requirements.txt

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/bot.shm.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[SIMPEL-U Telegram Bot]]
- [[VPS Projects]]
- [[MOC/Technologies]]
