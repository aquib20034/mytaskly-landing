"use client";

import { useEffect, useState } from "react";
import { fetchPublicPlans } from "@/lib/api/plans";
import type { Plan } from "@/lib/types/plan";

/**
 * Server rendering sometimes cannot reach the plans API from the host.
 * When that happens, load the same public list from the visitor's browser.
 */
export function usePublicPlans(initial: Plan[]) {
  const [plans, setPlans] = useState(initial);
  const [status, setStatus] = useState<"ready" | "loading" | "error">(
    initial.length > 0 ? "ready" : "loading",
  );

  useEffect(() => {
    if (initial.length > 0) return;
    let cancelled = false;
    fetchPublicPlans()
      .then((next) => {
        if (cancelled) return;
        setPlans(next);
        setStatus(next.length > 0 ? "ready" : "error");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [initial]);

  return { plans, status };
}
