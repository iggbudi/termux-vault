# Vite Configuration

## Overview
Vite adalah build tool modern untuk frontend JavaScript/TypeScript. Vite umum dipakai untuk development cepat, hot module replacement, dan build production yang ringan.

## Typical Files

```text
project/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
```

## Basic `vite.config.ts`

```typescript
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
});
```

## Important Options

### `server.host`
Gunakan `0.0.0.0` jika ingin akses dev server dari perangkat lain di jaringan lokal atau dari Termux/mobile workflow.

### `server.port`
Port dev server. Default Vite biasanya `5173`.

### `base`
Base path saat deploy ke subfolder.

```typescript
export default defineConfig({
  base: "/nama-subfolder/",
});
```

### `build.outDir`
Folder hasil build production.

## PWA Notes
Untuk project seperti [[PLK App]], Vite bisa dipakai bersama service worker dan manifest agar app installable sebagai PWA.

## Best Practices

- Gunakan TypeScript untuk `vite.config.ts`.
- Simpan environment variable dengan prefix `VITE_` jika harus dibaca client.
- Jangan taruh secret di variable `VITE_*` karena akan masuk bundle frontend.
- Test build production dengan `npm run build` sebelum deploy.

## Common Pitfalls

- Salah `base` saat deploy ke subdirectory.
- Mengira `VITE_*` aman untuk secret.
- Dev server hanya bind ke localhost sehingga tidak bisa diakses dari HP/perangkat lain.

## Related

- [[TypeScript]]
- [[PLK App]]
- [[MOC/Technologies]]

---
Tags: #knowledge #vite #frontend #typescript
