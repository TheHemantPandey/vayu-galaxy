"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BookingFormContainer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    bookingType: "General Visit / Enquiry",
    preferredDate: "",
    preferredTime: "Morning (09:00 - 12:00)",
    numberOfPeople: "1",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false);
  const isSubmittingRef = useRef(false);

  // Calculate minimum date dynamically (today's date in YYYY-MM-DD)
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for the field being edited
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

    // 1. Full Name
    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Please enter your name.";
    }

    // 2. Email Validation
    if (!formData.email.trim()) {
      validationErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    // 3. Phone Validation
    if (!formData.phone.trim()) {
      validationErrors.phone = "Please enter your phone number.";
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone.trim())) {
      validationErrors.phone = "Please enter a valid phone number.";
    }

    // 4. City
    if (!formData.city.trim()) {
      validationErrors.city = "Please enter your city / location.";
    }

    // 5. Booking Type
    if (!formData.bookingType) {
      validationErrors.bookingType = "Please select a booking option.";
    }

    // 6. Preferred Date Validation (Must not be in the past)
    if (!formData.preferredDate) {
      validationErrors.preferredDate = "Please select your preferred date.";
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        validationErrors.preferredDate = "Date cannot be in the past.";
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
          type: "BOOKING_REQUEST",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          bookingType: formData.bookingType,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          numberOfPeople: formData.numberOfPeople,
          message: formData.message,
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

  const inputClass = (fieldName: string) => {
    const base = "w-full bg-transparent border-0 border-b py-2.5 font-space-grotesk text-base font-semibold focus:outline-none focus:ring-0 transition-colors duration-300 disabled:opacity-50";
    const errorColor = errors[fieldName] ? "border-red-500 text-white" : "border-white/10 text-white focus:border-[#DFCFB7]";
    return `${base} ${errorColor}`;
  };

  const labelClass = "font-space-grotesk text-[10px] font-semibold uppercase tracking-[2px] text-[#8E8E93] font-mono block";

  return (
    <div className="bg-[#050505] min-h-screen text-[#FAFAFA] flex flex-col justify-between">
      {/* CSS file links */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />

      <Header />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-[10%] max-w-[1200px] mx-auto w-full">
        {/* Compact Hero Section */}
        <div className="mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#DFCFB7] mb-2 uppercase block select-none">
            BOOK NOW / VAYU GALAXY
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold uppercase tracking-[1px] mb-4 text-white select-none">
            BOOK YOUR VISIT.
          </h1>
          <p className="text-sm text-[#8E8E93] max-w-[600px] leading-relaxed font-light select-none">
            Tell us a little about yourself and what you&apos;d like to explore. Booking
            is completely free and our team will get back to you with the next steps.
          </p>
        </div>

        {/* Form and info split container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-white/5 pt-12">
          {/* Left Column: Request details */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#8E8E93] uppercase block mb-3 select-none">
                01 // REQUEST
              </span>
              <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-[1px] mb-4 text-white select-none">
                PLAN YOUR VISIT.
              </h2>
              <p className="text-xs text-[#8E8E93] leading-relaxed mb-6 font-light select-none">
                This request is completely free. No credit card or payment information is required at any step.
              </p>
              <div className="border border-[#DFCFB7]/30 text-[#DFCFB7] px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase w-fit select-none">
                FREE BOOKING
              </div>
            </div>

            {/* Technical branding details */}
            <div className="hidden lg:flex flex-col items-start gap-4 border-l border-white/5 pl-8 mt-6 select-none">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8E8E93]/40">
                OFFICIAL BOOKING SYSTEM
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8E8E93]/40">
                VAYU GALAXY
              </span>
              <span className="font-mono text-base font-light text-white/20">
                2026 &rarr;
              </span>
            </div>
          </div>

          {/* Right Column: Interactive form / states */}
          <div className="lg:col-span-8">
            {isSubmitted && !submissionFailed ? (
              <div className="flex flex-col items-center justify-center text-center p-12 border border-white/10 bg-white/[0.01] min-h-[380px] rounded-none">
                <i className="far fa-circle-check text-4xl text-[#DFCFB7] mb-6"></i>
                <h3 className="text-xl font-medium text-white uppercase tracking-[2px] mb-3 select-none">
                  BOOKING REQUEST RECEIVED.
                </h3>
                <p className="text-[#8E8E93] leading-relaxed max-w-[460px] mb-8 text-sm font-light select-none">
                  Thank you. Your free booking request has been received. Our team will review your request and contact you with the next steps.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      city: "",
                      bookingType: "General Visit / Enquiry",
                      preferredDate: "",
                      preferredTime: "Morning (09:00 - 12:00)",
                      numberOfPeople: "1",
                      message: "",
                    });
                  }}
                  className="bg-white text-black hover:text-[#DFCFB7] hover:bg-black hover:border-[#DFCFB7]/30 border border-transparent font-mono py-3 px-6 rounded-none uppercase font-semibold tracking-[2px] text-xs transition-all duration-300 cursor-pointer select-none"
                >
                  BOOK ANOTHER VISIT
                </button>
              </div>
            ) : isSubmitted && submissionFailed ? (
              <div className="flex flex-col items-center justify-center text-center p-12 border border-red-500/20 bg-red-500/[0.02] min-h-[380px] rounded-none">
                <i className="fas fa-triangle-exclamation text-4xl text-red-500 mb-6 animate-pulse"></i>
                <h3 className="text-xl font-medium text-red-500 uppercase tracking-[2px] mb-3 select-none">
                  WE COULDN&apos;T SUBMIT YOUR REQUEST.
                </h3>
                <p className="text-[#8E8E93] leading-relaxed max-w-[440px] mb-8 text-sm font-light select-none">
                  Please check your connection and configuration or try again.
                </p>
                <button
                  onClick={handleTryAgain}
                  className="bg-red-500/10 text-red-400 hover:text-white hover:bg-red-500 border border-red-500/30 py-3 px-6 rounded-none uppercase font-mono font-semibold tracking-[2px] text-xs transition-all duration-300 cursor-pointer select-none"
                >
                  TRY AGAIN &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-8" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5 group">
                    <label htmlFor="booking_fullName" className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="booking_fullName"
                      disabled={isSubmitting}
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={inputClass("fullName")}
                      required
                    />
                    {errors.fullName && (
                      <span className="text-red-400 text-[10px] mt-1 font-mono uppercase tracking-wider">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-1.5 group">
                    <label htmlFor="booking_email" className={labelClass}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="booking_email"
                      disabled={isSubmitting}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputClass("email")}
                      required
                    />
                    {errors.email && (
                      <span className="text-red-400 text-[10px] mt-1 font-mono uppercase tracking-wider">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-1.5 group">
                    <label htmlFor="booking_phone" className={labelClass}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="booking_phone"
                      disabled={isSubmitting}
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={inputClass("phone")}
                      required
                    />
                    {errors.phone && (
                      <span className="text-red-400 text-[10px] mt-1 font-mono uppercase tracking-wider">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* City / Location */}
                  <div className="flex flex-col gap-1.5 group">
                    <label htmlFor="booking_city" className={labelClass}>
                      City / Location *
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="booking_city"
                      disabled={isSubmitting}
                      placeholder="Delhi NCR"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={inputClass("city")}
                      required
                    />
                    {errors.city && (
                      <span className="text-red-400 text-[10px] mt-1 font-mono uppercase tracking-wider">
                        {errors.city}
                      </span>
                    )}
                  </div>

                  {/* Booking Category */}
                  <div className="flex flex-col gap-1.5 group">
                    <label htmlFor="booking_bookingType" className={labelClass}>
                      What would you like to book? *
                    </label>
                    <div className="relative">
                      <select
                        name="bookingType"
                        id="booking_bookingType"
                        disabled={isSubmitting}
                        value={formData.bookingType}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-0 border-b border-white/10 py-2.5 font-space-grotesk text-base font-semibold text-white focus:outline-none focus:ring-0 focus:border-[#DFCFB7] transition-colors duration-300 appearance-none cursor-pointer pr-8"
                      >
                        <option value="General Visit / Enquiry" className="bg-[#050505] text-white">General Visit / Enquiry</option>
                        <option value="Vayu Galaxy Space Concept" className="bg-[#050505] text-white">Vayu Galaxy Space Concept</option>
                        <option value="Devi Drone Exhibition" className="bg-[#050505] text-white">Devi Drone Exhibition</option>
                        <option value="Proto Robot Demonstration" className="bg-[#050505] text-white">Proto Robot Demonstration</option>
                        <option value="SPD T1 Prototype Tour" className="bg-[#050505] text-white">SPD T1 Prototype Tour</option>
                        <option value="Lord Vishnu Monument Site" className="bg-[#050505] text-white">Lord Vishnu Monument Site</option>
                      </select>
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 text-[9px] pointer-events-none">&#9660;</span>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="flex flex-col gap-1.5 group">
                    <label htmlFor="booking_preferredDate" className={labelClass}>
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      id="booking_preferredDate"
                      min={minDate}
                      disabled={isSubmitting}
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className={inputClass("preferredDate")}
                      required
                    />
                    {errors.preferredDate && (
                      <span className="text-red-400 text-[10px] mt-1 font-mono uppercase tracking-wider">
                        {errors.preferredDate}
                      </span>
                    )}
                  </div>

                  {/* Preferred Time (Optional select) */}
                  <div className="flex flex-col gap-1.5 group">
                    <label htmlFor="booking_preferredTime" className={labelClass}>
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <select
                        name="preferredTime"
                        id="booking_preferredTime"
                        disabled={isSubmitting}
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-0 border-b border-white/10 py-2.5 font-space-grotesk text-base font-semibold text-white focus:outline-none focus:ring-0 focus:border-[#DFCFB7] transition-colors duration-300 appearance-none cursor-pointer pr-8"
                      >
                        <option value="Morning (09:00 - 12:00)" className="bg-[#050505] text-white">Morning (09:00 - 12:00)</option>
                        <option value="Afternoon (12:00 - 15:00)" className="bg-[#050505] text-white">Afternoon (12:00 - 15:00)</option>
                        <option value="Evening (15:00 - 18:00)" className="bg-[#050505] text-white">Evening (15:00 - 18:00)</option>
                      </select>
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 text-[9px] pointer-events-none">&#9660;</span>
                    </div>
                  </div>

                  {/* Number of People */}
                  <div className="flex flex-col gap-1.5 group">
                    <label htmlFor="booking_numberOfPeople" className={labelClass}>
                      Number of People
                    </label>
                    <input
                      type="number"
                      name="numberOfPeople"
                      id="booking_numberOfPeople"
                      min="1"
                      disabled={isSubmitting}
                      value={formData.numberOfPeople}
                      onChange={handleInputChange}
                      className={inputClass("numberOfPeople")}
                    />
                  </div>

                  {/* Additional Requirements */}
                  <div className="flex flex-col gap-1.5 group col-span-1 md:col-span-2">
                    <label htmlFor="booking_message" className={labelClass}>
                      Additional Requirements
                    </label>
                    <textarea
                      name="message"
                      id="booking_message"
                      rows={4}
                      disabled={isSubmitting}
                      placeholder="Tell us anything else you'd like us to know..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-0 border-b border-white/10 py-2.5 font-space-grotesk text-base font-semibold text-white focus:outline-none focus:ring-0 focus:border-[#DFCFB7] transition-colors duration-300 disabled:opacity-50 resize-none"
                    />
                  </div>
                </div>

                {/* Submit button and trust strip */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="w-full sm:w-auto">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group bg-[#FAFAFA] text-black hover:text-[#DFCFB7] border border-transparent hover:border-[#DFCFB7]/30 hover:bg-black font-space-grotesk py-4 px-8 rounded-none uppercase font-semibold tracking-[2.5px] text-[11px] transition-all duration-300 cursor-pointer select-none inline-flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        "SUBMITTING..."
                      ) : (
                        <>
                          BOOK NOW{" "}
                          <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transform-none">
                            &rarr;
                          </span>
                        </>
                      )}
                    </button>
                    <span className="text-[10px] text-[#DFCFB7]/60 tracking-widest font-mono uppercase mt-3.5 block select-none">
                      FREE BOOKING · NO PAYMENT REQUIRED
                    </span>
                  </div>
                  <p className="text-[10px] text-[#8E8E93] m-0 max-w-[340px] leading-normal font-light select-none">
                    Your request does not guarantee immediate slot availability. Our team will verify schedules and contact you directly.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Contact/Support Strip */}
        <div className="mt-28 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#8E8E93] uppercase block mb-2 select-none">
              NEED SOMETHING ELSE?
            </span>
            <p className="text-xs text-[#8E8E93] m-0 font-light select-none">
              For general questions or support:{" "}
              <a
                href="mailto:info@vayugalaxy.com"
                className="text-white hover:text-[#DFCFB7] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7]"
              >
                info@vayugalaxy.com
              </a>
            </p>
          </div>
          <Link
            href="/contact"
            className="border border-white/15 hover:border-[#DFCFB7] text-[#FAFAFA] hover:text-[#050505] hover:bg-[#DFCFB7] px-6 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] select-none"
          >
            CONTACT US{" "}
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
