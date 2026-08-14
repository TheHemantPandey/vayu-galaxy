/**
 * VAYU GALAXY — CENTRALIZED SEO CONFIGURATION
 * Used across all pages for consistent metadata, OG, Twitter, and structured data.
 * Production domain: https://vayugalaxy.com
 */

export const SITE_URL = "https://vayugalaxy.com";
export const SITE_NAME = "Vayu Galaxy";
export const SITE_LOCALE = "en_IN";

// Default OG image (homepage hero asset)
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/about.jpeg`;

// Per-page OG images referencing actual existing public/assets files
export const OG_IMAGES = {
  home: `${SITE_URL}/assets/about.jpeg`,
  about: `${SITE_URL}/assets/aboutheader.jpg`,
  devi: `${SITE_URL}/assets/drone1.png`,
  proto: `${SITE_URL}/assets/protoimg1.png`,
  spdt1: `${SITE_URL}/assets/spdt1.png`,
  blog: `${SITE_URL}/assets/about.jpeg`,
  contact: `${SITE_URL}/assets/aboutheader.jpg`,
  bookNow: `${SITE_URL}/assets/about.jpeg`,
};

// Shared twitter card config
export const TWITTER_CONFIG = {
  card: "summary_large_image" as const,
  site: "@vayugalaxy",
  creator: "@vayugalaxy",
};

// Organization JSON-LD — only include properties supported by actual project data
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vayu Galaxy",
  url: SITE_URL,
  email: "info@vayugalaxy.com",
  founder: {
    "@type": "Person",
    name: "Raushan Kumar",
  },
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi NCR",
      addressCountry: "IN",
    },
  },
};

// WebSite JSON-LD
export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vayu Galaxy",
  url: SITE_URL,
};
