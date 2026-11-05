"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID } from "@/lib/config";

type Gtag = (...args: unknown[]) => void;

/**
 * Loads GA4 when NEXT_PUBLIC_GA_ID is set, and sends one event for every click on an
 * element with a data-track attribute (for example data-track="start_free_hero").
 */
export function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    function onClick(event: MouseEvent) {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!target) return;
      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      gtag?.("event", target.dataset.track, { page_path: window.location.pathname });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
