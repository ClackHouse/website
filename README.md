# ClackHouse Website

Static marketing site and documentation for ClackHouse.

## Stack

- Astro
- Starlight
- Tailwind CSS v4

## Commands

```bash
pnpm install
pnpm dev
pnpm format
pnpm build
pnpm check
pnpm check:ci
```

Or with `just`:

```bash
just install
just dev
just format
just build
just check
just check-ci
```

## Structure

- `src/pages/` for the marketing site
- `src/content/docs/` for Starlight docs content
- `src/styles/` for the site and docs theme

## Git Hygiene

- Pre-commit runs staged-file formatting and `pnpm check`
- Commit messages are validated against Conventional Commits, for example `feat: add homepage CTA`
