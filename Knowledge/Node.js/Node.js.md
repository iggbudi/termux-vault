---
type: knowledge
category: runtime
updated: 2026-07-05
tags:
  - nodejs
  - node
  - javascript
  - runtime
  - backend
---

# Node.js

## Overview
Node.js adalah JavaScript runtime yang digunakan untuk backend services, bot platforms, dan real-time applications di vault ini.

## Version yang Digunakan
- **Node.js 22+** — LTS version dengan fitur modern
- **TypeScript** — Type safety untuk project besar

## Ecosystem

### Package Manager
- **npm** — Default package manager
- **pnpm** — Alternative yang lebih efisien

### Framework yang Digunakan
| Framework | Use Case di Vault |
|-----------|-------------------|
| **Express.js** | WA Dwibudi, Slack Multi-Agent Bridge |
| **Next.js** | X Creator Agent, VibePlan AI |

### Key Libraries
| Library | Purpose |
|---------|---------|
| `@whiskeysockets/baileys` | WhatsApp Web API |
| `express` | HTTP framework |
| `dotenv` | Environment variables |
| `tsx` | TypeScript execution |
| `prisma` | ORM (X Creator Agent) |

## Bot Platforms

### WhatsApp (Baileys)
```typescript
import makeWASocket from '@whiskeysockets/baileys';

const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
});

sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.key.fromMe) {
        // Process message
    }
});
```

### Slack Integration
```typescript
import { App } from '@slack/bolt';

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message('hello', async ({ say }) => {
    await say('Hello! 👋');
});
```

## TypeScript Configuration

```json
// tsconfig.json
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "strict": true,
        "esModuleInterop": true,
        "outDir": "./dist",
        "rootDir": "./src"
    }
}
```

## Process Management

### systemd Service
```ini
# /etc/systemd/system/myapp.service
[Unit]
Description=My Node.js App
After=network.target

[Service]
ExecStart=/usr/bin/node /path/to/app.js
WorkingDirectory=/path/to/app
Restart=always
User=www-data
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

### PM2 (Alternative)
```bash
pm2 start app.js --name myapp
pm2 save
pm2 startup
```

## Best Practices

1. **Error Handling**
```typescript
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
```

2. **Graceful Shutdown**
```typescript
process.on('SIGTERM', () => {
    server.close(() => {
        process.exit(0);
    });
});
```

3. **Environment Variables**
```typescript
import 'dotenv/config';
const PORT = process.env.PORT || 3000;
```

## Related Technologies
- [[TypeScript]] — Type safety
- [[Next.js]] — React framework
- [[PHP]] — Alternative backend
- [[SQLite]] — Lightweight database

## Projects Menggunakan Node.js
- [[WA Dwibudi Multi-Device]] — Express + Baileys
- [[Slack Multi-Agent Bridge]] — Express + TypeScript
- [[X Creator Agent]] — Next.js + TypeScript
- [[VibePlan AI]] — Next.js + Laravel backend
- [[SIMPEL-U Telegram Bot]] — Node.js + TypeScript
- [[Cmaestro BengkelBot]] — Node.js
- [[Dompet Bitget]] — Node.js fullstack
- [[SafeSphere]] — Express + SQLite
- [[SocAI]] — Node.js autonomous AI

---
Source: Practical experience from bot and web projects
Tags: #knowledge #nodejs #node #javascript #runtime #backend
