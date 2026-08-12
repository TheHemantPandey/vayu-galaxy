import React from "react";

export default function MapView() {
  return (
    <>
      <section className="w-full flex flex-col items-center bg-white">
        <div className="w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/location.png"
            alt="Location Map"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="w-full flex flex-col items-center bg-white">
        <div className="w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/map.png"
            alt="Map View"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </>
  );
}
