import React from "react";
import Hero from "@/components/hero/Hero";

/**
 * Entry page shell mounting the Vayu Galaxy Cinematic Hero.
 * Incorporates a marked temporary developer spacer below the Hero viewport.
 */
export default function Home() {
  return (
    <main className="relative bg-[#050505] text-[#FAFAFA] flex flex-col select-none">
      {/* Cinematic Hero Entrance Section */}
      <Hero />

      {/* 
        TEMPORARY DEVELOPER SPACER:
        ---------------------------
        This spacer is placed here strictly as a temporary development testing mechanism 
        to evaluate the Hero scroll-out parallax translations and the Navbar transition. 
        It contains no mock sections or placeholder marketing assets, and will be replaced 
        by the next official section immediately upon approval.
      */}
      <div
        className="h-[150vh] w-full flex items-center justify-center bg-[#050505]"
        aria-hidden="true"
      >
        <div className="text-center font-mono text-[0.55rem] tracking-[0.2em] text-[#8E8E93]/30">
          [ TEMPORARY DEV SPACE // END OF HERO PARALLAX ]
        </div>
      </div>
    </main>
  );
}
