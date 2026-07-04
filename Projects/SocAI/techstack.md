---
type: techstack
project: "[[SocAI]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - runtime/nodejs
  - type/multi-agent
  - ops/apache
---

# SocAI Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `socai.my.id` |
| Languages | JavaScript / Node.js |
| Frameworks / Runtime | Node.js, autonomous AI social content app |
| Database / Storage | not captured |
| Services / APIs | Apache vhost |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/socai.my.id` |
| Reverse Proxy | `http://127.0.0.1:3010/` |

## Detected Markers

- README.md, package.json

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/socai.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[SocAI]]
- [[VPS Projects]]
- [[MOC/Technologies]]
