"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { contactPlaceholderInfo, contactProjects } from "@/data/contact";

export default function ContactPage() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    interestedIn: "Vayu Galaxy",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (!formData.interestedIn) {
      validationErrors.interestedIn = "Please select an area of interest.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Log payload according to project submission architecture
      console.log("Submit Early Registration:", {
        type: "EARLY_REGISTRATION",
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        interestedIn: formData.interestedIn,
      });
      setIsSubmitted(true);
      setSubmissionFailed(false);
    } catch (err) {
      console.error("Early registration submit error:", err);
      setSubmissionFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTryAgain = () => {
    setSubmissionFailed(false);
    setIsSubmitted(false);
  };

  // Pre-configured connection categories with subjects
  const connections = [
    {
      num: "01",
      title: "PROJECT / BUSINESS",
      description: "Discuss a project, technology opportunity or business idea.",
      subject: "Project / Business Inquiry — Vayu Galaxy",
    },
    {
      num: "02",
      title: "PARTNERSHIP",
      description: "Explore collaboration and strategic opportunities.",
      subject: "Partnership Inquiry — Vayu Galaxy",
    },
    {
      num: "03",
      title: "MEDIA / PRESS",
      description: "For media, editorial and communication enquiries.",
      subject: "Media / Press Inquiry — Vayu Galaxy",
    },
    {
      num: "04",
      title: "CAREERS / OPPORTUNITIES",
      description: "For people interested in building with us.",
      subject: "Career / Opportunity Inquiry — Vayu Galaxy",
    },
    {
      num: "05",
      title: "GENERAL",
      description: "Something else? We'd still like to hear from you.",
      subject: "General Inquiry — Vayu Galaxy",
    },
  ];

  // Shared class for form labels (bolder, larger text size, and higher contrast)
  const labelClass =
    "text-xs font-bold uppercase tracking-[0.2em] text-black/75 group-focus-within:text-[#DFCFB7] transition-colors duration-300 font-mono";

  return (
    <div className="contact-page-wrapper bg-[#050505] text-white min-h-screen flex flex-col justify-between select-none">
      {/* FontAwesome style icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <Header />

      <main className="flex-grow pt-[60px]">
        
        {/* SECTION 01: HERO — minimal blueprint layout */}
        <section className="relative py-28 md:py-36 px-6 md:px-[10%] flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-[#050505] border-b border-white/5 min-h-[65vh]">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-[850px] w-full flex flex-col items-center">
            <span className="font-space-grotesk text-[11px] font-semibold uppercase tracking-[5px] text-[#DFCFB7] mb-6 block font-mono">
              CONTACT / VAYU GALAXY
            </span>
            <h1 className="font-space-grotesk text-[38px] md:text-[62px] font-semibold uppercase tracking-[1px] leading-[1.1] mb-8 text-[#FAFAFA]">
              LET&apos;S BUILD THE FUTURE<br />TOGETHER.
            </h1>
            <p className="font-space-grotesk text-[15px] md:text-[18px] text-[#A0A0A0] leading-relaxed max-w-[600px] mb-10 font-normal">
              Have a question, idea, partnership opportunity, or simply want to connect with Vayu Galaxy?
            </p>

            {/* Direct Actions (Not forms) */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={`mailto:${contactPlaceholderInfo.email}?subject=${encodeURIComponent("General Inquiry — Vayu Galaxy")}`}
                className="group bg-white text-black hover:bg-white/95 font-space-grotesk py-4 px-8 rounded-none uppercase font-semibold tracking-[2px] text-[11px] transition-all duration-300 inline-flex items-center gap-2"
              >
                EMAIL US{" "}
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none">
                  &rarr;
                </span>
              </a>
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group border border-white/20 hover:border-[#DFCFB7] text-white hover:text-[#DFCFB7] bg-transparent font-space-grotesk py-4 px-8 rounded-none uppercase font-semibold tracking-[2px] text-[11px] transition-all duration-300 inline-flex items-center gap-2"
              >
                EXPLORE OUR PROJECTS{" "}
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 02: DIRECT CONTACT — main content details */}
        <section className="bg-white text-black py-28 px-6 md:px-[10%] border-b border-black/5 relative z-10">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side: Brand Statement */}
            <div className="lg:col-span-6 border-l-2 border-[#DFCFB7] pl-6 md:pl-8">
              <span className="font-space-grotesk text-[11px] font-semibold uppercase tracking-[3px] text-[#8E8E93] block mb-3 font-mono">
                01 // CONTACT
              </span>
              <h2 className="font-space-grotesk text-[28px] md:text-[38px] font-medium uppercase tracking-[1px] leading-tight mb-8">
                START A CONVERSATION.
              </h2>
              <p className="font-space-grotesk text-[16px] md:text-[18px] text-black leading-relaxed font-medium mb-4">
                WE BELIEVE IN SHAPING THE FUTURE THROUGH ADVANCED AEROSPACE MOBILITY, INTELLECTUAL INFRASTRUCTURES, AND HUMAN-CENTERED DESIGN.
              </p>
              <p className="font-space-grotesk text-[14px] text-[#555555] leading-relaxed font-normal max-w-[480px]">
                Whether you&apos;re interested in our active projects, strategic collaborations, technology platforms or career opportunities, we&apos;d be glad to hear from you.
              </p>
            </div>

            {/* Right Side: Contact Information Layout */}
            <div className="lg:col-span-6 space-y-8 lg:pl-8">
              {/* EMAIL */}
              <div className="group border-b border-black/10 pb-6">
                <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#8E8E93] mb-1.5 block font-mono">
                  EMAIL
                </span>
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-lg md:text-xl font-medium tracking-wide">
                    {contactPlaceholderInfo.email}
                  </span>
                  <a
                    href={`mailto:${contactPlaceholderInfo.email}?subject=${encodeURIComponent("General Inquiry — Vayu Galaxy")}`}
                    className="font-space-grotesk text-[11px] font-bold uppercase tracking-[2px] text-[#DFCFB7] hover:text-black transition-colors duration-300 inline-flex items-center gap-1.5"
                  >
                    EMAIL US{" "}
                    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="group border-b border-black/10 pb-6">
                <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#8E8E93] mb-1.5 block font-mono">
                  PHONE
                </span>
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-lg md:text-xl font-medium tracking-wide">
                    {contactPlaceholderInfo.phone}
                  </span>
                  <a
                    href={`tel:${contactPlaceholderInfo.phone.replace(/\s+/g, "")}`}
                    className="font-space-grotesk text-[11px] font-bold uppercase tracking-[2px] text-[#DFCFB7] hover:text-black transition-colors duration-300 inline-flex items-center gap-1.5"
                  >
                    CALL US{" "}
                    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="group border-b border-black/10 pb-6">
                <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#8E8E93] mb-1.5 block font-mono">
                  LOCATION
                </span>
                <span className="text-lg md:text-xl font-medium tracking-wide block">
                  {contactPlaceholderInfo.location}
                </span>
              </div>

              {/* WORKING HOURS */}
              <div className="group pb-2">
                <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#8E8E93] mb-1.5 block font-mono">
                  WORKING HOURS
                </span>
                <span className="text-base text-[#555555] block font-normal">
                  {contactPlaceholderInfo.hours}
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 03: CONNECTION TYPES — elegant horizontal rows */}
        <section className="bg-[#0a0a0a] text-white py-28 px-6 md:px-[10%] border-b border-white/5 relative">
          {/* Subtle grid visual */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0"></div>

          <div className="max-w-[1200px] mx-auto relative z-10">
            
            <div className="mb-14 border-b border-white/10 pb-6">
              <span className="font-space-grotesk text-[11px] font-semibold uppercase tracking-[3px] text-[#DFCFB7] block mb-2 font-mono">
                02 // CONNECTIONS
              </span>
              <h2 className="font-space-grotesk text-[26px] md:text-[34px] font-semibold uppercase tracking-[1px] text-[#FAFAFA] m-0">
                WHY ARE YOU REACHING OUT?
              </h2>
            </div>

            {/* Horizontal Connection List */}
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {connections.map((item) => (
                <div 
                  key={item.num}
                  className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.01] px-4 transition-all duration-300"
                >
                  {/* Category Num & Title */}
                  <div className="flex items-center gap-6 md:w-1/3">
                    <span className="font-mono text-sm text-[#8E8E93] group-hover:text-[#DFCFB7] transition-colors duration-300">
                      {item.num}
                    </span>
                    <span className="font-space-grotesk text-[15px] font-semibold uppercase tracking-[2px] transition-transform duration-300 group-hover:translate-x-1.5">
                      {item.title}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="md:w-1/2">
                    <p className="font-space-grotesk text-[14px] text-[#A0A0A0] leading-relaxed m-0 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Connect Action Trigger (Email subject specific) */}
                  <div className="md:w-1/6 flex md:justify-end">
                    <a 
                      href={`mailto:${contactPlaceholderInfo.email}?subject=${encodeURIComponent(item.subject)}`}
                      className="font-space-grotesk text-[11px] font-bold uppercase tracking-[2.5px] text-[#FAFAFA] group-hover:text-[#DFCFB7] transition-colors duration-300 border-b border-white/20 group-hover:border-[#DFCFB7]/60 pb-1 inline-flex items-center gap-1 cursor-pointer"
                    >
                      CONNECT{" "}
                      <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 04: OUR WORLD / PROJECTS — refined 2x2 grid */}
        <section ref={projectsRef} id="projects" className="bg-[#0c0c0c] text-white py-28 px-6 md:px-[10%] border-b border-white/5">
          <div className="max-w-[1200px] mx-auto">
            
            <div className="mb-16 border-b border-white/10 pb-6 flex justify-between items-end">
              <div>
                <span className="font-space-grotesk text-[11px] font-semibold uppercase tracking-[3px] text-[#DFCFB7] block mb-2 font-mono">
                  03 // OUR WORLD
                </span>
                <h2 className="font-space-grotesk text-[26px] md:text-[34px] font-semibold uppercase tracking-[1px] text-[#FAFAFA] m-0">
                  BUILT FOR WHAT&apos;S NEXT.
                </h2>
                <p className="font-space-grotesk text-sm text-[#A0A0A0] mt-3 font-normal max-w-[500px]">
                  Explore the ideas, technologies and experiences Vayu Galaxy is building.
                </p>
              </div>
            </div>

            {/* Editorial 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {contactProjects.map((project) => (
                <div 
                  key={project.name}
                  className="group flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    {/* Visual Container */}
                    <div className="w-full h-[240px] md:h-[280px] overflow-hidden rounded-none mb-5 relative border border-white/5 bg-black/20 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <h3 className="font-space-grotesk text-[18px] font-semibold uppercase tracking-[1.5px] text-[#FAFAFA] mb-2">
                      {project.name}
                    </h3>
                    <p className="font-space-grotesk text-[13px] text-[#A0A0A0] leading-relaxed mb-4 max-w-[480px] font-normal">
                      {project.description}
                    </p>
                  </div>
                  <Link 
                    href={project.href}
                    className="font-space-grotesk text-[11px] font-bold uppercase tracking-[2px] text-[#DFCFB7] hover:text-[#5AAC4E] transition-all flex items-center gap-1.5 w-fit"
                  >
                    EXPLORE{" "}
                    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none">
                      &rarr;
                    </span>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 05: EARLY REGISTRATION — premium editorial split layout */}
        <section className="bg-white text-black py-28 px-6 md:px-[10%] border-b border-black/5 relative">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Indicator & Vertical branding detail */}
            <div className="lg:col-span-4 flex flex-col md:flex-row justify-between items-start gap-8 self-stretch">
              <div className="flex-grow">
                <span className="font-space-grotesk text-[11px] font-semibold uppercase tracking-[3px] text-[#8E8E93] block mb-3 font-mono">
                  04 // EARLY ACCESS
                </span>
                <h2 className="font-space-grotesk text-[28px] md:text-[38px] font-semibold uppercase tracking-[1.5px] leading-tight mb-6 text-black">
                  REGISTER YOUR<br />INTEREST.
                </h2>
                <p className="font-space-grotesk text-[14px] text-[#555555] leading-relaxed mb-3 font-normal max-w-[300px]">
                  Be among the first to know what Vayu Galaxy is building next.
                </p>
                <p className="font-space-grotesk text-[13px] text-[#8E8E93] leading-relaxed font-normal max-w-[280px]">
                  Register your interest and we&apos;ll keep you informed about relevant updates, launches and opportunities.
                </p>
              </div>
              
              {/* Technical branding detail */}
              <div className="hidden md:flex flex-col items-center gap-4 self-stretch border-l border-black/5 pl-8 pt-2 select-none">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8E8E93] [writing-mode:vertical-lr] rotate-180 h-28">
                  EARLY ACCESS
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8E8E93] [writing-mode:vertical-lr] rotate-180">
                  VAYU GALAXY
                </span>
                <span className="font-mono text-[18px] font-light text-black/25">2026 &rarr;</span>
              </div>
            </div>

            {/* Right Side: Underline Form Experience */}
            <div className="lg:col-span-8">
              {isSubmitted && !submissionFailed ? (
                <div className="flex flex-col items-center justify-center text-center p-12 border border-black/10 bg-[#FAFAFA] min-h-[360px] rounded-none">
                  <svg className="w-12 h-12 text-[#DFCFB7] mb-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-space-grotesk text-[22px] font-medium text-black uppercase tracking-[2px] mb-3">
                    THANK YOU.
                  </h3>
                  <p className="text-[#555555] leading-relaxed max-w-[420px] mb-8 font-space-grotesk text-sm font-normal">
                    Your interest has been registered. We&apos;ll keep you informed about what&apos;s coming next.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        city: "",
                        interestedIn: "Vayu Galaxy",
                      });
                    }}
                    className="group bg-black text-white hover:text-[#DFCFB7] border border-transparent hover:border-[#DFCFB7]/30 font-space-grotesk py-3 px-6 rounded-none uppercase font-semibold tracking-[2px] text-[10px] transition-all duration-300 cursor-pointer select-none inline-flex items-center gap-2"
                  >
                    Register Another Interest
                  </button>
                </div>
              ) : isSubmitted && submissionFailed ? (
                <div className="flex flex-col items-center justify-center text-center p-12 border border-red-500/20 bg-[#FFF5F5] min-h-[360px] rounded-none">
                  <svg className="w-12 h-12 text-red-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="font-space-grotesk text-[22px] font-medium text-red-600 uppercase tracking-[2px] mb-3">
                    REGISTRATION COULD NOT BE COMPLETED.
                  </h3>
                  <p className="text-[#777777] leading-relaxed max-w-[420px] mb-8 font-space-grotesk text-sm font-normal font-sans">
                    Something went wrong. Please try again.
                  </p>
                  <button
                    onClick={handleTryAgain}
                    className="group bg-black text-white hover:text-[#DFCFB7] border border-transparent hover:border-[#DFCFB7]/30 font-space-grotesk py-3 px-6 rounded-none uppercase font-semibold tracking-[2px] text-[10px] transition-all duration-300 cursor-pointer select-none inline-flex items-center gap-2"
                  >
                    TRY AGAIN &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegSubmit} className="space-y-8" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5 group">
                      <label htmlFor="reg_fullName" className={labelClass}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="reg_fullName"
                        disabled={isSubmitting}
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full bg-transparent border-0 border-b ${errors.fullName ? "border-red-500" : "border-black/10"} py-2 font-space-grotesk text-base font-semibold text-black placeholder-black/35 focus:outline-none focus:ring-0 focus:border-[#DFCFB7] transition-colors duration-300`}
                      />
                      {errors.fullName && (
                        <span className="text-red-500 text-[10px] mt-1 font-mono uppercase tracking-wider">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-1.5 group">
                      <label htmlFor="reg_email" className={labelClass}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="reg_email"
                        disabled={isSubmitting}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-transparent border-0 border-b ${errors.email ? "border-red-500" : "border-black/10"} py-2 font-space-grotesk text-base font-semibold text-black placeholder-black/35 focus:outline-none focus:ring-0 focus:border-[#DFCFB7] transition-colors duration-300`}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-[10px] mt-1 font-mono uppercase tracking-wider">{errors.email}</span>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5 group">
                      <label htmlFor="reg_phone" className={labelClass}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="reg_phone"
                        disabled={isSubmitting}
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-0 border-b border-black/10 py-2 font-space-grotesk text-base font-semibold text-black placeholder-black/35 focus:outline-none focus:ring-0 focus:border-[#DFCFB7] transition-colors duration-300"
                      />
                    </div>

                    {/* City / Location */}
                    <div className="flex flex-col gap-1.5 group">
                      <label htmlFor="reg_city" className={labelClass}>
                        City / Location
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="reg_city"
                        disabled={isSubmitting}
                        placeholder="Delhi NCR"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-0 border-b border-black/10 py-2 font-space-grotesk text-base font-semibold text-black placeholder-black/35 focus:outline-none focus:ring-0 focus:border-[#DFCFB7] transition-colors duration-300"
                      />
                    </div>

                    {/* I'M INTERESTED IN */}
                    <div className="flex flex-col gap-1.5 group col-span-1 md:col-span-2">
                      <label htmlFor="reg_interestedIn" className={labelClass}>
                        I&apos;M INTERESTED IN *
                      </label>
                      <div className="relative">
                        <select
                          name="interestedIn"
                          id="reg_interestedIn"
                          disabled={isSubmitting}
                          value={formData.interestedIn}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-0 border-b border-black/10 py-2 font-space-grotesk text-base font-semibold text-black focus:outline-none focus:ring-0 focus:border-[#DFCFB7] transition-colors duration-300 appearance-none cursor-pointer pr-8"
                        >
                          <option value="Vayu Galaxy">Vayu Galaxy</option>
                          <option value="Devi Drone">Devi Drone</option>
                          <option value="Proto">Proto</option>
                          <option value="SPD T1">SPD T1</option>
                          <option value="Future Projects">Future Projects</option>
                          <option value="General Updates">General Updates</option>
                        </select>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-black/40 text-[9px] pointer-events-none">▼</span>
                      </div>
                      {errors.interestedIn && (
                        <span className="text-red-500 text-[10px] mt-1 font-mono uppercase tracking-wider">{errors.interestedIn}</span>
                      )}
                    </div>
                  </div>

                  {/* Submit CTA & Privacy */}
                  <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group bg-black text-white hover:text-[#DFCFB7] border border-transparent hover:border-[#DFCFB7]/30 font-space-grotesk py-4 px-8 rounded-none uppercase font-semibold tracking-[2.5px] text-[11px] transition-all duration-300 cursor-pointer select-none inline-flex items-center gap-2"
                    >
                      {isSubmitting ? "REGISTERING..." : (
                        <>
                          REGISTER MY INTEREST{" "}
                          <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none">
                            &rarr;
                          </span>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-[#8E8E93] m-0 max-w-[340px] leading-normal font-space-grotesk font-normal">
                      Your information will only be used for Vayu Galaxy updates and related opportunities.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* SECTION 06: LOCATION / PRESENCE — blueprint map */}
        <section className="bg-white text-black py-28 px-6 md:px-[10%] border-b border-black/5">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Address */}
            <div className="lg:col-span-5 border-l-2 border-[#DFCFB7] pl-6 md:pl-8">
              <span className="font-space-grotesk text-[11px] font-semibold uppercase tracking-[3px] text-[#8E8E93] block mb-2 font-mono">
                05 // FIND US
              </span>
              <h2 className="font-space-grotesk text-[28px] md:text-[38px] font-medium uppercase tracking-[1px] leading-tight mb-6">
                WHERE WE ARE.
              </h2>
              <p className="font-space-grotesk text-lg font-medium text-black tracking-wide uppercase mb-1">
                Vayu Galaxy Headquarters
              </p>
              <p className="font-space-grotesk text-[15px] text-[#555555] leading-relaxed font-normal">
                {contactPlaceholderInfo.location}
              </p>
            </div>

            {/* Premium map visualization */}
            <div className="lg:col-span-7 border border-black/10 p-2">
              <div className="bg-[#FAFAFA] border border-black/5 w-full h-[280px] overflow-hidden flex items-center justify-center relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/assets/location.png" 
                  alt="Vayu Galaxy physical presence location overview schematic"
                  className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 07: BIG IDEA CTA — open invitation */}
        <section className="bg-[#0a0a0a] py-32 px-6 md:px-[10%] relative overflow-hidden flex flex-col items-center justify-center text-center border-b border-white/5">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-[800px] w-full flex flex-col items-center gap-8">
            <span className="font-space-grotesk text-[11px] font-semibold uppercase tracking-[4px] text-[#DFCFB7] block font-mono">
              06 // OPEN INVITATION
            </span>
            <h2 className="font-space-grotesk text-[32px] md:text-[45px] font-semibold uppercase tracking-[2px] leading-tight text-white m-0">
              HAVE A BIGGER IDEA?
            </h2>
            <p className="font-space-grotesk text-[15px] md:text-[17px] text-[#A0A0A0] leading-relaxed max-w-[600px] mx-auto m-0 font-normal">
              Some of the best ideas begin with a conversation. Let&apos;s talk about the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={`mailto:${contactPlaceholderInfo.email}?subject=${encodeURIComponent("Open Invitation Inquiry — Vayu Galaxy")}`}
                className="group bg-[#FAFAFA] text-black hover:bg-white font-space-grotesk py-4 px-8 rounded-none uppercase font-semibold tracking-[2.5px] text-[11px] transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              >
                EMAIL VAYU GALAXY{" "}
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none">
                  &rarr;
                </span>
              </a>
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group border border-white/20 hover:border-[#DFCFB7] text-white hover:text-[#DFCFB7] bg-transparent font-space-grotesk py-4 px-8 rounded-none uppercase font-semibold tracking-[2.5px] text-[11px] transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              >
                EXPLORE OUR PROJECTS{" "}
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
