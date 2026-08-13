"use client";

import React from "react";
import Link from "next/link";
import { contactPlaceholderInfo } from "@/data/contact";
import { projectItems } from "@/data/projects";
import { useLenis } from "@/hooks/useLenis";
import { socialLinks } from "@/data/footer";

export default function Footer() {
  const lenis = useLenis();

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
  ];

  // Filter verified social links (starts with http)
  const validSocialLinks = socialLinks.filter(
    (link) => link.href && link.href.startsWith("http")
  );

  return (
    <section className="bg-[#050505] w-full border-t border-white/5 relative z-10">
      <footer className="max-w-7xl mx-auto px-6 sm:px-8 py-12 font-space-grotesk text-[#FAFAFA]">
        
        {/* Subtle top HUD / technical metadata detail */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-10 text-[9px] font-mono tracking-[0.25em] text-[#8E8E93]/60 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#DFCFB7] rounded-full inline-block animate-pulse"></span>
            <span>SYSTEM: VAYU GALAXY</span>
          </div>
          <div className="hidden sm:block">
            <span>INIT_SEQUENCE // EST. 2026</span>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          
          {/* COLUMN 1 — BRAND */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="group inline-flex flex-col font-display font-light text-base tracking-[0.25em] leading-tight text-[#FAFAFA] select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded p-0.5 mb-2 w-fit"
              aria-label="Vayu Galaxy Home"
            >
              <span>VAYU</span>
              <span className="text-[#8E8E93] group-hover:text-white transition-colors duration-300">
                GALAXY
              </span>
            </Link>
            <div className="text-[10px] tracking-[0.2em] text-[#DFCFB7] uppercase font-mono font-medium">
              THE FUTURE OF LIVING
            </div>
            <p className="text-xs text-[#8E8E93] font-light leading-relaxed mt-4 max-w-[240px]">
              Exploring technology, innovation and new possibilities for the future.
            </p>
          </div>

          {/* COLUMN 2 — EXPLORE */}
          <div>
            <h3 className="text-xs uppercase font-medium tracking-[0.2em] text-[#DFCFB7] font-mono mb-5">
              EXPLORE
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-1.5 text-sm text-[#8E8E93] hover:text-[#DFCFB7] transition-all duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded"
                >
                  <span>Home</span>
                  <span className="opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out font-mono text-[10px] motion-reduce:transition-none">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-1.5 text-sm text-[#8E8E93] hover:text-[#DFCFB7] transition-all duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded"
                >
                  <span>About</span>
                  <span className="opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out font-mono text-[10px] motion-reduce:transition-none">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-1.5 text-sm text-[#8E8E93] hover:text-[#DFCFB7] transition-all duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded"
                >
                  <span>Journal</span>
                  <span className="opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out font-mono text-[10px] motion-reduce:transition-none">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 text-sm text-[#8E8E93] hover:text-[#DFCFB7] transition-all duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded"
                >
                  <span>Contact</span>
                  <span className="opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out font-mono text-[10px] motion-reduce:transition-none">
                    &rarr;
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — PROJECTS */}
          <div>
            <h3 className="text-xs uppercase font-medium tracking-[0.2em] text-[#DFCFB7] font-mono mb-5">
              PROJECTS
            </h3>
            <ul className="space-y-3.5">
              {footerProjects.map((proj) => (
                <li key={proj.href}>
                  <Link
                    href={proj.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-[#8E8E93] hover:text-[#DFCFB7] transition-all duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded"
                  >
                    <span>{proj.name}</span>
                    <span className="opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out font-mono text-[10px] motion-reduce:transition-none">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 — CONNECT */}
          <div>
            <h3 className="text-xs uppercase font-medium tracking-[0.2em] text-[#DFCFB7] font-mono mb-5">
              CONNECT
            </h3>
            <div className="flex flex-col gap-5">
              <ul className="space-y-3 text-sm text-[#8E8E93]">
                <li className="flex items-center">
                  <i className="far fa-envelope text-xs text-[#DFCFB7]/70 w-5" aria-hidden="true"></i>
                  <a
                    href={`mailto:${contactPlaceholderInfo.email}`}
                    className="hover:text-white transition-colors duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded px-0.5"
                  >
                    {contactPlaceholderInfo.email}
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone text-xs text-[#DFCFB7]/70 w-5" aria-hidden="true"></i>
                  <a
                    href={`tel:${contactPlaceholderInfo.phone.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors duration-300 font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded px-0.5"
                  >
                    {contactPlaceholderInfo.phone}
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt text-xs text-[#DFCFB7]/70 w-5" aria-hidden="true"></i>
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
                      className="text-[#8E8E93] hover:text-[#DFCFB7] hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 ease-out text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded p-0.5 motion-reduce:transition-none"
                      aria-label={link.name}
                    >
                      <i className={link.iconClass} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Divider & Bottom Footer Bar */}
        <div className="border-t border-white/5 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] tracking-wider text-[#8E8E93] font-mono">
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
                className="inline-flex items-center gap-1.5 text-[#8E8E93] hover:text-white transition-colors duration-300 cursor-pointer border-b border-transparent hover:border-[#8E8E93]/30 pb-0.5 font-mono uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded px-1"
                aria-label="Back to top"
              >
                BACK TO TOP <span className="text-[10px]" aria-hidden="true">&uarr;</span>
              </button>
            </div>
          </div>
        </div>

      </footer>
    </section>
  );
}
