import React from "react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo-config";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Vayu Galaxy",
  description: "Read the Privacy Policy of Vayu Galaxy to understand how we collect, protect, and handle registration, contact form data, and embedded media settings.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Your privacy and data security are integral to our engineering standards. This policy outlines how Vayu Galaxy handles information across our platforms."
      updatedAt="August 20, 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          1. Introduction
        </h2>
        <p>
          Welcome to Vayu Galaxy (available at <a href={SITE_URL} className="text-[#B7A27A] hover:underline">{SITE_URL}</a>). We respect your privacy and are committed to protecting the information you share with us. This Privacy Policy details how we collect, store, and utilize data when you browse our site, register your interest, or contact our engineering teams.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          2. Information We Collect
        </h2>
        <p>
          We only collect information necessary to deliver, verify, and improve the conceptual design and communication services of Vayu Galaxy:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Registration & Booking Data:</strong> When registering your interest through our registration forms (e.g., Book Now), we collect credentials such as your full name, email address, phone number, location, and interest preferences.
          </li>
          <li>
            <strong>Inquiries & Contact Forms:</strong> If you reach out through our contact portals, we collect the content of your message along with your name, organization, and contact details.
          </li>
          <li>
            <strong>Analytics & Technical Telemetry:</strong> When analytics configurations are active, technical metadata (such as pseudonymous client IDs, IP addresses, browser types, screen resolutions, and referral sources) is processed through Google Analytics 4 and Microsoft Clarity to understand aggregate usage patterns and optimize website performance without collecting personally identifiable information.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          3. Cookies, Analytics, and External Embeds
        </h2>
        <p>
          We use cookies and diagnostic tags to maintain page responsiveness, measure user engagement, and support layout consistency:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Google Analytics 4:</strong> We use Google Analytics to analyze visitor interactions, popular routes, and aggregate engagement metrics. You can opt out using the Google Analytics Opt-out Browser Add-on.
          </li>
          <li>
            <strong>Microsoft Clarity:</strong> We utilize Microsoft Clarity to capture visual behavioral analytics (heatmaps and anonymous session replays) to diagnose usability issues. All personal data entry fields are masked to protect user privacy.
          </li>
          <li>
            <strong>Embedded Third-Party Media:</strong> Pages showcasing our flight videos or concept simulations (such as YouTube embeds) may trigger cookies set directly by those external providers. You can control cookie preferences in your local browser settings.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          4. How We Use and Share Information
        </h2>
        <p>
          Your information is handled strictly for operational purposes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>To verify interest bookings and process registrations for Vayu Galaxy updates.</li>
          <li>To respond to technical queries, strategic partnership inquiries, or careers requests.</li>
          <li>To optimize layout rendering across varying device dimensions.</li>
        </ul>
        <p>
          <strong>No Sale of Personal Data:</strong> Vayu Galaxy does not sell, rent, or lease your personal data. We do not share your information with external marketing agencies. Certain neutral third-party technical hosting or logistics providers may process data when their specific services are triggered to keep our infrastructure active.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          5. Data Storage, Security, and Retention
        </h2>
        <p>
          All collected data is stored in secure environments with restricted access control. While we implement standard protocols to safeguard database safety, no system is entirely impenetrable. Information is kept only as long as necessary to complete your inquiry or maintain your registered interest, unless longer retention is required by Indian regional laws.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          6. User Rights and Controls
        </h2>
        <p>
          You have the right to request a copy of the details we hold about you, request corrections to spelling/contact details, or ask to withdraw your registration at any time. To make a query regarding your records, please contact us through our official contact portal.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          7. External Links
        </h2>
        <p>
          Our platform may link to external websites, social channels, or developer portfolios. We do not exercise control over these third-party environments and advise you to review their local policy sheets.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          8. Policy Revisions
        </h2>
        <p>
          We reserve the right to revise this policy periodically to align with website layout revisions or operational needs. Any updates will be marked with a new date stamp at the top of this layout.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          9. Contact Us
        </h2>
        <p>
          For questions, data access requests, or compliance inquiries, please submit your request directly through our <a href="/contact" className="text-[#B7A27A] hover:underline">Contact Page</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
