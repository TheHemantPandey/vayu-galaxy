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
import ProjectGrid from "@/components/home/ProjectGrid";
import FounderSection from "@/components/home/FounderSection";
import ColonyConcept from "@/components/home/ColonyConcept";
import InnovationShowcase from "@/components/home/InnovationShowcase";
import FutureVision from "@/components/home/FutureVision";

const forfirstpara = [
  "Vayu Galaxy represents a new chapter in conceptual architecture, exploring the viability of high-altitude habitation. By combining structural engineering concepts with self-sustaining ecosystems, we design speculative living spaces that float above the horizon, bridging the gap between land and sky.",
];
const forsecondpara = [
  "Standing as a monument of absolute engineering marvel and spiritual legacy, Vayu Galaxy introduces the world's largest Lord Vishnu statue suspended in the air. This structure combines ancient Vedic architecture with modern high-altitude stabilization systems, creating a breathtaking spiritual beacon that transcends traditional boundaries.",
  "Hovering with advanced structural suspension and glowing with solar-powered illumination grids, the monument serves as an architectural protector of the city below. It represents a conceptual fusion of historical heritage, futuristic design, and absolute cultural pride.",
  "This iconic design serves as a testament to human ingenuity and spiritual devotion, rising majestically into the sky. It invites visitors from around the globe to witness a harmonious synthesis of technology and timeless devotion, marking a new milestone in conceptual landmark creation.",
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
          title="THE ATMOSPHERIC TOWNSHIP CONCEPT"
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

        <ColonyConcept />

        <InnovationShowcase />

        <FutureVision />

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
          imageSrc="/assets/loadvishnu.jpeg"
          imageAlt="Lord Vishnu"
          chapterNumber="02"
          chapterLabel="CULTURAL MONUMENT"
          imageCaption="ARCHITECTURAL MONUMENT VISUALIZATION — ARTISTIC DETAIL"
          layoutType="right-text"
        />


        {/* Projects Section Tech Heading */}
        <section className="h-[20vh] bg-black flex flex-col items-center justify-center text-[#FAFAFA] text-center border-y border-white/5">
          <h1 className="font-space-grotesk text-[24px] md:text-[28px] font-semibold uppercase tracking-[3px] m-0">
            Project
          </h1>
        </section>

        <ProjectGrid />

        <FounderSection
          title="PEOPLE & PURPOSE"
          headline="BUILT BY PEOPLE WHO BELIEVE THE FUTURE CAN BE DESIGNED."
          name="Raushan Kumar // Lead Visionary"
          descriptionParagraphs={[
            "Vayu Galaxy is an ongoing journey driven by human curiosity and ambition. The vision is created by people who believe that the future environment doesn't have to be accepted as it is — it can be designed.",
            "Our purpose is to explore new possibilities for human life, mobility, and habitation above the land. Through collective design, research, and experimental engineering, we map a new layer of spatial potential.",
          ]}
        />
      </main>

      <FinalCTA />
      <Footer />
    </div>
  );
}
