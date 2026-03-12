# Spec for Authentication Forms (Login and Signup)

figma_component (if used): N/A

## Summary
Add functional authentication forms to the existing `/login` and `/signup` pages. Each form collects an email and password, includes a toggle to show/hide the password, and submits by logging the form values to the console. Users should be able to navigate easily between the two forms.

## Functional Requirements
- Both the login and signup pages render a form with an email input and a password input
- The password field has a show/hide toggle icon that switches the input between `type="password"` and `type="text"`
- The login form has a "Log In" submit button; the signup form has a "Sign Up" submit button
- On form submission, the email and password values are logged to the browser console (no real auth for now)
- Each page includes a link to the other form (e.g. "Don't have an account? Sign up" on the login page and "Already have an account? Log in" on the signup page)
- The switch-between-forms link is clearly visible and easy to find

## Figma Design Reference (only if referenced)
- N/A

## Possible Edge Cases
- User submits with empty email or password — should the form validate? (at minimum, rely on browser-native required field validation)
- User toggles password visibility multiple times in a row
- Very long email or password values — inputs should not break layout
- User navigates between login and signup — form state should reset (no carry-over of typed values)

## Acceptance Criteria
- Visiting `/login` shows a form with an email field, a password field (with show/hide toggle), and a "Log In" button
- Visiting `/signup` shows a form with an email field, a password field (with show/hide toggle), and a "Sign Up" button
- Clicking the show/hide icon toggles password visibility on both pages independently
- Submitting the login form logs `{ email, password }` to the console
- Submitting the signup form logs `{ email, password }` to the console
- Both pages include a visible link to switch to the other form
- The link navigates correctly between `/login` and `/signup`

## Open Questions
- Should client-side validation go beyond native browser `required` attribute (e.g. email format check, minimum password length)? No.
- Should the show/hide icon be an accessible icon component or a plain text toggle? Icon.
- Should the switch-between-forms link live inside the form card or below it? Below it.

## Testing Guidelines
Create a test file(s) in the ./tests folder for the new feature, and create meaningful tests for the following cases, without going too heavy:
- The login form renders email field, password field, and submit button
- The signup form renders email field, password field, and submit button
- Toggling the password show/hide icon switches the input type between `password` and `text`
- Submitting the login form calls `console.log` with the entered email and password
- Submitting the signup form calls `console.log` with the entered email and password
- The login page contains a link pointing to `/signup`
- The signup page contains a link pointing to `/login`
