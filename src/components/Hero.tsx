"use client";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Hero() {
  const displayText = useTypewriter();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-white pt-16 overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ddd6fe 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Fade out grid toward bottom */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white" />
      {/* Subtle glow top-left */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      {/* Floating orbs */}
      <div className="animate-float-1 absolute top-24 right-8 sm:right-28 w-64 h-64 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="animate-float-2 absolute top-1/2 right-4 sm:right-12 w-40 h-40 bg-violet-200/20 rounded-full blur-2xl pointer-events-none" />
      <div className="animate-float-3 absolute bottom-24 right-1/3 w-28 h-28 bg-indigo-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm mb-8">
            <span className="pulse-dot w-2 h-2 rounded-full bg-green-500 block" />
            <span className="text-indigo-600 font-semibold text-xs tracking-widest uppercase">
              Available for opportunities
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Yousaf Zeb
            </span>
          </h1>

          <h2 className="animate-fade-up-delay-1 text-2xl sm:text-3xl font-semibold text-slate-500 mb-6 h-10 flex items-center">
            <span>{displayText}</span>
            <span className="animate-blink ml-0.5 inline-block w-[2px] h-7 bg-indigo-500 rounded-sm" />
          </h2>

          <p className="animate-fade-up-delay-2 text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
            MBA-qualified engineer building production-grade web applications
            with React, TypeScript, Flask, and PostgreSQL. 130+ automated tests
            and CI/CD pipelines across 5+ shipped projects — combining business
            insight with hands-on engineering execution.
          </p>

          <div className="animate-fade-up-delay-2 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-indigo-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="animate-fade-up-delay-3 mt-16 flex flex-wrap gap-10 sm:gap-16">
            {[
              { value: "5+", label: "Projects Shipped" },
              { value: "130+", label: "Automated Tests" },
              { value: "MBA", label: "Business Degree" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
