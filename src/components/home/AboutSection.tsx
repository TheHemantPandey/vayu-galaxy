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
  imageFill?: boolean;
}

/**
 * AboutSection — Clean White Editorial Layout.
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
  imageMaxWidthClass: _imageMaxWidthClass,
  chapterNumber,
  chapterLabel,
  imageCaption,
  layoutType = "left-text",
  specifications,
  imageFill = false,
}: AboutSectionProps) {
  const hasSpecs = specifications && specifications.length > 0;
  const isDark = theme === "dark";
  const bgClass = isDark ? "bg-[#050505]" : "bg-[#FFFFFF]";
  const textClass = isDark ? "text-[#F4F2ED]" : "text-[#111111]";
  const headingClass = isDark ? "text-[#F4F2ED]" : "text-[#111111]";
  const leadParagraphClass = isDark ? "text-zinc-300" : "text-[#2A2A28]";
  const bodyParagraphClass = isDark ? "text-zinc-400" : "text-[#555550]";
  const fallbackBodyParagraphClass = isDark ? "text-zinc-400" : "text-[#444440]";
  const borderClass = isDark ? "border-white/[0.08]" : "border-black/[0.08]";
  const topBorderClass = isDark ? "border-white/[0.08]" : "border-black/[0.06]";
  const cardBgClass = isDark ? "bg-white/[0.01]" : "bg-black/5";
  const cardBorderClass = isDark ? "border-white/[0.08]" : "border-black/[0.08]";
  const specBorderClass = isDark ? "border-white/[0.06]" : "border-black/[0.06]";

  if (hasSpecs) {
    // 1. Text-Only Monograph Layout (No Image, Specs Sidebar, Staggered Columns)
    const leadParagraph = paragraphs[0];
    const bodyParagraphs = paragraphs.slice(1);

    return (
      <section
        id={id}
        className={`w-full ${bgClass} ${textClass} py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-[10%] flex justify-center items-center border-t ${topBorderClass} relative overflow-hidden font-space-grotesk`}
      >
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">

          {/* Main Monograph Text Block */}
          <div className="col-span-1 lg:col-span-8 flex flex-col w-full">
            {/* Chapter Label */}
            <div className="overflow-hidden py-0.5 -my-0.5 mb-3 sm:mb-4">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                {chapterNumber && (
                  <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.2em] sm:tracking-[0.3em] text-[#9E824C] uppercase hero-label break-words">
                    {chapterNumber} &mdash; {chapterLabel}
                  </span>
                )}
              </Reveal>
            </div>

            {/* Section Title */}
            <div className="mb-6 sm:mb-8">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.15}>
                <h2 className={`font-display font-medium tracking-tight uppercase leading-[1.15] sm:leading-[1.1] text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] break-words ${headingClass}`}>
                  {title}
                </h2>
              </Reveal>
            </div>

            {/* Lead Paragraph */}
            {leadParagraph && (
              <div className="mb-6 sm:mb-8">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.2}>
                  <p className={`text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] leading-[1.6] sm:leading-[1.65] font-sans font-light text-left ${leadParagraphClass}`}>
                    {leadParagraph}
                  </p>
                </Reveal>
              </div>
            )}

            {/* Columns of Smaller Body Copy */}
            {bodyParagraphs.length > 0 && (
              <div className={`border-t ${borderClass} pt-6 sm:pt-8 mt-2 sm:mt-4`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                  {bodyParagraphs.map((p, idx) => (
                    <Reveal
                      key={idx}
                      style="fade"
                      direction="up"
                      duration={0.8}
                      delay={0.3 + idx * 0.15}
                    >
                      <p className={`text-[0.875rem] sm:text-[0.925rem] md:text-[0.975rem] leading-[1.65] sm:leading-[1.7] font-sans font-light text-left ${bodyParagraphClass}`}>
                        {p}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Specs Sidebar */}
          <div className={`col-span-1 lg:col-span-4 xl:col-span-3 lg:col-start-9 xl:col-start-10 flex flex-col border-t ${borderClass} pt-6 mt-4 lg:mt-0 lg:border-t-0 lg:pt-0 w-full`}>
            <Reveal style="fade" direction="up" duration={0.8} delay={0.25} className="w-full">
              <span className="block text-[0.6rem] sm:text-[0.65rem] font-mono tracking-[0.25em] text-[#71717A] uppercase mb-4 sm:mb-6 select-none">
                SPECIFICATIONS
              </span>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col lg:space-y-5 gap-4 sm:gap-6 lg:gap-0 m-0 p-0 list-none w-full">
                {specifications.map((spec, idx) => (
                  <li
                    key={idx}
                    className={`border-b ${specBorderClass} pb-3 sm:pb-4 flex flex-col gap-1 sm:gap-1.5 list-none`}
                  >
                    <span className="text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#9E824C] uppercase select-none">
                      {spec.label}
                    </span>
                    <span className={`text-[0.8rem] sm:text-[0.85rem] md:text-[0.9rem] font-sans font-light text-left break-words ${textClass}`}>
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
        className={`w-full ${bgClass} ${textClass} py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-[10%] flex justify-center items-center border-t ${topBorderClass} relative overflow-hidden font-space-grotesk`}
      >
        <div className="max-w-[1400px] w-full flex flex-col items-center">

          {/* Header Typography */}
          <div className="w-full max-w-3xl text-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
              {chapterNumber && (
                <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.25em] sm:tracking-[0.3em] text-[#9E824C] uppercase mb-2.5 sm:mb-3 hero-label">
                  {chapterNumber} &mdash; {chapterLabel}
                </span>
              )}
              <h2 className={`font-display font-medium tracking-tight uppercase leading-[1.15] sm:leading-[1.1] text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] mb-4 sm:mb-6 break-words ${headingClass}`}>
                {title}
              </h2>
            </Reveal>

            <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
              {paragraphs.map((p, idx) => (
                <Reveal
                  key={idx}
                  style="fade"
                  direction="up"
                  duration={0.8}
                  delay={0.2 + idx * 0.15}
                >
                  <p className={`text-[0.875rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.65] sm:leading-[1.7] font-sans font-light text-center ${fallbackBodyParagraphClass}`}>
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
                <div className={`w-full relative overflow-hidden rounded-xl ${cardBgClass} aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-w-[1200px] border ${cardBorderClass} shadow-lg`}>
                  <Image
                    src={imageSrc}
                    alt={imageAlt || ""}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
                    priority
                  />
                </div>

                {imageCaption && (
                  <span className="block mt-3 sm:mt-4 text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#71717A] uppercase text-center max-w-[600px] px-4 select-none">
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
        className={`w-full ${bgClass} ${textClass} py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-[10%] flex justify-center items-center border-t ${topBorderClass} relative overflow-hidden font-space-grotesk`}
      >
        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

          {/* Mobile Title */}
          <div className="block md:hidden order-1 w-full text-center">
            {chapterNumber && (
              <span className="block text-[0.65rem] font-mono tracking-[0.25em] text-[#9E824C] uppercase mb-2 hero-label">
                {chapterNumber} / {chapterLabel}
              </span>
            )}
            <h2 className={`font-display font-medium tracking-tight uppercase leading-[1.15] text-[20px] sm:text-[28px] ${headingClass}`}>
              {title}
            </h2>
          </div>

          {/* Large Monumental Portrait Image */}
          <div className="col-span-1 md:col-span-6 flex flex-col justify-center items-center md:items-start w-full order-2 md:order-none">
            <Parallax speed={0.04} className="w-full relative flex flex-col items-center md:items-start">
              <Reveal style="fade" duration={1.2} delay={0.2} className="w-full flex flex-col items-center md:items-start">
                <div className={`w-full relative overflow-hidden rounded-xl ${cardBgClass} aspect-[9/16] max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[440px] border ${cardBorderClass} shadow-lg`}>
                  <Image
                    src={imageSrc}
                    alt={imageAlt || ""}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 440px"
                    className="object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
                  />
                </div>

                {imageCaption && (
                  <span className="block mt-3 sm:mt-4 text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#71717A] uppercase text-center md:text-left select-none max-w-[440px] px-2 sm:px-0">
                    {imageCaption}
                  </span>
                )}
              </Reveal>
            </Parallax>
          </div>

          <div className="col-span-1 md:col-span-6 lg:col-span-5 lg:col-start-8 flex flex-col justify-center order-3 md:order-none w-full self-center">
            <div className="hidden md:block mb-6 lg:mb-8">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                {chapterNumber && (
                  <span className="block text-[0.75rem] font-mono tracking-[0.3em] text-[#9E824C] uppercase mb-3 hero-label">
                    {chapterNumber} &mdash; {chapterLabel}
                  </span>
                )}
                <h2 className={`font-display font-medium tracking-tight uppercase leading-[1.1] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] ${headingClass}`}>
                  {title}
                </h2>
              </Reveal>
            </div>

            <div className={`space-y-4 sm:space-y-6 md:pl-6 lg:pl-8 md:border-l ${borderClass}`}>
              {paragraphs.map((p, idx) => (
                <Reveal
                  key={idx}
                  style="fade"
                  direction="up"
                  duration={0.8}
                  delay={0.3 + idx * 0.15}
                >
                  <p className={`text-[0.875rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.65] sm:leading-[1.7] font-sans font-light text-left ${fallbackBodyParagraphClass}`}>
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
      className={`w-full ${bgClass} ${textClass} py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[10%] flex justify-center items-center border-t ${topBorderClass} relative overflow-hidden font-space-grotesk`}
    >
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

        {/* Mobile Title */}
        <div className="block md:hidden order-1 w-full text-center">
          <h2 className={`font-display font-medium tracking-tight uppercase leading-[1.15] text-[20px] sm:text-[28px] ${headingClass}`}>
            {title}
          </h2>
        </div>

        {/* Text column */}
        <div
          className={`col-span-1 md:col-span-7 ${
            isRightText ? "md:order-2" : "md:order-1"
          } flex flex-col justify-center order-3 md:order-none w-full`}
        >
          <div className="hidden md:block mb-6 lg:mb-8">
            <h2 className={`font-display font-medium tracking-tight uppercase leading-[1.1] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] ${headingClass}`}>
              {title}
            </h2>
          </div>

          <div className={`space-y-4 sm:space-y-6 md:pl-6 lg:pl-8 md:border-l ${borderClass}`}>
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={`text-[0.875rem] sm:text-[0.95rem] md:text-[1.025rem] leading-[1.65] sm:leading-[1.7] font-sans font-light text-left ${fallbackBodyParagraphClass}`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Image column */}
        {imageSrc && (
          <div
            className={`col-span-1 md:col-span-5 ${
              isRightText ? "md:order-1" : "md:order-2"
            } flex flex-col justify-center items-center md:items-start w-full order-2 md:order-none`}
          >
            <div
              className={`w-full relative overflow-hidden rounded-xl ${cardBgClass} aspect-[4/3] xs:aspect-[16/10] sm:aspect-video md:aspect-[4/3] border ${cardBorderClass} shadow-md`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt || ""}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
                className={`${imageFill ? "object-cover" : "object-contain p-4 sm:p-6"} pointer-events-none`}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}