import Link from "next/link";
import { Logo } from "./Logo";
import { LOGIN_URL, REGISTER_URL } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="MyTaskly home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-muted md:flex">
          <a href="/#features" className="hover:text-navy-900">
            Features
          </a>
          <a href="/#modules" className="hover:text-navy-900">
            Modules
          </a>
          <a href="/#pricing" className="hover:text-navy-900">
            Pricing
          </a>
          <a href="/changelog" className="hover:text-navy-900">
            Changelog
          </a>
          <a href="/#faq" className="hover:text-navy-900">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={LOGIN_URL}
            className="hidden text-sm font-medium text-ink-muted hover:text-navy-900 sm:inline"
          >
            Sign in
          </a>
          <a
            href={REGISTER_URL}
            className="inline-flex h-9 items-center rounded-lg bg-navy-900 px-4 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            Start free
          </a>
        </div>
      </div>
    </header>
  );
}
