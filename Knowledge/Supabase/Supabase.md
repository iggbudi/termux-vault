---
type: knowledge
category: baas
updated: 2026-07-05
tags:
  - supabase
  - baas
  - postgresql
  - realtime
  - backend
---

# Supabase

## Overview
Supabase adalah open-source Backend-as-a-Service (BaaS) yang dibangun di atas PostgreSQL. Digunakan untuk project yang butuh real-time features dan managed backend.

## Ecosystem

### Fitur Utama
- **PostgreSQL Database** — Managed database
- **Real-time Subscriptions** — Live data updates
- **Authentication** — Built-in auth
- **Storage** — File storage
- **Edge Functions** — Serverless functions

### Client Libraries
| Library | Purpose |
|---------|---------|
| `@supabase/supabase-js` | JavaScript/TypeScript client |
| PHP client | Manual REST API integration |

## Integration Patterns

### JavaScript Client
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

// Fetch data
const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false });

// Real-time subscription
const subscription = supabase
    .channel('articles')
    .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'articles' },
        (payload) => console.log('New article:', payload.new)
    )
    .subscribe();
```

### PHP Integration (REST API)
```php
$url = 'https://xxx.supabase.co/rest/v1/articles';
$headers = [
    'apikey: ' . $supabaseKey,
    'Authorization: Bearer ' . $supabaseKey,
    'Content-Type: application/json'
];

$response = file_get_contents($url, false, stream_context_create([
    'http' => ['header' => implode("\r\n", $headers)]
]));

$articles = json_decode($response, true);
```

## Database Schema

### Row Level Security (RLS)
```sql
-- Enable RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read published articles
CREATE POLICY "Public read access" ON articles
    FOR SELECT
    USING (status = 'published');

-- Policy: Authors can manage their own articles
CREATE POLICY "Authors manage own articles" ON articles
    FOR ALL
    USING (auth.uid() = author_id);
```

## Best Practices

1. **Environment Variables**
```env
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_KEY=eyJxxx...
```

2. **Error Handling**
```typescript
const { data, error } = await supabase.from('table').select();
if (error) {
    console.error('Supabase error:', error.message);
    throw error;
}
```

3. **Pagination**
```typescript
const PAGE_SIZE = 20;
const { data } = await supabase
    .from('articles')
    .select('*')
    .range(0, PAGE_SIZE - 1);
```

## Related Technologies
- [[PostgreSQL]] — Underlying database
- [[MySQL]] / [[MariaDB]] — Alternative RDBMS
- [[TypeScript]] — Client language

## Projects Menggunakan Supabase
- [[EclipseTrack]] — PHP + Supabase + SEO tooling

---
Source: Practical experience from EclipseTrack project
Tags: #knowledge #supabase #baas #postgresql #realtime #backend
