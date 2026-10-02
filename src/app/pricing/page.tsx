import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { JsonLd } from "@/components/JsonLd";
import { productMetadata } from "@/components/ProductLayout";
import { breadcrumbJsonLd } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = productMetadata(
  "Pricing",
  "MyTaskly pricing for a workspace that includes projects, CRM, and HR. Compare monthly and yearly plans.",
  "/pricing",
);

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <Header />
      <main>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
