import type { Metadata } from "next";
import React from "react";
import { SITE_URL } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Proto — High-Speed AI Rolling Robot for Emergency Response & Logistics",
  description:
    "Proto is an advanced AI-powered rolling robot engineered for high-speed emergency response, medicine delivery, and smart logistics automation. Capable of 120 km/h and 10 kg payload. Designed by Vayu Galaxy.",
  alternates: {
    canonical: `${SITE_URL}/proto`,
  },
  openGraph: {
    title: "Proto — High-Speed AI Rolling Robot for Emergency Response & Logistics",
    description:
      "Proto is an advanced AI-powered rolling robot engineered for high-speed emergency response, medicine delivery, and smart logistics automation. Capable of 120 km/h and 10 kg payload. Designed by Vayu Galaxy.",
    url: `${SITE_URL}/proto`,
    images: [
      {
        url: "/assets/protoimg1.png",
        width: 1200,
        height: 630,
        alt: "Proto rolling robot concept design by Vayu Galaxy",
      },
    ],
  },
  twitter: {
    title: "Proto — High-Speed AI Rolling Robot for Emergency Response & Logistics",
    description:
      "Proto is an advanced AI-powered rolling robot engineered for high-speed emergency response, medicine delivery, and smart logistics automation.",
    images: ["/assets/protoimg1.png"],
  },
};
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/layout/FinalCTA";
import ProjectHero from "@/components/projects/ProjectHero";
import AboutSection from "@/components/home/AboutSection";
import FounderSection from "@/components/home/FounderSection";
import TrackView from "@/components/analytics/TrackView";

export default function ProtoPage() {
  return (
    <div className="proto-page-wrapper bg-white">
      <TrackView
        eventName="view_project_detail"
        params={{
          project_id: "proto_robot",
          project_name: "Proto Robot",
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
        <ProjectHero videoSrc="/assets/proto1.mp4" />

        <AboutSection
          theme="dark"
          title={
            <>
              About <strong>Proto</strong>
            </>
          }
          paragraphs={[
            "Proto is an advanced rolling robot designed by Mr. Raushan Kumar in India to revolutionize emergency rescue operations and logistics. Engineered for speed, efficiency, and reliability, Proto is built to navigate through tough terrains and deliver essential goods, medical supplies, and rescue assistance swiftly.",
            "At Proto, we are committed to leveraging innovation and automation to create a safer and more connected world. With its ability to carry up to 10 kg and travel at an impressive 120 km/h, Proto is not just a delivery robot—it’s a lifesaving innovation.",
            "We believe in the power of technology to save lives and enhance accessibility. Our vision is to integrate robotics, artificial intelligence, and automation to create smart, self-sufficient solutions that address real-world challenges in healthcare, logistics, and emergency response.",
          ]}
          imageSrc="/assets/protoimg1.png"
          imageAlt="Proto Robot concept design"
          imageMaxWidthClass="max-w-[400px]"
          imageFill={true}
        />

        {/* Map view 1 */}
        <section className="w-full flex flex-col items-center bg-white">
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/protolable.jpg"
              alt="Proto Robot layout map"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Tech Header */}
        <section className="h-[20vh] bg-black flex flex-col items-center justify-center text-[#FAFAFA] text-center border-y border-white/5">
          <h1 className="font-space-grotesk text-[24px] md:text-[28px] font-semibold uppercase tracking-[3px] m-0">
            Real Time Communication
          </h1>
        </section>

        <ProjectHero videoSrc="/assets/proto2.mp4" />

        <AboutSection
          theme="light"
          title="How Proto Works?"
          paragraphs={[
            "Proto is an advanced AI-powered rolling robot designed for high-speed emergency response, medicine delivery, and smart logistics automation. It operates using a combination of artificial intelligence, autonomous navigation, and real-time monitoring systems, ensuring swift, efficient, and secure deliveries across various terrains. Its self-balancing rolling mechanism enables it to maintain stability while moving at high speeds, making it an ideal solution for critical applications like disaster response and last-mile logistics.",
            "At the core of Proto's functionality is its AI-based autonomous navigation system, which leverages LiDAR sensors, ultrasonic sensors, GPS, and real-time mapping to detect obstacles and determine the most efficient routes. The robot's AI continuously analyzes the environment, allowing it to navigate safely through urban roads, rough landscapes, and even disaster-hit zones. If required, Proto can also be controlled remotely, providing flexibility in high-risk or mission-critical scenarios.",
            "One of Proto’s standout features is its high-speed mobility, reaching up to 120 km/h. This makes it significantly faster than traditional delivery systems, ensuring that emergency medical supplies, rescue kits, and essential goods reach their destinations without delay. Its gyro-stabilization technology helps it maintain balance at high speeds, allowing smooth movement across diverse terrains.",
          ]}
          imageSrc="/assets/protoimg3.png"
          imageAlt="Proto Robot functional detail"
          imageMaxWidthClass="max-w-[550px]"
          imageFill={true}
        />

        <FounderSection
          title="Meet Our Founder"
          name="Mr. Raushan Kumar"
          descriptionParagraphs={[
            "Raushan Kumar, a visionary entrepreneur and innovator, is the mastermind behind Proto, a cutting-edge rolling robot designed to revolutionize emergency rescue operations, medicine delivery, and smart logistics. With a passion for leveraging AI and robotics for real-world impact, he developed Proto to provide high-speed, autonomous mobility in critical situations.",
            "Under his leadership, Proto is setting new standards in robotic automation, ensuring faster, safer, and more efficient solutions for healthcare, disaster response, and last-mile delivery.",
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
