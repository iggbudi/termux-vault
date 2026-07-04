# AGENTS.md — Coding Vault Rules

Vault ini berisi banyak project coding dengan tech stack berbeda. Struktur utama mengikuti pola project-centric: satu folder per project, plus area, resource, snippet, daily, meta, dan attachment.

## Folder Structure

```text
/
├── Inbox/                  # Catatan cepat, ide, snippet mentah
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
├── Areas/                  # Area jangka panjang: Backend, Frontend, DevOps, AI, dll
├── Resources/              # Knowledge base tech
│   ├── Languages/
│   ├── Frameworks/
│   ├── Tools/
│   └── Patterns/
├── Archive/                # Project selesai / ditunda
├── Snippets/               # Kode reusable lintas project
├── Daily/                  # Daily notes & journal
├── Meta/                   # AGENTS.md, templates, index.md
└── Attachments/            # Screenshot, diagram, file pendukung
```

## Naming Rules

- Folder project gunakan nama jelas dan konsisten dengan nama project, contoh `SIMPMU DPMP2`, `LK UKMs`, `X Creator Agent`.
- Subfolder standar project wajib lowercase kebab-case: `tasks`, `meetings`, `docs`, `code-snippets`, `assets`.
- File baru gunakan lowercase kebab-case jika bukan file standar, contoh `deployment-notes.md`, `database-schema.md`.
- File standar project: `README.md`, `techstack.md`, `roadmap.md`.
- Jangan pakai nama ambigu seperti `notes.md`, `misc.md`, `baru.md` kecuali di Inbox.

## Standard Project Frontmatter

Untuk project note baru, gunakan YAML berikut:

```yaml
---
type: project
status: active # active | maintained | paused | archived | experimental
slug: project-slug
name: Project Name
aliases:
  - Alternative Name
source_path: /var/www/example.com
repo_url: https://github.com/example/repo
production_url: https://example.com
owner: iggbudi
created: YYYY-MM-DD
updated: YYYY-MM-DD
tech_stack:
  languages:
    - php
  frameworks:
    - express
  databases:
    - mysql
  services:
    - openai-api
  tools:
    - git
tags:
  - project
  - vps
  - lang/php
  - db/mysql
links:
  index: "[[Meta/index]]"
---
```

## Link Rules

- Project ke project: `[[LK UKMs]]`, `[[WA Dwibudi Multi-Device]]`.
- Project ke resource: `[[PHP Native]]`, `[[MySQL]]`, `[[OpenAI API]]`.
- Resource ke project wajib punya section `Used In`.
- Semua project wajib masuk `Meta/index.md`.
- Project VPS juga wajib masuk `Projects/VPS Projects/VPS Projects.md`.

## Tech Stack Tagging Convention

Gunakan tag lowercase:

- Language: `#lang/php`, `#lang/typescript`, `#lang/javascript`, `#lang/deno`
- Framework: `#fw/nextjs`, `#fw/express`, `#fw/vite`, `#fw/bootstrap`, `#fw/tailwind`
- Library: `#lib/baileys`, `#lib/prisma`, `#lib/tcpdf`
- Database: `#db/mysql`, `#db/mariadb`, `#db/sqlite`, `#db/supabase`, `#db/turso`, `#db/deno-kv`
- API/service: `#api/openai`, `#api/google-oauth`, `#api/slack`, `#api/whatsapp`, `#api/brave-search`
- Ops/runtime: `#ops/nginx`, `#ops/systemd`, `#ops/git`, `#runtime/nodejs`, `#runtime/php-fpm`
- Type: `#type/lms`, `#type/content-site`, `#type/whatsapp-gateway`, `#type/multi-agent`, `#type/pwa`

## Update Workflow

Saat menambah project:

1. Buat folder `Projects/Nama Project/`.
2. Buat minimal `README.md`, `techstack.md`, `roadmap.md`.
3. Buat subfolder `tasks/`, `meetings/`, `docs/`, `code-snippets/`, `assets/`.
4. Tambahkan project ke `Meta/index.md`.
5. Tambahkan resource/tech notes di `Resources/` bila perlu.
6. Jika project dari VPS, update `Projects/VPS Projects/VPS Projects.md`.
7. Commit dan push setelah review.

## Safety Rules

- Jangan tulis secret dari `.env` ke vault.
- Jangan masukkan token, password, private key, session auth, atau API key.
- Jika project asli sedang dirty, catat di note dan jangan ubah project asli kecuali diminta.
- Untuk klaim yang berubah seperti versi library, status SINTA, jadwal, harga, atau regulasi, cek sumber terbaru dulu.
