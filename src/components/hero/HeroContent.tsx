"use client";

import React from "react";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroContentProps {
  contentRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * Hero typographic focal content.
 * Follows a premium editorial and architectural hierarchy.
 */
export default function HeroContent({ contentRef }: HeroContentProps) {
  const lenis = useLenis();
  const reducedMotion = useReducedMotion();

  const handleExploreScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo("#about", {
        duration: reducedMotion ? 0 : 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const element = document.getElementById("about");
      if (element) {
        element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      }
    }
  };

  return (
    <div
      ref={contentRef}
      className="relative z-10 flex flex-col items-center max-w-4xl w-full text-center mt-6 sm:mt-10"
    >
      {/* Small Label */}
      <div className="overflow-hidden py-0.5 -my-0.5 mb-4 sm:mb-6">
        <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.4em] text-[#B7A27A] uppercase hero-label">
          VAYU GALAXY
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-display uppercase tracking-[-0.01em] text-[#F4F2ED] leading-[1.05] flex flex-col gap-1.5 sm:gap-3">
        <div className="overflow-hidden py-1 -my-1">
          <span className="block text-[clamp(1.8rem,3vw+1rem,3.2rem)] font-light tracking-[0.05em] hero-title-vayu">
            A FUTURE VISION FOR
          </span>
        </div>
        <div className="overflow-hidden py-1 -my-1">
          <span className="block text-[clamp(2.2rem,4.5vw+1.5rem,6rem)] font-medium tracking-[-0.02em] text-[#F4F2ED] hero-title-galaxy leading-[0.95]">
            LIFE ABOVE<span className="hidden sm:inline"> </span><br className="inline sm:hidden" />THE LAND
          </span>
        </div>
      </h1>

      {/* Supporting Copy */}
      <div className="overflow-hidden py-0.5 -my-0.5 mt-5 sm:mt-8 max-w-xl">
        <p className="hero-subtitle text-[1rem] sm:text-[1.15rem] font-light text-[#D1CFC9] leading-relaxed">
          Exploring new possibilities for human habitation, movement, and development.
        </p>
      </div>

      {/* CTA Button */}
      <div className="overflow-hidden py-1 -my-1 mt-7 sm:mt-10">
        <a
          href="#about"
          onClick={handleExploreScroll}
          className="hero-cta px-6 py-3.5 border border-[#F4F2ED]/25 hover:border-[#B7A27A] text-[#F4F2ED] hover:text-[#050505] hover:bg-[#B7A27A] text-[0.75rem] font-mono tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 group focus:outline-none"
        >
          <span>EXPLORE VAYU GALAXY</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
}
