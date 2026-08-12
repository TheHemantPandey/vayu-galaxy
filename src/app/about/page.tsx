"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/home/AboutSection";
import ProjectGrid from "@/components/home/ProjectGrid";
import FounderSection from "@/components/home/FounderSection";

const placeholderParagraphs = [
  "Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress.",
  "Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress.",
  "Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress.",
];

export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
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

      <main>
        {/* About Page Hero */}
        <div className="relative h-[40vh] overflow-hidden flex items-center justify-center text-center text-[#FAFAFA] bg-[url('/assets/aboutheader.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="relative z-[2] px-4 pt-10">
            <h1 className="font-space-grotesk text-[36px] md:text-[55px] font-semibold uppercase tracking-[2px] [text-shadow:2px_2px_10px_rgba(0,0,0,0.8)]">
              About Us
            </h1>
          </div>
        </div>

        <AboutSection
          theme="dark"
          title="What is vayu Galaxy?"
          paragraphs={placeholderParagraphs}
          imageSrc="/assets/aboutus.png"
          imageAlt="About Us"
          imageMaxWidthClass="max-w-[550px]"
        />

        {/* Projects Tech Heading */}
        <section className="h-[20vh] bg-black flex flex-col items-center justify-center text-[#FAFAFA] text-center border-y border-white/5">
          <h1 className="font-space-grotesk text-[24px] md:text-[28px] font-semibold uppercase tracking-[3px] m-0">
            Project
          </h1>
        </section>

        <ProjectGrid />

        <FounderSection
          title="Meet Our Founder"
          name="Mr. Raushan Kumar"
          descriptionParagraphs={[
            "Our visionary leader has built Vayu Galaxy with innovation and excellence at its core. Their journey is an inspiration, leading the way in the industry with groundbreaking solutions and a passion for progress.",
            "Our visionary leader has built Vayu Galaxy with innovation and excellence at its core.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
