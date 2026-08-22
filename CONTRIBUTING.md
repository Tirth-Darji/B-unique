# Team workflow

The hackathon requires work on `main`. Follow this process to minimize conflicts.

## Ownership

| Member | Primary workspace |
|---|---|
| Kartavi | `app/src/pages/kartavi/` |
| Tirth | `app/src/pages/tirth/` |
| Lavanya | `app/src/pages/lavanya/` |

## Before starting

```bash
git switch main
git pull --rebase origin main
cd app
npm install
npm run dev
```

## Before pushing

Return to the repository root and stage only the files you own:

```bash
cd ..
git status
git add app/src/pages/YOUR_NAME/
git commit -m "feat(YOUR_NAME): describe the page"
git pull --rebase origin main
npm --prefix app run lint
npm --prefix app run build
git push origin main
```

## Shared files

These files can affect everyone and should have one integrator:

- `app/src/App.jsx`
- `app/src/main.jsx`
- `app/src/index.css`
- `app/src/App.css`
- `app/src/components/`
- `app/package.json`
- `app/package-lock.json`

Tirth is the default integrator. Kartavi and Lavanya should send the page component name and desired URL to Tirth, who connects it to the router or `App.jsx`.

## Conflict prevention

1. Pull before editing.
2. Work only in your member folder.
3. Tell the team before changing a shared file.
4. Make small commits.
5. Pull with rebase again immediately before pushing.
6. Never use force push.
7. Never commit `node_modules` or secrets.
