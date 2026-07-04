---
type: techstack
project: "[[CLAW Invoice]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - ops/apache
---

# CLAW Invoice Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `inv.nanariset.my.id` |
| Languages | PHP |
| Frameworks / Runtime | Static/PHP invoice workspace plus API proxy |
| Database / Storage | not captured |
| Services / APIs | Local API proxy |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `/var/www/inv.nanariset.my.id/repo/invoice` |
| Reverse Proxy | `api http://127.0.0.1:3001/api` |

## Detected Markers

- repo/README.md

## Upgrade Notes

- [ ] Confirm current dependency files in `/var/www/inv.nanariset.my.id`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[CLAW Invoice]]
- [[VPS Projects]]
- [[MOC/Technologies]]
