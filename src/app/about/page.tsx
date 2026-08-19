import type { Metadata } from "next";
import React from "react";
import { SITE_URL } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "About Vayu Galaxy — Our Mission, Vision & Founder",
  description:
    "Learn about Vayu Galaxy's mission to redefine future living through high-altitude architectural design, autonomous robotics, and breakthrough atmospheric engineering. Meet our founder, Mr. Raushan Kumar.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Vayu Galaxy — Our Mission, Vision & Founder",
    description:
      "Learn about Vayu Galaxy's mission to redefine future living through high-altitude architectural design, autonomous robotics, and breakthrough atmospheric engineering.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: "/assets/aboutheader.jpg",
        width: 1200,
        height: 630,
        alt: "Vayu Galaxy architectural vision concept",
      },
    ],
  },
  twitter: {
    title: "About Vayu Galaxy — Our Mission, Vision & Founder",
    description:
      "Learn about Vayu Galaxy's mission to redefine future living through high-altitude architectural design, autonomous robotics, and breakthrough atmospheric engineering.",
    images: ["/assets/aboutheader.jpg"],
  },
};
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/layout/FinalCTA";
import ProjectGrid from "@/components/home/ProjectGrid";
import FounderSection from "@/components/home/FounderSection";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";
import { Parallax } from "@/components/animation/Parallax";

export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
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
        {/* About Page Hero */}
        <section className="relative w-full h-[55vh] md:h-[60vh] lg:h-[65vh] overflow-hidden flex flex-col items-center justify-center text-center px-6 bg-[#050505] pt-16 border-b border-white/[0.03]">
          {/* Parallax Background */}
          <Parallax speed={0.02} className="absolute inset-0 w-full h-full">
            <Image
              src="/assets/aboutheader.jpg"
              alt="Vayu Galaxy future-living architectural concept"
              fill
              className="object-cover opacity-75 pointer-events-none"
              priority
            />
          </Parallax>

          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-black/35 z-[1] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20 z-[1] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_70%)] z-[1] pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* Brow */}
            <div className="overflow-hidden py-0.5 -my-0.5 mb-4">
              <Reveal style="fade" direction="up" duration={1.0} delay={0.1}>
                <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.4em] text-[#B7A27A] uppercase">
                  THE VISION
                </span>
              </Reveal>
            </div>

            {/* Title */}
            <div className="overflow-hidden py-1 -my-1 mb-4">
              <Reveal style="fade" direction="up" duration={1.2} delay={0.25}>
                <h1 className="font-display text-[clamp(2rem,4.5vw+1rem,3.8rem)] font-bold text-[#F4F2ED] leading-[1.1] tracking-[0.02em] uppercase">
                  ABOUT VAYU GALAXY
                </h1>
              </Reveal>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden py-0.5 -my-0.5 max-w-xl">
              <Reveal style="fade" direction="up" duration={1.2} delay={0.4}>
                <p className="text-[0.95rem] sm:text-[1.1rem] font-sans font-light text-[#D1CFC9] leading-relaxed">
                  Engineering a new possibility for human habitation.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* "What Is Vayu Galaxy?" Section */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] py-16 sm:py-24 lg:py-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden">
          {/* Subtle Background Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

          <div className="max-w-[1200px] w-full flex flex-col items-center text-center relative z-10">
            {/* Brow */}
            <div className="overflow-hidden py-0.5 -my-0.5 mb-4">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase">
                  THE VISION
                </span>
              </Reveal>
            </div>

            {/* Section Heading */}
            <div className="mb-6 sm:mb-8 max-w-4xl">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.15}>
                <h2 className="font-display text-[26px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#F4F2ED] leading-[1.1] uppercase">
                  WHAT IS VAYU GALAXY?
                </h2>
              </Reveal>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
                <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] leading-[1.7] font-sans font-light text-[#E4E2DC]">
                  Vayu Galaxy is an exploration of how architecture, technology and human imagination can come together to create a new possibility for living. We envision environments that move beyond conventional boundaries—spaces designed to be intelligent, resilient and deeply connected to the future of humanity.
                </p>
              </Reveal>
              <Reveal style="fade" direction="up" duration={0.8} delay={0.35}>
                <p className="text-[0.9rem] sm:text-[0.975rem] md:text-[1.05rem] leading-[1.7] font-sans font-light text-[#A09F9A]">
                  From autonomous systems and advanced mobility to new approaches to human habitation, Vayu Galaxy brings together design, engineering and imagination to explore what comes next.
                </p>
              </Reveal>
            </div>

            {/* Architectural Video Container */}
            <div className="w-full relative flex flex-col items-center">
              <Parallax speed={0.03} className="w-full relative flex flex-col items-center">
                <Reveal style="fade" duration={1.2} delay={0.2} className="w-full flex flex-col items-center">
                  <div className="w-full relative overflow-hidden rounded-xl bg-white/[0.02] aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-w-[1000px] border border-white/[0.08] shadow-2xl">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover pointer-events-none"
                    >
                      <source src="/assets/bgvideo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <span className="block mt-4 text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#8E8E93] uppercase text-center max-w-[600px] px-4 select-none">
                    CONCEPTUAL ARCHITECTURAL MONOGRAPH — FUTURE HABITAT SYSTEM
                  </span>
                </Reveal>
              </Parallax>
            </div>
          </div>
        </section>

        {/* Projects Tech Heading */}
        <section className="h-[20vh] bg-black flex flex-col items-center justify-center text-[#FAFAFA] text-center border-y border-white/5">
          <h1 className="font-space-grotesk text-[24px] md:text-[28px] font-semibold uppercase tracking-[3px] m-0">
            Project
          </h1>
        </section>

        <ProjectGrid />

        <FounderSection
          title="Meet Our Founder"
          name="Mr. Raushan Kumar"
          descriptionParagraphs={[
            "Our visionary leader has built Vayu Galaxy with innovation and excellence at its core. Their journey is an inspiration, leading the way in the industry with groundbreaking solutions and a passion for progress.",
            "Our visionary leader has built Vayu Galaxy with innovation and excellence at its core.",
          ]}
        />
      </main>

      <FinalCTA />
      <Footer />
    </div>
  );
}
