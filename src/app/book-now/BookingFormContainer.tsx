"use client";

import React, { useState, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BookingFormContainer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    ageGroup: "",
    interestLevel: "",
    referralSource: "",
    referralOther: "",
    occupation: "",
    timeline: "",
    questions: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false);
  
  // Requirement: First FAQ item MUST be open by default
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isSubmittingRef = useRef(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting || isSubmitted || isSubmittingRef.current) {
      return;
    }

    const validationErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = "Please enter your phone number.";
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone.trim())) {
      validationErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.city.trim()) {
      validationErrors.city = "Please enter your city / location.";
    }

    if (formData.referralSource === "Other" && !formData.referralOther.trim()) {
      validationErrors.referralOther = "Please specify how you heard about us.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.getElementsByName(firstErrorField)[0];
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "EARLY_REGISTRATION",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          ageGroup: formData.ageGroup || undefined,
          interestLevel: formData.interestLevel || undefined,
          referralSource: formData.referralSource || undefined,
          referralOther: formData.referralSource === "Other" ? formData.referralOther : undefined,
          occupation: formData.occupation || undefined,
          timeline: formData.timeline || undefined,
          questions: formData.questions || undefined,
          message: formData.message || undefined,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setSubmissionFailed(false);
      } else {
        setSubmissionFailed(true);
      }
    } catch {
      setSubmissionFailed(true);
    } finally {
      setIsSubmitting(false);
      isSubmittingRef.current = false;
    }
  };

  const handleTryAgain = () => {
    setSubmissionFailed(false);
    setIsSubmitted(false);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const inputStyle = (fieldName: string) => {
    const hasError = !!errors[fieldName];
    return `w-full bg-white/[0.03] border ${
      hasError ? "border-red-500 focus:border-red-400 focus:ring-red-400" : "border-white/15 focus:border-[#B7A27A] focus:ring-[#B7A27A]"
    } rounded-xl px-4 py-3 font-space-grotesk text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all duration-200 disabled:opacity-50`;
  };

  const labelStyle = "font-space-grotesk text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-2";

  const faqs = [
    {
      q: "What makes early access with Vayu Galaxy important for me?",
      a: "Early access connects you directly to our latest announcements. By registering today, you gain early access to township updates, technology developments, and future project previews.",
    },
    {
      q: "Is there any financial commitment required?",
      a: "None at all. Early registration is 100% free with no deposit, reservation fee, or credit card required.",
    },
    {
      q: "When will Cohort 2026 onboarding begin?",
      a: "Cohort 2026 announcements and briefings will roll out in phases throughout 2026. Registered members will receive early updates prior to public announcements.",
    },
    {
      q: "How will my data and privacy be handled?",
      a: "Your privacy is our utmost priority. Your information is securely stored and strictly used to deliver Vayu Galaxy project updates and announcements.",
    },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-[#FAFAFA] flex flex-col justify-between relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#B7A27A]/5 blur-[140px] pointer-events-none rounded-full z-0" />
      <div className="absolute top-[600px] right-0 w-[500px] h-[500px] bg-white/[0.01] blur-[160px] pointer-events-none rounded-full z-0" />

      <Header />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-[8%] max-w-[1340px] mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="mb-10 text-left">
          {/* Breadcrumb / Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B7A27A]/10 border border-[#B7A27A]/20 text-[#B7A27A] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(183,162,122,0.05)] select-none">
            <span className="w-2 h-2 rounded-full bg-[#B7A27A] animate-pulse"></span>
            VAYU GALAXY // EARLY ACCESS
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.05] mb-4">
            BOOK YOUR PLACE IN WHAT&apos;S NEXT.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-[720px] font-light leading-relaxed">
            Register your interest in Vayu Galaxy and stay connected to the future of human habitation, advanced technology, and next-generation living.
          </p>
        </div>

        {/* Compact Cinematic Visual Banner */}
        <div className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl mb-12 group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none scale-110"
          >
            <source src="/assets/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/2 z-[1] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 z-[1] pointer-events-none" />
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (col-span-5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            {/* Value Proposition Card */}
            <div className="bg-zinc-900/20 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B7A27A]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#B7A27A]/10 transition-all duration-500" />

              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-9 h-9 rounded-xl bg-[#B7A27A]/10 border border-[#B7A27A]/20 flex items-center justify-center text-[#B7A27A]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="font-space-grotesk text-sm font-bold uppercase tracking-wider text-white">
                  WHY REGISTER EARLY?
                </h3>
              </div>

              {/* 4 Feature Benefits */}
              <div className="space-y-4">
                {/* Feature 1: Priority Access to Project Drops */}
                <div className="flex items-start gap-3.5 group/item">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#B7A27A] shrink-0 group-hover/item:border-[#B7A27A]/50 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-space-grotesk text-xs font-semibold text-white tracking-wide">Priority Access to Project Drops</h4>
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">Be first in line to receive announcements and reservations for upcoming site launches and technical releases.</p>
                  </div>
                </div>

                {/* Feature 2: Early Project Updates */}
                <div className="flex items-start gap-3.5 group/item">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#B7A27A] shrink-0 group-hover/item:border-[#B7A27A]/50 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-space-grotesk text-xs font-semibold text-white tracking-wide">Early Project Updates</h4>
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">Gain insight into advanced technical mockups, project journals, and future township plans before they go public.</p>
                  </div>
                </div>

                {/* Feature 3: Technology Announcements */}
                <div className="flex items-start gap-3.5 group/item">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#B7A27A] shrink-0 group-hover/item:border-[#B7A27A]/50 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-space-grotesk text-xs font-semibold text-white tracking-wide">Technology Announcements</h4>
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">Stay informed on breakthroughs in autonomous robotics, shielding technology, and next-generation architecture.</p>
                  </div>
                </div>

                {/* Feature 4: Future Opportunities */}
                <div className="flex items-start gap-3.5 group/item">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#B7A27A] shrink-0 group-hover/item:border-[#B7A27A]/50 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.97 5.97 0 00-.942 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-space-grotesk text-xs font-semibold text-white tracking-wide">Future Opportunities</h4>
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">Receive priority notifications for upcoming cohort opportunities, public events, and community registrations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Counter / Status Pill Card */}
            <div className="bg-zinc-900/20 backdrop-blur-md border border-[#B7A27A]/20 rounded-xl p-4 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7A27A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B7A27A]"></span>
                </span>
                <div>
                  <span className="font-space-grotesk text-xs font-semibold text-white tracking-wider block uppercase">Cohort 2026 Registration Open</span>
                  <span className="text-[10px] text-[#B7A27A] font-mono tracking-widest uppercase">100% FREE &amp; NO PAYMENT REQUIRED</span>
                </div>
              </div>
            </div>

            {/* Interactive FAQ Accordion */}
            <div className="bg-zinc-900/20 backdrop-blur-md border border-white/5 rounded-2xl p-6 space-y-4 shadow-xl">
              <h4 className="font-space-grotesk text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                FREQUENTLY ASKED QUESTIONS
              </h4>
              <div className="divide-y divide-white/5">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="py-3">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left font-space-grotesk text-xs font-medium text-zinc-200 hover:text-[#B7A27A] transition-colors flex items-center justify-between gap-2 cursor-pointer focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <span className="text-[#B7A27A] text-sm font-mono shrink-0">{openFaq === idx ? "−" : "+"}</span>
                    </button>
                    {openFaq === idx && (
                      <p className="mt-2 text-xs text-zinc-300 font-light leading-relaxed animate-fadeIn bg-white/[0.01] border-l-2 border-[#B7A27A] p-3 rounded-r-lg">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (col-span-7) — Glassmorphic Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
              
              {isSubmitted && !submissionFailed ? (
                <div className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#B7A27A]/10 border border-[#B7A27A]/30 flex items-center justify-center text-[#B7A27A] shadow-[0_0_30px_rgba(183,162,122,0.15)]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-space-grotesk text-2xl md:text-3xl font-bold uppercase tracking-wider text-white">
                      YOU&apos;RE IN.
                    </h3>
                    <p className="text-zinc-400 text-sm max-w-md mx-auto font-light leading-relaxed">
                      Your early registration interest for Vayu Galaxy has been recorded. Our team will keep you informed on upcoming cohorts and tech previews.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B7A27A]/10 border border-[#B7A27A]/20 text-[#B7A27A] text-xs font-mono tracking-widest uppercase select-none">
                    FREE EARLY REGISTRATION
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        city: "",
                        ageGroup: "",
                        interestLevel: "",
                        referralSource: "",
                        referralOther: "",
                        occupation: "",
                        timeline: "",
                        questions: "",
                        message: "",
                      });
                    }}
                    className="mt-4 bg-transparent hover:bg-[#F4F2ED] border border-[#F4F2ED]/30 hover:border-[#F4F2ED] text-[#F4F2ED] hover:text-[#050505] font-mono py-3 px-8 rounded-sm uppercase font-extrabold text-xs tracking-[0.2em] transition-all duration-500 cursor-pointer"
                  >
                    REGISTER ANOTHER INTEREST
                  </button>
                </div>
              ) : isSubmitted && submissionFailed ? (
                <div className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-space-grotesk text-xl md:text-2xl font-bold uppercase tracking-wider text-red-400">
                      REGISTRATION COULD NOT BE COMPLETED
                    </h3>
                    <p className="text-zinc-400 text-sm max-w-md mx-auto font-light leading-relaxed">
                      Please try again.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleTryAgain}
                    className="bg-red-950/20 hover:bg-red-950/40 border border-red-500/30 text-red-400 font-mono py-3 px-8 rounded-sm uppercase font-extrabold text-xs tracking-widest transition-all duration-500 cursor-pointer"
                  >
                    TRY AGAIN &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-10" noValidate>
                  
                  {/* Step 1: 01 // ABOUT YOU */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest">01 //</span>
                      <h3 className="font-space-grotesk text-base font-bold uppercase tracking-wider text-white">
                        ABOUT YOU
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className={labelStyle}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          disabled={isSubmitting}
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={inputStyle("fullName")}
                          required
                        />
                        {errors.fullName && (
                          <span className="text-red-400 text-xs mt-1.5 font-mono block">
                            {errors.fullName}
                          </span>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label htmlFor="email" className={labelStyle}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          disabled={isSubmitting}
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={inputStyle("email")}
                          required
                        />
                        {errors.email && (
                          <span className="text-red-400 text-xs mt-1.5 font-mono block">
                            {errors.email}
                          </span>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phone" className={labelStyle}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          disabled={isSubmitting}
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={inputStyle("phone")}
                          required
                        />
                        {errors.phone && (
                          <span className="text-red-400 text-xs mt-1.5 font-mono block">
                            {errors.phone}
                          </span>
                        )}
                      </div>

                      {/* City / Location */}
                      <div>
                        <label htmlFor="city" className={labelStyle}>
                          City / Location *
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          disabled={isSubmitting}
                          placeholder="Delhi NCR, India"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={inputStyle("city")}
                          required
                        />
                        {errors.city && (
                          <span className="text-red-400 text-xs mt-1.5 font-mono block">
                            {errors.city}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Age Group Full Width */}
                    <div>
                      <label htmlFor="ageGroup" className={labelStyle}>
                        Age Group (Optional)
                      </label>
                      <div className="relative">
                        <select
                          name="ageGroup"
                          id="ageGroup"
                          disabled={isSubmitting}
                          value={formData.ageGroup}
                          onChange={handleInputChange}
                          className={`${inputStyle("ageGroup")} appearance-none cursor-pointer pr-10 text-white`}
                        >
                          <option value="" className="bg-zinc-900 text-zinc-400">Select Age Group</option>
                          <option value="Under 18" className="bg-zinc-900 text-white">Under 18</option>
                          <option value="18–25" className="bg-zinc-900 text-white">18–25</option>
                          <option value="26–35" className="bg-zinc-900 text-white">26–35</option>
                          <option value="36–45" className="bg-zinc-900 text-white">36–45</option>
                          <option value="46–60" className="bg-zinc-900 text-white">46–60</option>
                          <option value="60+" className="bg-zinc-900 text-white">60+</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xs pointer-events-none">&#9660;</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: 02 // YOUR INTEREST */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest">02 //</span>
                      <h3 className="font-space-grotesk text-base font-bold uppercase tracking-wider text-white">
                        YOUR INTEREST
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Interest Level */}
                      <div>
                        <label htmlFor="interestLevel" className={labelStyle}>
                          Interest Level
                        </label>
                        <div className="relative">
                          <select
                            name="interestLevel"
                            id="interestLevel"
                            disabled={isSubmitting}
                            value={formData.interestLevel}
                            onChange={handleInputChange}
                            className={`${inputStyle("interestLevel")} appearance-none cursor-pointer pr-10 text-white`}
                          >
                            <option value="" className="bg-zinc-900 text-zinc-400">Select Interest Category</option>
                            <option value="Investor" className="bg-zinc-900 text-white">Investor</option>
                            <option value="Tech Enthusiast" className="bg-zinc-900 text-white">Tech Enthusiast</option>
                            <option value="Media" className="bg-zinc-900 text-white">Media</option>
                            <option value="Partner" className="bg-zinc-900 text-white">Partner</option>
                          </select>
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xs pointer-events-none">&#9660;</span>
                        </div>
                      </div>

                      {/* How Did You Hear About Us */}
                      <div>
                        <label htmlFor="referralSource" className={labelStyle}>
                          How Did You Hear About Us?
                        </label>
                        <div className="relative">
                          <select
                            name="referralSource"
                            id="referralSource"
                            disabled={isSubmitting}
                            value={formData.referralSource}
                            onChange={handleInputChange}
                            className={`${inputStyle("referralSource")} appearance-none cursor-pointer pr-10 text-white`}
                          >
                            <option value="" className="bg-zinc-900 text-zinc-400">Select Source</option>
                            <option value="Instagram" className="bg-zinc-900 text-white">Instagram</option>
                            <option value="YouTube" className="bg-zinc-900 text-white">YouTube</option>
                            <option value="LinkedIn" className="bg-zinc-900 text-white">LinkedIn</option>
                            <option value="Friend / Referral" className="bg-zinc-900 text-white">Friend / Referral</option>
                            <option value="Event" className="bg-zinc-900 text-white">Event</option>
                            <option value="Search Engine" className="bg-zinc-900 text-white">Search Engine</option>
                            <option value="Other" className="bg-zinc-900 text-white">Other</option>
                          </select>
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xs pointer-events-none">&#9660;</span>
                        </div>
                      </div>
                    </div>

                    {formData.referralSource === "Other" && (
                      <div className="animate-fadeIn">
                        <label htmlFor="referralOther" className={labelStyle}>
                          Please Specify Where *
                        </label>
                        <input
                          type="text"
                          name="referralOther"
                          id="referralOther"
                          placeholder="e.g. Tech Newsletter, Conference, etc."
                          disabled={isSubmitting}
                          value={formData.referralOther}
                          onChange={handleInputChange}
                          className={inputStyle("referralOther")}
                          required
                        />
                        {errors.referralOther && (
                          <span className="text-red-400 text-xs mt-1.5 font-mono block">
                            {errors.referralOther}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Step 3: 03 // TELL US MORE */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <span className="font-mono text-xs text-[#B7A27A] font-bold uppercase tracking-widest">03 //</span>
                      <h3 className="font-space-grotesk text-base font-bold uppercase tracking-wider text-white">
                        TELL US MORE
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Occupation / Profession */}
                      <div>
                        <label htmlFor="occupation" className={labelStyle}>
                          Occupation / Profession
                        </label>
                        <div className="relative">
                          <select
                            name="occupation"
                            id="occupation"
                            disabled={isSubmitting}
                            value={formData.occupation}
                            onChange={handleInputChange}
                            className={`${inputStyle("occupation")} appearance-none cursor-pointer pr-10 text-white`}
                          >
                            <option value="" className="bg-zinc-900 text-zinc-400">Select Occupation</option>
                            <option value="Student" className="bg-zinc-900 text-white">Student</option>
                            <option value="Working Professional" className="bg-zinc-900 text-white">Working Professional</option>
                            <option value="Entrepreneur / Business Owner" className="bg-zinc-900 text-white">Entrepreneur / Business Owner</option>
                            <option value="Investor" className="bg-zinc-900 text-white">Investor</option>
                            <option value="Researcher" className="bg-zinc-900 text-white">Researcher</option>
                            <option value="Other" className="bg-zinc-900 text-white">Other</option>
                          </select>
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xs pointer-events-none">&#9660;</span>
                        </div>
                      </div>

                      {/* Expected Timeline */}
                      <div>
                        <label htmlFor="timeline" className={labelStyle}>
                          Expected Timeline
                        </label>
                        <div className="relative">
                          <select
                            name="timeline"
                            id="timeline"
                            disabled={isSubmitting}
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className={`${inputStyle("timeline")} appearance-none cursor-pointer pr-10 text-white`}
                          >
                            <option value="" className="bg-zinc-900 text-zinc-400">Select Timeline</option>
                            <option value="Just Exploring" className="bg-zinc-900 text-white">Just Exploring</option>
                            <option value="Within 1 Year" className="bg-zinc-900 text-white">Within 1 Year</option>
                            <option value="1–3 Years" className="bg-zinc-900 text-white">1–3 Years</option>
                            <option value="3+ Years" className="bg-zinc-900 text-white">3+ Years</option>
                            <option value="Not Sure Yet" className="bg-zinc-900 text-white">Not Sure Yet</option>
                          </select>
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xs pointer-events-none">&#9660;</span>
                        </div>
                      </div>
                    </div>

                    {/* Textarea 1: What would you like to know */}
                    <div>
                      <label htmlFor="questions" className={labelStyle}>
                        What would you like to know about Vayu Galaxy?
                      </label>
                      <textarea
                        name="questions"
                        id="questions"
                        rows={3}
                        disabled={isSubmitting}
                        placeholder="Tell us what you'd like to know about Vayu Galaxy..."
                        value={formData.questions}
                        onChange={handleInputChange}
                        className={`${inputStyle("questions")} resize-none`}
                      />
                    </div>

                    {/* Textarea 2: Additional Notes */}
                    <div>
                      <label htmlFor="message" className={labelStyle}>
                        Additional Notes
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={3}
                        disabled={isSubmitting}
                        placeholder="Share anything else you'd like us to know..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`${inputStyle("message")} resize-none`}
                      />
                    </div>
                  </div>

                  {/* Submit Section */}
                  <div className="pt-4 space-y-4 border-t border-white/10">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F4F2ED] text-[#050505] hover:bg-transparent border border-transparent hover:border-[#F4F2ED] hover:text-[#F4F2ED] font-mono py-4 px-8 uppercase tracking-widest text-xs font-extrabold transition-all duration-500 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 select-none rounded-sm"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                          </svg>
                          REGISTERING...
                        </span>
                      ) : (
                        <>
                          REGISTER MY INTEREST
                          <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                            &rarr;
                          </span>
                        </>
                      )}
                    </button>

                    {/* Data Privacy Disclaimer */}
                    <div className="flex items-center justify-center gap-2 text-center text-[11px] text-zinc-400 font-mono tracking-wider">
                      <svg className="w-3.5 h-3.5 text-[#B7A27A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      <span>FREE EARLY REGISTRATION • NO PAYMENT REQUIRED</span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>



      </main>

      <Footer />
    </div>
  );
}
