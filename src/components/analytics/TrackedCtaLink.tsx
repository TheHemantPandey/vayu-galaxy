"use client";

import React from "react";
import Link from "next/link";
import { trackCtaClick } from "@/lib/analytics";

interface TrackedCtaLinkProps {
  href: string;
  ctaName: string;
  linkLocation: string;
  className?: string;
  children: React.ReactNode;
}

export default function TrackedCtaLink({
  href,
  ctaName,
  linkLocation,
  className = "",
  children,
}: TrackedCtaLinkProps) {
  return (
    <Link
      href={href}
      onClick={() =>
        trackCtaClick({
          cta_name: ctaName,
          destination_url: href,
          link_location: linkLocation,
        })
      }
      className={className}
    >
      {children}
    </Link>
  );
}
