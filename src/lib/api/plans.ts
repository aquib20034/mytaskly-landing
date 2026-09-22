import { API_URL } from "@/lib/config";
import type { Plan } from "@/lib/types/plan";

function parsePlansPayload(data: unknown): Plan[] {
  if (Array.isArray(data)) {
    return data as Plan[];
  }
  if (
    data &&
    typeof data === "object" &&
    Array.isArray((data as { data?: unknown }).data)
  ) {
    return (data as { data: Plan[] }).data;
  }
  throw new Error("Unexpected plans response shape");
}

/**
 * Public plans for the marketing pricing section.
 * Always fresh (no ISR cache) so a temporary API outage does not stick
 * "Unable to load pricing" on the homepage.
 */
export async function fetchPublicPlans(): Promise<Plan[]> {
  const url = `${API_URL}/plans`;
  const res = await fetch(url, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Failed to load plans (${res.status}) from ${url}`);
  }

  return parsePlansPayload(await res.json());
}
