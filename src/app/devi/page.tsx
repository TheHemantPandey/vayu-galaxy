import type { Metadata } from "next";
import React from "react";
import { SITE_URL } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Devi Drone — Autonomous UAV for Surveillance, Emergency & Logistics",
  description:
    "Devi Drone is a cutting-edge modular UAV designed for security surveillance, emergency medical logistics, disaster management, and autonomous operations. Engineered by Vayu Galaxy in India.",
  alternates: {
    canonical: `${SITE_URL}/devi`,
  },
  openGraph: {
    title: "Devi Drone — Autonomous UAV for Surveillance, Emergency & Logistics",
    description:
      "Devi Drone is a cutting-edge modular UAV designed for security surveillance, emergency medical logistics, disaster management, and autonomous operations. Engineered by Vayu Galaxy in India.",
    url: `${SITE_URL}/devi`,
    images: [
      {
        url: "/assets/drone1.png",
        width: 1200,
        height: 630,
        alt: "Devi Drone autonomous UAV concept",
      },
    ],
  },
  twitter: {
    title: "Devi Drone — Autonomous UAV for Surveillance, Emergency & Logistics",
    description:
      "Devi Drone is a cutting-edge modular UAV designed for security surveillance, emergency medical logistics, disaster management, and autonomous operations.",
    images: ["/assets/drone1.png"],
  },
};
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/layout/FinalCTA";
import ProjectHero from "@/components/projects/ProjectHero";
import AboutSection from "@/components/home/AboutSection";
import FounderSection from "@/components/home/FounderSection";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";

