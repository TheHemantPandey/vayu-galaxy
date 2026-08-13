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

const forfirstpara = [
  "Vayu Galaxy represents a bold new chapter in human architecture and conceptual design—introducing the 8th World of Wonder. By combining high-altitude structural engineering with self-sustaining luxury ecosystems, we are designing living spaces that float above the horizon, bridging the gap between Earth and the cosmos.",
  "Our mission is to establish a premium architectural lifestyle that embraces renewable energy, zero-gravity aesthetics, and autonomous maintenance technologies. This cinematic design concept offers residents panoramic views of the atmosphere, turning space exploration into an everyday reality.",
];
const forsecondpara = [
  "Standing as a monument of absolute engineering marvel and spiritual legacy, Vayu Galaxy introduces the world's largest Lord Vishnu statue suspended in the air. This structure combines ancient Vedic architecture with modern high-altitude stabilization systems, creating a breathtaking spiritual beacon that transcends traditional boundaries.",
  "Hovering with advanced structural suspension and glowing with solar-powered illumination grids, the monument serves as an architectural protector of the city below. It represents a conceptual fusion of historical heritage, futuristic design, and absolute cultural pride.",
  "This iconic design serves as a testament to human ingenuity and spiritual devotion, rising majestically into the sky. It invites visitors from around the globe to witness a harmonious synthesis of technology and timeless devotion, marking a new milestone in conceptual landmark creation.",
];
const forthirdpara = [
  "The Devi Drone is a high-performance, modular unmanned aerial vehicle (UAV) engineered for security, high-altitude surveillance, emergency medical logistics, and disaster management. Designed and developed with cutting-edge aerospace systems, it delivers a reliable, fully autonomous solution for operations in challenging terrains.",
  "Integrating AI-driven obstacle detection, real-time thermal scanning, and synchronized network communication, the Devi Drone provides critical aerial insights instantly. Its modular payload bay allows quick attachment of specialized kits, making it a versatile tool for safeguarding environments and supporting emergency medical services.",
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
          paragraphs={forfirstpara}
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
          paragraphs={forsecondpara}
          imageSrc="/assets/loadvishnu.jpeg"
          imageAlt="Lord Vishnu"
          imageMaxWidthClass="max-w-[400px]"
        />

        <FeatureSection
          theme="dark"
          title="Devi Drone"
          paragraphs={forthirdpara}
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
