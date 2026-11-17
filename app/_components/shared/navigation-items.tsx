"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { navigationLinks } from "../../_config/navigation-links";
import HomeLink, { homeHashClearedEvent } from "./home-link";

function subscribeToHashChange(notify: () => void) {
  window.addEventListener("hashchange", notify);
  window.addEventListener(homeHashClearedEvent, notify);
  return () => {
    window.removeEventListener("hashchange", notify);
    window.removeEventListener(homeHashClearedEvent, notify);
  };
}

const readHash = () => window.location.hash;
const readServerHash = () => "";

export default function NavigationItems({
  variant,
  onSelect,
}: {
  variant: "desktop" | "mobile";
  onSelect?: () => void;
}) {
  const pathname = usePathname();
  const hash = useSyncExternalStore(subscribeToHashChange, readHash, readServerHash);
  const links = navigationLinks[variant];
  const homeSection = links.find(({ href }) => href === `/${hash}`);
  const currentHref = pathname === "/" ? homeSection?.href ?? "/" : pathname;
  const baseStyle = variant === "desktop"
    ? "rounded-full px-4 py-2 transition"
    : "rounded-xl px-4 py-3 text-sm font-semibold transition";
  const highlightStyle = variant === "desktop"
    ? "hover:bg-amber-100 [&[aria-current]]:bg-amber-100"
    : "hover:bg-amber-50 [&[aria-current]]:bg-amber-50";

  return links.map(({ href, label }) => {
    const isSection = href.startsWith("/#");
    const isCurrent = href === currentHref;
    const ariaCurrent: "location" | "page" | undefined =
      isCurrent ? (isSection ? "location" : "page") : undefined;
    const props = {
      "aria-current": ariaCurrent,
      className: `${baseStyle} ${highlightStyle} text-stone-700 hover:text-stone-900 [&[aria-current]]:text-stone-900 outline-hidden focus-visible:underline focus-visible:underline-offset-4`,
      onClick: onSelect,
    };

    if (href === "/") return <HomeLink key={href} {...props}>{label}</HomeLink>;

    // Native same-page links emit hashchange; Next's client routing uses pushState.
    if (isSection && pathname === "/") {
      return <a key={href} href={href} {...props}>{label}</a>;
    }

    return <Link key={href} href={href} {...props}>{label}</Link>;
  });
}
