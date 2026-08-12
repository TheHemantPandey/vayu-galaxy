"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import HeroVisual from "./HeroVisual";
import HeroContent from "./HeroContent";
import HeroMetadata from "./HeroMetadata";
import HeroScrollIndicator from "./HeroScrollIndicator";

/**
 * Main Cinematic Hero Section orchestrator.
 * Heights: 100svh on mobile, 100vh on desktop.
 * Coordinates entrance animations and scroll-based parallax translations.
 * Bypasses all motion and scale adjustments when reduced motion is preferred.
 */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const metadataRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      // 1. Setup initial load cinematic entrance sequence
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.5 },
      });

      if (reducedMotion) {
        // Immediate static layout with fast opacity reveals under reduced motion
        tl.fromTo(visualRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        tl.fromTo(
          [".hero-title-vayu", ".hero-title-galaxy", ".hero-subtitle"],
          { opacity: 0 },
          { opacity: 1, duration: 0.4, stagger: 0.05 },
          "-=0.2"
        );
        tl.fromTo(
          [metadataRef.current, indicatorRef.current],
          { opacity: 0 },
          { opacity: 1, duration: 0.3 },
          "-=0.1"
        );
        return;
      }

      // Standard cinematic reveal sequence (slow, deliberate, architectural)
      tl.fromTo(
        visualRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.2, ease: "power3.out" }
      );

      tl.fromTo(
        ".hero-title-vayu",
        { yPercent: 45, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.4 },
        "-=1.5"
      );

      tl.fromTo(
        ".hero-title-galaxy",
        { yPercent: 45, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.4 },
        "-=1.2"
      );

      tl.fromTo(
        ".hero-subtitle",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 0.65, duration: 1.0 },
        "-=0.8"
      );

      tl.fromTo(
        metadataRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.0 },
        "-=0.6"
      );

      tl.fromTo(
        indicatorRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0 },
        "-=0.8"
      );

      // 2. Setup Scroll Trigger Parallax Timeline (as user scrolls away)
      const trigger = containerRef.current;
      if (!trigger) return;

      // Parallax scroll constraints (quiet, slow, non-aggressive shifts)
      gsap.to(visualRef.current, {
        yPercent: 8, // subtle vertical shifting
        scale: 1.02, // subtle zoom
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        yPercent: -5, // subtle typographic upward lift
        opacity: 0, // typographic fadeout
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "80% top",
          scrub: true,
        },
      });

      gsap.to(metadataRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "50% top",
          scrub: true,
        },
      });

      gsap.to(indicatorRef.current, {
        opacity: 0,
        y: 8,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      });
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] lg:h-screen overflow-hidden flex items-center px-[7vw] lg:px-[9vw] bg-[#050505] border-b border-white/[0.03]"
      aria-label="Vayu Galaxy Entrance Visual"
    >
      {/* Background & Atmospheric Layers */}
      <HeroVisual visualRef={visualRef} />

      {/* Primary Display Typography */}
      <HeroContent contentRef={contentRef} />

      {/* HUD Telemetry Descriptors */}
      <HeroMetadata metadataRef={metadataRef} />

      {/* Sweep Line Scroll Indicator */}
      <HeroScrollIndicator indicatorRef={indicatorRef} />
    </section>
  );
}
