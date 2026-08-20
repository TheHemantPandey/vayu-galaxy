import React from "react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo-config";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimer | Vayu Galaxy",
  description: "Read the Vayu Galaxy Disclaimer regarding futuristic technology concepts, simulations, renderings, and speculative aerospace engineering specifications.",
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      subtitle="Vayu Galaxy publishes futuristic concepts, simulations, and township blueprints. Please review this technical disclaimer regarding our research models."
      updatedAt="August 20, 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          1. General Informational and Conceptual Scope
        </h2>
        <p>
          The contents of this website are provided solely for general informational, conceptual, and educational purposes. The layouts and specifications on Vayu Galaxy showcase research directions, architectural vision, and conceptual models. 
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          2. Technology &amp; Innovation Disclaimer
        </h2>
        <p>
          Vayu Galaxy researches and conceptualizes pioneering systems that push the boundaries of aerospace engineering and smart cities. Specifically:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>SPD T1 Atmospheric Solar Shield:</strong> This project represents a high-altitude climate defense concept designed to deflect solar radiation. It is an active research model and does not claim commercial deployment or completed atmospheric testing.
          </li>
          <li>
            <strong>Devil Drone Modular UAV:</strong> The specifications, modular frame structures, and emergency dispatch features describe an advanced prototype layout. Real-world performance results may vary based on environmental coordinates and regional safety regulations.
          </li>
          <li>
            <strong>Proto Rolling Robot:</strong> Velocity figures (up to 120 km/h) and payload claims (up to 10 kg) are established engineering estimations derived from prototype models.
          </li>
        </ul>
        <p>
          None of these designs represent guaranteed commercial capabilities or off-the-shelf equipment available for immediate purchase.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          3. Technical Specifications &amp; Performance
        </h2>
        <p>
          Estimated parameters, speeds, flight profiles, structural calculations, and payload capacities represent design goals. These parameters may change, adapt, or be completely replaced as R&amp;D progresses. Vayu Galaxy does not guarantee that the physical models built in the future will match the digital specifications published on this platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          4. Visualizations, Renders, and Videos
        </h2>
        <p>
          All images, videos, 3D animations, layout drawings, and simulations on Vayu Galaxy (including flight experience videos or township maps) are artist representations. They are designed to illustrate the core conceptual vision and structural mechanics. They may not precisely depict final physical models or operational layouts.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          5. No Professional Engineering or Investment Advice
        </h2>
        <p>
          The information on this platform should not be construed as professional engineering, financial, safety, investment, or legal advice. Visitors, prospective partners, and researchers must conduct their own independent due diligence before making strategic decisions or interpreting structural blueprints.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          6. External Media and Resources
        </h2>
        <p>
          This website embeds external resources, including video player interfaces and social links. Vayu Galaxy does not verify or assume responsibility for content, statements, or compliance standards maintained on external platforms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          7. No Guarantee of Outcomes
        </h2>
        <p>
          Vayu Galaxy does not guarantee the completion, commercial release, regulatory certification, or deployment timeline of any project listed. Submitting registration forms registers your interest for information updates and does not guarantee participation in strategic capital programs or early-stage testing.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          8. Queries
        </h2>
        <p>
          For specific clarifications regarding technical disclaimers, please submit an inquiry through the <a href="/contact" className="text-[#B7A27A] hover:underline">Contact Page</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
