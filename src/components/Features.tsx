import {
  Layers,
  ShieldCheck,
  Workflow,
  Zap,
  PieChart,
  Globe2,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "One source of truth",
    body: "A client record in CRM is the same client in PMS is the same client in HR. No more CSV exports to reconcile who owes what.",
  },
  {
    icon: Workflow,
    title: "Built for how teams actually work",
    body: "Designed around the real workflow of a software house: bid, scope, staff, build, invoice, retain.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based permissions",
    body: "Give sales access to deals, engineering access to projects, finance access to payroll — without a single spreadsheet changing hands.",
  },
  {
    icon: PieChart,
    title: "Reporting that ties it together",
    body: "Margin per project, utilization per engineer, pipeline-to-delivery time. Numbers that come from one system, not three.",
  },
  {
    icon: Zap,
    title: "Fast, not bloated",
    body: "No thirty-step onboarding wizard. Invite your team, import a project, and you're useful in an afternoon.",
  },
  {
    icon: Globe2,
    title: "API-first",
    body: "A documented REST API covers every surface. Keep the tools you already use for the specialty cases.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-navy-50/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            Why MyTaskly
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            The boring parts done well
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            We care about the parts of running a business that aren&apos;t fun
            to demo but are expensive to get wrong.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-navy-100 bg-white p-7 transition hover:shadow-card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-100 text-navy-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
