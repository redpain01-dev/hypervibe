"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, toolboxNav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-page items-center gap-6 px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight">HyperVibe</span>
          <span className="hidden text-[11px] font-semibold tracking-[0.14em] text-muted uppercase sm:inline">
            by {site.parent}
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-soft text-teal-dark"
                  : "text-ink hover:bg-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-2 h-4 w-px bg-line" aria-hidden />
          {toolboxNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm transition-colors ${
                isActive(item.href)
                  ? "bg-soft text-teal-dark"
                  : "text-muted hover:bg-soft hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="메뉴 열기"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 block h-0.5 w-4 bg-ink transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-4 bg-ink transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="mx-auto grid w-full max-w-page gap-1 px-6 py-4">
            {[...nav, ...toolboxNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-panel px-4 py-3 hover:bg-soft"
              >
                <span className="block font-semibold">{item.label}</span>
                <span className="block text-sm text-muted">{item.summary}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
