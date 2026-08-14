"use client";

import React from "react";
import Link from "next/link";
import { contactPlaceholderInfo } from "@/data/contact";
import { projectItems } from "@/data/projects";
import { useLenis } from "@/hooks/useLenis";
import { socialLinks } from "@/data/footer";
import { motion, useReducedMotion } from "framer-motion";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();

  // Scroll smoothly to the top using the existing Lenis instance
  const handleBackToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Find project items dynamically to avoid duplicating names and routes
  const deviProj = projectItems.find((p) => p.href === "/devi");
  const protoProj = projectItems.find((p) => p.href === "/proto");
  const spdt1Proj = projectItems.find((p) => p.href === "/spdt1");
  const vishnuProj = projectItems.find((p) => p.href === "/#lord-vishnu");

  // Dynamic projects list
  const footerProjects = [
    { name: deviProj?.name || "Devi Drone", href: "/devi" },
    {
      name: protoProj?.name.includes("Robot") ? "Proto" : protoProj?.name || "Proto",
      href: "/proto",
    },
    {
      name: spdt1Proj?.name === "SPD t1" ? "SPD T1" : spdt1Proj?.name || "SPD T1",
      href: "/spdt1",
    },
    {
      name: vishnuProj?.name || "Lord Vishnu",
      href: "/#lord-vishnu",
    },
  ];

  // Filter verified social links (starts with http)
  const validSocialLinks = socialLinks.filter(
    (link) => link.href && link.href.startsWith("http")
  );

  const opacityVal = shouldReduceMotion ? 1 : 0;
  const yVal = shouldReduceMotion ? 0 : 10;

  return (
    <motion.section
      initial={{ borderTopColor: "rgba(255, 255, 255, 0.05)" }}
      whileInView={
        shouldReduceMotion
          ? {}
          : {
            borderTopColor: [
              "rgba(255, 255, 255, 0.05)",
              "rgba(223, 207, 183, 0.15)",
              "rgba(255, 255, 255, 0.05)",
            ],
          }
      }
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 2.0, ease: "easeInOut" }}
      className="bg-[#050505] w-full border-t relative z-10 overflow-hidden"
    >
      {/* Subtle technical grid pattern in the background */}
      <div className="absolute inset-0 footer-grid-bg pointer-events-none z-0" />

      {/* Subtle scanning horizontal line overlay */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#DFCFB7]/10 to-transparent absolute top-0 left-0 animate-scan-slow" />
        </div>
      )}

      <footer className="max-w-7xl mx-auto px-6 sm:px-8 pt-6 pb-12 font-space-grotesk text-[#FAFAFA] relative z-10">

        {/* Subtle top HUD / technical metadata detail */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 border-b border-white/5 pb-4 mb-10 text-[10px] font-mono tracking-[0.25em] text-[#8E8E93]/60 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#DFCFB7] rounded-full inline-block animate-pulse"></span>
            <span>SYSTEM: VAYU GALAXY</span>
          </div>
          <div className="w-full sm:w-auto">
            <NewsletterSignup />
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* COLUMN 1 — BRAND */}
          <motion.div
            initial={{ opacity: opacityVal, y: yVal }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="flex flex-col"
          >
            <Link
              href="/"
              className="group inline-flex flex-col font-display font-bold text-2xl tracking-[0.25em] leading-tight text-[#FAFAFA] select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded p-0.5 mb-2 w-fit"
              aria-label="Vayu Galaxy Home"
            >
              <span>VAYU GALAXY</span>
            </Link>
            <div className="text-[11px] tracking-[0.2em] text-[#DFCFB7] uppercase font-mono font-medium">
              THE FUTURE OF LIVING
            </div>
            <p className="text-sm text-[#8E8E93] font-light leading-relaxed mt-4 max-w-[240px]">
              Exploring technology, innovation and new possibilities for the future.
            </p>
          </motion.div>

          {/* COLUMN 2 — EXPLORE */}
          <motion.div
            initial={{ opacity: opacityVal, y: yVal }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-sm uppercase font-medium tracking-[0.2em] text-[#DFCFB7] font-mono mb-5">
              EXPLORE
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-1.5 text-base text-[#8E8E93] hover:text-[#DFCFB7] transition-all duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded"
                >
                  <span className="border-b border-transparent group-hover:border-[#DFCFB7]/30 transition-all duration-300 pb-0.5">
                    Home
                  </span>
                  <span className="opacity-40 group-hover:opacity-100 translate-x-0 group-hover:translate-x-[5px] transition-all duration-300 ease-out font-mono text-base motion-reduce:transition-none motion-reduce:transform-none">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-1.5 text-base text-[#8E8E93] hover:text-[#DFCFB7] transition-all duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded"
                >
                  <span className="border-b border-transparent group-hover:border-[#DFCFB7]/30 transition-all duration-300 pb-0.5">
                    About
                  </span>
                  <span className="opacity-40 group-hover:opacity-100 translate-x-0 group-hover:translate-x-[5px] transition-all duration-300 ease-out font-mono text-base motion-reduce:transition-none motion-reduce:transform-none">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-1.5 text-base text-[#8E8E93] hover:text-[#DFCFB7] transition-all duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded"
                >
                  <span className="border-b border-transparent group-hover:border-[#DFCFB7]/30 transition-all duration-300 pb-0.5">
                    Journal
                  </span>
                  <span className="opacity-40 group-hover:opacity-100 translate-x-0 group-hover:translate-x-[5px] transition-all duration-300 ease-out font-mono text-base motion-reduce:transition-none motion-reduce:transform-none">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 text-base text-[#8E8E93] hover:text-[#DFCFB7] transition-all duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded"
                >
                  <span className="border-b border-transparent group-hover:border-[#DFCFB7]/30 transition-all duration-300 pb-0.5">
                    Contact
                  </span>
                  <span className="opacity-40 group-hover:opacity-100 translate-x-0 group-hover:translate-x-[5px] transition-all duration-300 ease-out font-mono text-base motion-reduce:transition-none motion-reduce:transform-none">
                    &rarr;
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* COLUMN 3 — PROJECTS */}
          <motion.div
            initial={{ opacity: opacityVal, y: yVal }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <h3 className="text-sm uppercase font-medium tracking-[0.2em] text-[#DFCFB7] font-mono mb-5">
              PROJECTS
            </h3>
            <ul className="space-y-3.5">
              {footerProjects.map((proj) => (
                <li key={proj.href}>
                  <Link
                    href={proj.href}
                    className="group inline-flex items-center gap-1.5 text-base text-[#8E8E93] hover:text-[#DFCFB7] transition-all duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded"
                  >
                    <span className="border-b border-transparent group-hover:border-[#DFCFB7]/30 transition-all duration-300 pb-0.5">
                      {proj.name}
                    </span>
                    <span className="opacity-40 group-hover:opacity-100 translate-x-0 group-hover:translate-x-[5px] transition-all duration-300 ease-out font-mono text-base motion-reduce:transition-none motion-reduce:transform-none">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4 — CONNECT */}
          <motion.div
            initial={{ opacity: opacityVal, y: yVal }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-sm uppercase font-medium tracking-[0.2em] text-[#DFCFB7] font-mono mb-5">
              CONNECT
            </h3>
            <div className="flex flex-col gap-5">
              <ul className="space-y-3 text-base text-[#8E8E93]">
                {/* Email Contact Item */}
                <li className="group flex items-center">
                  <span className="inline-flex items-center justify-center w-5 mr-1">
                    <i
                      className="far fa-envelope text-sm text-[#DFCFB7]/70 transition-all duration-250 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:text-[#DFCFB7] motion-reduce:transition-none motion-reduce:transform-none"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <a
                    href={`mailto:${contactPlaceholderInfo.email}`}
                    className="hover:text-white transition-colors duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded px-0.5"
                  >
                    {contactPlaceholderInfo.email}
                  </a>
                </li>
                {/* Phone Contact Item */}
                <li className="group flex items-center">
                  <span className="inline-flex items-center justify-center w-5 mr-1">
                    <i
                      className="fas fa-phone text-sm text-[#DFCFB7]/70 transition-all duration-250 ease-out group-hover:rotate-6 group-hover:text-[#DFCFB7] motion-reduce:transition-none motion-reduce:transform-none"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <a
                    href={`tel:${contactPlaceholderInfo.phone.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded px-0.5"
                  >
                    {contactPlaceholderInfo.phone}
                  </a>
                </li>
                {/* Location Contact Item */}
                <li className="group flex items-center">
                  <span className="inline-flex items-center justify-center w-5 mr-1">
                    <i
                      className="fas fa-map-marker-alt text-sm text-[#DFCFB7]/70 animate-bounce-subtle group-hover:text-[#DFCFB7] motion-reduce:transition-none motion-reduce:transform-none"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span className="font-light">{contactPlaceholderInfo.location}</span>
                </li>
              </ul>

              {/* Dynamic Social Icons (Only render if valid verified URLs exist) */}
              {validSocialLinks.length > 0 && (
                <div className="flex items-center gap-4 mt-1">
                  {validSocialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8E8E93] hover:text-[#DFCFB7] opacity-80 hover:opacity-100 hover:-translate-y-[3px] hover:scale-[1.05] transition-all duration-250 ease-out text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded p-0.5 motion-reduce:transition-none motion-reduce:transform-none"
                      aria-label={link.name}
                    >
                      <i className={link.iconClass} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

        </div>

        {/* Divider & Bottom Footer Bar */}
        <div className="border-t border-white/5 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] tracking-wider text-[#8E8E93] font-mono">
            {/* Left: Copyright */}
            <div>
              &copy; 2026 Vayu Galaxy. All rights reserved.
            </div>

            {/* Center: DELHI NCR, INDIA */}
            <div className="uppercase tracking-[0.2em] font-medium text-[#DFCFB7]/60">
              DELHI NCR, INDIA
            </div>

            {/* Right: Back to Top */}
            <div>
              <button
                onClick={handleBackToTop}
                className="group inline-flex items-center gap-1.5 text-[#8E8E93] hover:text-[#DFCFB7] transition-colors duration-300 cursor-pointer border-b border-transparent hover:border-[#8E8E93]/30 pb-0.5 font-mono uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded px-1"
                aria-label="Back to top"
              >
                BACK TO TOP{" "}
                <span
                  className="text-[12px] transition-transform duration-300 ease-out group-hover:-translate-y-[4px] motion-reduce:transform-none"
                  aria-hidden="true"
                >
                  &uarr;
                </span>
              </button>
            </div>
          </div>
        </div>

      </footer>
    </motion.section>
  );
}
