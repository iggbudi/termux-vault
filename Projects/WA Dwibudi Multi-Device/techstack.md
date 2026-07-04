---
type: techstack
project: "[[WA Dwibudi Multi-Device]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - project
  - vps
  - lang/javascript
  - runtime/nodejs
  - fw/express
  - db/mariadb
  - lib/baileys
  - type/whatsapp-gateway
---

# WA Dwibudi Multi-Device Tech Stack

> [!important]
> Version values are captured from available README/package/composer/schema notes. If a version is marked `not captured`, inspect the source project before making upgrade decisions.

## Summary

| Layer | Technology |
|---|---|
| Languages | JavaScript / Node.js >=20 |
| Frameworks / UI | Express ^5.1.0 |
| Database / Storage | MariaDB/MySQL via mysql2 ^3.15.1 |
| Services / APIs | Baileys WhatsApp multi-device, SMTP via Nodemailer, Webhook delivery |
| Tools / Ops | systemd service wa-dwibudi, Nginx reverse proxy, Node test runner |

## Libraries / Dependencies

| Library / Tool | Version | Purpose |
|---|---:|---|
| @whiskeysockets/baileys | ^6.7.18 | WhatsApp protocol |
| express | ^5.1.0 | HTTP framework |
| mysql2 | ^3.15.1 | MariaDB driver |
| nodemailer | ^8.0.1 | Email |
| qrcode | ^1.5.4 | QR rendering |
| xlsx | ^0.18.5 | Spreadsheet import/export |
| marked | ^18.0.3 | Markdown rendering |
| dotenv | ^16.6.1 | Env loader |
| @hapi/boom | ^10.0.1 | HTTP error objects |

## Runtime / Environment

- Source path: `/var/www/wa.dwibudi.my.id`
- Repository: not captured / not a git repo
- Production URL: https://wa.dwibudi.my.id

## Upgrade Notes

> [!warning]
> Before upgrading dependencies, check project-specific tests, deployment constraints, and whether source worktree is clean.

- [ ] Confirm current lockfile/package/composer state in source project.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[WA Dwibudi Multi-Device]]
- [[Meta/index]]
- [[MOC/Technologies]]
