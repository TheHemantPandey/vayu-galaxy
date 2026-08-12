import React from "react";
import Link from "next/link";
import { projectItems } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full bg-black">
      {projectItems.map((project) => {
        const isExternal = project.href === "#";
        const content = (
          <div
            className="relative h-[600px] overflow-hidden bg-cover bg-center transition-transform duration-500 ease-in-out lg:hover:scale-105 lg:hover:z-10 cursor-pointer"
            style={{ backgroundImage: `url('${project.image}')` }}
          >
            <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center py-[30px] font-space-grotesk text-[18px] font-semibold tracking-[1px] uppercase">
              {project.name}
            </div>
          </div>
        );

        return isExternal ? (
          <a key={project.name} href={project.href}>
            {content}
          </a>
        ) : (
          <Link key={project.name} href={project.href}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}
