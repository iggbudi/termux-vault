# TypeScript

## Overview
TypeScript adalah superset dari JavaScript yang menambahkan static typing.
Dikembangkan oleh Microsoft, banyak digunakan untuk web development modern.

## Key Concepts

### Type Annotations
```typescript
// Explicit types
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let scores: number[] = [90, 85, 95];
let names: Array<string> = ["Alice", "Bob"];
```

### Interfaces
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;  // optional
}

const user: User = {
  id: 1,
  name: "John",
  email: "john@example.com"
};
```

### Generics
```typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello");
```

### Type Guards
```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

## Best Practices
- Gunakan `strict: true` di tsconfig
- Hindari `any` type
- Gunakan interfaces untuk object shapes
- Manfaatkan type inference saat memungkinkan

## Common Pitfalls
- Lupa handle `undefined` dan `null`
- Over-engineering dengan types terlalu complex
- Tidak manfaatkan utility types (`Partial`, `Pick`, `Omit`)

## Resources
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [Type Challenges](https://github.com/type-challenges/type-challenges)

## Related
- [[Vite]]
- [[JavaScript]]
- [[Node.js]]

---
Tags: #knowledge #typescript #language
Used in: [[PLK App]], [[Pi Meteora]]
