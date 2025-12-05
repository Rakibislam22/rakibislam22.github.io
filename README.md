# Rakib — MERN-Stack Developer Portfolio

This repository contains the source for Rakib’s personal portfolio website (Vite + React + Tailwind). It's set up to build with Vite and deploy automatically to GitHub Pages via GitHub Actions.

Live demo: https://rakibislam22.github.io

---

## Features
- Responsive React + Vite SPA
- Tailwind CSS (CDN) with a light/dark theme toggle (persisted in localStorage)
- Animated UI using Framer Motion
- Contact form using EmailJS
- Semantic "card" CSS helpers to make dark/light styles consistent
- GitHub Actions workflow to build and publish to GitHub Pages

Files of interest
- `index.html` — theme-init script + Tailwind config and custom semantic CSS
- `src/main.jsx`, `src/App.jsx` — app entry and layout
- `src/components/*` — UI components (Header, Navbar, About, Projects, Contact, Footer, etc.)
- `.github/workflows/deploy-pages.yml` — GitHub Actions workflow that builds and deploys `dist/` to GitHub Pages
- `package.json` — scripts: `dev`, `build`, `preview`

---

## Quick start (local)

Requirements:
- Node.js 16+ (Node 18 recommended)
- npm

1. Clone
```bash
git clone https://github.com/Rakibislam22/rakibislam22.github.io.git
cd rakibislam22.github.io
```

2. Install dependencies
```bash
npm i
```

3. Run dev server
```bash
npm run dev
# open http://localhost:5173
```

4. Build (production)
```bash
npm run build
# production files will be in ./dist
```

5. Preview the production build locally
```bash
npm run preview
# open the URL printed by vite
```

---

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow that builds and deploys `dist/` to GitHub Pages automatically on push to `main`.

Workflow path:
- `.github/workflows/deploy-pages.yml`

How it works:
- On push to `main` the action runs `npm ci` and `npm run build`, uploads `dist/` and uses the official Pages actions to publish.

Notes:
- Because this is a username site (`rakibislam22.github.io`) the site will be served from the root (`/`) — no `base` change in `vite.config` is required.
- If you want to manually trigger a redeploy, push an empty commit to main:
  `git commit --allow-empty -m "redeploy" && git push`

---

## Theme & dark mode

Dark mode is implemented using the `class` strategy (Tailwind `darkMode: "class"`). A small inline script in `index.html` runs before the page renders and sets the `.dark` class on `<html>` based on:

1. `localStorage.theme` (persisted preference), or
2. `prefers-color-scheme: dark` if no stored preference.

Toggle behavior:
- The Navbar component toggles dark mode and writes the preference to `localStorage`.
- Because the `.dark` class is set early, the site avoids a flash-of-incorrect-theme (FOIT).

If you want to reset the theme:
- In the browser console: `localStorage.removeItem('theme'); document.documentElement.classList.remove('dark');`

Custom semantic classes used for theme-safe surfaces:
- `.bg-card`, `.border-card`, `.bg-surface`, `.text-surface`, `.tag`, etc.  
These are defined in `index.html` and have `.dark .<class>` overrides.

---

## Editing content

Projects
- Projects are rendered from `src/components/Projects.jsx`. Edit the array there (or move the data to a separate `src/data/projects.js` and import it) to update the project cards (title, desc, tags, live_link, repo_link, featured).

Resume
- `/Md_Rakib_Ali_Resume.pdf` — update this PDF in the repo to change the resume download.

Contact form (EmailJS)
- Service/template/ID are configured in `src/components/Contact.jsx`. To use your own EmailJS account, update:
  - service ID
  - template ID
  - user/public key
- See https://www.emailjs.com/docs/ for setup

Navbar / Social links
- Social links and icons are in `src/components/Navbar.jsx` and `src/components/About.jsx`. Update the hrefs to change profiles.

---

## Accessibility & best practices

- SVGs include titles/roles where appropriate for screen readers.
- Buttons and inputs include accessible labels.
- If you need to improve contrast for specific elements in dark mode, adjust the semantic CSS variables in `index.html` (the `.dark .<class>` declarations).

---

## Troubleshooting

- If dark mode doesn't apply on first load, make sure the inline theme-init script is still present and not blocked.
- If pages are not deploying:
  - Check Actions → workflow run logs for errors
  - Ensure `npm run build` completes locally before relying on the action
- If the contact form isn't sending:
  - Check network console for EmailJS errors
  - Confirm EmailJS service/template IDs and public key

---

## Optional improvements (ideas)
- Move Tailwind from CDN to a proper PostCSS setup for production to purge unused styles and reduce CSS size.
- Store projects in a JSON or YAML file and fetch them at build time to separate data from UI.
- Add GitHub social preview images for each project for better link sharing.
- Add automated tests (Jest/React Testing Library) for components.

---

If you'd like, I can:
- Open a PR that adds/updates this README in your repository.
- Create a branch that moves project data into `src/data/projects.js` and imports it from `Projects.jsx`.
- Help you configure EmailJS with environment variables (safer than hard-coding keys).

Tell me which of the above you'd like me to do next and I’ll prepare the changes.  