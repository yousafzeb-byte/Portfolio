import type { ComponentType } from "react";
import type { Project, SkillGroup } from "../types";
import { Users, Layers, Shield, Zap, Eye, Cpu } from "lucide-react";

// TODO: Replace repoUrl values with the actual repository URLs once confirmed.
export const projects: Project[] = [
  {
    id: "flow-pilot",
    number: "01",
    title: "Flow-Pilot",
    tagline: "AI-Powered Workflow Automation Platform",
    description:
      "A visual workflow automation platform where teams design, automate, and monitor complex processes. Features AI-generated workflow suggestions, conditional branching, and real-time execution tracking over WebSockets.",
    highlights: [
      "Drag-and-drop workflow builder built with React Flow",
      "AI workflow generation via OpenAI API",
      "Real-time execution monitoring with WebSockets",
      "JWT-protected FastAPI backend",
      "Conditional branching with multi-step automation logic",
    ],
    tech: [
      "React",
      "TypeScript",
      "React Flow",
      "FastAPI",
      "WebSockets",
      "OpenAI API",
      "JWT",
    ],
    repoUrl: "https://github.com/yousafzeb-byte",
  },
  {
    id: "mechanic-shop-api",
    number: "02",
    title: "Mechanic Shop API",
    tagline: "Production-Quality Flask REST API",
    description:
      "A Flask REST API built with production-ready practices: full Swagger/OpenAPI documentation, 71 automated tests, JWT authentication, request rate limiting, and response caching — deployed through a CI/CD pipeline.",
    highlights: [
      "27 documented endpoints with Swagger/OpenAPI",
      "71 automated backend tests across all layers",
      "JWT authentication and role-based access control",
      "Request rate limiting and response caching",
      "CI/CD deployment with GitHub Actions",
    ],
    tech: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "JWT",
      "Docker",
      "GitHub Actions",
    ],
    repoUrl: "https://github.com/yousafzeb-byte",
  },
  {
    id: "advanced-ecommerce",
    number: "03",
    title: "Advanced E-Commerce",
    tagline: "Full-Featured React Shopping Application",
    description:
      "A feature-complete e-commerce application with product discovery, advanced filtering, cart management, and checkout — built with React, TypeScript, Redux Toolkit, and Firebase.",
    highlights: [
      "Advanced product filtering and search",
      "Persistent shopping cart with Redux Toolkit",
      "Firebase Authentication and Firestore",
      "Server-state management with React Query",
      "Full checkout flow",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Firebase",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/yousafzeb-byte",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Flask", "REST APIs", "WebSockets", "JWT Auth"],
  },
  {
    category: "Data & Cloud",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLAlchemy",
      "Firebase",
      "Docker",
      "Vercel",
      "Render",
    ],
  },
  {
    category: "Testing & CI/CD",
    skills: [
      "Vitest",
      "React Testing Library",
      "Python unittest",
      "GitHub Actions",
    ],
  },
  {
    category: "AI & Integrations",
    skills: ["OpenAI API", "AI Workflow Automation", "LLM Integrations"],
  },
];

export interface Principle {
  id: string;
  Icon: ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    id: "user-centered",
    Icon: Users,
    title: "User-Centered Thinking",
    description:
      "Every technical decision starts with the user. My MBA background in marketing sharpens product intuition alongside engineering execution.",
  },
  {
    id: "clean-architecture",
    Icon: Layers,
    title: "Clean Architecture",
    description:
      "Systems should be easy to reason about, extend, and hand off. I favour clear separation of concerns over clever abstractions.",
  },
  {
    id: "reliability",
    Icon: Shield,
    title: "Test-Driven Reliability",
    description:
      "Confidence in code comes from tests. From 71-test API suites to frontend component tests, quality is built in — not bolted on.",
  },
  {
    id: "performance",
    Icon: Zap,
    title: "Performance by Default",
    description:
      "Efficient rendering, lazy loading, minimal dependencies. Speed is a feature, not an afterthought.",
  },
  {
    id: "accessibility",
    Icon: Eye,
    title: "Accessible by Design",
    description:
      "Semantic HTML, keyboard navigation, and WCAG-conscious contrast are non-negotiable requirements, not optional enhancements.",
  },
  {
    id: "ai-integration",
    Icon: Cpu,
    title: "Thoughtful AI Integration",
    description:
      "AI tools should solve real problems. Flow-Pilot demonstrates integrating LLM capabilities into practical workflow automation.",
  },
];
