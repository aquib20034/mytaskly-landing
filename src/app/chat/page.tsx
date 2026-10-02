import type { Metadata } from "next";
import { ProductLayout, productMetadata } from "@/components/ProductLayout";
import { productPages } from "@/lib/site";

const page = productPages[3];

export const metadata: Metadata = productMetadata(
  "Chat",
  "MyTaskly chat is direct messages and groups for the same organization, with unread counts, and it can be turned off per company.",
  "/chat",
);

export default function ChatPage() {
  return (
    <ProductLayout
      kicker={page.kicker}
      title={page.title}
      lede="MyTaskly chat replaces a separate messenger for day-to-day team conversation. It uses organization members, and a company can switch the module off."
      points={page.points}
      path="/chat"
    />
  );
}
