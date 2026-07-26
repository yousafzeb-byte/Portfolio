const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    skills: ["Flask", "FastAPI", "Python", "Node.js", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "SQLAlchemy", "SQLite", "Prisma"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "GitHub Actions", "CI/CD", "Git"],
  },
  {
    category: "Cloud Platforms",
    skills: ["AWS", "Azure", "Vercel", "Render"],
  },
  {
    category: "AI & Automation",
    skills: [
      "OpenAI API",
      "LangChain",
      "Prompt Engineering",
      "Workflow Automation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 reveal">
        <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-3">
          What I Work With
        </p>
        <h2 className="text-4xl font-bold text-slate-900 mb-12">
          Skills &amp; Tech Stack
        </h2>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 hover:shadow-sm transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
