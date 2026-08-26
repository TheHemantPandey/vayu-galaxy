import React from "react";
import Link from "next/link";
import { JobOpening } from "@/data/careers";

interface JobCardProps {
  job: JobOpening;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/careers/${job.slug}`} className="group block no-underline h-full">
      <article className="border border-white/10 rounded-2xl p-6 bg-zinc-950/40 hover:bg-zinc-900/40 hover:border-[#DFCFB7] transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden font-space-grotesk shadow-2xl">
        {/* Subtle grid accent inside cards */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none z-0" />
        
        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] font-mono tracking-widest text-[#DFCFB7] bg-[#DFCFB7]/5 border border-[#DFCFB7]/15 rounded-md px-2.5 py-1 uppercase font-semibold">
              {job.department}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-400/5 border border-cyan-400/15 rounded-md px-2.5 py-1 uppercase font-semibold">
              {job.employmentType}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-[#DFCFB7] transition-colors leading-snug uppercase tracking-wide mb-3">
            {job.title}
          </h3>

          <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
            {job.shortDescription}
          </p>
        </div>

        <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between relative z-10">
          <div className="flex flex-col gap-1 text-[11px] font-mono tracking-wider text-zinc-500 uppercase">
            <span>Location: {job.location}</span>
            <span>Experience: {job.experience}</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-mono select-none">
            VIEW ROLE <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
