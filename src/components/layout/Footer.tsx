"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLenis } from "@/hooks/useLenis";
import { motion, useReducedMotion } from "framer-motion";

export default function Footer() {
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Smooth back to top handler
  const handleBackToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Newsletter subscription submit
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || newsletterStatus === "submitting") return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail.trim())) {
      setNewsletterStatus("error");
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterStatus("submitting");
    setNewsletterMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "NEWSLETTER_SUBSCRIPTION",
          email: newsletterEmail.trim(),
        }),
      });

      if (response.ok) {
        setNewsletterStatus("success");
        setNewsletterMessage("YOU'RE IN. You'll hear from us when there's something worth sharing.");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus("error");
        setNewsletterMessage("Failed to subscribe. Please try again.");
      }
    } catch {
      setNewsletterStatus("error");
      setNewsletterMessage("Something went wrong. Please try again.");
    }
  };

  // Copy email to clipboard
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("info@vayugalaxy.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = "mailto:info@vayugalaxy.com";
    }
  };

  const opacityVal = shouldReduceMotion ? 1 : 0;
  const yVal = shouldReduceMotion ? 0 : 15;

  return (
    <footer className="bg-[#050505] text-[#FAFAFA] relative z-10 border-t border-white/10 overflow-hidden font-space-grotesk">
      {/* Masked technical grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Ambient background glows */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-cyan-500/5 blur-[150px] pointer-events-none rounded-full z-0" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-blue-600/5 blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-28 lg:pb-12 relative z-10">

        {/* 1. Top Interactive CTA Banner */}
        <motion.div
          initial={{ opacity: opacityVal, y: yVal }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 mb-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group"
        >
          {/* Subtle banner glow element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-700" />

          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              STAY INFORMED
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase font-space-grotesk">
              READY TO EXPLORE THE FUTURE OF LIVING?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Subscribe to our journal for tech drops, township developments, and priority access notifications.
            </p>
          </div>

          {/* Pill-Shaped Newsletter Input Form */}
          <div className="w-full lg:w-auto">
            <form onSubmit={handleNewsletterSubmit} className="relative flex items-center w-full sm:w-[420px]">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={newsletterStatus === "submitting"}
                className="bg-[#050505]/80 border border-white/15 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-zinc-500 rounded-full py-3.5 pl-5 pr-36 font-space-grotesk text-xs sm:text-sm w-full transition-all duration-300 focus:outline-none"
              />
              <button
                type="submit"
                disabled={newsletterStatus === "submitting"}
                className="absolute right-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-space-grotesk font-bold py-2.5 px-5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(34,211,238,0.3)] disabled:opacity-50 cursor-pointer"
              >
                {newsletterStatus === "submitting" ? "SUBSCRIBING..." : "SUBSCRIBE →"}
              </button>
            </form>
            {newsletterMessage && (
              <span className={`text-[11px] font-mono mt-2 block tracking-wider ${newsletterStatus === "success" ? "text-cyan-400" : "text-red-400"
                }`}>
                {newsletterMessage}
              </span>
            )}
          </div>
        </motion.div>

        {/* 2. Main Footer Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">
          
          {/* Column 1: Brand & Mission */}
          <motion.div
            initial={{ opacity: opacityVal, y: yVal }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-4"
          >
            <div className="space-y-1.5">
              <Link href="/" className="inline-block text-2xl sm:text-3xl font-bold tracking-wider text-white uppercase hover:text-cyan-400 transition-colors">
                VAYU GALAXY
              </Link>
              <div className="flex items-center gap-2 text-xs tracking-widest font-semibold text-cyan-400 uppercase font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                SYSTEM ONLINE
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-sm">
              Pioneering the next era of aerial living, advanced robotics, and sustainable aerial townships.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {/* Twitter / X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Explore / Ecosystem */}
          <motion.div
            initial={{ opacity: opacityVal, y: yVal }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-mono text-sm font-bold text-cyan-400 uppercase tracking-widest">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="group inline-flex items-center gap-2 text-base text-zinc-300 hover:text-white font-medium transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Home</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="group inline-flex items-center gap-2 text-base text-zinc-300 hover:text-white font-medium transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="group inline-flex items-center gap-2 text-base text-zinc-300 hover:text-white font-medium transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Township Vision</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="group inline-flex items-center gap-2 text-base text-zinc-300 hover:text-white font-medium transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Research &amp; Whitepaper</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="group inline-flex items-center gap-2 text-base text-zinc-300 hover:text-white font-medium transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Journal</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Projects / Innovations */}
          <motion.div
            initial={{ opacity: opacityVal, y: yVal }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <h4 className="font-mono text-sm font-bold text-cyan-400 uppercase tracking-widest">
              PROJECTS
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/spdt1" className="group inline-flex items-center gap-2 text-base text-zinc-300 hover:text-white font-medium transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">SPD T1 Drone</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/devi" className="group inline-flex items-center gap-2 text-base text-zinc-300 hover:text-white font-medium transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Devi Drone</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/proto" className="group inline-flex items-center gap-2 text-base text-zinc-300 hover:text-white font-medium transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Proto Robot</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="group inline-flex items-center gap-2 text-base text-zinc-300 hover:text-white font-medium transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Sky Habitat Blueprint</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact & Coordinates */}
          <motion.div
            initial={{ opacity: opacityVal, y: yVal }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-mono text-sm font-bold text-cyan-400 uppercase tracking-widest">
              CONTACT &amp; LOCATION
            </h4>
            <div className="space-y-3 text-base font-medium">
              <div className="flex items-center gap-2.5">
                <svg className="w-4.5 h-4.5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@vayugalaxy.com" className="text-zinc-200 hover:text-white transition-colors">
                  info@vayugalaxy.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4.5 h-4.5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-zinc-200">Delhi NCR, India</span>
              </div>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="mt-3 w-full bg-white/[0.04] hover:bg-cyan-950/40 border border-white/15 hover:border-cyan-500/50 text-zinc-200 hover:text-cyan-400 px-5 py-3 rounded-xl font-mono text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group shadow-lg"
              >
                {copiedEmail ? (
                  <>
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.75v-6.75a2.25 2.25 0 00-2.25-2.25H15" />
                    </svg>
                    <span>COPY EMAIL INQUIRY</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

        </div>

        {/* 3. Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 tracking-wider">
          {/* Left: Copyright */}
          <div>
            &copy; 2026 VAYU GALAXY. All rights reserved.
          </div>

          {/* Center: System Status Pill */}
          <div className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] text-zinc-400 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>All systems nominal • Delhi NCR, India</span>
          </div>

          {/* Right: Back to Top */}
          <button
            type="button"
            onClick={handleBackToTop}
            className="group inline-flex items-center gap-1.5 text-zinc-400 hover:text-cyan-400 transition-colors cursor-pointer uppercase text-xs"
          >
            <span>BACK TO TOP</span>
            <span className="group-hover:-translate-y-1 transition-transform inline-block">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
