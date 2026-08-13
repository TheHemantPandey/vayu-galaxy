/**
 * PLACEHOLDER BUSINESS DETAILS - VAYU GALAXY
 * These are dummy contact details and business hours.
 * Replace these values with actual company information when launching.
 */
export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  hours: string;
}

export interface ContactProject {
  name: string;
  href: string;
  image: string;
  description: string;
}

export const contactPlaceholderInfo: ContactInfo = {
  phone: "+91 97163 82612",
  email: "info@vayugalaxy.com",
  location: "Delhi NCR, India",
  hours: "Monday – Saturday, 10:00 AM – 6:00 PM",
};

export const contactProjects: ContactProject[] = [
  {
    name: "Vayu Galaxy",
    href: "/",
    image: "/assets/about.jpeg",
    description: "Our primary township vision that challenges conventional boundaries — elevating architecture, mobility, and community infrastructure into a clean, integrated, next-generation urban ecosystem above the skies.",
  },
  {
    name: "Devi Drone",
    href: "/devi",
    image: "/assets/drone.png",
    description: "A high-performance autonomous unmanned aerial vehicle (UAV) developed in India. Engineered to cater to defense, crop monitoring, medical emergencies, border surveillance, and last-mile shipping delivery operations.",
  },
  {
    name: "Proto Robot",
    href: "/proto",
    image: "/assets/protoimg1.png",
    description: "An advanced, self-balancing high-speed rolling robot built for emergency response, last-mile logistics, and rescue coordination. Capable of navigating challenging terrains at speeds of up to 120 km/h.",
  },
  {
    name: "SPD t1",
    href: "/spdt1",
    image: "/assets/spdt1.png",
    description: "A first-of-its-kind atmospheric defense technology designed to deploy a high-altitude solar radiation shielding system, regulating solar impact and working toward global climate resilience.",
  },
];

export const enquiryTypes = [
  "General Enquiry",
  "Project Enquiry",
  "Partnership",
  "Investment / Business",
  "Media / Press",
  "Careers / Opportunities",
  "Other",
];

export const connectReasons = [
  {
    title: "GENERAL ENQUIRY",
    description: "Questions about Vayu Galaxy, its broad conceptual framework, and its future-focused roadmap.",
  },
  {
    title: "PROJECT ENQUIRY",
    description: "Specific inquiries regarding active technology programs including Devi Drone, Proto, or SPD t1.",
  },
  {
    title: "PARTNERSHIP",
    description: "Collaboration proposals from organizations, institutions, and industrial engineering bodies.",
  },
  {
    title: "INVESTMENT / BUSINESS",
    description: "Strategic investment queries, commercial township development discussions, and corporate inquiries.",
  },
  {
    title: "MEDIA / PRESS",
    description: "Communications, media access, official statements, and informational press kit requests.",
  },
  {
    title: "CAREERS / OPPORTUNITIES",
    description: "Expressions of interest from researchers, aerospace engineers, and visionaries eager to join.",
  },
];
