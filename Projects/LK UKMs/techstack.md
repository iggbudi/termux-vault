---
type: techstack
project: "[[LK UKMs]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - project
  - vps
  - lang/php
  - db/mysql
  - db/mariadb
  - type/pwa
  - type/internal-tool
---

# LK UKMs Tech Stack

> [!important]
> Version values are captured from available README/package/composer/schema notes. If a version is marked `not captured`, inspect the source project before making upgrade decisions.

## Summary

| Layer | Technology |
|---|---|
| Languages | PHP 8.0+ |
| Frameworks / UI | Tailwind CSS CDN, PWA service worker |
| Database / Storage | MySQL/MariaDB |
| Services / APIs | WhatsApp notification, Gmail SMTP |
| Tools / Ops | Composer, TCPDF ^6.10, endroid/qr-code ^6.0, PHPMailer ^6.9, PhpSpreadsheet ^2.0 |

## Libraries / Dependencies

| Library / Tool | Version | Purpose |
|---|---:|---|
| tecnickcom/tcpdf | ^6.10 | PDF generation |
| endroid/qr-code | ^6.0 | QR code generation |
| phpmailer/phpmailer | ^6.9 | SMTP email |
| phpoffice/phpspreadsheet | ^2.0 | Spreadsheet/export |

## Runtime / Environment

- Source path: `/var/www/lk.pjdigital.top`
- Repository: not captured / not a git repo
- Production URL: https://lk.pjdigital.top

## Upgrade Notes

> [!warning]
> Before upgrading dependencies, check project-specific tests, deployment constraints, and whether source worktree is clean.

- [ ] Confirm current lockfile/package/composer state in source project.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[LK UKMs]]
- [[Meta/index]]
- [[MOC/Technologies]]
