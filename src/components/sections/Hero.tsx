import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { makeVariants } from "../../lib/motion";
import { WorkflowDemo } from "./WorkflowDemo";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { container, item } = makeVariants(reduceMotion);

  return (
    <section
      id="hero"
      className="relative flex items-center px-6 md:px-10 pt-24 pb-10 max-w-6xl mx-auto"
      aria-label="Introduction"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/3 -left-32 w-[600px] h-[500px] -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(200,169,110,0.06) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="w-full grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        {/* LEFT — identity */}
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Availability badge */}
          <motion.div
            variants={item}
            className="flex items-center gap-2.5 mb-8"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs text-muted tracking-[0.2em] uppercase">
              Available — Open to full-time roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display leading-[0.88] tracking-tight text-text mb-5"
            style={{ fontSize: "clamp(3rem, 5.5vw, 6rem)" }}
          >
            Yousaf
            <br />
            <em style={{ color: "var(--color-accent)", opacity: 0.85 }}>
              Zeb.
            </em>
          </motion.h1>

          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="font-mono text-xs text-muted tracking-[0.22em] uppercase mb-8 border-l-2 border-accent pl-3"
          >
            Full-Stack Engineer · MBA
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={item}
            className="font-sans text-base md:text-[18px] text-muted leading-relaxed max-w-[440px] mb-10"
          >
            I build production software at the intersection of engineering and
            product — AI automation platforms, REST APIs, and full-featured
            React applications.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-canvas px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200"
            >
              Selected Work
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/yousafzeb-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-muted hover:border-muted hover:text-text px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200"
              aria-label="View GitHub profile (opens in new tab)"
            >
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — interactive demo */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: reduceMotion ? 0 : 0.4,
            ease: [0.25, 0, 0, 1],
          }}
        >
          <p className="font-mono text-[11px] text-muted/40 tracking-[0.18em] uppercase mb-3">
            Live demo — Flow-Pilot
          </p>
          <WorkflowDemo />
          <p className="mt-3 font-mono text-[10px] text-muted/30 tracking-wide">
            Click any node to inspect · Click Run to execute the pipeline
          </p>
        </motion.div>
      </div>
    </section>
  );
}
