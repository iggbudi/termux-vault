---
type: project-detail
status: active
title: "Slack Multi-Agent Bridge"
slug: "slack-multi-agent-bridge"
updated: "2026-07-05"
repo: "https://github.com/iggbudi/slack-multi-agent.git"
source-path: "/var/www/bot.pjdigital.top"
production-url: ""
priority: high
tags:
  - project
  - vps
  - lang/typescript
  - runtime/nodejs
  - fw/express
  - db/sqlite
  - api/slack
  - type/multi-agent
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Slack Multi-Agent Bridge

## Overview
**Slack Multi-Agent Bridge** (`slack-pi-bridge`) adalah aplikasi Node.js/TypeScript yang menghubungkan Slack slash command `/pi` dengan Pi Coding Agent. Slack dipakai sebagai coordination layer berbasis channel/thread, sedangkan Pi Coding Agent menjadi mesin eksekusi untuk tiap role/agent.

Model mental utama:

```text
Slack Channel = Role / Agent Team
Slack Thread  = Task terisolasi
Slack Message = Event / instruksi / hasil kerja
Pi Session    = Agent executor sesuai role
SQLite        = task registry, audit trail, run tracking
Git Worktree  = isolasi branch per task
```

## Source

- Path VPS: `/var/www/bot.pjdigital.top`
- Package: `slack-pi-bridge`
- Repository local latest commit saat dibaca: `940f588 Improve Slack agent observability and recovery`
- Catatan penting: worktree project ini **tidak clean** saat dibaca. Vault hanya membaca dokumentasi/metadata, tidak mengubah project asli.

## Tech Stack

- [[Node.js]] 22+
- [[TypeScript]] / ESM
- [[Express]] 5
- SQLite via `node:sqlite`
- `@earendil-works/pi-coding-agent`
- `@earendil-works/pi-ai`
- Slack Slash Command, Web API, Events API
- Git worktree untuk isolasi task

## Core Features

- Slash command `/pi`.
- Slack signature verification.
- Allowed user guard.
- Role/channel mapping.
- Task registry SQLite.
- Slack thread per task.
- Agent run tracking:
  - `/pi active`
  - `/pi runs <task_id>`
- Delegation antar role.
- Product requirement flow.
- Architect technical plan + validation contract flow.
- Developer worktree/branch isolation.
- QA validation flow.
- Security review gate.
- Approval gate via Slack reaction.
- DevOps deploy flow.
- Documentation Agent.
- Hardening dan observability:
  - rate limit
  - secret redaction
  - role timeout
  - metrics
  - circuit breaker
  - operational reporting

## Roles

| Role | Channel Env | Responsibility |
|------|-------------|----------------|
| Orchestrator | `ROLE_ORCHESTRATOR_CHANNEL` | Menerima task, delegasi, koordinasi |
| Product | `ROLE_PRODUCT_CHANNEL` | Requirements, scope, acceptance criteria |
| Architect | `ROLE_ARCHITECT_CHANNEL` | Technical plan dan validation contract |
| Developer | `ROLE_DEVELOPER_CHANNEL` | Implementasi di worktree task |
| QA | `ROLE_QA_CHANNEL` | Validasi berdasarkan validation contract |
| Security | `ROLE_SECURITY_CHANNEL` | Review keamanan dan pass/block gate |
| DevOps | `ROLE_DEVOPS_CHANNEL` | Build/deploy flow dengan approval dan rollback plan |
| Docs | `ROLE_DOCS_CHANNEL` | README/wiki/changelog dan ringkasan user |

## Architecture

```text
Slack Workspace
  ↓ slash command / events
Express server.ts
  ↓ signature + ACL + role guard
Task Registry / Agent Runs SQLite
  ↓ async job-runner
Pi Runner / Agent Session
  ↓ built-in + custom coordination tools
Target PROJECT_DIR or Git worktree
  ↓
Slack thread result posting
```

Important modules:

