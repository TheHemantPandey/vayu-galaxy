import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/layout/FinalCTA";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found | Vayu Galaxy Journal",
    };
  }
  return {
    title: `${post.title} | Vayu Galaxy Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-[#050505] text-[#FAFAFA] min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow pt-[120px] pb-24 text-center">
          <h1 className="font-space-grotesk text-[32px] font-semibold uppercase tracking-[2px] mb-4">
            Article Not Found
          </h1>
          <Link
            href="/blog"
            className="font-space-grotesk text-[13px] font-semibold uppercase tracking-[1.5px] text-[#DFCFB7] hover:text-[#FAFAFA] transition-all"
          >
            Return to Journal
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Get 3 related articles (excluding the current one)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="blog-detail-wrapper bg-[#050505] text-[#FAFAFA] min-h-screen flex flex-col justify-between">
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

      <main className="flex-grow pt-[90px] pb-24">
        <article className="max-w-[900px] mx-auto px-6 font-space-grotesk">
          
          {/* Article Header */}
          <header className="mb-12 text-left pt-8">
            <span className="text-[12px] font-bold tracking-[2.5px] text-[#DFCFB7] uppercase block mb-3">
              {post.category}
            </span>
            <h1 className="text-[28px] md:text-[45px] font-semibold uppercase tracking-[1px] leading-tight text-white mb-6">
              {post.title}
            </h1>
            <div className="flex gap-8 items-center text-[11px] font-semibold text-white/40 uppercase tracking-[1.5px]">
              <span>DATE: {post.date}</span>
              <span>READ TIME: {post.readTime}</span>
            </div>
          </header>

          {/* Article Hero Image with figcaption */}
          <figure className="w-full relative h-[30vh] md:h-[50vh] overflow-hidden rounded-lg mb-12 border border-white/5 bg-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
            <figcaption className="absolute bottom-4 right-4 bg-black/75 px-3 py-1 text-[9px] uppercase tracking-[1px] text-white/50 rounded select-none">
              Source: {post.imageCredit} / {post.imageSource}
            </figcaption>
          </figure>

          {/* Article Content Layout */}
          <div className="max-w-[760px] mx-auto">
            {/* Large Introduction paragraph */}
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[#FAFAFA] font-medium mb-8 text-justify">
              {post.introduction}
            </p>

            {/* Content Sections */}
            <div className="space-y-10">
              {post.sections.map((section, index) => (
                <section key={index} className="space-y-4">
                  <h2 className="text-[20px] md:text-[24px] font-semibold uppercase tracking-[1px] text-[#FAFAFA] mt-8 mb-4 border-l-2 border-[#DFCFB7] pl-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-[15px] md:text-[16px] leading-relaxed text-[#A0A0A0] text-justify"
                    >
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* Key Takeaways block */}
            <section className="my-12 p-6 md:p-8 border border-white/10 rounded-lg bg-white/[0.02]">
              <span className="text-[11px] font-bold tracking-[2px] text-[#DFCFB7] uppercase block mb-4">
                KEY TAKEAWAYS
              </span>
              <ul className="list-disc pl-5 space-y-3 font-space-grotesk text-[14px] md:text-[15px] text-[#D0D0D0] leading-relaxed">
                {post.takeaways.map((takeaway, idx) => (
                  <li key={idx} className="text-justify">
                    {takeaway}
                  </li>
                ))}
              </ul>
            </section>

            {/* WHY THIS MATTERS TO VAYU GALAXY callout */}
            <section className="my-12 p-6 md:p-8 border border-[#DFCFB7]/25 rounded-lg bg-[#DFCFB7]/[0.02]">
              <span className="text-[11px] font-bold tracking-[2px] text-[#DFCFB7] uppercase block mb-3">
                WHY THIS MATTERS TO VAYU GALAXY
              </span>
              <p className="font-space-grotesk text-[15px] md:text-[16px] text-white/80 leading-relaxed text-justify m-0">
                {post.whyMatters}
              </p>
            </section>

            {/* Back to Journal Button */}
            <div className="pt-8 border-t border-white/10 flex justify-start">
              <Link
                href="/blog"
                className="font-space-grotesk text-[12px] font-bold uppercase tracking-[2px] text-[#DFCFB7] hover:text-[#FAFAFA] transition-all flex items-center gap-2 no-underline"
              >
                ← BACK TO JOURNAL
              </Link>
            </div>

          </div>

        </article>

        {/* Section 6: Related Articles - light background */}
        <section className="bg-white text-[#111111] py-20 px-6 md:px-[10%] mt-24">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-space-grotesk text-[12px] font-semibold uppercase tracking-[3px] text-[#8E8E93] mb-12 block">
              03 / RELATED READS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.slug} post={rPost} />
              ))}
            </div>
          </div>
        </section>

      </main>

      <FinalCTA />
      <Footer />
    </div>
  );
}
