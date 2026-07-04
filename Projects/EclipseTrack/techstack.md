---
type: techstack
project: "[[EclipseTrack]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - project
  - vps
  - lang/php
  - db/supabase
  - api/google-search-console
  - type/content-site
  - seo
---

# EclipseTrack Tech Stack

> [!important]
> Version values are captured from available README/package/composer/schema notes. If a version is marked `not captured`, inspect the source project before making upgrade decisions.

## Summary

| Layer | Technology |
|---|---|
| Languages | PHP Native |
| Frameworks / UI | Procedural PHP includes |
| Database / Storage | Supabase/Postgres via REST/RPC with local fallback arrays |
| Services / APIs | Google Search Console, Telegram SEO report, Supabase |
| Tools / Ops | PHP cURL, sitemap.xml, robots.txt |

## Libraries / Dependencies

| Library / Tool | Version | Purpose |
|---|---:|---|
| Supabase REST/RPC | env SUPABASE_URL + SUPABASE_ANON_KEY | Content backend |
| Google Search Console API | OAuth/service account helpers | SEO data |
| Telegram Bot API | env TELEGRAM_BOT_TOKEN | Daily report |

## Runtime / Environment

- Source path: `/var/www/eclipsetrack.my.id`
- Repository: not captured / not a git repo
- Production URL: https://eclipsetrack.my.id

## Upgrade Notes

> [!warning]
> Before upgrading dependencies, check project-specific tests, deployment constraints, and whether source worktree is clean.

- [ ] Confirm current lockfile/package/composer state in source project.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[EclipseTrack]]
- [[Meta/index]]
- [[MOC/Technologies]]
