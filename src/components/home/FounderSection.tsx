import React from "react";

interface SocialLink {
  href: string;
  iconClass: string;
}

interface FounderSectionProps {
  name?: string;
  title?: string;
  descriptionParagraphs: string[];
  socialLinks?: SocialLink[];
}

export default function FounderSection({
  name = "Mr. Raushan Kumar",
  title = "Meet Our Founder",
  descriptionParagraphs,
  socialLinks = [
    { href: "#", iconClass: "fab fa-facebook" },
    { href: "#", iconClass: "fab fa-twitter" },
    { href: "#", iconClass: "fab fa-instagram" },
    { href: "#", iconClass: "fab fa-linkedin" },
    { href: "#", iconClass: "fab fa-youtube" },
  ],
}: FounderSectionProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-5 md:p-[50px] bg-black text-[#111111]">
      <div className="flex-1 flex items-center justify-center overflow-hidden w-full md:w-auto mb-5 md:mb-0 md:pr-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/raushan.png"
          alt="Founder Image"
          className="w-full h-auto object-cover max-w-[400px] md:max-w-none rounded-[10px]"
        />
      </div>
      <div className="flex-1 p-[20px] bg-white rounded-lg w-full md:w-auto text-left font-space-grotesk text-[#333333]">
        <h2 className="text-[24px] md:text-[28px] font-semibold mb-2 text-[#111111] uppercase tracking-[1px]">
          {title}
        </h2>
        <h4 className="text-[16px] md:text-[18px] font-semibold mb-3 text-[#111111]">
          {name}
        </h4>
        <div className="space-y-4 mb-4">
          {descriptionParagraphs.map((p, idx) => (
            <p key={idx} className="text-[15px] leading-relaxed text-[#333333] text-justify">
              {p}
            </p>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-[20px] text-black hover:text-[#5AAC4E] transition-all hover:scale-110"
            >
              <i className={social.iconClass}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
