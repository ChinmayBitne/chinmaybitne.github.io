# Portfolio maintenance

This file keeps repository operations separate from the personal profile in the root README.

## Routes

- `/` redirects visitors to `/ai-ml/`.
- `/ai-ml/` is the AI and machine-learning portfolio.
- `/data/` is the data science and analytics portfolio.
- `/projects/:slug/` contains individual case studies.

The production build creates a static HTML entry for every direct route so GitHub Pages refreshes work correctly. It also writes route-specific titles, descriptions, canonical links, and social-preview metadata.

## Content and assets

- Edit profile, experience, skills, credentials, education, and project data in `src/portfolio/content.js`.
- Keep reusable UI in `src/portfolio/components/` and page composition in `src/portfolio/Site.jsx`.
- Store public images in `public/images/`, downloadable documents in `public/documents/`, and the favicon at `public/favicon.svg`.
- Keep the AI and data résumé paths under `profile.resumes`; each portfolio route and its case studies use the matching document.
- Every project slug must be unique. Referenced covers and gallery images must exist under `public/`.

## Local checks

```bash
npm ci
npm test
```

Use `npm run dev` for local development and `npm run preview` to inspect the built site. The test command validates portfolio data, builds the application, and generates the static route entries.

## Publishing

Pushing to `main` starts `.github/workflows/deploy-pages.yml`. The workflow installs the locked dependencies, runs the full test command, uploads `dist/`, and deploys GitHub Pages only after those checks pass.

Before publishing content changes:

1. Confirm every public claim and external link.
2. Run `npm test` locally.
3. Check desktop and mobile layouts for `/ai-ml/`, `/data/`, and any changed case studies.
4. Use a clear commit message that states the outcome of the change.
