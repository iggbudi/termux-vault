---
type: index
slug: coding-vault-index
name: Coding Vault Index
updated: 2026-07-05
tags:
  - index
  - coding-vault
  - projects
---

# Coding Vault Index

Index utama untuk semua project coding di vault ini.

## Folder Structure

```text
/
├── Inbox/                  # Catatan cepat, ide, snippet
├── Projects/               # Satu folder per project
│   └── Project-Name/
│       ├── README.md
│       ├── techstack.md
│       ├── roadmap.md
│       ├── tasks/
│       ├── meetings/
│       ├── docs/
│       ├── code-snippets/
│       └── assets/
├── Areas/                  # Area jangka panjang
├── Resources/              # Knowledge base tech
│   ├── Languages/
│   ├── Frameworks/
│   ├── Tools/
│   └── Patterns/
├── Archive/                # Project selesai / ditunda
├── Snippets/               # Kode reusable
├── Daily/                  # Daily notes & journal
├── Meta/                   # AGENTS.md, templates, index.md
└── Attachments/            # Screenshot, diagram, dll
```

## Project Index

| Project | Source / Path | Main Tech Stack | Type | Status |
|---|---|---|---|---|
| [[SIMPMU DPMP2]] | `/var/www/dpmp2.dwibudi.my.id` | PHP Native, MySQL/MariaDB, Bootstrap, Playwright | Quality assurance system | Active / Maintained |
| [[LK UKMs]] | `/var/www/lk.pjdigital.top` | PHP Native, MySQL/MariaDB, Composer, TCPDF, PHPMailer, PWA | Proposal/LPJ & UKM admin system | Production / Active Development |
| [[Ruang Belajar Terbuka]] | `/var/www/dwibudi.my.id` | PHP Native, MySQL/MariaDB, Google OAuth, OpenAI API, Quill | LMS / e-learning | Active / Production |
| [[WA Dwibudi Multi-Device]] | `/var/www/wa.dwibudi.my.id` | Node.js, Express, MariaDB, Baileys, Nodemailer | WhatsApp gateway | Active / Runtime Service |
| [[Slack Multi-Agent Bridge]] | `/var/www/bot.pjdigital.top` | Node.js, TypeScript, Express, SQLite, Pi Coding Agent, Slack API | Multi-agent orchestration | Active Development |
| [[EclipseTrack]] | `/var/www/eclipsetrack.my.id` | PHP Native, Supabase, Google Search Console, SEO tooling | SEO content site | Active / Content Site |
| [[X Creator Agent]] | `/var/www/nanariset.my.id/xcreator` | Next.js, TypeScript, React, Tailwind CSS, Prisma, SQLite, Pi Coding Agent | AI writing tool | MVP / Experimental |
| [[Lelangu Bitcoin Chart]] | `/var/www/lelangu.my.id` | HTML, CSS, JavaScript, Tokocrypto public API, localStorage | Crypto chart dashboard | Active / Static Site |
| [[Nana Research]] | `/var/www/nanariset.my.id` | PHP Native, Tailwind CDN, Font Awesome, file-based JSON short links | Landing page & URL shortener | Active / Production |
| [[PLK App]] | `~/belajar-typescript/` | Vite, TypeScript, Turso/libSQL, PWA | PKK activity app | Documented legacy project |
| [[Pi Meteora]] | `~/pi-meteora-agents/` | TypeScript, Pi SDK, Solana, Meteora DLMM, Jupiter, Dexscreener | DeFi multi-agent decision layer | Active Development |
| [[Toko Curhat]] | `~/crewet/tokocurhat/` | Deno, Deno KV, zero dependency | Anonymous curhat app | Completed |
| [[VPS Projects]] | `/var/www` inventory | Mixed PHP, Node.js, Next.js, Supabase, MySQL, SQLite | VPS inventory | Completed inventory |

## By Language

### PHP

- [[SIMPMU DPMP2]] — PHP Native + MySQL/MariaDB + Playwright QA
- [[LK UKMs]] — PHP Native + MySQL/MariaDB + Composer + PWA
- [[Ruang Belajar Terbuka]] — PHP SSR + MySQL/MariaDB + Google OAuth + OpenAI
- [[EclipseTrack]] — PHP Native + Supabase + SEO tooling
- [[Nana Research]] — PHP Native + file-based short URL storage

### TypeScript / JavaScript

- [[Slack Multi-Agent Bridge]] — TypeScript + Express + Pi Coding Agent
- [[X Creator Agent]] — Next.js + TypeScript + Prisma + Pi Coding Agent
- [[Pi Meteora]] — TypeScript + Pi SDK + Solana DeFi APIs
- [[PLK App]] — TypeScript + Vite + PWA
- [[WA Dwibudi Multi-Device]] — Node.js + Express + Baileys
- [[Lelangu Bitcoin Chart]] — Vanilla JavaScript + static HTML/CSS + Tokocrypto API

### Deno

- [[Toko Curhat]] — Deno + Deno KV

## By Database / Storage

### MySQL / MariaDB

- [[SIMPMU DPMP2]]
- [[LK UKMs]]
- [[Ruang Belajar Terbuka]]
- [[WA Dwibudi Multi-Device]]

### SQLite

- [[Slack Multi-Agent Bridge]]
- [[X Creator Agent]]

### Supabase

- [[EclipseTrack]]

### Turso / libSQL

- [[PLK App]]

### Deno KV

- [[Toko Curhat]]

## By Domain / Purpose

### Institutional / Admin Systems

- [[SIMPMU DPMP2]]
- [[LK UKMs]]
- [[Ruang Belajar Terbuka]]

### AI / Multi-Agent

- [[Slack Multi-Agent Bridge]]
- [[X Creator Agent]]
- [[Pi Meteora]]

### Messaging / Automation

- [[WA Dwibudi Multi-Device]]
- [[Slack Multi-Agent Bridge]]

### Content / SEO

- [[EclipseTrack]]
- [[Nana Research]]

### Dashboards / Utilities

- [[Lelangu Bitcoin Chart]]
- [[Nana Research]]

### Learning / Experiments

- [[PLK App]]
- [[Toko Curhat]]
- [[Pi Meteora]]

## Core Maps

- [[MOC/Projects]] — legacy project map
- [[MOC/Technologies]] — technology map
- [[MOC/Learnings]] — learning map
- [[VPS Projects]] — VPS project inventory
- [[Meta/AGENTS]] — vault coding rules

## Maintenance Checklist

- [ ] Add every new project to this `index.md`.
- [ ] Keep project tech stacks aligned with project notes.
- [ ] Add missing resource notes for unresolved links.
- [ ] Keep VPS inventory synced with `/var/www`.
- [ ] Commit and push vault changes after updates.
