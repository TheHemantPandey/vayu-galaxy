"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  contactPlaceholderInfo,
  contactProjects,
  enquiryTypes,
  connectReasons,
} from "@/data/contact";

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

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    console.log("Submit Vayu Galaxy Contact Form:", formData);
    setIsSubmitted(true);

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
        
        {/* Section 1: HERO — dark */}
        <section className="relative py-32 px-6 md:px-[10%] flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-[#050505] border-b border-white/5 min-h-[70vh]">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-[850px] w-full">
            <span className="font-space-grotesk text-[13px] md:text-[14px] font-semibold uppercase tracking-[4px] text-[#DFCFB7] mb-6 block">
              CONTACT VAYU GALAXY
            </span>
            <h1 className="font-space-grotesk text-[38px] md:text-[65px] font-semibold uppercase tracking-[1.5px] leading-tight mb-8 text-[#FAFAFA] [text-shadow:2px_2px_15px_rgba(0,0,0,0.9)]">
              LET&apos;S BUILD THE FUTURE TOGETHER
            </h1>
            <p className="font-space-grotesk text-[16px] md:text-[19px] text-[#A0A0A0] leading-relaxed max-w-[650px] mx-auto font-normal">
              Have a question, partnership idea, project enquiry, or simply want to learn more about Vayu Galaxy? Connect with our team and start a conversation about the future of living.
            </p>
          </div>
        </section>

        {/* Section 2: ABOUT VAYU GALAXY — light */}
        <section className="bg-white text-[#111111] py-28 px-6 md:px-[10%] border-b border-black/5">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Heading and number */}
            <div className="lg:col-span-5 border-l-2 border-[#DFCFB7] pl-6 md:pl-8">
              <span className="font-space-grotesk text-[45px] font-light text-black/10 tracking-[1px] block leading-none mb-3 select-none">
                01
              </span>
              <h2 className="font-space-grotesk text-[28px] md:text-[38px] font-semibold uppercase tracking-[1px] leading-tight text-[#111111]">
                A NEW WAY TO IMAGINE LIVING
              </h2>
            </div>
            
            {/* Right: Editorial Copy */}
            <div className="lg:col-span-7 space-y-6 text-justify">
              <p className="font-space-grotesk text-[16px] md:text-[18px] text-[#333333] leading-relaxed">
                Vayu Galaxy represents a vision of living beyond conventional boundaries — bringing together technology, mobility, architecture, and human experience into a new kind of urban environment.
              </p>
              <p className="font-space-grotesk text-[15px] md:text-[16px] text-[#555555] leading-relaxed">
                Our journey is driven by groundbreaking solutions and a passion for progress. We believe in human-centered innovation, integrating advanced mobility infrastructures and intelligent systems into elevated living environments. By redefining large-scale urban design, Vayu Galaxy lays the blueprint for a sustainable, future-oriented development that serves as a monument to modern engineering.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3: WHAT WE ARE BUILDING — dark */}
        <section className="bg-[#0c0c0c] text-white py-28 px-6 md:px-[10%] border-b border-white/5 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.01),transparent_50%)] pointer-events-none"></div>
          
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="mb-16 border-b border-white/10 pb-6 flex justify-between items-end">
              <div>
                <span className="font-space-grotesk text-[13px] font-semibold uppercase tracking-[3px] text-[#DFCFB7] block mb-2">
                  DEVELOPMENTS
                </span>
                <h2 className="font-space-grotesk text-[26px] md:text-[34px] font-semibold uppercase tracking-[1px] text-[#FAFAFA] m-0">
                  WHAT WE ARE BUILDING
                </h2>
              </div>
              <span className="font-space-grotesk text-[32px] font-light text-white/10 tracking-[1px] select-none hidden md:block">
                02
              </span>
            </div>

            {/* Asymmetric Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {contactProjects.map((project, idx) => (
                <div 
                  key={project.name}
                  className="border border-white/10 rounded-lg p-6 bg-black/40 backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all duration-300 min-h-[340px]"
                >
                  <div>
                    {/* Render thumbnail safely */}
                    <div className="w-full h-[260px] overflow-hidden rounded-md mb-6 relative border border-white/5 bg-black/20 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className={`w-full h-full hover:scale-105 transition-all duration-500 ${
                          idx === 0 ? "object-cover" : "object-contain"
                        }`}
                      />
                    </div>
                    <h3 className="font-space-grotesk text-[20px] font-semibold uppercase tracking-[1.5px] text-[#FAFAFA] mb-3">
                      {project.name}
                    </h3>
                    <p className="font-space-grotesk text-[14px] text-[#A0A0A0] leading-relaxed mb-6 text-justify">
                      {project.description}
                    </p>
                  </div>
                  <Link 
                    href={project.href}
                    className="font-space-grotesk text-[12px] font-bold uppercase tracking-[2px] text-[#DFCFB7] hover:text-[#5AAC4E] transition-all flex items-center gap-2 w-fit mt-auto"
                  >
                    EXPLORE <span className="text-[14px]">→</span>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: WHY VAYU GALAXY — light */}
        <section className="bg-white text-[#111111] py-28 px-6 md:px-[10%] border-b border-black/5">
          <div className="max-w-[1200px] mx-auto">
            
            <div className="mb-16 border-b border-black/10 pb-6 flex justify-between items-end">
              <div>
                <span className="font-space-grotesk text-[13px] font-semibold uppercase tracking-[3px] text-[#8E8E93] block mb-2">
                  PRINCIPLES
                </span>
                <h2 className="font-space-grotesk text-[26px] md:text-[34px] font-semibold uppercase tracking-[1px] text-black m-0">
                  WHY VAYU GALAXY
                </h2>
              </div>
              <span className="font-space-grotesk text-[32px] font-light text-black/10 tracking-[1px] select-none hidden md:block">
                03
              </span>
            </div>

            {/* Principles List Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              
              {/* Principle 01 */}
              <div className="border-t border-black/10 pt-6">
                <span className="font-space-grotesk text-[14px] font-bold text-[#DFCFB7] tracking-[2px] block mb-2">
                  01 — INNOVATION
                </span>
                <p className="font-space-grotesk text-[15px] text-[#333333] leading-relaxed text-justify">
                  Exploring new possibilities for future-oriented living and technology, challenging conventional infrastructure limitations.
                </p>
              </div>

              {/* Principle 02 */}
              <div className="border-t border-black/10 pt-6">
                <span className="font-space-grotesk text-[14px] font-bold text-[#DFCFB7] tracking-[2px] block mb-2">
                  02 — TECHNOLOGY
                </span>
                <p className="font-space-grotesk text-[15px] text-[#333333] leading-relaxed text-justify">
                  Connecting intelligent systems, sustainable high-altitude mobility, and modular infrastructures in harmony.
                </p>
              </div>

              {/* Principle 03 */}
              <div className="border-t border-black/10 pt-6">
                <span className="font-space-grotesk text-[14px] font-bold text-[#DFCFB7] tracking-[2px] block mb-2">
                  03 — HUMAN EXPERIENCE
                </span>
                <p className="font-space-grotesk text-[15px] text-[#333333] leading-relaxed text-justify">
                  Designing ideas around how people live, move, communicate, and interact within advanced futuristic townships.
                </p>
              </div>

              {/* Principle 04 */}
              <div className="border-t border-black/10 pt-6">
                <span className="font-space-grotesk text-[14px] font-bold text-[#DFCFB7] tracking-[2px] block mb-2">
                  04 — VISION
                </span>
                <p className="font-space-grotesk text-[15px] text-[#333333] leading-relaxed text-justify">
                  Thinking beyond conventional urban planning limits to shape the atmosphere, aerospace mobility, and architectural horizons.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Section 5: WHO CAN CONNECT — dark */}
        <section className="bg-[#0a0a0a] text-white py-28 px-6 md:px-[10%] border-b border-white/5">
          <div className="max-w-[1200px] mx-auto">
            
            <div className="mb-16 border-b border-white/10 pb-6 flex justify-between items-end">
              <div>
                <span className="font-space-grotesk text-[13px] font-semibold uppercase tracking-[3px] text-[#DFCFB7] block mb-2">
                  ENGAGEMENT
                </span>
                <h2 className="font-space-grotesk text-[26px] md:text-[34px] font-semibold uppercase tracking-[1px] text-[#FAFAFA] m-0">
                  WHO CAN CONNECT WITH US
                </h2>
              </div>
              <span className="font-space-grotesk text-[32px] font-light text-white/10 tracking-[1px] select-none hidden md:block">
                04
              </span>
            </div>

            {/* List Row Layout (Replacing standard card grid) */}
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {connectReasons.map((reason) => (
                <div 
                  key={reason.title} 
                  className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] px-4 transition-all duration-300"
                >
                  <div className="md:w-1/3">
                    <span className="font-space-grotesk text-[14px] font-semibold uppercase tracking-[2px] text-[#DFCFB7]">
                      {reason.title}
                    </span>
                  </div>
                  <div className="md:w-1/2">
                    <p className="font-space-grotesk text-[14px] text-[#A0A0A0] leading-relaxed m-0 text-justify">
                      {reason.description}
                    </p>
                  </div>
                  <div className="md:w-1/6 flex md:justify-end">
                    <button 
                      onClick={scrollToForm}
                      className="text-[12px] font-bold uppercase tracking-[2px] text-[#FAFAFA] hover:text-[#5AAC4E] transition-all border-b border-white/20 hover:border-[#5AAC4E] pb-1"
                    >
                      INQUIRE
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 6: CONTACT INFORMATION + FORM — white background */}
        <section className="bg-white text-[#111111] py-28 px-6 md:px-[10%] border-b border-black/5">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Info Cards Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-12">
              <div>
                <span className="font-space-grotesk text-[14px] font-semibold uppercase tracking-[3px] text-[#8E8E93] mb-6 block">
                  CONNECT WITH VAYU GALAXY
                </span>
                
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

              {/* Decorative coordinate marker block */}
              <div className="border-l-2 border-black/10 pl-6 hidden lg:block text-[#8E8E93] font-space-grotesk text-[12px] uppercase tracking-[2px] space-y-2">
                <div>[ VAYU GALAXY NETWORKS ]</div>
                <div>[ REGISTRY KEY: PLACEHOLDER ]</div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center p-12 border border-black/10 rounded-lg bg-[#FAFAFA] shadow-[0_8px_30px_rgb(0,0,0,0.02)] min-h-[500px]">
                  <div className="w-20 h-20 bg-black text-white flex items-center justify-center rounded-full text-[32px] mb-6 shadow-md shadow-black/15">
                    ✓
                  </div>
                  <h3 className="text-[24px] font-semibold text-[#111111] uppercase tracking-[2px] mb-3">
                    THANK YOU
                  </h3>
                  <p className="text-[#333333] leading-relaxed max-w-[360px] mb-8 font-space-grotesk">
                    Your enquiry has been received. Our team will review the details and get back to you.
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
                    CONTACT FORM
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
                    SEND ENQUIRY
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* Section 7: PARTNERSHIP CTA — dark */}
        <section className="bg-[#0a0a0a] py-32 px-6 md:px-[10%] relative overflow-hidden flex flex-col items-center justify-center text-center border-b border-white/5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-[800px] w-full flex flex-col items-center gap-8">
            <h2 className="font-space-grotesk text-[32px] md:text-[45px] font-semibold uppercase tracking-[2px] leading-tight text-white m-0">
              HAVE A BIGGER IDEA?
            </h2>
            <p className="font-space-grotesk text-[15px] md:text-[17px] text-[#A0A0A0] leading-relaxed max-w-[620px] mx-auto text-justify md:text-center m-0">
              Vayu Galaxy is built around ideas that challenge conventional thinking. If you see an opportunity to collaborate, build, invest, or contribute to the vision, we&apos;d like to hear from you.
            </p>
            <button
              onClick={scrollToForm}
              className="border border-[#DFCFB7] hover:border-white bg-transparent hover:bg-white text-white hover:text-black font-space-grotesk text-[13px] font-semibold uppercase tracking-[2px] py-4 px-8 rounded-[50px] transition-all duration-300 cursor-pointer select-none"
            >
              START A CONVERSATION
            </button>
          </div>
        </section>

        {/* Section 8: FINAL INFORMATION STRIP — dark */}
        <section className="bg-black py-16 px-6 md:px-[10%] border-b border-white/5 relative z-10">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 font-space-grotesk text-[11px] md:text-[12px] text-white/50 tracking-[3px] uppercase">
            <div className="text-center md:text-left">
              VAYU GALAXY <span className="text-white/20 mx-2">|</span> THE FUTURE OF LIVING
            </div>
            <div className="text-center">
              DELHI NCR, INDIA
            </div>
            <div className="flex gap-6 justify-center">
              <span className="hover:text-white transition-all cursor-pointer" onClick={scrollToForm}>CONTACT</span>
              <span className="hover:text-white transition-all cursor-pointer" onClick={scrollToForm}>PARTNERSHIP</span>
              <Link href="/#navigation" className="hover:text-white transition-all text-white/50 no-underline">PROJECTS</Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
