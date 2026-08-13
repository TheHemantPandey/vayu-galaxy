import React from "react";

export default function VideoSection() {
  return (
    <div className="relative w-full bg-black flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block"
      >
        <source src="/assets/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
