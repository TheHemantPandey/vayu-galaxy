"use client";

import React, { useState, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { contactPlaceholderInfo, enquiryTypes } from "@/data/contact";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: enquiryTypes[0],
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
      const firstInput = formRef.current.querySelector("input");
      if (firstInput) {
        firstInput.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Perform simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    // Submission logic (frontend placeholder for backend integration)
    console.log("Submit Vayu Galaxy Contact Form:", formData);
    setIsSubmitted(true);
    
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      enquiryType: enquiryTypes[0],
      message: "",
    });
  };

  return (
    <div className="contact-page-wrapper bg-[#050505] text-white min-h-screen flex flex-col justify-between">
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
        {/* Section 1: HERO */}
        <section className="relative py-24 px-6 md:px-[10%] flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-[#0c0c0c] border-b border-white/5">
          {/* Subtle grid pattern block */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-[800px] w-full">
            <span className="font-space-grotesk text-[13px] md:text-[14px] font-semibold uppercase tracking-[4px] text-[#DFCFB7] mb-4 block">
              CONTACT VAYU GALAXY
            </span>
            <h1 className="font-space-grotesk text-[36px] md:text-[60px] font-semibold uppercase tracking-[2px] leading-tight mb-6 text-[#FAFAFA] [text-shadow:2px_2px_15px_rgba(0,0,0,0.8)]">
              LET&apos;S BUILD THE FUTURE TOGETHER
            </h1>
            <p className="font-space-grotesk text-[16px] md:text-[18px] text-[#A0A0A0] leading-relaxed max-w-[600px] mx-auto font-normal">
              Connect with our aerospace, project, and investment teams to explore collaborations and township opportunities.
            </p>
          </div>
        </section>

        {/* Section 2 & 3: Two-Column Info Cards + Contact Form */}
        <section className="bg-white py-20 px-6 md:px-[10%] text-[#111111] border-b border-black/5">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Contact Cards + Bigger Idea CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-12">
              <div>
                <span className="font-space-grotesk text-[14px] font-semibold uppercase tracking-[3px] text-[#8E8E93] mb-6 block">
                  DIRECTORY
                </span>
                
                {/* Contact Information Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* PHONE */}
                  <div className="border border-black/10 rounded-lg p-5 bg-[#FAFAFA] hover:border-[#DFCFB7] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex flex-col justify-between min-h-[120px]">
                    <span className="text-[12px] font-bold tracking-[2px] uppercase text-[#8E8E93] mb-2 block">
                      PHONE
                    </span>
                    <a
                      href={`tel:${contactPlaceholderInfo.phone.replace(/\s+/g, "")}`}
                      className="text-[16px] font-semibold text-[#111111] hover:text-[#5AAC4E] transition-all font-space-grotesk"
                    >
                      {contactPlaceholderInfo.phone}
                    </a>
                  </div>

                  {/* EMAIL */}
                  <div className="border border-black/10 rounded-lg p-5 bg-[#FAFAFA] hover:border-[#DFCFB7] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex flex-col justify-between min-h-[120px]">
                    <span className="text-[12px] font-bold tracking-[2px] uppercase text-[#8E8E93] mb-2 block">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${contactPlaceholderInfo.email}`}
                      className="text-[16px] font-semibold text-[#111111] hover:text-[#5AAC4E] transition-all font-space-grotesk break-all"
                    >
                      {contactPlaceholderInfo.email}
                    </a>
                  </div>

                  {/* LOCATION */}
                  <div className="border border-black/10 rounded-lg p-5 bg-[#FAFAFA] hover:border-[#DFCFB7] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex flex-col justify-between min-h-[120px]">
                    <span className="text-[12px] font-bold tracking-[2px] uppercase text-[#8E8E93] mb-2 block">
                      LOCATION
                    </span>
                    <p className="text-[16px] font-semibold text-[#111111] m-0 font-space-grotesk">
                      {contactPlaceholderInfo.location}
                    </p>
                  </div>

                  {/* HOURS */}
                  <div className="border border-black/10 rounded-lg p-5 bg-[#FAFAFA] hover:border-[#DFCFB7] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex flex-col justify-between min-h-[120px]">
                    <span className="text-[12px] font-bold tracking-[2px] uppercase text-[#8E8E93] mb-2 block">
                      WORKING HOURS
                    </span>
                    <p className="text-[14px] font-semibold text-[#111111] leading-tight m-0 font-space-grotesk">
                      {contactPlaceholderInfo.hours}
                    </p>
                  </div>

                </div>
              </div>

              {/* Section 4: PROJECT / BUSINESS ENQUIRY */}
              <div className="border border-black/10 bg-[#FAFAFA] rounded-lg p-8 relative overflow-hidden flex flex-col justify-between gap-6 hover:border-black/20 transition-all duration-300">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-black/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-[22px] font-semibold text-[#111111] uppercase tracking-[1px] mb-3">
                    Have a bigger idea?
                  </h3>
                  <p className="text-[#555555] text-[15px] leading-relaxed mb-0 font-space-grotesk text-justify">
                    Whether you&apos;re interested in Vayu Galaxy, partnerships, investment, or exploring opportunities with us, we&apos;d love to hear from you.
                  </p>
                </div>
                <button
                  onClick={scrollToForm}
                  className="relative z-10 w-fit border border-[#DFCFB7] hover:border-black bg-white hover:bg-black text-[#111111] hover:text-white font-space-grotesk text-[13px] font-semibold uppercase tracking-[2px] py-3 px-6 rounded-[50px] transition-all duration-300"
                >
                  START A CONVERSATION
                </button>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center p-12 border border-black/10 rounded-lg bg-[#FAFAFA] shadow-[0_8px_30px_rgb(0,0,0,0.02)] min-h-[500px]">
                  <div className="w-20 h-20 bg-black text-white flex items-center justify-center rounded-full text-[32px] mb-6 shadow-md shadow-black/15">
                    ✓
                  </div>
                  <h3 className="text-[24px] font-semibold text-[#111111] uppercase tracking-[2px] mb-3">
                    Thank You
                  </h3>
                  <p className="text-[#333333] leading-relaxed max-w-[360px] mb-8 font-space-grotesk">
                    Your enquiry has been received. Our team will review the details and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[13px] font-semibold uppercase tracking-[2px] text-black/50 hover:text-black border-b border-black/20 hover:border-black transition-all pb-1 cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="border border-black/10 rounded-lg p-8 md:p-10 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
                  noValidate
                >
                  <span className="font-space-grotesk text-[14px] font-semibold uppercase tracking-[3px] text-[#8E8E93] mb-8 block">
                    INQUIRY FORM
                  </span>
                  
                  <div className="space-y-6">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[#111111]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[#FAFAFA] border border-black/10 rounded-md py-3 px-4 font-space-grotesk text-[#333333] placeholder-black/30 focus:outline-none focus:border-black/40 focus:ring-1 focus:ring-black/40 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[#111111]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#FAFAFA] border border-black/10 rounded-md py-3 px-4 font-space-grotesk text-[#333333] placeholder-black/30 focus:outline-none focus:border-black/40 focus:ring-1 focus:ring-black/40 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[#111111]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#FAFAFA] border border-black/10 rounded-md py-3 px-4 font-space-grotesk text-[#333333] placeholder-black/30 focus:outline-none focus:border-black/40 focus:ring-1 focus:ring-black/40 transition-all"
                      />
                    </div>

                    {/* Enquiry Type Dropdown */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="enquiryType" className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[#111111]">
                        Enquiry Type
                      </label>
                      <div className="relative">
                        <select
                          name="enquiryType"
                          id="enquiryType"
                          value={formData.enquiryType}
                          onChange={handleInputChange}
                          className="w-full bg-[#FAFAFA] border border-black/10 rounded-md py-3 px-4 font-space-grotesk text-[#333333] focus:outline-none focus:border-black/40 focus:ring-1 focus:ring-black/40 transition-all appearance-none cursor-pointer"
                        >
                          {enquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-black/50 text-[12px]">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[#111111]">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={6}
                        placeholder="Write your query here..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-[#FAFAFA] border border-black/10 rounded-md py-3 px-4 font-space-grotesk text-[#333333] placeholder-black/30 focus:outline-none focus:border-black/40 focus:ring-1 focus:ring-black/40 transition-all resize-y"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-[#120c2e] font-space-grotesk py-4 px-6 rounded-[50px] uppercase font-semibold tracking-[2px] transition-all duration-300 mt-8 shadow-sm cursor-pointer select-none"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* Section 5: LOCATION SECTION */}
        <section className="bg-black py-28 px-6 md:px-[10%] relative overflow-hidden flex flex-col items-center justify-center text-center border-b border-white/5 min-h-[400px]">
          {/* Subtle architectural coordinates guidelines decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015),transparent_70%)] pointer-events-none"></div>
          
          {/* Tech decorative crosshair grids */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/5 pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="font-space-grotesk text-[13px] font-semibold uppercase tracking-[4px] text-[#DFCFB7] mb-6 block">
              HEADQUARTERS
            </span>
            
            <div className="flex flex-col gap-1 border-y border-white/10 py-6 px-10 max-w-[400px] mx-auto select-none">
              <h2 className="font-space-grotesk text-[32px] md:text-[40px] font-semibold uppercase tracking-[4px] leading-tight text-white m-0">
                DELHI NCR
              </h2>
              <h2 className="font-space-grotesk text-[32px] md:text-[40px] font-semibold uppercase tracking-[4px] leading-tight text-white m-0">
                INDIA
              </h2>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-12 font-space-grotesk text-[11px] text-white/30 uppercase tracking-[2px]">
              <span>[ VAYU GALAXY NETWORK ]</span>
              <span>[ DECORATIVE NODE 01 ]</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
