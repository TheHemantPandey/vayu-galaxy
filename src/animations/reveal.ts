import { EASE_CINEMATIC, EASE_REVEAL } from "./easing";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";
export type RevealStyle = "fade" | "slide" | "scale" | "mask";

/**
 * Reveal animation variants for Framer Motion.
 * Used by the `<Reveal>` component to perform consistent transitions.
 */
export const getRevealVariants = (
  style: RevealStyle,
  direction: RevealDirection = "up",
  delay: number = 0,
  duration: number = 1.2
) => {
  const getOffset = () => {
    const value = 40; // Pixels to slide
    switch (direction) {
      case "up": return { y: value };
      case "down": return { y: -value };
      case "left": return { x: value };
      case "right": return { x: -value };
      default: return { x: 0, y: 0 };
    }
  };

  switch (style) {
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration, ease: EASE_REVEAL, delay },
        },
      };

    case "slide":
      const offset = getOffset();
      return {
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, ease: EASE_CINEMATIC, delay },
        },
      };

    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration, ease: EASE_CINEMATIC, delay },
        },
      };

    case "mask":
      // Clip path reveal for architectural visual presentation
      return {
        hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
        visible: {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          transition: { duration: duration * 1.2, ease: EASE_CINEMATIC, delay },
        },
      };

    default:
      return {
        hidden: {},
        visible: {},
      };
  }
};
