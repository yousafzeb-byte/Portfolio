import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { makeVariants } from "../../lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { container, item } = makeVariants(reduceMotion);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-20 max-w-6xl mx-auto"
      aria-label="Introduction"
    >
      {/* Subtle dot-grid texture — purely decorative */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(200,169,110,0.18) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 100%)",
          opacity: 0.18,
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        {/* Eyebrow */}
        <motion.p
          variants={item}
          className="font-mono text-xs text-accent tracking-[0.25em] uppercase mb-8"
        >
          Full-Stack Engineer · MBA
        </motion.p>

        {/* Name — magazine-cover scale */}
        <motion.h1
          variants={item}
          className="font-display leading-[0.88] tracking-tight text-text mb-10"
          style={{ fontSize: "clamp(4rem, 11vw, 10.5rem)" }}
        >
          Yousaf
          <br />
          <em style={{ color: "var(--color-accent)", opacity: 0.85 }}>Zeb.</em>
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={item}
          className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-[480px] mb-10"
        >
          I build production software at the intersection of engineering and
          product — AI automation platforms, REST APIs, and full-featured React
          applications.
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-6 md:left-10 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-border" />
        <span className="font-mono text-xs text-muted tracking-[0.2em] uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
