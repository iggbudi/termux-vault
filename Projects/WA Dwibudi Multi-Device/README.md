---
type: project
status: active
title: "WA Dwibudi Multi-Device"
slug: "wa-dwibudi-multi-device"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/var/www/wa.dwibudi.my.id"
production-url: "https://wa.dwibudi.my.id"
docs-url: ""
project-type: "whatsapp-gateway"
priority: high
techstack:
  languages:
    - JavaScript / Node.js >=20
  frameworks:
    - Express ^5.1.0
  databases:
    - MariaDB/MySQL via mysql2 ^3.15.1
  services:
    - Baileys WhatsApp multi-device
    - SMTP via Nodemailer
    - Webhook delivery
  tools:
    - systemd service wa-dwibudi
    - Nginx reverse proxy
    - Node test runner
tags:
  - project
  - vps
  - lang/javascript
  - runtime/nodejs
  - fw/express
  - db/mariadb
  - lib/baileys
  - type/whatsapp-gateway
---

# WA Dwibudi Multi-Device

> [!important]
> Project folder index. Main detail note: [[WA Dwibudi Multi-Device]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

WhatsApp multi-device marketing/gateway service berbasis Baileys untuk instances, contacts, campaigns, outbound queue, events, webhook, dan external API.

## Goals

- [ ] Kelola multi-instance WhatsApp per tenant
- [ ] Sediakan outbound queue dan campaign/broadcast
- [ ] Sediakan external API key untuk server-to-server messaging

## Architecture

See main note: [[WA Dwibudi Multi-Device]].

```text
User / Client
  ↓
Application Layer
  ↓
Data / External Services
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: JavaScript / Node.js >=20
- **Frameworks**: Express ^5.1.0
- **Databases**: MariaDB/MySQL via mysql2 ^3.15.1
- **Services**: Baileys WhatsApp multi-device, SMTP via Nodemailer, Webhook delivery
- **Tools/Ops**: systemd service wa-dwibudi, Nginx reverse proxy, Node test runner

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[WA Dwibudi Multi-Device]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/WA Dwibudi Multi-Device"
WHERE !completed
SORT file.name ASC
```

## Blockers

> [!warning]
> Add blockers here only if they stop progress.

| Blocker | Impact | Owner | Next Action | Status |
|---|---|---|---|---|
|  |  |  |  | open |

## Learnings

- See [[WA Dwibudi Multi-Device]] for project-specific gotchas and learnings.

## Related Resources

- [[Meta/index]]
- [[MOC/Projects]]
- [[MOC/Technologies]]
- [[VPS Projects]]

## Folder Map

- `tasks/` — task breakdown and todo notes
- `meetings/` — meeting notes
- `docs/` — supporting documentation and runbooks
- `code-snippets/` — reusable snippets for this project
- `assets/` — screenshots, diagrams, attachments

## Changelog

### 2026-07-05

- Standardized README generated from project metadata.
