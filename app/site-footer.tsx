import { siteConfig } from "./site-config";

export default function SiteFooter() {
  return (
    <footer className="mt-auto bg-stone-900 py-4 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 lg:px-8">
        <a
          href={siteConfig.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${siteConfig.name} on Facebook`}
          className="flex items-center gap-2 text-sm text-stone-300 transition hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
          </svg>
          <span>Facebook</span>
        </a>
        <p className="text-sm text-stone-400">Website by Carl</p>
      </div>
    </footer>
  );
}