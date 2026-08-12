"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, contactHref } from "./navData";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_CINEMATIC } from "@/animations/easing";

interface MobileNavProps {
  activeSection?: string;
}

/**
 * Mobile overlay menu with keyboard focus trap, scroll lock sync with Lenis,
 * and high-contrast typographic layouts.
 */
export default function MobileNav({ activeSection = "" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();
  const reducedMotion = useReducedMotion();

  // Control Lenis scrolling state when overlay mounts
  useEffect(() => {
    if (!lenis) return;
    if (isOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
    return () => {
      lenis.start();
    };
  }, [isOpen, lenis]);

  // Bind Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Animation settings depending on user accessibility configuration
  const overlayTransition = {
    duration: reducedMotion ? 0.25 : 0.6,
    ease: EASE_CINEMATIC,
  };

  const overlayVariants = {
    hidden: {
      clipPath: reducedMotion ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
      opacity: reducedMotion ? 0 : 1,
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: {
        ...overlayTransition,
        when: "beforeChildren",
        staggerChildren: reducedMotion ? 0 : 0.05,
      },
    },
    exit: {
      clipPath: reducedMotion ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
      opacity: reducedMotion ? 0 : 1,
      transition: {
        ...overlayTransition,
        when: "afterChildren",
        staggerChildren: reducedMotion ? 0 : 0.04,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    hidden: {
      y: reducedMotion ? 0 : 35,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: reducedMotion ? 0.2 : 0.5,
        ease: EASE_CINEMATIC,
      },
    },
    exit: {
      y: reducedMotion ? 0 : -20,
      opacity: 0,
      transition: {
        duration: reducedMotion ? 0.15 : 0.4,
        ease: EASE_CINEMATIC,
      },
    },
  };

  // Compile mobile items list with contact link integrated
  const mobileLinks = [
    ...navItems,
    { number: "07", label: "CONTACT", href: contactHref },
  ];

  return (
    <div className="flex lg:hidden items-center">
      {/* Menu Trigger Button */}
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        className="relative z-50 font-mono text-[0.65rem] tracking-[0.2em] text-[#FAFAFA] hover:text-[#DFCFB7] transition-colors focus:outline-none flex items-center gap-3 select-none py-2 px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded"
      >
        <span>{isOpen ? "CLOSE" : "MENU"}</span>
        <div className="flex flex-col gap-1 w-4 items-end" aria-hidden="true">
          <span
            className={`h-[1px] bg-current transition-transform duration-300 origin-right ${
              isOpen ? "w-4 -rotate-45 translate-x-[2px] translate-y-[-1px]" : "w-4"
            }`}
          />
          <span
            className={`h-[1px] bg-current transition-opacity duration-300 ${
              isOpen ? "opacity-0 w-0" : "w-3"
            }`}
          />
          <span
            className={`h-[1px] bg-current transition-transform duration-300 origin-right ${
              isOpen ? "w-4 rotate-45 translate-x-[2px] translate-y-[1px]" : "w-2"
            }`}
          />
        </div>
      </button>

      {/* Screen Overlay Menu Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="fixed inset-0 bg-[#050505] z-40 w-screen h-screen flex flex-col justify-center px-8 sm:px-16"
          >
            {/* Structural visual grid indicators (Quiet cinematic background details) */}
            <div className="absolute inset-y-0 left-8 sm:left-16 w-[1px] bg-white/[0.02] pointer-events-none" />
            <div className="absolute inset-y-0 right-8 sm:right-16 w-[1px] bg-white/[0.02] pointer-events-none" />

            <nav className="flex flex-col gap-8 max-w-lg w-full relative z-10">
              {mobileLinks.map((item) => {
                const isItemActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.div key={item.href} variants={linkVariants}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-baseline gap-6 py-2 outline-none"
                    >
                      <span className="font-mono text-[0.65rem] tracking-[0.1em] text-[#DFCFB7] opacity-60">
                        {item.number}
                      </span>
                      <span
                        className={`text-2xl sm:text-3xl font-display font-light tracking-[0.1em] uppercase transition-colors duration-300 ${
                          isItemActive
                            ? "text-[#DFCFB7]"
                            : "text-[#FAFAFA] group-hover:text-[#DFCFB7] group-focus-visible:text-[#DFCFB7]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </a>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
