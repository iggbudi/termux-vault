# Pi SDK Documentation

## Overview
Pi SDK digunakan di vault ini sebagai framework untuk membuat dan mengatur session agent, terutama pada project [[Pi Meteora]].

## Core Idea
Setiap agent dibuat dengan role spesifik, prompt sistem, tools, dan format output yang jelas. Orchestrator lalu menjalankan agent-agent tersebut dan menggabungkan hasilnya.

## Example Pattern

```typescript
import { createAgentSession } from "pi-sdk";

const analyst = createAgentSession({
  systemPrompt: "You are an analyst. Return structured JSON only.",
  tools: [],
  model: "gpt-4",
});

const result = await analyst.run("Analyze this pool data...");
```

## Recommended Agent Contract

Setiap agent sebaiknya punya:

- **Role** — tugas spesifik agent.
- **Input** — data yang diterima.
- **Output** — JSON schema atau struktur hasil.
- **Tools** — API/tool yang boleh dipakai.
- **Failure behavior** — apa yang dilakukan saat data/API gagal.

## Multi-Agent Flow

```text
Specialist Agents → Orchestrator/Manager → Final Decision
```

Contoh di [[Pi Meteora]]:

- Scout Agent mengumpulkan data pool.
- Analyst Agent menghitung metrik.
- Narrative Agent membaca sentimen/narasi.
- Dip Catcher Agent mencari pullback.
- Manager Agent menggabungkan semua sinyal.

## Best Practices

- Pakai structured JSON output, bukan free text.
- Validasi output sebelum dipakai agent berikutnya.
- Tambahkan timeout dan retry untuk API eksternal.
- Simpan log interaksi agent untuk debugging.
- Sediakan dry-run mode sebelum real action/trading.

## Common Pitfalls

- Role agent terlalu tumpang tindih.
- Output tidak konsisten sehingga susah di-parse.
- Tidak ada fallback saat salah satu agent gagal.
- Terlalu banyak agent untuk masalah sederhana.

## Related

- [[Pi Meteora]]
- [[Multi-Agent Patterns]]
- [[Multi-Agent Orchestration]]

---
Tags: #knowledge #pi-sdk #multi-agent
