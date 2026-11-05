import { fetchPublicPlans } from "@/lib/api/plans";
import { PricingResults } from "@/components/PricingResults";
import { TrialTerms } from "@/components/TrialTerms";
import { DEMO_URL } from "@/lib/config";

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
            One price covers the whole workspace. Add people without a
            per-seat bill, and turn on only the modules your team uses.
          </p>
        </div>

        <PricingResults initialPlans={plans} />

        <TrialTerms className="mt-8 text-center text-sm" />
        <p className="mt-6 text-center text-sm text-ink-muted">
          Not sure which plan fits?{" "}
          <a href={DEMO_URL} data-track="book_call_pricing" className="font-semibold text-navy-900 underline underline-offset-4">
            Book a 15-minute setup call
          </a>{" "}
          and we&apos;ll set up your workspace with you.
        </p>
        <p className="mt-3 text-center text-xs text-ink-muted">
          Billed monthly or yearly in USD. You choose a paid plan after you
          create your workspace.
        </p>
      </div>
    </section>
  );
}
