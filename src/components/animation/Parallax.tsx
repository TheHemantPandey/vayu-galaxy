"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ParallaxConfig, defaultParallaxConfig } from "@/animations/parallax";

export interface ParallaxProps extends ParallaxConfig {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

/**
 * Reusable parallax container powered by GSAP ScrollTrigger.
 * Offsets nested child elements relative to window scrolling.
 * Automatically deactivates under reduced motion guidelines to prevent vestibular distress.
 */
export function Parallax({
  children,
  speed = defaultParallaxConfig.speed,
  direction = defaultParallaxConfig.direction,
  start = defaultParallaxConfig.start,
  end = defaultParallaxConfig.end,
  className = "",
  innerClassName = "",
}: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      // Deactivate scroll translation when reduced motion is preferred
      if (reducedMotion || typeof window === "undefined" || !speed) return;

      const target = targetRef.current;
      const container = containerRef.current;
      if (!target || !container) return;

      // Calculate shift values in percentages or pixels depending on speed coeff
      const movement = speed * 100; // e.g. speed = 0.2 -> 20% translation range
      
      const vars: gsap.TweenVars = {
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: start,
          end: end,
          scrub: true,
        },
      };

      if (direction === "vertical") {
        gsap.fromTo(
          target,
          { yPercent: -movement / 2 },
          { ...vars, yPercent: movement / 2 }
        );
      } else {
        gsap.fromTo(
          target,
          { xPercent: -movement / 2 },
          { ...vars, xPercent: movement / 2 }
        );
      }
    },
    { scope: containerRef, dependencies: [speed, direction, start, end, reducedMotion] }
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div ref={targetRef} className={`h-full w-full ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}

export default Parallax;
