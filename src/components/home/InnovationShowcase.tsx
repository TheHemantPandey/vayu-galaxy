"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";

/**
 * InnovationShowcase Section
 * Introduces Vayu Galaxy's core experimental projects and technologies (SPD T1, Devi Drone, Proto Robot).
 * Provides a transition from the general colony vision to active technical explorations,
 * linking directly to their dedicated specification pages.
 */
export default function InnovationShowcase() {
  const projects = [
    {
      id: "spd-t1",
      num: "01",
      title: "SPD T1",
      category: "ATMOSPHERIC PROTECTION",
      desc: "An experimental solar radiation shielding concept exploring high-altitude planetary defense systems to mitigate climate vulnerabilities.",
      imageSrc: "/assets/spdt1.png",
      href: "/spdt1",
      btnText: "EXPLORE SPDT1 →",
    },
    {
      id: "devi-drone",
      num: "02",
      title: "DEVIL DRONE",
      category: "AEROSPACE SYSTEMS",
      desc: "A modular, high-altitude autonomous surveillance and emergency logistics UAV concept designed to protect human environments.",
      imageSrc: "/assets/drone.png",
      href: "/devi",
      btnText: "EXPLORE DEVIL DRONE →",
    },
    {
      id: "proto-robot",
      num: "03",
      title: "PROTO ROBOT",
      category: "EMERGENCY ROBOTICS",
      desc: "An autonomous ground and high-altitude rolling robotics platform designed for search, rescue, and critical logistics assistance.",
      imageSrc: "/assets/protoimg1.png",
      href: "/proto",
      btnText: "EXPLORE PROTO ROBOT →",
    },
  ];

  return (
    <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-[10%] border-t border-white/[0.06] relative overflow-hidden font-space-grotesk">
      {/* Subtle Background Grid Line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        
        {/* Story Connection: Architectural Transition Eyebrow */}
        <div className="flex flex-col items-center gap-2 mb-16 md:mb-20 text-center font-mono text-[9px] tracking-[0.25em] text-zinc-500 uppercase select-none">
          <span>VAYU GALAXY &mdash; THE VISION</span>
          <span className="text-[#B7A27A] animate-pulse">&darr;</span>
          <span className="text-[#B7A27A]">INNOVATION &mdash; THE IDEAS BEING EXPLORED</span>
        </div>

        {/* Editorial Heading Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          <div className="col-span-1 lg:col-span-6">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
              <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.3em] text-[#B7A27A] uppercase mb-4">
                05 &mdash; TECHNOLOGY RESEARCH
              </span>
              <h2 className="font-display font-light uppercase tracking-tight text-[#F4F2ED] leading-[1.1] text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] break-words">
                BUILDING THE IDEAS<br />BEHIND THE VISION.
              </h2>
            </Reveal>
          </div>

          <div className="col-span-1 lg:col-span-6 lg:pt-14">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
              <p className="text-[1.05rem] sm:text-[1.15rem] md:text-[1.2rem] leading-[1.65] font-light text-[#A09F9A] text-left max-w-2xl">
                We explore speculative technologies and experimental projects designed to contribute to high-altitude environments, autonomous mobility, and atmospheric defense.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Innovation Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-white/[0.08] bg-white/[0.005] p-6 sm:p-8 rounded-lg flex flex-col justify-between relative group hover:border-[#B7A27A]/30 transition-colors duration-500 h-full"
            >
              {/* Top content wrapper */}
              <div>
                {/* Image plate wrapper */}
                <div className="relative w-full aspect-video bg-white/[0.01] border border-white/[0.06] rounded-sm p-4 flex items-center justify-center mb-6 overflow-hidden select-none">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-contain p-2 opacity-75 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 pointer-events-none"
                  />
                </div>

                {/* Index & Category */}
                <div className="flex items-center justify-between font-mono text-[9px] text-[#B7A27A] mb-3 select-none">
                  <span>{project.num} &mdash; SPEC</span>
                  <span>{project.category}</span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-xl sm:text-2xl font-light tracking-wider text-[#F4F2ED] mb-3 uppercase group-hover:text-[#B7A27A] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[0.85rem] sm:text-[0.9rem] leading-[1.65] font-light text-[#8E8E93] mb-8">
                  {project.desc}
                </p>
              </div>

              {/* Action Link */}
              <div className="border-t border-white/[0.08] pt-4 mt-auto">
                <Link
                  href={project.href}
                  className="inline-flex items-center text-xs font-mono tracking-wider text-[#B7A27A] group-hover:text-white uppercase transition-colors duration-300 focus:outline-none"
                >
                  {project.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
