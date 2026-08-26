"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Reveal, TextReveal } from "@/components/animation/Reveal";
import { jobOpenings } from "@/data/careers";
import JobCard from "@/components/careers/JobCard";

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("ALL");

  const departments = [
    "ALL",
    "TECHNOLOGY & SOFTWARE",
    "ROBOTICS & AUTONOMOUS SYSTEMS",
    "UAV & AEROSPACE",
    "MECHANICAL & PRODUCT ENGINEERING",
    "RESEARCH & INNOVATION",
    "ARCHITECTURE & FUTURE LIVING",
    "ELECTRONICS & EMBEDDED SYSTEMS",
    "OPERATIONS & PROGRAM MANAGEMENT",
    "BUSINESS & STRATEGIC PARTNERSHIPS",
    "MARKETING, DESIGN & COMMUNICATIONS",
  ];

  const filteredJobs = jobOpenings.filter((job) => {
    if (job.status !== "open") return false;
    if (selectedDepartment === "ALL") return true;
    return job.department.toUpperCase() === selectedDepartment;
  });

  return (
    <div className="careers-page-wrapper bg-[#050505] text-[#FAFAFA] min-h-screen flex flex-col justify-between relative overflow-hidden font-space-grotesk">
      {/* FontAwesome style icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      {/* Subtle blueprint grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      
      {/* Ambient glow details */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#DFCFB7]/[0.02] blur-[120px] pointer-events-none rounded-full z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-400/[0.01] blur-[150px] pointer-events-none rounded-full z-0" />

      <Header />

      <main className="flex-grow pt-32 pb-24 relative z-10">
        
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20 border-b border-white/[0.08] mb-16">
          <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-mono text-xs text-[#DFCFB7] font-bold uppercase tracking-[0.25em]">
                VAYU GALAXY // CAREERS
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white uppercase font-display leading-[1.05] max-w-4xl mb-6">
              Build what<br className="hidden sm:inline" /> comes next.
            </h1>

            <TextReveal className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed mb-8">
              Vayu Galaxy brings together visionary aerospace technology, conceptual high-altitude architecture, and autonomous robotics to redefine habitation. We are seeking interdisciplinary minds to build the future.
            </TextReveal>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#open-positions"
                className="bg-white hover:bg-[#DFCFB7] text-black font-mono font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full shadow-lg transition-colors select-none cursor-pointer"
              >
                VIEW OPEN POSITIONS
              </a>
              <a
                href="#life-at-vayu"
                className="border border-white/15 hover:border-white/30 text-white font-mono font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-colors select-none cursor-pointer"
              >
                LIFE AT VAYU GALAXY
              </a>
              <div className="ml-0 sm:ml-4 flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#8E8E93] uppercase font-semibold">
                <span>SYSTEM STATUS / RECRUITING</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* INTRODUCTION / WHY VAYU GALAXY */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/5 pb-8 lg:pb-0 lg:pr-8">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                <span className="font-mono text-xs text-[#DFCFB7] font-semibold tracking-widest uppercase block mb-3">01 // WHY JOIN US</span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white leading-tight">
                  Solving ambitious spatial challenges.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <Reveal style="fade" direction="up" duration={0.9} delay={0.2}>
                <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                  At Vayu Galaxy, we believe that human potential is not bound to the ground. Our team explores the viability of high-altitude habitation, design safety stabilization, drone payload automation, and atmospheric solar deflecting shields.
                </p>
                <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                  We reject isolated thinking. Engineers design with architects; robotics experts collaborate with conceptual artists. We offer an experimental sandbox environment where bold ideas are refined for future realities.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LIFE AT VAYU GALAXY */}
        <section id="life-at-vayu" className="max-w-7xl mx-auto px-6 sm:px-8 mb-32 border-t border-white/[0.08] pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Split layout: Text values */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-8">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                <span className="font-mono text-xs text-[#DFCFB7] font-semibold tracking-widest uppercase block mb-2">02 // LIFE AT VAYU</span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white leading-tight mb-8">
                  Our core engineering beliefs.
                </h2>
                
                <ul className="space-y-6">
                  <li className="border-l border-[#DFCFB7]/30 pl-4 py-1">
                    <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">BUILD BOLDLY</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-light">We tackle challenges that others consider speculative or impossible.</p>
                  </li>
                  <li className="border-l border-cyan-400/30 pl-4 py-1">
                    <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">THINK SYSTEMICALLY</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-light">We view architecture and automation as a single integrated ecosystem.</p>
                  </li>
                  <li className="border-l border-zinc-700 pl-4 py-1">
                    <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">ENGINEER FOR REALITY</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-light">We back our conceptual models with rigorous finite-element simulations.</p>
                  </li>
                </ul>
              </Reveal>
            </div>

            {/* Split layout: Image block */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="/assets/office.webp"
                alt="Vayu Galaxy team workspace and design office"
                fill
                className="object-cover opacity-80"
                priority
              />
            </div>
            
          </div>
        </section>

        {/* OPEN POSITIONS & FILTERING */}
        <section id="open-positions" className="max-w-7xl mx-auto px-6 sm:px-8 border-t border-white/[0.08] pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs text-[#DFCFB7] font-semibold tracking-widest uppercase block mb-1">03 // INQUIRY BOARD</span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white leading-tight">
                Current Openings
              </h2>
            </div>

            {/* Filter tags */}
            <div className="flex flex-wrap gap-2 font-mono text-[10px] tracking-wider uppercase">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
                    selectedDepartment === dept
                      ? "bg-white text-black border-white font-bold"
                      : "border-white/10 text-zinc-400 hover:text-white hover:border-white/20 bg-zinc-950/20"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Openings Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <Reveal key={job.slug} style="fade" direction="up" duration={0.8}>
                  <JobCard job={job} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-white/5 rounded-3xl bg-zinc-950/10">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                No active openings found in this department.
              </span>
            </div>
          )}
        </section>

      </main>

      <Footer />
    </div>
  );
}
