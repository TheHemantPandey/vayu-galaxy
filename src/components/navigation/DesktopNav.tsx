import React from "react";
import { navItems } from "./navData";
import NavLink from "./NavLink";
import ContactButton from "./ContactButton";

interface DesktopNavProps {
  activeSection?: string;
}

/**
 * Desktop layout links block.
 * Uses a grid spacer layout and responsive flex tags to hide on smaller screens.
 */
export default function DesktopNav({ activeSection = "" }: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Navigation">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          isActive={activeSection === item.href.replace("#", "")}
        />
      ))}
      <ContactButton className="ml-2" />
    </nav>
  );
}
