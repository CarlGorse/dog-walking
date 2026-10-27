import { siteConfig } from "./site-config";

export default function SiteFooter({ showDbsBadge = false }: { showDbsBadge?: boolean }) {
  return (
    <footer className={`bg-stone-900 text-white ${showDbsBadge ? "py-10" : "py-4"}`}>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center lg:px-8">
        {showDbsBadge && (
          <>
            <span
              className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-600/20 text-6xl ring-1 ring-emerald-400/40"
              aria-hidden="true"
            >
              🪪
            </span>
            <p className="text-lg font-bold sm:text-xl">DBS checked</p>
          </>
        )}
        <div className="flex w-full items-center justify-between">
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.name} on Facebook`}
            className="text-stone-300 transition hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
              <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
            </svg>
          </a>
          <p className="text-sm text-stone-400">Website by Carl</p>
        </div>
      </div>
    </footer>
  );
}