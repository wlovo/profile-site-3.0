# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site — a static, content-driven single-purpose marketing site showcasing professional experience, projects, and education. Content lives in JSON files under `src/content/`, loaded through a typed, Zod-validated layer (`src/lib/content`); route pages read that content and pass it as props to presentational section components. There is no backend, CMS, or runtime data fetching.

## Project Structure

- **Language/runtime:** TypeScript 5.9 (`strict`), Node.js (Next.js 16 App Router), React 19.2
- **Path alias:** `@/*` → `./src/*`

```
src/
├── app/                  # App Router: one folder per route. Pages load content + pass props.
│   ├── layout.tsx        # Root layout: fonts + ThemeProvider + Header/Footer; metadata from content/site.json
│   ├── page.tsx          # Home (/) → <Intro/> + <Profile/>; computes experience duration
│   ├── globals.css       # Tailwind v4 import + oklch theme tokens (light/dark)
│   ├── about/page.tsx    # each route page also exports per-route metadata
│   ├── education/page.tsx
│   └── projects/page.tsx
├── components/
│   ├── sections/         # page sections (presentational, content via props): intro, profile, projects, education, about
│   ├── layout/           # shared chrome: header, footer, theme-provider, theme-toggle
│   ├── code-block.tsx    # custom IDE-styled code display (shared widget; see Architecture)
│   └── ui/               # shadcn/Radix primitives: button, dialog, dropdown-menu, navigation-menu
├── content/              # hand-editable site content as JSON — the "edit me" surface
│   └── site, experience, skills, projects, education, about  (.json)
├── lib/
│   ├── utils.ts          # cn(), line(), simpleLine()
│   ├── date.ts           # experienceDuration() — computes "X years and Y months"
│   └── content/          # typed content layer
│       ├── schema.ts     # Zod schemas (single source of truth)
│       └── index.ts      # imports + validates JSON, exports typed `site`, `experience`, ...
├── types/                # domain types inferred from the Zod schemas (Project, Experience, ...)
└── hooks/                # scaffolded, empty
public/                   # static assets; public/projects/*.png are project card images
```

### Tech Stack

| Concern | Choice | Version | Notes |
|---|---|---|---|
| Framework | Next.js | 16.1.1 | App Router, Turbopack dev server |
| UI | React | 19.2.3 | |
| Styling | Tailwind CSS | 4.1.18 | CSS-first config in `globals.css`, no `tailwind.config` |
| Components | shadcn/ui (new-york) + Radix | — | dialog, dropdown-menu, navigation-menu, slot |
| Variants | class-variance-authority | 0.7.1 | |
| Theming | next-themes | 0.4.6 | class-based dark mode |
| Icons | lucide-react | 0.562.0 | |
| Validation | Zod | 4.x | schemas in `lib/content/schema.ts`; validates content JSON, infers `@/types`. Experience duration is computed natively in `lib/date.ts` (no `moment`) |
| Lint | ESLint | 9.39 | flat config from `eslint-config-next`; `npm run lint` runs clean |

## Key Commands

```bash
npm run dev      # Dev server with Turbopack → http://localhost:3000
```

```bash
npm run build    # Production build — also runs the TypeScript typecheck; this is the verification gate
```

```bash
npm run start    # Serve the production build (run `npm run build` first)
```

```bash
npm run lint     # ESLint flat config (eslint-config-next) — runs clean
```

### Linting

`npm run lint` runs `eslint .` against the flat config in `eslint.config.mjs`, which spreads the array that `eslint-config-next@16` exports directly (`[...next, { ignores: ['.next/**'] }]`). The previous `FlatCompat` wrapper threw `Converting circular structure to JSON` under ESLint 9 and `next lint` was removed in Next 16 — both are gone. `npm run build` remains the primary verification gate (it typechecks and compiles).

> No test suite exists in this repo (no test runner, no `test` script, no test files). Do not claim tests pass — verify changes via `npm run build`.

## Architecture

**Pattern:** Static component-composed pages with a thin content layer. JSON in `src/content/` is validated by Zod (`lib/content`) and passed by route pages as props into presentational section components. Server-rendered root layout wraps a few interactive client islands. No hexagonal architecture — this is the right-sized separation for a static content site.

### Render flow

1. `app/layout.tsx` (server component) loads Geist fonts, builds site `metadata` from `content/site.json` (real description + a `%s · <name>` title `template`), wraps children in `ThemeProvider` (`attribute="class"`, `defaultTheme="system"`, `enableSystem`, `disableTransitionOnChange`), and renders `<Header name=…/>` → `<main>{children}</main>` → `<Footer name=…/>`.
2. Each `app/<route>/page.tsx` (server) imports typed content from `@/lib/content`, exports its own per-route `metadata`, and passes content as props to its section component(s). `app/page.tsx` also computes the experience duration via `experienceDuration()` from `@/lib/date`.
3. Section components are presentational (data comes via props). Only `projects.tsx` (dialog state), `header.tsx` (nav), and `theme-toggle.tsx` declare `'use client'`; `intro.tsx` is now a server component.

