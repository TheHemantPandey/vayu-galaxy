"use client";

import React, { useState } from "react";
import Link from "next/link";
import { headerLinks, mobileLinks } from "@/data/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black z-[1000] px-4 md:px-[35px] py-[10px] flex justify-between items-center text-white h-[60px] border-b border-white/5">
        <div className="text-[26px] font-bold uppercase font-space-grotesk tracking-[1px] select-none">
          <Link href="/" className="text-white no-underline">
            Vayu Galaxy
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <ul className="flex list-none gap-2 m-0 items-center">
            {headerLinks.map((link) => (
              <li key={link.label} className="inline">
                <Link
                  href={link.href}
                  className="text-white no-underline text-[15px] pr-[20px] uppercase tracking-[2px] font-normal transition-all hover:font-bold hover:text-[#DFCFB7]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/book-now"
            className="border border-[#DFCFB7]/30 hover:border-[#DFCFB7] text-[#DFCFB7] hover:text-[#050505] hover:bg-[#DFCFB7] px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] select-none"
          >
            BOOK NOW{" "}
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </Link>
        </div>
        <div
          className="md:hidden block text-[24px] cursor-pointer fixed top-[15px] right-[20px] z-[1100] text-white select-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✕" : "☰"}
        </div>
      </nav>

      <div
        className={`fixed top-0 w-screen h-screen bg-black/95 flex flex-col items-center justify-center transition-[right] duration-300 ease-in-out z-[1000] md:hidden ${
          isMenuOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        {mobileLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={toggleMenu}
            className="text-white no-underline text-[20px] my-[15px] uppercase tracking-[2px] hover:text-[#DFCFB7]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/book-now"
          onClick={toggleMenu}
          className="border border-[#DFCFB7]/30 hover:border-[#DFCFB7] text-[#DFCFB7] hover:text-[#050505] hover:bg-[#DFCFB7] px-8 py-3 rounded-full text-sm font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 mt-8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7] select-none"
        >
          BOOK NOW{" "}
          <span>
            →
          </span>
        </Link>
      </div>
    </>
  );
}
