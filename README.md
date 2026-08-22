# B-unique - GlobeTrotter

A single shared React/Vite application for the Odoo hackathon challenge.

## Project layout

```text
app/
├── src/
│   ├── pages/
│   │   ├── kartavi/
│   │   ├── tirth/
│   │   └── lavanya/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

There is only one React application. Each teammate builds assigned pages inside their own folder under `app/src/pages/`. Reusable components belong in `app/src/components/` after team agreement.

## Start locally

```bash
git clone https://github.com/Tirth-Darji/B-unique.git
cd B-unique/app
npm install
npm run dev
```

Read [CONTRIBUTING.md](CONTRIBUTING.md) before pushing.
