import type { Metadata } from "next";
import React from "react";
import { SITE_URL } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Vayu Galaxy — Future Living, Technology & Innovation",
  description:
    "Vayu Galaxy is pioneering the next era of living — introducing high-altitude architectural ecosystems, the Devi Drone UAV, the Proto high-speed robot, and the SPD T1 atmospheric engineering concept. Early access open.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Vayu Galaxy — Future Living, Technology & Innovation",
    description:
      "Vayu Galaxy is pioneering the next era of living — introducing high-altitude architectural ecosystems, the Devi Drone UAV, the Proto high-speed robot, and the SPD T1 atmospheric engineering concept.",
    url: `${SITE_URL}/`,
    images: [
      {
        url: "/assets/about.jpeg",
        width: 1200,
        height: 630,
        alt: "Vayu Galaxy future-living architectural concept",
      },
    ],
  },
  twitter: {
    title: "Vayu Galaxy — Future Living, Technology & Innovation",
    description:
      "Vayu Galaxy is pioneering the next era of living — introducing high-altitude architectural ecosystems, the Devi Drone UAV, the Proto high-speed robot, and the SPD T1 atmospheric engineering concept.",
    images: ["/assets/about.jpeg"],
  },
};
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/layout/FinalCTA";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/home/AboutSection";
import VideoSection from "@/components/home/VideoSection";
import CitiesAtRisk from "@/components/home/CitiesAtRisk";
import MapView from "@/components/home/MapView";
import FeatureSection from "@/components/home/FeatureSection";
import ProjectGrid from "@/components/home/ProjectGrid";
import FounderSection from "@/components/home/FounderSection";

const forfirstpara = [
  "Vayu Galaxy represents a bold new chapter in human architecture and conceptual design—introducing the 8th World of Wonder. By combining high-altitude structural engineering with self-sustaining luxury ecosystems, we are designing living spaces that float above the horizon, bridging the gap between Earth and the cosmos.",
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
          id="about"
          theme="light"
          title="8th World of Wonder, Coming Soon!"
          paragraphs={forfirstpara}
          chapterNumber="01"
          chapterLabel="THE AERIAL TOWNSHIP"
          specifications={[
            { label: "PROJECT TYPE", value: "Aerial Urban Township" },
            { label: "EST. ALTITUDE", value: "1,000 – 5,000 Meters" },
            { label: "CORE FOCUS", value: "Atmospheric Habitation" },
            { label: "DEVELOPMENT STATE", value: "Conceptual Monograph" }
          ]}
        />

        <VideoSection />

        <CitiesAtRisk />

        <MapView />

        <AboutSection
          id="lord-vishnu"
          theme="light"
          title={
            <>
              World&apos;s Biggest Lord Vishnu Statue in the air.
            </>
          }
          paragraphs={forsecondpara}
          chapterNumber="02"
          chapterLabel="CULTURAL MONUMENT"
          specifications={[
            { label: "MONUMENT TYPE", value: "Suspended Vedic Monument" },
            { label: "HEIGHT DETAIL", value: "World's Largest Airborne Statue" },
            { label: "STRUCTURAL BASIS", value: "High-Altitude Stabilization" },
            { label: "CULTURAL STATUS", value: "Conceptual Spiritual Beacon" }
          ]}
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

      <FinalCTA />
      <Footer />
    </div>
  );
}
