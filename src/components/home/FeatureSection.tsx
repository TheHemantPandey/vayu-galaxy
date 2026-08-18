"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface FeatureSectionProps {
  theme?: "light" | "dark";
  title?: string | React.ReactNode;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  buttonLink?: string;
  buttonText?: string;
}

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  imageSrc: string;
  imageAlt: string;
}

// Project dataset containing short descriptions and specific asset paths
const projectsData: ProjectItem[] = [
  {
    id: "devi-drone",
    title: "Devi Drone",
    category: "AEROSPACE SYSTEMS",
    description:
      "Devi Drone explores how autonomous aerial systems can support people where access, visibility and rapid response are critical. Designed around surveillance, emergency logistics and disaster response, the concept brings aerial intelligence and assistance closer to situations where it can make a difference.",
    capabilities: [
      "SECURITY",
      "SURVEILLANCE",
      "EMERGENCY RESPONSE",
      "MEDICAL LOGISTICS",
    ],
    imageSrc: "/assets/drone.png",
    imageAlt: "Devi Drone high-altitude UAV platform",
  },
  {
    id: "proto-robot",
    title: "Proto Robot",
    category: "EMERGENCY ROBOTICS",
    description:
      "Proto explores robotic assistance for environments where human access can be difficult or dangerous. Built around emergency logistics and rescue applications, the concept is intended to move essential supplies and assistance through challenging terrain.",
    capabilities: [
      "RESCUE OPERATIONS",
      "EMERGENCY LOGISTICS",
      "AUTONOMOUS DELIVERY",
      "HUMAN ASSISTANCE",
    ],
    imageSrc: "/assets/protoimg1.png",
    imageAlt: "Proto rolling emergency delivery robot",
  },
  {
    id: "spd-t1",
    title: "SPD T1",
    category: "ATMOSPHERIC DEFENSE",
    description:
      "SPD T1 explores a future-facing approach to protecting the environment from excessive solar radiation. The concept looks beyond individual buildings and systems toward technologies that could contribute to a more resilient environment for future generations.",
    capabilities: [
      "ATMOSPHERIC PROTECTION",
      "SOLAR SHIELDING",
      "ENVIRONMENTAL RESILIENCE",
      "PLANETARY PROTECTION",
    ],
    imageSrc: "/assets/spdt1.png",
    imageAlt: "SPD T1 solar radiation shielding technology",
  },
];

// Clean self-contained inline SVG icon for ArrowUpRight
const ArrowUpRight = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

/**
 * FeatureSection — Alternating Selected Projects Editorial Showcase.
 * Supports:
 * 1. Dark Alternating Grid Layout (theme="dark", Devi Drone, Proto Robot, and SPD T1 mainpage)
 * 2. Light Split 12-Column Grid Layout (theme="light", backwards-compatible fallback)
 */
