# Frontend — Portfolio site

Static HTML/CSS/JS portfolio. Hosted on GitHub Pages at
**https://kishore-vivekanandan.github.io/**.

## Structure

- `index.html` — the whole site, single-page, Tailwind via CDN.
- `resources/` — images and other static assets.
- `config.js` — runtime config (backend API URL).

## Deploy

The site is published from the
[`kishore-vivekanandan/kishore-vivekanandan.github.io`](https://github.com/kishore-vivekanandan/kishore-vivekanandan.github.io)
repository. Pushing `main` (or whatever the default branch is) deploys
automatically — GitHub Pages picks up the change.

## Local preview

Two ways:

```
# From this folder, any static server works:
python3 -m http.server 8000
# → http://localhost:8000

# Or, run the backend (sibling folder) which mounts ../frontend in dev:
cd ../backend && node server.js
# → http://localhost:3000
```

Local preview hits the deployed BTP backend by default. To point at a local
backend during development, edit `config.js`.
