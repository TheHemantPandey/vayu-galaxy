// Server Component: exports metadata, delegates rendering to BlogContent (client component)
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo-config";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Vayu Galaxy Journal — Insights on Future Living, AI & Technology",
  description:
    "The Vayu Galaxy Journal covers future living, smart cities, autonomous drones, robotics, AI, and the technologies reshaping how humanity will live and work.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Vayu Galaxy Journal — Insights on Future Living, AI & Technology",
    description:
      "The Vayu Galaxy Journal covers future living, smart cities, autonomous drones, robotics, AI, and the technologies reshaping how humanity will live and work.",
    url: `${SITE_URL}/blog`,
    images: [
      {
        url: "/assets/about.jpeg",
        width: 1200,
        height: 630,
        alt: "Vayu Galaxy Journal — Future Living & Technology",
      },
    ],
  },
  twitter: {
    title: "Vayu Galaxy Journal — Insights on Future Living, AI & Technology",
    description:
      "The Vayu Galaxy Journal covers future living, smart cities, autonomous drones, robotics, and AI.",
    images: ["/assets/about.jpeg"],
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
