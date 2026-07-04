---
type: project-detail
status: active
title: "WA Dwibudi Multi-Device"
slug: "wa-dwibudi-multi-device"
updated: "2026-07-05"
repo: ""
source-path: "/var/www/wa.dwibudi.my.id"
production-url: "https://wa.dwibudi.my.id"
priority: high
tags:
  - project
  - vps
  - lang/javascript
  - runtime/nodejs
  - fw/express
  - db/mariadb
  - lib/baileys
  - type/whatsapp-gateway
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# WA Dwibudi Multi-Device

## Overview
**WA Dwibudi Multi-Device** adalah WhatsApp multi-device marketing/gateway service berbasis Baileys. Di dokumen internal project juga disebut **Wagway**, yaitu platform multi-tenant WhatsApp Gateway untuk UMKM.

Project ini memungkinkan organisasi/tenant mengelola WhatsApp instances, kontak, campaign/broadcast, outbound message queue, inbound event logging, webhook, dan external server-to-server API.

## Source

- Path VPS: `/var/www/wa.dwibudi.my.id`
- Domain: `wa.dwibudi.my.id`
- Git status: folder ini **bukan git repository** saat dibaca (`fatal: not a git repository`).
- Runtime service: systemd service `wa-dwibudi`
- Nginx config: `/etc/nginx/conf.d/wa.dwibudi.my.id.conf`
- Express port menurut docs: `3001`

## Tech Stack

- [[Node.js]] >= 20
- [[Express]] 5
- [[MariaDB]] / [[MySQL]] via `mysql2`
- [[Baileys]] (`@whiskeysockets/baileys`) untuk WhatsApp multi-device protocol
- [[Nodemailer]] untuk email verification
- `qrcode` untuk QR rendering
- `xlsx` untuk import/export spreadsheet
- `marked` untuk docs rendering
- Native Node test runner (`node --test`)

## Main Features

### WhatsApp Instance Management
- Multi-instance WhatsApp account management.
- Per-instance Baileys auth state disimpan di `SESSIONS_DIR`.
- QR lifecycle untuk connect session.
- Status flow:
  - `draft`
  - `qr_ready`
  - `connecting`
  - `connected`
  - `disconnected`
  - `logged_out`
  - `error`

### Contact Management
- CRUD kontak.
- Contact groups.
- Import kontak.
- Phone normalization untuk nomor Indonesia: `08...` → `62...`.

### Outbound Messages
- Pesan outbound dimasukkan ke database lebih dulu sebagai `queued`.
- Worker per-instance memproses queue secara asynchronous.
- Startup recovery mengembalikan pesan stuck `processing` ke `queued`.
- Status bisa bergerak ke `sent`, `delivered`, `read`, atau `failed`.

### Campaign / Broadcast
- Campaign dibuat sebagai draft.
- Launch campaign melakukan fan-out ke `outbound_messages`.
- Template message mendukung placeholder:
  - `{{name}}`
  - `{{nickname}}`
  - `{{phone}}`
- Campaign completion terjadi asynchronous setelah recipient tidak lagi pending/queued.

### Event & Webhook
- Inbound events disimpan ke `whatsapp_events`.
- Event types antara lain `message.received` dan `connection.updated`.
- `webhook-dispatcher` mengirim HTTP POST ke `webhook_url` instance dengan timeout `WEBHOOK_TIMEOUT_MS`.

### External API
Server lain bisa mengirim pesan via endpoint:

```http
POST https://wa.dwibudi.my.id/api/external/instances/:instanceId/messages
Authorization: Bearer <external-api-token>
Content-Type: application/json
```

Body:

```json
{
  "recipientPhone": "6281234567890",
  "messageText": "Halo dari aplikasi eksternal"
}
```

API key bisa dibatasi per tenant dan per instance. Token penuh hanya tampil sekali saat generate; database menyimpan hash.

## Architecture

```text
Browser / External API Client
  ↓
Nginx reverse proxy
  ↓
Express app (src/server.js + src/app.js)
  ↓
Routes + middleware
  ↓
Services + repositories
  ↓
MariaDB
  ↓
Baileys socket/session state
```

### Entry Points

- `src/server.js` — startup: create sessions dir, DB check, recover stuck queue, restore persisted Baileys sessions, start Express.
- `src/app.js` — Express app factory, middleware, static assets, route mounting.

### Important Layers

