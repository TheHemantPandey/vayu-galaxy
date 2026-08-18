"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";
import { Parallax } from "@/components/animation/Parallax";

interface SpecificationItem {
  label: string;
  value: string;
}

interface AboutSectionProps {
  id?: string;
  theme?: "light" | "dark";
  title: string | React.ReactNode;
  paragraphs: string[];
  imageSrc?: string; // Kept for API backwards-compatibility on other routes
  imageAlt?: string; // Kept for API backwards-compatibility on other routes
  imageMaxWidthClass?: string; // Kept for API backwards-compatibility on other routes
  imagePosition?: "left" | "right"; // Kept for API backwards-compatibility on other routes
  chapterNumber?: string;
  chapterLabel?: string;
  imageCaption?: string;
  layoutType?: "left-text" | "right-text";
  specifications?: SpecificationItem[];
}

/**
 * AboutSection — Premium Editorial Layout.
 * Supports:
 * 1. Text-Only Monograph with Specifications Sidebar (homepage redesign)
 * 2. Widescreen & Portrait Image Monographs (fallback layouts)
 * 3. Generic 12-Column Split Grid (subpage backwards-compatibility)
 */
export default function AboutSection({
  id,
  theme = "light",
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imageMaxWidthClass,
  chapterNumber,
  chapterLabel,
  imageCaption,
  layoutType = "left-text",
  specifications,
}: AboutSectionProps) {
  const isLight = theme === "light";
  const hasSpecs = specifications && specifications.length > 0;

  if (hasSpecs) {
    // 1. Text-Only Monograph Layout (No Image, Specs Sidebar, Staggered Columns)
    const leadParagraph = paragraphs[0];
    const bodyParagraphs = paragraphs.slice(1);

    return (
      <section
        id={id}
        className={`w-full py-20 md:py-32 px-6 md:px-[10%] flex justify-center items-center border-t ${isLight
          ? "bg-[#F4F2ED] text-[#1A1A1A] border-black/[0.05]"
          : "bg-[#050505] text-[#F4F2ED] border-white/[0.04]"
          }`}
      >
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Main Monograph Text Block */}
          <div className="col-span-12 lg:col-span-8 flex flex-col">
            {/* Chapter Label */}
            <div className="overflow-hidden py-0.5 -my-0.5 mb-4">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                {chapterNumber && (
                  <span className="block text-[0.7rem] sm:text-[0.75rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase hero-label">
                    {chapterNumber} &mdash; {chapterLabel}
                  </span>
                )}
              </Reveal>
            </div>

            {/* Section Title */}
            <div className="mb-8">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.15}>
                <h2
                  className={`font-display font-medium tracking-tight uppercase leading-[1.1] text-[28px] sm:text-[36px] md:text-[44px] ${isLight ? "text-[#1A1A1A]" : "text-[#F4F2ED]"
                    }`}
                >
                  {title}
                </h2>
              </Reveal>
            </div>

            {/* Lead Paragraph */}
            {leadParagraph && (
              <div className="mb-8">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.2}>
                  <p
                    className={`text-[1.1rem] sm:text-[1.2rem] leading-[1.65] font-sans font-light text-left ${isLight ? "text-[#3A3A36]" : "text-[#E4E2DC]"
                      }`}
                  >
                    {leadParagraph}
                  </p>
                </Reveal>
              </div>
            )}

            {/* Columns of Smaller Body Copy */}
            {bodyParagraphs.length > 0 && (
              <div className="border-t border-black/[0.08] dark:border-white/[0.08] pt-8 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {bodyParagraphs.map((p, idx) => (
                    <Reveal
                      key={idx}
                      style="fade"
                      direction="up"
                      duration={0.8}
                      delay={0.3 + idx * 0.15}
                    >
                      <p
                        className={`text-[0.925rem] sm:text-[0.975rem] leading-[1.7] font-sans font-light text-left ${isLight ? "text-[#555550]" : "text-[#B7B5AF]"
                          }`}
                      >
                        {p}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Specs Sidebar */}
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 flex flex-col border-t border-black/[0.08] dark:border-white/[0.08] pt-6 mt-4 lg:mt-0">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.25} className="w-full">
              <span className="block text-[0.65rem] font-mono tracking-[0.25em] text-[#8E8E93] uppercase mb-6 select-none">
                SPECIFICATIONS
              </span>

              <ul className="space-y-5 m-0 p-0 list-none">
                {specifications.map((spec, idx) => (
                  <li
                    key={idx}
                    className="border-b border-black/[0.04] dark:border-white/[0.04] pb-4 flex flex-col gap-1.5 list-none"
                  >
                    <span className="text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#B7A27A] uppercase select-none">
                      {spec.label}
                    </span>
                    <span className={`text-[0.85rem] sm:text-[0.9rem] font-sans font-light text-left ${isLight ? "text-[#1A1A1A]" : "text-[#F4F2ED]"
                      }`}>
                      {spec.value}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

        </div>
      </section>
    );
  }

  // Fallback layouts (if specifications are not passed but images exist):
  const isVayuGalaxyStory = imageSrc && imageSrc.includes("about");
  const isLordVishnuStory = imageSrc && imageSrc.includes("loadvishnu");

  if (isVayuGalaxyStory) {
    // 2a. Widescreen Architectural Showcase
    return (
      <section
        id={id}
        className={`w-full py-20 md:py-32 px-6 md:px-[10%] flex justify-center items-center border-t ${isLight
          ? "bg-[#F4F2ED] text-[#1A1A1A] border-black/[0.05]"
          : "bg-[#050505] text-[#F4F2ED] border-white/[0.04]"
          }`}
      >
        <div className="max-w-[1400px] w-full flex flex-col items-center">

          {/* Header Typography */}
          <div className="w-full max-w-3xl text-center mb-12 md:mb-16">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
              {chapterNumber && (
                <span className="block text-[0.75rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase mb-3 hero-label">
                  {chapterNumber} &mdash; {chapterLabel}
                </span>
              )}
              <h2
                className={`font-display font-medium tracking-tight uppercase leading-[1.1] text-[28px] sm:text-[36px] md:text-[44px] mb-6 ${isLight ? "text-[#1A1A1A]" : "text-[#F4F2ED]"
                  }`}
              >
                {title}
              </h2>
            </Reveal>

            <div className="space-y-4 max-w-2xl mx-auto">
              {paragraphs.map((p, idx) => (
                <Reveal
                  key={idx}
                  style="fade"
                  direction="up"
                  duration={0.8}
                  delay={0.2 + idx * 0.15}
                >
                  <p
                    className={`text-[0.95rem] sm:text-[1.05rem] leading-[1.7] font-sans font-light text-center ${isLight ? "text-[#444440]" : "text-[#C4C2BC]"
                      }`}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Large Architectural Landscape Render */}
          <div className="w-full relative flex flex-col items-center">
            <Parallax speed={0.03} className="w-full relative flex flex-col items-center">
              <Reveal style="fade" duration={1.2} delay={0.3} className="w-full flex flex-col items-center">
                <div
                  className="w-full relative overflow-hidden rounded-sm bg-black/5 aspect-[4/3] md:aspect-[16/9] max-w-[1200px]"
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 85vw"
                    className="object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
                    priority
                  />
                </div>

                {imageCaption && (
                  <span className="block mt-4 text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#8E8E93] uppercase text-center max-w-[600px] select-none">
                    {imageCaption}
                  </span>
                )}
              </Reveal>
            </Parallax>
          </div>

        </div>
      </section>
    );
  }

  if (isLordVishnuStory) {
    // 2b. Monumental Vertical Monograph
    return (
      <section
        id={id}
        className={`w-full py-20 md:py-32 px-6 md:px-[10%] flex justify-center items-center border-t ${isLight
          ? "bg-[#F4F2ED] text-[#1A1A1A] border-black/[0.05]"
          : "bg-[#050505] text-[#F4F2ED] border-white/[0.04]"
          }`}
      >
        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          <div className="block md:hidden order-1 w-full text-center">
            {chapterNumber && (
              <span className="block text-[0.65rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase mb-2 hero-label">
                {chapterNumber} / {chapterLabel}
              </span>
            )}
            <h2 className="font-display font-medium tracking-tight uppercase leading-[1.1] text-[28px] sm:text-[34px] text-[#1A1A1A]">
              {title}
            </h2>
          </div>

          {/* Large Monumental Portrait Image */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center w-full order-2 md:order-none">
            <Parallax speed={0.04} className="w-full relative flex flex-col items-center md:items-start">
              <Reveal style="fade" duration={1.2} delay={0.2} className="w-full flex flex-col items-center md:items-start">
                <div
                  className="w-full relative overflow-hidden rounded-sm bg-black/5 aspect-[9/16] max-w-[340px] sm:max-w-[380px] md:max-w-[440px] shadow-sm"
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
                  />
                </div>

                {imageCaption && (
                  <span className="block mt-4 text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#8E8E93] uppercase text-center md:text-left select-none max-w-[440px]">
                    {imageCaption}
                  </span>
                )}
              </Reveal>
            </Parallax>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-center order-3 md:order-none w-full self-center">
            <div className="hidden md:block mb-8">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                {chapterNumber && (
                  <span className="block text-[0.75rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase mb-3 hero-label">
                    {chapterNumber} &mdash; {chapterLabel}
                  </span>
                )}
                <h2
                  className={`font-display font-medium tracking-tight uppercase leading-[1.1] text-[36px] md:text-[42px] ${isLight ? "text-[#1A1A1A]" : "text-[#F4F2ED]"
                    }`}
                >
                  {title}
                </h2>
              </Reveal>
            </div>

            <div className="space-y-6 md:pl-8 border-l border-black/[0.04] dark:border-white/[0.04]">
              {paragraphs.map((p, idx) => (
                <Reveal
                  key={idx}
                  style="fade"
                  direction="up"
                  duration={0.8}
                  delay={0.3 + idx * 0.15}
                >
                  <p
                    className={`text-[0.95rem] sm:text-[1.05rem] leading-[1.7] font-sans font-light text-left ${isLight ? "text-[#444440]" : "text-[#C4C2BC]"
                      }`}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>
    );
  }

  // 3. Fallback layout: Generic 12-column grid layout for backwards-compatibility on other routes
  const isRightText = layoutType === "right-text";
  return (
    <section
      id={id}
      className={`w-full py-16 md:py-24 px-6 md:px-[10%] flex justify-center items-center border-t ${isLight
        ? "bg-[#F4F2ED] text-[#1A1A1A] border-black/[0.05]"
        : "bg-[#050505] text-[#F4F2ED] border-white/[0.04]"
        }`}
    >
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

        {/* Mobile Title */}
        <div className="block md:hidden order-1 w-full text-center">
          <h2 className="font-display font-medium tracking-tight uppercase leading-[1.1] text-[28px] sm:text-[34px] text-[#1A1A1A]">
            {title}
          </h2>
        </div>

        {/* Text column */}
        <div
          className={`col-span-12 md:col-span-7 ${isRightText ? "md:order-2" : "md:order-1"
            } flex flex-col justify-center order-3 md:order-none w-full`}
        >
          <div className="hidden md:block mb-8">
            <h2
              className={`font-display font-medium tracking-tight uppercase leading-[1.1] text-[36px] md:text-[42px] ${isLight ? "text-[#1A1A1A]" : "text-[#F4F2ED]"
                }`}
            >
              {title}
            </h2>
          </div>

          <div className="space-y-6 md:pl-8 border-l border-black/[0.04] dark:border-white/[0.04]">
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={`text-[0.95rem] sm:text-[1.05rem] leading-[1.7] font-sans font-light text-left ${isLight ? "text-[#444440]" : "text-[#C4C2BC]"
                  }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Image column */}
        {imageSrc && (
          <div
            className={`col-span-12 md:col-span-5 ${isRightText ? "md:order-1" : "md:order-2"
              } flex flex-col justify-center w-full order-2 md:order-none`}
          >
            <div
              className={`w-full relative overflow-hidden rounded-sm bg-black/5 aspect-square ${imageMaxWidthClass || "max-w-[400px]"
                }`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt || ""}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
