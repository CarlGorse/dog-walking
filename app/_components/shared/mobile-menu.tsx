'use client';

import { useState } from "react";
import NavigationItems from "./navigation-items";

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
          <NavigationItems variant="mobile" onSelect={() => setIsOpen(false)} />
        </nav>
      )}
    </div>
  );
}