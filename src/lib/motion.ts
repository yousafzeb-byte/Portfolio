import type { Variants } from "framer-motion";

export function makeVariants(reduceMotion: boolean) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.6,
        ease: [0.25, 0, 0, 1],
      },
    },
  };

  return { container, item };
}
