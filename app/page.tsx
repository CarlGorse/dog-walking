import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import AvailabilitySection from "./components/availability-section";
import ContactSection from "./components/contact-section";
import CountrysideSection from "./components/countryside-section";
import HeroImageSection from "./components/hero-image-section";
import IntroSection from "./components/intro-section";
import ServicesSection from "./components/services-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fcfaf6,_#f7f4ef_30%,_#f0ece5_100%)] text-stone-800">
      <SiteHeader />
      <HeroImageSection />
      <IntroSection />
      <CountrysideSection />
      <ServicesSection />
      <AvailabilitySection />
      <ContactSection />

      <SiteFooter showDbsBadge />
    </main>
  );
}
