import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { makeVariants } from "../../lib/motion";

type Highlight = { label: string; value: string; href?: string };

const highlights: Highlight[] = [
  { label: "Background", value: "MBA (Marketing) + Full-Stack Engineering" },
  { label: "Speciality", value: "React · FastAPI · AI Integrations" },
  { label: "Approach", value: "User-focused, test-driven, production-ready" },
  {
    label: "LinkedIn",
    value: "yousaf-zeb",
    href: "https://www.linkedin.com/in/yousaf-zeb-5122702a7",
  },
  {
    label: "GitHub",
    value: "yousafzeb-byte",
    href: "https://github.com/yousafzeb-byte",
  },
];

export function About() {
  const reduceMotion = useReducedMotion();
  const { container, item } = makeVariants(reduceMotion);

  return (
    <section
      id="about"
      className="px-6 md:px-10 py-10 md:py-14 max-w-6xl mx-auto"
      aria-labelledby="about-heading"
    >
      <SectionLabel number="02" label="About" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-5 gap-8 md:gap-12"
      >
        {/* Bio */}
        <motion.div variants={item} className="md:col-span-3">
          <h2
            id="about-heading"
            className="font-display text-4xl md:text-5xl text-text mb-6 leading-[1.1]"
          >
            Engineering with
            <br />
            <em className="text-accent" style={{ opacity: 0.82 }}>
              product thinking.
            </em>
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-muted leading-relaxed">
            <p>
              I'm a full-stack software engineer with an MBA in Marketing. I
              build modern web applications, REST APIs, and AI-powered tools —
              with equal attention to the systems running under the hood and the
              experiences users see in the browser.
            </p>
            <p>
              The MBA sharpened my instincts for product decisions, user needs,
              and business context. The engineering work sharpened everything
              else. Together they mean I think about systems, users, and impact
              simultaneously — not in sequence.
            </p>
            <p>
              I'm drawn to the full stack: designing React interfaces that feel
              right, building Flask or FastAPI backends that hold up under load,
              and threading AI capabilities through both when the use case
              demands it.
            </p>
          </div>

          {/* Verified stats from shipped projects */}
          <dl className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
            {(
              [
                { value: "5+", label: "Projects Shipped" },
                { value: "130+", label: "Automated Tests" },
                { value: "MBA", label: "Marketing Degree" },
              ] as const
            ).map(({ value, label }) => (
              <div key={label}>
                <dt className="font-display text-3xl md:text-4xl text-text leading-none mb-1">
                  {value}
                </dt>
                <dd className="font-mono text-xs text-muted tracking-[0.15em] uppercase">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Highlights sidebar */}
        <motion.div variants={item} className="md:col-span-2">
          <dl>
            {highlights.map(({ label, value, href }) => (
              <div
                key={label}
                className="flex flex-col gap-1 py-5 border-b border-border first:border-t first:pt-5"
              >
                <dt className="font-mono text-xs text-accent tracking-[0.18em] uppercase">
                  {label}
                </dt>
                <dd className="font-sans text-sm text-text">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors duration-200"
                      aria-label={`${label}: ${value} (opens in new tab)`}
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </motion.div>
    </section>
  );
}
