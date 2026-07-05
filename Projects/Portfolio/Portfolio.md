---
type: project-detail
status: active
title: "Portfolio Website"
slug: "portfolio"
updated: "2026-07-05"
repo: "https://github.com/iggbudi/termux-vault/tree/main/Portfolio"
source-path: "/storage/emulated/0/Documents/termux-vault/Portfolio"
production-url: ""
priority: high
tags:
  - project
  - lang/typescript
  - fw/react
  - fw/vite
  - fw/tailwind
  - type/portfolio
  - type/showcase
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Portfolio Website

## Overview
Portfolio website pribadi untuk menampilkan 40+ production applications yang sudah dibangun. Dibuat sebagai showcase profesional untuk personal branding dan client acquisition.

## Tech Stack
- [[Vite]] — Build tool & dev server
- [[React]] 19 — UI library
- [[TypeScript]] — Type safety
- [[Tailwind CSS]] — Utility-first CSS
- [[Framer Motion]] — Animations

## Architecture
```
src/
├── components/
│   ├── Hero.tsx        # Hero section dengan stats
│   ├── Navbar.tsx      # Sticky navigation
│   ├── Skills.tsx      # Technical skills grid
│   ├── Projects.tsx    # Project cards dengan filter
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
├── data/
│   └── projects.ts     # Data 40+ projects dari vault
├── App.tsx             # Main component
└── main.tsx            # Entry point
```

## Features
- [x] Responsive design (mobile-first)
- [x] Project filtering by category (Web, AI, Bot, Journal, Crypto, Utility)
- [x] Search functionality
- [x] Animated skill bars
- [x] Smooth scroll navigation
- [x] Dark gradient hero section
- [x] Project cards with status badges
- [x] Tech stack tags

## Sections
1. **Hero** — Name, title, stats (40+ projects, 30+ domains, 20+ tech stacks)
2. **Skills** — 6 categories dengan progress bars
3. **Projects** — Grid cards dengan filter & search
4. **Contact** — Email, GitHub, Location
5. **Footer** — Copyright & links

## Related Notes

### Knowledge
- [[TypeScript]] — Bahasa utama
- [[React]] — UI library
- [[Tailwind CSS]] — Styling

### Related Projects
- [[X Creator Agent]] — Sama-sama menggunakan React + TypeScript
- [[VibePlan AI]] — Next.js (React framework)

## Progress Log

### 2026-07-05
- Initial creation dari vault data
- 40+ projects terintegrasi
- Build berhasil (340KB JS, 28KB CSS)

---
Status: 🔄 Active Development
Source: `/storage/emulated/0/Documents/termux-vault/Portfolio`
Tags: #project #portfolio #typescript #react #vite #tailwind
