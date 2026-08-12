"use client";

import { useContext, useEffect } from "react";
import { SmoothScrollContext } from "@/components/layout/SmoothScrollProvider";
import Lenis from "lenis";

/**
 * Access the global Lenis smooth scroll instance.
 * Optionally register a scroll callback that automatically cleans up.
 * 
 * @param onScroll Optional callback function executed on scroll events
 * @param deps Dependency array to re-register the scroll callback
 */
export function useLenis(
  onScroll?: (lenis: Lenis) => void,
  deps: React.DependencyList = []
): Lenis | null {
  const context = useContext(SmoothScrollContext);
  const lenis = context ? context.lenis : null;

  useEffect(() => {
    if (!lenis || !onScroll) return;

    lenis.on("scroll", onScroll);
    
    return () => {
      lenis.off("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lenis, onScroll, ...deps]);

  return lenis;
}
