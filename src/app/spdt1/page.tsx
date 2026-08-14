import type { Metadata } from "next";
import React from "react";
import { SITE_URL } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "SPD T1 — Atmospheric Solar Defense Technology Concept",
  description:
    "SPD T1 is a first-of-its-kind atmospheric defense technology concept designed to regulate excessive solar radiation, combat global warming, and protect Earth's climate through high-altitude aerospace engineering. A Vayu Galaxy innovation.",
  alternates: {
    canonical: `${SITE_URL}/spdt1`,
  },
  openGraph: {
    title: "SPD T1 — Atmospheric Solar Defense Technology Concept",
    description:
      "SPD T1 is a first-of-its-kind atmospheric defense technology concept designed to regulate excessive solar radiation, combat global warming, and protect Earth's climate through high-altitude aerospace engineering.",
    url: `${SITE_URL}/spdt1`,
    images: [
      {
        url: "/assets/spdt1.png",
        width: 1200,
        height: 630,
        alt: "SPD T1 atmospheric solar defense technology concept",
      },
    ],
  },
  twitter: {
    title: "SPD T1 — Atmospheric Solar Defense Technology Concept",
    description:
      "SPD T1 is a first-of-its-kind atmospheric defense technology concept designed to regulate excessive solar radiation and combat global warming.",
    images: ["/assets/spdt1.png"],
  },
};
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/layout/FinalCTA";
import ProjectHero from "@/components/projects/ProjectHero";
import AboutSection from "@/components/home/AboutSection";
import FounderSection from "@/components/home/FounderSection";

export default function Spdt1Page() {
  return (
    <div className="spdt1-page-wrapper bg-white">
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
        <ProjectHero videoSrc="/assets/spd1.mp4" />

        <AboutSection
          theme="light"
          title={
            <>
              About <strong>SPDT t1</strong>
            </>
          }
          paragraphs={[
            "In a world where climate change is accelerating at an unprecedented rate, SPDt1 emerges as a game-changing innovation—a first-of-its-kind atmospheric defense technology designed to protect Earth from excessive solar radiation. By deploying a high-altitude shielding system, SPDt1 aims to regulate the sun’s impact, mitigate the effects of global warming, and create a future where extreme heatwaves and environmental destruction are no longer inevitable.",
            "This bold and disruptive concept is the brainchild of Mr. Raushan Kumar, a visionary entrepreneur and technology leader who believes in leveraging science to reshape the future. Designed and developed in India, SPDt1 is not just an innovation—it’s a global movement towards sustainability, planetary protection, and cutting-edge aerospace engineering.",
            "For centuries, humanity has been at the mercy of the sun’s power. But what if we could control how much solar radiation reaches our planet—without affecting natural ecosystems? SPDt1 is designed to do exactly that.",
          ]}
          imageSrc="/assets/spdt1.png"
          imageAlt="SPD t1 solar defense technology concept"
          imageMaxWidthClass="max-w-[400px]"
        />

        {/* Map view 1 */}
        <section className="w-full flex flex-col items-center bg-white">
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/spdtLabel.png"
              alt="SPD t1 functional layout"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Video Section */}
        <section className="flex flex-col items-center text-center py-[60px] px-5 md:px-[70px] bg-white">
          <div className="w-full max-w-[100%] rounded-[20px] overflow-hidden">
            <div className="relative w-full pb-[56.25%] overflow-hidden shadow-[0_8px_16px_rgba(255,0,0,0.2)] rounded-[20px]">
              <iframe
                src="https://www.youtube.com/embed/OUFSoPsG374?si=s8Q4ISbooiFEYq25"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-none"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Tech Header */}
        <section className="h-[20vh] bg-black flex flex-col items-center justify-center text-[#FAFAFA] text-center border-y border-white/5">
          <h1 className="font-space-grotesk text-[24px] md:text-[28px] font-semibold uppercase tracking-[3px] m-0">
            Docking
          </h1>
        </section>

        <ProjectHero videoSrc="/assets/spd1.mp4" />

        <AboutSection
          theme="light"
          title="How SPDt1 Works?"
          paragraphs={[
            "SPDt1 is based on next-generation aerospace technology, using advanced materials that can absorb, deflect, or regulate solar radiation before it reaches the Earth's surface. Unlike conventional climate solutions that focus on adapting to rising temperatures, SPDt1 proactively prevents excessive heat from ever reaching dangerous levels.",
            "SPDt1 isn't just another climate solution—it is humanity’s first step toward planetary-scale protection. With Earth’s climate rapidly reaching a critical tipping point, this innovation has the power to reshape our future. By merging science, sustainability, and space-age engineering, we are creating a world where the fear of an unlivable planet is replaced with hope, action, and technological mastery.",
            "SPDt1 is calling upon scientists, engineers, environmentalists, policymakers, and visionaries to be part of this historic breakthrough. The time to act is now. This isn't just an idea—it’s the future unfolding before our eyes.",
          ]}
          imageSrc="/assets/spdt2.png"
          imageAlt="SPD t1 solar panel layout diagram"
          imageMaxWidthClass="max-w-[400px]"
        />

        <AboutSection
          theme="light"
          title="Our Vision"
          paragraphs={[
            "At SPDt1, we envision a world where technology works in harmony with nature. Our goal is to develop solutions that not only combat climate change but also enhance the quality of life for all living beings. By deploying advanced shielding mechanisms in the sky, we aim to regulate excessive sunlight, reduce heat waves, and create a more sustainable atmospheric balance without disrupting natural weather patterns.",
            "SPDt1 is more than just an innovation—it is a movement toward a greener, safer, and technologically advanced planet. As we work towards bringing this visionary project to life, we welcome collaborations with researchers, scientists, environmentalists, and policymakers who share our vision for a sustainable future.",
          ]}
        />

        <FounderSection
          title="Meet Our Founder"
          name="Mr. Raushan Kumar"
          descriptionParagraphs={[
            "SPDt1 is the brainchild of Mr. Raushan Kumar, a renowned entrepreneur and innovation leader dedicated to pioneering revolutionary technologies for a sustainable future. Designed and developed in India, SPDt1 represents a bold step towards global climate resilience, reinforcing India’s position as a leader in climate innovation and space technology.",
          ]}
          socialLinks={[
            {
              href: "https://www.instagram.com/raushankumar.in?igsh=YjI0emUyMTdlbHRi",
              iconClass: "fab fa-instagram",
            },
            {
              href: "https://www.linkedin.com/in/raushan-kumar-b60b771b0/?originalSubdomain=in",
              iconClass: "fab fa-linkedin",
            },
          ]}
        />
      </main>

      <FinalCTA />
      <Footer />
    </div>
  );
}
