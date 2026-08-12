"use client";

import React, { useState } from "react";

interface HeroVisualProps {
  visualRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * Hero background visual layers.
 * Layer 1: Main concept image / background.
 * Layer 2: Subtle atmospheric vignette overlay.
 * Layer 3: Depth / radial ambient highlight layer.
 * 
 * If the image at `/assets/hero/hero-bg.jpg` does not exist or fails to load,
 * it falls back to a clean, restrained dark developer ambient state without mock details.
 */
export default function HeroVisual({ visualRef }: HeroVisualProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      ref={visualRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#050505]"
      aria-hidden="true"
    >
      {/* Layer 1: Primary Visual Image slot */}
      {!imageError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/assets/hero/hero-bg.jpg"
          alt="Vayu Galaxy Concept render slot"
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity pointer-events-none"
          onError={() => setImageError(true)}
        />
      )}

      {/* Layer 2: Ambient Radial Glow Vignette (Subtle depth/light layer) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

      {/* Layer 3: Bottom Vignette Fade (Atmospheric blend to next section) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
    </div>
  );
}
