# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site — a static, content-driven single-purpose marketing site showcasing professional experience, projects, and education. All content is hardcoded in component files; there is no backend, CMS, or data fetching.

## Project Structure

- **Language/runtime:** TypeScript 5.9 (`strict`), Node.js (Next.js 16 App Router), React 19.2
- **Path alias:** `@/*` → `./src/*`

```
src/
├── app/                  # App Router: one folder per route
│   ├── layout.tsx        # Root layout: fonts + ThemeProvider + Header/Footer (server component)
│   ├── page.tsx          # Home route (/) → <Intro/> + <Profile/>
│   ├── globals.css       # Tailwind v4 import + oklch theme tokens (light/dark)
│   ├── about/page.tsx
│   ├── education/page.tsx
│   └── projects/page.tsx
├── components/           # Page sections + shared chrome (all hardcode their own content)
│   ├── intro.tsx, profile.tsx, projects.tsx, education.tsx, about.tsx
│   ├── header.tsx, footer.tsx
│   ├── code-block.tsx    # Custom IDE-styled code display (see Architecture)
│   ├── theme-provider.tsx, theme-toggle.tsx
│   └── ui/               # shadcn/Radix primitives: button, dialog, dropdown-menu, navigation-menu
├── lib/utils.ts          # cn(), line(), simpleLine()
├── hooks/                # scaffolded, empty
└── types/                # scaffolded, empty
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
| Dates | moment | 2.30.1 | used in `intro.tsx` to compute experience duration |
| Lint | ESLint | 9.39 | flat config via `FlatCompat`; **currently broken under Next 16** — see Key Commands → Linting |

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
npm run lint     # ⚠️ BROKEN under Next.js 16 — see "Linting" below
```

### Linting (currently broken)

- `npm run lint` runs `next lint`, **removed in Next.js 16** → fails with `Invalid project directory ... /lint`.
- `npx eslint .` also fails: the committed `eslint.config.mjs` wraps the legacy `next/core-web-vitals` + `next/typescript` configs with `FlatCompat`, which throws `Converting circular structure to JSON` under ESLint 9.39.

**Verify changes with `npm run build`** (it typechecks and compiles). The source itself lints clean once the config is fixed. To repair, swap to the flat config that `eslint-config-next@16` ships directly and point the script at `eslint`:

```js
// eslint.config.mjs
import next from 'eslint-config-next';
export default [...next, { ignores: ['.next/**'] }];
```
```jsonc
// package.json → "scripts": { "lint": "eslint ." }
```

> No test suite exists in this repo (no test runner, no `test` script, no test files). Do not claim tests pass — verify changes via `npm run build`.

## Architecture

**Pattern:** Static component-composed pages. Server-rendered root layout wraps interactive client islands. No layered/hexagonal architecture — content lives directly in the components that render it.

### Render flow

1. `app/layout.tsx` (server component) loads Geist fonts, exports site `metadata` (note: `description` is still the `create-next-app` placeholder), wraps children in `ThemeProvider` (`attribute="class"`, `defaultTheme="system"`, `enableSystem`, `disableTransitionOnChange`), and renders `<Header/>` → `<main>{children}</main>` → `<Footer/>`.
2. Each `app/<route>/page.tsx` composes section components from `src/components/`.
3. Interactive components declare `'use client'` (header nav, theme toggle, projects dialog, intro). Pages/layout stay server-rendered.

### Major features

- **Theme system:** `next-themes` toggles a `dark` class on `<html>`. Colors are oklch CSS variables defined in `globals.css` under `:root` and `.dark`. `@theme inline` maps them to Tailwind tokens (`bg-background`, `text-foreground`, `bg-card`, etc.). `theme-toggle.tsx` exposes Light/Dark/System.
- **CodeBlock** (`code-block.tsx`): renders an IDE-style panel (window dots, file tabs, line numbers). Content is an array of `CodeLine` objects, each a list of `CodeSegment`s (`text` + optional Tailwind `colorClass`) plus an `indentationLevel` (1rem per unit). Build lines with helpers from `lib/utils.ts`:
  - `simpleLine(text, indent?)` — single uncolored segment
  - `line([segments...], indent?)` — segment is a `string` or `[text, colorClass]` tuple
  - See `intro.tsx` for the canonical usage (renders a JS-object-looking snippet with computed experience duration).
- **Responsive navigation** (`header.tsx`): `navLinks` array drives both a desktop `NavigationMenu` (`hidden sm:flex`) and a mobile `DropdownMenu` (`sm:hidden`). Breakpoint is `sm:` = 640px. Add/remove routes by editing `navLinks`.
- **Project cards** (`projects.tsx`): `projects` array of typed objects; each card optionally opens a Radix `Dialog` showing the full image. Card background uses the image at low opacity. Link clicks `stopPropagation` so they don't trigger the dialog.

### External integrations

None. No databases, APIs, env vars, auth, or analytics. Outbound links only (GitHub, etc.). Designed for static deployment (Vercel).

## Configuration

| File | Purpose |
|---|---|
| `next.config.ts` | Next.js config (currently empty/default) |
| `tsconfig.json` | `strict`, `@/*` alias, bundler resolution |
| `eslint.config.mjs` | Flat ESLint extending Next presets |
| `postcss.config.mjs` | `@tailwindcss/postcss` plugin (Tailwind v4) |
| `components.json` | shadcn config: new-york style, slate base, aliases, lucide icons |
| `src/app/globals.css` | Theme tokens (oklch), Tailwind + `tw-animate-css` imports |

No environment profiles or `.env` files (`.env*` is gitignored). No runtime config knobs.

## Testing

No test framework is configured. If adding tests, propose the setup (e.g., Vitest + Testing Library) before assuming one exists.

## Conventions and Best Practices

- **Content edits:** Section content is hardcoded in its component (`projects.tsx` → `projects[]`, `header.tsx` → `navLinks[]`, etc.). Edit the data array, not scattered JSX.
- **Styling:** Tailwind utility classes only; merge conditional classes with `cn()`. Use semantic theme tokens (`bg-card`, `text-muted-foreground`, `border-border`) over raw colors so dark mode works. Existing decorative code uses `slate-*` directly — match surrounding style.
- **Client vs server:** Add `'use client'` only when a component needs hooks/interactivity. Keep pages and layout server-rendered.
- **Adding a UI primitive:** Prefer `npx shadcn@latest add <component>` (writes to `src/components/ui/`), then wrap/compose in a section component.
- **Adding a route:** Create `src/app/<route>/page.tsx`, add an entry to `navLinks` in `header.tsx`.
- **Adding a project card:** Append to `projects[]` in `projects.tsx`; drop the image in `public/projects/` and reference it as `/projects/<file>.png`.
- **Imports:** Always use the `@/` alias, never deep relative paths.
- **Commits:** Short imperative subject lines (see history: "dynamic year for footer", "Add dialog for project images in project cards").
- **Before finishing:** run `npm run build` (typechecks + compiles) — it's the verification gate. `npm run lint` is currently broken (see Key Commands → Linting).

## Reference Documentation

- [README.md](./README.md) — default create-next-app getting-started notes
- [Next.js App Router docs](https://nextjs.org/docs/app)
- [shadcn/ui docs](https://ui.shadcn.com) · [Tailwind v4 docs](https://tailwindcss.com)
