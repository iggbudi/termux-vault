---
type: project
status: active # active | maintained | paused | archived | experimental
title: "{{title}}"
slug: "{{slug}}"
aliases: []
owner: "iggbudi"
start-date: "{{date}}"
updated: "{{date}}"
repo: ""
source-path: ""
production-url: ""
docs-url: ""
techstack:
  languages: []
  frameworks: []
  databases: []
  services: []
  tools: []
tags:
  - project
  - coding
priority: medium # low | medium | high | critical
visibility: private # private | internal | public
---

# {{title}}

> [!important]
> Isi `status`, `repo`, `source-path`, dan `techstack` sejak awal agar project mudah ditemukan lewat Dataview dan graph Obsidian.

## Overview

Deskripsi singkat project:

- Masalah yang diselesaikan:
- Target user:
- Domain / konteks:
- Status saat ini:

## Goals

> [!tip]
> Tulis goals yang bisa dicek. Hindari goal terlalu umum seperti “buat aplikasi bagus”.

### Primary Goals

- [ ] Goal utama 1
- [ ] Goal utama 2
- [ ] Goal utama 3

### Success Criteria

- [ ] Kriteria sukses 1
- [ ] Kriteria sukses 2
- [ ] Kriteria sukses 3

## Architecture

> [!important]
> Jelaskan arsitektur cukup detail agar agent/orang lain bisa lanjut tanpa membaca seluruh codebase dari nol.

```text
Client / User
  ↓
Frontend / UI
  ↓
Backend / API
  ↓
Database / External Services
```

### Main Components

| Component | Path / Module | Responsibility |
|---|---|---|
| Frontend | `path/to/frontend` |  |
| Backend | `path/to/backend` |  |
| Database | `schema/path` |  |
| Worker / Cron | `path/to/worker` |  |

### Data Flow

1. Step 1
2. Step 2
3. Step 3

### Important Files

```text
project-root/
├── README.md
├── src/
├── docs/
└── tests/
```

## Tech Stack

### Languages

- `language-name` — alasan dipakai

### Frameworks / Libraries

- `framework-name` — fungsi di project

### Database / Storage

- `database-name` — data yang disimpan

### APIs / Services

- `service-name` — integrasi/fungsi

### Tools / Ops

- `tool-name` — workflow/operasional

## Current Tasks

> [!note]
> Task kecil lebih mudah dipindahkan ke `tasks/` kalau sudah mulai banyak.

- [ ] Task aktif 1
- [ ] Task aktif 2
- [ ] Task aktif 3

### Dataview: Open Tasks in This Project

```dataview
TASK
FROM "Projects/{{title}}"
WHERE !completed
SORT file.name ASC
```

### Dataview: Recent Project Notes

```dataview
TABLE file.mtime AS "Updated", status, priority
FROM "Projects/{{title}}"
SORT file.mtime DESC
LIMIT 20
```

## Blockers

> [!warning]
> Catat blocker yang benar-benar menghambat progress, bukan sekadar todo biasa.

| Blocker | Impact | Owner | Next Action | Status |
|---|---|---|---|---|
|  |  |  |  | open |

## Learnings

> [!example]
> Simpan keputusan, bug, dan gotcha yang bisa dipakai ulang di project lain.

- Learning 1:
- Learning 2:
- Learning 3:

## Related Resources

### Internal Notes

- [[Meta/index]]
- [[MOC/Projects]]
- [[MOC/Technologies]]

### External Links

- [Repository]()
- [Production]()
- [Docs]()

### Related Projects

- [[Project Name]]

## Decisions

- [[Decision Note]]

## Runbook / Commands

```bash
# install

# dev

# test

# build

# deploy
```

## Changelog

### {{date}}

- Created project note.
