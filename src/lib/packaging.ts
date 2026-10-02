import type { Plan } from "@/lib/types/plan";

/**
 * Marketing packaging for the live plans.
 * Prices stay on the plans API. This file says which modules each plan includes.
 */
export const GROWTH_APP_IDS = new Set(["hubspot", "bamboohr", "notion"]);

export const moduleMatrix = [
  { module: "Projects", replaces: "Jira, Asana, monday.com", starter: "On", growth: "On" },
  { module: "Chat", replaces: "Slack", starter: "On", growth: "On" },
  { module: "Client portal", replaces: "A separate client login", starter: "On", growth: "On" },
  { module: "CRM", replaces: "HubSpot", starter: "Off", growth: "On" },
  { module: "HR", replaces: "BambooHR", starter: "Off", growth: "On" },
  { module: "Resources", replaces: "Notion", starter: "Off", growth: "On" },
  { module: "Developer tools", replaces: "Software-house workflow", starter: "Off", growth: "On" },
  { module: "Inventory", replaces: "Larger companies", starter: "Off", growth: "Off" },
] as const;

const packaging: Record<
  string,
  { description: string; features: string[]; featured: boolean }
> = {
  starter: {
    description: "Projects, chat, and a client portal for a smaller team.",
    featured: false,
    features: [
      "Projects, boards, and timelines",
      "Team chat",
      "Client portal",
      "One workspace price, sized for teams up to about 10 people",
    ],
  },
  growth: {
    description: "CRM, HR, and the rest of the workspace for a 10–30 person agency.",
    featured: true,
    features: [
      "Everything in Starter",
      "CRM for leads, deals, and follow-ups",
      "HR for the directory, attendance, leave, and payroll",
      "Resources and developer tools",
      "Yearly billing on this plan",
    ],
  },
};

export function sortPlansForDisplay(plans: Plan[]) {
  const rank = (slug: string) => (slug === "starter" ? 0 : slug === "growth" ? 1 : 2);
  return [...plans].sort(
    (a, b) => rank(a.slug) - rank(b.slug) || a.sort_order - b.sort_order || a.name.localeCompare(b.name),
  );
}

export function planPresentation(plan: Plan) {
  const pack = packaging[plan.slug];
  const apiFeatures = (Array.isArray(plan.features) ? plan.features : [])
    .map((feature) => feature.trim())
    .filter((feature) => feature.length > 0);
  return {
    description: pack?.description || plan.description?.trim() || "",
    features: pack?.features ?? apiFeatures,
    featured: pack ? pack.featured : plan.is_popular,
  };
}

export function recommendedPlanSlug(selectedAppIds: string[]) {
  return selectedAppIds.some((id) => GROWTH_APP_IDS.has(id)) ? "growth" : "starter";
}
