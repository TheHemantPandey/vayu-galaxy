import type { Metadata } from "next";
import BookingFormContainer from "./BookingFormContainer";
import { SITE_URL } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Early Registration | Vayu Galaxy",
  description:
    "Register your interest in Vayu Galaxy and stay connected with future-living concepts, advanced technology, project developments, and upcoming opportunities.",

  alternates: {
    canonical: `${SITE_URL}/book-now`,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Early Registration | Vayu Galaxy",
    description:
      "Register your interest in Vayu Galaxy and stay connected with future-living concepts, advanced technology, project developments, and upcoming opportunities.",
    url: `${SITE_URL}/book-now`,
    siteName: "Vayu Galaxy",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/assets/aboutimg.jpeg`,
        width: 1200,
        height: 630,
        alt: "Vayu Galaxy — Early Registration",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Early Registration | Vayu Galaxy",
    description:
      "Register your interest in Vayu Galaxy and stay connected with future-living concepts, advanced technology, and project developments.",
    images: [`${SITE_URL}/assets/aboutimg.jpeg`],
  },
};

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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <BookingFormContainer />
    </>
  );
}