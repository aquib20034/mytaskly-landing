import type { Plan } from "@/lib/types/plan";

/** Shown only when the live plan has no description. */
const DESCRIPTIONS: Record<string, string> = {
  starter: "For teams that need projects, chat, and a client portal.",
};

/** What each public plan turns on. Prices stay on the plan records. */
const INCLUSIONS: Record<string, string[]> = {
  starter: [
    "Projects and timelines",
    "Team chat",
    "Client portal",
    "One workspace invoice",
  ],
  growth: [
    "Everything in Starter",
    "CRM",
    "HR: directory, attendance, leave, and payroll",
    "Resources",
    "Developer tools",
  ],
};

export type ModuleInclusion = {
  module: string;
  replaces: string;
  starter: boolean;
  growth: boolean;
};

export const MODULE_INCLUSIONS: ModuleInclusion[] = [
  { module: "Projects", replaces: "Jira, Asana, monday.com", starter: true, growth: true },
  { module: "Chat", replaces: "Slack", starter: true, growth: true },
  { module: "Client portal", replaces: "A separate client login", starter: true, growth: true },
  { module: "CRM", replaces: "HubSpot Sales Hub", starter: false, growth: true },
  { module: "HR", replaces: "BambooHR", starter: false, growth: true },
  { module: "Resources", replaces: "A separate docs tool", starter: false, growth: true },
  { module: "Developer tools", replaces: "A software-house extra", starter: false, growth: true },
  { module: "Inventory", replaces: "No separate app in this set", starter: false, growth: false },
];

export function planDescription(plan: Plan): string {
  const fromApi = plan.description?.trim() ?? "";
  if (fromApi.length > 0) return fromApi;
  return DESCRIPTIONS[plan.slug] ?? "";
}

export function planFeatureList(plan: Plan): string[] {
  const fromApi = (Array.isArray(plan.features) ? plan.features : [])
    .map((feature) => feature.trim())
    .filter((feature) => feature.length > 0);

  if (fromApi.length > 0) return fromApi;
  return INCLUSIONS[plan.slug] ?? [];
}

/**
 * Modules each plan slug turns on, used by the savings calculator to compare a plan only
 * with the apps it can actually replace. Covers today's plans and the proposed
 * Free / Team / Business / Scale plans. An unknown slug is treated as covering everything.
 */
const MODULES_BY_PLAN: Record<string, string[]> = {
  free: ["projects", "chat"],
  starter: ["projects", "chat", "portal"],
  team: ["projects", "chat", "portal"],
  growth: ["projects", "chat", "portal", "crm", "hr", "resources", "developer"],
  business: ["projects", "chat", "portal", "crm", "hr"],
  scale: ["projects", "chat", "portal", "crm", "hr", "resources", "developer", "inventory"],
};

export function planCoversModules(slug: string, modules: string[]): boolean {
  const included = MODULES_BY_PLAN[slug];
  if (!included) return true;
  return modules.every((module) => included.includes(module));
}
