/**
 * Central Analytics Utility for Vayu Galaxy
 * Supports Google Analytics 4 (GA4) with SSR-safe wrappers and strict non-PII compliance.
 */

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetIdOrAction: string | Date,
      configOrParams?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Checks whether Google Analytics is initialized and available in the browser.
 */
export const isAnalyticsActive = (): boolean => {
  return typeof window !== "undefined" && typeof window.gtag === "function" && Boolean(GA_MEASUREMENT_ID);
};

/**
 * Generic event dispatcher. Fails silently if analytics is disabled, unconfigured, or blocked by ad-blockers.
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean | undefined | null>
): void => {
  try {
    if (!isAnalyticsActive() || !window.gtag) return;

    // Filter out undefined and null values cleanly
    const cleanedParams: Record<string, string | number | boolean> = {};
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null) {
          cleanedParams[key] = val;
        }
      });
    }

    window.gtag("event", eventName, cleanedParams);
  } catch {
    // Fail silently in all environments without throwing
  }
};

/**
 * Track SPA page view transitions.
 */
export const trackPageView = (url: string, title?: string): void => {
  try {
    if (!isAnalyticsActive() || !window.gtag || !GA_MEASUREMENT_ID) return;

    window.gtag("event", "page_view", {
      page_path: url,
      page_location: typeof window !== "undefined" ? window.location.href : url,
      page_title: title || (typeof document !== "undefined" ? document.title : ""),
    });
  } catch {
    // Fail silently
  }
};

/**
 * Track primary lead generation and form conversion events (Non-PII only).
 */
export const trackLead = (
  leadType: "booking" | "contact" | "job_application",
  params: {
    form_name: string;
    interest_level?: string;
    age_group?: string;
    timeline?: string;
    city?: string;
    inquiry_category?: string;
    job_slug?: string;
    job_title?: string;
    job_department?: string;
    employment_type?: string;
  }
): void => {
  const eventMap = {
    booking: "generate_lead_booking",
    contact: "generate_lead_contact",
    job_application: "submit_job_application",
  };

  trackEvent(eventMap[leadType] || "generate_lead", params);
};

/**
 * Track newsletter subscription events.
 */
export const trackNewsletterSubscription = (params: {
  form_location: "footer" | "newsletter_component";
}): void => {
  trackEvent("subscribe_newsletter", params);
};

/**
 * Track prominent CTA button clicks.
 */
export const trackCtaClick = (params: {
  cta_name: string;
  destination_url: string;
  link_location: string;
}): void => {
  trackEvent("cta_button_click", params);
};

/**
 * Track direct phone call link clicks.
 */
export const trackPhoneCall = (params: {
  link_location: string;
}): void => {
  trackEvent("click_phone_call", params);
};

/**
 * Track direct email mailto link clicks.
 */
export const trackEmailClick = (params: {
  link_location: string;
}): void => {
  trackEvent("click_email_direct", params);
};

/**
 * Track clipboard email copy interactions.
 */
export const trackCopyEmail = (params: {
  click_location: string;
}): void => {
  trackEvent("copy_email_address", params);
};

/**
 * Track external social profile clicks.
 */
export const trackSocialClick = (params: {
  platform: "x" | "linkedin" | "youtube" | "instagram" | "facebook";
  link_location: string;
}): void => {
  trackEvent("click_social_link", params);
};

/**
 * Track dynamic content detail views (Articles, Careers, Project showcases).
 */
export const trackContentView = (
  eventType: "view_blog_article" | "view_job_opening" | "view_project_detail",
  params: Record<string, string | number | boolean | undefined | null>
): void => {
  trackEvent(eventType, params);
};
