// Server Component: exports metadata, delegates rendering to ContactContent (client component)
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo-config";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Vayu Galaxy — Reach Our Team",
  description:
    "Get in touch with the Vayu Galaxy team for partnership opportunities, press inquiries, or general questions about our future-living projects and innovations.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Vayu Galaxy — Reach Our Team",
    description:
      "Get in touch with the Vayu Galaxy team for partnership opportunities, press inquiries, or general questions about our future-living projects and innovations.",
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: "/assets/aboutheader.jpg",
        width: 1200,
        height: 630,
        alt: "Vayu Galaxy contact page",
      },
    ],
  },
  twitter: {
    title: "Contact Vayu Galaxy — Reach Our Team",
    description:
      "Get in touch with the Vayu Galaxy team for partnership opportunities, press inquiries, or general questions.",
    images: ["/assets/aboutheader.jpg"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
