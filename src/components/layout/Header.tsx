"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInnovationsOpen, setIsInnovationsOpen] = useState(false);

  // Scroll listener tracking window scrollY cleanly
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Innovations",
      href: "#",
      dropdown: [
        { label: "SPD T1 Drone", href: "/spdt1" },
        { label: "Devi Drone", href: "/devi" },
        { label: "Proto Robot", href: "/proto" },
      ],
    },
    { label: "Blogs", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[1000] transition-all duration-300 ease-in-out font-space-grotesk border-b-0 ${
          isScrolled
            ? "bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-black/50 py-3.5"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand (Left) */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            <span className="text-lg sm:text-xl font-extrabold tracking-widest text-white uppercase group-hover:text-cyan-400 transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              VAYU GALAXY
            </span>
          </Link>

          {/* Navigation Links (Center - Desktop) */}
          <ul className="hidden lg:flex items-center gap-2 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.dropdown) {
                return (
                  <li
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setIsInnovationsOpen(true)}
                    onMouseLeave={() => setIsInnovationsOpen(false)}
                  >
                    <button
                      type="button"
                      className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-200 hover:text-white transition-colors duration-200 px-4 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer focus:outline-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    >
                      {link.label}
                      <span className="text-[10px] text-cyan-400 group-hover:rotate-180 transition-transform duration-300">
                        ▼
                      </span>
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isInnovationsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-zinc-950/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-2 shadow-2xl space-y-1"
                        >
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
                      isActive
                        ? "bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-1.5 rounded-full"
                        : "text-zinc-200 hover:text-white px-4 py-1.5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Action Area & Primary CTA (Right) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book-now"
              className="bg-white text-black hover:bg-cyan-400 hover:text-black font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 group select-none cursor-pointer"
            >
              <span>BOOK NOW</span>
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 text-base focus:outline-none transition-colors cursor-pointer drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-zinc-950/95 backdrop-blur-2xl z-[999] pt-28 px-6 pb-10 lg:hidden flex flex-col justify-between font-space-grotesk overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/40 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                NAVIGATION MENU
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  if (link.dropdown) {
                    return (
                      <div key={link.label} className="space-y-2">
                        <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest block pt-2">
                          INNOVATIONS
                        </span>
                        <div className="pl-3 border-l border-white/10 space-y-2">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={toggleMenu}
                              className="block text-base font-semibold text-zinc-300 hover:text-white transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={toggleMenu}
                      className={`text-xl font-bold uppercase tracking-wider transition-colors ${
                        isActive ? "text-cyan-400" : "text-zinc-200 hover:text-cyan-400"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <Link
                href="/book-now"
                onClick={toggleMenu}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-space-grotesk font-bold py-3.5 px-6 rounded-full uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                BOOK NOW / EARLY ACCESS →
              </Link>
              <p className="text-[11px] font-mono text-zinc-500 text-center uppercase tracking-wider">
                VAYU GALAXY • EST. 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile/Tablet Bottom Action Bar */}
      {!isMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-[990] bg-zinc-950/95 backdrop-blur-md border-t border-white/10 pt-3.5 pb-4 pb-[calc(14px+env(safe-area-inset-bottom))] px-4 lg:hidden">
          <div className="flex gap-4 w-full max-w-xl mx-auto">
            <Link
              href="/contact"
              className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/15 font-space-grotesk font-bold py-3.5 px-4 text-[10px] sm:text-xs tracking-widest uppercase text-center rounded-sm flex items-center justify-center transition-all duration-300"
            >
              CONTACT US
            </Link>
            <Link
              href="/book-now"
              className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/15 font-space-grotesk font-bold py-3.5 px-4 text-[10px] sm:text-xs tracking-widest uppercase text-center rounded-sm flex items-center justify-center transition-all duration-300"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
