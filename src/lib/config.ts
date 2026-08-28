export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://app.mytaskly.io"
    : "http://localhost:3000");

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api/v1";

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
