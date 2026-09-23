import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mytaskly.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MyTaskly — The operating system for software houses",
  description:
    "One platform for Project Management, CRM, and HR. Built for software houses and small businesses that are done paying for three tools that don't talk to each other.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "MyTaskly — The operating system for software houses",
    description:
      "One platform for Project Management, CRM, and HR. Built for software houses and small businesses.",
    url: SITE_URL,
    siteName: "MyTaskly",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "MyTaskly" }],
  },
  twitter: {
    card: "summary",
    title: "MyTaskly — The operating system for software houses",
    description:
      "One platform for Project Management, CRM, and HR. Built for software houses and small businesses.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans antialiased`}
    >
      <body className="bg-white text-[color:var(--color-ink)]">{children}</body>
    </html>
  );
}
