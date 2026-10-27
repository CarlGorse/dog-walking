import type { Metadata } from "next";
import WalkCalendar from "../walk-calendar";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Availability",
  description: "Check morning, afternoon, and evening walk availability.",
};

export default function AvailabilityPage() {
  return (
    <main className="min-h-screen bg-amber-100 text-stone-800">
      <SiteHeader />
      <WalkCalendar />
      <SiteFooter />
    </main>
  );
}
