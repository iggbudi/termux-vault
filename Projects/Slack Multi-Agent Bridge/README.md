---
type: project
status: active
title: "Slack Multi-Agent Bridge"
slug: "slack-multi-agent-bridge"
aliases: []
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: "https://github.com/iggbudi/slack-multi-agent.git"
source-path: "/var/www/bot.pjdigital.top"
production-url: ""
docs-url: ""
project-type: "multi-agent"
priority: high
techstack:
  languages:
    - TypeScript ^5.9.3
    - Node.js 22+
  frameworks:
    - Express ^5.2.1
  databases:
    - SQLite via node:sqlite
  services:
    - Slack API
    - Pi Coding Agent
  tools:
    - tsx ^4.21.0
    - typescript ^5.9.3
    - node --test
    - Git worktree
tags:
  - project
  - vps
  - lang/typescript
  - runtime/nodejs
  - fw/express
  - db/sqlite
  - api/slack
  - type/multi-agent
---

# Slack Multi-Agent Bridge

> [!important]
> Project folder index. Main detail note: [[Slack Multi-Agent Bridge]]. Update this README when status, source path, deployment, or high-level direction changes.

## Overview

Slack bridge untuk Pi Coding Agent dengan slash command /pi, role/channel mapping, task registry SQLite, worktree isolation, QA/Security/DevOps gates, dan observability.

## Goals

- [ ] Jadikan Slack sebagai coordination layer multi-agent
- [ ] Pisahkan role Product/Architect/Developer/QA/Security/DevOps/Docs
- [ ] Catat task, events, agent runs, approval, dan deploy flow

## Architecture

See main note: [[Slack Multi-Agent Bridge]].

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

- **Languages**: TypeScript ^5.9.3, Node.js 22+
- **Frameworks**: Express ^5.2.1
- **Databases**: SQLite via node:sqlite
- **Services**: Slack API, Pi Coding Agent
- **Tools/Ops**: tsx ^4.21.0, typescript ^5.9.3, node --test, Git worktree

## Current Tasks

> [!note]
> Put detailed tasks in `tasks/` when they become more than a few items.

- [ ] Review main project note [[Slack Multi-Agent Bridge]]
- [ ] Keep `techstack.md` aligned with source package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/Slack Multi-Agent Bridge"
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

- See [[Slack Multi-Agent Bridge]] for project-specific gotchas and learnings.

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
