import React from "react";

interface FeatureSectionProps {
  theme?: "light" | "dark";
  title: string | React.ReactNode;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  buttonLink?: string;
  buttonText?: string;
}

export default function FeatureSection({
  theme = "light",
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  buttonLink,
  buttonText = "Read More",
}: FeatureSectionProps) {
  const isLight = theme === "light";

  return (
    <section
      className={`py-12 px-6 md:px-[10%] flex justify-center items-center ${
        isLight ? "bg-white text-[#111111]" : "bg-black text-[#FAFAFA]"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-[1200px] w-full">
        <div className="flex-1 flex justify-center md:justify-start w-full order-2 md:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full max-w-[400px] rounded-[10px] object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left order-1 md:order-2">
          <h2
            className={`text-[24px] md:text-[26px] font-semibold mb-[10px] uppercase tracking-[3px] font-space-grotesk ${
              isLight ? "text-[#111111]" : "text-[#FAFAFA]"
            }`}
          >
            {title}
          </h2>
          <div className="space-y-4 mb-4">
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
          {buttonLink && (
            <a
              href={buttonLink}
              className="inline-block mt-2.5 px-4 py-2 bg-black text-white no-underline rounded-[50px] transition-all hover:bg-[#120c2e] font-space-grotesk text-[14px] font-medium tracking-[0.05em]"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
