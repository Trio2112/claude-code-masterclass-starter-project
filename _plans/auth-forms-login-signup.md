# Plan: Authentication Forms (Login and Signup)

## Context
The `/login` and `/signup` pages currently only render a heading. This plan adds functional authentication forms with email/password fields, a password visibility toggle, a submit button, and a link to switch between the two forms. Form submission logs to the console only (no real auth yet). The spec is at `_specs/auth-forms-login-signup.md`.

---

## Approach

Create a shared `AuthForm` component that accepts a `type` prop (`"login" | "signup"`) to render the correct heading, button label, and switch link. Both pages simply mount this component.

---

## Files to Create

### `components/AuthForm/AuthForm.tsx`
- Client component (`"use client"`) — needs `useState` for password visibility and form state
- Props: `type: "login" | "signup"`
- Renders:
  - Email input (`type="email"`, `required`)
  - Password input (`type` toggled between `"password"` and `"text"` via state)
  - Show/hide toggle button using `Eye` / `EyeOff` from `lucide-react`
  - Submit button — label is `"Log In"` for login, `"Sign Up"` for signup
  - Switch link below the form:
    - Login page → "Don't have an account? **Sign up**" → `/signup`
    - Signup page → "Already have an account? **Log in**" → `/login`
- `onSubmit` handler: `e.preventDefault()`, then `console.log({ email, password })`
- Use Next.js `<Link>` for the switch link

### `components/AuthForm/AuthForm.module.css`
- Use `@reference "../../app/globals.css"` at the top
- Use `@apply` to compose Tailwind utilities into named classes — no multiple Tailwind classes in the template
- Classes needed: `.form`, `.fieldGroup`, `.label`, `.input`, `.passwordWrapper`, `.toggleBtn`, `.switchText`
- Reuse global `.btn` for the submit button and `.form-title` for the heading

### `components/AuthForm/index.ts`
- Barrel export: `export { default } from "./AuthForm"`

---

## Files to Modify

### `app/(public)/login/page.tsx`
- Import and render `<AuthForm type="login" />`
- Keep the outer `.center-content` / `.page-content` wrappers

### `app/(public)/signup/page.tsx`
- Import and render `<AuthForm type="signup" />`
- Keep the outer `.center-content` / `.page-content` wrappers

---

## Files to Create (Tests)

### `tests/components/AuthForm.test.tsx`
Tests (using `@testing-library/react` + `@testing-library/user-event`):
1. Login form renders email field, password field, and "Log In" button
2. Signup form renders email field, password field, and "Sign Up" button
3. Password field starts as `type="password"`; clicking the toggle changes it to `type="text"`; clicking again restores `type="password"`
4. Submitting the login form calls `console.log` with `{ email, password }`
5. Submitting the signup form calls `console.log` with `{ email, password }`
6. Login page contains a link with `href="/signup"`
7. Signup page contains a link with `href="/login"`

---

## Key Reuse Notes
- `lucide-react` (already installed) → `Eye`, `EyeOff` icons
- Global `.btn` class → submit button
- Global `.form-title` class → form heading
- Global `.center-content` / `.page-content` → kept in page files
- Next.js `<Link>` → switch-between-forms link

---

## Verification
1. `npm run dev` → visit `/login` and `/signup`, verify forms render correctly
2. Toggle password visibility on each page
3. Fill and submit each form, check browser console for `{ email, password }`
4. Click switch links between forms
5. `npm run test` → all `AuthForm` tests pass
6. `npm run lint` → no lint errors
