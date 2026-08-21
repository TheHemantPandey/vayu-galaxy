"use client";

import React from "react";
import { Reveal } from "@/components/animation/Reveal";

/**
 * WhyWeBuild Section
 * Editorial Layout presenting the philosophical motivation behind Vayu Galaxy.
 * Designed with a premium architectural identity, structural grids, off-white text, and warm gold accents.
 */
export default function WhyWeBuild() {
  return (
    <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-[10%] border-t border-white/[0.06] relative overflow-hidden font-space-grotesk">
      {/* Subtle Background Grid Line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Sidebar Chapter Indicator / Architectural Grid Accent */}
        <div className="col-span-1 lg:col-span-4 flex flex-col border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-6 lg:pb-0 lg:pr-8 w-full">
          <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
            <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase mb-4">
              02 &mdash; PHILOSOPHICAL INCEPTION
            </span>
            <div className="flex flex-col gap-1.5 font-mono text-[10px] text-zinc-500 tracking-wider">
              <span>PROJECT MONOGRAPH</span>
              <span>ALTITUDE RANGE: 1,000M - 5,000M</span>
              <span>MOTIVATION DECREE</span>
            </div>
            {/* Minimal architectural crosshair decorative element */}
            <div className="mt-8 hidden lg:flex items-center gap-3">
              <span className="w-6 h-[1px] bg-white/10" />
              <span className="text-[9px] font-mono text-zinc-600">SYS.REF // SKY.LVL</span>
            </div>
          </Reveal>
        </div>

        {/* Main Editorial Copy Block */}
        <div className="col-span-1 lg:col-span-8 flex flex-col w-full">
          {/* Main Editorial Heading */}
          <div className="mb-8 md:mb-12">
            <Reveal style="fade" direction="up" duration={1.0} delay={0.15}>
              <h2 className="font-display font-light uppercase tracking-tight text-[#F4F2ED] leading-[1.1] text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] break-words">
                WE NEED TO IMAGINE<br />WHAT COMES NEXT.
              </h2>
            </Reveal>
          </div>

          {/* Staggered Paragraph Narrative */}
          <div className="flex flex-col gap-8 md:gap-10 border-t border-white/[0.08] pt-8 md:pt-10">
            <Reveal style="fade" direction="up" duration={1.0} delay={0.25}>
              <p className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] leading-[1.6] font-light text-[#E4E2DC] text-left max-w-3xl">
                Humanity continues to grow, move, build and search for new possibilities. Vayu Galaxy explores what could happen if we create a new environment above the land.
              </p>
            </Reveal>

            <Reveal style="fade" direction="up" duration={1.0} delay={0.35}>
              <p className="text-[0.925rem] sm:text-[0.975rem] md:text-[1.025rem] leading-[1.7] font-light text-[#A09F9A] text-left max-w-2xl">
                As the boundaries of our physical ground are challenged, the sky represents the next logical step. Not as an escape, but as a deliberate extension of human architecture, movement, and life.
              </p>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
