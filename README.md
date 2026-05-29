# typescript-practice

Hands-on TypeScript practice for:

- Type annotations
- Interfaces
- Type aliases
- Union types
- Typed functions
- Generic functions
- Generic interfaces
- Generic constraints
- Compiling with `tsc`

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Compile TypeScript:

```bash
npm run build
```

3. Run compiled JavaScript:

```bash
npm start
```

## Watch Mode (Recompile on Save)

```bash
npm run watch
```

## Practice File

Main exercise file:

- `src/practice.ts`
- `src/functions-generics.ts`

This file includes examples for each topic plus optional challenge tasks at the bottom.

## Functions and Generics Practice

Use this module for:

- Typed functions
- Generic functions
- Generic interfaces
- Constraints (`extends`, `keyof`)

Run it after compiling:

```bash
npm run build
npm run start:functions
```

## Intentional Error Practice

Use this file to practice reading and fixing TypeScript compiler errors:

- `src/errors.ts`

Run diagnostics:

```bash
npm run check:errors
```

Note: `src/errors.ts` is excluded from normal `npm run build` so your main practice project still compiles cleanly.

## Useful Scripts

- `npm run build` → Runs `tsc` once
- `npm run watch` → Runs `tsc --watch`
- `npm start` → Runs `dist/practice.js`
- `npm run start:functions` → Runs `dist/functions-generics.js`
- `npm run check:errors` → Type-checks only `src/errors.ts` (expects errors)
