import React from "react";

interface HeroMetadataProps {
  metadataRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * Hero minimal HUD layer.
 * Layer 5: Minimal HUD metadata.
 * Displays only confirmed, neutral descriptors to avoid fabricating project claims.
 */
export default function HeroMetadata({ metadataRef }: HeroMetadataProps) {
  return (
    <div
      ref={metadataRef}
      className="absolute bottom-20 sm:bottom-24 left-[7vw] lg:left-[9vw] right-[7vw] lg:right-[9vw] z-10 flex items-end justify-between pointer-events-none select-none"
    >
      {/* Left column HUD tags */}
      <div className="flex flex-col gap-1 text-left font-mono text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-[#8E8E93]">
        <span className="text-[#FAFAFA] font-medium">VAYU GALAXY</span>
        <span>EXPLORE</span>
      </div>

      {/* Right column navigation progress index */}
      <div className="flex flex-col items-end gap-1 font-mono text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-[#8E8E93]">
        <span className="text-[#FAFAFA] font-medium">01 / 08</span>
      </div>
    </div>
  );
}
