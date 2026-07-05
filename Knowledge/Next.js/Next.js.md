---
type: knowledge
category: framework
updated: 2026-07-05
tags:
  - nextjs
  - react
  - framework
  - frontend
  - fullstack
---

# Next.js

## Overview
Next.js adalah React framework untuk production dengan fitur SSR, SSG, dan API routes. Digunakan untuk project AI dan modern web apps di vault ini.

## Ecosystem

### Fitur Utama
- **App Router** — File-based routing
- **Server Components** — Render di server
- **API Routes** — Backend endpoints
- **Image Optimization** — Automatic image optimization
- **Middleware** — Request processing

### Package yang Digunakan
| Package | Purpose |
|---------|---------|
| `next` | Core framework |
| `react` / `react-dom` | UI library |
| `tailwindcss` | Utility-first CSS |
| `prisma` | ORM (X Creator Agent) |

## Project Structure
```
app/
├── layout.tsx
├── page.tsx
├── api/
│   └── route.ts
└── dashboard/
    └── page.tsx
components/
├── ui/
└── features/
lib/
├── db.ts
└── utils.ts
public/
prisma/
└── schema.prisma
```

## Key Patterns

### Server Component
```tsx
// app/page.tsx
export default async function Page() {
    const data = await fetchData();
    return <div>{data.map(item => <Card key={item.id} {...item} />)}</div>;
}
```

### API Route
```tsx
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    const body = await request.json();
    const user = await prisma.user.create({ data: body });
    return NextResponse.json(user, { status: 201 });
}
```

### Client Component
```tsx
'use client';

import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

## Deployment

### Build & Start
```bash
npm run build
npm start
```

### Environment Variables
```env
DATABASE_URL="file:./db.sqlite"
NEXT_PUBLIC_API_URL="https://api.example.com"
```

## Related Technologies
- [[TypeScript]] — Type safety
- [[Tailwind CSS]] — Styling
- [[Node.js]] — Runtime
- [[Laravel]] — Alternative backend

## Projects Menggunakan Next.js
- [[X Creator Agent]] — Next.js + TypeScript + Prisma + Pi Agent
- [[VibePlan AI]] — Next.js frontend + Laravel backend

---
Source: Practical experience from AI projects
Tags: #knowledge #nextjs #react #framework #frontend #fullstack
