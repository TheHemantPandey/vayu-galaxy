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
        url: "/assets/headerabout.png",
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
    images: ["/assets/headerabout.png"],
  },
};
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal";
import { Parallax } from "@/components/animation/Parallax";

const projects = [
  {
    name: "Vayu Galaxy",
    category: "AERIAL TOWNSHIP",
    description: "Our signature master-planned high-altitude township vision combining drone logistics, solar shielding, and Vedic architectural principles.",
    href: "/",
    image: "/assets/about.jpeg"
  },
  {
    name: "Proto Robot",
    category: "EMERGENCY ROBOTICS",
    description: "Proto explores robotic assistance and emergency logistics for environments where human access is difficult or dangerous.",
    href: "/proto",
    image: "/assets/1.png"
  },
  {
    name: "Devi Drone",
    category: "AEROSPACE SYSTEMS",
    description: "A high-performance autonomous drone designed for security, thermal scanning, and emergency medical response.",
    href: "/devi",
    image: "/assets/2.png"
  },
  {
    name: "SPD T1",
    category: "ATMOSPHERIC DEFENSE",
    description: "A planetary-scale solar radiation shielding concept engineered to protect human environments for future generations.",
    href: "/spdt1",
    image: "/assets/3.png"
  }
];

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
            {/* Mobile & Tablet Image */}
            <div className="block md:hidden absolute inset-0 w-full h-full">
              <Image
                src="/assets/headerabout1.png"
                alt="Vayu Galaxy future-living architectural concept mobile"
                fill
                className="object-fill opacity-75 pointer-events-none scale-x-[1.2]"
                priority
              />
            </div>
            {/* Desktop Image */}
            <div className="hidden md:block absolute inset-0 w-full h-full">
              <Image
                src="/assets/headerabout.png"
                alt="Vayu Galaxy future-living architectural concept"
                fill
                className="object-fill opacity-75 pointer-events-none scale-x-[1.2]"
                priority
              />
            </div>
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
                <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.25em] text-[#B7A27A] uppercase">
                  THE VISION
                </span>
              </Reveal>
            </div>

            {/* Section Heading */}
            <div className="mb-6 sm:mb-8 max-w-4xl">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.15}>
                <h2 className="text-[clamp(1.8rem,4vw+1rem,3.2rem)] font-display font-bold text-[#F4F2ED] leading-[1.1] uppercase tracking-[0.5px]">
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
                      className="w-full h-full object-fill md:object-cover pointer-events-none"
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

        {/* Projects Heading & Transition */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] pt-24 pb-12 sm:pt-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden border-t border-white/[0.04]">
          {/* Subtle grid lines background overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

          <div className="max-w-[1200px] w-full text-center relative z-10">
            <div className="overflow-hidden py-0.5 -my-0.5 mb-4">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.25em] text-[#B7A27A] uppercase">
                  THE WORK
                </span>
              </Reveal>
            </div>

            <div className="mb-6 max-w-4xl mx-auto">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.15}>
                <h2 className="text-[clamp(1.8rem,4vw+1rem,3.2rem)] font-display font-bold text-[#F4F2ED] leading-[1.1] uppercase tracking-[0.5px]">
                  SELECTED PROJECTS
                </h2>
              </Reveal>
            </div>

            <div className="max-w-2xl mx-auto">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
                <p className="text-[0.9rem] sm:text-[0.975rem] md:text-[1.05rem] leading-[1.7] font-sans font-light text-[#A09F9A]">
                  An overview of Vayu Galaxy&apos;s pioneering concepts across autonomous robotics, high-altitude surveillance, solar shielding, and aerial urbanism.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="w-full bg-[#050505] text-[#F4F2ED] pb-24 md:pb-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

          <div className="max-w-[1200px] w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            {projects.map((project, index) => {
              const isExternal = project.href.startsWith("/#") || project.href.startsWith("#");

              const content = (
                <>
                  <div className="relative w-full aspect-[4/3] xs:aspect-[16/10] sm:aspect-video overflow-hidden rounded-xl bg-[#0c0c0c] border border-white/[0.08] shadow-2xl transition-all duration-300 group-hover:border-[#B7A27A]/50 group-focus-visible:border-[#B7A27A]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className={`${project.name === "Proto Robot"
                          ? "object-cover object-[60%_80%]"
                          : project.name === "SPD T1"
                            ? "object-cover object-[60%_60%]"
                            : "object-cover object-center"
                        } transition-transform duration-700 ease-out group-hover:scale-102`}
                    />
                  </div>

                  {/* Info details below the image */}
                  <div className="mt-6 flex flex-col items-start text-left w-full">
                    <span className="text-[0.65rem] sm:text-[0.7rem] font-mono tracking-[0.2em] text-[#B7A27A] uppercase mb-2 select-none">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-3 group-hover:text-[#B7A27A] transition-colors duration-300">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F4F2ED] uppercase tracking-[0.5px]">
                        {project.name}
                      </h3>
                      <span className="text-lg opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-[1.6] font-sans font-light text-[#A09F9A] max-w-xl">
                      {project.description}
                    </p>
                  </div>
                </>
              );

              return (
                <Reveal
                  key={project.name}
                  style="fade"
                  direction="up"
                  duration={0.8}
                  delay={0.1 + (index % 2) * 0.15}
                  className="group flex flex-col w-full"
                >
                  {isExternal ? (
                    <a href={project.href} className="flex flex-col w-full focus:outline-none">
                      {content}
                    </a>
                  ) : (
                    <Link href={project.href} className="flex flex-col w-full focus:outline-none">
                      {content}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Redesigned Founder Section */}
        <section id="founder" className="w-full bg-[#050505] text-[#F4F2ED] py-16 sm:py-24 lg:py-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative border-t border-white/[0.04] overflow-hidden">
          {/* Subtle Background Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

          <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center relative z-10">
            {/* Left Column: Editorial Content */}
            <div className="col-span-1 lg:col-span-7 flex flex-col text-left font-sans w-full">
              {/* Eyebrow Label */}
              <div className="overflow-hidden py-0.5 -my-0.5 mb-3">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                  <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.25em] text-[#B7A27A] uppercase">
                    THE VISIONARY
                  </span>
                </Reveal>
              </div>

              {/* Large Headline */}
              <div className="overflow-hidden py-1 -my-1 mb-4">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.2}>
                  <h2 className="text-[clamp(1.8rem,4vw+1rem,3.2rem)] font-display font-bold text-[#F4F2ED] leading-[1.1] uppercase tracking-[0.5px]">
                    THE THINKING BEHIND VAYU GALAXY
                  </h2>
                </Reveal>
              </div>

              {/* Visionary Name */}
              <div className="overflow-hidden py-0.5 -my-0.5 mb-6">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.3}>
                  <h4 className="text-base sm:text-lg md:text-xl font-medium text-[#F4F2ED] uppercase tracking-wider font-mono">
                    Mr. Raushan Kumar
                  </h4>
                </Reveal>
              </div>

              {/* Narrative Body Copy */}
              <div className="space-y-4 sm:space-y-6 mb-8 text-[#A09F9A] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.4}>
                  <p>
                    Vayu Galaxy is built upon a philosophy that architecture must shape the entire environment of human life. Envisioning a new layer of habitation requires a synthesis of scale, technology and structural geometry that directly supports human needs.
                  </p>
                </Reveal>
                <Reveal style="fade" direction="up" duration={0.8} delay={0.5}>
                  <p>
                    Led by designer and visionary Raushan Kumar, the concept translates monumental design thinking into functional models of protection and resilience. Vayu Galaxy represents a continuation of this spatial exploration—extending the possibilities of scale, form and technology to build a more resilient future.
                  </p>
                </Reveal>
              </div>

              {/* Social Platforms Links */}
              <Reveal style="fade" direction="up" duration={0.8} delay={0.6}>
                <div className="flex flex-wrap gap-5 sm:gap-6 items-center">
                  {[
                    { href: "https://www.facebook.com/", iconClass: "fab fa-facebook-f", label: "Facebook" },
                    { href: "https://x.com/", iconClass: "fab fa-twitter", label: "X / Twitter" },
                    { href: "https://www.instagram.com/", iconClass: "fab fa-instagram", label: "Instagram" },
                    { href: "https://www.linkedin.com/", iconClass: "fab fa-linkedin-in", label: "LinkedIn" },
                    { href: "https://www.youtube.com/", iconClass: "fab fa-youtube", label: "YouTube" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg sm:text-xl text-[#A09F9A] hover:text-[#B7A27A] transition-colors duration-300 transform hover:scale-110"
                      aria-label={`Visit Mr. Raushan Kumar on ${social.label}`}
                    >
                      <i className={social.iconClass}></i>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Large Editorial Portrait */}
            <div className="col-span-1 lg:col-span-5 flex justify-center w-full">
              <Parallax speed={0.02} className="w-full relative flex justify-center lg:justify-end">
                <Reveal style="fade" duration={1.2} delay={0.3} className="w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] lg:max-w-none">
                  <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.08] shadow-2xl group">
                    <Image
                      src="/assets/raushan.png"
                      alt="Mr. Raushan Kumar - Designer and Visionary behind Vayu Galaxy"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-102"
                      priority
                    />
                  </div>
                </Reveal>
              </Parallax>
            </div>
          </div>
        </section>
      </main>

      {/* Redesigned Closing CTA Section */}
      <section className="bg-[#050505] w-full border-t border-white/[0.04] pt-24 pb-16 md:pt-36 md:pb-24 lg:pt-48 lg:pb-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative z-10 overflow-hidden">
        {/* Subtle blueprint grid background overlay */}
        <div className="absolute inset-0 footer-grid-bg pointer-events-none opacity-20 z-0" />

        <div className="max-w-[1200px] w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content & Action Button */}
          <div className="col-span-1 lg:col-span-7 flex flex-col text-left items-start">
            {/* Status indicator pill */}
            <div className="overflow-hidden py-0.5 -my-0.5 mb-4">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  SYSTEM REGISTRATION ACTIVE
                </div>
              </Reveal>
            </div>

            {/* Eyebrow Label */}
            <div className="overflow-hidden py-0.5 -my-0.5 mb-4">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.15}>
                <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.25em] text-[#B7A27A] uppercase">
                  THE NEXT HORIZON
                </span>
              </Reveal>
            </div>

            {/* Display Headline */}
            <div className="overflow-hidden py-1 -my-1 mb-6">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
                <h2 className="text-[clamp(1.8rem,4.5vw+1rem,3.8rem)] font-display font-bold text-[#F4F2ED] uppercase leading-[1.05] tracking-tight max-w-2xl">
                  THE FUTURE OF HUMAN HABITATION STARTS WITH A VISION.
                </h2>
              </Reveal>
            </div>

            {/* Supporting Copy */}
            <div className="mb-8 text-[#A09F9A] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.35}>
                <p>
                  Vayu Galaxy is an exploration of how architecture, technology and human imagination can come together to create a different possibility for tomorrow.
                </p>
              </Reveal>
            </div>

            {/* Architectural solid button CTA */}
            <Reveal style="fade" direction="up" duration={0.8} delay={0.45}>
              <Link
                href="/book-now"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F4F2ED] text-[#050505] hover:bg-transparent border border-transparent hover:border-[#F4F2ED] hover:text-[#F4F2ED] text-xs font-mono font-extrabold tracking-[0.25em] uppercase transition-all duration-500 rounded-sm group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F4F2ED]"
              >
                BOOK REGISTRATION
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Large Architectural Render */}
          <div className="col-span-1 lg:col-span-5 flex justify-center w-full">
            <Parallax speed={0.025} className="w-full relative flex justify-center lg:justify-end">
              <Reveal style="fade" duration={1.2} delay={0.3} className="w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] lg:max-w-none">
                <div className="relative w-full aspect-[4/3] xs:aspect-[16/10] sm:aspect-video lg:aspect-[4/3] overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.08] shadow-2xl group">
                  <Image
                    src="/assets/about.jpeg"
                    alt="Vayu Galaxy architectural landscape render"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    priority
                  />
                </div>
              </Reveal>
            </Parallax>
          </div>
        </div>

        {/* Fine bottom accent line/transition visually leading into footer */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <Footer />
    </div>
  );
}
