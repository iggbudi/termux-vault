---
type: techstack
project: "[[Nana Research]]"
status: active
updated: "2026-07-05"
tags:
  - project
  - vps
  - lang/php
  - lang/javascript
  - type/landing-page
  - tool/url-shortener
  - static-site
---

# Nana Research Tech Stack

> [!important]
> Version values are captured from available source/config notes. If a version is marked `not captured`, inspect the source project before making upgrade decisions.

## Summary

| Layer | Technology |
|---|---|
| Languages | PHP Native, HTML, JavaScript |
| Frameworks / UI | Tailwind CSS CDN, Font Awesome CDN, Vanilla JS |
| Database / Storage | File-based JSON storage in short-links.php |
| Services / APIs | WhatsApp wa.me CTA, Google Fonts, Nginx reverse proxy for subapps |
| Tools / Ops | Nginx, PHP-FPM, Certbot SSL, LOCK_EX file writes |

## Libraries / Dependencies

| Library / Tool | Version | Purpose |
|---|---:|---|
| PHP file storage | native | Short URL JSON storage |
| Tailwind CSS | CDN/not captured | Landing page styling |
| Font Awesome | CDN/not captured | Icons |
| Google Fonts | CDN/not captured | Typography |

## Runtime / Environment

- Source path: `/var/www/nanariset.my.id`
- Repository: not captured / not a git repo
- Production URL: https://nanariset.my.id

## Upgrade Notes

> [!warning]
> Before upgrading dependencies, check project-specific tests, deployment constraints, and whether source worktree is clean.

- [ ] Confirm current source files and vhost config before changing deployment behavior.
- [ ] Run available syntax/lint checks.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Nana Research]]
- [[Meta/index]]
- [[MOC/Technologies]]
