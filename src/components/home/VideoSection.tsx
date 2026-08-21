"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function VideoSection() {
  const shouldReduceMotion = useReducedMotion();
  const opacityVal = shouldReduceMotion ? 1 : 0;
  const yVal = shouldReduceMotion ? 0 : 15;

  return (
    <section className="relative w-full bg-[#111113] text-[#F4F4F5] font-space-grotesk overflow-hidden border-t border-white/[0.08]">
      {/* Subtle Technical Grid & Deep Accent Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none z-0" />
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[120px] sm:h-[180px] bg-[#DFCFB7]/3 blur-[110px] sm:blur-[140px] rounded-full pointer-events-none z-0" />

      {/* 1. Header Section */}
      <div className="max-w-4xl mx-auto pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: opacityVal, y: yVal }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 mb-2.5 sm:mb-3 flex-wrap justify-center"
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-950/20 border border-[#B7A27A]/25 text-[#B7A27A] text-[9px] sm:text-[10px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A27A] animate-pulse" />
            PROJECT PREVIEW
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-[#D4B982] uppercase">
            CINEMATIC REVEAL
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: opacityVal, y: yVal }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-[#FAFAFA] mb-2 sm:mb-3 leading-tight break-words"
        >
          THE 8TH WONDER IN MOTION
        </motion.h2>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: opacityVal, y: yVal }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xs sm:text-sm md:text-base text-[#A1A1AA] font-light max-w-xl leading-relaxed mx-auto"
        >
          A glimpse into the monumental scale, atmospheric systems, and architectural vision engineered for the next era.
        </motion.p>
      </div>

      {/* 2. Full-Width Edge-to-Edge Video Container */}
      <div className="relative w-full aspect-video sm:aspect-[21/9] min-h-[320px] max-h-[85vh] bg-black z-10 border-y border-white/[0.08] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover block"
        >
          <source src="/assets/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 3. Bottom Sub-Bar */}
      <div className="relative z-10 bg-[#18181B]/90 backdrop-blur-md px-4 sm:px-6 md:px-8 py-4 sm:py-5 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          {/* Left Metadata */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#B7A27A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7A27A] animate-pulse" />
              LIVE ARCHITECTURE STREAM
            </div>
            <span className="hidden sm:inline-block text-zinc-600">•</span>
            <span className="text-[11px] sm:text-xs text-[#A1A1AA] font-light">
              Township Habitat & Defense Grid Model
            </span>
          </div>

          {/* Right Status Tags */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <span className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[9px] sm:text-[10px] font-mono text-[#D4D4D8] uppercase tracking-wider">
              4K CINEMATIC
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[9px] sm:text-[10px] font-mono text-[#D4D4D8] uppercase tracking-wider">
              ATMOSPHERIC DEFENSE
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[9px] sm:text-[10px] font-mono text-[#D4B982] uppercase tracking-wider">
              VAYU GALAXY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}