"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import VideoSection from "@/components/home/VideoSection";
import CitiesAtRisk from "@/components/home/CitiesAtRisk";
import MapView from "@/components/home/MapView";
import FeatureSection from "@/components/home/FeatureSection";
import ProjectGrid from "@/components/home/ProjectGrid";
import FounderSection from "@/components/home/FounderSection";

const placeholderParagraphs = [
  "Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress.",
  "Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress.",
  "Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress.",
];

export default function HomePage() {
  return (
    <div className="home-page-wrapper">
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
        <Hero />

        <AboutSection
          theme="light"
          title="8th World of Wonder, Coming Soon!"
          paragraphs={placeholderParagraphs}
          imageSrc="/assets/about.jpeg"
          imageAlt="About Us"
          imageMaxWidthClass="max-w-[400px]"
        />

        <VideoSection />

        <CitiesAtRisk />

        <MapView />

        <AboutSection
          theme="light"
          title={
            <>
              World&apos;s Biggest Lord Vishnu Statue in the air.
            </>
          }
          paragraphs={placeholderParagraphs}
          imageSrc="/assets/loadvishnu.jpeg"
          imageAlt="Lord Vishnu"
          imageMaxWidthClass="max-w-[400px]"
        />

        <FeatureSection
          theme="dark"
          title="Devi Drone"
          paragraphs={placeholderParagraphs}
          imageSrc="/assets/drone.png"
          imageAlt="Drone"
        />

        {/* Projects Section Tech Heading */}
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
