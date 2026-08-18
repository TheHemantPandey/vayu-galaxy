"use client";

import React from "react";

interface HeroVisualProps {
  visualRef?: React.RefObject<HTMLDivElement | null>;
}

/**
  * Hero background visual layers.
  * Layer 1: Earth/space video background (bg.mp4).
  * Layer 2: Subtle overlay for text readability.
  * Layer 3: Atmospheric vignette blend.
  */
export default function HeroVisual({ visualRef }: HeroVisualProps) {
  return (
    <div
      ref={visualRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#050505]"
      aria-hidden="true"
    >
      {/* Loop video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Ambient radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_70%)] pointer-events-none" />

      {/* Bottom atmospheric blend fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
