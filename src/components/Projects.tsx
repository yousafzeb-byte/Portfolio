const projects = [
  {
    title: "Flow-Pilot",
    description:
      "AI-powered visual workflow automation platform for small businesses. Design multi-step workflows with a drag-and-drop canvas, monitor executions in real-time via WebSocket, and generate complete workflow graphs from plain English using OpenAI GPT-4o-mini.",
    tech: [
      "React 18",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "OpenAI API",
      "GitHub Actions",
    ],
    github: "https://github.com/yousafzeb-byte/Flow-Pilot",
    live: null,
  },
  {
    title: "AI Business Assistant",
    description:
      "Production-ready full-stack AI business operations platform. Upload invoices, notes, and contracts to get AI-powered summaries, extracted data, cost tracking, and actionable insights — with JWT auth, Redis rate limiting, soft delete, and analytics dashboard.",
    tech: [
      "React 19",
      "TypeScript",
      "Flask",
      "PostgreSQL",
      "Redis",
      "Docker",
      "OpenAI API",
      "Nginx",
      "GitHub Actions",
    ],
    github: "https://github.com/yousafzeb-byte/AI-Business-Assistant",
    live: null,
  },
  {
    title: "TripCanvas",
    description:
      "Full-stack travel itinerary planner with day-by-day activity scheduling, drag-and-drop reordering, place search via OpenStreetMap, interactive maps, weather summaries, and public share links. Includes a seeded demo account and full Docker + CI/CD setup.",
    tech: [
      "React 19",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "React Leaflet",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],
    github: "https://github.com/yousafzeb-byte/TripCanvas",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-3">
          What I&apos;ve Built
        </p>
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden reveal${index > 0 ? ` reveal-delay-${index}` : ""}`}
            >
              {/* Gradient accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-violet-500" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-md border border-indigo-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    GitHub →
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/yousafzeb-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
