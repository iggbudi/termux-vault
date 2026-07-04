---
type: techstack
project: "[[EduGuide SocAI]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - ops/apache
---

# EduGuide SocAI Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `eduguide.socai.my.id` |
| Languages | not captured |
| Frameworks / Runtime | Split frontend/backend reverse proxy |
| Database / Storage | not captured |
| Services / APIs | Local API proxy |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `-` |
| Reverse Proxy | `frontend 3003, api/storage 8003` |

## Detected Markers

- app/, public/

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/eduguide.socai.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[EduGuide SocAI]]
- [[VPS Projects]]
- [[MOC/Technologies]]
