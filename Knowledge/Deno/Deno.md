# Deno

## Overview
Deno adalah runtime JavaScript/TypeScript yang aman dan modern.
Dibuat oleh Ryan Dahl (creator Node.js) sebagai "Node.js yang diperbaiki".

## Key Features

### Built-in Tools
- `deno run` — Jalankan script
- `deno test` — Testing framework
- `deno fmt` — Code formatter
- `deno lint` — Linter
- `deno bench` — Benchmarking

### Security by Default
- Tidak ada akses file/network tanpa izin
- Explicit permissions: `--allow-read`, `--allow-net`, `--allow-write`

### Built-in APIs
- `Deno.serve()` — HTTP server
- `Deno.openKv()` — Key-value database
- `Deno.readFile()` — File operations

## Code Examples

### HTTP Server
```typescript
Deno.serve({ port: 8000 }, (req) => {
  return new Response("Hello World!");
});
```

### KV Database
```typescript
const kv = await Deno.openKv();

// Set
await kv.set(["users", "1"], { name: "John" });

// Get
const result = await kv.get(["users", "1"]);
console.log(result.value);
```

### File Operations
```typescript
const data = await Deno.readFile("file.txt");
await Deno.writeFile("output.txt", data);
```

## Deno vs Node.js

| Feature | Deno | Node.js |
|---------|------|---------|
| TypeScript | Native support | Need transpiler |
| Security | Opt-in permissions | Full access |
| Package Manager | URL imports, deno.json | npm |
| Built-in Tools | fmt, lint, test | External tools |
| Module System | ESM only | CJS + ESM |

## Best Practices
- Gunakan `deno.json` untuk configuration
- Manfaatkan URL imports untuk dependencies
- Gunakan TypeScript langsung (no transpiler)
- Explicit permissions di production

## Common Pitfalls
- Lupa permission flags saat run
- Asumsi semua npm packages kompatibel
- Tidak handle unstable APIs dengan benar

## Resources
- [Deno Manual](https://deno.land/manual)
- [Deno Standard Library](https://deno.land/std)
- [Deno KV Documentation](https://deno.land/manual/runtime/kv)

## Related
- [[TypeScript]]
- [[Node.js]]
- [[Deno KV]]

---
Tags: #knowledge #deno #runtime
Used in: [[Toko Curhat]]
