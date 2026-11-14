import AlfieIcon from "./alfie-icon";
import { siteConfig } from "./site-config";

export default function LogoBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <path id="badge-arc" d="M 12 52 A 38 38 0 0 1 88 52" />
        <path id="badge-arc-bottom" d="M 7 50 A 43 43 0 0 0 93 50" />
      </defs>
      <circle cx="50" cy="50" r="48" className="fill-amber-300" />
      <circle
        cx="50"
        cy="50"
        r="48"
        className="fill-none stroke-amber-100"
        strokeWidth="3"
      />
      <circle cx="50" cy="52" r="32" className="fill-amber-200" />
      <text
        className="fill-amber-900 font-black uppercase"
        fontSize="8"
        letterSpacing="0.6"
        textAnchor="middle"
      >
        <textPath href="#badge-arc" startOffset="50%">
          {siteConfig.name}
        </textPath>
      </text>
      <text
        className="fill-amber-900 font-bold uppercase"
        fontSize="6.5"
        letterSpacing="1.2"
        textAnchor="middle"
      >
        <textPath href="#badge-arc-bottom" startOffset="50%">
          {siteConfig.tagline}
        </textPath>
      </text>
      <AlfieIcon x="18" y="23" width="64" height="64" />
    </svg>
  );
}
