"use client";

import { useState, useEffect } from "react";

/**
 * React hook to listen for the user's OS-level reduced motion preference.
 * Safely handles server-side rendering environments.
 */
export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Defer state update to avoid synchronous cascading renders inside the effect body
    const initialMatches = mediaQuery.matches;
    if (initialMatches) {
      requestAnimationFrame(() => {
        setReducedMotion(true);
      });
    }

    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    // Modern browser compatibility
    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return reducedMotion;
}
