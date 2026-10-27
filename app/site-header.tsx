import Link from "next/link";
import HomeLink from "./home-link";
import LogoBadge from "./logo-badge";
import MobileMenu from "./mobile-menu";
import { homeLinks } from "./navigation-links";
import { siteConfig } from "./site-config";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-amber-200 bg-amber-50/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 xl:flex-wrap xl:gap-y-2 xl:py-3 lg:px-8">
      <HomeLink aria-label={`${siteConfig.name} home`} className="flex items-center gap-3">
        <LogoBadge className="h-20 w-20 shrink-0 drop-shadow-sm" />
        <span>
          <span className="block text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">{siteConfig.name}</span>
          <span className="block pl-1.5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-amber-700">{siteConfig.tagline}</span>
        </span>
      </HomeLink>

      <nav aria-label="Main navigation" className="hidden items-center gap-1 whitespace-nowrap text-sm font-semibold text-stone-700 xl:order-3 xl:flex xl:basis-full xl:justify-center xl:border-t xl:border-amber-200 xl:pt-2">
        <HomeLink className="rounded-full px-4 py-2 transition hover:bg-amber-100 hover:text-stone-900">Home</HomeLink>
        {homeLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 transition hover:bg-amber-100 hover:text-stone-900">{link.label}</Link>
        ))}
        <Link href="/availability" className="rounded-full px-4 py-2 transition hover:bg-amber-100 hover:text-stone-900">Availability</Link>
        <Link href="/about" className="rounded-full px-4 py-2 transition hover:bg-amber-100 hover:text-stone-900">About us</Link>
        <Link href="/faqs" className="rounded-full px-4 py-2 transition hover:bg-amber-100 hover:text-stone-900">FAQs</Link>
      
      <Link href="/blog" className="rounded-full px-4 py-2 transition hover:bg-amber-100 hover:text-stone-900">Blog</Link>
        </nav>

      <MobileMenu />

      <a
        href="https://wa.me/4475817983387"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-500 xl:inline-flex"
      >
        Book on WhatsApp
      </a>
      </div>
    </header>
  );
}