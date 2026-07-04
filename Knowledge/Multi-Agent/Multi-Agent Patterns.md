# Multi-Agent Patterns

## Overview
Multi-agent systems adalah arsitektur di mana multiple AI agents bekerja bersama untuk menyelesaikan task yang kompleks. Setiap agent punya specialization dan role yang berbeda.

## Key Patterns

### 1. Pipeline Pattern
```
Agent A → Agent B → Agent C → Output
```
- Linear flow
- Setiap agent proses output agent sebelumnya
- Cocok untuk sequential tasks

### 2. Hub-and-Spoke Pattern
```
       Agent B
          ↑
Agent A → Hub → Output
          ↓
       Agent C
```
- Central coordinator
- Specialists berkontribusi ke hub
- Cocok untuk aggregation tasks

### 3. Debate Pattern
```
Agent A ←→ Agent B
    ↓         ↓
   Agent C (Judge)
```
- Multiple perspectives
- Judge makes final decision
- Cocok untuk complex reasoning

### 4. Specialist → Manager Pattern
```
Scout →┐
Analyst→┼→ Manager → Decision
Narrative→┘
```
- Specialists collect/analyze data
- Manager aggregates and decides
- Cocok untuk trading/decision systems

## Implementation in Pi SDK

```typescript
import { createAgentSession } from "pi-sdk";

// Create specialist agent
const scout = createAgentSession({
  systemPrompt: "You are a data scout. Collect pool data...",
  tools: [dexscreenerTool],
  model: "gpt-4"
});

// Create manager agent
const manager = createAgentSession({
  systemPrompt: "You are the decision manager...",
  tools: [],
  model: "gpt-4"
});

// Orchestrate
const scoutData = await scout.run("Find top pools");
const decision = await manager.run(`Analyze: ${scoutData}`);
```

## Best Practices

### Agent Design
- Clear role definition per agent
- Structured output format (JSON preferred)
- Explicit input/output contracts

### Orchestration
- Handle failures gracefully
- Implement timeouts
- Log all agent interactions
- Support dry-run mode

### Communication
- Use structured data (not free text)
- Validate outputs before passing
- Include metadata (timestamp, confidence)

## Common Pitfalls
- Too many agents (complexity explosion)
- Ambiguous role boundaries
- No error handling between agents
- Free-text parsing instead of structured output

## Resources
- [[Pi SDK Documentation]]
- [[Multi-Agent Orchestration]]

## Related
- [[Pi Meteora]]
- [[Pi SDK]]

---
Tags: #knowledge #multi-agent #architecture
Used in: [[Pi Meteora]]
