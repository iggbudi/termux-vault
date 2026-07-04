# Multi-Agent Orchestration

## Overview
Multi-agent orchestration adalah cara mengatur beberapa agent spesialis agar bekerja bersama dalam satu workflow yang jelas.

## Goals

- Membagi task kompleks menjadi role kecil.
- Mengurangi beban satu agent tunggal.
- Menggabungkan berbagai perspektif sebelum keputusan final.
- Membuat output lebih mudah diaudit.

## Common Architecture

```text
Input
  ↓
Specialist Agents
  ↓
Validation / Normalization
  ↓
Manager Agent
  ↓
Final Output
```

## Pattern di Pi Meteora

[[Pi Meteora]] memakai pola Specialist → Manager:

1. **Scout** mengambil data pool.
2. **Analyst** menghitung metrik risiko/peluang.
3. **Narrative** membaca sentimen/narasi.
4. **Dip Catcher** mencari sinyal pullback.
5. **Manager** menyatukan hasil menjadi keputusan enter/exit/hold.

## Orchestrator Responsibilities

- Menentukan urutan agent.
- Menyediakan input yang bersih.
- Menjalankan agent parallel jika aman.
- Menangani timeout, retry, dan error.
- Memvalidasi structured output.
- Menyimpan log untuk debugging.

## Output Contract Example

```json
{
  "agent": "analyst",
  "confidence": 0.78,
  "signal": "hold",
  "reasons": ["volume/TVL normal", "risk moderate"],
  "timestamp": "2026-07-05T00:00:00Z"
}
```

## Best Practices

- Definisikan input/output setiap agent di awal.
- Pakai JSON schema atau minimal struktur JSON konsisten.
- Jangan biarkan manager menerima output mentah yang ambigu.
- Buat dry-run dan logging sebelum production.
- Batasi jumlah agent agar tidak over-engineered.

## Common Pitfalls

- Agent memberi jawaban naratif tanpa struktur.
- Orchestrator tidak punya error handling.
- Manager terlalu percaya output agent tanpa validasi.
- Parallel execution dipakai padahal ada dependency urutan.

## Related

- [[Multi-Agent Patterns]]
- [[Pi SDK Documentation]]
- [[Pi Meteora]]

---
Tags: #knowledge #multi-agent #orchestration #architecture
