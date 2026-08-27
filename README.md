# Chinmay Bitne — Portfolio

An evidence-led portfolio with an AI/ML-first public experience and a separate data and analytics version intended for direct role-specific sharing.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:5173`.

## Docker preview

```bash
docker compose up --build
```

Open `http://localhost:4173/ai-ml` or `http://localhost:4173/data`.

## Routes

- `/` — neutral shared-link page
- `/ai-ml` — AI and machine-learning portfolio
- `/data` — standalone data and analytics portfolio
- `/projects/:slug` — detailed project case studies

The production build creates static entry files for direct route loading and browser refreshes.

## Validation

```bash
npm run validate
npm run build
```

The content validator checks unique project routes, required case-study fields, referenced media, and focus-page project mappings.

## Content policy

Claims are based on the current résumé, LinkedIn export, transcripts, and public project evidence supplied for this redesign. The Alternovation Power BI visual is a historical screenshot from a collaborative university project; no Power BI source file is stored or represented as solely owned.
