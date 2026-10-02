import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { productMetadata } from "@/components/ProductLayout";
import { guides } from "@/lib/editorial";

export const metadata: Metadata = productMetadata(
  "Learn",
  "How MyTaskly fits together, and short tutorials for boards, the pipeline, and inviting someone with a reporting manager.",
  "/learn",
);

export default function LearnPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
            How it works
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            MyTaskly is one company directory with the modules you turn on. These guides walk through
            the shape of the product and the first jobs people do in it.
          </p>
          <ul className="mt-10 space-y-4">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link href={`/learn/${guide.slug}`} className="block rounded-3xl border border-navy-100 p-6 hover:bg-paper">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-600">{guide.kicker}</p>
                  <h2 className="mt-2 text-xl font-semibold text-navy-950">{guide.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{guide.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
