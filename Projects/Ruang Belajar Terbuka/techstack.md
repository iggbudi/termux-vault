---
type: techstack
project: "[[Ruang Belajar Terbuka]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - project
  - vps
  - lang/php
  - db/mysql
  - api/google-oauth
  - api/openai
  - type/lms
---

# Ruang Belajar Terbuka Tech Stack

> [!important]
> Version values are captured from available README/package/composer/schema notes. If a version is marked `not captured`, inspect the source project before making upgrade decisions.

## Summary

| Layer | Technology |
|---|---|
| Languages | PHP 8.0+ |
| Frameworks / UI | Vanilla HTML/CSS/JS, Quill.js |
| Database / Storage | MySQL 5.7+ / MariaDB 10.3+ |
| Services / APIs | Google OAuth 2.0, OpenAI Chat Completions API |
| Tools / Ops | Nginx + PHP-FPM, PDO, cURL, GD, fileinfo |

## Libraries / Dependencies

| Library / Tool | Version | Purpose |
|---|---:|---|
| Quill.js | 1.3.7 in admin template/CDN context | Rich text editor |
| OpenAI model | env OPENAI_MODEL, default gpt-4o-mini | Material generation |
| Google OAuth | 2.0 | Student login |

## Runtime / Environment

- Source path: `/var/www/dwibudi.my.id`
- Repository: https://github.com/iggbudi/dwibudi.my.id.git
- Production URL: https://dwibudi.my.id

## Upgrade Notes

> [!warning]
> Before upgrading dependencies, check project-specific tests, deployment constraints, and whether source worktree is clean.

- [ ] Confirm current lockfile/package/composer state in source project.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Ruang Belajar Terbuka]]
- [[Meta/index]]
- [[MOC/Technologies]]
