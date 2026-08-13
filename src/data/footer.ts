export interface SocialLink {
  name: string;
  href: string;
  iconClass: string;
}

/**
 * Structured social media links for Vayu Galaxy.
 * Per project rules, we only render them if the URL is valid/verified (starts with http).
 * Currently empty to prevent rendering, but ready to be populated.
 */
export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://instagram.com", iconClass: "fab fa-instagram" },
  { name: "LinkedIn", href: "https://linkedin.com", iconClass: "fab fa-linkedin-in" },
  { name: "YouTube", href: "https://youtube.com", iconClass: "fab fa-youtube" },
];

export interface HUDDetail {
  label: string;
  text: string;
}

export const footerHUDDetails: HUDDetail[] = [
  { label: "SYSTEM", text: "VAYU GALAXY" },
  { label: "JOURNAL", text: "ACTIVE" },
  { label: "CONTACT", text: "OPEN" },
];
