"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";
import type { RevealVariant } from "@/types";

const EASE = [0.215, 0.61, 0.355, 1] as const;

/**
 * Faithful re-implementation of the site's AOS (Animate On Scroll) usage.
 * Source config: `AOS.init({ duration: 800, once: true, disable: 'mobile' })`.
 *
 * Variants mirror AOS data-aos values. On viewports <= 768px the animation is
 * disabled and content renders immediately (matches `disable: 'mobile'`).
 */
const VARIANTS: Record<RevealVariant, Variants> = {
  "fade-up": { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  "fade-down": { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  "fade-left": { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  "fade-right": { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  "fade-zoom-in": { hidden: { opacity: 0, scale: 0.6 }, visible: { opacity: 1, scale: 1 } },
  "zoom-in": { hidden: { opacity: 0, scale: 0.6 }, visible: { opacity: 1, scale: 1 } },
  "zoom-out": { hidden: { opacity: 0, scale: 1.6 }, visible: { opacity: 1, scale: 1 } },
};

const MOBILE_QUERY = "(max-width: 768px)";
function subscribeMobile(cb: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}
function getMobileSnapshot() {
  return window.matchMedia(MOBILE_QUERY).matches;
}
function getMobileServerSnapshot() {
  return false;
}

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  /** Delay in milliseconds (AOS `aos-delay`). */
  delay?: number;
  className?: string;
  /** viewport margin; ~10% mirrors AOS default trigger offset. */
  rootMargin?: string;
}

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  className,
  rootMargin = "0px 0px -10% 0px",
}: RevealProps) {
  const reduce = useReducedMotion();
  const mobile = useSyncExternalStore(
    subscribeMobile,
    getMobileSnapshot,
    getMobileServerSnapshot,
  );

  if (reduce || mobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: rootMargin }}
      transition={{ duration: 0.8, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
