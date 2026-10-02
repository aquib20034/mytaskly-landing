import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { BoardScreen } from "@/components/ProductFrame";
import { StoryRail } from "@/components/StoryRail";
import { JsonLd } from "@/components/JsonLd";
import { REGISTER_URL } from "@/lib/config";
import { fetchPublicPlans } from "@/lib/api/plans";
import { faqJsonLd, faqs, productPages } from "@/lib/site";

const ribbon = [
  "Kanban boards",
  "Timelines",
  "Leads and deals",
  "Sales dashboard",
  "Attendance",
  "Leave",
  "Payroll",
  "Team chat",
  "Roles",
  "Client portal",
];

const hasPlatformImage = fs.existsSync(path.join(process.cwd(), "public", "platform.png"));

const tones = [
  "bg-[#e8f1ff]",
  "bg-[#efe8ff]",
  "bg-[#fff1dc]",
  "bg-[#e5f8ee]",
];

export default async function Page() {
  let plans: Awaited<ReturnType<typeof fetchPublicPlans>> = [];
  try {
    plans = await fetchPublicPlans();
  } catch {
    plans = [];
  }

  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Header />
      <main>
        <section className="overflow-hidden bg-white">
          <div className="mx-auto max-w-6xl px-6 pb-8 pt-16 sm:pt-20">
            <p className="text-sm font-semibold text-navy-600">
              Projects, CRM, HR, and chat
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-navy-950 sm:text-7xl">
              One workspace for the whole company.
            </h1>
            <p className="mt-5 max-w-xl text-2xl font-medium leading-snug text-ink-muted">
              Less switching. Less spend. The work stays in context.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={REGISTER_URL}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-navy-950 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-800"
              >
                Start free
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-sm leading-relaxed text-ink-muted">
                Create a workspace.
                <br />
                Turn on the modules you need.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 pb-16">
            {hasPlatformImage ? (
              <img
                src="/platform.png"
                alt="The MyTaskly workspace"
                className="w-full rounded-2xl border border-navy-100 shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
              />
            ) : (
              <BoardScreen />
            )}
          </div>
          <div className="overflow-hidden border-y border-navy-100 bg-paper py-4">
            <div className="animate-marquee flex w-max gap-3 px-6">
              {[...ribbon, ...ribbon].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="rounded-full border border-navy-100 bg-white px-3 py-1 text-sm font-medium text-navy-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              Every job the stack was doing, on one permission model.
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {productPages.map((page, index) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`group rounded-[28px] p-6 transition hover:-translate-y-1 ${tones[index]}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-700">
                    {page.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy-950">
                    {page.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                    {page.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-900">
                    Open {page.kicker}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white pb-8 pt-4">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              The same system, four different desks.
            </h2>
            <div className="mt-8">
              <StoryRail />
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-navy-950 sm:text-6xl sm:leading-[0.98]">
              Separate apps bill per person.
              <span className="mt-2 block text-ink-muted">This does not have to.</span>
            </h2>
            <div className="mt-10">
              <SavingsCalculator plans={plans} />
            </div>
          </div>
        </section>

        <section className="bg-paper py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-4xl font-semibold tracking-tight text-navy-950">
              Answers, in short
            </h2>
            <dl className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.slice(0, 4).map((item) => (
                <div key={item.q} className="rounded-3xl bg-white p-6 shadow-card">
                  <dt className="text-lg font-semibold text-navy-950">{item.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-muted">{item.a}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/faq"
              className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-navy-700"
            >
              All questions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="bg-navy-950 py-16 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Bring the stack onto one screen.
              </h2>
              <p className="mt-2 text-navy-100/80">
                Projects, clients, and people. Shared from the first invite.
              </p>
            </div>
            <a
              href={REGISTER_URL}
              className="inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-navy-950"
            >
              Start free
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
