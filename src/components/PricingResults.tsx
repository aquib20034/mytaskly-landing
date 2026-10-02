"use client";

import { REGISTER_URL } from "@/lib/config";
import { usePublicPlans } from "@/lib/use-public-plans";
import type { Plan } from "@/lib/types/plan";
import { PricingCards } from "@/components/PricingCards";

export function PricingResults({ initialPlans }: { initialPlans: Plan[] }) {
  const { plans, status } = usePublicPlans(initialPlans);

  if (status === "loading") {
    return (
      <p className="mt-16 text-center text-ink-muted">Loading plans…</p>
    );
  }

  if (status === "error" || plans.length === 0) {
    return (
      <div className="mt-16 text-center">
        <p className="text-ink-muted">
          {status === "error"
            ? "Unable to load pricing right now."
            : "Pricing coming soon."}
        </p>
        <a
          href={REGISTER_URL}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-navy-900 px-5 text-sm font-semibold text-white transition hover:bg-navy-800"
        >
          Create an account
        </a>
      </div>
    );
  }

  return <PricingCards plans={plans} />;
}
