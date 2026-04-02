import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenis: Lenis | null = null;
let rafId: number | null = null;

const lenisRaf = (time: number) => {
  lenis?.raf(time);
  rafId = requestAnimationFrame(lenisRaf);
};

export const initLenis = () => {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.4,
    smoothWheel: true,
    syncTouch: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.1,
  });

  lenis.on("scroll", () => ScrollTrigger.update());
  rafId = requestAnimationFrame(lenisRaf);

  return lenis;
};

export const getLenis = () => lenis;

export const startLenis = () => {
  lenis?.start();
};

export const stopLenis = () => {
  lenis?.stop();
};

export const destroyLenis = () => {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  lenis?.destroy();
  lenis = null;
};
