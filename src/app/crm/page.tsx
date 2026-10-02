import type { Metadata } from "next";
import { ProductLayout, productMetadata } from "@/components/ProductLayout";
import { productPages } from "@/lib/site";

const page = productPages[1];

export const metadata: Metadata = productMetadata(
  "CRM",
  "MyTaskly CRM tracks leads, contacts, companies, and deals, with follow-ups, email, a sales dashboard, and an optional scraping agent.",
  "/crm",
);

export default function CrmPage() {
  return (
    <ProductLayout
      kicker={page.kicker}
      title={page.title}
      lede="MyTaskly CRM is the pipeline inside the same workspace as delivery. When a company turns CRM off, the sales menu and dashboard disappear for every role."
      points={page.points}
      path="/crm"
    />
  );
}
