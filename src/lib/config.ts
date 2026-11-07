export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.mytaskly.io";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.mytaskly.io/api/v1";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://mytaskly.io"
    : "http://localhost:3002");

export const REGISTER_PATH = "/register";
export const LOGIN_PATH = "/login";
export const REGISTER_URL = `${APP_URL}${REGISTER_PATH}`;
export const LOGIN_URL = `${APP_URL}${LOGIN_PATH}`;

export type BillingInterval = "monthly" | "yearly";

export function buildRegisterUrl(
  planId: string,
  billingInterval: BillingInterval,
): string {
  const url = new URL(REGISTER_PATH, APP_URL);
  url.searchParams.set("plan_id", planId);
  url.searchParams.set("billing_interval", billingInterval);
  return url.toString();
}

/**
 * Trial terms shown under every "Start free" button, for example
 * "14-day free trial · No card needed". Leave empty until the terms are final:
 * nothing is shown when it is empty, so the site never states terms that are not true.
 */
export const TRIAL_TERMS = process.env.NEXT_PUBLIC_TRIAL_TERMS?.trim() || "";

/** Booking link for a 15-minute setup call (TidyCal, Cal.com, Calendly). Falls back to the contact page. */
export const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL?.trim() || "/contact";

/** Public contact address shown in the footer and on the contact page. */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@mytaskly.io";

/** Google Analytics 4 measurement ID (G-XXXXXXX). Analytics stay off when it is empty. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() || "";
