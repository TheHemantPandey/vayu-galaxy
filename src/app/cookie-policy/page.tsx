import React from "react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo-config";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Vayu Galaxy",
  description: "Read the Cookie Policy of Vayu Galaxy to understand how we use cookies, essential identifiers, and browser preference configurations.",
  alternates: {
    canonical: `${SITE_URL}/cookie-policy`,
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Transparency regarding our data storage choices is part of our design philosophy. Learn how cookies are handled on our website."
      updatedAt="August 20, 2026"
    >
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          1. What Cookies Are
        </h2>
        <p>
          Cookies are small text identifiers placed in your device&apos;s local storage when you load web pages. They help platforms remember layout styles, active sessions, and browser dimensions to present a stable experience.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          2. How We Use Cookies
        </h2>
        <p>
          Vayu Galaxy uses cookies and local identifiers for essential platform stability, performance diagnostics, and analytics:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Essential Layout Sessions:</strong> To preserve dark grid themes, animation sequences, responsive menu toggles, and coordinate registration details.
          </li>
          <li>
            <strong>Analytics & Usage Measurement (Google Analytics):</strong> When enabled via configuration, GA4 cookies (such as <code>_ga</code> and <code>_ga_*</code>) help us count visits, measure traffic sources, and evaluate page engagement to improve site architecture.
          </li>
          <li>
            <strong>Experience Diagnostics (Microsoft Clarity):</strong> When active, Clarity cookies (such as <code>_clck</code>, <code>_clsk</code>, <code>CLID</code>, and <code>ANONCHK</code>) record anonymous navigational patterns, scroll depths, and heatmap metrics with strict input masking to resolve usability challenges.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          3. Third-Party Cookie Embeds
        </h2>
        <p>
          To showcase our aerial technology concepts, we embed third-party video players (such as YouTube) and graphics tools. 
        </p>
        <p>
          When you interact with these embeds, the external platforms may set tracking cookies on your device. These cookies are governed entirely by the third-party providers&apos; respective policy sheets.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          4. Managing Cookie Preferences
        </h2>
        <p>
          You can block or delete cookies by adjusting your browser parameters:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Google Chrome (Settings &gt; Privacy and security &gt; Third-party cookies)</li>
          <li>Apple Safari (Settings &gt; Privacy &gt; Block all cookies)</li>
          <li>Mozilla Firefox (Settings &gt; Privacy &gt; Enhanced Tracking Protection)</li>
          <li>Microsoft Edge (Settings &gt; Cookies and site permissions)</li>
        </ul>
        <p>
          Please note that blocking essential cookies may affect menu scaling, scroll animations, or registration form inputs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          5. Revisions
        </h2>
        <p>
          This policy will be revised occasionally to reflect updates to our embedded systems or design structures. The date stamp at the top of this layout will change accordingly.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F4F2ED] border-b border-white/5 pb-2">
          6. Inquiries
        </h2>
        <p>
          For questions about our cookie configurations, please reach out via our <a href="/contact" className="text-[#B7A27A] hover:underline">Contact Page</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
