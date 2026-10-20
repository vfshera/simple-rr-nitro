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

## Project structure

```text
app/
  root.tsx            document shell and error boundary
  routes.ts           flat file route config
  routes/_index.tsx   home route with a loader
  app.css             Tailwind entry
server/
  ssr.ts              React Router handler exposed as a Nitro fetch handler
  routes/             Nitro API routes (health.get.ts -> GET /health)
build/                Nitro output: client/ and server/
```

## How it fits together

Vite runs three plugins in order: Tailwind, React Router, then Nitro. React
Router builds the client and the SSR bundle from `server/ssr.ts`; Nitro bundles
that entry alongside its own API routes and emits a node-server preset to
`build/server`. Requests hit Nitro first, so `/health` is handled there while
everything else falls through to React Router.

| File                     | Purpose                                     |
| ------------------------ | ------------------------------------------- |
| `vite.config.ts`         | Plugin order, SSR input, Nitro output paths |
| `react-router.config.ts` | SSR on, `buildDirectory: "build"`           |
| `nitro.config.ts`        | Registers the evlog module                  |
| `evlog.config.ts`        | Service name (`rr-nitro-app`)               |

## Logging

`server/routes/health.get.ts` shows the pattern:

```ts
const log = useLogger(ev);

log.info("Health check");
```

Logs are emitted through evlog's Nitro module. The server reads `PORT`
(default 3000) and `HOST` from the environment.

## Code quality

oxlint and oxfmt handle linting and formatting; lefthook runs both on staged
files before each commit.
