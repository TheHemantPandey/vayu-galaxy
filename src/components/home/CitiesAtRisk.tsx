import React from "react";
import FeatureSection from "./FeatureSection";
import { cityItems } from "@/data/cities";

export default function CitiesAtRisk() {
  return (
    <>
      <section className="h-[20vh] bg-black flex flex-col items-center justify-center text-[#FAFAFA] text-center border-y border-white/5">
        <h1 className="font-space-grotesk text-[24px] md:text-[28px] font-semibold uppercase tracking-[3px] m-0">
          Cities at Risk
        </h1>
      </section>
      {cityItems.map((city) => (
        <FeatureSection
          key={city.name}
          title={city.name}
          paragraphs={[city.description]}
          imageSrc={city.image}
          imageAlt={city.name}
        />
      ))}
    </>
  );
}
