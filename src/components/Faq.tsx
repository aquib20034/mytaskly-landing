const items = [
  {
    q: "Is MyTaskly really three products in one?",
    a: "Yes. Project Management, CRM, and HR share the same users, clients, and permissions layer. You don't pay per module and you don't reconcile data across them.",
  },
  {
    q: "Who is MyTaskly built for?",
    a: "Software houses, digital agencies, and small businesses — roughly 5 to 200 people. If you've outgrown spreadsheets but a Salesforce + Jira + BambooHR stack is overkill, you're the target.",
  },
  {
    q: "How does the free trial work?",
    a: "14 days, full access to your chosen plan. No credit card up front. If you don't convert, your workspace goes read-only and you can export everything.",
  },
  {
    q: "Can I import data from other tools?",
    a: "CSV import is available on day one for clients, deals, projects, and employees. Direct migration from Jira, HubSpot, and BambooHR is on our roadmap — ask us if you need it sooner.",
  },
  {
    q: "Is my data secure?",
    a: "Data is encrypted in transit (TLS 1.3) and at rest. Role-based permissions are enforced server-side. Enterprise adds SSO, audit logs, and SLA-backed uptime.",
  },
  {
    q: "Can we self-host?",
    a: "Self-hosting isn't supported on the standard plans. Enterprise customers can talk to us about dedicated deployments — but most teams are better served by our hosted offering.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-navy-50/40 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white">
          {items.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-navy-900">
                {item.q}
                <span className="shrink-0 text-navy-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
