"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/layout/FinalCTA";
import BlogHero from "@/components/blog/BlogHero";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";
import { Reveal } from "@/components/animation/Reveal";

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

export default function BlogContent() {
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
        <section className="bg-[#050505] text-[#FAFAFA] py-8 border-t border-b border-white/[0.08] px-4 sm:px-6 md:px-8 lg:px-[10%] select-none font-space-grotesk relative z-20">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: categories list */}
            <div className="lg:col-span-8 w-full flex flex-col space-y-4">
              <span className="block text-[0.6rem] sm:text-[0.65rem] font-mono tracking-[0.25em] text-[#DFCFB7] uppercase">
                01 // EXPLORE JOURNAL
              </span>
              
              <div className="w-full flex flex-wrap gap-x-6 gap-y-3 items-center">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`font-space-grotesk text-[10px] sm:text-[11px] font-medium uppercase tracking-[2px] py-1 transition-all cursor-pointer relative ${
                        isActive
                          ? "text-[#DFCFB7] font-semibold"
                          : "text-zinc-500 hover:text-[#FAFAFA]"
                      }`}
                    >
                      {cat}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#DFCFB7] rounded-none" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right side: search input */}
            <div className="lg:col-span-4 w-full flex lg:justify-end items-center mt-2 lg:mt-0">
              <div className="w-full max-w-[320px] relative">
                <input
                  type="text"
                  placeholder="SEARCH THE JOURNAL..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#111111]/85 border border-white/10 rounded-none py-3 pl-4 pr-10 font-space-grotesk text-[10px] sm:text-[11px] uppercase tracking-[2px] text-[#FAFAFA] placeholder-zinc-600 focus:outline-none focus:border-[#DFCFB7]/60 transition-all font-light"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 text-[12px] pointer-events-none">
                  🔍
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Featured Post Block - light gray backdrop */}
        {featuredPost ? (
          <section className="bg-[#FAF9F6] text-[#111111] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-[10%] border-b border-black/[0.06] font-space-grotesk overflow-hidden relative z-10">
            <div className="max-w-[1200px] mx-auto flex flex-col space-y-8 sm:space-y-12">
              
              {/* Section Header */}
              <div className="overflow-hidden">
                <Reveal style="fade" direction="up" duration={0.8} delay={0.1}>
                  <span className="block text-[0.6rem] sm:text-[0.65rem] font-mono tracking-[0.25em] text-[#8E8E93] uppercase">
                    02 // FEATURED STORY
                  </span>
                </Reveal>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16 items-start">
                
                {/* Large Image (Left, spans 7 columns on desktop) */}
                <div className="lg:col-span-7 w-full overflow-hidden border border-black/[0.06]">
                  <Reveal style="fade" duration={1.2} delay={0.2}>
                    <Link href={`/blog/${featuredPost.slug}`} className="block relative aspect-[16/10] w-full overflow-hidden bg-black/5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.imageAlt}
                        className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
                      />
                    </Link>
                  </Reveal>
                </div>

                {/* Content Block (Right, spans 5 columns on desktop) */}
                <div className="lg:col-span-5 flex flex-col text-left space-y-4 sm:space-y-6 pt-2 lg:pt-4">
                  {/* Category */}
                  <div>
                    <Reveal style="fade" direction="up" duration={0.8} delay={0.3}>
                      <span className="inline-block text-[0.6rem] sm:text-[0.65rem] font-mono tracking-[0.2em] text-[#9E824C] uppercase font-semibold">
                        {featuredPost.category}
                      </span>
                    </Reveal>
                  </div>

                  {/* Title */}
                  <div>
                    <Reveal style="fade" direction="up" duration={0.8} delay={0.4}>
                      <Link href={`/blog/${featuredPost.slug}`} className="no-underline text-inherit hover:opacity-90">
                        <h2 className="font-display font-medium tracking-tight uppercase leading-[1.15] text-[22px] sm:text-[28px] md:text-[34px] text-[#111111]">
                          {featuredPost.title}
                        </h2>
                      </Link>
                    </Reveal>
                  </div>

                  {/* Description */}
                  <div>
                    <Reveal style="fade" direction="up" duration={0.8} delay={0.5}>
                      <p className="text-sm sm:text-[0.95rem] text-[#555550] font-light leading-[1.7] text-left">
                        {featuredPost.excerpt}
                      </p>
                    </Reveal>
                  </div>

                  {/* Metadata */}
                  <div>
                    <Reveal style="fade" direction="up" duration={0.8} delay={0.6}>
                      <div className="flex gap-6 items-center text-[0.6rem] sm:text-[0.65rem] font-mono tracking-[0.15em] text-[#8E8E93] uppercase border-b border-black/[0.08] pb-4">
                        <span>{featuredPost.date}</span>
                        <span>&mdash;</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </Reveal>
                  </div>

                  {/* CTA Link */}
                  <div className="pt-2">
                    <Reveal style="fade" direction="up" duration={0.8} delay={0.7}>
                      <Link 
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#111111] hover:text-[#9E824C] transition-colors group/link"
                      >
                        READ ARTICLE 
                        <span className="transform group-hover/link:translate-x-1.5 transition-transform duration-200">→</span>
                      </Link>
                    </Reveal>
                  </div>

                </div>

              </div>

            </div>
          </section>
        ) : (
          <section className="bg-white text-[#111111] py-32 text-center px-6 border-b border-black/[0.06] font-space-grotesk relative z-10">
            <Reveal style="fade" direction="up" duration={0.8}>
              <h3 className="text-lg font-semibold uppercase tracking-[2px] text-[#111111]">No articles found matching criteria.</h3>
              <button 
                onClick={() => { setSelectedCategory("ALL"); setSearchQuery(""); }}
                className="mt-4 text-[11px] font-semibold uppercase tracking-[2px] text-zinc-500 hover:text-black border-b border-black/20 hover:border-black transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </Reveal>
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
