"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LOGIN_URL, REGISTER_URL } from "@/lib/config";
import { productPages } from "@/lib/site";

const links = [
  { href: "/savings", label: "Savings" },
  { href: "/pricing", label: "Pricing" },
];

const learnLinks = [
  { href: "/learn", label: "How it works", detail: "Company, people, and modules" },
  { href: "/learn/run-a-project-board", label: "Tutorials", detail: "Boards, pipeline, and invites" },
  { href: "/blog", label: "Blog", detail: "Cost, modules, and workflow" },
  { href: "/faq", label: "FAQ", detail: "Short answers" },
];

const blurbs: Record<string, string> = {
  Projects: "Boards, lists, and timelines",
  CRM: "Leads, deals, and the sales dashboard",
  People: "Directory, attendance, leave, and payroll",
  Chat: "Messages on the same directory",
};

const productLinks = [
  { href: "/product", label: "Overview", detail: "Every module in one workspace" },
  ...productPages.map((page) => ({
    href: page.href,
    label: page.kicker,
    detail: blurbs[page.kicker] ?? page.title,
  })),
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setProductOpen(false);
        setLearnOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="MyTaskly home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav ref={menuRef} className="hidden items-center gap-1 text-sm font-medium text-ink-muted lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 hover:bg-paper hover:text-navy-950"
              aria-expanded={productOpen}
              onClick={() => setProductOpen((value) => !value)}
            >
              Product
              <ChevronDown className={`h-3.5 w-3.5 transition ${productOpen ? "rotate-180" : ""}`} />
            </button>
            {productOpen ? (
              <div className="absolute left-0 top-full z-50 w-[460px] pt-2">
                <div className="rounded-2xl border border-navy-100 bg-white p-2 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                  {productLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2.5 hover:bg-paper"
                      onClick={() => setProductOpen(false)}
                    >
                      <span className="block text-sm font-semibold text-navy-950">{item.label}</span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">
                        {item.detail}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setLearnOpen(true)}
            onMouseLeave={() => setLearnOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 hover:bg-paper hover:text-navy-950"
              aria-expanded={learnOpen}
              onClick={() => setLearnOpen((value) => !value)}
            >
              Learn
              <ChevronDown className={`h-3.5 w-3.5 transition ${learnOpen ? "rotate-180" : ""}`} />
            </button>
            {learnOpen ? (
              <div className="absolute left-0 top-full z-50 w-[280px] pt-2">
                <div className="rounded-2xl border border-navy-100 bg-white p-2 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                  {learnLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2.5 hover:bg-paper"
                      onClick={() => setLearnOpen(false)}
                    >
                      <span className="block text-sm font-semibold text-navy-950">{item.label}</span>
                      <span className="mt-0.5 block text-xs text-ink-muted">{item.detail}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 hover:bg-paper hover:text-navy-950"
            >
              {item.label}
            </Link>
          ))}
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
            className="inline-flex h-9 items-center rounded-full bg-navy-950 px-4 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            Start free
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-navy-100 bg-white px-6 py-4 lg:hidden">
          <p className="px-2 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Product</p>
          <ul className="mt-1 space-y-1">
            {productLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-2 text-sm font-medium text-navy-900"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 px-2 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Learn</p>
          <ul className="mt-1 space-y-1">
            {learnLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-2 text-sm font-medium text-navy-900"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-3 space-y-1 border-t border-navy-100 pt-3">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-2 text-sm font-medium text-navy-900"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
