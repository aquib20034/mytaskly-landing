import { fetchPublicPlans } from "@/lib/api/plans";
import { PricingResults } from "@/components/PricingResults";

export async function Pricing() {
  let plans: Awaited<ReturnType<typeof fetchPublicPlans>> = [];

  try {
    plans = await fetchPublicPlans();
  } catch (err) {
    console.error("[Pricing] failed to load plans:", err);
  }

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Flat pricing. No per-seat penalty.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Each card is a current workspace plan. The name, price, and
            description come from the live plans list. The lines under the
            price are the modules that plan turns on.
          </p>
        </div>

        <PricingResults initialPlans={plans} />

        <p className="mt-10 text-center text-sm text-ink-muted">
          Billed monthly or yearly in USD. Paid plans continue to secure
          checkout after you create your organization.
        </p>
      </div>
    </section>
  );
}
