# simple-rr-nitro

React Router 8 app with SSR, served by Nitro 3. Structured request logging
comes from evlog, styling from Tailwind 4, and the build from Vite 8.

## Requirements

- Node 24+
- pnpm 12+

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

## Scripts

| Script           | What it does                                         |
| ---------------- | ---------------------------------------------------- |
| `pnpm dev`       | Vite dev server with HMR                             |
| `pnpm build`     | Client, SSR, and Nitro server bundles into `build/`  |
| `pnpm start`     | Run the built server (`node build/server/index.mjs`) |
| `pnpm typecheck` | Route typegen + `tsc`                                |
| `pnpm lint`      | Lint with oxlint                                     |
| `pnpm lint:fix`  | Lint and apply oxlint fixes                          |
| `pnpm fmt`       | Format with oxfmt                                    |
| `pnpm fmt:check` | Check formatting without writing                     |
