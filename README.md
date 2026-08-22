# B-unique

Hackathon project built with React by a three-member team.

## Team workspaces

| Folder | Owner | Purpose |
|---|---|---|
| `member-1-tirth/` | Tirth | Tirth's assigned React pages and components |
| `member-2/` | Member 2 | Member 2's assigned React pages and components |
| `member-3/` | Member 3 | Member 3's assigned React pages and components |

> Replace the placeholder member names when the final assignments are confirmed.

## Working rules

1. Work only inside your assigned folder unless the team agrees on a shared-file change.
2. Never push directly to `main` during development.
3. Create a branch named `member-name/feature-name`.
4. Pull the latest `main` before starting work.
5. Open a pull request and ask one teammate to review it.
6. Do not commit `node_modules`, build output, secrets, or local environment files.
7. Keep reusable UI code small and document any dependencies you add.

## Recommended React workflow

Each folder is an isolated workspace for development. When features are ready, integrate reviewed components into the final React app together. Avoid creating three unrelated design systems—use the same colors, typography, spacing, component naming, and animation rules.

### Start a feature branch

```bash
git switch main
git pull origin main
git switch -c your-name/feature-name
```

### Save and publish work

```bash
git add .
git commit -m "feat: describe your change"
git push -u origin your-name/feature-name
```

Then open a pull request into `main`.

## Commit message format

- `feat: add questionnaire screen`
- `fix: correct mobile navigation`
- `style: update card spacing`
- `docs: add component instructions`
- `chore: update dependencies`
