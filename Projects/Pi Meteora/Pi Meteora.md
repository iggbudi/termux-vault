# Pi Multi-Agent Meteora DLMM

## Overview
Multi-agent trading decision layer untuk Meteora DLMM (Solana DeFi).
Setiap agent = specialist dengan role dan tools berbeda.

## Architecture
```
┌─────────────┐   ┌─────────────┐
│  Scout       │   │  Analyst     │
│  (pool data) │──▶│  (metrics)   │──┐
└─────────────┘   └─────────────┘  │
┌─────────────┐                    ├─▶┌──────────────┐
│  Narrative   │──────────────────────▶│  Manager      │
│  (sentiment) │                    │  │  (aggregate)  │──▶ DECISION
└─────────────┘                    │  └──────────────┘
┌─────────────┐                    │
│  Dip Catcher │──────────────────────┘
│  (pullback)  │
└─────────────┘
```

## Agents

### Scout Agent
- **Role**: Pool data collection
- **Source**: [[Dexscreener]] API
- **Output**: Raw pool data (TVL, volume, price)

### Analyst Agent
- **Role**: Metrics calculation
- **Analysis**: APR, IL risk, volume/TVL ratio
- **Output**: Structured metrics JSON

### Narrative Agent
- **Role**: Sentiment analysis
- **Source**: Social media, news
- **Output**: Sentiment score, trending narratives

### Dip Catcher Agent
- **Role**: Pullback detection
- **Strategy**: Price drop + volume spike
- **Output**: Entry signals

### Manager Agent
- **Role**: Aggregate & decide
- **Input**: All agent outputs
- **Output**: FINAL DECISION (enter/exit/hold)

## Tech Stack
- [[Pi SDK]] (`createAgentSession`)
- [[Meteora DLMM]] API
- [[Jupiter]] API
- [[Dexscreener]] API

## Project Structure
```
pi-meteora-agents/
├── src/
│   ├── index.ts        # Entry point
│   ├── orchestrator.ts # Agent coordination
│   ├── config.ts       # Configuration
│   ├── types.ts        # TypeScript types
│   ├── web.ts          # Web interface
│   ├── test.ts         # Unit tests
│   └── dry-run.ts      # Simulation mode
├── public/
│   ├── manifest.json
│   └── sw.js
├── e2e/
│   └── app.spec.ts     # E2E tests
└── docs/
    ├── wiki.md
    └── edukasi.md
```

## Key Concepts
- [[DLMM (Dynamic Liquidity Market Maker)]]
- [[Liquidity Pool Analysis]]
- [[DeFi Risk Management]]
- [[Multi-Agent Orchestration]]

## Learnings
- Multi-agent perlu orchestration yang jelas
- Structured JSON output penting untuk aggregation
- Rate limiting di free APIs → implement queue
- Dry-run mode penting untuk testing

## Decisions
- Pilih multi-agent daripada single agent → specialization
- Pi SDK daripada custom → built-in session management
- JSON output daripada text → easier parsing

## Links
- [[Solana Development]]
- [[Multi-Agent Patterns]]
- [[DeFi Trading Strategies]]
- [[Pi SDK Documentation]]

---
Source: `~/pi-meteora-agents/`
Status: ✅ Active Development
