"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  const opacityVal = shouldReduceMotion ? 1 : 0;
  const yVal = shouldReduceMotion ? 0 : 15;

  return (
    <section className="bg-black w-full border-t border-white/5 py-20 md:py-28 text-[#FAFAFA] relative z-10 overflow-hidden select-none">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 footer-grid-bg pointer-events-none opacity-30 z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 font-space-grotesk">
        <motion.div
          initial={{ opacity: opacityVal, y: yVal }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="border border-white/5 bg-white/[0.01] py-14 px-8 md:py-20 md:px-16 relative overflow-hidden flex flex-col items-center gap-6"
        >
          {/* Architectural corner ticks */}
          <div className="absolute top-0 left-0 w-5 h-[1px] bg-[#DFCFB7]/30" />
          <div className="absolute top-0 left-0 w-[1px] h-5 bg-[#DFCFB7]/30" />
          
          <div className="absolute top-0 right-0 w-5 h-[1px] bg-[#DFCFB7]/30" />
          <div className="absolute top-0 right-0 w-[1px] h-5 bg-[#DFCFB7]/30" />
          
          <div className="absolute bottom-0 left-0 w-5 h-[1px] bg-[#DFCFB7]/30" />
          <div className="absolute bottom-0 left-0 w-[1px] h-5 bg-[#DFCFB7]/30" />
          
          <div className="absolute bottom-0 right-0 w-5 h-[1px] bg-[#DFCFB7]/30" />
          <div className="absolute bottom-0 right-0 w-[1px] h-5 bg-[#DFCFB7]/30" />

          <span className="text-[10px] font-mono tracking-[0.25em] text-[#DFCFB7] uppercase select-none">
            NEXT STEPS
          </span>

          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight leading-tight select-none text-center">
            LET&apos;S WORK TOGETHER.
          </h2>

          <p className="text-[#8E8E93] text-sm md:text-base font-light leading-relaxed max-w-xl select-none text-center">
            Have an idea, want to connect with Vayu Galaxy, or want to book a free visit?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center border border-white/10 hover:border-[#DFCFB7] text-[#FAFAFA] hover:text-[#050505] hover:bg-[#DFCFB7] px-8 py-3.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7]"
            >
              CONTACT US{" "}
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-[4px] motion-reduce:transform-none">
                →
              </span>
            </Link>

            {/* Book Now Button */}
            <Link
              href="/book-now"
              className="w-full sm:w-auto text-center border border-[#DFCFB7]/30 hover:border-[#DFCFB7] text-[#DFCFB7] hover:text-[#050505] hover:bg-[#DFCFB7] px-8 py-3.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7]"
            >
              BOOK NOW{" "}
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-[4px] motion-reduce:transform-none">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
