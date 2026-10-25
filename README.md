# Yousaf Zeb — Portfolio

Personal portfolio website built for a competitive 3-day front-end challenge.

Live: [yousafzeb.dev](https://yousafzeb.dev) · GitHub: [yousafzeb-byte](https://github.com/yousafzeb-byte)

---

## Stack

| Layer       | Technology                                |
|-------------|-------------------------------------------|
| Framework   | React 19 + TypeScript                     |
| Build tool  | Vite 8                                    |
| Styling     | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Animation   | Framer Motion 14                          |
| Icons       | Lucide React                              |
| Testing     | Vitest + React Testing Library            |
| Linting     | Oxlint                                    |

---

## Design Philosophy

**Sophisticated dark editorial aesthetic** — modelled after high-end design publications rather than a generic developer portfolio.

Key decisions:

- **Single accent colour** (#C8A96E warm gold) used sparingly to force compositional discipline and avoid visual noise.
- **Three typefaces** with distinct roles: DM Serif Display for editorial headlines, Inter for UI/body, JetBrains Mono for technical labels and metadata.
- **Generous whitespace** as the primary design element — breathing room signals quality.
- **Purposeful motion** — scroll-triggered entrance animations only. No looping, no hover-triggered bouncing. `prefers-reduced-motion` respected at the hook level (`useReducedMotion`).
- **No glassmorphism, no particle backgrounds, no skill progress bars** — restraint over decoration.

---

## Architecture

```
src/
├── components/
│   ├── layout/       Nav, Footer
│   ├── sections/     Hero, Work, About, Skills, Philosophy, Contact
│   └── ui/           Tag, SectionLabel (reusable primitives)
├── data/
│   └── projects.ts   Single source of truth for all content
├── hooks/
│   └── useReducedMotion.ts
├── lib/
│   └── motion.ts     Shared Framer Motion variant factory
├── types/
│   └── index.ts
└── __tests__/
    └── components.test.tsx
```

**Design token system**: All colours and typefaces live in `src/index.css` inside a `@theme {}` block (Tailwind v4 syntax), creating a single source of truth that generates utility classes automatically.

**Data layer**: All project content, skill groups, and engineering principles are defined once in `src/data/projects.ts` as typed arrays — no content scattered across components.

**Animation factory**: `makeVariants(reduceMotion)` in `src/lib/motion.ts` returns pre-configured Framer Motion variant sets that automatically simplify when `prefers-reduced-motion` is active.

---

## Accessibility

- Semantic HTML landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`)
- Correct heading hierarchy (h1 → h2 → h3)
- Skip-to-content link at the start of the document
- Mobile menu: `aria-expanded`, `aria-controls`, `aria-modal`, Escape-key close, focus returns to trigger on close
- All external links: `target="_blank"`, `rel="noopener noreferrer"`, descriptive `aria-label`
- All decorative elements: `aria-hidden="true"`
- WCAG AA contrast: warm off-white (#EDEBE3) on near-black (#0A0A0A) ≈ 16:1
- `prefers-reduced-motion`: animations replaced with simple fades
- Visible `:focus-visible` ring (2px solid #C8A96E)
- No keyboard traps

---

## Performance

- Fonts: Google Fonts with `preconnect` hints and `display=swap`
- Animations: CSS `transform` and `opacity` only (compositor-friendly)
- No unnecessary dependencies
- Production bundle: ~391 KB JS (gzip: ~125 KB), ~21 KB CSS (gzip: ~5 KB)

---

## Setup

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
npm run test:run   # run tests once
npm run test       # tests in watch mode
npm run typecheck  # TypeScript check
npm run lint       # Oxlint
```

---

## Deployment (Vercel)

1. Push to a public GitHub repository
2. Import repository in Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. No environment variables required

---

## What Needs Your Review Before Submission

1. **Email address** — update the `mailto:` link in `src/components/sections/Contact.tsx` (currently a placeholder)
2. **Project repo URLs** — replace the `repoUrl` values in `src/data/projects.ts` with the actual repository links
3. **Live URLs** — add `liveUrl` to any projects that have a deployed demo
4. **Fonts** — the design loads from Google Fonts; the site requires an internet connection to display DM Serif Display and JetBrains Mono
5. **Visual verification** — run `npm run dev` and inspect at mobile (375px) and desktop (1280px+) sizes
