# Yousaf Zeb — Software Engineer Portfolio

[![CI](https://github.com/yousafzeb-byte/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/yousafzeb-byte/Portfolio/actions/workflows/ci.yml)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Tests](https://img.shields.io/badge/Tests-13%20passing-22c55e)](https://github.com/yousafzeb-byte/Portfolio)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://yousafzeb.dev)

A modern, interactive portfolio showcasing my work in full-stack software engineering, front-end development, and AI-powered applications.

Built with **React, TypeScript, Tailwind CSS, and Framer Motion**, with a focus on thoughtful design, meaningful interactions, performance, and accessibility.

[**Live Portfolio**](https://yousafzeb.dev/) · [**GitHub**](https://github.com/yousafzeb-byte)

---

## Overview

This portfolio brings together my software engineering projects, technical expertise, and approach to building user-focused digital products.

Designed and developed with an emphasis on clean architecture and intuitive user experiences, it demonstrates how modern front-end technologies can be used to create engaging, responsive, and maintainable applications.

The design balances expressive typography, purposeful motion, and a cohesive visual identity while keeping the content clear and accessible.

## Features

- **Modern Interface:** A distinctive dark editorial design with carefully selected typography, colors, and visual hierarchy.
- **Interactive Experience:** Motion-enhanced transitions, responsive interactions, and an interactive workflow demonstration built with real React state.
- **Project Showcases:** Presentations of real applications, technical implementations, and engineering decisions.
- **Responsive Design:** Adaptive layouts optimized for mobile, tablet, and desktop screens.
- **Accessibility:** Semantic HTML, keyboard navigation, visible focus indicators, and reduced-motion support.
- **Maintainable Architecture:** Reusable React components, TypeScript models, centralized design tokens, and organized project data.

## Featured Projects

### Flow-Pilot — AI-Powered Workflow Automation

A full-stack platform for creating, configuring, and executing automated workflows through a visual interface.

**Highlights**
- Visual workflow builder powered by React Flow
- AI-assisted workflow generation using OpenAI
- Configurable nodes and conditional branching
- Real-time execution monitoring through WebSockets
- FastAPI backend with JWT authentication

**Tech Stack:** React, TypeScript, React Flow, Python, FastAPI, WebSockets, OpenAI API, Docker

[View Repository](https://github.com/yousafzeb-byte/Flow-Pilot)

---

### Advanced E-Commerce Application

A React and TypeScript application demonstrating modern e-commerce functionality, state management, and backend service integration.

**Highlights**
- Product browsing and filtering
- Shopping cart and checkout
- Firebase Authentication and Firestore
- Redux Toolkit for state management
- React Query for asynchronous data handling

**Tech Stack:** React, TypeScript, Redux Toolkit, React Query, Firebase, Firestore

[View Repository](https://github.com/yousafzeb-byte/advanced-ecommerce-app)

---

### Mechanic Shop API

A production-style REST API demonstrating backend architecture, authentication, automated testing, and deployment workflows.

**Highlights**
- 27 documented API endpoints
- 71 automated backend tests
- JWT authentication and authorization
- Rate limiting and caching
- Swagger/OpenAPI documentation
- GitHub Actions CI/CD

**Tech Stack:** Python, Flask, SQLAlchemy, MySQL, PostgreSQL, JWT, GitHub Actions

[View Repository](https://github.com/yousafzeb-byte/Mechanic-Shop)

---

## Technology Stack

| Category      | Technologies                                      |
|---------------|---------------------------------------------------|
| Framework     | React 19, TypeScript                              |
| Build Tool    | Vite 8                                            |
| Styling       | Tailwind CSS v4                                   |
| Animation     | Framer Motion                                     |
| Icons         | Lucide React                                      |
| Testing       | Vitest, React Testing Library                     |
| Linting       | Oxlint                                            |
| Deployment    | Vercel                                            |
| Version Control | Git, GitHub                                     |

## Design Philosophy

The portfolio follows a design approach centred on clarity, visual balance, and usability.

**Intentional Composition** — Typography, spacing, and contrast establish a clear visual hierarchy while maintaining a cohesive experience.

**Purposeful Motion** — Animations and transitions provide visual feedback, guide attention, and enhance interactions without overwhelming the interface.

**Content-Driven Design** — Projects and engineering work remain the primary focus, supported by visual elements that communicate functionality and technical decisions.

**Accessibility and Responsiveness** — The interface is designed to accommodate different screen sizes, input methods, and motion preferences.

**Consistency and Maintainability** — Reusable components and centralized design decisions make the interface easier to extend and maintain.

## Architecture

The application uses a modular, component-based architecture.

```
src/
├── components/
│   ├── layout/
│   │   ├── Nav
│   │   └── Footer
│   ├── sections/
│   │   ├── Hero
│   │   ├── WorkflowDemo
│   │   ├── Work
│   │   ├── About
│   │   ├── Skills
│   │   ├── Philosophy
│   │   └── Contact
│   └── ui/
│       ├── Tag
│       └── SectionLabel
├── data/
│   └── projects.ts
├── hooks/
│   └── useReducedMotion.ts
├── lib/
│   └── motion.ts
├── types/
│   └── index.ts
├── __tests__/
│   └── components.test.tsx
└── index.css
```

### Key Architectural Decisions

- **Component Reusability:** Shared UI components maintain consistency and reduce duplication.
- **Type Safety:** TypeScript interfaces provide predictable data structures.
- **Centralized Content:** Project information and technical skills are organised separately from presentation components.
- **Design Tokens:** Shared colours, typography, and styling values support consistent design via Tailwind v4 `@theme`.
- **Motion Utilities:** Reusable animation configurations support consistent transitions and reduced-motion preferences.

## Accessibility

- Semantic HTML and structured heading hierarchy
- Keyboard-accessible navigation and controls
- Skip-to-content link
- Visible focus indicators
- Accessible mobile navigation with focus management and Escape-key close
- Readable colour contrast (WCAG AA)
- Appropriate labels and alternative text
- Support for `prefers-reduced-motion`

## Performance

- Optimised production builds using Vite
- Component-based rendering
- Lightweight UI dependencies
- Transform- and opacity-based animations
- Font preconnection and `font-display: swap`
- Responsive layouts and reduced-motion support

## Getting Started

### Prerequisites

- Node.js compatible with Vite 8
- npm
- Git

### Installation

```bash
git clone https://github.com/yousafzeb-byte/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Available Scripts

| Command              | Description                        |
|----------------------|------------------------------------|
| `npm run dev`        | Start the development server       |
| `npm run build`      | Generate the production build      |
| `npm run preview`    | Preview the production build       |
| `npm run test`       | Run tests in watch mode            |
| `npm run test:run`   | Run tests once                     |
| `npm run typecheck`  | Run TypeScript checks              |

## CI/CD

Every push to `main` triggers the GitHub Actions pipeline:

- ✅ TypeScript type-check
- ✅ 13 Vitest + React Testing Library tests
- ✅ Production build via Vite
- ✅ Auto-deploy to Vercel on success

---

**Author:** Yousaf Zeb — Full-Stack Software Engineer  
**Live:** [yousafzeb.dev](https://yousafzeb.dev)
