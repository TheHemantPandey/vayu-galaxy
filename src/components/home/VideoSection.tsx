import React from "react";

export default function VideoSection() {
  return (
    <div className="relative h-[70vh] overflow-hidden flex items-center justify-center text-center text-white z-[1]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/assets/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