### Major features

- **Theme system:** `next-themes` toggles a `dark` class on `<html>`. Colors are oklch CSS variables defined in `globals.css` under `:root` and `.dark`. `@theme inline` maps them to Tailwind tokens (`bg-background`, `text-foreground`, `bg-card`, etc.). `theme-toggle.tsx` exposes Light/Dark/System.
- **Content layer** (`lib/content`): `schema.ts` defines Zod schemas; `index.ts` imports each `content/*.json`, validates it (a bad edit throws at module load → fails `npm run build`), and exports typed values (`site`, `experience`, `skills`, `projects`, `education`, `about`). Domain types in `@/types` are `z.infer`-ed from the same schemas — the schema is the single source of truth.
- **CodeBlock** (`code-block.tsx`): renders an IDE-style panel (window dots, file tabs, line numbers). Content is an array of `CodeLine` objects, each a list of `CodeSegment`s (`text` + optional Tailwind `colorClass`) plus an `indentationLevel` (1rem per unit). Build lines with helpers from `lib/utils.ts`:
  - `simpleLine(text, indent?)` — single uncolored segment
  - `line([segments...], indent?)` — segment is a `string` or `[text, colorClass]` tuple
  - `sections/intro.tsx` is the canonical usage: it receives identity (`name`, `role`, `company`, `experienceText`) as props from `app/page.tsx` and builds the JS-object-looking snippet.
- **Responsive navigation** (`layout/header.tsx`): `navLinks` array drives both a desktop `NavigationMenu` (`hidden sm:flex`) and a mobile `DropdownMenu` (`sm:hidden`). Breakpoint is `sm:` = 640px. `navLinks` stays in the component (route structure, not content) — add/remove routes by editing it.
- **Project cards** (`sections/projects.tsx`): receives a typed `Project[]` prop (from `content/projects.json` via `app/projects/page.tsx`); each card optionally opens a Radix `Dialog` showing the full image. Card background uses the image at low opacity. Link clicks `stopPropagation` so they don't trigger the dialog.

### External integrations

None. No databases, APIs, env vars, auth, or analytics. Outbound links only (GitHub, etc.). Designed for static deployment (Vercel).

## Configuration

| File | Purpose |
|---|---|
| `next.config.ts` | Next.js config (currently empty/default) |
| `tsconfig.json` | `strict`, `@/*` alias, bundler resolution, `resolveJsonModule` (content JSON imports) |
| `eslint.config.mjs` | Flat config spreading `eslint-config-next` + a `.next` ignore |
| `postcss.config.mjs` | `@tailwindcss/postcss` plugin (Tailwind v4) |
| `components.json` | shadcn config: new-york style, slate base, aliases, lucide icons |
| `src/app/globals.css` | Theme tokens (oklch), Tailwind + `tw-animate-css` imports |

No environment profiles or `.env` files (`.env*` is gitignored). No runtime config knobs.

## Testing

No test framework is configured. If adding tests, propose the setup (e.g., Vitest + Testing Library) before assuming one exists.

## Conventions and Best Practices

- **Content edits:** Edit the JSON in `src/content/*.json` — never hardcode content back into a component. Shapes are enforced by the Zod schemas in `lib/content/schema.ts`; a bad edit fails `npm run build` with a clear parse error. (`navLinks` in `header.tsx` is the one exception — it's route structure, not content.)
- **Types:** Import content/domain types from `@/types` (inferred from the schemas); don't redeclare local interfaces for content shapes.
- **Styling:** Tailwind utility classes only; merge conditional classes with `cn()`. Use semantic theme tokens (`bg-card`, `text-muted-foreground`, `border-border`) over raw colors so dark mode works. Existing decorative code uses `slate-*` directly — match surrounding style.
- **Client vs server:** Add `'use client'` only when a component needs hooks/interactivity. Keep pages and layout server-rendered.
- **Adding a UI primitive:** Prefer `npx shadcn@latest add <component>` (writes to `src/components/ui/`), then compose it in a section under `components/sections/`.
- **Adding a route:** Create `src/app/<route>/page.tsx` (load any needed content from `@/lib/content`, export `metadata`), add an entry to `navLinks` in `components/layout/header.tsx`.
- **Adding a project card:** Append an object to `src/content/projects.json`; drop the image in `public/projects/` and reference it as `/projects/<file>.png`. To change a content shape, update the matching schema in `lib/content/schema.ts`.
- **Imports:** Always use the `@/` alias, never deep relative paths.
- **Commits:** Short imperative subject lines (see history: "dynamic year for footer", "Add dialog for project images in project cards").
- **Before finishing:** run `npm run build` (typechecks + compiles) — it's the verification gate; `npm run lint` also runs clean.

## Reference Documentation

- [README.md](./README.md) — default create-next-app getting-started notes
- [Next.js App Router docs](https://nextjs.org/docs/app)
- [shadcn/ui docs](https://ui.shadcn.com) · [Tailwind v4 docs](https://tailwindcss.com)
