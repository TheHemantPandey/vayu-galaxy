import React from "react";

interface HeroContentProps {
  contentRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * Hero typographic focal content.
 * Layer 4: Confident display typography.
 * Renders VAYU and GALAXY in a unified Space Grotesk architectural composition.
 */
export default function HeroContent({ contentRef }: HeroContentProps) {
  return (
    <div
      ref={contentRef}
      className="relative z-10 flex flex-col items-start max-w-4xl w-full"
    >
      <h1 className="font-display leading-[0.82] uppercase tracking-[-0.03em] flex flex-col select-none">
        {/* Overflow hidden containers support clean GSAP clipping slide entries */}
        <div className="overflow-hidden py-1 -my-1">
          <span className="block text-[clamp(3.2rem,3.8vw+2.5rem,7.5rem)] font-light text-[#FAFAFA] hero-title-vayu">
            VAYU
          </span>
        </div>
        <div className="overflow-hidden py-1 -my-1">
          <span className="block text-[clamp(3.2rem,3.8vw+2.5rem,7.5rem)] font-medium text-[#E2E2E2] hero-title-galaxy">
            GALAXY
          </span>
        </div>
      </h1>

      {/* Monospace Subtitle */}
      <div className="overflow-hidden py-0.5 -my-0.5 mt-3 sm:mt-4">
        <p className="hero-subtitle text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.3em] text-[#8E8E93] uppercase">
          THE FUTURE OF LIVING
        </p>
      </div>
    </div>
  );
}
