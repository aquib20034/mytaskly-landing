"use client";

import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import { buildRegisterUrl, REGISTER_URL } from "@/lib/config";
import { planYearlyAmount } from "@/lib/api/plans";
import { recommendedPlanSlug } from "@/lib/packaging";
import { usePublicPlans } from "@/lib/use-public-plans";
import type { Plan } from "@/lib/types/plan";

type AppPrice = {
  id: string;
  name: string;
  plan: string;
  price: number;
  logo: string;
  pad?: boolean;
  floor?: { maxPeople: number; monthly: number };
};

/** Published list prices, 2026. Not a quote from the vendor. */
const apps: AppPrice[] = [
  { id: "jira", name: "Jira", plan: "Standard", price: 9.05, logo: "/brands/jira.svg", pad: true },
  { id: "asana", name: "Asana", plan: "Starter", price: 10.99, logo: "/brands/asana.png" },
  { id: "monday", name: "monday.com", plan: "Basic", price: 9, logo: "/brands/monday.png" },
  { id: "hubspot", name: "HubSpot", plan: "Sales Starter", price: 20, logo: "/brands/hubspot.png" },
  { id: "bamboohr", name: "BambooHR", plan: "Core", price: 10, logo: "/brands/bamboohr.png", floor: { maxPeople: 25, monthly: 250 } },
  { id: "slack", name: "Slack", plan: "Pro", price: 8.75, logo: "/brands/slack.png" },
  { id: "notion", name: "Notion", plan: "Plus", price: 12, logo: "/brands/notion.png" },
  { id: "toggl", name: "Toggl Track", plan: "Starter", price: 9, logo: "/brands/toggl.png" },
];

const DEFAULT_ON = new Set(["jira", "hubspot", "bamboohr", "slack"]);
const MIN_PEOPLE = 1;
const MAX_PEOPLE = 200;

