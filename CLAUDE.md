# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Next.js with Turbopack)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Architecture

Personal portfolio site built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**.

### Key Patterns

- **Path alias:** `@/*` maps to `./src/*`
- **Theme system:** `next-themes` with class-based dark/light switching. Theme colors use oklch color space defined as CSS variables in `globals.css`.
- **UI components:** Radix UI primitives wrapped in `src/components/ui/` with Tailwind styling and `class-variance-authority` for variants.
- **`cn()` utility** (`src/lib/utils.ts`): merges class names via `clsx` + `tailwind-merge`.
- **CodeBlock component** (`src/components/code-block.tsx`): custom IDE-styled code display with line numbers, file tabs, and colored segments. Data is structured as arrays of `CodeLine` objects. Helper functions `line()` and `simpleLine()` in `src/lib/utils.ts` create these structures.
- **Responsive navigation:** Desktop uses `NavigationMenu`, mobile uses `DropdownMenu` with a `sm:` (640px) breakpoint.
- **Client components** use the `'use client'` directive; layout is server-rendered.

### Structure

- `src/app/` — App Router pages and layout (root layout wraps Header + Footer + ThemeProvider)
- `src/components/` — Page sections (intro, profile, projects, education, about) and shared components (header, footer, theme-toggle, code-block)
- `src/components/ui/` — Reusable Radix-wrapped UI primitives (button, navigation-menu, dropdown-menu)
- `src/lib/` — Utilities
- `src/hooks/` and `src/types/` — Scaffolded, currently empty
