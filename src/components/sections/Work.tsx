import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import { SectionLabel } from "../ui/SectionLabel";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { makeVariants } from "../../lib/motion";
import type { Project } from "../../types";

function ProjectCard({
  project,
  reduceMotion,
}: {
  project: Project;
  reduceMotion: boolean;
}) {
  return (
    <article
      className="group relative border-t border-border py-12 md:py-16 pl-6 md:pl-8"
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Animated left-edge accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          {/* Number + title */}
          <div className="flex items-baseline gap-4 mb-1">
            <span
              className="font-mono text-xs text-accent/40 tracking-[0.2em] shrink-0"
              aria-hidden="true"
            >
              {project.number}
            </span>
            <h3
              id={`project-${project.id}-title`}
              className="font-display text-3xl md:text-4xl text-text group-hover:text-accent transition-colors duration-300 leading-tight"
            >
              {project.title}
            </h3>
          </div>

          {/* Tagline */}
          <p className="font-mono text-xs text-muted tracking-[0.15em] uppercase mb-6 ml-[3.25rem]">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="font-sans text-sm md:text-base text-muted leading-relaxed mb-6 max-w-2xl">
            {project.description}
          </p>

          {/* Highlights */}
          <ul
            className="mb-6 flex flex-col gap-1.5"
            aria-label={`${project.title} key features`}
          >
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 font-sans text-sm text-muted"
              >
                <span
                  className="mt-[0.45rem] h-1 w-1 rounded-full bg-accent/50 shrink-0"
                  aria-hidden="true"
                />
                {h}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div
            className="flex flex-wrap gap-2"
            aria-label={`Technologies used in ${project.title}`}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-muted border border-border px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub link */}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1 font-mono text-xs text-muted hover:text-accent transition-colors duration-200 mt-1 group/link"
          aria-label={`View ${project.title} on GitHub (opens in new tab)`}
        >
          <span className="hidden sm:inline">GitHub</span>
          <motion.span
            className="inline-block"
            whileHover={reduceMotion ? {} : { x: 2, y: -2 }}
            transition={{ duration: 0.15 }}
          >
            <ArrowUpRight size={16} aria-hidden="true" />
          </motion.span>
        </a>
      </div>
    </article>
  );
}

export function Work() {
  const reduceMotion = useReducedMotion();
  const { container, item } = makeVariants(reduceMotion);

  return (
    <section
      id="work"
      className="px-6 md:px-10 py-24 md:py-32 max-w-6xl mx-auto"
      aria-labelledby="work-heading"
    >
      <SectionLabel number="01" label="Selected Work" />
      <h2 id="work-heading" className="sr-only">
        Selected Work
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard project={project} reduceMotion={reduceMotion} />
          </motion.div>
        ))}
        <div className="border-t border-border" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