function money(value: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function monthlyCost(app: AppPrice, people: number) {
  if (app.floor && people <= app.floor.maxPeople) return app.floor.monthly;
  return app.price * people;
}

export function SavingsCalculator({ plans }: { plans: Plan[] }) {
  const { plans: livePlans, status } = usePublicPlans(plans);
  const priced = livePlans
    .map((plan) => ({ plan, year: planYearlyAmount(plan) }))
    .filter((item): item is { plan: Plan; year: number } => item.year !== null);
  const popular = priced.find((item) => item.plan.slug === "growth") ?? priced.find((item) => item.plan.is_popular) ?? priced[0];

  const [people, setPeople] = useState(40);
  const [on, setOn] = useState(() => apps.map((app) => DEFAULT_ON.has(app.id)));
  const selectedIds = apps.filter((_, index) => on[index]).map((app) => app.id);
  const needsGrowth = recommendedPlanSlug(selectedIds) === "growth";
  const recommended =
    priced.find((item) => item.plan.slug === recommendedPlanSlug(selectedIds)) ?? popular;
  const [planId, setPlanId] = useState("");
  const [pinned, setPinned] = useState(false);
  const chosen = (pinned ? priced.find((item) => item.plan.id === planId) : undefined) ?? recommended ?? popular;

  useEffect(() => {
    setPinned(false);
  }, [recommended?.plan.id]);
  const fill = ((people - MIN_PEOPLE) / (MAX_PEOPLE - MIN_PEOPLE)) * 100;

  const yearly = useMemo(() => {
    const selected = apps.filter((_, index) => on[index]);
    const stackYear = selected.reduce((sum, app) => sum + monthlyCost(app, people) * 12, 0);
    const mytasklyYear = chosen?.year ?? 0;
    return {
      selected,
      stackYear,
      mytasklyYear,
      saved: chosen ? Math.max(stackYear - mytasklyYear, 0) : 0,
    };
  }, [people, on, chosen]);

  return (
    <div className="rounded-[32px] bg-[#f4f6fb] p-4 sm:p-6 lg:p-8">
      <div className="grid items-stretch gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col rounded-[28px] bg-white p-6 shadow-card sm:p-8">
          <h3 className="text-xl font-semibold text-navy-950">Your apps today</h3>
          <p className="mt-6 text-sm text-ink-muted">Which apps do you use?</p>
          <div className="mt-4 grid grid-cols-4 gap-x-2 gap-y-5">
            {apps.map((app, index) => {
              const active = on[index];
              return (
                <button
                  key={app.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setOn((current) => current.map((value, i) => (i === index ? !value : value)))
                  }
                  className="relative flex flex-col items-center gap-2"
                >
                  <span
                    className={`grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border border-black/5 shadow-sm transition hover:-translate-y-0.5 ${
                      app.pad ? "bg-[#0052CC]" : "bg-white"
                    } ${active ? "" : "opacity-40 grayscale"}`}
                  >
                    <img
                      src={app.logo}
                      alt=""
                      className={`object-contain ${app.pad ? "h-7 w-7" : "h-9 w-9"}`}
                    />
                  </span>
                  {active ? (
                    <span className="absolute right-1 top-0 grid h-5 w-5 place-items-center rounded-full bg-[#7c5cfc] text-white ring-2 ring-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                  ) : null}
                  <span className="text-center text-[11px] font-medium leading-tight text-navy-900">
                    {app.name}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-6 rounded-2xl border border-[#e4e0f4] bg-white px-4 py-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-navy-950">People at your company</span>
              <span className="text-base font-semibold text-[#6d4aff]">
                {people} {people === 1 ? "person" : "people"}
              </span>
            </div>
            <input
              type="range"
              min={MIN_PEOPLE}
              max={MAX_PEOPLE}
              value={people}
              onChange={(event) => setPeople(Number(event.target.value))}
              className="savings-range mt-4 w-full"
              style={{
                background: `linear-gradient(90deg, #7c5cfc ${fill}%, #e6e3f4 ${fill}%)`,
              }}
              aria-label="Number of people"
              aria-valuemin={MIN_PEOPLE}
              aria-valuemax={MAX_PEOPLE}
              aria-valuenow={people}
            />
          </div>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-card sm:p-8">
          <h3 className="text-xl font-semibold text-navy-950">Apps to replace</h3>
          <ul className="mt-5">
            {yearly.selected.length === 0 ? (
              <li className="border-b border-navy-100 py-3 text-sm text-ink-muted">
                Select at least one app.
              </li>
            ) : (
              yearly.selected.map((app) => {
                const floored = app.floor && people <= app.floor.maxPeople;
                return (
                  <li
                    key={app.id}
                    className="flex items-center justify-between gap-3 border-b border-navy-100 py-3 text-sm"
                  >
                    <span className="text-navy-900">
                      {app.name}
                      <span className="mt-0.5 block text-[11px] text-ink-muted">{app.plan}</span>
                    </span>
                    <span className="shrink-0 text-ink-muted">
                      {floored ? `$${app.floor?.monthly} / month floor` : `$${money(app.price)} / person`}
                    </span>
                  </li>
                );
              })
            )}
            <li className="flex items-center justify-between py-3 text-sm font-semibold text-navy-950">
              <span>Total</span>
              <span>${money(yearly.stackYear)} / year</span>
            </li>
          </ul>
          {priced.length > 1 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {priced.map(({ plan }) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => {
                    setPinned(true);
                    setPlanId(plan.id);
                  }}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    chosen?.plan.id === plan.id
                      ? "bg-navy-950 text-white"
                      : "bg-paper text-navy-800"
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          ) : null}
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            {needsGrowth
              ? "HubSpot, BambooHR, and Notion compare with Growth, where CRM, HR, and resources sit."
              : "A board and chat compare with Starter, which includes projects, chat, and the client portal."}
          </p>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
            {chosen
              ? `MyTaskly ${chosen.plan.name} = $${money(yearly.mytasklyYear)} / year`
              : status === "loading"
                ? "Loading MyTaskly plans"
                : "MyTaskly plan prices are unavailable"}
          </p>
          <div className="mt-5 rounded-2xl bg-[#f4f6fb] p-5">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-ink-muted">Cost savings</p>
              <p className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
                ${money(yearly.saved)}
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {chosen
                ? `MyTaskly ${chosen.plan.name} is $${money(yearly.mytasklyYear)} a year for the workspace. The selected apps list at $${money(yearly.stackYear)} a year for ${people} ${people === 1 ? "person" : "people"}.`
                : status === "loading"
                  ? "Loading workspace prices from the MyTaskly plans list."
                  : "Workspace prices come from the MyTaskly plans list."}
            </p>
          </div>
          <a
            href={
              chosen
                ? buildRegisterUrl(
                    chosen.plan.id,
                    chosen.plan.price_yearly ? "yearly" : "monthly",
                  )
                : REGISTER_URL
            }
            className="mt-4 flex h-12 items-center justify-center rounded-full bg-navy-950 text-sm font-semibold text-white hover:bg-navy-800"
          >
            Start saving with MyTaskly
          </a>
        </div>
      </div>
      <p className="mt-4 px-2 text-xs leading-relaxed text-ink-muted">
        List prices checked in 2026: Jira Standard monthly under 100 users ($9.05), Asana Starter
        annual ($10.99), monday.com Basic annual ($9), HubSpot Sales Hub Starter regular rate ($20),
        BambooHR Core ($10 per employee, or $250 per month at 25 people or fewer), Slack Pro ($8.75),
        Notion Plus ($12), Toggl Track Starter annual ($9). They are published rates, not quotes, and
        they change.
      </p>
    </div>
  );
}
