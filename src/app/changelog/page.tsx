import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CHANGELOG, KIND_LABEL, type ChangelogItem } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog — MyTaskly",
  description:
    "What’s new in MyTaskly — product updates and recent release notes.",
};

function KindBadge({ kind }: { kind: ChangelogItem["kind"] }) {
  const styles: Record<ChangelogItem["kind"], string> = {
    new: "bg-emerald-50 text-emerald-800 ring-emerald-200/80",
    improved: "bg-sky-50 text-sky-800 ring-sky-200/80",
    fixed: "bg-amber-50 text-amber-900 ring-amber-200/80",
    security: "bg-rose-50 text-rose-800 ring-rose-200/80",
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${styles[kind]}`}
    >
      {KIND_LABEL[kind]}
    </span>
  );
}

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <main className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_28%)]">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            Releases
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Changelog
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-muted">
            What we shipped — the same way an App Store update tells you what
            changed in this deployment.
          </p>

          <div className="relative mt-14 space-y-12">
            <div
              className="absolute left-[11px] top-3 bottom-3 hidden w-px bg-navy-100 sm:block"
              aria-hidden
            />

            {CHANGELOG.map((release) => (
              <article
                key={release.version}
                className="relative sm:pl-10"
                id={`v${release.version}`}
              >
                <div
                  className="absolute left-0 top-1.5 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-navy-200 bg-white sm:flex"
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-navy-700" />
                </div>

                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-8">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="text-xl font-semibold tracking-tight text-navy-900">
                      {release.title}
                    </h2>
                    <span className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-semibold text-navy-700">
                      {release.version}
                    </span>
                  </div>
                  <time
                    dateTime={release.dateIso}
                    className="mt-1 block text-sm text-ink-muted"
                  >
                    {release.date}
                  </time>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                    {release.summary}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {release.items.map((item) => (
                      <li
                        key={`${release.version}-${item.kind}-${item.text}`}
                        className="flex gap-3 text-[15px] leading-snug text-navy-900"
                      >
                        <KindBadge kind={item.kind} />
                        <span className="min-w-0 pt-0.5 text-ink">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-14 text-center text-sm text-ink-muted">
            Looking for the product?{" "}
            <Link href="/" className="font-medium text-navy-700 hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
