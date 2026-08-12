import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger only in the client browser context
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  
  // Set default settings
  gsap.defaults({
    ease: "power2.out",
    duration: 1.0,
  });

  // Align ScrollTrigger refresh with Lenis and modern animations
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });
}

export { gsap, ScrollTrigger };
