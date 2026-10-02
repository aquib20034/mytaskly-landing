import Link from "next/link";
import { Logo } from "./Logo";
import { LOGIN_URL, REGISTER_URL } from "@/lib/config";

const groups = {
  Product: [
    { label: "Overview", href: "/product" },
    { label: "Projects", href: "/projects" },
    { label: "CRM", href: "/crm" },
    { label: "HR", href: "/hr" },
    { label: "Chat", href: "/chat" },
  ],
  Learn: [
    { label: "How it works", href: "/learn" },
    { label: "Tutorials", href: "/learn/run-a-project-board" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Changelog", href: "/changelog" },
  ],
  Company: [
    { label: "Savings", href: "/savings" },
    { label: "Pricing", href: "/pricing" },
  ],
  Account: [
    { label: "Sign in", href: LOGIN_URL },
    { label: "Create account", href: REGISTER_URL },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Projects, clients, and people in one workspace. Built for software
              houses and small businesses.
            </p>
          </div>
          {Object.entries(groups).map(([group, items]) => (
            <div key={group}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-navy-900">
                {group}
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith("http") ? (
                      <a href={item.href} className="hover:text-navy-900">
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className="hover:text-navy-900">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-navy-100 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} MyTaskly. All rights reserved.</span>
          <span>One system for the work, the pipeline, and the people.</span>
        </div>
      </div>
    </footer>
  );
}
