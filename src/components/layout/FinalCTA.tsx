"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/**
 * FinalCTA — Cinematic closing section of the Vayu Galaxy homepage.
 * Concludes the page story: "The future is something we can design."
 */
export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  const opacityVal = shouldReduceMotion ? 1 : 0;
  const yVal = shouldReduceMotion ? 0 : 20;

  return (
    <section className="bg-[#050505] w-full border-t border-white/[0.04] py-24 md:py-36 lg:py-48 text-[#F4F2ED] relative z-10 overflow-hidden">
      
      {/* Subtle blueprint grid background overlay */}
      <div className="absolute inset-0 footer-grid-bg pointer-events-none opacity-20 z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 font-space-grotesk flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: opacityVal, y: yVal }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow Label */}
          <span className="block text-[0.7rem] sm:text-[0.75rem] font-sans tracking-[0.25em] text-[#B7A27A] uppercase mb-1">
            07 &mdash; THE FINAL HORIZON
          </span>

          {/* Large display headline */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-[#F4F2ED] uppercase leading-tight tracking-tight max-w-3xl">
            THE FUTURE DOESN&apos;T HAVE TO BE WAITED FOR.
          </h2>

          {/* Supporting Copy */}
          <p className="text-[#A09F9A] text-base md:text-lg font-light leading-relaxed max-w-xl mb-4">
            We invite you to understand, follow, and become part of the journey behind Vayu Galaxy as we explore new limits for human life.
          </p>

          {/* Architectural solid button CTA */}
          <Link
            href="/book-now"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#F4F2ED] text-[#050505] hover:bg-transparent border border-transparent hover:border-[#F4F2ED] hover:text-[#F4F2ED] text-xs font-mono font-extrabold tracking-[0.25em] uppercase transition-all duration-500 rounded-sm group mt-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4F2ED]"
          >
            BOOK REGISTRATION
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none">
              →
            </span>
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
