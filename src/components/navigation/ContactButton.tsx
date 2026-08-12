import React from "react";

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
}

/**
 * Reusable contact action item.
 * Designed with minimal typography, thin borders, and hardware-accelerated fill transitions.
 */
export default function ContactButton({
  className = "",
  onClick,
}: ContactButtonProps) {
  return (
    <a
      href="#contact"
      onClick={onClick}
      className={`relative px-5 py-2 border border-white/10 hover:border-[#DFCFB7] text-[0.65rem] font-mono tracking-[0.2em] text-[#FAFAFA] rounded overflow-hidden group transition-colors duration-500 ease-cinematic select-none flex items-center justify-center ${className}`}
    >
      {/* Hardware-accelerated background slide sweep */}
      <span className="absolute inset-0 bg-[#DFCFB7]/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-cinematic origin-left -z-10" />
      CONTACT
    </a>
  );
}
