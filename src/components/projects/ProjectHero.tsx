import React from "react";

interface ProjectHeroProps {
  videoSrc: string;
}

export default function ProjectHero({ videoSrc }: ProjectHeroProps) {
  return (
    <section className="w-full">
      <div className="relative h-[40vh] overflow-hidden flex items-center justify-center z-[1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
