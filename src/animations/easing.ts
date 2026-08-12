/**
 * Reusable animation easing constants for Framer Motion and standard CSS transitions.
 * These custom cubic-bezier curves provide a premium, luxury architectural feel.
 */

// Framer Motion Bezier Arrays (equivalent to CSS cubic-bezier)
export const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const; // Ultra-smooth expo-like reveal
export const EASE_REVEAL = [0.25, 1, 0.5, 1] as const;    // Controlled clean text fade-up
export const EASE_SMOOTH_INOUT = [0.76, 0, 0.24, 1] as const; // Slow-mid-slow transition

// GSAP string representation equivalents
export const GSAP_EASE_CINEMATIC = "power4.out";
export const GSAP_EASE_REVEAL = "power2.out";
export const GSAP_EASE_SMOOTH = "power3.inOut";
