"use client";

import React, { useState, useRef } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface NavbarProps {
  activeSection?: string;
}

/**
 * Top orchestrator header component.
 * Monitors scroll metrics to transition background styles and toggle visibility directionally.
 * Optimizes performance by maintaining scroll progress states inside useRef tokens.
 */
export default function Navbar({ activeSection = "" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  // Preserve mutable scroll states across component renders
  const lastScrollY = useRef(0);
  const isScrolled = useRef(false);
  const isVisible = useRef(true);

  useLenis((lenis) => {
    const currentScrollY = lenis.scroll;
    const direction = currentScrollY > lastScrollY.current ? "down" : "up";

    // Handle Top vs Scrolled threshold (20px)
    const nextScrolled = currentScrollY > 20;
    if (nextScrolled !== isScrolled.current) {
      isScrolled.current = nextScrolled;
      setScrolled(nextScrolled);
    }

    // Skip vertical translate adjustments if reduced motion is enabled
    if (reducedMotion) {
      lastScrollY.current = currentScrollY;
      return;
    }

    // Hide on Scroll Down, Show on Scroll Up (Threshold 150px)
    if (direction === "down" && currentScrollY > 150) {
      if (isVisible.current) {
        isVisible.current = false;
        setVisible(false);
      }
    } else if (direction === "up" || currentScrollY <= 150) {
      if (!isVisible.current) {
        isVisible.current = true;
        setVisible(true);
      }
    }

    lastScrollY.current = currentScrollY;
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        reducedMotion
          ? "transition-[background-color,backdrop-filter,border-color,padding] duration-200"
          : "transition-[transform,background-color,backdrop-filter,border-color,padding] duration-500 ease-cinematic"
      } ${
        scrolled
          ? "bg-[#050505]/70 backdrop-blur-md border-b border-white/5 py-3.5"
          : "bg-transparent border-b border-transparent py-6"
      } ${visible || reducedMotion ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Text-based Refined Wordmark */}
        <a
          href="#"
          className="group flex flex-col font-display font-light text-[0.7rem] tracking-[0.25em] leading-tight text-[#FAFAFA] select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded p-0.5"
          aria-label="Vayu Galaxy Home"
        >
          <span>VAYU</span>
          <span className="text-[#8E8E93] group-hover:text-white transition-colors duration-300">
            GALAXY
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <DesktopNav activeSection={activeSection} />

        {/* Mobile Navigation Burger & Overlay */}
        <MobileNav activeSection={activeSection} />
      </div>
    </header>
  );
}