export default function DeviPage() {
  return (
    <div className="devi-page-wrapper bg-white">
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
        <ProjectHero videoSrc="/assets/devibg.mp4" />

        <AboutSection
          theme="dark"
          title={
            <>
              About <strong>Devi Drone</strong>
            </>
          }
          paragraphs={[
            "Devi Drone is a cutting-edge unmanned aerial vehicle (UAV) designed to cater to various industries, including defense, surveillance, disaster management, agriculture, and logistics. Built with precision engineering and advanced technology, it provides a reliable and efficient solution for aerial monitoring and autonomous operations. Equipped with high-resolution cameras, thermal imaging sensors, and AI-powered navigation, Devi Drone can operate in diverse environments, from urban landscapes to remote areas. Its robust design ensures durability, making it suitable for challenging weather conditions.",
            "One of the standout features of Devi Drone is its adaptability. It can be modified for multiple applications, such as search-and-rescue missions, crop health monitoring, border surveillance, and emergency medical deliveries. With an emphasis on efficiency and safety, the drone is designed to support industries that require quick and accurate aerial insights. Whether used for security purposes, environmental monitoring, or commercial deliveries, Devi Drone offers a dependable, high-tech solution.",
          ]}
          imageSrc="/assets/drone1.png"
          imageAlt="Devi Drone concept"
          imageMaxWidthClass="max-w-[550px]"
        />

        {/* Map view 1 */}
        <section className="w-full flex flex-col items-center bg-white">
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/5km.png"
              alt="Devi Drone range specifications"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Custom wrapping floating layout for How Devi Drone Works? */}
        <section className="w-full bg-[#FFFFFF] text-[#111111] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-[10%] flex justify-center items-center border-t border-black/[0.06] relative overflow-hidden font-space-grotesk">
          {/* Subtle blueprint grid line overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40" />

          <div className="max-w-[1200px] w-full relative z-10 mx-auto">
            {/* Section Title */}
            <div className="mb-6 sm:mb-8 border-b border-black/[0.06] pb-4">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                <h2 className="font-display font-medium tracking-tight uppercase leading-[1.1] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] text-[#111111]">
                  How Devi Drone Works?
                </h2>
              </Reveal>
            </div>

            {/* Float clear wrapper container */}
            <div className="w-full flow-root">
              {/* Floated Image Container Card (floats right on desktop, stacks full screen on mobile) */}
              <div className="w-full md:w-[42%] md:float-right md:ml-10 md:mb-6 mb-8 relative">
                <Reveal style="fade" direction="up" duration={1.0} delay={0.2} className="w-full">
                  <div className="relative w-full aspect-[4/3] xs:aspect-[16/10] sm:aspect-video md:aspect-[4/3] overflow-hidden rounded-xl bg-black/5 border border-black/[0.08] shadow-md">
                    <Image
                      src="/assets/drone2.png"
                      alt="Devi Drone operational view"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-contain p-4 sm:p-6 pointer-events-none"
                    />
                  </div>
                </Reveal>
              </div>

              {/* Text monograph content (wraps on left of image on desktop, spans full width below) */}
              <div className="space-y-4 sm:space-y-6 text-[0.875rem] sm:text-[0.95rem] md:text-[1.025rem] leading-[1.75] font-sans font-light text-[#444440]">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
                  <p>
                    Devi Drone functions through a combination of GPS-based autonomous flight, real-time data processing, and AI-driven obstacle detection. It is equipped with advanced sensors that allow it to map out its surroundings and navigate seamlessly without manual intervention. The drone can be operated in different modes, including fully autonomous flight, semi-autonomous control, and manual operation via a remote control system or a mobile application.
                  </p>
                </Reveal>
                <Reveal style="fade" direction="up" duration={0.8} delay={0.35}>
                  <p>
                    To ensure precision and safety, Devi Drone uses a sophisticated flight control system that continuously analyzes environmental data, adjusting its path in real time to avoid obstacles. Its high-definition cameras and thermal sensors transmit live footage to operators, providing crucial information for decision-making in applications such as security monitoring or disaster relief.
                  </p>
                </Reveal>
                <Reveal style="fade" direction="up" duration={0.8} delay={0.45}>
                  <p>
                    The drone is powered by rechargeable lithium-ion batteries or a hybrid fuel system, depending on the model, enabling extended flight durations for long-distance operations. Its modular design allows for quick attachment of specialized equipment, such as spraying mechanisms for agricultural use or payload compartments for medical deliveries. Devi Drone can be programmed to follow specific flight paths, return to base automatically when low on battery, and communicate with other drones in a network for coordinated missions.
                  </p>
                </Reveal>
              </div>
            </div>

          </div>
        </section>

        {/* Map view 2 */}
        <section className="w-full flex flex-col items-center bg-white">
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/dronelable.png"
              alt="Devi Drone structural specifications"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Video Player Section */}
        <section className="flex flex-col items-center text-center py-[60px] px-5 md:px-[70px] bg-white">
          <div className="w-full max-w-[100%] rounded-[20px] overflow-hidden">
            <div className="relative w-full pb-[56.25%] overflow-hidden shadow-[0_8px_16px_rgba(255,0,0,0.2)] rounded-[20px]">
              <iframe
                src="https://www.youtube.com/embed/AN72t94dIaI?si=e8SXtFbvgx4E1YSt"
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
            Medical Emergency
          </h1>
        </section>

        <ProjectHero videoSrc="/assets/medicalbg.mp4" />

        {/* Map view 3 */}
        <section className="w-full flex flex-col items-center bg-white">
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/devibg.png"
              alt="Devi Drone grid layout"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Map view 4 */}
        <section className="w-full flex flex-col items-center bg-white">
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/24x7.png"
              alt="24x7 Emergency Service"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <ProjectHero videoSrc="/assets/devibg2.mp4" />

        <FounderSection
          title="Meet Our Founder"
          name="Mr. Raushan Kumar"
          descriptionParagraphs={[
            "Raushan Kumar, an entrepreneur and innovation-driven mentor, is the visionary behind Devi Drone, a cutting-edge unmanned aerial vehicle (UAV) designed for multiple applications, including surveillance, disaster management, agriculture, and logistics. With a strong background in revolutionary technology, he has developed Devi Drone to enhance efficiency in critical operations, integrating AI-powered navigation, real-time data transmission, and autonomous flight capabilities.",
            "The drone's modular design allows customization for various industries, making it a versatile solution for aerial monitoring and emergency response. Raushan Kumar’s commitment to technological advancements continues to drive innovation in the UAV sector.",
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