- `src/server.ts` — Express entry, Slack command/event routing, reaction approval.
- `src/config.ts` — env config, role channel mapping, timeout/rate/output settings.
- `src/roles.ts` — role definitions, mode, tool permissions.
- `src/task-registry.ts` — task state machine, task events, QA/security/deploy/docs fields.
- `src/agent-runs.ts` — run tracking and `/pi active` / `/pi runs`.
- `src/job-runner.ts` — async Pi job lifecycle and Slack posting.
- `src/pi-runner.ts` — Pi session factory, custom tools, guardrails, circuit breaker.
- `src/delegation.ts` — custom coordination tools.
- `src/git-worktree.ts` — branch/worktree isolation.
- `src/slack-api.ts` — Slack `chat.postMessage` helper.

## Endpoints / Commands

HTTP endpoints:

| Endpoint | Purpose |
|----------|---------|
| `GET /health` | Basic health check |
| `GET /health/detail` | Uptime, memory, active job, Node version |
| `POST /slack/pi` | Slack slash command `/pi` |
| `POST /slack/events` | Slack Events API, reaction approval gate |

Slack commands documented:

- `/pi ping`
- `/pi status <task_id>`
- `/pi active`
- `/pi runs <task_id>`
- `/pi metrics`
- `/pi system`
- `/pi pilot`
- `/pi feedback <task_id> <rating> <feedback>`
- `/pi permissions`

## Data / Persistence

SQLite path default:

```text
./data/tasks.sqlite
```

Main tables from docs/code:

- `tasks`
- `task_events`
- `agent_runs`
- `task_hashes`

Task status examples:

- `new`
- `triaged`
- `planned`
- `in_progress`
- `qa`
- `security_review`
- `ready_to_deploy`
- `deployed`
- `done`
- `blocked`
- `failed`
- `cancelled`

## Environment

Important env vars:

```env
PORT=3030
SLACK_SIGNING_SECRET=...
SLACK_BOT_TOKEN=xoxb-...
SLACK_ALLOWED_USERS=U12345,U67890
SLACK_APPROVER_USERS=U12345,U67890
PROJECT_DIR=/var/www/lk.pjdigital.top
TASK_DB_PATH=./data/tasks.sqlite
PI_TIMEOUT_MS=600000
MAX_OUTPUT_CHARS=12000
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=20
PI_MAX_RETRIES=1
ROLE_ORCHESTRATOR_CHANNEL=C...
ROLE_PRODUCT_CHANNEL=C...
ROLE_ARCHITECT_CHANNEL=C...
ROLE_DEVELOPER_CHANNEL=C...
ROLE_QA_CHANNEL=C...
ROLE_SECURITY_CHANNEL=C...
ROLE_DEVOPS_CHANNEL=C...
ROLE_DOCS_CHANNEL=C...
```

## Commands

```bash
npm run dev
npm run build
npm test
npm start
```

`npm test` runs TypeScript build then Node test files:

```text
npm run build && node --test test/*.test.mjs
```

## Current Gotchas

- Worktree `/var/www/bot.pjdigital.top` sedang tidak clean saat note dibuat.
- Jangan commit `.env` atau Slack/Pi credentials.
- Bot harus diinvite ke semua Slack role channels.
- Slack channel env harus Channel ID (`C...`), bukan nama channel.
- `PROJECT_DIR` menentukan repo target yang dikerjakan agent.
- Developer/QA/Security flow dapat membuat worktree sibling di `<project>-worktrees/`.

## Related Docs in Project

- `README.md`
- `arsitektur.md`
- `teknis.md`
- `wiki.md`
- `AGENTS.md`
- `CHANGELOG.md`

## Related Notes

- [[VPS Projects]]
- [[Node.js]]
- [[TypeScript]]
- [[Express]]
- [[Multi-Agent Orchestration]]
- [[Pi SDK Documentation]]
- [[Git]]

## Progress Log

### 2026-07-05
- Dibaca dari VPS dan dibuat note detail di vault.

---
Status: 🔄 Active Development
Source: `/var/www/bot.pjdigital.top`
Tags: #project #vps #nodejs #typescript #slack #multi-agent #pi-agent
