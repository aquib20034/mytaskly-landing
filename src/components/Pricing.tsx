import { fetchPublicPlans } from "@/lib/api/plans";
import { moduleMatrix } from "@/lib/packaging";
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
            Starter covers projects, chat, and the client portal. Growth adds
            CRM, HR, resources, and developer tools for a 10–30 person agency.
          </p>
        </div>

        <PricingResults initialPlans={plans} />

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-lg font-semibold text-navy-900">What each plan turns on</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-navy-100 text-ink-muted">
                  <th className="py-2 pr-4 font-medium">Module</th>
                  <th className="py-2 pr-4 font-medium">In place of</th>
                  <th className="py-2 pr-4 font-medium">Starter</th>
                  <th className="py-2 font-medium">Growth</th>
                </tr>
              </thead>
              <tbody>
                {moduleMatrix.map((row) => (
                  <tr key={row.module} className="border-b border-navy-100">
                    <td className="py-2 pr-4 font-medium text-navy-900">{row.module}</td>
                    <td className="py-2 pr-4 text-ink-muted">{row.replaces}</td>
                    <td className="py-2 pr-4 text-navy-900">{row.starter}</td>
                    <td className="py-2 text-navy-900">{row.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Inventory is for a later conversation with companies past about 30
            people. Savings against a full stack of Jira, HubSpot, BambooHR, and
            Slack belong to Growth, because CRM and HR sit on that plan.
          </p>
        </div>

        <p className="mt-10 text-center text-sm text-ink-muted">
          Billed in USD. Growth can be paid yearly. Paid plans continue to
          secure checkout after you create your organization.
        </p>
      </div>
    </section>
  );
}
