'use client';

import { useState } from "react";
import Link from "next/link";
import HomeLink from "./home-link";
import { homeLinks } from "./navigation-links";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative xl:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300 bg-amber-100 text-stone-800 transition hover:bg-amber-200"
      >
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span className="h-0.5 w-full rounded bg-current" />
          <span className="h-0.5 w-full rounded bg-current" />
          <span className="h-0.5 w-full rounded bg-current" />
        </span>
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute right-0 top-full z-50 mt-3 flex w-60 flex-col rounded-2xl border border-amber-200 bg-white p-2 shadow-xl"
        >
          <HomeLink
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-semibold text-stone-700 transition hover:bg-amber-50 hover:text-stone-900"
          >
            Home
          </HomeLink>
          {homeLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-stone-700 transition hover:bg-amber-50 hover:text-stone-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-semibold text-stone-700 transition hover:bg-amber-50 hover:text-stone-900"
          >
            About us
          </Link>
          <Link
            href="/availability"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-semibold text-stone-700 transition hover:bg-amber-50 hover:text-stone-900"
          >
            Availability
          </Link>
                    <Link
            href="/faqs"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-semibold text-stone-700 transition hover:bg-amber-50 hover:text-stone-900"
          >
            FAQs
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-semibold text-stone-700 transition hover:bg-amber-50 hover:text-stone-900"
          >
            Blog
          </Link>
          <a
            href="https://wa.me/4475817983387"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-1 rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            Book on WhatsApp
          </a>
        </nav>
      )}
    </div>
  );
}