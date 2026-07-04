---
type: techstack
project: "[[SIMPMU DPMP2]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - project
  - vps
  - lang/php
  - db/mysql
  - db/mariadb
  - ops/playwright
  - type/quality-assurance
---

# SIMPMU DPMP2 Tech Stack

> [!important]
> Version values are captured from available README/package/composer/schema notes. If a version is marked `not captured`, inspect the source project before making upgrade decisions.

## Summary

| Layer | Technology |
|---|---|
| Languages | PHP 8.x |
| Frameworks / UI | Bootstrap 5.3.2 |
| Database / Storage | MySQL 8.x / MariaDB 10.x |
| Services / APIs | Email/WhatsApp notification queue |
| Tools / Ops | Playwright @playwright/test ^1.61.1, Nginx/Apache, rtk |

## Libraries / Dependencies

| Library / Tool | Version | Purpose |
|---|---:|---|
| @playwright/test | ^1.61.1 | Headless E2E regression |
| Bootstrap | 5.3.2 | UI |

## Runtime / Environment

- Source path: `/var/www/dpmp2.dwibudi.my.id`
- Repository: https://github.com/iggbudi/dpmp2
- Production URL: https://dpmp2.dwibudi.my.id

## Upgrade Notes

> [!warning]
> Before upgrading dependencies, check project-specific tests, deployment constraints, and whether source worktree is clean.

- [ ] Confirm current lockfile/package/composer state in source project.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[SIMPMU DPMP2]]
- [[Meta/index]]
- [[MOC/Technologies]]
