"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import {
  buildRegisterUrl,
  type BillingInterval,
} from "@/lib/config";
import {
  MODULE_INCLUSIONS,
  planDescription,
  planFeatureList,
} from "@/lib/plan-inclusions";
import type { Plan } from "@/lib/types/plan";

function formatPrice(value: string | null, currency: string) {
  if (value === null) return null;
  const amount = Number(value);
  if (Number.isNaN(amount)) return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

function planHasYearly(plan: Plan) {
  return plan.price_yearly !== null && Number(plan.price_yearly) > 0;
}

function gridColsClass(count: number) {
  if (count === 1) return "grid-cols-1 max-w-md mx-auto";
  if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto";
  if (count === 4) return "grid-cols-1 md:grid-cols-2 xl:grid-cols-4";
  // 3+ (default marketing layout)
  return "grid-cols-1 md:grid-cols-3";
}

export function PricingCards({ plans }: { plans: Plan[] }) {
  const anyYearly = plans.some(planHasYearly);
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("monthly");

  const interval: BillingInterval =
    billingInterval === "yearly" && anyYearly ? "yearly" : "monthly";

  return (
    <>
      {anyYearly && (
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-navy-100 bg-navy-50/80 p-1">
            {(["monthly", "yearly"] as BillingInterval[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBillingInterval(option)}
                className={
                  interval === option
                    ? "rounded-full bg-navy-900 px-6 py-2 text-sm font-semibold text-white shadow-sm"
                    : "rounded-full px-6 py-2 text-sm font-semibold text-navy-700 hover:text-navy-900"
                }
              >
                {option === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        className={`grid items-stretch gap-6 ${gridColsClass(plans.length)} ${
          anyYearly ? "mt-10" : "mt-16"
        }`}
      >
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            billingInterval={interval}
          />
        ))}
      </div>

      <PlanModules plans={plans} />
    </>
  );
}

function PricingCard({
  plan,
  billingInterval,
}: {
  plan: Plan;
  billingInterval: BillingInterval;
}) {
  const isFeatured = plan.is_popular;

  if (isFeatured) {
    return (
      <div className="relative flex flex-col self-stretch">
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-navy-400 via-accent-500 to-navy-400 opacity-90 blur-[2px] animate-sheen"
          aria-hidden
        />
        <div className="relative flex flex-1 flex-col rounded-2xl bg-navy-950 p-8 text-white shadow-glow">
          <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-navy-300 to-accent-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-950 shadow-cta">
            Most popular
          </span>
          <CardBody plan={plan} billingInterval={billingInterval} isFeatured />
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col self-stretch rounded-2xl border border-navy-100 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-card-hover">
      <CardBody plan={plan} billingInterval={billingInterval} />
    </div>
  );
}

function PlanModules({ plans }: { plans: Plan[] }) {
  const starter = plans.find((plan) => plan.slug === "starter");
  const growth = plans.find((plan) => plan.slug === "growth");
  if (!starter && !growth) return null;

  const columns = [
    starter ? { key: "starter" as const, name: starter.name } : null,
    growth ? { key: "growth" as const, name: growth.name } : null,
  ].filter((column) => column !== null);

  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <h3 className="text-center text-2xl font-semibold tracking-tight text-navy-900">
        What each plan turns on
      </h3>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-ink-muted">
        HR and CRM stay on Growth. Inventory stays off both plans.
      </p>
      <div className="mt-8 overflow-hidden rounded-2xl border border-navy-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-paper text-navy-900">
            <tr>
              <th className="px-5 py-3 font-semibold">Module</th>
              <th className="hidden px-5 py-3 font-semibold sm:table-cell">
                In place of
              </th>
              {columns.map((column) => (
                <th key={column.key} className="px-5 py-3 font-semibold">
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MODULE_INCLUSIONS.map((row) => (
              <tr key={row.module} className="border-t border-navy-100">
                <td className="px-5 py-3 font-medium text-navy-900">
                  {row.module}
                </td>
                <td className="hidden px-5 py-3 text-ink-muted sm:table-cell">
                  {row.replaces}
                </td>
                {columns.map((column) => (
                  <td key={column.key} className="px-5 py-3 text-ink">
                    {row[column.key] ? "On" : "Off"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CardBody({
  plan,
  billingInterval,
  isFeatured = false,
}: {
  plan: Plan;
  billingInterval: BillingInterval;
  isFeatured?: boolean;
}) {
  const featureItems = planFeatureList(plan);
  const planName = plan.name.trim() || "Plan";
  const description = planDescription(plan);
  const useYearly =
    billingInterval === "yearly" &&
    planHasYearly(plan) &&
    !plan.is_contact_sales;
  const priceLabel = plan.is_contact_sales
    ? null
    : formatPrice(
        useYearly ? plan.price_yearly : plan.price_monthly,
        plan.currency,
      );
  const hasPrice = priceLabel !== null;
  const ctaHref = buildRegisterUrl(plan.id, billingInterval);
  const ctaLabel = plan.is_contact_sales
    ? "Contact sales"
    : `Start with ${planName}`;

  return (
    <div className="flex flex-1 flex-col">
      <div>
        <h3
          className={`text-lg font-semibold ${
            isFeatured ? "text-white" : "text-navy-900"
          }`}
        >
          {planName}
        </h3>
        {description ? (
          <p
            className={`mt-1 text-sm ${
              isFeatured ? "text-navy-100/70" : "text-ink-muted"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex items-baseline gap-1">
        {plan.is_contact_sales ? (
          <span
            className={`text-2xl font-semibold ${
              isFeatured ? "text-white" : "text-navy-900"
            }`}
          >
            Contact sales
          </span>
        ) : hasPrice ? (
          <>
            <span
              className={`text-4xl font-semibold ${
                isFeatured ? "text-white" : "text-navy-900"
              }`}
            >
              {priceLabel}
            </span>
            <span
              className={`text-sm ${
                isFeatured ? "text-navy-100/70" : "text-ink-muted"
              }`}
            >
              {useYearly ? "/year" : "/month"}
            </span>
          </>
        ) : (
          <span
            className={`text-4xl font-semibold ${
              isFeatured ? "text-white" : "text-navy-900"
            }`}
          >
            N/A
          </span>
        )}
      </div>

      {featureItems.length > 0 ? (
        <ul
          className={`mt-6 flex-1 space-y-3 text-sm ${
            isFeatured ? "text-navy-100/90" : "text-ink"
          }`}
        >
          {featureItems.map((feature, index) => (
            <li key={`${feature}-${index}`} className="flex items-start gap-2">
              <Check
                className={`mt-0.5 h-4 w-4 shrink-0 ${
                  isFeatured ? "text-navy-300" : "text-navy-600"
                }`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex-1" />
      )}

      <div className="mt-8 shrink-0">
        <a
          href={ctaHref}
          className={
            isFeatured
              ? "inline-flex h-11 w-full items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-navy-900 transition hover:bg-navy-50"
              : "inline-flex h-11 w-full items-center justify-center rounded-xl bg-navy-900 px-5 text-sm font-semibold text-white transition hover:bg-navy-800"
          }
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
