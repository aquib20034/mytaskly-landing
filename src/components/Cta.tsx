import { ArrowRight } from "lucide-react";
import { REGISTER_URL } from "@/lib/config";

export function Cta() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 grid-pattern fade-mask opacity-40"
            aria-hidden
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Stop running your business in five tabs.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-navy-100/80">
              Set up your workspace in under ten minutes. Invite your team
              whenever you&apos;re ready.
            </p>
            <a
              href={REGISTER_URL}
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-navy-900 shadow-cta transition hover:bg-navy-50"
            >
              Start your free trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-xs text-navy-100/60">
              14 days free · No credit card · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
