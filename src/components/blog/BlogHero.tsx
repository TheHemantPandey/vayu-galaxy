import React from "react";

export default function BlogHero() {
  return (
    <section className="relative py-24 px-6 md:px-[10%] flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-[#050505] border-b border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="relative z-10 max-w-[800px] w-full">
        <span className="font-space-grotesk text-[13px] md:text-[14px] font-semibold uppercase tracking-[4px] text-[#DFCFB7] mb-4 block">
          VAYU GALAXY JOURNAL
        </span>
        <h1 className="font-space-grotesk text-[36px] md:text-[60px] font-semibold uppercase tracking-[1.5px] leading-tight mb-6 text-[#FAFAFA] [text-shadow:2px_2px_15px_rgba(0,0,0,0.9)]">
          IDEAS FOR THE WORLD OF TOMORROW
        </h1>
        <p className="font-space-grotesk text-[16px] md:text-[18px] text-[#A0A0A0] leading-relaxed max-w-[600px] mx-auto font-normal">
          Exploring the technologies, ideas, and systems shaping the future of living.
        </p>
      </div>
    </section>
  );
}
