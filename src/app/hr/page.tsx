import type { Metadata } from "next";
import { ProductLayout, productMetadata } from "@/components/ProductLayout";
import { productPages } from "@/lib/site";

const page = productPages[2];

export const metadata: Metadata = productMetadata(
  "HR",
  "MyTaskly HR covers employees, departments, attendance, shifts, leave, payroll, recruitment, and reporting managers.",
  "/hr",
);

export default function HrPage() {
  return (
    <ProductLayout
      kicker="HR"
      title={page.title}
      lede="MyTaskly HR is the people system next to the work. Invites can require a reporting manager, and attendance, leave, and payroll stay with the same employee record used on projects."
      points={page.points}
      path="/hr"
    />
  );
}
