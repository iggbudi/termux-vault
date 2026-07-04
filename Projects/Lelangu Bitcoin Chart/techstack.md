---
type: techstack
project: "[[Lelangu Bitcoin Chart]]"
status: active
updated: "2026-07-05"
tags:
  - project
  - vps
  - lang/javascript
  - lang/html
  - api/tokocrypto
  - type/market-dashboard
  - static-site
---

# Lelangu Bitcoin Chart Tech Stack

> [!important]
> Version values are captured from available source/config notes. If a version is marked `not captured`, inspect the source project before making upgrade decisions.

## Summary

| Layer | Technology |
|---|---|
| Languages | HTML, CSS, JavaScript |
| Frameworks / UI | Vanilla JS, Static HTML/CSS |
| Database / Storage | Browser localStorage for price alerts |
| Services / APIs | Tokocrypto public kline API, Fallback kline endpoint |
| Tools / Ops | Nginx, Certbot SSL, PHP-FPM available in vhost |

## Libraries / Dependencies

| Library / Tool | Version | Purpose |
|---|---:|---|
| Tokocrypto kline endpoint | public API | Market/candlestick data |
| Fallback kline endpoint | public API | Backup market data |
| localStorage | browser API | Persist price alerts |

## Runtime / Environment

- Source path: `/var/www/lelangu.my.id`
- Repository: not captured / not a git repo
- Production URL: https://lelangu.my.id

## Upgrade Notes

> [!warning]
> Before upgrading dependencies, check project-specific tests, deployment constraints, and whether source worktree is clean.

- [ ] Confirm current source files and vhost config before changing deployment behavior.
- [ ] Run available syntax/lint checks.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Lelangu Bitcoin Chart]]
- [[Meta/index]]
- [[MOC/Technologies]]
