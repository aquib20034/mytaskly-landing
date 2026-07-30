import { API_URL } from "@/lib/config";
import type { Plan } from "@/lib/types/plan";

export async function fetchPublicPlans(): Promise<Plan[]> {
  const res = await fetch(`${API_URL}/plans`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to load plans (${res.status})`);
  }

  const data: unknown = await res.json();
  if (!Array.isArray(data)) {
    throw new Error("Unexpected plans response shape");
  }

  return data as Plan[];
}
