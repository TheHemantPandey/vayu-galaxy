import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
  number?: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Reusable navigation link for the desktop header.
 * Uses a scale-x transition on hover to render smooth underline indicators.
 */
export default function NavLink({
  href,
  label,
  number,
  isActive = false,
  className = "",
  onClick,
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative py-2.5 group text-[0.65rem] font-mono tracking-[0.2em] transition-colors duration-300 select-none ${
        isActive ? "text-[#FAFAFA]" : "text-[#8E8E93] hover:text-[#FAFAFA]"
      } ${className}`}
    >
      <span className="flex items-center gap-1.5">
        {number && (
          <span className="text-[0.55rem] text-[#DFCFB7] opacity-65 font-sans font-medium">
            {number}
          </span>
        )}
        <span>{label}</span>
      </span>
      
      {/* Bottom sliding indicator line */}
      <span
        className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#DFCFB7] transition-transform duration-500 ease-cinematic origin-left ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </a>
  );
}
