import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { makeVariants } from "../../lib/motion";

export function Contact() {
  const reduceMotion = useReducedMotion();
  const { container, item } = makeVariants(reduceMotion);

  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-10 md:py-14 max-w-6xl mx-auto"
      aria-labelledby="contact-heading"
    >
      <SectionLabel number="05" label="Contact" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl"
      >
        <motion.h2
          variants={item}
          id="contact-heading"
          className="font-display text-5xl md:text-7xl text-text mb-6 leading-[0.95]"
        >
          Let's work
          <br />
          <em className="text-accent" style={{ opacity: 0.82 }}>
            together.
          </em>
        </motion.h2>

        <motion.p
          variants={item}
          className="font-sans text-sm md:text-base text-muted leading-relaxed mb-10 max-w-sm"
        >
          I'm open to full-time roles, contract work, and interesting projects.
          If you're building something ambitious, I'd love to hear about it.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <a
            href="mailto:yousafzeb@gmail.com"
            className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-canvas px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200"
            aria-label="Send an email to yousafzeb@gmail.com"
          >
            <Mail size={14} aria-hidden="true" />
            Say Hello
          </a>
          <a
            href="https://www.linkedin.com/in/yousaf-zeb-5122702a7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-muted hover:border-muted hover:text-text px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <ExternalLink size={14} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://github.com/yousafzeb-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-muted hover:border-muted hover:text-text px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200"
            aria-label="GitHub profile (opens in new tab)"
          >
            <ExternalLink size={14} aria-hidden="true" />
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
