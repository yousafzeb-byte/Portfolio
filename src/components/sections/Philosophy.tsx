import { motion } from "framer-motion";
import { principles } from "../../data/projects";
import { SectionLabel } from "../ui/SectionLabel";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { makeVariants } from "../../lib/motion";

export function Philosophy() {
  const reduceMotion = useReducedMotion();
  const { container, item } = makeVariants(reduceMotion);

  return (
    <section
      id="philosophy"
      className="px-6 md:px-10 py-24 md:py-32 max-w-6xl mx-auto"
      aria-labelledby="philosophy-heading"
    >
      <SectionLabel number="04" label="How I Build" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          variants={item}
          id="philosophy-heading"
          className="font-display text-4xl md:text-5xl text-text mb-14 leading-[1.1] max-w-xl"
        >
          Principles I don't
          <br />
          <em className="text-accent" style={{ opacity: 0.82 }}>
            compromise on.
          </em>
        </motion.h2>

        <motion.dl
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {principles.map(({ id, Icon, title, description }) => (
            <motion.div
              key={id}
              variants={item}
              className="border border-border p-6 hover:border-accent/40 transition-colors duration-300"
            >
              <dt>
                <Icon
                  size={20}
                  className="text-accent mb-4"
                  aria-hidden={true}
                />
                <span className="block font-sans text-sm font-medium text-text mb-2">
                  {title}
                </span>
              </dt>
              <dd className="font-sans text-sm text-muted leading-relaxed">
                {description}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
