import React from "react";

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center text-center text-white z-[1]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-[2] px-4">
        <h1 className="font-space-grotesk text-[32px] md:text-[55px] font-semibold uppercase tracking-[2px] [text-shadow:2px_2px_10px_rgba(0,0,0,0.8)]">
          World&apos;s First Township in the Air
        </h1>
        <p className="font-space-grotesk text-[1rem] md:text-[1.3rem] uppercase tracking-[1px] mt-2">
          Experience the future of living above the skies
        </p>
      </div>
    </div>
  );
}
