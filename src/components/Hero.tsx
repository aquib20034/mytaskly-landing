import { ArrowRight, Sparkles } from "lucide-react";
import { REGISTER_URL } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 grid-pattern fade-mask opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[-4rem] h-[28rem] w-[64rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-navy-600/40 via-accent-500/25 to-navy-500/40 blur-3xl animate-pulse-glow animate-drift"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-navy-100 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent-400" />
            Project Management · CRM · HR — in one place
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            The operating system for{" "}
            <span className="gradient-text animate-sheen">software houses.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-100/80">
            Stop stitching together five tools to run a twenty-person team.
            MyTaskly brings your projects, clients, and people into one
            platform — so the context stops getting lost.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={REGISTER_URL}
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-navy-900 shadow-cta transition hover:-translate-y-0.5 hover:bg-navy-50 hover:shadow-glow"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex h-12 items-center rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              See pricing
            </a>
          </div>

          <p className="mt-4 text-xs text-navy-100/60">
            No credit card required · Cancel anytime
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-navy-400/40 via-accent-500/40 to-navy-400/40 opacity-60 blur-sm animate-sheen"
            aria-hidden
          />
          <div className="relative rounded-2xl border border-white/10 bg-navy-900/60 p-2 shadow-2xl backdrop-blur">
            <div className="rounded-xl bg-navy-950 p-6 sm:p-8">
              <MockDashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MockDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-12">
      <div className="md:col-span-4 space-y-3">
        <MockCard title="Projects" value="24 active" accent />
        <MockCard title="Open deals" value="$142k pipeline" />
        <MockCard title="Team on leave" value="3 this week" />
      </div>
      <div className="md:col-span-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-navy-100/60">
            Active sprint
          </span>
          <span className="text-xs text-navy-100/60">Week 3 of 4</span>
        </div>
        <div className="space-y-3">
          {[
            { name: "Acme redesign", progress: 72, status: "On track" },
            { name: "Northwind API v2", progress: 41, status: "At risk" },
            { name: "Orion mobile", progress: 88, status: "On track" },
          ].map((p) => (
            <div key={p.name}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-white">{p.name}</span>
                <span
                  className={
                    p.status === "At risk"
                      ? "text-xs text-amber-300"
                      : "text-xs text-navy-100/60"
                  }
                >
                  {p.status}
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className={
                    p.status === "At risk"
                      ? "h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-300"
                      : "h-full rounded-full bg-gradient-to-r from-navy-400 to-accent-400"
                  }
                  style={{ width: `${p.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockCard({
  title,
  value,
  accent,
}: {
  title: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 transition ${
        accent
          ? "border-navy-300/30 bg-gradient-to-br from-navy-300/15 to-accent-500/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-navy-100/60">
        {title}
      </div>
      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}
