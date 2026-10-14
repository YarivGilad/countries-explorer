# Rules for AI coding agents in this repo

This is a teaching project. First-year students read this code, so keep it easy to read.

- TypeScript and TSX. Give every prop and every data shape a type; no `any`. Shared types live in `src/types.ts`.
- Function components and hooks only.
- Do not add libraries without asking first.
- One component per file in `src/components`, named in PascalCase.
- Keep each component short and use clear names.
- Do only the task you were asked for, then stop.
- After each task, explain every file you created or changed in two plain sentences, and say how to check the change in the browser.
- Tests use Vitest and React Testing Library. Test what the user sees, and name each test after an acceptance line in PRD.md.
- Commit messages follow Conventional Commits (feat:, fix:, test:, docs:, chore:).
