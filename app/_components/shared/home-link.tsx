"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

export const homeHashClearedEvent = "home-hash-cleared";

export default function HomeLink({ onClick, ...props }: Omit<ComponentProps<typeof Link>, "href">) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    // Link won't scroll when already on "/" because the sticky header stays in view.
    if (window.location.pathname === "/") {
      event.preventDefault();
      const hadHash = Boolean(window.location.hash);
      window.history.replaceState(null, "", "/");
      if (hadHash) window.dispatchEvent(new Event(homeHashClearedEvent));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return <Link href="/" {...props} onClick={handleClick} />;
}
