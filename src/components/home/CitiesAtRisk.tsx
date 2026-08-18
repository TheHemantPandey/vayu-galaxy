"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";
import { Parallax } from "@/components/animation/Parallax";

interface CaseStudyItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  stats: {
    value: string;
    label: string;
  }[];
}

const caseStudies: CaseStudyItem[] = [
  {
    id: "dwarka",
    tag: "CASE STUDY 01 // HISTORICAL WARNING",
    title: "Dwarka, Gujarat",
    description:
      "Dwarka, often associated with Lord Krishna, holds significant mythological importance in Indian history. According to ancient Hindu scriptures like the Mahabharata and Harivamsa, Dwarka was a magnificent coastal metropolis with advanced marine infrastructure that eventually submerged beneath the Arabian Sea, serving as an ancient blueprint of vulnerability.",
    imageSrc: "/assets/dwarka.jpg",
    imageAlt: "Dwarka submerged visual representation",
    stats: [
      { value: "3,500+ YRS", label: "HISTORICAL AGE" },
      { value: "SUBMERGED", label: "ARABIAN SEA BASIN" },
    ],
  },
  {
    id: "jakarta",
    tag: "CASE STUDY 02 // CONTEMPORARY SUBSIDENCE",
    title: "Jakarta, Indonesia",
    description:
      "Jakarta faces critical ground collapse due to groundwater extraction and surging sea levels, forcing the nation to relocate its administrative capital to Nusantara on Borneo. Uncontrolled subsidence threatens to leave substantial portions of North Jakarta permanently below sea level.",
    imageSrc: "/assets/jakarta.webp",
    imageAlt: "Jakarta subsidence aerial view",
    stats: [
      { value: "1–15 CM", label: "ANNUAL SINKING RATE" },
      { value: "2.5 M", label: "NORTH DECADE SUBSIDENCE" },
    ],
  },
  {
    id: "mumbai",
    tag: "CASE STUDY 03 // CLIMATE ACCELERATION",
    title: "Mumbai, Maharashtra",
    description:
      "Built over seven reclaimed islands, Mumbai's low elevation and intense monsoon pressure expose its coastline to acute high-tide flooding. Rapid urban density paired with Arabian Sea thermal expansion places critical commercial infrastructure in vulnerable flood zones.",
    imageSrc: "/assets/mumbai.jpg",
    imageAlt: "Mumbai flood exposure view",
    stats: [
      { value: "IMMEDIATE", label: "CRISIS FACTOR" },
      { value: "SUBMERSION", label: "THREAT VECTOR" },
    ],
  },
  {
    id: "venice",
    tag: "CASE STUDY 04 // TIDAL CORROSION",
    title: "Venice, Italy",
    description:
      "Built upon wooden piles driven into alluvial mud, Venice endures accelerated 'Acqua Alta' surges compounded by historic groundwater extraction and Mediterranean sea level rise, placing the historic lagoon architecture at continuous structural risk.",
    imageSrc: "/assets/venice.jpg",
    imageAlt: "Venice lagoon high water surge",
    stats: [
      { value: "120+ CM", label: "ACQUA ALTA SURGE" },
      { value: "2 MM / YR", label: "RELATIVE LAND SUBSIDENCE" },
    ],
  },
  {
    id: "alexandria",
    tag: "CASE STUDY 05 // DELTA EROSION",
    title: "Alexandria, Egypt",
    description:
      "Positioned on the fragile Nile Delta basin, Alexandria experiences severe coastal erosion and saltwater intrusion. With upstream river controls reducing natural sediment replenishment, rising Mediterranean waters directly threaten historic heritage and coastal habitation.",
    imageSrc: "/assets/alexandria.jpg",
    imageAlt: "Alexandria Mediterranean coastline erosion",
    stats: [
      { value: "3–5 MM / YR", label: "SEA LEVEL RISE" },
      { value: "CRITICAL", label: "DELTA SALINITY IMPACT" },
    ],
  },
  {
    id: "bangkok",
    tag: "CASE STUDY 06 // ALLUVIAL COMPACTION",
    title: "Bangkok, Thailand",
    description:
      "Constructed on soft marine clay within the Chao Phraya River delta, Bangkok is sinking faster than surrounding sea levels are rising. Extreme rainfall, seasonal surges, and high soil compaction demand new defensive aerial and elevated living solutions.",
    imageSrc: "/assets/bangkok.jpg",
    imageAlt: "Bangkok delta flooding exposure",
    stats: [
      { value: "1–2 CM / YR", label: "CURRENT SINKING SPEED" },
      { value: "< 1.5 M", label: "AVERAGE ELEVATION ABOVE SEA" },
    ],
  },
];

