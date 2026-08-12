"use client";

import { useScroll, MotionValue } from "framer-motion";
import { RefObject } from "react";

export interface ScrollProgressOptions {
  target?: RefObject<HTMLElement | null>;
  offset?: [string, string] | string[];
}

/**
 * Returns a Framer Motion MotionValue representing normalized scroll progress (0 -> 1).
 * Updates are offloaded directly to Framer Motion's rendering loop, avoiding React re-renders.
 * 
 * @param options Configuration options including target element ref and scroll offsets.
 */
export function useScrollProgress(
  options: ScrollProgressOptions = {}
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: options.target,
    offset: options.offset || ["start end", "end start"],
  });

  return scrollYProgress;
}
