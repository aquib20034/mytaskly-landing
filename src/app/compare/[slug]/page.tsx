import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { TrialTerms } from "@/components/TrialTerms";
import { comparisons, findComparison } from "@/lib/compare";
import { DEMO_URL, REGISTER_URL, SITE_URL } from "@/lib/config";
import { breadcrumbJsonLd } from "@/lib/site";

export function generateStaticParams() {
  return comparisons.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = findComparison(slug);
  if (!item) return { title: "Compare" };
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/compare/${item.slug}` },
    openGraph: { title: `${item.title} · MyTaskly`, description: item.description, url: `${SITE_URL}/compare/${item.slug}` },
  };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = findComparison(slug);
  if (!item) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: item.title, path: `/compare/${item.slug}` },
        ])}
      />
      <Header />
      <main className="bg-white">
        <section className="mx-auto max-w-5xl px-6 pb-12 pt-20">
          <p className="text-sm font-semibold text-navy-600">Compare</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-navy-950 sm:text-6xl">{item.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-muted">{item.answer}</p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="overflow-x-auto rounded-[28px] border border-navy-100">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-paper text-navy-950">
                <tr>
                  <th className="px-5 py-4 font-semibold"> </th>
                  <th className="px-5 py-4 font-semibold">MyTaskly</th>
                  <th className="px-5 py-4 font-semibold">{item.name}</th>
                </tr>
              </thead>
              <tbody>
                {item.rows.map((row) => (
                  <tr key={row.label} className="border-t border-navy-100 align-top">
                    <th className="px-5 py-4 font-semibold text-navy-950">{row.label}</th>
                    <td className="px-5 py-4 text-navy-900">{row.mytaskly}</td>
                    <td className="px-5 py-4 text-ink-muted">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            {item.name} details from the{" "}
            {item.source.url.startsWith("http") ? (
              <a href={item.source.url} className="underline underline-offset-2" rel="noopener" target="_blank">
                {item.source.label}
              </a>
            ) : (
              <Link href={item.source.url} className="underline underline-offset-2">
                {item.source.label}
              </Link>
            )}
            . Prices change; check the vendor&apos;s page before you decide. MyTaskly prices are on the{" "}
            <Link href="/pricing" className="underline underline-offset-2">
              pricing page
            </Link>
            .
          </p>
        </section>

        <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-16 md:grid-cols-2">
          <div className="rounded-[28px] bg-paper p-7">
            <h2 className="text-xl font-semibold text-navy-950">{`When ${item.name} is the better choice`}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
              {item.chooseThem.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-navy-950 p-7 text-white">
            <h2 className="text-xl font-semibold">When MyTaskly fits better</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-navy-100">
              {item.chooseUs.map((line) => (
                <li key={line} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-accent-400" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="rounded-[32px] border border-navy-100 p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-navy-950">Try it on your own team.</h2>
            <p className="mt-3 max-w-2xl text-base text-ink-muted">
              Start free, or book a 15-minute call and we&apos;ll set up your workspace with you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={REGISTER_URL} data-track={`start_free_compare_${item.slug}`} className="inline-flex h-12 items-center rounded-full bg-navy-950 px-6 text-sm font-semibold text-white hover:bg-navy-800">
                Start free
              </a>
              <a href={DEMO_URL} data-track={`book_call_compare_${item.slug}`} className="inline-flex h-12 items-center rounded-full border border-navy-200 px-6 text-sm font-semibold text-navy-950 hover:border-navy-400">
                Book a setup call
              </a>
            </div>
            <TrialTerms className="mt-3" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
