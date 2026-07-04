# 🧠 My Second Brain

Welcome to my Obsidian vault — a knowledge management system for all my projects and learnings.

## 📁 Structure

```
vault/
├── 📥 Inbox/              # Quick capture
├── 📋 Projects/           # Project documentation
│   ├── PLK App/          # PWA PKK
│   ├── Toko Curhat/      # Curhat app
│   └── Pi Meteora/       # Multi-agent trading
├── 🧠 Knowledge/          # Knowledge base
│   ├── TypeScript/
│   ├── Deno/
│   ├── Multi-Agent/
│   └── Solana/
├── 📅 Daily/              # Daily notes
├── 🔗 MOC/                # Map of Content
└── 📎 Templates/          # Note templates
```

## 🗺️ Map of Content

### Start Here
- [[MOC/Projects]] — All projects overview
- [[MOC/Technologies]] — Tech stack and tools
- [[MOC/Learnings]] — Insights and lessons

### Projects
- [[PLK App]] — PWA untuk PKK (TypeScript + Vite)
- [[Toko Curhat]] — Curhat anonim (Deno)
- [[Pi Meteora]] — Multi-agent trading (Pi SDK)

### Knowledge
- [[TypeScript]] — Language fundamentals
- [[Deno]] — Runtime & tools
- [[Multi-Agent Patterns]] — Architecture patterns
- [[Solana Development]] — Blockchain & DeFi

## 📝 Templates

Gunakan template untuk konsistensi:
- `Templates/Project.md` — Document new projects
- `Templates/Decision.md` — Architecture Decision Records
- `Templates/Daily.md` — Daily notes
- `Templates/Knowledge.md` — Knowledge articles

## 🔄 Workflow

### Capture
1. Quick notes → `Inbox/`
2. Process inbox → move to appropriate folder

### Organize
1. Project notes → `Projects/`
2. Knowledge → `Knowledge/`
3. Create links between related notes

### Review
1. Daily review → `Daily/`
2. Update MOCs when adding new content
3. Review and enhance old notes

## 🛠️ Tools

### Termux
```bash
# Search in vault
rg "keyword" ~/vault/

# Create daily note
cp ~/vault/Templates/Daily.md ~/vault/Daily/$(date +%Y-%m-%d).md

# Git sync
cd ~/vault && git add . && git commit -m "update" && git push
```

### Obsidian Mobile
- Buka vault dari folder yang sama
- Sync via Git atau Obsidian Sync
- Edit dan review di mobile

---

**Last updated**: 2026-07-04

Tags: #index #vault #readme