export default function FeatureSection({
  theme = "light",
  title = "Selected Works",
  paragraphs = [],
  imageSrc = "/assets/drone.png",
  imageAlt = "Feature section image",
  buttonLink,
  buttonText = "Read More",
}: FeatureSectionProps) {
  const isDark = theme === "dark";
  const router = useRouter();

  const handleProjectClick = (id: string) => {
    // Reroute to project details pages
    if (id === "devi-drone") {
      router.push("/devi");
    } else if (id === "proto-robot") {
      router.push("/proto");
    } else if (id === "spd-t1") {
      router.push("/spdt1");
    }
  };

  if (isDark) {
    // 1. Premium Dark Alternating Showcase Layout
    return (
      <section
        id="projects"
        className="w-full bg-[#050505] text-[#F4F2ED] py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 relative border-t border-white/[0.04]"
      >
        {/* Monograph Selected Works Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8 max-w-[90rem] mx-auto w-full"
        >
          <div>
            <span className="block text-[0.65rem] sm:text-[0.75rem] font-sans tracking-[0.2em] sm:tracking-[0.25em] text-[#B7A27A] uppercase mb-2 sm:mb-3">
              AEROSPACE & ROBOTICS
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#F4F2ED] mb-3 sm:mb-4 tracking-tight">
              Our Innovations
            </h2>
            <p className="text-[#A09F9A] text-sm sm:text-base md:text-lg max-w-md font-light leading-relaxed">
              Technology designed to extend the possibilities of human life, mobility and protection.
            </p>
          </div>
          <span className="text-[#8E8E93] font-mono text-xs sm:text-sm md:text-base hidden md:block">
            (0{projectsData.length})
          </span>
        </motion.div>

        {/* Alternating Project Grid Series */}
        <div className="max-w-[90rem] mx-auto w-full flex flex-col gap-14 sm:gap-20 md:gap-28 lg:gap-36">
          {projectsData.map((project, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center border-b border-white/[0.04] pb-12 sm:pb-16 md:pb-24 last:border-b-0 last:pb-0"
              >
                {/* Widescreen Aspect Ratio Image Column */}
                <div
                  className={`col-span-1 lg:col-span-6 cursor-pointer w-full ${
                    isImageLeft ? "lg:order-first" : "lg:order-last"
                  }`}
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className="relative w-full aspect-[4/3] xs:aspect-[16/10] sm:aspect-video overflow-hidden rounded-lg sm:rounded-xl bg-white/[0.02] border border-white/[0.08] shadow-2xl group">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 45vw"
                      className="object-contain transition-transform duration-700 ease-out lg:group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Typography Information Column */}
                <div className="col-span-1 lg:col-span-6 flex flex-col justify-center w-full">
                  {/* Number Indicator */}
                  <span className="block font-mono text-xs sm:text-sm text-[#8E8E93] mb-2 sm:mb-4">
                    0{index + 1}
                  </span>

                  {/* Title & Arrow Click */}
                  <div
                    className="flex items-center justify-between gap-3 sm:gap-4 cursor-pointer group w-full sm:w-fit"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#F4F2ED] mb-2 sm:mb-3 hover:text-[#B7A27A] transition-colors duration-300 break-words">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="text-[#F4F2ED] flex-shrink-0 opacity-60 group-hover:opacity-100 group-hover:text-[#B7A27A] transition-all duration-300 mb-2 sm:mb-3"
                      size={24}
                    />
                  </div>

                  {/* Category Eyebrow */}
                  <span className="block text-[0.65rem] sm:text-xs font-sans tracking-[0.12em] sm:tracking-[0.15em] text-[#B7A27A] uppercase mb-3 sm:mb-4">
                    {project.category}
                  </span>

                  {/* Short description */}
                  <p className="text-[#A09F9A] text-sm sm:text-base md:text-lg font-light leading-relaxed mb-5 sm:mb-6 max-w-xl">
                    {project.description}
                  </p>

                  {/* Badges Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.capabilities.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/[0.04] text-[9px] sm:text-[10px] text-[#F4F2ED] border border-white/[0.08] font-sans font-medium uppercase tracking-wider"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  // 2. Light Split 12-Column Grid Layout (Backwards-compatible fallback)
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-[10%] flex justify-center items-center bg-[#F4F2ED] text-[#1A1A1A] border-t border-black/[0.05]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-12 lg:gap-x-16 items-center justify-between max-w-[1200px] w-full">
        <div className="col-span-1 md:col-span-6 flex justify-center items-center w-full order-2 md:order-1">
          <div className="w-full relative overflow-hidden rounded-sm bg-black/5 aspect-square max-w-[320px] xs:max-w-[360px] sm:max-w-[400px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain"
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-6 flex flex-col order-1 md:order-2 w-full">
          <h2 className="text-[22px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-display font-medium tracking-tight uppercase leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 break-words">
            {title}
          </h2>
          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-[0.875rem] sm:text-[0.95rem] md:text-[1.025rem] leading-[1.65] sm:leading-[1.7] font-sans font-light text-left text-[#444440]"
              >
                {p}
              </p>
            ))}
          </div>
          {buttonLink && (
            <a
              href={buttonLink}
              className="inline-block mt-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-[#F4F2ED] no-underline rounded-sm hover:bg-zinc-800 transition-colors duration-300 font-sans text-[13px] sm:text-[14px] font-medium tracking-[0.05em] w-fit text-center"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}