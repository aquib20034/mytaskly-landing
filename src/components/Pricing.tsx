import { Check } from "lucide-react";
import { REGISTER_URL } from "@/lib/config";

type Tier = {
  name: string;
  price: number;
  tagline: string;
  seats: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    price: 49,
    tagline: "For small teams getting organized.",
    seats: "Up to 10 users",
    features: [
      "Project Management module",
      "CRM module",
      "Basic HR (attendance & leaves)",
      "5 GB file storage",
      "Email support",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Business",
    price: 99,
    tagline: "For growing software houses.",
    seats: "Up to 30 users",
    features: [
      "Everything in Starter",
      "Full HR module (payroll, shifts)",
      "Resource allocation",
      "Custom fields & pipelines",
      "50 GB file storage",
      "Priority support",
    ],
    cta: "Start with Business",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 199,
    tagline: "For established businesses.",
    seats: "Unlimited users",
    features: [
      "Everything in Business",
      "SSO (SAML, Google Workspace)",
      "Advanced permissions",
      "Audit log",
      "500 GB file storage",
      "Dedicated onboarding session",
      "SLA-backed uptime",
    ],
    cta: "Start with Enterprise",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Flat pricing. No per-seat penalty.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Pick a tier by team size. All plans include Project Management,
            CRM, and HR.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <PricingCard key={t.name} tier={t} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-muted">
          All plans billed monthly in USD. 14-day free trial, no card required.
        </p>
      </div>
    </section>
  );
}

function PricingCard({ tier }: { tier: Tier }) {
  const isFeatured = tier.highlighted;

  if (isFeatured) {
    return (
      <div className="relative md:-my-4">
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-navy-400 via-accent-500 to-navy-400 opacity-90 blur-[2px] animate-sheen"
          aria-hidden
        />
        <div className="relative flex h-full flex-col rounded-2xl bg-navy-950 p-8 text-white shadow-glow">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-navy-300 to-accent-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-950 shadow-cta">
            Most popular
          </span>
          <CardBody tier={tier} isFeatured />
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col rounded-2xl border border-navy-100 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-card-hover">
      <CardBody tier={tier} />
    </div>
  );
}

function CardBody({
  tier,
  isFeatured = false,
}: {
  tier: Tier;
  isFeatured?: boolean;
}) {
  return (
    <>
      <div>
        <h3
          className={`text-lg font-semibold ${
            isFeatured ? "text-white" : "text-navy-900"
          }`}
        >
          {tier.name}
        </h3>
        <p
          className={`mt-1 text-sm ${
            isFeatured ? "text-navy-100/70" : "text-ink-muted"
          }`}
        >
          {tier.tagline}
        </p>
      </div>

      <div className="mt-6 flex items-baseline gap-1">
        <span
          className={`text-4xl font-semibold ${
            isFeatured ? "text-white" : "text-navy-900"
          }`}
        >
          ${tier.price}
        </span>
        <span
          className={`text-sm ${
            isFeatured ? "text-navy-100/70" : "text-ink-muted"
          }`}
        >
          /month
        </span>
      </div>
      <p
        className={`mt-1 text-sm font-medium ${
          isFeatured ? "text-navy-200" : "text-navy-700"
        }`}
      >
        {tier.seats}
      </p>

      <ul
        className={`mt-6 space-y-3 text-sm ${
          isFeatured ? "text-navy-100/90" : "text-ink"
        }`}
      >
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                isFeatured ? "text-navy-300" : "text-navy-600"
              }`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={REGISTER_URL}
        className={
          isFeatured
            ? "mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-navy-900 transition hover:bg-navy-50"
            : "mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-navy-900 px-5 text-sm font-semibold text-white transition hover:bg-navy-800"
        }
      >
        {tier.cta}
      </a>
    </>
  );
}
