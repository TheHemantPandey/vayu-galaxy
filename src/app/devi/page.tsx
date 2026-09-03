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
import TrackView from "@/components/analytics/TrackView";

export default function DeviPage() {
  return (
    <div className="devi-page-wrapper bg-white">
      <TrackView
        eventName="view_project_detail"
        params={{
          project_id: "devi_drone",
          project_name: "Devi Drone",
        }}
      />
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
          imageFill={true}
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
        <section className="w-full bg-[#050505] text-[#F4F2ED] py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-[10%] flex flex-col items-center relative overflow-hidden border-t border-white/[0.03] border-b border-white/[0.03]">
          {/* Subtle blueprint grid line overlay for continuous story styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40" />

          <div className="max-w-[1200px] w-full relative z-10 flex flex-col space-y-10 sm:space-y-14">
            
            {/* Section Header */}
            <div className="w-full text-left">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F2ED] uppercase font-display leading-[1.1]">
                  Devi Drone In Action
                </h2>
              </Reveal>
            </div>

            {/* Cinematic YouTube Player Wrapper */}
            <Reveal style="fade" direction="up" duration={1.0} delay={0.25} className="w-full">
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#0d0d0c] border border-white/[0.08] p-2 sm:p-3 shadow-2xl">
                {/* Subtle gold top line accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9E824C]/40 to-transparent" />
                
                {/* Video wrapper */}
                <div className="relative w-full rounded-xl overflow-hidden pb-[56.25%] bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/AN72t94dIaI?si=e8SXtFbvgx4E1YSt"
                    title="Devi Drone Field Demonstration Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-none filter brightness-95"
                  ></iframe>
                </div>
              </div>
            </Reveal>

            {/* Optional Supporting Content / Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-white/10 items-start">
              <div className="md:col-span-8">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.35}>
                  <p className="text-sm sm:text-base text-zinc-400 font-light leading-[1.75] max-w-2xl text-left">
                    Watch the real-world operational demonstration of the Devi Drone in action, illustrating its autonomous flight capability, stability, and control systems during field testing.
                  </p>
                </Reveal>
              </div>

              <div className="md:col-span-4 grid grid-cols-2 gap-4 font-mono text-[9px] sm:text-[10px] tracking-wider text-zinc-500 uppercase md:justify-items-end">
                <div className="text-left md:text-right">
                  <span className="block text-zinc-600 font-semibold mb-1">SYSTEM</span>
                  <span className="text-zinc-300">DEVI DRONE</span>
                </div>
                <div className="text-left md:text-right">
                  <span className="block text-zinc-600 font-semibold mb-1">DOCUMENTATION</span>
                  <span className="text-zinc-300">FIELD VIDEO</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Tech Header */}
        <section className="h-[20vh] bg-black flex flex-col items-center justify-center text-[#FAFAFA] text-center border-y border-white/5">
          <Reveal style="fade" direction="up" duration={0.8}>
            <h1 className="font-space-grotesk text-[24px] md:text-[28px] font-semibold uppercase tracking-[3px] m-0">
              Medical Emergency
            </h1>
          </Reveal>
        </section>

        {/* Visual 01 (Video) */}
        <Reveal style="fade" direction="up" duration={1.0} delay={0.1}>
          <ProjectHero videoSrc="/assets/medicalbg.mp4" />
        </Reveal>

        {/* Content Block 01 (Left-aligned) */}
        <section className="w-full bg-[#050505] text-[#FAFAFA] border-t border-white/[0.08] relative overflow-hidden font-space-grotesk">
          <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[10%] py-12 sm:py-16 md:py-24">
            <div className="max-w-[450px] text-left">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.25em] text-[#DFCFB7] uppercase mb-2">
                  01 // MEDICAL RESPONSE
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-medium text-[#FAFAFA] uppercase mb-4 tracking-tight">
                  MEDICAL RESPONSE
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 font-light leading-[1.75]">
                  Engineered for rapid deployment in critical situations, delivering medical supplies and cargo autonomously to remote or inaccessible locations.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Visual 02 (Image) */}
        <section className="w-full flex flex-col items-center bg-[#050505] border-t border-white/[0.08]">
          <div className="w-full">
            <Reveal style="fade" direction="up" duration={1.0} delay={0.1}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/devibg.png"
                alt="Devi Drone grid layout"
                className="w-full h-auto object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* Content Block 02 (Right-aligned) */}
        <section className="w-full bg-[#050505] text-[#FAFAFA] border-t border-white/[0.08] relative overflow-hidden font-space-grotesk">
          <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[10%] py-12 sm:py-16 md:py-24 flex justify-end">
            <div className="max-w-[450px] text-left w-full">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.25em] text-[#DFCFB7] uppercase mb-2">
                  02 // FIELD APPLICATION
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-medium text-[#FAFAFA] uppercase mb-4 tracking-tight">
                  FIELD APPLICATION
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 font-light leading-[1.75]">
                  Designed to operate reliably in diverse environments, utilizing GPS-based navigation and real-time mapping for precise operations.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Visual 03 (Image) */}
        <section className="w-full flex flex-col items-center bg-[#050505] border-t border-white/[0.08]">
          <div className="w-full">
            <Reveal style="fade" direction="up" duration={1.0} delay={0.1}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/24x7.png"
                alt="24x7 Emergency Service"
                className="w-full h-auto object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* Content Block 03 (Left-aligned with label) */}
        <section className="w-full bg-[#050505] text-[#FAFAFA] border-t border-white/[0.08] relative overflow-hidden font-space-grotesk">
          <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[10%] py-12 sm:py-16 md:py-24 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
            <div className="max-w-[450px] text-left">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                <span className="block text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.25em] text-[#DFCFB7] uppercase mb-2">
                  03 // EMERGENCY RESPONSE
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-medium text-[#FAFAFA] uppercase mb-4 tracking-tight">
                  EMERGENCY RESPONSE
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 font-light leading-[1.75]">
                  Providing continuous operational readiness and 24/7 service capability to assist search-and-rescue teams and local response units.
                </p>
              </Reveal>
            </div>
            
            <div className="md:text-right shrink-0">
              <Reveal style="fade" direction="up" duration={0.8} delay={0.25}>
                <span className="inline-block text-[0.55rem] sm:text-[0.6rem] font-mono tracking-[0.2em] text-[#DFCFB7] uppercase border border-white/10 px-4 py-2 rounded-none bg-[#111111] leading-none select-none">
                  STATUS: 24/7 ACTIVE
                </span>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Visual 04 (Video) */}
        <section className="w-full bg-[#050505] flex flex-col items-center">
          <Reveal style="fade" direction="up" duration={1.0} delay={0.1} className="w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block object-contain"
            >
              <source src="/assets/devibg2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Reveal>
        </section>

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
