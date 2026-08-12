import React from "react";

interface HeroScrollIndicatorProps {
  indicatorRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * Scroll exploration indicator.
 * Layer 6: Scroll indicator.
 * Renders a slow CSS-based vertical sweep line.
 */
export default function HeroScrollIndicator({
  indicatorRef,
}: HeroScrollIndicatorProps) {
  return (
    <div
      ref={indicatorRef}
      className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 select-none pointer-events-none"
    >
      <span className="font-mono text-[0.55rem] sm:text-[0.6rem] tracking-[0.25em] text-[#8E8E93] uppercase">
        SCROLL TO EXPLORE
      </span>
      <div className="w-[1px] h-10 bg-white/15 relative overflow-hidden" aria-hidden="true">
        {/* Sweep line element synced with custom Tailwind css keyframe */}
        <div className="absolute inset-x-0 w-full h-1/2 bg-[#DFCFB7] animate-scroll-line" />
      </div>
    </div>
  );
}
