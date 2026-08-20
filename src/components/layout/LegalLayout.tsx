import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Reveal } from "@/components/animation/Reveal";

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  updatedAt: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, subtitle, updatedAt, children }: LegalLayoutProps) {
  return (
    <div className="bg-[#050505] text-[#F4F2ED] min-h-screen flex flex-col justify-between relative overflow-hidden font-space-grotesk">
      {/* Subtle blueprint grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      
      {/* Ambient glow details */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#B7A27A]/[0.02] blur-[120px] pointer-events-none rounded-full z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-red-600/[0.01] blur-[150px] pointer-events-none rounded-full z-0" />

      <Header />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-[10%] relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero Section */}
          <div className="border-b border-white/[0.08] pb-10 mb-12">
            <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
              <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-[0.25em] block mb-3">
                VAYU GALAXY // COMPLIANCE
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.1] mb-4">
                {title}
              </h1>
              {subtitle && (
                <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl leading-relaxed mb-6">
                  {subtitle}
                </p>
              )}
              <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                Last Updated: {updatedAt}
              </div>
            </Reveal>
          </div>

          {/* Page Body Content */}
          <div className="max-w-3xl">
            <Reveal style="fade" direction="up" duration={0.9} delay={0.25}>
              <article className="prose prose-invert prose-zinc max-w-none text-zinc-300 font-light leading-[1.8] text-sm sm:text-base space-y-8">
                {children}
              </article>
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
