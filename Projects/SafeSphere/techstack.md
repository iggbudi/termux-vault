---
type: techstack
project: "[[SafeSphere]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - runtime/nodejs
  - db/sqlite
  - ops/apache
---

# SafeSphere Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `safesphere.my.id` |
| Languages | JavaScript / Node.js |
| Frameworks / Runtime | Static frontend, Node/Express API, SQLite (from prior scan) |
| Database / Storage | SQLite |
| Services / APIs | Local API proxy |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/safesphere.my.id/public` |
| Reverse Proxy | `api http://127.0.0.1:3000/api/` |

## Detected Markers

- repo/README.md, repo/package.json

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/safesphere.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[SafeSphere]]
- [[VPS Projects]]
- [[MOC/Technologies]]
