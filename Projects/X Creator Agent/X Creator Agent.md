# X Creator Agent

## Overview
**X Creator Agent** adalah dashboard web MVP untuk membuat single reply panjang / reply explainer di X/Twitter Premium dengan workflow multi-agent Pi SDK dan anti-slop review.

Project ini menerima topik/tweet sumber, menjalankan beberapa agent berurutan, menyimpan progress ke SQLite via Prisma, lalu menampilkan final draft yang siap copy-paste.

## Source

- Path VPS: `/var/www/nanariset.my.id/xcreator`
- Package: `xcreator`
- Git status: tidak terdeteksi sebagai git repository saat dibaca.

## Tech Stack

- [[Next.js]]
- [[TypeScript]]
- [[React]]
- [[Tailwind CSS]]
- [[SQLite]]
- [[Prisma]]
- `@earendil-works/pi-coding-agent`
- Brave Search API optional

## Agent Workflow

Workflow utama terdiri dari 6 agent:

1. **Reply Analyzer** — memahami tweet/topik dan membuat brief reply explainer.
2. **Reply Strategist** — menyusun angle, opening, poin, dan alur argumentasi.
3. **Reply Writer** — menulis single reply panjang.
4. **Editor** — memperbaiki clarity, ritme, opening, closing.
5. **Anti-Slop Reviewer** — menghilangkan AI slop, hype kosong, frasa generik.
6. **Final Formatter** — format final siap copy-paste ke X.

Jika `useInternet` aktif, Reply Analyzer dapat memakai Brave Search sebagai konteks pendukung.

## Architecture

```text
Next.js UI
  ↓ POST /xcreator/api/generations
Prisma create Generation + AgentStep rows
  ↓ fire-and-forget
runGenerationWorkflow()
  ↓ optional Brave Search
Pi Agent sessions per workflow step
  ↓
SQLite stores step output/status
  ↓ GET /xcreator/api/generations/:id polling
UI renders progress + final draft
```

## Important Files

```text
/var/www/nanariset.my.id/xcreator/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── api/generations/
│       ├── route.ts
│       └── [id]/route.ts
├── lib/
│   ├── agent-workflow.ts
│   └── prisma.ts
├── prisma/
│   └── schema.prisma
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/xcreator/api/generations` | POST | Create generation and start workflow |
| `/xcreator/api/generations` | GET | List latest 20 generations |
| `/xcreator/api/generations/:id` | GET | Get generation with ordered steps |

UI uses `BASE_PATH = "/xcreator"`, so deployment likely expects app under `/xcreator` subpath.

## Data Model

Prisma datasource:

```text
provider = sqlite
url = env("DATABASE_URL")
```

Models:

### Generation
- topic
- sourceTweet
- searchQuery
- goal
- audience
- tone
- language
- tweetCount
- notes
- useInternet
- status: `pending | running | completed | failed`
- finalDraft
- error
- timestamps

### AgentStep
- generationId
- agentName
- order
- status: `pending | running | completed | failed`
- input
- output
- error
- startedAt
- completedAt
- timestamps

Unique constraint:

```text
(generationId, agentName)
```

## Commands

```bash
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
npm run build
npm run start
npx prisma studio
```

Package scripts:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run prisma:generate
npm run prisma:migrate
npm run prisma:studio
```

## Environment

Important env vars:

- `DATABASE_URL` — SQLite database URL.
- `BRAVE_SEARCH_API_KEY` — optional, required only when internet resource search is enabled.
- Pi model/auth config must exist in the machine environment for `@earendil-works/pi-coding-agent`.

## UI Notes

- Single page dashboard in `app/page.tsx`.
- Inputs: topic, source tweet, target audience, goal, tone, language, notes, optional internet search query.
- Polling every 2 seconds while generation is not completed/failed.
- Final draft can be copied to clipboard.
- Dark Tailwind UI.

## Current Gotchas

- Folder is not detected as git repository at scan time.
- Workflow uses fire-and-forget `void runGenerationWorkflow(generation.id)`; errors must be persisted into generation/steps for visibility.
- Brave Search throws if `BRAVE_SEARCH_API_KEY` is missing and `useInternet` requires it.
- Pi SDK uses machine-level Pi auth/model configuration; generation depends on Pi being configured.
- UI path hardcodes `/xcreator`, so deployment/reverse proxy/base path must align.

## Related Docs in Project

- `README.md`
- `prisma/schema.prisma`
- `lib/agent-workflow.ts`
- `app/page.tsx`

## Related Notes

- [[VPS Projects]]
- [[Next.js]]
- [[TypeScript]]
- [[Tailwind CSS]]
- [[SQLite]]
- [[Prisma]]
- [[Pi SDK Documentation]]
- [[Multi-Agent Orchestration]]

## Progress Log

### 2026-07-05
- Dibaca dari VPS dan dibuat note detail di vault.

---
Status: 🧪 MVP / Active Experiment
Source: `/var/www/nanariset.my.id/xcreator`
Tags: #project #vps #nextjs #typescript #multi-agent #x-twitter #pi-agent
