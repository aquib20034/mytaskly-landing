import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { productMetadata } from "@/components/ProductLayout";
import { posts } from "@/lib/editorial";

export const metadata: Metadata = productMetadata(
  "Blog",
  "Notes on what a tool stack costs, how MyTaskly modules work, and how a lead and a project share one directory.",
  "/blog",
);

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-ink-muted">
            How the workspace replaces a stack, and how the modules fit a software house.
          </p>
          <ul className="mt-10 space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block rounded-3xl border border-navy-100 p-6 hover:bg-paper">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-600">{post.kicker}</p>
                  <h2 className="mt-2 text-xl font-semibold text-navy-950">{post.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
