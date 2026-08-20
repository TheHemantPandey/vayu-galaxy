import React from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={post.customUrl || `/blog/${post.slug}`} className="group no-underline block h-full">
      <article className="border border-[#111111]/10 rounded-lg p-5 bg-white flex flex-col justify-between hover:border-[#DFCFB7] transition-all duration-300 min-h-[460px] h-full shadow-[0_4px_15px_rgba(0,0,0,0.01)]">
        <div>
          {/* Card Image */}
          <div className="w-full h-[200px] overflow-hidden rounded-md mb-5 relative bg-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={post.image} 
              alt={post.imageAlt}
              className={`w-full h-full ${(post.slug.includes("aerospace") || post.slug.includes("township")) ? "object-cover" : "object-contain"} group-hover:scale-[1.03] transition-transform duration-300`}
            />
          </div>
          
          <span className="font-space-grotesk text-[11px] font-bold tracking-[2px] text-[#DFCFB7] uppercase block mb-2">
            {post.category}
          </span>
          <h3 className="font-space-grotesk text-[19px] font-semibold text-[#111111] group-hover:text-black transition-colors duration-200 uppercase tracking-[0.5px] leading-snug mb-3">
            {post.title}
          </h3>
          <p className="font-space-grotesk text-[14px] text-[#555555] leading-relaxed mb-6 text-justify">
            {post.excerpt}
          </p>
        </div>
        
        {/* Card Metadata Strip */}
        <div className="mt-auto pt-4 border-t border-black/5 flex flex-col gap-3">
          <div className="flex justify-between items-center text-[11px] font-semibold text-[#8E8E93] uppercase tracking-[1px]">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <span className="font-space-grotesk text-[12px] font-bold uppercase tracking-[1.5px] text-[#111111] group-hover:text-[#5AAC4E] transition-all flex items-center gap-1">
            READ ARTICLE <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
