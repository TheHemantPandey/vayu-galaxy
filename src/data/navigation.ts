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
  { label: "FAQ", href: "#" },
];

export const footerSections: FooterSection[] = [
  {
    title: "ABOUT",
    links: [
      { label: "What is Vayu Galaxy", href: "#" },
      { label: "Vayu Galaxy Founder", href: "#" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "PROJECTS",
    links: [
      { label: "SPD t1", href: "/spdt1" },
      { label: "Proto Robot", href: "/proto" },
      { label: "Devi Drone", href: "/devi" },
      { label: "Lord Vishnu Statue", href: "#" },
    ],
  },
  {
    title: "NEWS & SOCIAL",
    links: [
      { label: "Journal / Blog", href: "/blog" },
      { label: "Instagram", href: "#" },
      { label: "Linkedin", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
  {
    title: "CAREERS",
    links: [
      { label: "Working at Vayu Galaxy", href: "#" },
    ],
  },
  {
    title: "CONTACT US",
    details: [
      { label: "Email", text: "contact@vayugalaxy.com" },
      { label: "Address", text: "Metroplex East Tower, Office No. 147, Laxmi Nagar, New Delhi 110092" },
    ],
  },
];

export const socialFollowLinks = [
  { href: "#", iconClass: "fab fa-facebook-f" },
  { href: "#", iconClass: "fab fa-twitter" },
  { href: "#", iconClass: "fab fa-instagram" },
  { href: "#", iconClass: "fab fa-linkedin-in" },
  { href: "#", iconClass: "fab fa-youtube" },
];
