"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/layout/FinalCTA";
import BlogHero from "@/components/blog/BlogHero";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";

const categories = [
  "ALL",
  "FUTURE OF LIVING",
  "AI",
  "ROBOTICS",
  "DRONES",
  "SMART CITIES",
  "MOBILITY",
  "IoT",
  "SUSTAINABILITY",
  "GADGETS",
  "HUMAN + TECHNOLOGY"
];

const matchesCategory = (postCategory: string, filter: string) => {
  if (filter === "ALL") return true;
  if (filter === "AI" && postCategory === "ARTIFICIAL INTELLIGENCE") return true;
  if (filter === "MOBILITY" && postCategory === "FUTURE MOBILITY") return true;
  if (filter === "GADGETS" && postCategory === "FUTURE GADGETS") return true;
  return postCategory.toUpperCase() === filter.toUpperCase();
};

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = matchesCategory(post.category, selectedCategory);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="blog-page-wrapper bg-[#050505] text-[#FAFAFA] min-h-screen flex flex-col justify-between">
      {/* FontAwesome style icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <Header />

      <main className="flex-grow pt-[60px]">
        <BlogHero />

        {/* Categories & Search Panel */}
        <section className="bg-white text-[#111111] py-8 border-b border-black/5 px-6 md:px-[10%] select-none">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Scrollable Categories List */}
            <div className="w-full lg:w-auto overflow-x-auto scrollbar-none flex gap-2 pb-2 lg:pb-0 items-center -mx-6 px-6 lg:mx-0 lg:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-space-grotesk text-[11px] font-semibold uppercase tracking-[2px] px-4 py-2 rounded-[50px] transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-black text-white"
                      : "bg-[#FAFAFA] text-[#555555] hover:bg-black/5 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Simple Search Input Box */}
            <div className="w-full lg:w-[320px] relative">
              <input
                type="text"
                placeholder="SEARCH THE JOURNAL..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-black/10 rounded-[50px] py-3 pl-5 pr-12 font-space-grotesk text-[12px] uppercase tracking-[1.5px] text-[#333333] placeholder-black/35 focus:outline-none focus:border-black/30 transition-all shadow-sm"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-black/40 text-[14px]">
                🔍
              </span>
            </div>

          </div>
        </section>

        {/* Featured Post Block - light gray backdrop */}
        {featuredPost ? (
          <section className="bg-[#FAF9F6] text-[#111111] py-20 px-6 md:px-[10%] border-b border-black/5">
            <div className="max-w-[1200px] mx-auto">
              <span className="font-space-grotesk text-[12px] font-semibold uppercase tracking-[3px] text-[#8E8E93] mb-6 block">
                01 / FEATURED JOURNAL ENTRY
              </span>
              
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center no-underline text-inherit"
              >
                {/* Feature Image Cover */}
                <div className="lg:col-span-7 w-full h-[320px] md:h-[450px] overflow-hidden rounded-lg relative bg-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-black/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Feature Content */}
                <div className="lg:col-span-5 flex flex-col justify-center text-left">
                  <span className="font-space-grotesk text-[12px] font-bold tracking-[2.5px] text-[#DFCFB7] uppercase block mb-3">
                    {featuredPost.category}
                  </span>
                  <h2 className="font-space-grotesk text-[26px] md:text-[36px] font-semibold text-[#111111] group-hover:text-black tracking-[1px] leading-tight mb-5 uppercase">
                    {featuredPost.title}
                  </h2>
                  <p className="font-space-grotesk text-[15px] md:text-[16px] text-[#333333] leading-relaxed mb-6 text-justify">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex gap-8 items-center text-[11px] font-semibold text-[#8E8E93] uppercase tracking-[1.5px] border-b border-black/5 pb-4 mb-6">
                    <span>{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <span className="font-space-grotesk text-[12px] font-bold uppercase tracking-[2px] text-[#111111] group-hover:text-[#5AAC4E] transition-all flex items-center gap-1.5 w-fit">
                    READ ARTICLE <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                  </span>
                </div>
              </Link>
            </div>
          </section>
        ) : (
          <section className="bg-white text-[#111111] py-32 text-center px-6">
            <h3 className="font-space-grotesk text-[20px] font-semibold uppercase tracking-[2px]">No articles found matching criteria.</h3>
            <button 
              onClick={() => { setSelectedCategory("ALL"); setSearchQuery(""); }}
              className="mt-4 text-[13px] font-semibold uppercase tracking-[1.5px] text-black/50 hover:text-black border-b border-black/20 hover:border-black transition-all"
            >
              Reset Filters
            </button>
          </section>
        )}

        {/* Journal Remaining Articles Grid - light background */}
        {gridPosts.length > 0 && (
          <section className="bg-white text-[#111111] py-20 px-6 md:px-[10%]">
            <div className="max-w-[1200px] mx-auto">
              <span className="font-space-grotesk text-[12px] font-semibold uppercase tracking-[3px] text-[#8E8E93] mb-12 block">
                02 / ARCHIVE LIST
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {gridPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      <FinalCTA />
      <Footer />
    </div>
  );
}
