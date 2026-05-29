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
- NPM project setup
- TypeScript ES modules
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

## NPM Setup + ES Modules Practice

You already have the basics in place (`npm init`, package install, scripts).
This practice module focuses on ES modules with TypeScript.

Files:

- `src-esm/main.mts`
- `src-esm/utils.mts`
- `tsconfig.esm.json`

Build and run ESM output:

```bash
npm run build:esm
npm run start:esm
```

Watch mode for ESM:

```bash
npm run watch:esm
```

NPM setup practice checklist:

1. Initialize: `npm init -y`
2. Install package: `npm install <package>`
3. Install dev package: `npm install -D <package>`
4. Add scripts in `package.json`
5. Compile and run with scripts

## Intentional Error Practice

Use this file to practice reading and fixing TypeScript compiler errors:

- `src/errors.ts`
- `src/generics-errors.ts`

Run diagnostics:

```bash
npm run check:errors
npm run check:generics-errors
```

Note: error practice files are excluded from normal `npm run build` so your main practice project still compiles cleanly.

## Useful Scripts

- `npm run build` → Runs `tsc` once
- `npm run build:esm` → Compiles ES module practice (`src-esm`)
- `npm run watch` → Runs `tsc --watch`
- `npm run watch:esm` → Watches ES module practice config
- `npm start` → Runs `dist/practice.js`
- `npm run start:functions` → Runs `dist/functions-generics.js`
- `npm run start:esm` → Runs `dist-esm/main.mjs`
- `npm run check:errors` → Type-checks only `src/errors.ts` (expects errors)
- `npm run check:generics-errors` → Type-checks only `src/generics-errors.ts` (expects errors)

## React + Vite Practice (Isolated)

This repo now includes a minimal React + Vite app in the `web/` folder, separate from the TypeScript Node practice modules.

Files:

- `web/index.html`
- `web/src/main.jsx`
- `web/src/App.jsx`
- `vite.config.react.ts`

Commands:

- `npm run dev:react` → Start Vite dev server
- `npm run build:react` → Build React app to `web/dist`
- `npm run preview:react` → Preview production build
