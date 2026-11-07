import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { productMetadata } from "@/components/ProductLayout";
import { CONTACT_EMAIL, DEMO_URL, REGISTER_URL } from "@/lib/config";
import { breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = productMetadata(
  "Contact",
  "Talk to the MyTaskly team: book a 15-minute setup call or email us about plans, setup, and moving your data.",
  "/contact",
);

export default function ContactPage() {
  const hasBooking = DEMO_URL !== "/contact";
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Header />
      <main className="bg-paper">
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
            Talk to the MyTaskly team.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Questions about plans, setup, or moving your data from another tool?
            Email us, or book a short call and we will walk you through it.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {hasBooking ? (
              <a
                href={DEMO_URL}
                data-track="book_call_contact"
                className="rounded-3xl bg-white p-6 shadow-card transition hover:-translate-y-0.5"
              >
                <p className="text-lg font-semibold text-navy-950">Book a 15-minute setup call</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  We set up your workspace with you, live, and answer questions.
                </p>
              </a>
            ) : null}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              data-track="email_contact"
              className="rounded-3xl bg-white p-6 shadow-card transition hover:-translate-y-0.5"
            >
              <p className="text-lg font-semibold text-navy-950">Email us</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{CONTACT_EMAIL}</p>
            </a>
            <a
              href={REGISTER_URL}
              data-track="start_free_contact"
              className="rounded-3xl bg-white p-6 shadow-card transition hover:-translate-y-0.5"
            >
              <p className="text-lg font-semibold text-navy-950">Get started</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Create a workspace and turn on the modules you need.
              </p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
