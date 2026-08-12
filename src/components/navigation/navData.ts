export interface NavItem {
  number: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { number: "01", label: "VISION", href: "#vision" },
  { number: "02", label: "THE CITY", href: "#city" },
  { number: "03", label: "MASTERPLAN", href: "#masterplan" },
  { number: "04", label: "ECOSYSTEM", href: "#ecosystem" },
  { number: "05", label: "TECHNOLOGY", href: "#technology" },
  { number: "06", label: "LOCATION", href: "#location" },
];
export const contactHref = "#contact";
