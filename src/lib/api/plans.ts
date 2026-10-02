import { API_URL } from "@/lib/config";
import type { Plan } from "@/lib/types/plan";

function toPlan(raw: unknown): Plan | null {
  if (!raw || typeof raw !== "object") return null;
  const plan = raw as Record<string, unknown>;
  if (typeof plan.id !== "string" || typeof plan.name !== "string") return null;
  if (plan.is_active === false) return null;
  return {
    id: plan.id,
    name: plan.name,
    slug: typeof plan.slug === "string" ? plan.slug : "",
    description: typeof plan.description === "string" ? plan.description : null,
    price_monthly: plan.price_monthly == null ? null : String(plan.price_monthly),
    price_yearly: plan.price_yearly == null ? null : String(plan.price_yearly),
    currency: typeof plan.currency === "string" ? plan.currency : "USD",
    features: Array.isArray(plan.features)
      ? plan.features.filter((item): item is string => typeof item === "string")
      : [],
    is_popular: Boolean(plan.is_popular),
    is_contact_sales: Boolean(plan.is_contact_sales),
    is_active: true,
    sort_order: typeof plan.sort_order === "number" ? plan.sort_order : 0,
  };
}

function parsePlansPayload(data: unknown): Plan[] {
  const rows = Array.isArray(data)
    ? data
    : data &&
        typeof data === "object" &&
        Array.isArray((data as { data?: unknown }).data)
      ? (data as { data: unknown[] }).data
      : null;
  if (!rows) throw new Error("Unexpected plans response shape");
  return rows.flatMap((row) => {
    const plan = toPlan(row);
    return plan ? [plan] : [];
  });
}

/**
 * Public plans for the marketing pricing section.
 * Always fresh (no ISR cache) so a temporary API outage does not stick
 * "Unable to load pricing" on the homepage.
 */
export function plansEndpoint() {
  const base = API_URL.trim().replace(/\/+$/, "");
  return `${base}/plans`;
}

export async function fetchPublicPlans(): Promise<Plan[]> {
  const url = plansEndpoint();
  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      "User-Agent": "MyTasklyLanding/1.0 (+https://mytaskly.io)",
    },
    signal: AbortSignal.timeout(8000),
  });

  if (!res.ok) {
    throw new Error(`Failed to load plans (${res.status}) from ${url}`);
  }

  return parsePlansPayload(await res.json());
}

/** Workspace price for one year. Yearly list price when the plan has one, otherwise twelve months. */
export function planYearlyAmount(plan: Plan): number | null {
  if (plan.is_contact_sales) return null;
  const yearly = plan.price_yearly === null ? NaN : Number(plan.price_yearly);
  if (!Number.isNaN(yearly) && yearly > 0) return yearly;
  const monthly = plan.price_monthly === null ? NaN : Number(plan.price_monthly);
  if (!Number.isNaN(monthly) && monthly > 0) return monthly * 12;
  return null;
}
