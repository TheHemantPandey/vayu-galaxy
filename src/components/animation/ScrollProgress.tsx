"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export interface ScrollProgressProps {
  type?: "bar" | "hud";
  targetRef?: React.RefObject<HTMLElement | null>;
  className?: string;
}

/**
 * Performant scroll progress indicators.
 * Avoids React component re-rendering by utilizing direct DOM mutation for telemetry text
 * and Framer Motion hardware-accelerated transforms for visual elements.
 */
export function ScrollProgress({
  type = "bar",
  targetRef,
  className = "",
}: ScrollProgressProps) {
  const scrollYProgress = useScrollProgress({ target: targetRef });
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (type !== "hud") return;

    // Mutate innerText directly to bypass React virtual DOM updates on scroll ticks
    const unsubscribe = scrollYProgress.on("change", (latest: number) => {
      if (labelRef.current) {
        const percent = Math.round(latest * 100)
          .toString()
          .padStart(3, "0");
        labelRef.current.innerText = percent;
      }
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, type]);

  if (type === "bar") {
    return (
      <motion.div
        className={`fixed top-0 left-0 right-0 h-[2px] bg-[#DFCFB7] origin-left z-50 pointer-events-none ${className}`}
        style={{ scaleX: scrollYProgress }}
      />
    );
  }

  // HUD telemetry display progress layout
  return (
    <div
      className={`flex items-center gap-3 text-hud-metadata font-mono select-none ${className}`}
    >
      <span className="text-[0.65rem] tracking-widest text-[#8E8E93]">INDEX.SYS</span>
      <div className="relative w-16 h-[1px] bg-white/10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[#DFCFB7] origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
      <span className="text-[#FAFAFA] font-medium text-[0.65rem]">
        <span ref={labelRef} className="tabular-nums font-mono">000</span>%
      </span>
    </div>
  );
}

export default ScrollProgress;
