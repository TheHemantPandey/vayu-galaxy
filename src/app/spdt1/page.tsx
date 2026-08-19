import type { Metadata } from "next";
import React from "react";
import { SITE_URL } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "SPD T1 — Atmospheric Solar Defense Technology Concept",
  description:
    "SPD T1 is a first-of-its-kind atmospheric defense technology concept designed to regulate excessive solar radiation, combat global warming, and protect Earth's climate through high-altitude aerospace engineering. A Vayu Galaxy innovation.",
  alternates: {
    canonical: `${SITE_URL}/spdt1`,
  },
  openGraph: {
    title: "SPD T1 — Atmospheric Solar Defense Technology Concept",
    description:
      "SPD T1 is a first-of-its-kind atmospheric defense technology concept designed to regulate excessive solar radiation, combat global warming, and protect Earth's climate through high-altitude aerospace engineering.",
    url: `${SITE_URL}/spdt1`,
    images: [
      {
        url: "/assets/spdt1.png",
        width: 1200,
        height: 630,
        alt: "SPD T1 atmospheric solar defense technology concept",
      },
    ],
  },
  twitter: {
    title: "SPD T1 — Atmospheric Solar Defense Technology Concept",
    description:
      "SPD T1 is a first-of-its-kind atmospheric defense technology concept designed to regulate excessive solar radiation and combat global warming.",
    images: ["/assets/spdt1.png"],
  },
};
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FounderSection from "@/components/home/FounderSection";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";
import { Parallax } from "@/components/animation/Parallax";

