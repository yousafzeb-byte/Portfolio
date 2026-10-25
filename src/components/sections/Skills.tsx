import { motion } from "framer-motion";
import { skillGroups } from "../../data/projects";
import { SectionLabel } from "../ui/SectionLabel";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { makeVariants } from "../../lib/motion";

export function Skills() {
  const reduceMotion = useReducedMotion();
  const { container, item } = makeVariants(reduceMotion);

  return (
    <section
      id="skills"
      className="px-6 md:px-10 py-24 md:py-32 max-w-6xl mx-auto"
      aria-labelledby="skills-heading"
    >
      <SectionLabel number="03" label="Expertise" />
      <h2 id="skills-heading" className="sr-only">
        Technical Expertise
      </h2>

      <motion.dl
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.category} variants={item}>
            <dt className="font-mono text-xs text-accent tracking-[0.18em] uppercase mb-3">
              {group.category}
            </dt>
            <dd className="font-sans text-sm text-muted leading-relaxed">
              {group.skills.join(" · ")}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
