"use client";

import React from "react";
import { Reveal } from "@/components/animation/Reveal";

/**
 * ColonyConcept Section
 * Introduces Vayu Galaxy as an envisioned elevated colony and human environment.
 * Features an asymmetrical layout with a typographic monograph on the left,
 * an abstract HTML/CSS elevation diagram on the right,
 * and an editorial layout for the four core areas of human purpose (Live, Move, Meet, Experience).
 */
export default function ColonyConcept() {

  return (
    <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-[10%] border-t border-white/[0.06] relative overflow-hidden font-space-grotesk">
      {/* Structural Background Grid Line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        
        {/* Phase 2 Primary Row: Editorial & Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          
          {/* Left Column: Typographic Narrative */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center w-full">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
              <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase mb-4 sm:mb-6">
                03 &mdash; THE COLONY CONCEPT
              </span>
              <h2 className="font-display font-light uppercase tracking-tight text-[#F4F2ED] leading-[1.1] text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] mb-6 break-words">
                A NEW PLACE<br />ABOVE THE LAND.
              </h2>
            </Reveal>

            <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
              <p className="text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem] leading-[1.65] font-light text-[#E4E2DC] text-left max-w-2xl">
                Vayu Galaxy is envisioned as a large elevated environment designed to explore a new dimension of human living, movement and experience.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Abstract Elevation Diagram (Pure HTML/CSS) */}
          <div className="col-span-1 lg:col-span-5 flex justify-center w-full">
            <Reveal style="fade" duration={1.2} delay={0.3} className="w-full max-w-[400px]">
              <div className="w-full border border-white/[0.08] bg-white/[0.01] p-6 sm:p-8 rounded-lg flex flex-col justify-between h-[360px] sm:h-[400px] relative select-none">
                {/* Horizontal reference guidelines */}
                <div className="absolute inset-x-0 top-[20%] border-t border-dashed border-white/[0.03]" />
                <div className="absolute inset-x-0 top-[50%] border-t border-dashed border-white/[0.03]" />
                <div className="absolute inset-x-0 top-[80%] border-t border-dashed border-white/[0.03]" />

                {/* Level 3: Vayu Galaxy conceptual space */}
                <div className="relative flex flex-col items-center z-10">
                  <div className="px-4 py-3 border border-[#B7A27A]/30 bg-gradient-to-br from-[#DFCFB7]/8 to-transparent rounded-sm w-full text-center relative overflow-hidden">
                    {/* Visual grid overlay for the colony node */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(223,207,183,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(223,207,183,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                    <span className="block text-[0.55rem] font-mono tracking-[0.2em] text-[#B7A27A] uppercase mb-1">PROJECT CONCEPT</span>
                    <span className="block text-xs sm:text-sm font-semibold tracking-widest text-[#F4F2ED] uppercase">VAYU GALAXY COLONY</span>
                    <span className="block text-[0.5rem] font-mono text-zinc-500 mt-1 uppercase tracking-wider">EST. LIMITS: +3,000M</span>
                  </div>
                </div>

                {/* Elevation Axis Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[30%] bottom-[15%] w-[1px] bg-gradient-to-b from-[#B7A27A] via-white/10 to-white/5 flex flex-col justify-around items-center z-0">
                  <span className="text-[0.5rem] font-mono text-[#B7A27A] bg-[#050505] px-1 border border-white/5 py-0.5 rounded-sm -translate-y-4">ALT: 3000M</span>
                  <span className="text-[0.5rem] font-mono text-zinc-600 bg-[#050505] px-1 py-0.5">ALT: 1500M</span>
                </div>

                {/* Level 2: Clouds level (represented typographically and geometrically) */}
                <div className="flex justify-between items-center text-zinc-500 font-mono text-[9px] w-full px-2 z-10 pointer-events-none">
                  <span>CLOUDBASE REFERENCE LEVEL</span>
                  <span>+1,500M</span>
                </div>

                {/* Level 1: Earth Datum */}
                <div className="relative flex flex-col w-full z-10 pt-4">
                  <div className="w-full h-[1px] bg-white/20 mb-2" />
                  <div className="flex justify-between items-center font-mono text-[9px] text-zinc-500">
                    <span className="tracking-wider uppercase">EARTH REFERENCE DATUM</span>
                    <span>0M</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
