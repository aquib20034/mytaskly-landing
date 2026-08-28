import { REGISTER_URL } from "@/lib/config";
import { fetchPublicPlans } from "@/lib/api/plans";
import { PricingCards } from "@/components/PricingCards";

export async function Pricing() {
  let plans: Awaited<ReturnType<typeof fetchPublicPlans>> = [];
  let loadError = false;

  try {
    plans = await fetchPublicPlans();
  } catch {
    loadError = true;
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
            Pick a tier that fits your team. All plans include Project
            Management, CRM, and HR.
          </p>
        </div>

        {loadError ? (
          <div className="mt-16 text-center">
            <p className="text-ink-muted">
              Unable to load pricing right now.
            </p>
            <a
              href={REGISTER_URL}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-navy-900 px-5 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              Create an account
            </a>
          </div>
        ) : plans.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-ink-muted">Pricing coming soon.</p>
            <a
              href={REGISTER_URL}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-navy-900 px-5 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              Create an account
            </a>
          </div>
        ) : (
          <PricingCards plans={plans} />
        )}

        <p className="mt-10 text-center text-sm text-ink-muted">
          Billed monthly or yearly in USD. Paid plans continue to secure
          checkout after you create your organization.
        </p>
      </div>
    </section>
  );
}
