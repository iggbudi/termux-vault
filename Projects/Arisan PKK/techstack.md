---
type: techstack
project: "[[Arisan PKK]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - lang/typescript
  - fw/vite
  - ops/apache
---

# Arisan PKK Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `arisanpkk.web.id` |
| Languages | TypeScript, JavaScript / Node.js |
| Frameworks / Runtime | Vite, TypeScript, Node runtime proxy |
| Database / Storage | not captured |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `-` |
| Reverse Proxy | `http://localhost:3100/` |

## Detected Markers

- belajar-typescript/package.json

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/arisanpkk.web.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Arisan PKK]]
- [[VPS Projects]]
- [[MOC/Technologies]]
