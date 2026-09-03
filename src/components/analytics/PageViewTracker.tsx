"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    const queryString = searchParams?.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;

    // Prevent duplicate page_view events on re-renders for the same URL
    if (lastTrackedUrl.current === url) {
      return;
    }

    lastTrackedUrl.current = url;
    trackPageView(url, document.title);
  }, [pathname, searchParams]);

  return null;
}
