# Tuber Labs

Frontier intelligence. Grown underground.

A SvelteKit (static adapter) site for the Tuber Labs blog: lab notes about building
small language models from scratch on one laptop, announced ironically as releases.

## Develop

```bash
npm install
npm run dev
```

## Add a lab note

Drop a markdown file in `src/posts/` with frontmatter:

```md
---
title: "My post title"
date: 2026-12-01
category: RESEARCH   # RELEASE | RESEARCH | LEARNING | POSTMORTEM
readTime: 5 min
excerpt: "One-line summary shown in the list."
featured: false
---

Body in markdown. Code blocks, images (`/loss-curve.svg` style, assets in `static/`), etc.
```

Posts are sorted newest first and prerendered at build time.

## Build

```bash
npm run build
```

Static output lands in `build/` — deploy it to any static host (GitHub Pages, Netlify, etc.).

## Models

Model cards and detail pages are data-driven from `src/lib/models.js`.
