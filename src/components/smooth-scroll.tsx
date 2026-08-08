"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Replaces the source's Luxy.js inertia scroll (`luxy.init` on `#luxy`,
 * active only when viewport width > 1200px). Lenis gives the same smooth,
 * weighted scroll feel the original has on desktop. Below 1200px the native
 * scroll is used, matching Luxy's guard.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.innerWidth <= 1200) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Expose for programmatic scrolling (e.g. the hero scroll-down arrow).
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // On route change, instantly jump to top — no smooth animation.
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
