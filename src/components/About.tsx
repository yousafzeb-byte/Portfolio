export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 reveal">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Engineer with a business edge
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I&apos;m an MBA-qualified Full-Stack Software Engineer with a
                background in sales operations and inventory management. I bring
                a rare combination of business strategy and technical depth to
                every project I build.
              </p>
              <p>
                I build production-grade applications using React, TypeScript,
                Flask, FastAPI, and PostgreSQL — with a strong emphasis on code
                quality, test coverage, and scalable architecture. Every project
                ships with Docker-orchestrated deployments and CI/CD pipelines.
              </p>
              <p>
                I also integrate OpenAI APIs to build AI-powered tools for
                workflow automation and document analysis, bridging cutting-edge
                AI with real business problems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Frameworks", value: "React, Next.js, Flask, FastAPI" },
              { label: "Languages", value: "TypeScript, Python, SQL" },
              {
                label: "Infrastructure",
                value: "Docker, GitHub Actions, CI/CD",
              },
              { label: "AI & APIs", value: "OpenAI, LangChain, REST" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
              >
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">
                  {item.label}
                </p>
                <p className="text-sm text-slate-700 font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
