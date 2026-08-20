import React from "react";
import { Reveal } from "@/components/animation/Reveal";

export default function BlogHero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 md:px-8 lg:px-[10%] bg-[#050505] overflow-hidden border-b border-white/[0.08] font-space-grotesk select-none">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40" />
      
      {/* Subtle grid axis divider */}
      <div className="absolute left-[10%] right-[10%] bottom-0 h-[1px] bg-white/[0.03] z-0" />

      <div className="max-w-[1200px] w-full mx-auto relative z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-10">
        
        {/* Left Side: Typography Block */}
        <div className="max-w-[800px] text-left">
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-6 overflow-hidden">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
              <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.25em] sm:tracking-[0.35em] text-[#DFCFB7] uppercase select-none">
                Vayu Galaxy / Journal
              </span>
            </Reveal>
          </div>

          {/* Heading */}
          <div className="mb-6 sm:mb-8 overflow-hidden">
            <Reveal style="fade" direction="up" duration={1.0} delay={0.25}>
              <h1 className="font-display font-medium tracking-tight uppercase leading-[1.1] text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] text-[#FAFAFA]">
                Ideas for the <br className="hidden sm:inline" />
                World of Tomorrow
              </h1>
            </Reveal>
          </div>

          {/* Supporting Description */}
          <div className="max-w-[520px]">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.4}>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-[1.75]">
                Exploring the technologies, ideas, and systems shaping the future of living.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Right Side: Subtle Page Marker */}
        <div className="shrink-0 md:text-right">
          <Reveal style="fade" direction="up" duration={0.8} delay={0.55}>
            <span className="block text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.25em] text-zinc-500 uppercase select-none border-l md:border-l-0 md:border-r border-white/10 pl-3 md:pl-0 md:pr-3 py-1">
              01 // JOURNAL_MARKER
            </span>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

