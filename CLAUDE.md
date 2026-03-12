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

- `app/(public)/` — unauthenticated routes (`/`, `/login`, `/signup`, `/preview`). Layout renders a plain `<main>` with no Navbar.
- `app/(dashboard)/` — authenticated routes (`/heists`, `/heists/create`, `/heists/[id]`). Layout wraps all pages with `<Navbar />`.

**Component pattern:** Components live in `components/<ComponentName>/` with a named `.tsx` file, a `.module.css` file, and an `index.ts` barrel export. Import via the `@/` alias (e.g. `@/components/Navbar`).

**Testing:** Tests live in `tests/` mirroring the source structure (e.g. `tests/components/`). Vitest runs in jsdom with `@testing-library/react`. The `@/` alias works in tests via `vite-tsconfig-paths`.

**Styling:** Tailwind CSS 4 (via PostCSS) for utility classes; CSS Modules for component-scoped styles.

## Components

| Component | Type | Props | Description |
|-----------|------|-------|-------------|
| `Navbar` | Server | none | Site navigation — logo, tagline, and "Create Heist" link. Used in the dashboard layout. |
| `Skeleton` | Server | none | Loading placeholder card with animated shimmer lines (header + body). |
| `Avatar` | Server | `name: string` | Circular avatar showing initials. PascalCase names yield the first two uppercase letters; all others yield the first letter. |
| `AuthForm` | Client | `type: "login" \| "signup"` | Email/password form with show/hide password toggle and a link to switch between login and signup. |

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/(public)/page.tsx` | Landing/splash page — redirects users to `/heists` (logged in) or `/login` (logged out). |
| `/login` | `app/(public)/login/page.tsx` | Login page — renders `<AuthForm type="login" />`. |
| `/signup` | `app/(public)/signup/page.tsx` | Signup page — renders `<AuthForm type="signup" />`. |
| `/preview` | `app/(public)/preview/page.tsx` | Development preview page for newly created UI components. |
| `/heists` | `app/(dashboard)/heists/page.tsx` | Main heists dashboard listing. |
| `/heists/create` | `app/(dashboard)/heists/create/page.tsx` | Create a new heist. |
| `/heists/[id]` | `app/(dashboard)/heists/[id]/page.tsx` | Individual heist detail view. |

## Custom Slash Commands

Defined in `.claude/commands/`:

- `/spec` — Turns a short feature idea into a detailed markdown spec file under `_specs/`.
- `/component` — Scaffolds a new UI component using TDD (writes tests first, then implementation).
- `/commit-message` — Analyzes staged git changes and proposes a conventional commit message.
- `/refresh-init` — Audits the codebase and updates this CLAUDE.md to reflect current state.

## Feature Specs

Specs live in `_specs/`. Current specs:

- `auth-forms-login-signup.md` — Login and signup authentication forms feature.

## Additional Coding Preferences

- Do NOT use semicolons for JavaScript or TypeScript code.
- Do NOT apply tailwind classes directly in component templates unless essential or just 1 at most. If an element needs more than a single tailwind class, combine them into a custom class using the `@apply` directive.
- Use minimal project dependencies where possible.
- Use the `git switch -c` command to switch to new branches, not `git checkout`.