export default function Spdt1Page() {
  return (
    <div className="spdt1-page-wrapper bg-[#050505]">
      {/* FontAwesome style icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <Header />

      <main>
        {/* Cinematic Product Hero */}
        <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center items-center overflow-hidden bg-[#050505] pt-24 pb-16 md:py-24 border-b border-white/[0.03] z-10 px-6 sm:px-8 md:px-[10%]">
          {/* Subtle blueprint grid background overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_70%)] pointer-events-none z-0" />
          
          {/* Subtle red reflection/glow matching the SPD T1 red colors */}
          <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-red-600/[0.02] blur-[100px] sm:blur-[150px] pointer-events-none rounded-full z-0" />
          <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#B7A27A]/[0.02] blur-[80px] sm:blur-[120px] pointer-events-none rounded-full z-0" />

          <div className="max-w-[1200px] w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Editorial Information */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1} className="flex flex-col space-y-5 sm:space-y-6">
                
                {/* Badge Indicator */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#B7A27A]/10 border border-[#B7A27A]/20 text-[#B7A27A] text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase shadow-[0_0_20px_rgba(183,162,122,0.05)] select-none self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7A27A] animate-pulse"></span>
                  VAYU GALAXY // INNOVATION 01
                </div>

                {/* Title */}
                <div className="space-y-2.5 sm:space-y-3">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.05]">
                    SPD T1
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-[#B7A27A] uppercase font-space-grotesk">
                    A NEW DIMENSION OF AERIAL MOBILITY.
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-lg">
                  SPD T1 is a first-of-its-kind atmospheric defense technology concept designed to regulate excessive solar radiation, combat global warming, and protect Earth&apos;s climate through high-altitude aerospace engineering.
                </p>

                {/* Technical Specifications Overlay / Metadata */}
                <div className="pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-2 gap-4 sm:gap-6 max-w-sm font-mono text-[9px] sm:text-[10px] tracking-wider text-zinc-500 uppercase">
                  <div>
                    <span className="block text-zinc-600 font-semibold mb-1">SYSTEM TYPE</span>
                    <span className="text-zinc-300">AEROSHIELD DEFENSE</span>
                  </div>
                  <div>
                    <span className="block text-zinc-600 font-semibold mb-1">DEVELOPMENT</span>
                    <span className="text-zinc-300">INDIA / REGION 01</span>
                  </div>
                </div>

              </Reveal>
            </div>

            {/* Right Column: Dominant Product Presentation */}
            <div className="lg:col-span-7 w-full flex items-center justify-center relative">
              <Parallax speed={0.015} className="w-full flex items-center justify-center">
                <Reveal style="fade" direction="up" duration={1.0} delay={0.25} className="w-full flex items-center justify-center">
                  <div className="relative w-full aspect-[4/3] xs:aspect-[16/10] sm:aspect-video lg:aspect-[4/3] overflow-hidden bg-transparent max-w-[600px] select-none">
                    <Image
                      src="/assets/spdt1.png"
                      alt="SPD T1 Aerospace Drone Concept"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 600px"
                      className="object-contain pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter brightness-95"
                      priority
                    />
                  </div>
                </Reveal>
              </Parallax>
            </div>

          </div>
        </section>

        {/* Redesigned About SPD T1 Section */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden border-t border-white/[0.03]">
          {/* Subtle blueprint grid line overlay for continuous story styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40" />

          <div className="max-w-[1200px] w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Editorial Content */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1} className="flex flex-col space-y-6">
                
                {/* Concept Indicator Label */}
                <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest block select-none">
                  01 // THE CONCEPT
                </span>

                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.1] mb-2">
                  About <span className="font-light">SPD T1</span>
                </h2>

                {/* Paragraphs with enhanced readability (15-17px on desktop, 14-15px on mobile, spacious line height) */}
                <div className="space-y-6 text-sm sm:text-base text-zinc-400 font-light leading-[1.75] max-w-xl">
                  <p>
                    In a world where climate change is accelerating at an unprecedented rate, SPDt1 emerges as a game-changing innovation—a first-of-its-kind atmospheric defense technology designed to protect Earth from excessive solar radiation. By deploying a high-altitude shielding system, SPDt1 aims to regulate the sun’s impact, mitigate the effects of global warming, and create a future where extreme heatwaves and environmental destruction are no longer inevitable.
                  </p>
                  <p>
                    This bold and disruptive concept is the brainchild of Mr. Raushan Kumar, a visionary entrepreneur and technology leader who believes in leveraging science to reshape the future. Designed and developed in India, SPDt1 is not just an innovation—it’s a global movement towards sustainability, planetary protection, and cutting-edge aerospace engineering.
                  </p>
                  <p>
                    For centuries, humanity has been at the mercy of the sun’s power. But what if we could control how much solar radiation reaches our planet—without affecting natural ecosystems? SPDt1 is designed to do exactly that.
                  </p>
                </div>

              </Reveal>
            </div>

            {/* Right Column: Premium Asymmetric Product Image Block */}
            <div className="lg:col-span-6 w-full flex items-center justify-center">
              <Parallax speed={0.02} className="w-full flex items-center justify-center">
                <Reveal style="fade" direction="up" duration={1.0} delay={0.25} className="w-full flex items-center justify-center">
                  <div className="relative w-full aspect-[4/3] xs:aspect-[16/10] sm:aspect-video lg:aspect-[4/3] overflow-hidden rounded-2xl bg-white/[0.01] border border-white/[0.06] shadow-2xl p-6 flex items-center justify-center max-w-[500px]">
                    {/* Atmospheric glow behind image container */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/[0.01] via-transparent to-[#B7A27A]/[0.01] pointer-events-none" />
                    
                    <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px]">
                      <Image
                        src="/assets/spdt1.png"
                        alt="SPD T1 Aerospace Concept Render"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                        className="object-contain pointer-events-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                      />
                    </div>
                  </div>
                </Reveal>
              </Parallax>
            </div>

          </div>
        </section>

        {/* Redesigned Solar Panel / Energy Innovation Section */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden border-t border-white/[0.03] border-b border-white/[0.03]">
          {/* Subtle blueprint grid line overlay for continuous story styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40" />

          {/* Section Header */}
          <div className="max-w-[1200px] w-full mb-12 sm:mb-16 md:mb-20 relative z-10 text-left">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1} className="flex flex-col space-y-4">
              {/* Concept Indicator Label */}
              <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest block select-none">
                02 // ENERGY SYSTEM
              </span>

              {/* Section Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.1]">
                Solar Integration
              </h2>
            </Reveal>
          </div>

          <div className="max-w-[1200px] w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Premium Technical Image Frame (Visual Hero) */}
            <div className="lg:col-span-7 w-full flex items-center justify-center order-2 lg:order-1">
              <Parallax speed={0.01} className="w-full flex items-center justify-center">
                <Reveal style="fade" direction="up" duration={1.0} delay={0.2} className="w-full flex items-center justify-center">
                  <div className="relative w-full rounded-2xl overflow-hidden bg-white/[0.01] border border-white/[0.06] shadow-2xl p-4 sm:p-6 flex items-center justify-center max-w-[640px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.01] via-transparent to-[#B7A27A]/[0.01] pointer-events-none" />
                    
                    <div className="relative w-full h-auto min-h-[220px] sm:min-h-[300px] flex items-center justify-center">
                      <Image
                        src="/assets/spdtLabel.png"
                        alt="SPD T1 functional solar panel layout diagram"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain pointer-events-none filter brightness-95"
                      />
                    </div>
                  </div>
                </Reveal>
              </Parallax>
            </div>

            {/* Right Column: Technical & Editorial Copy */}
            <div className="lg:col-span-5 flex flex-col space-y-6 order-1 lg:order-2">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.3} className="flex flex-col space-y-6">
                
                {/* Heading */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#F4F2ED] uppercase tracking-[0.5px]">
                  Atmospheric Energy Harvesting
                </h3>

                {/* Paragraphs with enhanced readability */}
                <div className="space-y-6 text-sm sm:text-base text-zinc-400 font-light leading-[1.75]">
                  <p>
                    The integrated solar panel array serves as the primary energy harvesting mechanism for the SPD T1 concept. By utilizing high-altitude solar exposure, the system is designed to power its autonomous propulsion and sustain operations directly within the upper atmosphere.
                  </p>
                  <p>
                    This clean energy integration allows the aircraft to remain operational without traditional fuel dependencies, supporting the long-term mission of solar radiation regulation and planetary climate protection.
                  </p>
                </div>

                {/* Technical Specs Overlay / Metadata */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-6 font-mono text-[9px] sm:text-[10px] tracking-wider text-zinc-500 uppercase">
                  <div>
                    <span className="block text-zinc-600 font-semibold mb-1">ENERGY SOURCE</span>
                    <span className="text-zinc-300">SOLAR HARVEST</span>
                  </div>
                  <div>
                    <span className="block text-zinc-600 font-semibold mb-1">INTEGRATION</span>
                    <span className="text-zinc-300">SPD T1 SYSTEM</span>
                  </div>
                </div>

              </Reveal>
            </div>

          </div>
        </section>

        {/* Redesigned Propeller / Propulsion Section */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden border-t border-white/[0.03] border-b border-white/[0.03]">
          {/* Subtle blueprint grid line overlay for continuous story styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40" />

          {/* Section Header */}
          <div className="max-w-[1200px] w-full mb-12 sm:mb-16 md:mb-20 relative z-10 text-left">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1} className="flex flex-col space-y-4">
              {/* Concept Indicator Label */}
              <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest block select-none">
                03 // PROPULSION
              </span>

              {/* Section Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.1]">
                Propulsion System
              </h2>
            </Reveal>
          </div>

          <div className="max-w-[1200px] w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Technical & Editorial Copy (Alternating Layout) */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1} className="flex flex-col space-y-6">
                
                {/* Heading */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#F4F2ED] uppercase tracking-[0.5px]">
                  Atmospheric Vector Control
                </h3>

                {/* Paragraphs with enhanced readability */}
                <div className="space-y-6 text-sm sm:text-base text-zinc-400 font-light leading-[1.75] max-w-xl">
                  <p>
                    The SPD T1 is designed with a high-efficiency propeller propulsion system engineered for stable station-keeping and precise vector control in low-density atmospheric conditions.
                  </p>
                  <p>
                    Powered directly by the integrated solar energy system, these lightweight propulsion units allow the aircraft to maintain its atmospheric positioning, ensuring continuous defense and solar regulation coverage.
                  </p>
                </div>

                {/* Technical Specs Overlay / Metadata */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-6 font-mono text-[9px] sm:text-[10px] tracking-wider text-zinc-500 uppercase">
                  <div>
                    <span className="block text-zinc-600 font-semibold mb-1">PROPULSION TYPE</span>
                    <span className="text-zinc-300">VECTOR PROPULSION</span>
                  </div>
                  <div>
                    <span className="block text-zinc-600 font-semibold mb-1">ENERGY SOURCE</span>
                    <span className="text-zinc-300">SOLAR POWERED</span>
                  </div>
                </div>

              </Reveal>
            </div>

            {/* Right Column: Premium Technical Image Frame */}
            <div className="lg:col-span-7 w-full flex items-center justify-center">
              <Parallax speed={0.015} className="w-full flex items-center justify-center">
                <Reveal style="fade" direction="up" duration={1.0} delay={0.25} className="w-full flex items-center justify-center">
                  <div className="relative w-full rounded-2xl overflow-hidden bg-white/[0.01] border border-white/[0.06] shadow-2xl p-4 sm:p-6 flex items-center justify-center max-w-[640px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.01] via-transparent to-[#B7A27A]/[0.01] pointer-events-none" />
                    
                    <div className="relative w-full h-auto min-h-[220px] sm:min-h-[300px] flex items-center justify-center">
                      <Image
                        src="/assets/spdt3.png"
                        alt="SPD T1 propeller propulsion system layout diagram"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain pointer-events-none filter brightness-95"
                      />
                    </div>
                  </div>
                </Reveal>
              </Parallax>
            </div>

          </div>
        </section>

        {/* Redesigned Mylar / Material Innovation Section */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden border-t border-white/[0.03] border-b border-white/[0.03]">
          {/* Subtle blueprint grid line overlay for continuous story styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40" />

          <div className="max-w-[1200px] w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Premium Technical Image Frame (Alternating Visual Rhythm - Image on Left) */}
            <div className="lg:col-span-7 w-full flex items-center justify-center order-2 lg:order-1">
              <Parallax speed={0.01} className="w-full flex items-center justify-center">
                <Reveal style="fade" direction="up" duration={1.0} delay={0.2} className="w-full flex items-center justify-center">
                  <div className="relative w-full rounded-2xl overflow-hidden bg-white/[0.01] border border-white/[0.06] shadow-2xl p-4 sm:p-6 flex items-center justify-center max-w-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.01] via-transparent to-[#B7A27A]/[0.01] pointer-events-none" />
                    
                    <div className="relative w-full h-auto min-h-[250px] sm:min-h-[300px] flex items-center justify-center">
                      <Image
                        src="/assets/spdt2.png"
                        alt="SPD T1 Mylar envelope material layout diagram"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain pointer-events-none filter brightness-95"
                      />
                    </div>
                  </div>
                </Reveal>
              </Parallax>
            </div>

            {/* Right Column: Technical & Editorial Copy */}
            <div className="lg:col-span-5 flex flex-col space-y-6 order-1 lg:order-2">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.3} className="flex flex-col space-y-6">
                
                {/* Concept Indicator Label */}
                <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest block select-none">
                  04 // MATERIAL
                </span>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.1]">
                  How SPDt1 Works?
                </h2>

                {/* Paragraphs with enhanced readability */}
                <div className="space-y-6 text-sm sm:text-base text-zinc-400 font-light leading-[1.75] max-w-xl">
                  <p>
                    SPDt1 is based on next-generation aerospace technology, using advanced materials that can absorb, deflect, or regulate solar radiation before it reaches the Earth&apos;s surface. Unlike conventional climate solutions that focus on adapting to rising temperatures, SPDt1 proactively prevents excessive heat from ever reaching dangerous levels.
                  </p>
                  <p>
                    SPDt1 isn&apos;t just another climate solution—it is humanity&apos;s first step toward planetary-scale protection. With Earth&apos;s climate rapidly reaching a critical tipping point, this innovation has the power to reshape our future. By merging science, sustainability, and space-age engineering, we are creating a world where the fear of an unlivable planet is replaced with hope, action, and technological mastery.
                  </p>
                  <p>
                    SPDt1 is calling upon scientists, engineers, environmentalists, policymakers, and visionaries to be part of this historic breakthrough. The time to act is now. This isn&apos;t just an idea—it&apos;s the future unfolding before our eyes.
                  </p>
                </div>

                {/* Technical Specs Overlay / Metadata */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-6 font-mono text-[9px] sm:text-[10px] tracking-wider text-zinc-500 uppercase">
                  <div>
                    <span className="block text-zinc-600 font-semibold mb-1">MATERIAL SYSTEM</span>
                    <span className="text-zinc-300">MYLAR ENVELOPE</span>
                  </div>
                  <div>
                    <span className="block text-zinc-600 font-semibold mb-1">SHIELD TYPE</span>
                    <span className="text-zinc-300">SOLAR DEFLECTION</span>
                  </div>
                </div>

              </Reveal>
            </div>

          </div>
        </section>

        {/* Redesigned Docking / Connection System Section */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden border-t border-white/[0.03] border-b border-white/[0.03]">
          {/* Subtle blueprint grid line overlay for continuous story styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40" />

          <div className="max-w-[1200px] w-full relative z-10 flex flex-col space-y-12 sm:space-y-16">
            
            {/* Top Row: Title and Technical Copy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5 flex flex-col space-y-4">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                  {/* Concept Indicator Label */}
                  <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest block select-none mb-4">
                    05 // DOCKING
                  </span>

                  {/* Section Title */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.1]">
                    Docking System
                  </h2>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.2}>
                  <div className="space-y-6 text-sm sm:text-base text-zinc-400 font-light leading-[1.75]">
                    <p>
                      The docking adapter at the base of the SPD T1 is engineered for secure connection, structural integrity, and automated payload transfer.
                    </p>
                    <p>
                      Integrated connection nodes support high-altitude positioning stability, anchoring the system to ground and orbital coordination grids.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Middle Row: Centered Widescreen Cinematic Video Frame */}
            <Reveal style="fade" direction="up" duration={1.0} delay={0.3} className="w-full">
              <div className="w-full relative rounded-2xl overflow-hidden bg-white/[0.01] border border-white/[0.06] shadow-2xl aspect-video max-h-[500px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover pointer-events-none filter brightness-90"
                >
                  <source src="/assets/spd1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Visual Darkening Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </Reveal>

            {/* Bottom Row: Specs Specs Overlay / Metadata */}
            <Reveal style="fade" direction="up" duration={0.8} delay={0.4}>
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-[9px] sm:text-[10px] tracking-wider text-zinc-500 uppercase">
                <div>
                  <span className="block text-zinc-600 font-semibold mb-1">SYSTEM TYPE</span>
                  <span className="text-zinc-300">DOCKING INTERFACE</span>
                </div>
                <div>
                  <span className="block text-zinc-600 font-semibold mb-1">LOCKING TYPE</span>
                  <span className="text-zinc-300">SECURE ANCHOR</span>
                </div>
                <div>
                  <span className="block text-zinc-600 font-semibold mb-1">SYSTEM ORIGIN</span>
                  <span className="text-zinc-300">VAYU GALAXY</span>
                </div>
                <div>
                  <span className="block text-zinc-600 font-semibold mb-1">INNOVATION</span>
                  <span className="text-zinc-300">SPD T1 INNOVATION 05</span>
                </div>
              </div>
            </Reveal>

          </div>
        </section>

        {/* Redesigned Video / Flight Experience Section (Phase 7) */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden border-t border-white/[0.03] border-b border-white/[0.03]">
          {/* Subtle blueprint grid line overlay for continuous story styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40" />

          <div className="max-w-[1200px] w-full relative z-10 flex flex-col space-y-10 sm:space-y-14">
            
            {/* Section Header */}
            <div className="w-full text-left">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1} className="flex flex-col space-y-4">
                {/* Concept Indicator Label */}
                <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest block select-none">
                  06 // EXPERIENCE
                </span>

                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.1]">
                  Flight Experience
                </h2>
              </Reveal>
            </div>

            {/* Cinematic YouTube Player Wrapper */}
            <Reveal style="fade" direction="up" duration={1.0} delay={0.25} className="w-full">
              <div className="w-full relative rounded-2xl overflow-hidden bg-white/[0.01] border border-white/[0.06] shadow-2xl pb-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/OUFSoPsG374?si=s8Q4ISbooiFEYq25"
                  title="SPD T1 Cinematic Flight Experience Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-none filter brightness-95"
                ></iframe>
              </div>
            </Reveal>

            {/* Optional Supporting Content / Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-white/10 items-start">
              <div className="md:col-span-8">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.35}>
                  <p className="text-sm sm:text-base text-zinc-400 font-light leading-[1.75] max-w-2xl">
                    Experience the monumental scale, high-altitude atmospheric systems, and architectural vision of the SPD T1 concept in flight. This cinematic visualization demonstrates the vehicle&apos;s propulsion, stabilization, and solar radiation deflection capabilities.
                  </p>
                </Reveal>
              </div>

              <div className="md:col-span-4 grid grid-cols-2 gap-4 font-mono text-[9px] sm:text-[10px] tracking-wider text-zinc-500 uppercase md:justify-items-end">
                <div>
                  <span className="block text-zinc-600 font-semibold mb-1">PROJECT</span>
                  <span className="text-zinc-300">SPD T1</span>
                </div>
                <div>
                  <span className="block text-zinc-600 font-semibold mb-1">CATEGORY</span>
                  <span className="text-zinc-300">FLIGHT CONCEPT</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Redesigned How SPD T1 Works / System Overview Section (Phase 8) */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden border-t border-white/[0.03] border-b border-white/[0.03]">
          {/* Subtle blueprint grid line overlay for continuous story styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40" />

          <div className="max-w-[1200px] w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Sequential Step-by-Step Overview */}
            <div className="lg:col-span-7 flex flex-col space-y-10">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1} className="flex flex-col space-y-4">
                {/* Concept Indicator Label */}
                <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest block select-none">
                  07 // SYSTEM
                </span>

                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.1]">
                  How SPDt1 Works
                </h2>
              </Reveal>

              <div className="flex flex-col space-y-8">
                {/* Step 01 */}
                <Reveal style="fade" direction="up" duration={0.8} delay={0.2}>
                  <div className="flex items-start space-x-6 group">
                    <div className="font-mono text-xs text-[#B7A27A] font-bold tracking-wider pt-1 select-none">
                      01 // TECH FOUNDATION
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-sm sm:text-base text-zinc-400 font-light leading-[1.75]">
                        SPDt1 is based on next-generation aerospace technology, using advanced materials that can absorb, deflect, or regulate solar radiation before it reaches the Earth&apos;s surface. Unlike conventional climate solutions that focus on adapting to rising temperatures, SPDt1 proactively prevents excessive heat from ever reaching dangerous levels.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Step 02 */}
                <Reveal style="fade" direction="up" duration={0.8} delay={0.3}>
                  <div className="flex items-start space-x-6 pt-6 border-t border-white/5 group">
                    <div className="font-mono text-xs text-[#B7A27A] font-bold tracking-wider pt-1 select-none">
                      02 // PLANETARY SCALE
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-sm sm:text-base text-zinc-400 font-light leading-[1.75]">
                        SPDt1 isn&apos;t just another climate solution—it is humanity&apos;s first step toward planetary-scale protection. With Earth&apos;s climate rapidly reaching a critical tipping point, this innovation has the power to reshape our future. By merging science, sustainability, and space-age engineering, we are creating a world where the fear of an unlivable planet is replaced with hope, action, and technological mastery.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Step 03 */}
                <Reveal style="fade" direction="up" duration={0.8} delay={0.4}>
                  <div className="flex items-start space-x-6 pt-6 border-t border-white/5 group">
                    <div className="font-mono text-xs text-[#B7A27A] font-bold tracking-wider pt-1 select-none">
                      03 // GLOBAL ALLIANCE
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-sm sm:text-base text-zinc-400 font-light leading-[1.75]">
                        SPDt1 is calling upon scientists, engineers, environmentalists, policymakers, and visionaries to be part of this historic breakthrough. The time to act is now. This isn&apos;t just an idea—it&apos;s the future unfolding before our eyes.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Column: Premium Engineering Diagram Frame */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <Parallax speed={0.01} className="w-full flex items-center justify-center">
                <Reveal style="fade" direction="up" duration={1.0} delay={0.3} className="w-full flex items-center justify-center">
                  <div className="relative w-full rounded-2xl overflow-hidden bg-white/[0.01] border border-white/[0.06] shadow-2xl p-4 sm:p-6 flex items-center justify-center max-w-[450px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.01] via-transparent to-[#B7A27A]/[0.01] pointer-events-none" />
                    
                    <div className="relative w-full h-auto min-h-[250px] sm:min-h-[300px] flex items-center justify-center">
                      <Image
                        src="/assets/spdt1.png"
                        alt="SPD T1 system concept layout render"
                        width={500}
                        height={500}
                        className="w-full h-auto object-contain pointer-events-none filter brightness-95"
                      />
                    </div>
                  </div>
                </Reveal>
              </Parallax>
            </div>

          </div>
        </section>

        {/* Redesigned Our Vision Section (Phase 9) */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-[12%] flex flex-col items-center justify-center relative overflow-hidden border-t border-white/[0.03] border-b border-white/[0.03]">
          {/* Subtle blueprint grid line overlay for continuous story styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-30" />

          <div className="max-w-[1000px] w-full relative z-10 flex flex-col space-y-12 sm:space-y-16 text-center items-center">
            
            {/* Concept Indicator and Header */}
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1} className="flex flex-col space-y-4 items-center">
              {/* Concept Indicator Label */}
              <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest block select-none">
                08 // VISION
              </span>

              {/* Section Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.1]">
                Our Vision
              </h2>
            </Reveal>

            {/* Vision Body Content with Sophisticated Hierarchy */}
            <div className="flex flex-col space-y-10 items-center">
              
              {/* Large Focal Vision Statement */}
              <Reveal style="fade" direction="up" duration={0.9} delay={0.25}>
                <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl text-zinc-100 italic">
                  &ldquo;At SPDt1, we envision a world where technology works in harmony with nature. Our goal is to develop solutions that not only combat climate change but also enhance the quality of life for all living beings.&rdquo;
                </p>
              </Reveal>

              {/* Supporting Vision Body Copy */}
              <Reveal style="fade" direction="up" duration={0.9} delay={0.4}>
                <div className="space-y-6 text-sm sm:text-base text-zinc-400 font-light leading-[1.75] max-w-2xl">
                  <p>
                    By deploying advanced shielding mechanisms in the sky, we aim to regulate excessive sunlight, reduce heat waves, and create a more sustainable atmospheric balance without disrupting natural weather patterns.
                  </p>
                  <p>
                    SPDt1 is more than just an innovation—it is a movement toward a greener, safer, and technologically advanced planet. As we work towards bringing this visionary project to life, we welcome collaborations with researchers, scientists, environmentalists, and policymakers who share our vision for a sustainable future.
                  </p>
                </div>
              </Reveal>

            </div>

            {/* Small Footer Metadata for aerospace documentation look */}
            <Reveal style="fade" direction="up" duration={0.8} delay={0.5}>
              <div className="pt-8 border-t border-white/5 w-[150px] mx-auto grid grid-cols-1 gap-2 font-mono text-[9px] tracking-widest text-zinc-600 uppercase select-none">
                <div>SPD T1 // VISION</div>
              </div>
            </Reveal>

          </div>
        </section>

        <FounderSection
          title="Meet Our Founder"
          name="Mr. Raushan Kumar"
          descriptionParagraphs={[
            "SPDt1 is the brainchild of Mr. Raushan Kumar, a renowned entrepreneur and innovation leader dedicated to pioneering revolutionary technologies for a sustainable future. Designed and developed in India, SPDt1 represents a bold step towards global climate resilience, reinforcing India’s position as a leader in climate innovation and space technology.",
          ]}
          socialLinks={[
            {
              href: "https://www.instagram.com/raushankumar.in?igsh=YjI0emUyMTdlbHRi",
              iconClass: "fab fa-instagram",
            },
            {
              href: "https://www.linkedin.com/in/raushan-kumar-b60b771b0/?originalSubdomain=in",
              iconClass: "fab fa-linkedin",
            },
          ]}
        />
      </main>

        {/* Redesigned Final CTA Section (Phase 11) */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] py-24 sm:py-32 md:py-44 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden border-t border-white/[0.03] border-b border-white/[0.03]">
          {/* Subtle blueprint grid line overlay for continuous story styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-30" />

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center space-y-8">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1} className="flex flex-col items-center space-y-4">
              
              {/* Eyebrow Label */}
              <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest block select-none">
                10 // THE NEXT HORIZON
              </span>

              {/* Large display headline */}
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-[#F4F2ED] uppercase leading-tight tracking-tight max-w-3xl font-display">
                THE FUTURE OF HUMAN HABITATION STARTS WITH A VISION.
              </h2>

            </Reveal>

            <Reveal style="fade" direction="up" duration={0.8} delay={0.25} className="flex flex-col items-center space-y-8">
              
              {/* Supporting Copy */}
              <p className="text-zinc-400 text-sm sm:text-base font-light leading-[1.75] max-w-xl">
                Vayu Galaxy is an exploration of how architecture, technology and human imagination can come together to create a different possibility for tomorrow.
              </p>

              {/* Architectural solid button CTA */}
              <Link
                href="/book-now"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#B7A27A] hover:bg-[#F4F2ED] text-[#050505] hover:text-[#050505] text-xs font-mono font-bold tracking-[0.25em] uppercase transition-all duration-300 rounded-sm group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B7A27A] shadow-lg shadow-black/20"
              >
                BOOK REGISTRATION
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none font-extrabold">
                  →
                </span>
              </Link>

            </Reveal>

            {/* Small Footer Metadata for aerospace documentation look */}
            <Reveal style="fade" direction="up" duration={0.8} delay={0.45}>
              <div className="pt-8 border-t border-white/5 w-[150px] mx-auto grid grid-cols-1 gap-2 font-mono text-[9px] tracking-widest text-zinc-600 uppercase select-none">
                <div>SPD T1 // CLOSING</div>
              </div>
            </Reveal>

          </div>
        </section>
      <Footer />
    </div>
  );
}
