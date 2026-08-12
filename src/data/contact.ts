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

export const contactPlaceholderInfo: ContactInfo = {
  phone: "+91 98765 43210",
  email: "info@vayugalaxy.com",
  location: "Delhi NCR, India",
  hours: "Monday – Saturday, 10:00 AM – 6:00 PM",
};

export const enquiryTypes = [
  "General Enquiry",
  "Project Enquiry",
  "Partnership",
  "Investment",
  "Media / Press",
  "Other",
];
