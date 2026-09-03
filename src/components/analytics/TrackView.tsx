"use client";

import { useEffect, useRef } from "react";
import { trackContentView } from "@/lib/analytics";

interface TrackViewProps {
  eventName: "view_blog_article" | "view_job_opening" | "view_project_detail";
  params: Record<string, string | number | boolean | undefined | null>;
}

export default function TrackView({ eventName, params }: TrackViewProps) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    trackContentView(eventName, params);
  }, [eventName, params]);

  return null;
}
