# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Next.js dev server at localhost:3000
npm run build     # Production build
npm run lint      # ESLint
npm run test      # Run all tests (Vitest)
```

Run a single test file:
```bash
npx vitest tests/components/Navbar.test.tsx
```

Run tests in watch mode:
```bash
npx vitest --watch
```

## Architecture

**Next.js App Router** with two route groups that share no layout:

- `app/(public)/` — unauthenticated routes (`/login`, `/signup`). Layout renders a plain `<main>` with no Navbar.
- `app/(dashboard)/` — authenticated routes (`/heists`, `/heists/create`, `/heists/[id]`). Layout wraps all pages with `<Navbar />`.

**Component pattern:** Components live in `components/<ComponentName>/` with a named `.tsx` file, a `.module.css` file, and an `index.ts` barrel export. Import via the `@/` alias (e.g. `@/components/Navbar`).

**Testing:** Tests live in `tests/` mirroring the source structure (e.g. `tests/components/`). Vitest runs in jsdom with `@testing-library/react`. The `@/` alias works in tests via `vite-tsconfig-paths`.

**Styling:** Tailwind CSS 4 (via PostCSS) for utility classes; CSS Modules for component-scoped styles.

## Additional Coding Preferences

- Do NOT use semicolons for JavaScript or TypeScript code.
- Do NOT apply tailwind classes directly in component templates unless essential or just 1 at most. If an element needs more than a single tailwind class, combine them into a custom class using the `@apply` directive.
- Use minimal project dependencies where possible.
- Use the `git switch -c` command to switch to new branches, not `git checkout`.