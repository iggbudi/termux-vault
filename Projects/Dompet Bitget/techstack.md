---
type: techstack
project: "[[Dompet Bitget]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - runtime/nodejs
  - lang/typescript
  - ops/apache
---

# Dompet Bitget Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `dompet.lelangu.my.id` |
| Languages | JavaScript / Node.js |
| Frameworks / Runtime | Node.js fullstack, backend/frontend packages |
| Database / Storage | not captured |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `-` |
| Reverse Proxy | `http://localhost:3456/` |

## Detected Markers

- README.md, package.json, backend/package.json, frontend/package.json

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/dompet.lelangu.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Dompet Bitget]]
- [[VPS Projects]]
- [[MOC/Technologies]]
