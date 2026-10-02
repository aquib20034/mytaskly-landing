import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/site";
import type { Article } from "@/lib/editorial";

export function ArticlePage({
  article,
  section,
  sectionHref,
}: {
  article: Article;
  section: string;
  sectionHref: string;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: section, path: sectionHref },
          { name: article.title, path: `${sectionHref}/${article.slug}` },
        ])}
      />
      <Header />
      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-600">
            {article.kicker}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-950">{article.title}</h1>
          <p className="mt-3 text-sm text-ink-muted">{article.date}</p>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-muted">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link href={sectionHref} className="mt-10 inline-block text-sm font-semibold text-navy-700">
            Back to {section}
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
