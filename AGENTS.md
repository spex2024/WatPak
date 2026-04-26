# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Next.js + Turbopack)
npm run build      # Production build
npm run lint       # ESLint
npm run format     # Prettier
npm run typecheck  # tsc --noEmit
```

Adding shadcn components: `npx shadcn@latest add <component-name>`

## Architecture

**Framework:** Next.js 16 with App Router (not Pages Router). All routes live under [app/](app/).

**Styling:** Tailwind CSS v4 — uses `@import "tailwindcss"` syntax in [app/globals.css](app/globals.css), not `@tailwind` directives. Colors use OKLCH color space with CSS custom properties defined in `:root` / `.dark`. Class composition uses `cn()` from [lib/utils.ts](lib/utils.ts) (clsx + tailwind-merge).

**Component system:** shadcn/ui built on Base UI (headless accessible components). Components live in [components/ui/](components/ui/) and use Class Variance Authority (CVA) for variant definitions. Config in [components.json](components.json) — base color: taupe, RTL enabled, RSC enabled.

**Theme:** [components/theme-provider.tsx](components/theme-provider.tsx) wraps the app via [app/layout.tsx](app/layout.tsx). It manages light/dark mode via `next-themes` and registers a `D`-key hotkey to toggle the theme (skipped when focus is inside an input/textarea/select/contenteditable).

**Path alias:** `@/` maps to the project root (configured in [tsconfig.json](tsconfig.json)).

## Conventions

- Prettier config (no semicolons, single quotes off, 80-char width, trailing commas ES5). The Tailwind Prettier plugin auto-sorts class names — don't manually reorder them.
- ESLint uses flat config ([eslint.config.mjs](eslint.config.mjs)) with Next.js Core Web Vitals + TypeScript rules.
- TypeScript strict mode is on.
