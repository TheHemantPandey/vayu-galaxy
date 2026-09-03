import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Reveal } from "@/components/animation/Reveal";
import JobApplicationForm from "@/components/careers/JobApplicationForm";
import { jobOpenings } from "@/data/careers";
import { SITE_URL } from "@/lib/seo-config";
import TrackView from "@/components/analytics/TrackView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobOpenings.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobOpenings.find((j) => j.slug === slug);
  
  if (!job) {
    return {
      title: "Position Not Found | Vayu Galaxy Careers",
    };
  }

  const canonicalUrl = `${SITE_URL}/careers/${job.slug}`;

  return {
    title: `${job.title} | Careers | Vayu Galaxy`,
    description: job.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: `${job.title} | Careers | Vayu Galaxy`,
      description: job.shortDescription,
      images: [
        {
          url: "/assets/about.jpeg",
          width: 1200,
          height: 630,
          alt: `${job.title} position at Vayu Galaxy`,
        },
      ],
    },
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = jobOpenings.find((j) => j.slug === slug);

  if (!job || job.status !== "open") {
    notFound();
  }

  return (
    <div className="job-detail-page-wrapper bg-[#050505] text-[#FAFAFA] min-h-screen flex flex-col justify-between relative overflow-hidden font-space-grotesk">
      <TrackView
        eventName="view_job_opening"
        params={{
          job_slug: job.slug,
          job_title: job.title,
          job_department: job.department,
          employment_type: job.employmentType,
        }}
      />
      {/* FontAwesome style icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      {/* Subtle blueprint grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      
      {/* Ambient glow details */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#DFCFB7]/[0.02] blur-[120px] pointer-events-none rounded-full z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-400/[0.01] blur-[150px] pointer-events-none rounded-full z-0" />

      <Header />

      <main className="flex-grow pt-32 pb-24 relative z-10 max-w-4xl mx-auto px-6 w-full">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#DFCFB7] hover:text-white uppercase transition-colors"
          >
            ← BACK TO CAREERS
          </Link>
        </div>

        {/* Header Block */}
        <section className="border-b border-white/[0.08] pb-10 mb-10">
          <Reveal style="fade" direction="up" duration={0.8}>
            <div className="flex flex-wrap gap-2.5 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#DFCFB7] bg-[#DFCFB7]/5 border border-[#DFCFB7]/15 rounded px-2.5 py-1 uppercase font-semibold">
                {job.department}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-400/5 border border-cyan-400/15 rounded px-2.5 py-1 uppercase font-semibold">
                {job.employmentType}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 bg-white/5 border border-white/10 rounded px-2.5 py-1 uppercase font-semibold">
                {job.location}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-display leading-tight mb-4">
              {job.title}
            </h1>

            <div className="text-xs font-mono tracking-wider text-zinc-500 uppercase">
              EXPERIENCE REQUIRED: {job.experience} &bull; POSTED: {job.postedDate}
            </div>
          </Reveal>
        </section>

        {/* Editorial Body Content */}
        <section className="space-y-12 mb-16">
          <Reveal style="fade" direction="up" duration={0.9} delay={0.1}>
            
            {/* Overview */}
            <div className="prose prose-invert max-w-none text-zinc-400 font-light leading-[1.8] text-sm sm:text-base space-y-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#DFCFB7] uppercase mb-4">
                ROLE OVERVIEW
              </h2>
              <p className="text-justify">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4 pt-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#DFCFB7] uppercase">
                CORE RESPONSIBILITIES
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-zinc-400 font-light">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="leading-relaxed">{resp}</li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="space-y-4 pt-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#DFCFB7] uppercase">
                PROFESSIONAL REQUIREMENTS
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-zinc-400 font-light">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="leading-relaxed">{req}</li>
                ))}
              </ul>
            </div>

            {/* Preferred Qualifications */}
            {job.preferredQualifications && job.preferredQualifications.length > 0 && (
              <div className="space-y-4 pt-4">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#DFCFB7] uppercase">
                  PREFERRED QUALIFICATIONS
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-zinc-400 font-light">
                  {job.preferredQualifications.map((pref, idx) => (
                    <li key={idx} className="leading-relaxed">{pref}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {job.skills && job.skills.length > 0 && (
              <div className="space-y-4 pt-4">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#DFCFB7] uppercase mb-3">
                  TECHNOLOGY &amp; SKILLS MATRIX
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono tracking-wider text-white bg-white/[0.03] border border-white/10 rounded-lg px-3 py-1.5 uppercase font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </Reveal>
        </section>

        {/* APPLICATION FORM WRAPPER */}
        <section id="application-form" className="pt-8 border-t border-white/[0.08]">
          <Reveal style="fade" direction="up" duration={0.8}>
            <JobApplicationForm job={job} />
          </Reveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}
