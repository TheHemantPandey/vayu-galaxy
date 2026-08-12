"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getRevealVariants, RevealStyle, RevealDirection } from "@/animations/reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_CINEMATIC } from "@/animations/easing";

export interface RevealProps {
  children: React.ReactNode;
  style?: RevealStyle;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

/**
 * Reusable layout block reveal component.
 * Animates elements as they enter the browser viewport.
 * Automatically respects OS-level reduced-motion options.
 */
export function Reveal({
  children,
  style = "slide",
  direction = "up",
  delay = 0,
  duration = 1.0,
  threshold = 0.1,
  once = true,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: threshold, once });
  const reducedMotion = useReducedMotion();

  // Graceful fallback for reduced motion preferences
  const resolvedStyle = reducedMotion ? "fade" : style;
  const resolvedDirection = reducedMotion ? "none" : direction;
  const resolvedDuration = reducedMotion ? 0.3 : duration;

  const variants = getRevealVariants(
    resolvedStyle,
    resolvedDirection,
    delay,
    resolvedDuration
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export interface TextRevealProps {
  children: string;
  type?: "words" | "lines" | "chars";
  delay?: number;
  className?: string;
}

/**
 * High-performance text reveal animation.
 * Splits text at the word or letter level to create cinematic typographic entries.
 * Avoids causing layout reflows and keeps DOM depth minimal.
 */
export function TextReveal({
  children,
  type = "words",
  delay = 0,
  className = "",
}: TextRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  const reducedMotion = useReducedMotion();

  // If text splitting is disabled by reduced motion, render text normally
  if (reducedMotion) {
    return (
      <motion.p
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay }}
        className={className}
      >
        {children}
      </motion.p>
    );
  }

  // Handle word level splitting (standard / recommended)
  if (type === "words") {
    const words = children.split(" ");

    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.03,
          delayChildren: delay,
        },
      },
    };

    const wordVariants = {
      hidden: { y: "105%", opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: EASE_CINEMATIC,
        },
      },
    };

    return (
      <motion.p
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`flex flex-wrap ${className}`}
      >
        {words.map((word, idx) => (
          <span
            key={idx}
            className="inline-block overflow-hidden mr-[0.25em] py-[0.1em] -my-[0.1em]"
          >
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
    );
  }

  // Handle basic line reveal (simplified by utilizing block mask container)
  const lineVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: EASE_CINEMATIC,
        delay,
      },
    },
  };

  return (
    <div ref={ref} className="overflow-hidden py-[0.1em] -my-[0.1em]">
      <motion.p
        variants={lineVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={className}
      >
        {children}
      </motion.p>
    </div>
  );
}
export default Reveal;
