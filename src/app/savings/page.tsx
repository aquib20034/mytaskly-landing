import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { JsonLd } from "@/components/JsonLd";
import { productMetadata } from "@/components/ProductLayout";
import { fetchPublicPlans } from "@/lib/api/plans";
import { breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = productMetadata(
  "Savings",
  "See how a project tool, CRM, HR suite, and chat add up per person, and how one MyTaskly workspace changes that bill.",
  "/savings",
);

export default async function SavingsPage() {
  let plans: Awaited<ReturnType<typeof fetchPublicPlans>> = [];
  try {
    plans = await fetchPublicPlans();
  } catch {
    plans = [];
  }

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Savings", path: "/savings" },
        ])}
      />
      <Header />
      <main>
        <section className="bg-paper">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-navy-950 sm:text-6xl sm:leading-[0.98]">
              What the stack costs before one workspace.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Most teams pay per person for a project board, a CRM, an HR
              product, and chat. The calculator uses those published list
              prices beside the MyTaskly workspace plans.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <SavingsCalculator plans={plans} />
        </section>
      </main>
      <Footer />
    </>
  );
}
