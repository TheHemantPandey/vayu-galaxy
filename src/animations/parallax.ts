export interface ParallaxConfig {
  speed?: number; // Translation amount coefficient (positive or negative)
  direction?: "vertical" | "horizontal";
  start?: string; // ScrollTrigger start trigger point
  end?: string;   // ScrollTrigger end trigger point
}

/**
 * Standard configuration options for parallax scroll effects.
 */
export const defaultParallaxConfig: ParallaxConfig = {
  speed: 0.15,
  direction: "vertical",
  start: "top bottom",
  end: "bottom top",
};
