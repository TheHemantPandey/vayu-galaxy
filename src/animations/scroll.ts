/**
 * Scroll utility helpers for Vayu Galaxy.
 * Integrates viewport coordinate tracking.
 */

/**
 * Calculates current viewport metrics.
 */
export const getViewportMetrics = () => {
  if (typeof window === "undefined") {
    return { width: 0, height: 0, scrollY: 0 };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    scrollY: window.scrollY || window.pageYOffset,
  };
};

/**
 * Format scroll depth or coordinates for HUD telemetry readouts.
 * E.g., formatting "148" to "0148.00m"
 */
export const formatHUDValue = (value: number, suffix: string = "m"): string => {
  const rounded = value.toFixed(2);
  const padded = rounded.padStart(8, "0");
  return `${padded}${suffix}`;
};
