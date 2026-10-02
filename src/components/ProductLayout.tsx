import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { REGISTER_URL, SITE_URL } from "@/lib/config";
import { breadcrumbJsonLd, productPages } from "@/lib/site";

export function productMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · MyTaskly`,
      description,
      url: `${SITE_URL}${path}`,
    },
  };
}

export function ProductLayout({
  kicker,
  title,
  lede,
  points,
  path,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  points: readonly string[];
  path: string;
  children?: ReactNode;
}) {
  const benefits = productPages.find((page) => page.href === path)?.benefits;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: kicker, path },
        ])}
      />
      <Header />
      <main>
        <section className="overflow-hidden bg-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-600">
                {kicker}
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-navy-950 sm:text-6xl sm:leading-[0.98]">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{lede}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={REGISTER_URL}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-navy-950 px-5 text-sm font-semibold text-white hover:bg-navy-800"
                >
                  Start free
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/savings"
                  className="inline-flex h-11 items-center rounded-full border border-navy-200 px-5 text-sm font-semibold text-navy-900 hover:bg-paper"
                >
                  Compare the stack
                </Link>
              </div>
            </div>
            <div className="rounded-[28px] bg-[#eef2ff] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-600">
                Inside the workspace
              </p>
              <ul className="mt-4 space-y-3">
                {points.slice(0, 3).map((point) => (
                  <li key={point} className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-navy-950 shadow-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-navy-950">
            What this module includes
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-navy-100 bg-white px-5 py-4 text-sm leading-relaxed text-navy-900 shadow-card"
              >
                {point}
              </li>
            ))}
          </ul>
          {benefits ? (
            <>
              <h2 className="mt-14 text-2xl font-semibold tracking-tight text-navy-950">
                Why teams keep it here
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="rounded-2xl bg-paper px-5 py-4 text-sm leading-relaxed text-navy-900">
                    {benefit}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}
