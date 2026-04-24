import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <>
      <Header />
      <main className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
            <h1 className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-ink-muted">
            Last updated: {lastUpdated}
          </p>

          <div className="prose prose-navy mt-10 max-w-none text-[15px] leading-relaxed text-ink [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy-900 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-navy-900 [&_p]:mt-3 [&_p]:text-ink-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-ink-muted [&_li]:mt-1 [&_a]:text-navy-700 [&_a]:underline">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
