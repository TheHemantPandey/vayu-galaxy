import React from "react";
import Link from "next/link";
import { projectItems } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full bg-black">
      {projectItems.map((project) => {
        const isExternal = project.href === "#";
        const content = (
          <div
            className="relative h-[70vh] min-h-[420px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full overflow-hidden bg-cover bg-center transition-transform duration-500 ease-in-out lg:hover:scale-105 lg:hover:z-10 cursor-pointer"
            style={{ backgroundImage: `url('${project.image}')` }}
          >
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 pb-6 px-4 text-white text-center font-space-grotesk text-[16px] sm:text-[17px] lg:text-[18px] font-semibold tracking-[1px] uppercase break-words">
              {project.name}
            </div>
          </div>
        );

        return isExternal ? (
          <a key={project.name} href={project.href} className="block w-full">
            {content}
          </a>
        ) : (
          <Link key={project.name} href={project.href} className="block w-full">
            {content}
          </Link>
        );
      })}
    </div>
  );
}