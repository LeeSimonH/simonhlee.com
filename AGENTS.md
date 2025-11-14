# AGENTS.md — Behavior and Operating Protocol

This document defines how an AI agent should work inside this repository. It encodes guardrails, workflow, and repo-aware checklists. Link to the runbook in `WARP.md` and project basics in `README.md`.

- Reference: `README.md`
- Runbook/commands: `WARP.md`
- Key source context: `app/`, `lib/`, `components/`, `mdx-components.tsx`, `lib/server/blog.ts`, `app/api/blogposts/route.ts`, `app/sitemap.ts`, `app/robots.ts`, `lib/constants.ts`

## Core Principles (must-follow)

- Verify information before acting. Prefer reading code and scripts over guessing.
- Make targeted, minimal edits; avoid refactors unless explicitly requested.
- Preserve existing behavior and structure; do not remove unrelated code.
- Work file-by-file with atomic changes to ease review.
- Avoid whitespace-only or cosmetic diffs unrelated to the task.
- Never introduce speculative changes or new tech unless asked.
- Favor performance, security, and correctness. Treat user data and secrets carefully.
- Consider edge cases and add robust error handling when logic is introduced.
- Prefer descriptive names (functions as verbs; variables as clear nouns).
- Maintain compatibility with declared versions: Node 24.x, Next.js 16, React 19, TS 5.8, Tailwind 4.

## Operating Procedure

1. Discovery

- Read relevant files and scripts referenced by the change request.
- For content/blog work, inspect `app/blog/<slug>/page.mdx` and `lib/server/blog.ts`.
- For routing/SEO, inspect `app/sitemap.ts`, `app/robots.ts`, and `lib/constants.ts`.

2. Plan minimal scope

- Decide the smallest set of files to change to fulfill the request.
- Keep changes isolated; avoid cascading edits unless necessary.

3. Implement edits

- Follow existing code style and patterns.
- Keep changes in a single coherent edit per file.
- Add imports/exports and types explicitly as needed.

4. Validate before proposing

- Type-check: `pnpm typecheck`
- Lint: `pnpm lint` (includes MDX lint) and fix if needed.
- Format: `pnpm format` (only after logic is correct).
- Build when changes affect build/runtime: `pnpm build`.

5. Document outcome succinctly

- In PRs or change notes, focus on the “why” and the user impact, not a play-by-play.

## Git and PR Conventions

- Commit messages (conventional, scoped when helpful):
  - feat(scope): add new capability
  - fix(scope): correct a bug
  - refactor(scope): restructure without behavior change
  - style(scope): purely styling or format that affects UI/code style
  - docs(scope): docs-only changes
  - chore(scope): maintenance and non-user-facing changes
- Keep the subject concise; include a short “why” body when non-trivial.
- Stage only intended files; avoid committing secrets or local artifacts.
- Do not change git config. Do not push remotely unless the task requests it.
- Open PRs with a clear title, a brief summary, and a simple test plan.

## Repo-specific Guidance

- Framework: Next.js App Router with MDX (via `@next/mdx`, no remark/rehype plugins).
- Styling: Tailwind CSS v4; global layers in `app/globals.css` and `lib/styles/theme.css`.
- MDX blog pipeline:
  - Content lives at `app/blog/<slug>/page.mdx`.
  - Metadata is extracted by `lib/server/blog.ts` via frontmatter or exported `metadata`.
  - API is served from `app/api/blogposts/route.ts` for lists.
  - `app/sitemap.ts` includes top routes and blog slugs; use directory slugs.
- SEO/robots: `app/robots.ts` reads `WEBSITE_URL` from `lib/constants.ts`.
- Avoid adding additional MDX toolchains unless requested (keep MDX RS path simple).

## Checklists

Pre-commit checklist

- [ ] Changes are minimal and file-by-file
- [ ] `pnpm typecheck` passes
- [ ] `pnpm lint` passes (fix if needed)
- [ ] `pnpm format` run
- [ ] Build or run locally when behavior changed: `pnpm build` or `pnpm dev`

When adding/updating a blog post

- [ ] Place content at `app/blog/<slug>/page.mdx`
- [ ] Provide frontmatter or exported `metadata` with at least `title` (and optional `description`)
- [ ] Verify `/api/blogposts` returns the new entry
- [ ] Confirm `app/sitemap.ts` surfaces the slug

When touching routing/SEO

- [ ] Confirm `WEBSITE_URL` in `lib/constants.ts` is correct for sitemap/robots composition
- [ ] Validate `app/sitemap.ts` produces expected URLs
- [ ] Validate `app/robots.ts` rules and sitemap URL

When changing UI/theme

- [ ] Follow existing Tailwind patterns and tokens
- [ ] Keep MDX component mappings in `mdx-components.tsx` consistent

## Safety and Privacy

- Do not commit `.env*` or secrets; see `.gitignore` for enforced ignores.
- Avoid long-running local processes in automation contexts; prefer single-run commands.
- Validate inputs when adding API logic; prefer schema validation (e.g., zod) and safe defaults.

## Commands Reference (see `WARP.md` for details)

- Dev: `pnpm dev`
- Build: `pnpm build`
- Start: `pnpm start`
- Lint all: `pnpm lint`
- Format: `pnpm format`
- Type-check: `pnpm typecheck`

## Style Notes

- Write clear, explicit types for exported APIs.
- Favor early returns and shallow control flow.
- Handle errors meaningfully; do not swallow exceptions.
- Avoid magic numbers; prefer named constants.
- Add short comments only where non-obvious decisions are made.
