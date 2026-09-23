import { Logo } from "./Logo";
import { LOGIN_URL, REGISTER_URL } from "@/lib/config";

const links = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Modules", href: "/#modules" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Changelog", href: "/changelog" },
    { label: "FAQ", href: "/#faq" },
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
    <footer className="border-t border-navy-100 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-muted">
              The operating system for software houses and small businesses.
            </p>
          </div>
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-navy-900">
                {group}
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-navy-900">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-navy-100 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} MyTaskly. All rights reserved.
          </span>
          <span>Made for teams that ship.</span>
        </div>
      </div>
    </footer>
  );
}
