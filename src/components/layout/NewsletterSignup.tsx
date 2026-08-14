"use client";

import React, { useState, useRef } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // A lifecycle guard ref to immediately prevent duplicate/rapid submissions
  const isSubmittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions during active requests
    if (isSubmitting || isSubmitted || isSubmittingRef.current) {
      return;
    }

    setIsError(false);
    const trimmedEmail = email.trim();

    // Client-side validation
    if (!trimmedEmail) {
      setIsError(true);
      setErrorMessage("ENTER EMAIL ADDRESS");
      setEmail("");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setIsError(true);
      setErrorMessage("ENTER A VALID EMAIL");
      setEmail("");
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
          type: "NEWSLETTER_SUBSCRIPTION",
          email: trimmedEmail,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail(""); // Clear input on success
      } else {
        setIsError(true);
        setErrorMessage("ERROR. TRY AGAIN.");
        setEmail("");
      }
    } catch {
      setIsError(true);
      setErrorMessage("ERROR. TRY AGAIN.");
      setEmail("");
    } finally {
      setIsSubmitting(false);
      isSubmittingRef.current = false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-end gap-2 text-[#DFCFB7] font-mono text-xs tracking-[0.15em] uppercase select-none">
        <span className="w-1.5 h-1.5 bg-[#DFCFB7] rounded-full inline-block animate-pulse"></span>
        <span>{"YOU'RE IN. You'll hear from us when there's something worth sharing."}</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between sm:justify-end gap-0.5 font-mono text-xs tracking-[0.25em] text-[#8E8E93]/60 uppercase w-full sm:w-auto"
      noValidate
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Subscribe to Newsletter
      </label>

      <div className="flex flex-col sm:flex-row items-center w-full">
        {/* Input Wrapper - Circular / Pill Shaped */}
        <div className="relative flex items-center border border-white/10 focus-within:border-[#DFCFB7] bg-white/[0.02] transition-colors duration-300 px-5 py-2.5 w-full sm:w-[450px] rounded-full">
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (isError) {
                setIsError(false);
              }
            }}
            placeholder={isError ? errorMessage : "ENTER EMAIL"}
            className={`bg-transparent text-[#FAFAFA] text-sm font-mono tracking-[0.15em] w-full focus:!outline-none focus-visible:!outline-none focus:!ring-0 border-0 uppercase pr-0 sm:pr-[225px] transition-colors duration-300 ${
              isError ? "placeholder-red-400/80" : "placeholder-[#8E8E93]/30"
            }`}
            required
            disabled={isSubmitting}
            aria-required="true"
          />
          
          {/* Desktop-only button inside input border */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="hidden sm:flex absolute right-5 text-xs font-mono tracking-wider text-[#8E8E93] hover:text-[#DFCFB7] disabled:text-[#8E8E93]/40 transition-colors duration-300 items-center group/btn cursor-pointer disabled:cursor-not-allowed select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] rounded px-0.5 py-0.5"
            aria-label="Subscribe to newsletter"
          >
            {isSubmitting ? (
              <span>...</span>
            ) : (
              <>
                SUBSCRIBE TO NEWSLETTER{" "}
                <span
                  className="transition-transform duration-300 ease-out group-hover/btn:translate-x-[3px] motion-reduce:transform-none ml-1.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </>
            )}
          </button>
        </div>

        {/* Mobile-only stacked button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex sm:hidden w-full mt-3 py-2.5 text-center text-xs font-mono tracking-wider text-[#FAFAFA] hover:text-[#DFCFB7] bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 disabled:border-white/5 disabled:text-[#8E8E93]/40 transition-all duration-300 items-center justify-center gap-1.5 group/btn cursor-pointer disabled:cursor-not-allowed rounded-full select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7]"
          aria-label="Subscribe to newsletter"
        >
          {isSubmitting ? (
            <span>...</span>
          ) : (
            <>
              SUBSCRIBE TO NEWSLETTER{" "}
              <span
                className="transition-transform duration-300 ease-out group-hover/btn:translate-x-[3px] motion-reduce:transform-none ml-1.5"
                aria-hidden="true"
              >
                →
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
