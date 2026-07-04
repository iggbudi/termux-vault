---
type: techstack
project: "[[Cmaestro BengkelBot]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - runtime/nodejs
  - ops/apache
---

# Cmaestro BengkelBot Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `cmaestro.my.id` |
| Languages | JavaScript / Node.js |
| Frameworks / Runtime | Node.js, package repo, Apache proxy |
| Database / Storage | not captured |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/cmaestro.my.id/public` |
| Reverse Proxy | `http://127.0.0.1:3012/` |

## Detected Markers

- repo/README.md, repo/package.json

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/cmaestro.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Cmaestro BengkelBot]]
- [[VPS Projects]]
- [[MOC/Technologies]]
