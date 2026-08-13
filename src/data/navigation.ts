export interface NavLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links?: NavLink[];
  text?: string;
  details?: { label: string; text: string }[];
}

export const headerLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Project", href: "/spdt1" },
  { label: "Blog", href: "/blog" },
];

export const mobileLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Project", href: "/spdt1" },
  { label: "Blog", href: "/blog" },
];

// Unused legacy footer configuration kept for future references
export const footerSections: FooterSection[] = [
  {
    title: "ABOUT",
    links: [
      { label: "What is Vayu Galaxy", href: "/about" },
      { label: "Vayu Galaxy Founder", href: "/#founder" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "PROJECTS",
    links: [
      { label: "SPD t1", href: "/spdt1" },
      { label: "Proto Robot", href: "/proto" },
      { label: "Devi Drone", href: "/devi" },
      { label: "Lord Vishnu Statue", href: "/#lord-vishnu" },
    ],
  },
  {
    title: "NEWS & SOCIAL",
    links: [
      { label: "Journal / Blog", href: "/blog" },
      { label: "Instagram", href: "https://www.instagram.com/" },
      { label: "Linkedin", href: "https://www.linkedin.com/" },
      { label: "Twitter", href: "https://x.com/" },
      { label: "Facebook", href: "https://www.facebook.com/" },
    ],
  },
  {
    title: "CAREERS",
    links: [
      { label: "Working at Vayu Galaxy", href: "/contact" },
    ],
  },
  {
    title: "CONTACT US",
    details: [
      { label: "Email", text: "info@vayugalaxy.com" },
      { label: "Address", text: "Delhi NCR, India" },
    ],
  },
];

// TODO: Replace platform homepage with official Vayu Galaxy profile when verified.
export const socialFollowLinks = [
  { href: "https://www.facebook.com/", iconClass: "fab fa-facebook-f" },
  { href: "https://x.com/", iconClass: "fab fa-twitter" },
  { href: "https://www.instagram.com/", iconClass: "fab fa-instagram" },
  { href: "https://www.linkedin.com/", iconClass: "fab fa-linkedin-in" },
  { href: "https://www.youtube.com/", iconClass: "fab fa-youtube" },
];