```text
src/
├── config/env.js
├── lib/
│   ├── http.js
│   ├── logger.js
│   ├── password.js
│   └── validation.js
├── middleware/
│   ├── app-auth.js
│   ├── error-handler.js
│   └── external-api-auth.js
├── routes/
├── services/
├── storage/
└── types/
```

Repository files live under `src/services/*-repository.js`, while service files compose repositories and hold business logic.

## Routes / API Surface

Mounted routes from `src/app.js`:

| Route | Purpose |
|------|---------|
| `/` | Public landing/static index |
| `/app` | Authenticated tenant app |
| `/admin` | Admin routes |
| `/auth` | Login/register/session flows |
| `/docs` | Documentation route |
| `/api-keys` | Tenant API key management |
| `/api/external` | Server-to-server external API |
| `/health` | Health check |
| `/contacts` | Contact management |
| `/contact-groups` | Contact groups |
| `/instances` | WhatsApp instance/session/campaign/message/event APIs |

## Database Notes

Migration script: `scripts/migrate.js`.

Important tables:

- `organizations`
- `users`
- `organization_members`
- `app_sessions`
- `email_verification_tokens`
- `contacts`
- `contact_groups`
- `contact_group_members`
- `whatsapp_instances`
- `external_api_keys`
- `external_api_logs`
- `outbound_messages`
- `campaigns`
- `campaign_recipients`
- `whatsapp_events`

Multi-tenancy direction:

- Resources are scoped by `organization_id`.
- Users belong to organizations through `organization_members`.
- `app_sessions` carry both `user_id` and `organization_id`.
- Docs mention an instances fallback to default organization when no session cookie exists; review before public self-service hardening.

## Auth / Security Notes

- App auth uses `app_session` cookie resolved by `attachAppAuth` middleware.
- External API uses `Authorization: Bearer <token>` via `external-api-auth`.
- External API token is hashed in DB; full token only shown once.
- `/admin` route is protected by Nginx HTTP Basic Auth according to docs, not by Express auth itself.
- Do not commit `.env`, sessions, or API keys.
- Per docs, admin Basic Auth file: `/etc/nginx/.htpasswd-wa-dwibudi`.

## Operations

Systemd service:

```bash
journalctl -u wa-dwibudi -n 100 --no-pager
systemctl restart wa-dwibudi
```

Clear stale WhatsApp session:

```bash
rm -rf sessions/<instance-id>/*
mysql -u root wa_dwibudi -e "UPDATE whatsapp_instances SET status = 'draft' WHERE id = '<instance-id>';"
```

## Commands

```bash
npm run dev
npm start
npm test
npm run db:migrate
npm run db:seed
npm run external:key -- --organization-id <uuid> --instance-id <uuid> --name <label>
```

Single test example:

```bash
node --test tests/health.test.js
```

## Environment

Key variables from docs:

- `DATABASE_URL`
- `DATABASE_SOCKET_PATH`
- `SESSIONS_DIR`
- `WEBHOOK_TIMEOUT_MS`
- `SMTP_*`
- `DEFAULT_ORG_*`
- `DEFAULT_OWNER_*`

## Current Gotchas

- Folder `/var/www/wa.dwibudi.my.id` is not a git repo at scan time, so changes there need different backup/versioning handling.
- `sessions/` contains Baileys auth state and should be treated as sensitive runtime data.
- Docs mention Nginx protects `/admin`; Express app itself mounts `adminRouter` without app auth assumption, so Nginx config is part of security boundary.
- `CLAUDE.md` mentions dependencies like `async-mutex`/`pino`, but current `package.json` scanned did not list them. Re-check before relying on that docs section.

## Related Docs in Project

- `README.md`
- `CLAUDE.md`
- `AGENTS.md`
- `docs/architecture.md`
- `docs/external-api.md`

## Related Notes

- [[VPS Projects]]
- [[Node.js]]
- [[Express]]
- [[MariaDB]]
- [[MySQL]]
- [[WhatsApp Gateway]]
- [[Baileys]]

## Progress Log

### 2026-07-05
- Dibaca dari VPS dan dibuat note detail di vault.
- User menyebut `ws`; diasumsikan sebagai project WA/WhatsApp service `wa.dwibudi.my.id` karena tidak ada folder `ws` terpisah di `/var/www`.

---
Status: 🔄 Active / Runtime Service
Source: `/var/www/wa.dwibudi.my.id`
Tags: #project #vps #nodejs #express #whatsapp #baileys #mariadb #gateway
