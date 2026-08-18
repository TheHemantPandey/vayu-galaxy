"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";
import { Parallax } from "@/components/animation/Parallax";

interface MapViewProps {
  id?: string;
}

export default function MapView({ id = "location" }: MapViewProps) {
  return (
    <section className="w-full bg-[#F4F2ED] text-[#1A1A1A] flex flex-col items-center border-t border-black/[0.05]">
      
      {/* Plate 01: Geographic Positioning */}
      <div id={id} className="w-full pt-20 md:pt-32 flex flex-col items-center">
        
        {/* Intro Block (Contained) */}
        <div className="max-w-[1200px] w-full px-6 md:px-[10%] mb-10 md:mb-12">
          <div className="max-w-3xl">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
              <span className="block text-[0.7rem] sm:text-[0.75rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase mb-3">
                GEOGRAPHIC POSITIONING
              </span>
              <h2 className="font-display font-medium tracking-tight uppercase leading-[1.1] text-[28px] sm:text-[36px] md:text-[44px] mb-6">
                Delhi NCR Region
              </h2>
              <p className="text-[1.025rem] leading-[1.7] font-sans font-light text-[#444440] text-left">
                Vayu Galaxy conceptual positioning above conventional metropolitan zones, 
                mapping a new altitude layer for human habitation. The regional plan establishes 
                a secure spatial overlay above coastal and urban pressure areas in Delhi NCR, India.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Full-bleed Widescreen Visual Plate (16:9 aspect locks native layout) */}
        <div className="w-full relative overflow-hidden bg-black/5 aspect-[16/9] border-y border-black/[0.06]">
          <Parallax speed={0.02} className="w-full h-full relative" innerClassName="relative w-full h-full">
            <Image
              src="/assets/location.png"
              alt="Geographic location map of Vayu Galaxy"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </Parallax>
        </div>
      </div>

      {/* Plate 02: Spatial Configuration */}
      <div className="w-full pt-24 md:pt-36 pb-20 md:pb-32 flex flex-col items-center">
        
        {/* Intro Block (Contained) */}
        <div className="max-w-[1200px] w-full px-6 md:px-[10%] mb-10 md:mb-12">
          <div className="max-w-3xl">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
              <span className="block text-[0.7rem] sm:text-[0.75rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase mb-3">
                SPATIAL CONFIGURATION
              </span>
              <h2 className="font-display font-medium tracking-tight uppercase leading-[1.1] text-[28px] sm:text-[36px] md:text-[44px] mb-6">
                Township Masterplan
              </h2>
              <p className="text-[1.025rem] leading-[1.7] font-sans font-light text-[#444440] text-left">
                The conceptual layout of the aerial township, configuring modular residential, 
                agricultural, and cultural systems operating 1 to 5 km above the ground level. 
                The masterplan layout aligns these elements to optimize aerodynamic efficiency and solar exposure.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Full-bleed Widescreen Visual Plate (16:9 aspect locks native layout) */}
        <div className="w-full relative overflow-hidden bg-black/5 aspect-[16/9] border-y border-black/[0.06]">
          <Parallax speed={0.02} className="w-full h-full relative" innerClassName="relative w-full h-full">
            <Image
              src="/assets/map.png"
              alt="Site masterplan layout and spatial matrix"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
        </div>
      </div>

    </section>
  );
}
