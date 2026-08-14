import type { Metadata } from "next";
import BookingFormContainer from "./BookingFormContainer";
import { SITE_URL } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Early Registration — Be the First to Know | Vayu Galaxy",
  description:
    "Register your interest in Vayu Galaxy. Be among the first to hear about our future-living concepts, project launches, and exclusive opportunities from our team.",
  alternates: {
    canonical: `${SITE_URL}/book-now`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Early Registration — Be the First to Know | Vayu Galaxy",
    description:
      "Register your interest in Vayu Galaxy. Be among the first to hear about our future-living concepts, project launches, and exclusive opportunities from our team.",
    url: `${SITE_URL}/book-now`,
    images: [
      {
        url: "/assets/about.jpeg",
        width: 1200,
        height: 630,
        alt: "Vayu Galaxy Early Registration",
      },
    ],
  },
  twitter: {
    title: "Early Registration — Be the First to Know | Vayu Galaxy",
    description:
      "Register your interest in Vayu Galaxy. Be among the first to hear about our future-living concepts and project launches.",
    images: ["/assets/about.jpeg"],
  },
};

// BreadcrumbList JSON-LD
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Early Registration",
      item: `${SITE_URL}/book-now`,
    },
  ],
};

export default function BookNowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BookingFormContainer />
    </>
  );
}
