"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";
import { Parallax } from "@/components/animation/Parallax";

export default function CitiesAtRisk() {
  return (
    <section className="w-full bg-[#F4F2ED] text-[#1A1A1A] py-20 md:py-32 px-6 md:px-[10%] flex flex-col items-center border-t border-black/[0.05]">
      
      {/* Editorial Section Introduction */}
      <div className="max-w-[1200px] w-full mb-20 md:mb-32">
        <div className="max-w-3xl">
          <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
            <span className="block text-[0.7rem] sm:text-[0.75rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase mb-3">
              URBAN FUTURES
            </span>
            <h2 className="font-display font-medium tracking-tight uppercase leading-[1.1] text-[28px] sm:text-[38px] md:text-[48px] mb-6">
              Cities reaching environmental limits
            </h2>
            <p className="text-[1.05rem] sm:text-[1.15rem] leading-[1.65] font-sans font-light text-[#444440] text-left">
              Conventional land-based urban structures face critical environmental pressures. 
              Subsidence, rising sea levels, and changing shorelines present immediate risks, 
              forcing a paradigm shift in how we conceive human habitation.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Case Studies Container */}
      <div className="max-w-[1200px] w-full flex flex-col gap-24 md:gap-36">
        
        {/* Case Study 01: Dwarka */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Mobile Heading (rendered at top on mobile only) */}
          <div className="block lg:hidden col-span-12">
            <span className="block text-[0.65rem] font-mono tracking-[0.25em] text-[#B7A27A] uppercase mb-2">
              CASE STUDY 01 // HISTORICAL WARNING
            </span>
            <h3 className="font-display font-medium tracking-tight uppercase text-[24px] sm:text-[30px] leading-[1.2]">
              Dwarka, Gujarat
            </h3>
          </div>

          {/* Monograph Text Column */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center order-3 lg:order-1 w-full">
            <div className="hidden lg:block mb-6">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.15}>
                <span className="block text-[0.7rem] font-mono tracking-[0.25em] text-[#B7A27A] uppercase mb-2">
                  CASE STUDY 01 // HISTORICAL WARNING
                </span>
                <h3 className="font-display font-medium tracking-tight uppercase text-[32px] leading-[1.2]">
                  Dwarka, Gujarat
                </h3>
              </Reveal>
            </div>

            <div className="space-y-4 lg:pl-8 lg:border-l lg:border-black/[0.08]">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.2}>
                <p className="text-[0.95rem] sm:text-[1.025rem] leading-[1.7] font-sans font-light text-[#444440] text-left">
                  Dwarka, often associated with Lord Krishna, holds significant mythological importance in Indian history. 
                  According to ancient Hindu scriptures like the Mahabharata and Harivamsa, Dwarka was a city built by Krishna 
                  after moving from Mathura. It is described as a magnificent and prosperous city with elaborate palaces, 
                  gardens, and advanced infrastructure that eventually submerged beneath the Arabian Sea.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Visual Showcase Column (Image Right) */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex justify-center w-full order-2 lg:order-2">
            <Parallax speed={0.03} className="w-full relative flex justify-center">
              <Reveal style="fade" duration={1.2} delay={0.25} className="w-full flex justify-center">
                {/* Responsive crop matches the natural landscape model */}
                <div className="w-full relative overflow-hidden rounded-sm bg-black/5 aspect-[16/10] shadow-sm">
                  <Image
                    src="/assets/dwarka.jpg"
                    alt="Dwarka submerged visual"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover hover:scale-[1.015] transition-transform duration-700 ease-out"
                  />
                </div>
              </Reveal>
            </Parallax>
          </div>
        </div>

        {/* Divider Rule */}
        <div className="w-full border-t border-black/[0.08]" />

        {/* Case Study 02: Jakarta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Mobile Heading */}
          <div className="block lg:hidden col-span-12">
            <span className="block text-[0.65rem] font-mono tracking-[0.25em] text-[#B7A27A] uppercase mb-2">
              CASE STUDY 02 // CONTEMPORARY SUBSIDENCE
            </span>
            <h3 className="font-display font-medium tracking-tight uppercase text-[24px] sm:text-[30px] leading-[1.2]">
              Jakarta, Indonesia
            </h3>
          </div>

          {/* Visual Showcase Column (Image Left) */}
          <div className="col-span-12 lg:col-span-6 flex justify-center w-full order-2 lg:order-1">
            <Parallax speed={0.04} className="w-full relative flex justify-center">
              <Reveal style="fade" duration={1.2} delay={0.2} className="w-full flex justify-center">
                {/* Responsive container respects visual aspect ratio */}
                <div className="w-full relative overflow-hidden rounded-sm bg-black/5 aspect-[4/3] shadow-sm">
                  <Image
                    src="/assets/jakarta.webp"
                    alt="Jakarta subsidence aerial view"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover hover:scale-[1.015] transition-transform duration-700 ease-out"
                  />
                </div>
              </Reveal>
            </Parallax>
          </div>

          {/* Monograph Text Column with Metrics */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-center order-3 lg:order-2 w-full">
            <div className="hidden lg:block mb-6">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.15}>
                <span className="block text-[0.7rem] font-mono tracking-[0.25em] text-[#B7A27A] uppercase mb-2">
                  CASE STUDY 02 // CONTEMPORARY SUBSIDENCE
                </span>
                <h3 className="font-display font-medium tracking-tight uppercase text-[32px] leading-[1.2]">
                  Jakarta, Indonesia
                </h3>
              </Reveal>
            </div>

            <div className="space-y-6 lg:pl-8 lg:border-l lg:border-black/[0.08]">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
                <p className="text-[0.95rem] sm:text-[1.025rem] leading-[1.7] font-sans font-light text-[#444440] text-left">
                  Jakarta, the capital city of Indonesia, faces significant challenges due to subsidence and rising sea levels. 
                  This has led to the decision to relocate the capital to a new site on Borneo Island. Jakarta is sinking 
                  at an alarming rate of approximately 1 to 15 cm per year, threatening massive infrastructure.
                </p>
              </Reveal>

              {/* Elevated Statistics directly from existing content */}
              <div className="border-t border-black/[0.08] pt-6 mt-4 grid grid-cols-2 gap-6">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.3}>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-[26px] sm:text-[32px] font-medium tracking-tight uppercase text-[#1A1A1A] leading-none">
                      1–15 CM
                    </span>
                    <span className="text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#B7A27A] uppercase leading-none">
                      ANNUAL SINKING RATE
                    </span>
                  </div>
                </Reveal>
                <Reveal style="fade" direction="up" duration={0.8} delay={0.35}>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-[26px] sm:text-[32px] font-medium tracking-tight uppercase text-[#1A1A1A] leading-none">
                      2.5 M
                    </span>
                    <span className="text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#B7A27A] uppercase leading-none">
                      NORTH DECADE SUBSIDENCE
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Rule */}
        <div className="w-full border-t border-black/[0.08]" />

        {/* Case Study 03: Mumbai */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Mobile Heading */}
          <div className="block lg:hidden col-span-12">
            <span className="block text-[0.65rem] font-mono tracking-[0.25em] text-[#B7A27A] uppercase mb-2">
              CASE STUDY 03 // CLIMATE ACCELERATION
            </span>
            <h3 className="font-display font-medium tracking-tight uppercase text-[24px] sm:text-[30px] leading-[1.2]">
              Mumbai, Maharashtra
            </h3>
          </div>

          {/* Monograph Text Column with Highlights */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center order-3 lg:order-1 w-full">
            <div className="hidden lg:block mb-6">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.15}>
                <span className="block text-[0.7rem] font-mono tracking-[0.25em] text-[#B7A27A] uppercase mb-2">
                  CASE STUDY 03 // CLIMATE ACCELERATION
                </span>
                <h3 className="font-display font-medium tracking-tight uppercase text-[32px] leading-[1.2]">
                  Mumbai, Maharashtra
                </h3>
              </Reveal>
            </div>

            <div className="space-y-6 lg:pl-8 lg:border-l lg:border-black/[0.08]">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
                <p className="text-[0.95rem] sm:text-[1.025rem] leading-[1.7] font-sans font-light text-[#444440] text-left">
                  Global warming is not a distant threat but an immediate crisis requiring urgent action. 
                  The effects of rising temperatures, melting ice caps, and rising sea levels are already being felt 
                  worldwide, from shifting capitals to the potential submersion of coastal megacities like Mumbai.
                </p>
              </Reveal>

              {/* Elevated callouts from existing copy keywords */}
              <div className="border-t border-black/[0.08] pt-6 mt-4 grid grid-cols-2 gap-6">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.3}>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-[22px] sm:text-[26px] font-medium tracking-tight uppercase text-[#1A1A1A] leading-none">
                      IMMEDIATE
                    </span>
                    <span className="text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#B7A27A] uppercase leading-none">
                      CRISIS FACTOR
                    </span>
                  </div>
                </Reveal>
                <Reveal style="fade" direction="up" duration={0.8} delay={0.35}>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-[22px] sm:text-[26px] font-medium tracking-tight uppercase text-[#1A1A1A] leading-none">
                      SUBMERSION
                    </span>
                    <span className="text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#B7A27A] uppercase leading-none">
                      THREAT VECTOR
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Visual Showcase Column (Image Right) */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex justify-center w-full order-2 lg:order-2">
            <Parallax speed={0.03} className="w-full relative flex justify-center">
              <Reveal style="fade" duration={1.2} delay={0.25} className="w-full flex justify-center">
                {/* Widescreen presentation fits standard visual crop ratio */}
                <div className="w-full relative overflow-hidden rounded-sm bg-black/5 aspect-[16/9] shadow-sm">
                  <Image
                    src="/assets/mumbai.jpg"
                    alt="Mumbai flood exposure view"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover hover:scale-[1.015] transition-transform duration-700 ease-out"
                  />
                </div>
              </Reveal>
            </Parallax>
          </div>
        </div>

      </div>
    </section>
  );
}
