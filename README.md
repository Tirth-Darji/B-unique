# B-unique

Hackathon project built with React by a three-member team.

## Team workspaces

| Folder | Owner | Purpose |
|---|---|---|
| `kartavi/` | Kartavi | Kartavi's assigned React pages and components |
| `tirth/` | Tirth | Tirth's assigned React pages and components |
| `lavanya/` | Lavanya | Lavanya's assigned React pages and components |

## Working rules

1. Push the project work to the `main` branch as required by the hackathon.
2. Work only inside your assigned folder unless the team agrees on a shared-file change.
3. Always run `git pull origin main` before editing or pushing.
4. Stage only your own folder, for example `git add tirth/`.
5. Resolve any conflict together before pushing.
6. Do not commit `node_modules`, build output, secrets, or local environment files.
7. Keep reusable UI code small and document any dependencies you add.

## Main-branch workflow

```bash
git switch main
git pull origin main
# Make changes only inside your assigned folder
git add your-folder/
git commit -m "feat: describe your change"
git pull --rebase origin main
git push origin main
```

Using `git pull --rebase origin main` immediately before pushing reduces conflicts when another teammate has pushed first.

## Commit message format

- `feat: add questionnaire screen`
- `fix: correct mobile navigation`
- `style: update card spacing`
- `docs: add component instructions`
- `chore: update dependencies`
