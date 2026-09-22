import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Modules } from "@/components/Modules";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

/** Always hit the API for plans — do not bake a failed pricing fetch into static HTML. */
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Modules />
        <Features />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
