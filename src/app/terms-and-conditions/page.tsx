import React from "react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo-config";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vayu Galaxy",
  description: "Read the Terms & Conditions of Vayu Galaxy outlining site usage, intellectual property, registrations, and conceptual technology guidelines.",
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="By accessing Vayu Galaxy, you agree to these operational usage guidelines and compliance standards."
      updatedAt="August 20, 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing or using Vayu Galaxy (available at <a href={SITE_URL} className="text-[#B7A27A] hover:underline">{SITE_URL}</a>), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree to these terms, you should terminate your access immediately.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          2. Platform Purpose &amp; Usage
        </h2>
        <p>
          This website serves to publish and display advanced technological concepts, aerospace designs, and future township master plans developed by Vayu Galaxy.
        </p>
        <p>
          <strong>Eligibility:</strong> Access is permitted globally. However, registering your interest or submitting booking details is intended only for individuals who are of legal age to enter binding relationships under their local regional jurisdiction.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          3. Intellectual Property Rights
        </h2>
        <p>
          All content, illustrations, schematics, and text layouts published on Vayu Galaxy are the exclusive property of Vayu Galaxy and Mr. Raushan Kumar:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Conceptual Renders &amp; Blueprint Sketches:</strong> Visual assets representing the SPD T1 solar shield, Devil Drone UAV configurations, and Proto Robot mechanisms are protected under intellectual property and copyright laws.
          </li>
          <li>
            <strong>Editorial Copy:</strong> Blog insights, structural monographs, and technical specifications are protected and may not be copied, reproduced, or mirrored without explicit written consent.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          4. Registration &amp; Form Submissions
        </h2>
        <p>
          When submitting interest forms on our platform:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You agree to provide accurate, current, and truthful credentials (name, email, phone).</li>
          <li>Early registration represents a statement of interest and does not establish a financial contract, commercial purchase order, or guaranteed supply of equipment.</li>
          <li>We reserve the right to remove or refuse registrations containing false contact coordinates.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          5. No-Warranty Clause
        </h2>
        <p>
          This website and its conceptual presentations are provided on an &quot;as is&quot; and &quot;as available&quot; basis. Vayu Galaxy makes no warranties, express or implied, regarding the timeline, commercial feasibility, or final engineering implementation of any illustrated concept (including the SPD T1 shield, Devil Drone, or Proto Robot). All specifications are speculative and subject to development revisions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          6. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by applicable law, Vayu Galaxy, its founder Mr. Raushan Kumar, and its developers shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, the platform, its materials, or its conceptual presentations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          7. Prohibited Actions
        </h2>
        <p>
          You agree not to disrupt the platform&apos;s security systems, reverse-engineer layout files, use data-scraping scripts, or submit malicious payloads through our contact forms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          8. Governing Law and Jurisdiction
        </h2>
        <p>
          These Terms and Conditions are governed by the laws of India. Any disputes arising from your use of this platform shall be subject to the exclusive jurisdiction of the courts of Delhi NCR, India.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          9. Revisions &amp; Support
        </h2>
        <p>
          We reserve the right to edit these terms at any time. Your continued use of the platform after updates indicates acceptance of the revised terms. For compliance questions, please contact us through the <a href="/contact" className="text-[#B7A27A] hover:underline">Contact Page</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
