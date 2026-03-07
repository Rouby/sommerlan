# Copilot Instructions for Sommerlan App

## Project Overview

The **Sommerlan App** is a full-stack TypeScript web application for managing summer LAN party events. It handles attendee registration, room allocation, payment tracking, donations (via PayPal), purchase/snack shop, event scheduling, photo galleries, and Discord/email integrations. The live app is deployed at [sommerlan.rocks](https://sommerlan.rocks) and [staging.sommerlan.rocks](https://staging.sommerlan.rocks).

---

## Repository Structure

This is a **Yarn 4 monorepo** with three workspaces:

```
sommerlan/
├── .github/                     # CI/CD workflows, issue templates
├── docs/                        # Architecture docs (e.g. auth flow)
├── helm/                        # Kubernetes Helm chart for deployment
├── packages/
│   ├── server/                  # Node.js/Fastify/GraphQL backend
│   ├── client/                  # React/TypeScript frontend
│   └── integration/             # Playwright E2E tests
├── Dockerfile                   # Multi-stage production build
├── docker-compose.yml           # Local Docker environment
├── graphql.config.ts            # GraphQL tooling configuration
└── package.json                 # Root workspace + scripts
```

### Server (`packages/server/src/`)
```
index.ts          # Entry point (loads dotenv, newrelic)
server.ts         # Fastify + GraphQL Yoga setup
config.ts         # Server configuration (port, dev mode)
auth.ts           # WebAuthn & JWT authentication
ability.ts        # CASL-based authorization (RBAC)
schema/           # GraphQL schema modules (one folder per domain)
  party/          # Party management (queries, mutations, resolvers)
  user/           # User profile & authentication
  donation/       # PayPal donations
  game/           # Party games
  purchase/       # Snack shop purchases
  money/          # Money transfers
  admin/          # Admin operations
  events/         # Event scheduling
  overwatch/      # Overwatch game features
data/             # Google Sheets ORM layer
  $base.ts        # Abstract base class for all data models
  $cache.ts       # In-memory cache with JSON Patch sync
  *.ts            # Individual model files (User, Party, Attending, etc.)
services/         # External service integrations
  mail.ts         # Nodemailer email sending
  discord.ts      # Discord.js bot integration
  paypal.ts       # PayPal SDK integration
  scheduler.ts    # Cron job scheduler (recron)
  webAuthn.ts     # WebAuthn passkey helpers
```

### Client (`packages/client/src/`)
```
main.tsx              # React entry point
App.tsx               # Root component (Mantine provider, router)
GraphQLProvider.tsx    # URQL GraphQL client configuration
routes/               # TanStack Router pages (index, admin, imprint)
features/             # Feature modules (PartyCheckIn, Purchases, etc.)
components/           # Shared UI components (NavLink, UserAvatar, etc.)
hooks/                # Custom React hooks
state/                # Jotai atoms for client state
gql/                  # Auto-generated GraphQL types & hooks
```

### Integration Tests (`packages/integration/`)
```
tests/                # Playwright test files
playwright.config.ts  # Playwright configuration (base URL: http://127.0.0.1:5173)
```

---

## Tech Stack

| Layer        | Technology |
|-------------|-----------|
| **Backend** | Node.js 20+, TypeScript, Fastify, GraphQL Yoga |
| **Frontend** | React 18, TypeScript, Vite, TanStack Router, URQL, Mantine UI |
| **Database** | Google Sheets (via `google-spreadsheet` library) |
| **Testing**  | Vitest (unit), Playwright (E2E/integration) |
| **Auth**     | WebAuthn (passkeys), JWT tokens, CASL (authorization) |
| **Build**    | SWC (server), Vite (client) |
| **Deploy**   | Docker, Kubernetes, Helm, GitHub Actions |
| **Monitoring**| New Relic APM |
| **Package Manager** | Yarn 4.4.0 (PnP mode) |

---

## Getting Started

### Prerequisites
- Node.js ≥ 20
- Yarn 4.4.0 (`corepack enable` and `corepack prepare yarn@4.4.0 --activate`)

### Install Dependencies
```bash
yarn
```
> **Note:** Yarn 4 uses PnP (Plug'n'Play) in loose mode. Do NOT use `npm` or `pnpm` — they will not work with the PnP resolution.

### Run Development Server
```bash
yarn dev
```
This concurrently starts:
- **Backend** on port **2022** (or `PORT` env var) with nodemon + pino-pretty logging
- **Frontend** on port **5173** (Vite dev server)

Access the app at **http://localhost:5173**. The frontend proxies GraphQL requests to the backend.

### Environment Variables (Development)
Create a `.env` file in `packages/server/` or set these variables:
```bash
NODE_ENV=development
SESSION_SECRET=<any-random-string>
APP_ORIGIN=http://localhost:5173
# For Google Sheets data access (required for full functionality):
GOOGLE_SHEET_ID=<sheet-id>
GOOGLE_SERVICE_ACCOUNT_EMAIL=<email>
GOOGLE_PRIVATE_KEY=<key>
# Optional integrations:
DISCORD_BOT_TOKEN=<token>
DISCORD_GUILD_ID=<id>
DISCORD_ROLE_ID=<id>
DISCORD_ADMIN_IDS=<comma-separated-ids>
MAILSERVER_HOST=<smtp-host>
MAILSERVER_USER=<user>
MAILSERVER_PASSWORD=<password>
VAPID_PUBLIC_KEY=<key>
VAPID_PRIVATE_KEY=<key>
```

---

## Commands Reference

| Command           | Description |
|------------------|-------------|
| `yarn dev`        | Start dev server (client + server concurrently) |
| `yarn build`      | Build all packages for production |
| `yarn test`       | Run unit tests (Vitest) across all workspaces |
| `yarn integrate`  | Run E2E integration tests (Playwright) — requires a built app |
| `yarn typecheck`  | TypeScript type checking (`tsc --noEmit`) |
| `yarn lint`       | Lint code (currently: "No linting configured" — no-op) |
| `yarn codegen`    | Regenerate GraphQL TypeScript types from schema |

### Running Integration Tests Locally
Integration tests require a production build first:
```bash
yarn build
SESSION_SECRET=kitty NEW_RELIC_ENABLED=false NEW_RELIC_LOGGING_ENABLED=false LOG_LEVEL=trace yarn integrate
```
The Playwright tests use a fake API via the `x-fake-api` header to isolate test data from production.

---

## GraphQL Architecture

The app uses a schema-first GraphQL approach with code generation:

1. **Define schema** in `packages/server/src/schema/<domain>/schema.graphql`
2. **Implement resolvers** in `packages/server/src/schema/<domain>/resolvers/`
3. **Run codegen** via `yarn codegen` to generate:
   - Server-side TypeScript types → `packages/server/src/schema/resolvers.generated.ts`
   - Client-side URQL hooks → `packages/client/src/gql/`

**Never manually edit** files in `packages/*/src/gql/` or `*.generated.ts` — these are auto-generated.

---

## Data Layer (Google Sheets ORM)

The database is Google Sheets. All models extend `Base` from `packages/server/src/data/$base.ts`:
- `Base.all()` — fetch all rows
- `Base.filter(predicate)` — filter rows
- `instance.save()` — create or update a row
- `instance.delete()` — delete a row

Data is cached in-memory (`$cache.ts`) and changes are tracked with JSON Patches for efficient syncing.

**Models:** `User`, `Party`, `Attending`, `Donation`, `Game`, `Purchase`, `MoneyTransfer`, `Event`, `Picture`

---

## Authentication & Authorization

- **Authentication:** WebAuthn passkeys (no passwords). JWT tokens for API sessions. Cross-device auth uses QR codes — see `docs/auth.md` for the sequence diagram.
- **Authorization:** CASL-based RBAC via `packages/server/src/ability.ts`. User roles: `Trusted`, `Admin`, `Bookkeeper`, `Doorkeeper`. The `@rbac` GraphQL directive enforces permissions. Use the `Can` component in the client to conditionally render UI.

---

## Adding a New Feature

### Backend (GraphQL resolver)
1. Add or update `.graphql` schema file in `packages/server/src/schema/<domain>/`
2. Run `yarn codegen` to regenerate types
3. Implement resolver in `packages/server/src/schema/<domain>/resolvers/`
4. Add authorization rules to `packages/server/src/ability.ts` if needed

### Frontend (React component)
1. Add GraphQL query/mutation in a `.tsx` or `.ts` file using URQL's `useQuery`/`useMutation`
2. Run `yarn codegen` to regenerate client hooks
3. Add the component to `packages/client/src/features/` or `packages/client/src/components/`
4. Use Mantine UI components for consistent styling
5. Add routes to `packages/client/src/routes/` (TanStack Router, file-based)

---

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push/PR:

1. **Lint** — `yarn lint` (currently no-op)
2. **TypeScript** — `yarn typecheck`
3. **Unit Tests** — `yarn test --coverage` (Vitest)
4. **Integration Tests** — build + `yarn integrate` (Playwright)
5. **Build** — Multi-arch Docker image (`linux/arm64`) → `ghcr.io/rouby/sommerlan-app`
6. **Deploy** — Helm upgrade to Kubernetes (only on `main` branch merge)
   - Staging: `staging.sommerlan.rocks`
   - Production: `sommerlan.rocks`

---

## Known Issues & Workarounds

| Issue | Workaround |
|-------|-----------|
| Linting not configured | `yarn lint` echoes "No linting configured" — use Prettier manually or as an editor plugin |
| PnP dependency resolution | `.yarnrc.yml` uses `nodeLinker: pnp` with `pnpFallbackMode: loose` for compatibility |
| SWC with PnP | Use `pnpify swc` (not `swc` directly) for server builds |
| Docker cache issues | Build cache handled via `actions/cache` in CI; local builds may need `--no-cache` occasionally |
| New Relic in tests | Set `NEW_RELIC_ENABLED=false NEW_RELIC_LOGGING_ENABLED=false` for integration tests |
| Google Sheets API latency | In-memory caching mitigates this — avoid calling `Base.all()` in hot paths |
| Cross-device WebAuthn | Implement QR code challenge flow per `docs/auth.md` |

---

## Code Conventions

- **TypeScript everywhere** — no plain JS files in `src/`
- **No linter enforced** — maintain consistent style with existing code
- **GraphQL codegen** — always run `yarn codegen` after schema changes
- **Mantine UI** — use Mantine components instead of custom CSS where possible
- **CASL for permissions** — all authorization checks go through `ability.ts`; never hardcode role checks in resolvers
- **Pino logging** — use the Fastify logger (`request.log`, `server.log`) in the server; avoid `console.log`
- **Feature-based organization** — group related components, hooks, and queries in `features/<FeatureName>/`
- **Lazy routes** — use `.lazy.tsx` suffix for route components to enable code splitting

---

## Package Manager

Always use **yarn** for all package management operations. Never use `npm` or `pnpm`.

| Task | Command |
|------|---------|
| Install all dependencies | `yarn` or `yarn install` |
| Add a dependency | `yarn add <package>` |
| Add a dev dependency | `yarn add -D <package>` |
| Remove a dependency | `yarn remove <package>` |
| Run a script | `yarn <script-name>` |
| Update packages | `yarn upgrade` or `yarn upgrade-interactive` |
| Run codegen | `yarn codegen` (from root) |
| Run workspace command | `yarn workspace @sommerlan/<name> <command>` |

---

## GraphQL Schema Design

When designing GraphQL schemas, prefer **generic update mutations** with input types over specific field-level mutations.

**Do not** create multiple mutations for individual fields:
```graphql
# Bad
type Mutation {
  updatePlayerColor(gameId: ID!, color: String!): Player!
  updatePlayerName(gameId: ID!, name: String!): Player!
}
```

**Do** use a single generic mutation with an input type:
```graphql
# Good
input UpdatePlayerInput {
  color: String
  name: String
}

type Mutation {
  updatePlayer(gameId: ID!, input: UpdatePlayerInput!): Player!
}
```

Guidelines:
- Use `verb-noun` naming (e.g., `updatePlayer`, `createGame`) — avoid field-specific names
- Make input fields optional when possible
- Group related fields into a single update operation for extensibility

---

## GraphQL Codegen Workflow

When modifying GraphQL schemas and resolvers, **always follow this order**:

1. **Modify the `.graphql` schema file** — add/update types, inputs, queries, or mutations
2. **Run `yarn codegen`** — regenerates TypeScript types before writing any resolver code
3. **Implement or update resolvers** — use the generated types for type safety

> **Never** write resolver code before running codegen after a schema change.

Example:
```bash
# Step 1: edit packages/server/src/schema/<domain>/schema.graphql
# Step 2:
yarn codegen
# Step 3: implement resolver using generated MutationResolvers["updatePlayer"] type
```

---

## React Component Types

When creating React components, **define prop types inline** in the function parameters rather than as separate interfaces or type aliases.

```tsx
// Bad: separate interface
interface MyComponentProps {
  name: string;
  age: number;
}
export function MyComponent({ name, age }: MyComponentProps) { ... }

// Good: inline type definition
export function MyComponent({ name, age }: { name: string; age: number }) { ... }
```

**Exceptions** — use a separate type/interface when:
- The same type is reused across multiple components
- The component has more than ~5 props (group related props into logical sub-objects)
- The type must be exported for use by other files

---

## Mantine UI Guidelines

Always prefer Mantine components over plain HTML elements. Check for a Mantine equivalent before using a raw `div`, `button`, `input`, etc.

### Component mapping

| HTML element | Mantine component |
|-------------|------------------|
| `div` (layout) | `Group`, `Stack`, `Flex`, `Grid` |
| `div` (container) | `Box`, `Paper`, `Container` |
| `p`, `span` | `Text` |
| `h1`–`h6` | `Title` |
| `button` | `Button`, `ActionIcon` |
| `input` | `TextInput`, `NumberInput`, etc. |
| `ul` / `ol` | `List` |
| `li` | `List.Item` |

### Props mapping

| CSS property | Mantine prop |
|-------------|-------------|
| `margin` / `padding` | `m` / `p` with theme values |
| `display: flex` | `Group` or `Stack` |
| `width` / `height` | `w` / `h` |
| `background-color` | `bg` |

Example:
```tsx
// Bad
<div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
  <button>Click me</button>
</div>

// Good
<Group mb="md" gap="sm">
  <Button>Click me</Button>
</Group>
```

---

## Mantine Performance Guidelines

When working with Mantine form inputs and loading states:

### State management
- Prefer **uncontrolled** inputs when real-time synchronization isn't necessary
- Use `defaultValue` for initial state; only sync to the backend on final changes (e.g., `onBlur`)
- Keep form submission state separate from UI preview state

```tsx
// Bad: controlled input that triggers updates on every keystroke
<TextInput value={value} onChange={(e) => { setValue(e.target.value); handleSubmit(e.target.value); }} />

// Good: uncontrolled input with submit on blur
<TextInput defaultValue={initialValue} onChange={handleLocalPreview} onBlur={handleSubmit} />
```

### Loading states
- Prefer component-specific loading states with `LoadingOverlay` over disabling inputs
- Keep components interactive during loading when possible

```tsx
// Bad: disabling input during loading
<Input disabled={isLoading} />

// Good: overlay with interactive input
<div style={{ position: 'relative' }}>
  <LoadingOverlay visible={isLoading} />
  <Input />
</div>
```

---

## Deployment Notes

The production Docker image is built for `linux/arm64` (the Kubernetes cluster runs on ARM). Local builds may require QEMU emulation:
```bash
docker buildx create --use
docker buildx build --platform linux/arm64 -t sommerlan-app .
```

Secrets are injected at deploy time via Helm `--set-string secrets.*` from GitHub Actions secrets/vars.
