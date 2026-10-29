import type { Metadata } from "next";
import WalkCalendar from "../walk-calendar";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Availability",
  description: "Our winter schedule: long country walks and short local walks, with spaces available.",
};

export default function AvailabilityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-amber-100 text-stone-800">
      <SiteHeader />
      <WalkCalendar />
      <SiteFooter />
    </main>
  );
}
