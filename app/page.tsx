import SiteHeader from "./_components/shared/site-header";
import SiteFooter from "./_components/shared/site-footer";
import AvailabilitySection from "./_components/home/availability-section";
import ContactSection from "./_components/home/contact-section";
import CountrysideSection from "./_components/home/countryside-section";
import HeroImageSection from "./_components/home/hero-image-section";
import IntroSection from "./_components/home/intro-section";
import PartTimeSection from "./_components/home/part-time-section";
import ServicesSection from "./_components/home/services-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fcfaf6,_#f7f4ef_30%,_#f0ece5_100%)] text-stone-800">
      <SiteHeader />
      <HeroImageSection />
      <IntroSection />
      <PartTimeSection />
      <CountrysideSection />
      <ServicesSection />
      <AvailabilitySection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
