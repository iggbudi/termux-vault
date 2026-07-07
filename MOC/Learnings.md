---
updated: 2026-07-05 18:30
tags:
  - learning
  - methodology
  - sprint
---

# 💡 Learnings

## Web Development

### CORS Issues
- **Problem**: CORS error di mobile browser
- **Solution**: Gunakan SDK client-side (e.g., `@libsql/client/web`)
- **Source**: [[PLK App]]

### Mobile Optimization
- Form input `font-size: 16px` → prevent auto-zoom di iOS/Android
- Bottom navigation lebih thumb-friendly
- Skeleton loading untuk perceived performance
- **Source**: [[PLK App]]

### Toast Notifications
- Gunakan `sessionStorage` untuk flash messages antar navigasi
- Custom confirm dialog lebih konsisten daripada `window.confirm()`
- **Source**: [[PLK App]]

---

## Database

### Turso (libSQL)
- Cloud SQLite yang compatible dengan SQLite syntax
- Client SDK handle connection pooling
- Timeout 30s dengan `AbortController` untuk reliability
- **Source**: [[PLK App]]

### Deno KV
- Built-in key-value store, zero config
- Cocok untuk prototipe dan small apps
- Auto-generate `data.db` file
- **Source**: [[Toko Curhat]]

---

## Multi-Agent Systems

### Orchestration Pattern
- Specialist agents → Manager agent → Decision
- Structured JSON output untuk easier aggregation
- Rate limiting penting untuk free APIs
- **Source**: [[Pi Meteora]]

### Agent Design
- Setiap agent punya:
  - Custom system prompt (role definition)
  - Custom tools (API access)
  - Structured output format
- **Source**: [[Pi Meteora]]

---

## Development Practices

### Sprint-Based Development
- Break features ke small sprints
- Document progress di AGENTS.md
- Review & refactor setelah setiap sprint
- **Source**: [[PLK App]]

### Sprint Execution Protocol
- 10 langkah QA loop: implement → typecheck → test → Playwright → design → security → docs → cache → final verification
- Sprint-based testing dengan regression suite per sprint
- Refactor bertahap per sprint (strangler fig pattern)
- **Source**: [[referensicoding]]

### Quality Gates
- Pre-sprint: gap analysis, prioritas, breakdown
- During sprint: implementasi bertahap, unit test
- Post-sprint: typecheck, test, Playwright QA, security check, docs
- Cross-sprint: regression testing, progress log
- **Source**: [[referensicoding]]

### Zero Dependency Philosophy
- Fewer dependencies = easier maintenance
- Built-in tools seringkali cukup
- Deno filosofi: "batteries included"
- **Source**: [[Toko Curhat]]

---

## Termux & Mobile Dev

### Storage Access
- `termux-setup-storage` untuk akses `/sdcard/`
- Files di home directory (`~`) lebih aman

### Git di Termux
- `pkg install git`
- Setup `.gitconfig` untuk credentials
- Gunakan personal access token untuk HTTPS

---

Tags: #learning #webdev #database #multi-agent #termux