export default function CitiesAtRisk() {
  return (
    <div className="w-full font-space-grotesk">
      {/* 1. WHY WE ARE STARTING — Black Theme Section */}
      <section className="w-full bg-[#050505] text-[#F4F2ED] py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-[10%] flex flex-col items-center border-t border-white/[0.06] relative overflow-hidden">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

        <div className="max-w-[1200px] w-full relative z-10">
          <div className="max-w-4xl">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#B7A27A] text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7A27A] animate-pulse" />
                THE GENESIS &amp; PURPOSE
              </div>

              <h2 className="font-display font-bold tracking-tight uppercase leading-[1.1] text-[26px] sm:text-[36px] md:text-[48px] lg:text-[56px] mb-6 text-[#F4F2ED] break-words">
                Why We Are Starting
              </h2>

              <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] leading-[1.65] font-sans font-light text-[#E4E2DC] text-left mb-6">
                Modern civilizations were built on the assumption that ground is permanent. Today, catastrophic land subsidence, unchecked coastal flooding, and climate extremes prove that Earth’s surface alone can no longer guarantee humanity’s safety.
              </p>

              <p className="text-[0.9rem] sm:text-[0.975rem] md:text-[1.05rem] leading-[1.7] font-sans font-light text-[#A09F9A] text-left">
                Vayu Galaxy begins here: an imperative mission to pioneer off-ground living, atmospheric defense grids, and autonomous aerial ecosystems before our existing megacities reach points of irreversible collapse.
              </p>
            </Reveal>
          </div>

          {/* Transitional Banner Bar */}
          <div className="mt-10 sm:mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-[0.7rem] sm:text-[0.75rem] font-mono tracking-[0.25em] text-[#8E8E93] uppercase">
              GLOBAL EVIDENCE ARCHIVE &mdash; CRITICAL HOTSPOTS
            </span>
            <span className="text-[0.7rem] sm:text-[0.75rem] font-mono text-[#B7A27A] uppercase tracking-wider">
              (0{caseStudies.length} LOCATIONS CATALOGED)
            </span>
          </div>
        </div>
      </section>

      {/* 2. CASE STUDIES CATALOG — White Theme Section */}
      <section className="w-full bg-[#FFFFFF] text-[#111111] py-14 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-[10%] flex flex-col items-center border-t border-black/[0.06] relative overflow-hidden">
        {/* Subtle Light Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

        <div className="max-w-[1200px] w-full flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-36 relative z-10">
          {caseStudies.map((study, index) => {
            const isImageLeft = index % 2 !== 0;

            return (
              <React.Fragment key={study.id}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
                  {/* Mobile Heading */}
                  <div className="block lg:hidden col-span-1 w-full">
                    <span className="block text-[0.6rem] sm:text-[0.65rem] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#9E824C] uppercase mb-1.5 sm:mb-2">
                      {study.tag}
                    </span>
                    <h3 className="font-display font-medium tracking-tight uppercase text-[20px] sm:text-[26px] md:text-[30px] leading-[1.2] break-words text-[#111111]">
                      {study.title}
                    </h3>
                  </div>

                  {/* Visual Showcase Column */}
                  <div
                    className={`col-span-1 lg:col-span-8 xl:col-span-7 flex justify-center w-full order-2 ${
                      isImageLeft
                        ? "lg:order-1"
                        : "lg:order-2 lg:col-start-5 xl:col-start-6"
                    }`}
                  >
                    <Parallax speed={0.03} className="w-full relative flex justify-center">
                      <Reveal style="fade" duration={1.2} delay={0.2} className="w-full flex justify-center">
                        <div className="w-full relative overflow-hidden rounded-xl bg-black/5 border border-black/[0.08] aspect-[4/3] xs:aspect-[16/10] sm:aspect-[16/9] shadow-lg group">
                          <Image
                            src={study.imageSrc}
                            alt={study.imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 700px"
                            className="object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                          />
                        </div>
                      </Reveal>
                    </Parallax>
                  </div>

                  {/* Monograph Text Column */}
                  <div
                    className={`col-span-1 lg:col-span-4 xl:col-span-5 flex flex-col justify-center order-3 w-full ${
                      isImageLeft
                        ? "lg:order-2 lg:col-start-9 xl:col-start-8"
                        : "lg:order-1"
                    }`}
                  >
                    <div className="hidden lg:block mb-6">
                      <Reveal style="fade" direction="up" duration={0.8} delay={0.15}>
                        <span className="block text-[0.7rem] font-mono tracking-[0.25em] text-[#9E824C] uppercase mb-2">
                          {study.tag}
                        </span>
                        <h3 className="font-display font-medium tracking-tight uppercase text-[28px] xl:text-[32px] leading-[1.2] text-[#111111]">
                          {study.title}
                        </h3>
                      </Reveal>
                    </div>

                    <div className="space-y-4 sm:space-y-6 lg:pl-6 xl:pl-8 lg:border-l border-black/[0.08]">
                      <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
                        <p className="text-[0.875rem] sm:text-[0.95rem] md:text-[1.025rem] leading-[1.65] sm:leading-[1.7] font-sans font-light text-[#555550] text-left">
                          {study.description}
                        </p>
                      </Reveal>

                      {/* Stat Badges */}
                      <div className="border-t border-black/[0.08] pt-4 sm:pt-6 mt-3 sm:mt-4 grid grid-cols-2 gap-3 sm:gap-6">
                        {study.stats.map((stat, sIdx) => (
                          <Reveal
                            key={sIdx}
                            style="fade"
                            direction="up"
                            duration={0.8}
                            delay={0.3 + sIdx * 0.05}
                          >
                            <div className="flex flex-col gap-1 sm:gap-1.5 p-3 rounded-lg bg-black/[0.03] border border-black/[0.06]">
                              <span className="font-display text-[20px] sm:text-[24px] md:text-[28px] font-medium tracking-tight uppercase text-[#111111] leading-none">
                                {stat.value}
                              </span>
                              <span className="text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] font-mono tracking-[0.15em] sm:tracking-[0.2em] text-[#9E824C] uppercase leading-tight">
                                {stat.label}
                              </span>
                            </div>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {index < caseStudies.length - 1 && (
                  <div className="w-full border-t border-black/[0.08]" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </div>
  );
}