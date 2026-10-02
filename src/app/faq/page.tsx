import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { productMetadata } from "@/components/ProductLayout";
import { breadcrumbJsonLd, faqJsonLd, faqs } from "@/lib/site";

export const metadata: Metadata = productMetadata(
  "FAQ",
  "Answers about MyTaskly: what it replaces, how modules work, who it is for, and how the cost compares with separate tools.",
  "/faq",
);

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <Header />
      <main className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-950">
            Questions about MyTaskly
          </h1>
          <p className="mt-4 text-lg text-ink-muted">
            Short answers for teams comparing one workspace with a stack of
            project, CRM, HR, and chat products.
          </p>
          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-3xl bg-white p-6 shadow-card">
                <h2 className="text-lg font-semibold text-navy-950">{item.q}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
