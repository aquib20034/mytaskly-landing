import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, productPages } from "@/lib/site";
import { productMetadata } from "@/components/ProductLayout";

export const metadata: Metadata = productMetadata(
  "Product",
  "MyTaskly covers projects, CRM, HR, chat, resources, inventory, a client portal, and developer tools. Turn modules on for each company.",
  "/product",
);

const extras = [
  ["Resources", "See who is allocated across projects before you promise a date."],
  ["Inventory", "Track stock beside the operations team that uses it."],
  ["Client portal", "Give a client a window into their work without a full seat."],
  ["Developer tools", "Keep engineering utilities next to the delivery board."],
  ["Roles", "Organization roles decide menus, dashboards, and who must name a reporting manager."],
  ["Modules", "A company can disable CRM, chat, or HR. The menu follows that switch."],
];

export default function ProductPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
        ])}
      />
      <Header />
      <main>
        <section className="bg-paper">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-600">
              Product
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              The whole operating picture, one permission model.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              MyTaskly is a workspace for software houses and small businesses.
              Projects, the pipeline, people operations, and chat share members
              and roles. Extra modules cover resources, inventory, a client
              portal, and developer tools.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-4 md:grid-cols-2">
            {productPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-3xl border border-navy-100 p-6 shadow-card hover:shadow-card-hover"
              >
                <h2 className="text-xl font-semibold text-navy-950">{page.kicker}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{page.summary}</p>
              </Link>
            ))}
          </div>
          <h2 className="mt-16 text-2xl font-semibold text-navy-950">Also in the workspace</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map(([title, body]) => (
              <li key={title} className="rounded-2xl bg-paper p-5">
                <h3 className="font-semibold text-navy-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
