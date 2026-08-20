import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFoundPage() {
  return (
    <div className="bg-[#050505] text-[#F4F2ED] min-h-screen flex flex-col justify-between relative overflow-hidden font-space-grotesk">
      {/* Subtle blueprint grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      
      {/* Cinematic galaxy/space core glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[radial-gradient(circle_at_center,rgba(183,162,122,0.06)_0%,transparent_65%)] pointer-events-none z-0 rounded-full animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-red-600/[0.01] blur-[100px] pointer-events-none rounded-full z-0" />
      
      <Header />

      <main className="flex-grow flex flex-col justify-center items-center text-center relative z-10 px-6 py-24 sm:py-32">
        <div className="max-w-xl mx-auto space-y-6 sm:space-y-8 flex flex-col items-center">
          
          {/* Eyebrow marker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/20 border border-red-500/20 text-red-400 text-[10px] sm:text-xs font-mono tracking-widest uppercase animate-pulse select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
            ERROR 404 // SYSTEM ANOMALY
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest text-[#F4F2ED] uppercase font-display leading-tight max-w-lg select-none">
            LOST IN THE GALAXY
          </h1>

          {/* Subheading */}
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-light max-w-sm sm:max-w-md leading-relaxed select-none">
            The coordinates you&apos;re looking for don&apos;t exist in our current map. The transmission may have been interrupted or moved.
          </p>

          {/* Actions CTA Section */}
          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
            {/* Primary Action */}
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#B7A27A] hover:bg-[#F4F2ED] text-[#050505] hover:text-[#050505] text-xs font-mono font-bold tracking-[0.25em] uppercase transition-all duration-300 rounded-sm shadow-lg shadow-black/20"
            >
              BACK TO HOME
            </Link>

            {/* Secondary Action */}
            <Link
              href="/spdt1"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent hover:bg-white/[0.04] border border-white/10 hover:border-white/20 text-[#F4F2ED] hover:text-white text-xs font-mono font-bold tracking-[0.25em] uppercase transition-all duration-300 rounded-sm"
            >
              EXPLORE INNOVATION
            </Link>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
