import React from "react";
import Link from "next/link";
import { footerSections, socialFollowLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <>
      <section className="bg-[rgb(29,29,29)] w-full">
        <footer className="max-w-[1600px] mx-auto px-4 md:px-10 py-10 font-space-grotesk text-white">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-[rgb(88,88,88)] pb-5">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-[20px] font-medium mb-[10px] text-white uppercase tracking-[1px]">
                  {section.title}
                </h3>
                {section.links && (
                  <ul className="list-none p-0 m-0 leading-[20px] tracking-[1.5px] space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-white no-underline text-[16px] transition-all hover:text-white/80"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {section.details && (
                  <ul className="list-none p-0 m-0 leading-[20px] tracking-[1.5px] space-y-4">
                    {section.details.map((detail) => (
                      <li key={detail.label} className="text-[16px]">
                        <span className="font-bold uppercase tracking-[1px]">
                          {detail.label}:
                        </span>
                        <br />
                        <span className="text-white/90">{detail.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-5 gap-4">
            <h3 className="text-[20px] font-medium text-white uppercase tracking-[1px]">
              FOLLOW VAYU GALAXY
            </h3>
            <div className="flex gap-4">
              {socialFollowLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white text-[20px] no-underline transition-all hover:text-[#120c2e] hover:scale-110"
                >
                  <i className={social.iconClass}></i>
                </a>
              ))}
            </div>
          </div>
        </footer>
      </section>
      <section className="bg-black py-4 text-center border-t border-white/5">
        <p className="text-white text-[12px] uppercase tracking-[3px] m-0">
          All Right Reserved <b className="text-white font-bold">Vayu Galaxy</b>
        </p>
      </section>
    </>
  );
}
