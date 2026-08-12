"use client";

import React, { createContext, useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const SmoothScrollContext = createContext<{
  lenis: Lenis | null;
}>({
  lenis: null,
});

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Instantiate global Lenis scroll controller
    const lenisInstance = new Lenis({
      duration: reducedMotion ? 0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reducedMotion,
    });

    // Defer state update to avoid synchronous cascading renders inside the effect body
    requestAnimationFrame(() => {
      setLenis(lenisInstance);
    });

    // Sync ScrollTrigger updates on scroll events
    const handleScroll = () => {
      ScrollTrigger.update();
    };
    lenisInstance.on("scroll", handleScroll);

    // Connect Lenis to the GSAP Ticker for highly optimized frame-synced scrolling
    const updateRaf = (time: number) => {
      lenisInstance.raf(time * 1000);
    };
    gsap.ticker.add(updateRaf);

    // Disable GSAP lag smoothing to keep pinned scroll markers aligned with virtual scroll
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateRaf);
      lenisInstance.off("scroll", handleScroll);
      lenisInstance.destroy();
      setLenis(null);
    };
  }, [reducedMotion]);

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
