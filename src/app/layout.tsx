import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { SITE_URL } from "@/lib/config";
import { organizationJsonLd, softwareJsonLd } from "@/lib/site";

const sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MyTaskly — Projects, CRM, HR, and chat in one workspace",
    template: "%s · MyTaskly",
  },
  description:
    "MyTaskly is the workspace software houses use instead of a project tool, a CRM, an HR suite, and a chat app. Shared people, shared permissions, one subscription.",
  keywords: [
    "MyTaskly",
    "project management",
    "CRM",
    "HR software",
    "team chat",
    "software house tools",
    "all-in-one workspace",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "MyTaskly — Projects, CRM, HR, and chat in one workspace",
    description:
      "Replace a stack of tools with one system for delivery, sales, people, and messages.",
    url: SITE_URL,
    siteName: "MyTaskly",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyTaskly — Projects, CRM, HR, and chat in one workspace",
    description:
      "Replace a stack of tools with one system for delivery, sales, people, and messages.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} font-sans antialiased`}>
      <body className="bg-white text-[color:var(--color-ink)]">
        <JsonLd data={[organizationJsonLd(), softwareJsonLd()]} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
