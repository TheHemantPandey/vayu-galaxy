"use client";

import React from "react";
import { Reveal } from "@/components/animation/Reveal";

/**
 * LifeAndExperience Section
 * Explores what human life could look like inside the Vayu Galaxy conceptual environment.
 * Features a unified editorial layout with a zone blueprint visual on the right
 * and a connected sequence of the four human activities.
 */
export default function LifeAndExperience() {
  const experiences = [
    {
      num: "01",
      label: "LIVE",
      title: "EVERYDAY LIFE",
      desc: "Speculative residential zones designed to establish a quiet, balanced environment for future daily living.",
    },
    {
      num: "02",
      label: "WORK",
      title: "COLLABORATION & CREATION",
      desc: "Flexible business chambers and creation studios configured above the land to support global connectivity.",
    },
    {
      num: "03",
      label: "MEET",
      title: "COMMUNITY PLATFORMS",
      desc: "Shared public galleries and open assembly grids designed to foster high-altitude social interaction.",
    },
    {
      num: "04",
      label: "EXPERIENCE",
      title: "RECREATION & EVENTS",
      desc: "Dedicated event structures, high-altitude observation, and spaces for travel and leisure.",
    },
  ];

  return (
    <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-[10%] border-t border-white/[0.06] relative overflow-hidden font-space-grotesk">
      {/* Structural Background Grid Line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        
        {/* Editorial Heading Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          
          <div className="col-span-1 lg:col-span-6">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
              <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase mb-4 sm:mb-6">
                04 &mdash; LIFE &amp; EXPERIENCE
              </span>
              <h2 className="font-display font-light uppercase tracking-tight text-[#F4F2ED] leading-[1.1] text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] mb-2 break-words">
                LIFE, ABOVE
              </h2>
              <h2 className="font-display font-medium uppercase tracking-tight text-[#F4F2ED] leading-[1.1] text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] mb-6 break-words">
                THE ORDINARY.
              </h2>
            </Reveal>
          </div>

          <div className="col-span-1 lg:col-span-6 lg:pt-14">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
              <p className="text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem] leading-[1.65] font-light text-[#A09F9A] text-left max-w-2xl">
                We are designing a unified environment where everyday life, collaborative work, social gatherings, and high-altitude recreation exist together above the land.
              </p>
            </Reveal>
          </div>

        </div>

        {/* Abstract Architectural Diagram: ONE ENVIRONMENT -> MANY EXPERIENCES */}
        <div className="w-full mb-20 md:mb-28">
          <Reveal style="fade" duration={1.2} delay={0.3}>
            <div className="w-full border border-white/[0.08] bg-white/[0.005] p-6 sm:p-8 rounded-xl flex flex-col justify-between relative overflow-hidden select-none">
              
              {/* Technical/Coordinate Metadata Header */}
              <div className="flex justify-between items-center border-b border-white/[0.08] pb-4 mb-6 font-mono text-[9px] text-zinc-500 tracking-wider">
                <span>PLATE 04 // SCHEMATIC PLOT</span>
                <span>COORDS: DE-NCR // ALT: 3000M</span>
                <span>STATUS: CONCEPTUAL LAYOUT</span>
              </div>

              {/* Graphic Blueprint: Unified Plate Divided into Interconnected Zones */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full relative z-10">
                {/* Zone 1: Live */}
                <div className="border border-white/[0.06] bg-gradient-to-b from-white/[0.01] to-transparent p-4 flex flex-col justify-between h-[120px] rounded-sm relative">
                  <span className="text-[9px] font-mono text-zinc-600">ZONE 01 // RESIDENTIAL</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#F4F2ED] tracking-widest uppercase">LIVE</span>
                    <span className="text-[8px] font-mono text-[#B7A27A] mt-1 tracking-wider">HABITATION MODULE</span>
                  </div>
                  {/* Decorative horizontal tick */}
                  <span className="absolute bottom-3 right-3 w-1.5 h-1.5 border-r border-b border-white/20" />
                </div>

                {/* Zone 2: Work */}
                <div className="border border-white/[0.06] bg-gradient-to-b from-white/[0.01] to-transparent p-4 flex flex-col justify-between h-[120px] rounded-sm relative">
                  <span className="text-[9px] font-mono text-zinc-600">ZONE 02 // CREATION</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#F4F2ED] tracking-widest uppercase">WORK</span>
                    <span className="text-[8px] font-mono text-[#B7A27A] mt-1 tracking-wider">COLLABORATION CHAMBERS</span>
                  </div>
                  {/* Decorative horizontal tick */}
                  <span className="absolute bottom-3 right-3 w-1.5 h-1.5 border-r border-b border-white/20" />
                </div>

                {/* Zone 3: Meet */}
                <div className="border border-white/[0.06] bg-gradient-to-b from-white/[0.01] to-transparent p-4 flex flex-col justify-between h-[120px] rounded-sm relative">
                  <span className="text-[9px] font-mono text-zinc-600">ZONE 03 // ASSEMBLY</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#F4F2ED] tracking-widest uppercase">MEET</span>
                    <span className="text-[8px] font-mono text-[#B7A27A] mt-1 tracking-wider">COMMUNITY PLAZA</span>
                  </div>
                  {/* Decorative horizontal tick */}
                  <span className="absolute bottom-3 right-3 w-1.5 h-1.5 border-r border-b border-white/20" />
                </div>

                {/* Zone 4: Experience */}
                <div className="border border-[#B7A27A]/25 bg-[#DFCFB7]/3 p-4 flex flex-col justify-between h-[120px] rounded-sm relative">
                  {/* Visual grid overlay for highlighted zone */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(223,207,183,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(223,207,183,0.02)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
                  <span className="text-[9px] font-mono text-[#B7A27A]">ZONE 04 // LEISURE</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#F4F2ED] tracking-widest uppercase">EXPERIENCE</span>
                    <span className="text-[8px] font-mono text-[#B7A27A] mt-1 tracking-wider">EVENT DECK</span>
                  </div>
                  {/* Decorative horizontal tick */}
                  <span className="absolute bottom-3 right-3 w-1.5 h-1.5 border-r border-b border-[#B7A27A]/30" />
                </div>
              </div>

              {/* Connected Base Guideline illustrating the Unified Environment Core */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex justify-between items-center text-zinc-500 font-mono text-[9px] tracking-wider">
                <span>[X_DATUM_CORE_LAYER]</span>
                <span className="text-[#B7A27A]">ONE INTEGRATED STRUCTURAL GRID</span>
                <span>[Y_ALTITUDE_3000M]</span>
              </div>

            </div>
          </Reveal>
        </div>

        {/* Connected Experience Row: Renders Live, Work, Meet, Experience */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {experiences.map((exp, idx) => (
            <div
              key={exp.label}
              className={`py-8 sm:py-10 ${
                idx === 0 ? "md:pr-6 lg:pr-8" : idx === 3 ? "md:pl-6 lg:pl-8" : "md:px-6 lg:px-8"
              } flex flex-col justify-start relative`}
            >
              {/* Linked top indicator line to show they are nodes of a single track */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B7A27A]/20 pointer-events-none hidden md:block">
                {/* Visual node anchor */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#B7A27A] absolute top-[-2px] left-0" />
              </div>

              <Reveal style="fade" direction="up" duration={0.8} delay={0.2 + idx * 0.1}>
                <span className="block font-mono text-[0.65rem] text-[#B7A27A] mb-3 select-none">
                  {exp.num} &mdash; INTEGRATED NODE
                </span>
                
                <span className="block text-xs font-mono tracking-wider text-zinc-500 mb-1 uppercase">
                  {exp.label}
                </span>

                <h4 className="font-display text-sm sm:text-base font-semibold tracking-wider text-[#F4F2ED] mb-3 uppercase">
                  {exp.title}
                </h4>
                
                <p className="text-[0.85rem] sm:text-[0.9rem] leading-[1.65] font-light text-[#8E8E93] text-left">
                  {exp.desc}
                </p>
              </Reveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
