"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/layout/FinalCTA";
import { motion } from "framer-motion";

export default function ContactContent() {
  // Inquiry categories linked to form subject
  const categories = [
    { id: "General Inquiry", label: "General Inquiry", desc: "General questions & platform information" },
    { id: "Investment & Partnership", label: "Investment & Partnership", desc: "Capital, ecosystem & strategic ventures" },
    { id: "Media & Press", label: "Media & Press", desc: "Press kits, interviews & public relations" },
    { id: "Careers & Research", label: "Careers & Research", desc: "Join our team & research opportunities" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("General Inquiry");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false);

  // Select category & update form subject
  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setFormData((prev) => ({ ...prev, subject: catId }));
    if (errors.subject) {
      setErrors((prev) => ({ ...prev, subject: "" }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (name === "subject") {
      setSelectedCategory(value);
    }
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Copy Email Handler
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("info@vayugalaxy.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = "mailto:info@vayugalaxy.com";
    }
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Please enter your message.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmissionFailed(false);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "CONTACT_FORM",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          organization: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        setSubmissionFailed(true);
      }
    } catch {
      setSubmissionFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "bg-white/[0.03] border border-white/15 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-zinc-500 rounded-xl px-4 py-3.5 text-sm w-full transition-colors focus:outline-none font-space-grotesk";

  const labelClass =
    "text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400/90 block mb-1.5";

  return (
    <div className="bg-[#050505] text-[#FAFAFA] min-h-screen flex flex-col justify-between font-space-grotesk selection:bg-cyan-500 selection:text-black">
      <Header />

      <main className="flex-grow pt-28 pb-20 relative overflow-hidden">
        {/* Ambient Glow Backdrops */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full z-0" />
        <div className="absolute top-[600px] right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] pointer-events-none rounded-full z-0" />

        {/* 1. Hero Header */}
        <section className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/40 text-cyan-400 text-xs font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              GET IN TOUCH // DIRECT LINE
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight font-space-grotesk">
              LET&apos;S BUILD THE FUTURE TOGETHER.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
              Whether you have an inquiry, partnership opportunity, or want to connect with our team, we&apos;d love to hear from you.
            </p>
          </motion.div>
        </section>

        {/* 2. Main Contact Grid (2 Columns) */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Contact Details, Category Selector & Guarantee */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Contact Details Card */}
              <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                    COMMUNICATION CHANNEL
                  </span>
                  <h3 className="text-xl font-bold text-white uppercase">
                    DIRECT CONTACT
                  </h3>
                </div>

                {/* Email with copy button */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-400 block">OFFICIAL EMAIL</span>
                  <div className="flex items-center justify-between gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-3.5">
                    <span className="text-sm font-semibold text-white truncate">info@vayugalaxy.com</span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="bg-white/10 hover:bg-cyan-500 hover:text-black text-cyan-400 px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-200 shrink-0 cursor-pointer"
                    >
                      {copiedEmail ? "COPIED!" : "COPY"}
                    </button>
                  </div>
                </div>

                {/* Phone & Availability */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">PHONE SUPPORT</span>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                      Mon - Fri • 9:00 AM - 6:00 PM IST
                    </span>
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="block bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 rounded-xl p-3.5 text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    +91 (011) 4567-8900
                  </a>
                </div>

                {/* Headquarters Location */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-400 block">HEADQUARTERS</span>
                  <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-3.5">
                    <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="text-sm font-semibold text-white">Delhi NCR, India</span>
                  </div>
                </div>
              </div>

              {/* Interactive Category Selector */}
              <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold block mb-1">
                    INQUIRY CATEGORY
                  </span>
                  <h4 className="text-lg font-bold text-white uppercase">
                    WHY ARE YOU REACHING OUT?
                  </h4>
                  <p className="text-xs text-zinc-400 font-light mt-1">
                    Click a category to automatically pre-fill your form topic.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-cyan-950/60 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                            : "bg-white/[0.02] border-white/10 text-zinc-300 hover:border-white/30 hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider">{cat.label}</span>
                          {isSelected && <span className="text-cyan-400 text-xs font-bold">✓</span>}
                        </div>
                        <span className="text-[11px] text-zinc-400 block mt-0.5 font-light">{cat.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Response Time Guarantee Trust Badge */}
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-xs font-mono">
                  <span className="text-white font-bold block">RESPONSE GUARANTEE</span>
                  <span className="text-zinc-400">Average response time: Within 24 hours</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Interactive Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-950/80 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 text-2xl font-bold shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                      ✓
                    </div>
                    <div className="space-y-2 max-w-md mx-auto">
                      <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                        MESSAGE SENT.
                      </h3>
                      <p className="text-sm text-zinc-300 font-light leading-relaxed">
                        Thank you for reaching out. We&apos;ve received your message and will get back to you.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="bg-white text-black hover:bg-cyan-400 font-bold py-3 px-8 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-white/10 pb-4">
                      <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold block mb-1">
                        INQUIRY FORM
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                        TRANSMIT YOUR INQUIRY
                      </h3>
                    </div>

                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="fullName" className={labelClass}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={inputClass}
                        />
                        {errors.fullName && (
                          <span className="text-red-400 text-xs font-mono mt-1 block">{errors.fullName}</span>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={inputClass}
                        />
                        {errors.email && (
                          <span className="text-red-400 text-xs font-mono mt-1 block">{errors.email}</span>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Phone & Organization */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="organization" className={labelClass}>
                          Organization / Company (Optional)
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          placeholder="Acme Corp"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Row 3: Subject Dropdown */}
                    <div>
                      <label htmlFor="subject" className={labelClass}>
                        Subject / Topic *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`${inputClass} appearance-none cursor-pointer pr-10`}
                      >
                        {categories.map((c) => (
                          <option key={c.id} value={c.id} className="bg-zinc-950 text-white">
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 4: Message textarea */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="message" className={labelClass}>
                          Message *
                        </label>
                        <span className="text-[11px] font-mono text-zinc-500">
                          {formData.message.length} / 500 characters
                        </span>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={500}
                        placeholder="Tell us about your inquiry or project requirement..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className={inputClass}
                      />
                      {errors.message && (
                        <span className="text-red-400 text-xs font-mono mt-1 block">{errors.message}</span>
                      )}
                    </div>

                    {submissionFailed && (
                      <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-500/40 text-red-400 text-xs font-mono">
                        UNABLE TO SEND. Please try again.
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-space-grotesk font-bold py-4 px-8 rounded-xl text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_25px_rgba(34,211,238,0.4)] cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE →"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </section>

        {/* 3. Global Coordinates & Headquarters Section (Bottom of Page) */}
        <section className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/40 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                HQ ACTIVE // GLOBAL COORDINATES
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                DELHI NCR HEADQUARTERS
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Positioned in northern India&apos;s primary technology corridor, driving high-altitude aerial township engineering and robotics R&amp;D.
              </p>
            </div>

            <div className="w-full lg:w-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 font-mono text-xs space-y-2 shrink-0">
              <div className="text-zinc-400">LAT / LONG COORDINATES:</div>
              <div className="text-cyan-400 font-bold text-sm">28.6139° N, 77.2090° E</div>
              <div className="text-zinc-500 pt-1 border-t border-white/10">SYS.STATUS: ONLINE • ALL HUB NODES OPERATIONAL</div>
            </div>
          </div>
        </section>

      </main>

      <FinalCTA />
      <Footer />
    </div>
  );
}
