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
  "Current MyTaskly workspace plans. Names and prices are loaded from the live plans list.",
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
