"use client";

import React from "react";
import { Reveal } from "@/components/animation/Reveal";

/**
 * FutureVision Section
 * Outlines Vayu Galaxy's long-term vision beyond the first colony,
 * describing global inspiration and the "8th Wonder" ambition.
 * Features an asymmetrical composition and an abstract HTML/CSS expansion visual.
 * Light Theme Edition.
 */
export default function FutureVision() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#111111] py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-[10%] border-t border-b border-black/[0.06] relative overflow-hidden font-space-grotesk">
      {/* Structural Background Grid Line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        
        {/* Connection Eyebrow Transition */}
        <div className="flex flex-col items-center gap-2 mb-16 md:mb-20 text-center font-mono text-[9px] tracking-[0.25em] text-zinc-400 uppercase select-none">
          <span>ONE COLONY</span>
          <span className="text-[#9E824C] animate-pulse">&darr;</span>
          <span className="text-[#9E824C]">A GROWING VISION</span>
          <span className="text-[#9E824C] animate-pulse">&darr;</span>
          <span className="text-[#9E824C]">A POSSIBILITY FOR THE WORLD</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Narrative */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center w-full">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
              <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.3em] text-[#9E824C] uppercase mb-4 sm:mb-6">
                06 &mdash; LONG-TERM AMBITION
              </span>
              <h2 className="font-display font-light uppercase tracking-tight text-[#111111] leading-[1.1] text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] mb-6 break-words">
                ONE VISION. <br className="hidden sm:inline" />A MUCH LARGER FUTURE.
              </h2>
            </Reveal>

            {/* Core Aspirational Copy */}
            <div className="space-y-6 sm:space-y-8 text-left max-w-2xl border-l border-black/[0.08] pl-6 lg:pl-8">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
                <p className="text-[1.05rem] sm:text-[1.15rem] leading-[1.65] font-light text-[#3A3A35]">
                  Vayu Galaxy begins with the vision of one independent elevated environment, but the long-term ambition is to explore how such ideas could evolve, expand and influence future human development beyond a single location.
                </p>
              </Reveal>

              {/* Global Vision: From India. Toward the World */}
              <Reveal style="fade" direction="up" duration={0.8} delay={0.35}>
                <span className="block text-xs font-mono tracking-wider text-[#9E824C] mb-2 uppercase">
                  FROM INDIA. TOWARD THE WORLD.
                </span>
                <p className="text-[0.925rem] sm:text-[0.975rem] leading-[1.7] font-light text-[#6A6A64]">
                  The first vision is a beginning, starting from India with the long-term possibility of creating ideas and environments that can inspire future development around the world. We look beyond conventional geographical boundaries to chart new dimensions of living.
                </p>
              </Reveal>

              {/* Aspirational 8th Wonder Goal */}
              <Reveal style="fade" direction="up" duration={0.8} delay={0.45}>
                <span className="block text-xs font-mono tracking-wider text-zinc-400 mb-2 uppercase">
                  THE SPECS OF TOMORROW
                </span>
                <p className="text-[0.925rem] sm:text-[0.975rem] leading-[1.7] font-light text-[#6A6A64]">
                  By connecting advanced structural innovation with everyday human needs, Vayu Galaxy aspires to inspire large-scale architectural and technological ambition. The long-term goal is to design an ecosystem that stands conceptually as an 8th Wonder of modern engineering.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Abstract Expanding Blueprint Visual */}
          <div className="col-span-1 lg:col-span-5 flex justify-center w-full">
            <Reveal style="fade" duration={1.2} delay={0.3} className="w-full max-w-[400px]">
              <div className="w-full border border-white/[0.08] bg-[#050505] aspect-square rounded-lg flex items-center justify-center relative overflow-hidden select-none">
                
                {/* Horizontal Horizon Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B7A27A]/30 to-transparent z-0" />
                
                {/* Vertical Axis Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.08] to-transparent z-0" />

                {/* Diagonal Alignment Guidelines */}
                <div className="absolute w-[140%] h-[1px] bg-white/[0.02] rotate-45 z-0" />
                <div className="absolute w-[140%] h-[1px] bg-white/[0.02] -rotate-45 z-0" />

                {/* Outer Ring (BEYOND) */}
                <div className="w-64 h-64 border border-dashed border-white/5 rounded-full absolute z-5 flex items-center justify-center">
                  <span className="absolute top-2 right-2 font-mono text-[7px] text-zinc-600">LIMIT_BEYOND</span>
                  <span className="absolute bottom-2 left-2 font-mono text-[7px] text-zinc-600">EXP_03</span>
                </div>

                {/* Middle Ring (MORE) */}
                <div className="w-40 h-40 border border-dashed border-[#B7A27A]/15 rounded-full absolute z-10 flex items-center justify-center">
                  {/* Secondary nodes representing expanding vision */}
                  <div className="w-1.5 h-1.5 rounded-full border border-[#B7A27A]/50 bg-[#050505] absolute top-0 -translate-y-1/2" />
                  <div className="w-1.5 h-1.5 rounded-full border border-[#B7A27A]/50 bg-[#050505] absolute bottom-0 translate-y-1/2" />
                  <div className="w-1.5 h-1.5 rounded-full border border-[#B7A27A]/50 bg-[#050505] absolute left-0 -translate-x-1/2" />
                  <div className="w-1.5 h-1.5 rounded-full border border-[#B7A27A]/50 bg-[#050505] absolute right-0 translate-x-1/2" />
                  <span className="absolute top-1 left-2 font-mono text-[7px] text-zinc-500">MORE (NETWORK)</span>
                </div>

                {/* Inner Colony Node (ONE) */}
                <div className="relative z-20 flex flex-col items-center">
                  {/* Glowing central node */}
                  <div className="w-4.5 h-4.5 rounded-full bg-[#B7A27A] flex items-center justify-center shadow-[0_0_15px_rgba(183,162,122,0.4)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#050505]" />
                  </div>
                  <span className="absolute top-6 font-mono text-[8px] text-[#B7A27A] tracking-wider whitespace-nowrap bg-[#050505] px-1 border border-white/5 py-0.5 rounded-sm">
                    ONE (DATUM CORE)
                  </span>
                </div>

                {/* Corner Technical Labels */}
                <div className="absolute top-4 left-4 font-mono text-[8px] text-zinc-600">SYS_V2.0 // LONG_RANGE</div>
                <div className="absolute bottom-4 right-4 font-mono text-[8px] text-[#B7A27A] tracking-widest">[ ONE &rarr; MORE &rarr; BEYOND ]</div>

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
