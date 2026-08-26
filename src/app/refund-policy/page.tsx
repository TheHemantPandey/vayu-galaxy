import React from "react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo-config";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy | Vayu Galaxy",
  description: "Read the Vayu Galaxy Refund Policy. Learn about financial terms, future transactions, and refund rules for our concepts and projects.",
  alternates: {
    canonical: `${SITE_URL}/refund-policy`,
  },
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="Vayu Galaxy's terms regarding financial transactions, future monetization, and refund eligibility guidelines."
      updatedAt="August 26, 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          1. Current Financial Status
        </h2>
        <p>
          Vayu Galaxy is currently a purely conceptual, informational, and research-focused aerospace and smart city platform. There are no financial transactions, payments, subscriptions, or monetary exchanges of any kind processed through this website or project. All content, interactive showcases, and media are provided free of charge for exploration and educational purposes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          2. No Refunds by Default
        </h2>
        <p>
          Because there is no money involved in this website or project at present, no refund systems or processing mechanisms are active. If financial transactions are introduced at a later date for premium features, simulated flight registrations, or merchandise, the default policy is that <strong>all transactions are final and non-refundable</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          3. Highly Exceptional Cases
        </h2>
        <p>
          In the event that financial transactions are activated in the future, Vayu Galaxy may, at its sole discretion, evaluate refund requests on a case-by-case basis. Refunds will only be issued under highly exceptional circumstances or if we determine, in our sole judgment, that a valid and compelling reason exists.
        </p>
        <p>
          Examples of potentially valid reasons for exceptional refunds include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Technical system errors resulting in duplicate charges or incorrect billing amounts.
          </li>
          <li>
            Unauthorized fraudulent transactions verified by our payment processor.
          </li>
          <li>
            Severe service disruptions that prevent access to promised features.
          </li>
        </ul>
        <p>
          All decisions made by Vayu Galaxy regarding exceptional refunds are final and binding.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          4. Future Policy Amendments
        </h2>
        <p>
          If Vayu Galaxy transitions to a paid service model or implements any financial transaction features, this Refund Policy will be updated to reflect the specific payment systems, processing times, and merchant rules. We encourage visitors to review this page periodically for updates.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          5. Contact Details
        </h2>
        <p>
          If you have any questions or require clarification regarding our refund policies or future commercial plans, please submit your inquiry through the <a href="/contact" className="text-[#B7A27A] hover:underline">Contact Page</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
