import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { SITE_URL, SITE_NAME, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from "@/lib/seo-config";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";
import PageViewTracker from "@/components/analytics/PageViewTracker";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vayu Galaxy — Future Living, Technology & Innovation",
    template: "%s | Vayu Galaxy",
  },
  description:
    "Vayu Galaxy is an ambitious future-living and technology venture from India, pioneering high-altitude architectural concepts, autonomous drones, intelligent robots, and atmospheric engineering projects.",
  keywords: [
    "Vayu Galaxy",
    "future living",
    "future city",
    "smart living",
    "Devi Drone",
    "Proto Robot",
    "SPD T1",
    "high-altitude architecture",
    "autonomous drones India",
    "future technology India",
    "innovation Delhi NCR",
  ],
  authors: [{ name: "Raushan Kumar" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Vayu Galaxy — Future Living, Technology & Innovation",
    description:
      "Vayu Galaxy is an ambitious future-living and technology venture from India, pioneering high-altitude architectural concepts, autonomous drones, intelligent robots, and atmospheric engineering projects.",
    images: [
      {
        url: "/assets/about.jpeg",
        width: 1200,
        height: 630,
        alt: "Vayu Galaxy — Future Living, Technology & Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vayugalaxy",
    creator: "@vayugalaxy",
    title: "Vayu Galaxy — Future Living, Technology & Innovation",
    description:
      "Vayu Galaxy is an ambitious future-living and technology venture from India, pioneering high-altitude architectural concepts, autonomous drones, intelligent robots, and atmospheric engineering projects.",
    images: ["/assets/about.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <GoogleAnalytics />
        <MicrosoftClarity />
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
