import React from "react";

interface AboutSectionProps {
  theme?: "light" | "dark";
  title: string | React.ReactNode;
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageMaxWidthClass?: string; // e.g. "max-w-[400px]" or "max-w-[550px]"
}

export default function AboutSection({
  theme = "light",
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imageMaxWidthClass = "max-w-[400px]",
}: AboutSectionProps) {
  const isLight = theme === "light";

  return (
    <section
      className={`py-12 px-6 md:px-[10%] flex justify-center items-center ${
        isLight ? "bg-white text-[#111111]" : "bg-black text-[#FAFAFA]"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-[1200px] w-full">
        <div className="flex-1 text-center md:text-left">
          <h2
            className={`text-[24px] md:text-[26px] font-semibold mb-[10px] uppercase tracking-[1.5px] font-space-grotesk ${
              isLight ? "text-[#111111]" : "text-[#FAFAFA]"
            }`}
          >
            {title}
          </h2>
          <div className="space-y-4">
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={`text-[16px] text-justify font-space-grotesk leading-relaxed ${
                  isLight ? "text-[#333333]" : "text-[#E0E0E0]"
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
        {imageSrc && (
          <div className="flex-1 flex justify-center md:justify-end w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt || ""}
              className={`w-full rounded-[20px] object-cover ${imageMaxWidthClass}`}
            />
          </div>
        )}
      </div>
    </section>
  );
}
