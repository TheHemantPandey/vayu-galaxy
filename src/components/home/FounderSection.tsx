"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SocialLink {
  href: string;
  iconClass: string;
}

interface FounderSectionProps {
  name?: string;
  title?: string;
  descriptionParagraphs?: string[];
  socialLinks?: SocialLink[];
}

/**
 * FounderSection — Human vision section behind Vayu Galaxy.
 * Presents the design thinking of Mr. Raushan Kumar.
 */
export default function FounderSection({
  name = "Mr. Raushan Kumar",
  title = "THE VISIONARY",
  descriptionParagraphs,
  socialLinks = [
    { href: "https://www.facebook.com/", iconClass: "fab fa-facebook-f" },
    { href: "https://x.com/", iconClass: "fab fa-twitter" },
    { href: "https://www.instagram.com/", iconClass: "fab fa-instagram" },
    { href: "https://www.linkedin.com/", iconClass: "fab fa-linkedin-in" },
    { href: "https://www.youtube.com/", iconClass: "fab fa-youtube" },
  ],
}: FounderSectionProps) {
  
  // Premium copy connecting monumental design history with current habitations layout
  const defaultParagraphs = [
    "Vayu Galaxy is built upon a philosophy that architecture must shape the entire environment of human life. Envisioning a new layer of habitation requires a synthesis of scale, technology and structural geometry that directly supports human needs.",
    "Led by designer and visionary Raushan Kumar, the concept translates monumental design thinking into functional models of protection and resilience. Vayu Galaxy represents a continuation of this spatial exploration—extending the possibilities of scale, form and technology to build a more resilient future."
  ];

  // Overwrite generic startup placeholder text from parent components if present
  const isGenericText = descriptionParagraphs && descriptionParagraphs[0]?.includes("visionary leader");
  const paragraphsToUse = (!descriptionParagraphs || isGenericText) ? defaultParagraphs : descriptionParagraphs;

  return (
    <section id="founder" className="w-full bg-[#050505] text-[#F4F2ED] py-20 md:py-32 px-6 sm:px-12 lg:px-16 relative border-t border-white/[0.04]">
      <div className="max-w-[90rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Large Editorial Portrait (Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-5 flex justify-center w-full"
        >
          <div className="relative w-full aspect-[3/4] max-w-[420px] lg:max-w-none overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.08] shadow-2xl">
            <Image
              src="/assets/raushan.png"
              alt="Mr. Raushan Kumar - Designer and Visionary behind Vayu Galaxy"
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Editorial Content (Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="col-span-12 lg:col-span-7 flex flex-col text-left font-sans"
        >
          {/* Label Eyebrow */}
          <span className="block text-[0.7rem] sm:text-[0.75rem] font-sans tracking-[0.25em] text-[#B7A27A] uppercase mb-3">
            {title}
          </span>

          {/* Large Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#F4F2ED] mb-6 leading-tight tracking-tight uppercase">
            THE THINKING BEHIND VAYU GALAXY
          </h2>

          {/* Visionary Name */}
          <h4 className="text-lg md:text-xl font-medium text-[#F4F2ED] mb-6 uppercase tracking-wider font-mono">
            {name}
          </h4>

          {/* Narrative Body Copy */}
          <div className="space-y-6 mb-8 text-[#A09F9A] text-base md:text-lg font-light leading-relaxed max-w-xl">
            {paragraphsToUse.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Social Platforms Links */}
          <div className="flex gap-6 items-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-xl text-[#A09F9A] hover:text-[#B7A27A] transition-colors duration-300 transform hover:scale-110"
                aria-label={`Visit Mr. Raushan Kumar on social link ${index + 1}`}
              >
                <i className={social.iconClass}></i>
              </a>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
