import ManWalkingDogIcon from "./man-walking-dog-icon";
import { siteConfig } from "../../_config/site-config";

export default function LogoBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <path id="badge-arc" d="M 12 52 A 38 38 0 0 1 88 52" />
        <path id="badge-arc-bottom" d="M 8.5 50 A 41.5 41.5 0 0 0 91.5 50" />
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
        className="fill-amber-900 font-black tracking-tight"
        fontSize="9"
        textAnchor="middle"
      >
        <textPath href="#badge-arc" startOffset="50%">
          {siteConfig.name}
        </textPath>
      </text>
      <text
        className="fill-amber-700 font-bold uppercase"
        fontSize="5.5"
        letterSpacing="0.35"
        textAnchor="middle"
      >
        <textPath href="#badge-arc-bottom" startOffset="50%">
          {siteConfig.tagline}
        </textPath>
      </text>
      <ManWalkingDogIcon x="15" y="18" width="66" height="66" />
    </svg>
  );
}
