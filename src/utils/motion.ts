import type { Variants } from "framer-motion";

/**
 * Shared motion vocabulary for the manga layout.
 *
 * Everything is deliberately short and slightly overshoot-free: panels should
 * feel like they were laid onto the page, not like they bounced onto it.
 */

const EASE = [0.22, 0.9, 0.28, 1] as const;

/** A section that reveals its panels one after another. */
export const page: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};

/** A panel getting inked onto the page. */
export const panel: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.975 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE }
  }
};

/** Same idea, entering from the side — used for gutter-width columns. */
export const panelFrom = (x: number): Variants => ({
  hidden: { opacity: 0, x },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } }
});

/** Speech balloons pop rather than slide. */
export const balloon: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.42, ease: [0.34, 1.3, 0.5, 1] }
  }
};

/** Lettering that drops in like a stamped sound effect. */
export const sfx: Variants = {
  hidden: { opacity: 0, scale: 1.18, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.45, ease: [0.3, 1.2, 0.4, 1] }
  }
};

/**
 * Viewport trigger shared by every section, so scroll reveals stay uniform.
 * The threshold is deliberately tiny: sections are taller than the viewport on
 * narrow screens, and a large `amount` there would leave content stuck hidden.
 */
export const inViewOnce = { once: true, amount: 0.05 } as const;
