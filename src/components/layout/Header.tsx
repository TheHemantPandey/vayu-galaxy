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
        <ul className="hidden md:flex list-none gap-5 ml-auto px-4 md:px-[50px] m-0 items-center">
          {headerLinks.map((link) => (
            <li key={link.label} className="inline">
              <Link
                href={link.href}
                className="text-white no-underline text-[15px] pr-[30px] uppercase tracking-[2px] font-normal transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
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
            className="text-white no-underline text-[20px] my-[15px] uppercase tracking-[2px] hover:text-white/80"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
